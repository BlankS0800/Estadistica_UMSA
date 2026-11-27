import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

async function main() {
  const emailArg = process.argv[2];
  const passwordArg = process.argv[3];

  if (!emailArg || !passwordArg) {
    console.error('Uso: npm run admin:create -- correo@umsa.bo "TuPasswordSeguro123"');
    process.exit(1);
  }

  const email = emailArg.trim().toLowerCase();
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    console.error('Error: el correo electrónico no es válido.');
    process.exit(1);
  }

  if (passwordArg.length < 8) {
    console.error('Error: la contraseña debe tener al menos 8 caracteres.');
    process.exit(1);
  }

  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  });
  const prisma = new PrismaClient({ adapter });

  try {
    const hashedPassword = await bcrypt.hash(passwordArg, 12);
    const existing = await prisma.user.findUnique({ where: { email } });

    if (existing) {
      await prisma.user.update({
        where: { email },
        data: { password: hashedPassword },
      });
      console.log(`Contraseña actualizada para el administrador: ${email}`);
    } else {
      await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      console.log(`Administrador creado correctamente: ${email}`);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error('Error al crear administrador:', err.message);
  process.exit(1);
});
