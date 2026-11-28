# Manual de Uso — Panel de Administrador (`/admin`)
**Portal Web Oficial — Carrera de Estadística (UMSA)**

Este manual está dirigido al personal administrativo, docentes encargados y editores responsables de mantener actualizado el contenido del portal web sin necesidad de conocimientos de programación.

---

## Índice

1. [Acceso e Inicio de Sesión](#1-acceso-e-inicio-de-sesión)
2. [Conociendo la Interfaz del Panel](#2-conociendo-la-interfaz-del-panel)
3. [Accesos Rápidos](#3-accesos-rápidos)
4. [Cómo Editar Textos y Enlaces de una Página](#4-cómo-editar-textos-y-enlaces-de-una-página)
5. [Cómo Subir o Cambiar Imágenes y Carruseles](#5-cómo-subir-o-cambiar-imágenes-y-carruseles)
6. [Gestión de Módulos Dinámicos (Registros / CRUD)](#6-gestión-de-módulos-dinámicos-registros--crud)
   - [6.1. Noticias de Portada](#61-noticias-de-portada)
   - [6.2. Plantel Docente, Administrativo y Auxiliares](#62-plantel-docente-administrativo-y-auxiliares)
   - [6.3. Autoridades Estudiantiles (HCC) y Convenios](#63-autoridades-estudiantiles-hcc-y-convenios)
   - [6.4. Pregrado (Malla Curricular, Convalidaciones y Admisiones)](#64-pregrado-malla-curricular-convalidaciones-y-admisiones)
   - [6.5. Postgrado (Programas y Módulos)](#65-postgrado-programas-y-módulos)
   - [6.6. Estudiantes (CEE, Auxiliaturas, Pasantías y Sociedad Científica)](#66-estudiantes-cee-auxiliaturas-pasantías-y-sociedad-científica)
   - [6.7. Recursos (Biblioteca, Revistas, Documentos PDF, Tesis y Banco de Datos)](#67-recursos-biblioteca-revistas-documentos-pdf-tesis-y-banco-de-datos)
7. [Cierre de Sesión y Buenas Prácticas de Seguridad](#7-cierre-de-sesión-y-buenas-prácticas-de-seguridad)
8. [Solución de Problemas Frecuentes](#8-solución-de-problemas-frecuentes)

---

## 1. Acceso e Inicio de Sesión

1. Abre tu navegador web (Chrome, Edge o Firefox) e ingresa a la dirección del panel:
   - **Producción:** `https://<tu-dominio>/admin/login`
   - **Entorno local:** `http://localhost:8080/admin/login`
2. Ingresa tu **Correo** institucional y tu **Contraseña**.
3. Haz clic en el botón **Ingresar**.

> **Nota:** La sesión permanece activa durante **24 horas**. Al vencer ese plazo, el sistema te redirigirá automáticamente a la pantalla de inicio de sesión.

<!-- ESPACIO PARA CAPTURA 1 -->
![Pantalla de inicio de sesión del panel administrador](docs/capturas/01-login.png)
*Captura 1: Pantalla de inicio de sesión (`/admin/login`).*

---

## 2. Conociendo la Interfaz del Panel

Una vez dentro de `/admin/editor`, la pantalla se divide en tres zonas principales:

1. **Barra superior:** muestra el título del panel, el selector de páginas agrupadas en 8 categorías (`Inicio`, `Institucional`, `Pregrado`, `Postgrado`, `Estudiantes`, `Investigación`, `Recursos`, `Contacto`), enlace para abrir el portal público en otra pestaña y el botón **Cerrar sesión**.
2. **Panel izquierdo (lista de secciones):** permite buscar un campo por nombre, filtrar por tipo (`Todos`, `Textos`, `Imágenes/Carruseles`) y desplegar o colapsar los grupos de contenido (`Expandir todos` / `Colapsar todos`).
3. **Área derecha (editor activo):** muestra las pestañas de la página seleccionada:
   - **Contenido de Página:** edita los textos, enlaces, imágenes y carruseles propios de esa página.
   - **Pestañas de gestión de datos (CRUD):** aparecen en las páginas que administran listas dinámicas (por ejemplo: *Noticias*, *Plantel Docente y Administrativo*, *Gestión de Materias y Planes*, *Documentos Digitales*, etc.).

<!-- ESPACIO PARA CAPTURA 2 -->
![Vista general del panel de administración](docs/capturas/02-panel-general.png)
*Captura 2: Vista general del panel `/admin/editor` con selector de páginas, accesos rápidos y lista de secciones.*

---

## 3. Accesos Rápidos

En la parte superior del editor encontrarás accesos directos a las tareas más frecuentes de la carrera:

| Acceso rápido | Destino | Uso habitual |
| :--- | :--- | :--- |
| **Noticias** | Inicio → Noticias | Publicar, editar o caducar noticias y comunicados |
| **Banner Inicio** | Inicio → Contenido de Página | Cambiar fotos y textos del carrusel principal |
| **Admisiones** | Pregrado → Gestión de Convocatorias | Actualizar convocatorias de ingreso (PREU / PSA) |
| **Auxiliaturas** | Estudiantes → Convocatorias de Auxiliatura | Publicar plazas, fechas de cierre y estados |
| **Docentes** | Institucional → Plantel Docente y Administrativo | Agregar o editar docentes, administrativos y auxiliares |
| **Convalidaciones** | Pregrado → Contenido de Página | Actualizar la tabla oficial de convalidaciones |

---

## 4. Cómo Editar Textos y Enlaces de una Página

1. Selecciona la **página** en el menú superior (ej. *Institucional → Acerca de la carrera*).
2. Asegúrate de estar en la pestaña **Contenido de Página**.
3. En el panel izquierdo, haz clic sobre el grupo que deseas editar (ej. *Portada (Hero)*, *Misión*, *Visión*) o utiliza el buscador para encontrar un texto específico.
4. Selecciona el campo deseado. En el área derecha verás:
   - El **nombre amigable** del campo y su identificador interno.
   - Una etiqueta amarilla **Sin guardar** apenas modifiques el texto (y un punto ámbar en la lista izquierda).
   - Botones **Anterior** y **Siguiente** para recorrer rápidamente los campos del mismo grupo.
5. Edita el texto y haz clic en **Guardar cambios**.
6. Espera la notificación verde de confirmación. El cambio se refleja de inmediato en el portal público.

> **Consejo:** Si editas un campo de tipo **Enlace**, puedes escribir una ruta interna (ej. `/pregrado/admisiones`) o una URL completa que empiece con `https://`.

<!-- ESPACIO PARA CAPTURA 3 -->
![Edición de textos en el panel administrador](docs/capturas/03-editor-textos.png)
*Captura 3: Editor de campos de texto con indicador de cambios sin guardar y navegación entre secciones.*

---

## 5. Cómo Subir o Cambiar Imágenes y Carruseles

### 5.1. Imágenes individuales
1. Selecciona un campo marcado con la etiqueta **Imagen**.
2. En el área derecha verás una zona de carga:
   - **Arrastra y suelta** la imagen desde tu computadora, o
   - Haz clic en la zona punteada para seleccionarla desde tus archivos.
3. Verifica la vista previa y haz clic en **Guardar cambios**.

### 5.2. Carruseles de imágenes
En secciones como el banner principal de Inicio, Acreditación o Autoridades verás campos con la etiqueta **Carrusel**:
1. Puedes **agregar nuevas diapositivas** subiendo imágenes.
2. Puedes **reordenar**, editar el texto/leyenda de cada imagen o **eliminar** diapositivas antiguas.
3. Al finalizar, presiona **Guardar cambios**.

### Requisitos de archivos permitidos
| Tipo de archivo | Formatos aceptados | Tamaño máximo |
| :--- | :--- | :--- |
| **Imágenes** | `JPG`, `JPEG`, `PNG`, `WEBP`, `GIF` | **10 MB** |
| **Documentos** | `PDF` | **25 MB** |

> **Recomendación:** Usa imágenes horizontales bien iluminadas (idealmente menores a 1 MB en formato `.jpg` o `.webp`) para que el portal cargue rápido en celulares.

<!-- ESPACIO PARA CAPTURA 4 -->
![Carga de imágenes y editor de carruseles](docs/capturas/04-editor-imagenes-carrusel.png)
*Captura 4: Zona de carga de imágenes (arrastrar y soltar) y vista previa en el editor.*

---

## 6. Gestión de Módulos Dinámicos (Registros / CRUD)

Además de textos fijos, el panel administra tablas completas de registros donde puedes **Crear**, **Editar** y **Eliminar** elementos.

### 6.1. Noticias de Portada
- **Ruta en el panel:** `Inicio` → pestaña **Noticias** (o acceso rápido **Noticias**).
- **Campos principales:** Categoría, color de etiqueta, fecha, título, extracto, imagen (opcional), tiempo de lectura, enlace, estado (`published` / `draft`) y fecha de expiración (opcional).
- **Tip:** Si dejas la noticia sin imagen, el portal la muestra automáticamente con el diseño institucional de **Comunicado Oficial**. Si colocas fecha de expiración, se ocultará sola al vencer.

<!-- ESPACIO PARA CAPTURA 5 -->
![Gestión de noticias en el panel administrador](docs/capturas/05-crud-noticias.png)
*Captura 5: Módulo de gestión de Noticias (listado, creación y edición).*

### 6.2. Plantel Docente, Administrativo y Auxiliares
- **Ruta en el panel:** `Institucional → Plantel docente y administrativo` → pestaña **Plantel Docente y Administrativo**.
- Permite gestionar por separado:
  - **Docentes** (nombre, grado académico, tipo, resumen CV, correo, cargo de autoridad opcional y fotografía).
  - **Administrativos** (nombre, cargo, correo y fotografía).
  - **Auxiliares** (nombre, tipo, materia, paralelo, días, horario, aula y fotografía).

<!-- ESPACIO PARA CAPTURA 6 -->
![Gestión de plantel docente y administrativo](docs/capturas/06-crud-plantel.png)
*Captura 6: Módulo de gestión de Plantel Docente, Administrativo y Auxiliares.*

### 6.3. Autoridades Estudiantiles (HCC) y Convenios
- **Autoridades Estudiantiles:** `Institucional → Autoridades` → pestaña **Representación Estudiantil (HCC)**.
- **Convenios:** `Institucional → Convenios interinstitucionales` → pestaña **Convenios Interinstitucionales** (título, descripción y sector).

### 6.4. Pregrado (Malla Curricular, Convalidaciones y Admisiones)
- **Malla Curricular:** `Pregrado → Malla curricular` → pestaña **Gestión de Materias y Planes** (planes de estudio, siglas, horas, prerrequisitos y semestre).
- **Convalidaciones:** `Pregrado → Convalidaciones` → pestaña **Gestión de Convalidaciones** (equivalencias entre plan antiguo y plan vigente) y pestaña **Contenido de Página** para la imagen/tabla descargable.
- **Admisiones:** `Pregrado → Admisiones` → pestaña **Gestión de Convocatorias** (periodo, descripción, fechas PREU, PSA, entrega de documentos y matriculación Kardex).

<!-- ESPACIO PARA CAPTURA 7 -->
![Gestión de materias y malla curricular](docs/capturas/07-crud-pregrado.png)
*Captura 7: Módulo de gestión de Materias y Planes de Estudio (Pregrado).*

### 6.5. Postgrado (Programas y Módulos)
- **Ruta en el panel:** cualquier página de `Postgrado` (*Maestría terminal*, *Maestría autofinanciada* o *Diplomados y especialidades*).
- Cuenta con dos pestañas CRUD:
  - **Programas de Postgrado:** nombre, tipo y costo.
  - **Módulos de Postgrado:** número de módulo, título, programa asociado, horas presenciales y horas de investigación.

### 6.6. Estudiantes (CEE, Auxiliaturas, Pasantías y Sociedad Científica)
- **Centro de Estudiantes:** `Estudiantes → Centro de estudiantes` → pestaña **Directiva Estudiantil**.
- **Auxiliaturas:** `Estudiantes → Auxiliaturas` → pestaña **Convocatorias de Auxiliatura** (materia, tipo, descripción, fechas, plazas y estado).
- **Pasantías:** `Estudiantes → Pasantías y bolsa de trabajo` → pestaña **Pasantías y Empleo** (título, tipo, empresa, área, fecha de cierre y requisitos).
- **Sociedad Científica:** `Estudiantes → Sociedad científica` → pestañas **Publicaciones Estudiantiles** y **Matriz Científica**.

### 6.7. Recursos (Biblioteca, Revistas, Documentos PDF, Tesis y Banco de Datos)
- **Biblioteca:** `Recursos → Biblioteca` → pestañas **Catálogo de Libros** y **Autores**.
- **Revistas:** `Recursos → Revistas` → pestaña **Revistas Académicas**.
- **Documentos Digitales (PDF):** `Recursos → Documentos` → pestaña **Documentos Digitales** (permite subir directamente archivos `.pdf` de hasta 25 MB o pegar un enlace externo).
- **Tesis:** `Recursos → Tesis` → pestaña **Tesis de Grado**.
- **Banco de Datos:** `Recursos → Banco de datos` → pestañas **Bancos de Datos** y **Archivos de Datos**.

<!-- ESPACIO PARA CAPTURA 8 -->
![Gestión de documentos digitales y recursos](docs/capturas/08-crud-documentos.png)
*Captura 8: Módulo de gestión de Documentos Digitales y subida de archivos PDF.*

---

## 7. Cierre de Sesión y Buenas Prácticas de Seguridad

1. Al terminar de editar, haz clic en **Cerrar sesión** en la esquina superior derecha (especialmente en equipos compartidos de oficina o laboratorio).
2. **No compartas tus credenciales** por grupos públicos de mensajería.
3. Si necesitas crear una nueva cuenta de administrador o cambiar una contraseña olvidada, solicítalo al encargado técnico del servidor (se realiza mediante el comando seguro `npm run admin:create:prod`).
4. Antes de eliminar un registro (por ejemplo, una materia, un docente o una noticia), verifica bien el título porque **la eliminación es permanente**.

---

## 8. Solución de Problemas Frecuentes

| Problema | Causa probable | Cómo resolverlo |
| :--- | :--- | :--- |
| Al hacer clic en **Ingresar** dice credenciales inválidas | Correo o contraseña incorrectos (verifica mayúsculas/espacios) | Revisa que no esté activado `Bloq Mayús` y vuelve a intentar. |
| El panel vuelve a pedirme iniciar sesión | Pasaron más de 24 horas desde el último ingreso | Inicia sesión nuevamente; es un comportamiento normal de seguridad. |
| No me deja subir una imagen o PDF | El archivo supera el límite (10 MB imagen / 25 MB PDF) o no es un formato permitido | Comprime el archivo o verifica que sea `.jpg`, `.png`, `.webp` o `.pdf`. |
| Edité un texto pero no cambió en la web pública | Faltó presionar **Guardar cambios** o el navegador muestra caché | Verifica que no aparezca la etiqueta **Sin guardar**, guarda y recarga el portal con `Ctrl + F5`. |
| Aparece un error de conexión al guardar | Problema temporal de red o del servidor | Espera unos segundos e intenta guardar de nuevo; si persiste, avisa al encargado técnico. |
