import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { Public } from './guards/auth.guard';
import { LoginRateLimitGuard } from './guards/login-rate-limit.guard';

interface UserDTO {
  email: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LoginRateLimitGuard)
  @HttpCode(HttpStatus.OK)
  @Post('log-in')
  logIn(@Body() user: UserDTO) {
    return this.authService.logIn(user?.email, user?.password);
  }

  // Protegido por AuthGuard global: solo un administrador autenticado puede crear cuentas nuevas
  @HttpCode(HttpStatus.CREATED)
  @Post('sign-up')
  signUp(@Body() user: UserDTO) {
    return this.authService.signUp(user?.email, user?.password);
  }

  // Verifica que el JWT siga siendo válido en el servidor
  @Get('me')
  me(@Req() request: Request & { user?: { id: string; email: string } }) {
    return {
      id: request.user?.id,
      email: request.user?.email,
    };
  }
}
