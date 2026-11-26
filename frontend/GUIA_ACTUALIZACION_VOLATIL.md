# Guía de Actualización de Contenido Volátil (Dinámico)
**Carrera de Estadística - UMSA 2026**

Este documento detalla cuáles son las secciones del portal web que cambian con mayor frecuencia (noticias, eventos, convocatorias, pasantías, hemeroteca y documentos) y proporciona instrucciones precisas, plantillas de código listas para copiar y pegar, y mejores prácticas para realizar actualizaciones de manera rápida y segura sin afectar el funcionamiento del sistema.

---

## 1. Mapa de Archivos Dinámicos (Servicios)

Los elementos que cambian constantemente están centralizados en la carpeta `src/services/` como arreglos de objetos de JavaScript. A continuación se detalla qué archivo controla cada sección:

| Sección del Portal | Archivo de Configuración | Variable Principal | Frecuencia de Cambio |
| :--- | :--- | :--- | :--- |
| **Noticias Destacadas (Inicio)** | [`inicioData.js`](file:///c:/HDD%20datos/Pasantias/Carrera%20Estadistica/Pagina%20web/estadistica-umsa/src/services/inicioData.js) | `inicioNews` | Semanal / Quincenal |
| **Agenda de Eventos (Inicio)** | [`inicioData.js`](file:///c:/HDD%20datos/Pasantias/Carrera%20Estadistica/Pagina%20web/estadistica-umsa/src/services/inicioData.js) | `inicioEvents` | Semanal / Quincenal |
| **Convocatorias (Auxiliaturas, etc.)** | [`studentsCallsData.js`](file:///c:/HDD%20datos/Pasantias/Carrera%20Estadistica/Pagina%20web/estadistica-umsa/src/services/studentsCallsData.js) | `studentsCalls` | Mensual / Semestral |
| **Pasantías y Ofertas Laborales** | [`studentsInternshipsData.js`](file:///c:/HDD%20datos/Pasantias/Carrera%20Estadistica/Pagina%20web/estadistica-umsa/src/services/studentsInternshipsData.js) | `studentsInternshipOffers` | Mensual |
| **Hemeroteca y Revistas Externas** | [`recursosRevistasData.js`](file:///c:/HDD%20datos/Pasantias/Carrera%20Estadistica/Pagina%20web/estadistica-umsa/src/services/recursosRevistasData.js) | `revistasData.publicaciones` | Semestral |
| **Formularios y Documentos de Kardex** | [`recursosDocumentosData.js`](file:///c:/HDD%20datos/Pasantias/Carrera%20Estadistica/Pagina%20web/estadistica-umsa/src/services/recursosDocumentosData.js) | `documentosData.documentos` | Trimestral / Anual |

---

## 2. Instrucciones y Plantillas por Sección

> [!IMPORTANT]
> Recuerde siempre verificar que cada propiedad termine con una coma (`,`) y que las cadenas de texto estén rodeadas por comillas simples (`' '`) o dobles (`" "`).

### 2.1. Noticias (Banner e Inicio)
* **Ubicación:** `src/services/inicioData.js` -> `inicioNews`
* **Formato de Fecha:** Obligatorio usar formato estándar ISO `YYYY-MM-DD` (ej. `'2026-06-03'`). El sistema ordenará las noticias automáticamente de la más reciente a la más antigua y traducirá la fecha a formato legible (ej. *"03 Jun 2026"*).
* **Control de Visibilidad (Estado):**
  - Use `status: 'published'` para mostrarla, o `'draft'` para ocultarla temporalmente.
  - **Fecha de Caducidad (Opcional):** Agregue la propiedad `expiryDate: 'YYYY-MM-DD'` si desea que la noticia o comunicado caduque y se oculte de forma automática al superar dicha fecha.
* **Opción Sin Imagen (Comunicados):** Si una noticia no tiene imagen, simplemente **omita** o deje en blanco la propiedad `imageUrl`. El sistema detectará esto automáticamente y renderizará la noticia con un elegante diseño geométrico institucional con la leyenda "Comunicado Oficial", evitando que la interfaz se vea rota o con recuadros vacíos.

#### Plantilla para nueva noticia o comunicado:
```javascript
{
  id: 7, // Incremente el ID secuencialmente
  category: 'Comunicado', // Opciones: 'Investigación', 'Académico', 'Eventos', 'Institucional', 'Convocatorias', 'Comunicado'
  accent: '#00447e', // Color del tag: '#00447e' (azul) o '#ea580c' (naranja)
  date: '2026-06-03', // Fecha de publicación (YYYY-MM-DD)
  title: 'Título de la noticia o comunicado de impacto institucional',
  excerpt: 'Resumen corto de dos líneas que se mostrará en la tarjeta de inicio.',
  // imageUrl: '/images/inicio/noticia_nombre_archivo.jpg', // Omitir esta línea si es un comunicado sin imagen
  readTime: '3 min',
  href: '/pregrado/calendario-academico', // Enlace interno o URL externa
  status: 'published', // 'published' para mostrar, 'draft' para ocultar
  expiryDate: '2026-07-15', // OPCIONAL: Se ocultará automáticamente después de esta fecha
},
```

---

### 2.2. Agenda y Eventos
* **Ubicación:** `src/services/inicioData.js` -> `inicioEvents`
* **Formato de Fecha:** Obligatorio usar formato estándar ISO `YYYY-MM-DD`. El sistema extraerá el día numérico y el mes en español automáticamente.
* **Ordenamiento:** Los eventos se ordenan de manera ascendente (los eventos futuros aparecen primero).

#### Plantilla para nuevo evento:
```javascript
{
  date: '2026-06-15', // Formato estricto: YYYY-MM-DD
  color: '#ea580c', // Acento: '#00447e' (azul) o '#ea580c' (naranja)
  category: 'Seminario', // Ej: 'Institucional', 'Académico', 'Postgrado', 'Taller', 'Investigación'
  title: 'Nombre oficial del evento o conferencia',
  time: '14:00 — 16:00', // Horario del evento
  location: 'Auditorio de la Carrera, Piso 2', // Ubicación
  status: 'published',
},
```

---

### 2.3. Convocatorias (Auxiliaturas y Becas)
* **Ubicación:** `src/services/studentsCallsData.js` -> `studentsCalls`
* **Estados Admitidos:** `'Abierta'`, `'Proximamente'`, `'Concluida'`.
* **Iconos recomendados:** `GraduationCap` (Docencia), `Monitor` (Laboratorio/Soporte), `History` (Historial/Concluida).

#### Plantilla para nueva convocatoria:
```javascript
{
  id: 'docencia-2026-3', // ID único sin espacios
  title: 'Auxiliatura de Docencia - Gestión I/2027',
  desc: 'Descripción corta de las materias habilitadas y áreas académicas.',
  pubDate: '01 de Octubre, 2026',
  closeDate: '20 de Octubre, 2026',
  status: 'Abierta', // Opciones exactas: 'Abierta', 'Proximamente', 'Concluida'
  icon: GraduationCap, // Lucide icon importado al inicio del archivo
  plazas: 12,
  requirements: [
    'Matrícula vigente de la gestión actual.',
    'Récord académico actualizado y firmado.',
    'Fotocopia de Cédula de Identidad.',
  ],
  steps: [
    { t: 'Revisión de files', d: 'Validación de promedio mínimo y habilitación de materias.' },
    { t: 'Examen de competencia', d: 'Prueba escrita y exposición en el auditorio central.' },
  ],
},
```

---

### 2.4. Pasantías y Ofertas Laborales
* **Ubicación:** `src/services/studentsInternshipsData.js` -> `studentsInternshipOffers`
* **Campos clave:** `company` (nombre de la empresa), `role` (cargo del pasante), `type` (tipo de convenio: *Trabajo Dirigido*, *Pasantía de Grado*, *Pre-Profesional*).

#### Plantilla para nueva pasantía:
```javascript
{
  id: 'ypfb-planificacion', // ID único sin espacios
  company: 'YPFB Corporación',
  role: 'Pasante en Planificación y Modelos Predictivos',
  area: 'Análisis de Datos',
  reqs: 'Egresado o 9no semestre, dominio de R y análisis multivariante.',
  type: 'Pasantía de Grado / Trabajo Dirigido',
  date: 'Hasta el 15 de Nov, 2026', // Fecha límite de postulación
},
```

---

### 2.5. Hemeroteca y Revistas Externas
* **Ubicación:** `src/services/recursosRevistasData.js` -> `revistasData.publicaciones`
* **Campos clave:** `esExterno: true` abrirá el enlace en una nueva pestaña (para revistas indexadas fuera del dominio de la UMSA).

#### Plantilla para nueva revista:
```javascript
{
  id: 'pub-007',
  titulo: 'Journal of Applied Statistical Methods',
  editor: 'Scientific Publications Inc.',
  categoria: 'Revista Científica',
  alcance: 'Internacional',
  descripcion: 'Publicación orientada al desarrollo de nuevos algoritmos y metodologías de cómputo estadístico.',
  imagenPortada: '/images/recursos/revistas/nombre_portada.jpg', // Guardar en public/images/recursos/revistas/
  urlDestino: 'https://ejemplo-revista.org',
  esExterno: true,
},
```

---

### 2.6. Formularios y Documentos Descargables (Kardex)
* **Ubicación:** `src/services/recursosDocumentosData.js` -> `documentosData.documentos`
* **Ruta de Archivos:** Guardar siempre el archivo PDF/DOCX en la carpeta física `public/docs/` y referenciar la ruta iniciando con `/docs/` en `urlArchivo`.

#### Plantilla para nuevo documento:
```javascript
{
  id: 'doc-009',
  titulo: 'Formulario de Solicitud de Certificación de Malla (Kardex)',
  categoria: 'Formularios y Tramites', // Debe coincidir con alguna categoría existente
  formato: 'pdf', // 'pdf' o 'docx'
  peso: '480 KB',
  ultimaActualizacion: '2026-06-03', // YYYY-MM-DD para control interno
  urlArchivo: '/docs/formulario_certificacion_malla.pdf', // Archivo en public/docs/
},
```

---

## 3. ¿Cómo hacer más fácil la actualización? (Estrategias de Optimización)

Para evitar editar código fuente constantemente y agilizar la gestión administrativa de la web, se proponen las siguientes alternativas de implementación:

### A. Modularización de Datos (Uso de Archivos JSON Puros)
* **Idea:** En lugar de exportar variables dentro de archivos `.js` que contienen lógica y sintaxis propensa a errores (como importaciones de iconos o estructuras complejas), se pueden separar los datos a archivos `.json` limpios (ej. `noticias.json`).
* **Ventaja:** Un archivo JSON solo contiene datos puros. Es imposible que rompa la lógica de componentes web y es mucho más fácil de editar.

### B. Integración con Google Sheets como base de datos (Sin Backend)
* **Idea:** Dado que la administración y personal técnico maneja herramientas de oficina, se puede configurar una API de lectura directa que lea las noticias, la agenda y las convocatorias desde una **hoja de cálculo de Google Sheets pública**.
* **Ventaja:** La secretaria o director de carrera simplemente añade una fila en una hoja de Google Excel, y el sitio web se actualiza automáticamente al instante, sin necesidad de tocar ningún archivo ni realizar compilaciones de código (`npm run build`).

### C. Conexión con Firebase Firestore (Recomendado a mediano plazo)
* **Idea:** El portal ya cuenta con archivos de despliegue para Firebase (`firebase.json`). Se puede configurar una colección en la base de datos no-relacional Firestore de Firebase para las colecciones más volátiles.
* **Ventaja:** Se pueden actualizar los registros desde la consola amigable de Firebase en la web de forma segura.

---

## 4. Guía de Primeros Auxilios ante Errores

Si tras editar un archivo el sitio deja de funcionar o se muestra una **pantalla blanca**:

1. **Deshacer Cambios:** Presione inmediatamente `Ctrl + Z` en su editor de texto para retornar al estado funcional previo.
2. **Revisar comas finales:** Verifique que cada propiedad de los objetos y cada objeto dentro de los corchetes finalice con una coma `,`.
3. **No eliminar importaciones:** En archivos como `inicioData.js` o `studentsCallsData.js` hay importaciones de iconos al inicio (ej. `import { ... } from 'lucide-react'`). Asegúrese de no borrarlas.
4. **Verificación de consola:** Abra la consola de desarrollo del navegador (`F12` -> pestaña Console) para identificar la línea exacta y el archivo que está generando el error de sintaxis.
