import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, encrypt } from 'src/libs/bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async logIn(email: string, password: string) {
    try {
      const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
      if (!normalizedEmail || typeof password !== 'string' || password.length === 0) {
        throw new BadRequestException('Email o contraseña inválidos.');
      }

      const user = await this.prismaService.user.findUnique({
        where: {
          email: normalizedEmail,
        },
      });

      if (!user) {
        throw new BadRequestException('Email o contraseña inválidos.');
      }

      const isPasswordMatch = await compare(password, user.password);

      if (!isPasswordMatch) {
        throw new BadRequestException('Email o contraseña inválidos.');
      }

      const payload = {
        id: user.id,
        email: user.email,
      };

      const access_token = await this.jwtService.signAsync(payload);

      return { access_token };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException('Error al iniciar sesión');
    }
  }

  async signUp(email: string, password: string) {
    try {
      const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
      if (!EMAIL_REGEX.test(normalizedEmail)) {
        throw new BadRequestException('El correo electrónico no es válido.');
      }

      if (typeof password !== 'string' || password.length < 8) {
        throw new BadRequestException(
          'La contraseña debe tener al menos 8 caracteres.',
        );
      }

      const userFound = await this.prismaService.user.findUnique({
        where: {
          email: normalizedEmail,
        },
      });

      if (userFound) {
        throw new BadRequestException('El usuario ya existe.');
      }

      const hashedPassword = await encrypt(password, 12);

      const user = await this.prismaService.user.create({
        data: {
          email: normalizedEmail,
          password: hashedPassword,
        },
      });

      const payload = {
        id: user.id,
        email: user.email,
      };

      const access_token = await this.jwtService.signAsync(payload);

      return { access_token };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException('Error al registrar el usuario');
    }
  }
}
