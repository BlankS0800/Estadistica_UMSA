# Documentación Técnica — Portal Web y CMS Carrera de Estadística (UMSA)

Este documento describe la arquitectura completa del sistema en su estado actual (Portal Público + Panel CMS + API REST + Base de Datos + Infraestructura Docker), los contratos críticos que **no deben alterarse** y la hoja de ruta de **mejoras futuras recomendadas**.

---

## 1. Arquitectura General

El sistema sigue una arquitectura de **tres capas contenerizadas** detrás de un proxy inverso Nginx:

```text
                    ┌──────────────────────────────────────────┐
                    │         Cliente (Navegador Web)          │
                    └────────────────────┬─────────────────────┘
                                         │ HTTPS (Traefik / Dokploy)
                                         ▼
                    ┌──────────────────────────────────────────┐
                    │       frontend (Nginx 1.27 Alpine)       │
                    │  • SPA React + Vite (/usr/share/nginx)   │
                    │  • /images/, /assets/ (caché estático)   │
                    │  • /api/*     ──► estadistica-backend    │
                    │  • /uploads/* ──► estadistica-backend    │
                    └────────────────────┬─────────────────────┘
                                         │ Red interna: estadistica_internal
                                         ▼
                    ┌──────────────────────────────────────────┐
                    │   estadistica-backend (NestJS 11 / Node) │
                    │  • Puerto 3000 (0.0.0.0)                 │
                    │  • AuthGuard global (JWT + @Public())    │
                    │  • Upload Multer (/app/uploads)          │
                    │  • Prisma ORM 7 (@prisma/adapter-pg)     │
                    └────────────────────┬─────────────────────┘
                                         │ Red interna: estadistica_internal
                                         ▼
                    ┌──────────────────────────────────────────┐
                    │   estadistica-postgres (PostgreSQL 17)   │
                    │  • Volumen persistente: postgres_data    │
                    │  • Inicialización: initdb/01-init.sql    │
                    └──────────────────────────────────────────┘
```

---

## 2. Arquitectura del Frontend (`frontend/`)

### 2.1. Atomic Design y Separación de Responsabilidades
El portal público está construido con **React 19 + Vite + Tailwind CSS** bajo **Atomic Design**:

- `src/components/atoms/`: piezas mínimas reutilizables (botones, inputs, overlays, gráficos).
- `src/components/molecules/`: combinación de átomos (tarjetas, dropdowns de navegación, modales).
- `src/components/organisms/`: secciones completas de página agrupadas por dominio (`home/`, `institutional/`, `pregrado/`, `postgrado/`, `students/`, `investigacion/`, `recursos/`, `layout/`).
- `src/pages/`: ensamblaje de organismos por ruta; cada página lee sus textos/imágenes desde el backend (`/seccion-pagina`) con respaldo en `src/services/*Data.js`.
- `src/routes/`:
  - `AppRouter.jsx`: separa las rutas administrativas (`/admin/*`) del shell público (`PublicPortalShell` con `Header` y `Footer`).
  - `pageRegistry.jsx`: registro central de las rutas públicas del portal y sus alias.

### 2.2. Panel de Administración (`frontend/src/admin/`)
El CMS integrado se carga en `/admin/login` y `/admin/editor`:

- **Protección de rutas (`admin/routes/auth.guard.jsx`):** `PrivateRoute` verifica la sesión en `authStateService`; `PublicRoute` redirige a `/admin/editor` si ya hay sesión activa.
- **Editor unificado (`admin/pages/TextEditorPage.jsx`):** organiza todas las páginas del portal en 8 categorías (`Inicio`, `Institucional`, `Pregrado`, `Postgrado`, `Estudiantes`, `Investigación`, `Recursos`, `Contacto`) y ofrece:
  - Edición de textos, enlaces, imágenes y carruseles (`seccion_pagina`).
  - Acceso directo a los **21 módulos CRUD** especializados (`NoticiaCrud`, `PlantelCrud`, `EstudianteAutoridadCrud`, `ConvenioCrud`, `MateriaPlanCrud`, `ConvocatoriaCrud`, `ProgramaCrud`, `ModuloCrud`, `DirectivoEstudianteCrud`, `ConvocatoriaAuxiliaturaCrud`, `PasantiaCrud`, `PublicacionesEstudiantilesCrud`, `MatrizCientificaCrud`, `AutorCrud`, `LibroCrud`, `RevistaCrud`, `DocumentoDigitalCrud`, `TesisCrud`, `BancoDatosCrud`, `DatosArchivoCrud`, `CarouselEditor`).
- **Servicios HTTP (`admin/services/`):** centralizan las llamadas a `VITE_API_URL` (`/api` en producción) adjuntando el header `Authorization: Bearer <token>`.

