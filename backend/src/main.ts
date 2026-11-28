import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction, Request, Response } from 'express';
import { join } from 'path';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  // Cabeceras básicas de seguridad HTTP
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  const corsOrigin = process.env.CORS_ORIGIN;
  app.enableCors(
    corsOrigin
      ? { origin: corsOrigin.split(',').map((origin) => origin.trim()) }
      : undefined,
  );

  const uploadDir = process.env.UPLOAD_DIR || join(process.cwd(), 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Servir archivos subidos bajo el prefijo /uploads/
  app.useStaticAssets(uploadDir, {
    prefix: '/uploads/',
  });

  // Opcional en desarrollo local (en Docker el frontend/Nginx sirve /images/ directamente)
  const portalImagesDir =
    process.env.PORTAL_IMAGES_DIR ||
    join(process.cwd(), '..', 'frontend', 'public', 'images');
  if (fs.existsSync(portalImagesDir)) {
    app.useStaticAssets(portalImagesDir, {
      prefix: '/images/',
    });
  }

  const port = Number(process.env.PORT) || 3000;
  await app.listen(port, '0.0.0.0');
}
bootstrap();
