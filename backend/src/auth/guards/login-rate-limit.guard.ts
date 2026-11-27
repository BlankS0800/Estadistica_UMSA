import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';

interface AttemptRecord {
  count: number;
  resetAt: number;
}

const WINDOW_MS = 15 * 60 * 1000; // 15 minutos
const MAX_ATTEMPTS = 10;

@Injectable()
export class LoginRateLimitGuard implements CanActivate {
  private readonly attempts = new Map<string, AttemptRecord>();

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const ip = this.getClientIp(request);
    const now = Date.now();

    // Limpieza periódica de registros expirados
    if (this.attempts.size > 1000) {
      for (const [key, value] of this.attempts.entries()) {
        if (value.resetAt <= now) {
          this.attempts.delete(key);
        }
      }
    }

    const record = this.attempts.get(ip);

    if (!record || record.resetAt <= now) {
      this.attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
      return true;
    }

    if (record.count >= MAX_ATTEMPTS) {
      const retryAfterSeconds = Math.ceil((record.resetAt - now) / 1000);
      throw new HttpException(
        `Demasiados intentos de inicio de sesión. Intenta nuevamente en ${Math.ceil(retryAfterSeconds / 60)} minuto(s).`,
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    record.count += 1;
    return true;
  }

  private getClientIp(request: Request): string {
    const forwarded = request.headers['x-forwarded-for'];
    if (typeof forwarded === 'string' && forwarded.length > 0) {
      return forwarded.split(',')[0].trim();
    }
    return request.ip || request.socket?.remoteAddress || 'unknown';
  }
}