### 2.3. Identidad Visual (Design System)
| Token | Valor | Uso |
| :--- | :--- | :--- |
| Azul UMSA | `#00447e` | Color institucional primario (encabezados, enlaces, botones) |
| Azul Header | `#054776` | Fondo operativo del menú de navegación superior |
| Naranja UMSA | `#ea580c` | Acento, etiquetas destacadas y llamados a la acción (CTA) |
| Gris Texto | `#475569` | Texto de lectura y contenido secundario |
| Fondo Claro | `#f5f5f5` / `#f8fafc` | Superficies base y tarjetas |

---

## 3. Arquitectura del Backend (`backend/`)

Construido con **NestJS 11**, **TypeScript** y **Prisma 7** (`prisma-client` con `@prisma/adapter-pg`).

### 3.1. Seguridad y Autenticación
- **Guard global (`AuthGuard` en `src/auth/guards/auth.guard.ts`):** registrado mediante `APP_GUARD`. Todo endpoint es privado por defecto salvo que tenga el decorador `@Public()`.
- **Endpoints públicos:** consultas `GET` de lectura del portal público y `POST /auth/log-in`.
- **Endpoints protegidos:** todas las operaciones `POST`, `PATCH`, `DELETE` y la subida de archivos `/upload/*` requieren un JWT válido (expiración de 24h) firmado con `process.env.SECRET`.
- **Contraseñas:** cifradas con `bcrypt`. El registro público está deshabilitado en producción; los administradores se gestionan por CLI (`npm run admin:create:prod`).
- **Cabeceras de seguridad:** `x-powered-by` deshabilitado, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`.

### 3.2. Carga de Archivos (`src/upload/upload.controller.ts`)
| Endpoint | Formatos permitidos | Límite | Carpeta destino | URL pública |
| :--- | :--- | :--- | :--- | :--- |
| `POST /upload/image` | `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif` | 10 MB | `UPLOAD_DIR/images/` | `/uploads/images/<archivo>` |
| `POST /upload/document` | `.pdf` | 25 MB | `UPLOAD_DIR/documents/` | `/uploads/documents/<archivo>` |
| `POST /upload` | Imágenes o PDF | 25 MB | Según tipo | `/uploads/<tipo>/<archivo>` |

Nginx configura `client_max_body_size 30M;` para dar margen a la sobrecarga `multipart/form-data`.

### 3.3. Módulos y Endpoints de la API

| Módulo | Prefijo | Descripción |
| :--- | :--- | :--- |
| Autenticación | `/auth` | Inicio de sesión (`POST /auth/log-in`) |
| Secciones de página | `/seccion-pagina` | Textos, imágenes, enlaces y carruseles del CMS (`clave_campo`, `pagina_slug`, `valor`, `tipo`) |
| Noticias y Eventos | `/noticia`, `/evento` | Noticias de portada (con estado y caducidad) y agenda de eventos |
| Plantel | `/docente`, `/administrativo`, `/auxiliar`, `/estudiante-autoridad` | Directorio docente, administrativo, auxiliares y autoridades estudiantiles |
| Institucional | `/convenio` | Convenios interinstitucionales |
| Pregrado | `/plan-estudios`, `/materia-pregrado`, `/convalida`, `/convocatoria` | Planes de estudio, malla curricular, convalidaciones y admisiones |
| Postgrado | `/programa`, `/modulo` | Maestrías, diplomados, módulos y carga horaria |
| Estudiantes | `/directivo-estudiante`, `/convocatoria-auxiliatura`, `/pasantia`, `/publicaciones-estudiantiles`, `/matriz-cientifica` | Centro de estudiantes, auxiliaturas, pasantías y sociedad científica |
| Recursos | `/autor`, `/libro`, `/revista`, `/documento-digital`, `/tesis`, `/banco-datos`, `/datos-archivo` | Biblioteca, hemeroteca, repositorio de documentos, tesis y banco de datos |
| Archivos | `/upload` | Subida de imágenes y documentos PDF |

---

## 4. Base de Datos (`PostgreSQL 17` + `Prisma`)

- **Esquema fuente de verdad:** `backend/prisma/schema.prisma` (28 modelos relacionales + tabla `User` y tabla `_prisma_migrations`).
- **Inicialización limpia:** `initdb/01-init.sql` contiene el esquema completo, las migraciones registradas, los datos institucionales base (incluyendo las 1,204 claves de `seccion_pagina`) y un único usuario de prueba (`admin@gmail.com` / `123`).
- **Nota sobre `initdb`:** Docker ejecuta `initdb/01-init.sql` **únicamente la primera vez** que se crea el volumen `postgres_data`. Si el volumen ya existe, los datos persistidos no se sobrescriben.

---

## 5. Qué NO se Debe Cambiar por Nada (Invariantes Críticos)

Modificar cualquiera de los siguientes elementos sin una migración coordinada provocará caídas en producción o pérdida de contenido:

1. **Claves `clave_campo` y `pagina_slug` en `seccion_pagina`:**
   - El frontend consulta cada texto, imagen y carrusel por su `clave_campo` exacto. Renombrar o borrar claves en base de datos hará que las secciones queden vacías o vuelvan al texto estático de respaldo.
2. **Nombre del servicio `frontend` y de los volúmenes `postgres_data` / `uploads_data` en `docker-compose.yml`:**
   - Dokploy/Traefik apunta al servicio `frontend` (puerto `80`).
   - Renombrar `postgres_data` o `uploads_data` creará volúmenes nuevos vacíos y parecerá que se perdieron la base de datos y las imágenes/PDFs subidos.
3. **DNS dinámico y prefijos `/api/` y `/uploads/` en `frontend/nginx.conf`:**
   - No quitar `resolver 127.0.0.11 valid=10s ipv6=off;` ni reemplazar el `$backend_upstream` variable por un `proxy_pass` estático, ya que Nginx cachearía IPs muertas tras reinicios en Dokploy y devolvería `502 Bad Gateway`.
   - No quitar `rewrite ^/api/(.*)$ /$1 break;` en `location /api/`, porque NestJS no usa prefijo global `/api` y espera rutas como `/noticia` o `/auth/log-in`.
4. **Escucha en `'0.0.0.0'` en `backend/src/main.ts`:**
   - Mantener `await app.listen(port, '0.0.0.0')`. Omitir `'0.0.0.0'` puede hacer que Node escuche solo en IPv6 en algunos servidores Linux/Docker, provocando `111: Connection refused` desde Nginx.
5. **Protección global con `AuthGuard` en `backend/src/auth/auth.module.ts`:**
   - Nunca desactivar `APP_GUARD` ni agregar `@Public()` a rutas `POST`, `PATCH`, `DELETE` o `/upload/*`. Esto expondría la base de datos y el almacenamiento a escritura anónima.
6. **Validación de `SECRET` (JWT) y cifrado `bcrypt`:**
   - Nunca almacenar contraseñas en texto plano ni quitar la validación que impide arrancar el backend si falta `SECRET`.
7. **Separación de rutas `/admin/*` en `frontend/src/routes/AppRouter.jsx`:**
   - Mantener el panel administrativo fuera de `PublicPortalShell` para evitar conflictos de estilos, navegación y exposición de controles administrativos en el portal público.
8. **Configuración de `prisma/schema.prisma` (`output = "../generated/prisma"` y `moduleFormat = "cjs"`):**
   - El build de NestJS (`Dockerfile` y `PrismaService`) depende de esa ruta exacta y del formato CommonJS.

---

## 6. Mejoras Recomendadas a Futuro

Plan de evolución sugerido para próximas gestiones o pasantías:

### Seguridad y Administración
- **Gestión de usuarios y roles desde el panel `/admin`:** implementar roles (`SUPERADMIN`, `EDITOR`, `PUBLICADOR`), cambio de contraseña desde la UI y desactivación de cuentas sin depender del CLI.
- **Bitácora de auditoría (Audit Log):** registrar quién modificó qué registro y en qué fecha, con opción de revertir cambios en `seccion_pagina`.
- **Rate limiting y protección contra fuerza bruta:** agregar `@nestjs/throttler` en `/auth/log-in` y `/upload/*`.
- **Refresh tokens en cookies `HttpOnly`:** migrar el almacenamiento del JWT desde `localStorage` hacia cookies `HttpOnly; Secure; SameSite=Strict`.

### Infraestructura y Operación
- **Respaldos automáticos programados:** cron diario con `pg_dump` + respaldo del volumen `uploads_data` hacia almacenamiento externo (S3 / Google Drive / servidor institucional UMSA).
- **Almacenamiento de objetos (S3 / MinIO):** desacoplar `/uploads` del disco local del contenedor para facilitar escalado horizontal y copias de seguridad.
- **Optimización automática de imágenes:** convertir y comprimir imágenes subidas a formato `WebP` (con `sharp`) en el backend para reducir el peso del portal.
- **Pipeline CI/CD (GitHub Actions):** ejecutar `npm run lint` y `npm run build` en frontend y backend automáticamente en cada Pull Request antes de desplegar.

### Calidad, UX y Funcionalidades
- **Pruebas automatizadas:** añadir tests unitarios y E2E en NestJS (`jest` + `supertest`) para autenticación y CRUDs críticos, más pruebas de humo con Playwright en el frontend.
- **Eliminación de archivos huérfanos:** al borrar o reemplazar una imagen/PDF en un CRUD, eliminar físicamente el archivo antiguo de `/app/uploads` para evitar acumulación de disco.
- **Vista previa en borrador:** permitir previsualizar cambios de `seccion_pagina` antes de publicarlos en vivo.
- **SEO y accesibilidad:** incorporar `sitemap.xml` dinámico, metadatos Open Graph por página y auditoría periódica Lighthouse / WCAG AA.
