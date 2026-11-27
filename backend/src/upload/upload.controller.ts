import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as crypto from 'crypto';
import { UploadService } from './upload.service';

const ALLOWED_IMAGE_MIMES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
];

const ALLOWED_IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

const ALLOWED_DOCUMENT_MIMES = ['application/pdf'];
const ALLOWED_DOCUMENT_EXTS = ['.pdf'];

function isAllowedImage(file: { originalname: string; mimetype: string }): boolean {
  const ext = path.extname(file.originalname).toLowerCase();
  return (
    ALLOWED_IMAGE_MIMES.includes(file.mimetype) &&
    ALLOWED_IMAGE_EXTS.includes(ext)
  );
}

function isAllowedDocument(file: { originalname: string; mimetype: string }): boolean {
  const ext = path.extname(file.originalname).toLowerCase();
  return (
    ALLOWED_DOCUMENT_MIMES.includes(file.mimetype) &&
    ALLOWED_DOCUMENT_EXTS.includes(ext)
  );
}

function createStorage(subfolder: string) {
  return diskStorage({
    destination: (req, file, cb) => {
      const uploadRoot =
        process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads');
      const targetDir = path.join(uploadRoot, subfolder);
      cb(null, targetDir);
    },
    filename: (req, file, cb) => {
      const randomSuffix = crypto.randomBytes(8).toString('hex');
      const ext = path.extname(file.originalname).toLowerCase();
      const safeName = `${Date.now()}-${randomSuffix}${ext}`;
      cb(null, safeName);
    },
  });
}

// Protegido por AuthGuard global: solo usuarios autenticados pueden subir archivos
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: createStorage('images'),
      limits: {
        fileSize: 10 * 1024 * 1024, // 10 MB
      },
      fileFilter: (req, file, cb) => {
        if (!isAllowedImage(file)) {
          return cb(
            new BadRequestException(
              `Tipo de archivo no permitido (${file.mimetype}). Solo se admiten imágenes: JPG, PNG, WEBP o GIF.`,
            ),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException(
        'No se proporcionó ningún archivo de imagen.',
      );
    }

    return {
      url: `/uploads/images/${file.filename}`,
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
    };
  }

  @Post('document')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: createStorage('documents'),
      limits: {
        fileSize: 25 * 1024 * 1024, // 25 MB
      },
      fileFilter: (req, file, cb) => {
        if (!isAllowedDocument(file)) {
          return cb(
            new BadRequestException(
              `Tipo de archivo no permitido (${file.mimetype}). Solo se admiten documentos PDF.`,
            ),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  uploadDocument(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException(
        'No se proporcionó ningún archivo de documento.',
      );
    }

    return {
      url: `/uploads/documents/${file.filename}`,
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
    };
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadRoot =
            process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads');
          const subfolder = isAllowedDocument(file) ? 'documents' : 'images';
          cb(null, path.join(uploadRoot, subfolder));
        },
        filename: (req, file, cb) => {
          const randomSuffix = crypto.randomBytes(8).toString('hex');
          const ext = path.extname(file.originalname).toLowerCase();
          const safeName = `${Date.now()}-${randomSuffix}${ext}`;
          cb(null, safeName);
        },
      }),
      limits: {
        fileSize: 25 * 1024 * 1024, // 25 MB max
      },
      fileFilter: (req, file, cb) => {
        if (!isAllowedImage(file) && !isAllowedDocument(file)) {
          return cb(
            new BadRequestException(
              `Formato no soportado (${file.mimetype}). Solo se permiten imágenes (JPG, PNG, WEBP, GIF) o documentos PDF.`,
            ),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  uploadGeneric(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No se envió ningún archivo.');
    }

    const subfolder = isAllowedDocument(file) ? 'documents' : 'images';

    return {
      url: `/uploads/${subfolder}/${file.filename}`,
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
    };
  }
}
