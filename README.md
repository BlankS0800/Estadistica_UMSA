# Portal Web y CMS — Carrera de Estadística (UMSA)

Aplicación web institucional y sistema de gestión de contenidos (CMS) de la **Carrera de Estadística — Facultad de Ciencias Puras y Naturales, Universidad Mayor de San Andrés (UMSA)**.

El proyecto está compuesto por un portal público responsivo, un panel de administración (`/admin`) para gestionar textos, imágenes, carruseles, documentos PDF y módulos dinámicos sin tocar código, una API REST construida con NestJS + Prisma sobre PostgreSQL 17 y una configuración lista para despliegue en producción con Docker Compose / Dokploy.

---

## Documentación del Proyecto

| Documento | Descripción | Audiencia |
| :--- | :--- | :--- |
| **[README.md](README.md)** | Visión general, instalación rápida (Docker y desarrollo local), variables de entorno y despliegue. | Desarrolladores / DevOps |
| **[DOCUMENTACION_TECNICA.md](DOCUMENTACION_TECNICA.md)** | Arquitectura full-stack, diseño de base de datos, contratos de API, **qué NO cambiar** y **mejoras futuras**. | Desarrolladores / Mantenedores |
| **[MANUAL_ADMINISTRADOR.md](MANUAL_ADMINISTRADOR.md)** | Guía paso a paso con capturas para usar el panel `/admin` (textos, noticias, plantel, materias, documentos, etc.). | Personal administrativo / Editores |

---

## Stack Tecnológico

- **Frontend:** React 19, Vite, Tailwind CSS, React Router, arquitectura **Atomic Design** + panel CMS integrado (`/admin`).
- **Backend:** NestJS 11, TypeScript, Prisma ORM 7 (`@prisma/adapter-pg`), autenticación JWT + `bcrypt`, carga de archivos con `multer`.
- **Base de datos:** PostgreSQL 17 (inicialización automática vía `initdb/01-init.sql`).
- **Proxy y Producción:** Nginx 1.27 (sirve la SPA, archivos estáticos y hace proxy inverso de `/api/` y `/uploads/` hacia el backend), Docker Compose compatible con **Dokploy**.

---

## Estructura del Repositorio

```text
.
├── backend/                  # API REST NestJS + Prisma
│   ├── prisma/               # schema.prisma y migraciones SQL
│   ├── scripts/              # Utilidades CLI (create-admin.ts)
│   ├── src/                  # Módulos, controladores, servicios y guards
│   ├── uploads/              # Archivos subidos en desarrollo local (ignorado en git)
│   └── Dockerfile            # Build multi-stage de producción
├── frontend/                 # Portal público + Panel CMS (/admin)
│   ├── public/               # Activos estáticos (imágenes, iconos, logos, documentos)
│   ├── src/
│   │   ├── admin/            # Panel de administración (login, editor, CRUDs, servicios)
│   │   ├── components/       # Atomic Design (atoms, molecules, organisms)
│   │   ├── pages/            # Páginas del portal público
│   │   ├── routes/           # AppRouter y pageRegistry
│   │   └── services/         # Consumidores de API y datos base de respaldo
│   ├── nginx.conf            # Configuración Nginx para producción
│   └── Dockerfile            # Build Vite + Nginx
├── initdb/                   # Dump SQL limpio para inicializar PostgreSQL
│   └── 01-init.sql
├── docs/capturas/            # Capturas de pantalla del Manual de Administrador
├── docker-compose.yml        # Orquestación PostgreSQL + Backend + Frontend/Nginx
├── .env.example              # Plantilla de variables de entorno
├── DOCUMENTACION_TECNICA.md  # Documentación técnica completa
├── MANUAL_ADMINISTRADOR.md   # Manual de uso del panel /admin
└── README.md                 # Este archivo
```

---

## Inicio Rápido con Docker (Recomendado)

### 1. Configurar variables de entorno
Copia el archivo de ejemplo y reemplaza las credenciales por valores seguros:

```bash
cp .env.example .env
```

Variables principales en `.env`:

| Variable | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `POSTGRES_USER` | Usuario de PostgreSQL | `postgres` |
| `POSTGRES_PASSWORD` | Contraseña de PostgreSQL | `una_clave_segura` |
| `POSTGRES_DB` | Nombre de la base de datos | `usuarios` |
| `POSTGRES_PORT` | Puerto local de PostgreSQL (solo desarrollo) | `5433` |
| `JWT_SECRET` | Secreto para firmar tokens JWT (mín. 64 caracteres en prod) | `clave_larga_aleatoria...` |
| `FRONTEND_PORT` | Puerto HTTP expuesto del portal | `8080` |
| `CORS_ORIGIN` | Orígenes permitidos separados por coma (vacío = mismo origen vía Nginx) | *(vacío)* |

### 2. Levantar el stack completo

```bash
docker compose up -d --build
```

- **Portal público:** `http://localhost:8080`
- **Panel de administración:** `http://localhost:8080/admin/login`
- **Usuario inicial de prueba (en `initdb/01-init.sql`):**
  - Correo: `admin@gmail.com`
  - Contraseña: `123`

> **Importante para producción:** Cambia o crea un administrador definitivo inmediatamente después del primer despliegue usando el comando de administración:
> ```bash
> docker compose exec estadistica-backend npm run admin:create:prod -- admin@umsa.bo "TuPasswordSeguro2026"
> ```

---

## Desarrollo Local (Sin Docker)

Requisitos: **Node.js 22+**, **npm** y **PostgreSQL 17**.

### 1. Base de datos
Crea una base de datos en PostgreSQL e importa `initdb/01-init.sql`:

```bash
psql -U postgres -d usuarios -f initdb/01-init.sql
```

### 2. Backend
```bash
cd backend
cp .env.example .env   # Configura DATABASE_URL y SECRET
npm install
npx prisma generate
npm run start:dev      # Levanta en http://localhost:3000
```

### 3. Frontend
```bash
cd frontend
cp .env.example .env   # Configura VITE_API_URL=http://localhost:3000
npm install
npm run dev            # Levanta en http://localhost:5173
```

---

## Despliegue en Dokploy

El archivo [docker-compose.yml](docker-compose.yml) está preparado para desplegarse directamente en Dokploy:

1. Crear un servicio tipo **Docker Compose** apuntando a este repositorio (`main`).
2. Configurar las variables de entorno (`POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`, `JWT_SECRET`).
3. En la pestaña **Domains** de Dokploy, apuntar el dominio al servicio **`frontend`** en el puerto **`80`**.
4. Presionar **Deploy**. Los volúmenes persistentes `postgres_data` y `uploads_data` conservan la base de datos y los archivos subidos entre despliegues.

---

## Scripts Útiles

| Ubicación | Comando | Acción |
| :--- | :--- | :--- |
| `backend/` | `npm run build` | Compila NestJS a `dist/` |
| `backend/` | `npm run start:prod` | Ejecuta el servidor compilado |
| `backend/` | `npm run admin:create -- <email> <pass>` | Crea o actualiza un administrador (desarrollo) |
| `backend/` | `npm run admin:create:prod -- <email> <pass>` | Crea o actualiza un administrador (producción) |
| `frontend/` | `npm run dev` | Servidor de desarrollo Vite |
| `frontend/` | `npm run build` | Genera el bundle de producción en `dist/` |
| `frontend/` | `npm run lint` | Ejecuta ESLint sobre el frontend |
