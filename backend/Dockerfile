# Etapa 1: compilación de Prisma Client y NestJS
FROM node:22-slim AS builder

WORKDIR /app

# Dependencias del sistema necesarias para Prisma y módulos nativos (bcrypt)
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig*.json nest-cli.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./
RUN npx prisma generate

COPY src ./src
COPY scripts ./scripts

RUN npm run build

# Etapa 2: imagen ligera de producción
FROM node:22-slim AS runner

WORKDIR /app
ENV NODE_ENV=production

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts

RUN mkdir -p /app/uploads/images /app/uploads/documents && chown -R node:node /app/uploads

USER node

EXPOSE 3000

CMD ["node", "dist/src/main.js"]
