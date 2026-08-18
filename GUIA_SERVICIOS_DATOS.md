# Guia de Gestion de Contenidos del Portal Web
**Carrera de Estadistica - Universidad Mayor de San Andres**

El presente documento establece los lineamientos técnicos y procedimentales para la actualización y gestión del contenido estático del portal web institucional. Está dirigido al personal administrativo encargado de la actualización de la plataforma, sin requerir conocimientos avanzados de programación.

La arquitectura del portal centraliza la información en archivos de datos ubicados en el directorio `src/services/`. Cada archivo gestiona una sección específica de la plataforma web.

---

## 1. Lineamientos Generales de Edición (Sintaxis Estricta)

Los archivos de configuración están desarrollados bajo el estándar JavaScript. La modificación de estos archivos requiere precisión absoluta, dado que la alteración de caracteres estructurales comprometerá la disponibilidad del portal web (generando un error general de visualización o "pantalla blanca").

### 1.1. Estructura Básica de un Registro
Un registro de información estándar mantiene la siguiente estructura:

```javascript
{
  id: '001',                     // Identificador interno (No modificar)
  titulo: 'Reglamento 2026',     // Texto visible: Obligatoriamente entre comillas
  formato: 'pdf',                // Texto visible: Obligatoriamente entre comillas
  urlArchivo: '/docs/reg.pdf'    // Ruta del enlace: Obligatoriamente entre comillas
},                               // Delimitador de cierre: Obligatoriamente terminar con coma
```

### 1.2. Reglas Estructurales Inquebrantables
1. **Uso de Comillas (`' '` o `" "`):** Toda cadena de texto o enlace de recurso debe estar contenida estrictamente entre comillas.
2. **Uso de Comas (`,`):** Cada atributo dentro de un bloque debe finalizar con una coma. Asimismo, cada bloque completo de información (encerrado entre `{ }`) debe estar separado del siguiente bloque consecutivo por una coma.
3. **Uso de Llaves y Corchetes (`{}`, `[]`):** Estos caracteres agrupan las estructuras de datos. Su eliminación accidental resultará en un fallo crítico del sistema.

---

## 2. Gestión de Recursos Multimedia (Imágenes)

Para la actualización de fotografías institucionales, autoridades, personal docente o banners, se contemplan dos procedimientos aprobados:

### 2.1. Carga de Imágenes Institucionales (Método Local Recomendado)
Este método es obligatorio para personal, autoridades y eventos oficiales.
1. Prepare la imagen asegurándose de que el nombre del archivo no contenga espacios ni caracteres especiales (ej. `docente-titular.jpg`).
2. Transfiera el archivo al directorio del repositorio designado: `public/images/`.
3. En el archivo de configuración correspondiente, asigne la ruta relativa iniciando con `/images/`.

```javascript
// Ejemplo de asignación de imagen local
img: '/images/docente-titular.jpg'
```

### 2.2. Uso de Imágenes Externas (Repositorios Públicos)
Para recursos visuales genéricos, es admisible referenciar un enlace externo (URL) válido y seguro (HTTPS).

```javascript
// Ejemplo de asignación externa
img: 'https://images.unsplash.com/photo-ejemplo?w=800'
```

---

## 3. Gestión de Archivos Descargables (PDF, DOCX)

La publicación de reglamentos, resoluciones, mallas curriculares y material académico debe seguir un procedimiento estandarizado:

1. El archivo (ej. `calendario-2026.pdf`) debe ser depositado en el directorio: `public/docs/`.
2. Identifique el archivo de configuración pertinente (ej. `recursosDocumentosData.js`).
3. Actualice o cree un registro asignando en la propiedad `urlArchivo` o equivalente la ruta local del documento.

```javascript
// Ejemplo de asignación de documento
urlArchivo: '/docs/calendario-2026.pdf'
```

---

## 4. Directorio y Clasificación de Archivos de Configuración

A continuación, se detalla exhaustivamente la función de los 35 archivos de configuración presentes en el directorio `src/services/`, asegurando cobertura total de las dependencias de datos del sistema.

### 4.1. Información Institucional

*   **`inicioData.js`:** Controla todo el contenido dinámico de la portada principal (Landing Page). Administra el carrusel de bienvenida (slides), enlaces rápidos, estadísticas institucionales, noticias destacadas, eventos, perfil del egresado, proyectos del IETA, logos de convenios y testimonios de ex-alumnos.
*   **`aboutData.js`:** Administra la información de la sección "Acerca de la Carrera". Incluye la misión, visión, historia, hitos cronológicos y estadísticas institucionales.
*   **`accreditationData.js`:** Controla el contenido referente a la acreditación institucional frente al CEUB.
*   **`authoritiesData.js`:** Gestiona el directorio de autoridades ejecutivas (Director, Decano) y los miembros del Honorable Consejo de Carrera (estamento docente y estudiantil).
*   **`contactData.js`:** Centraliza la información de contacto oficial: dirección física, líneas telefónicas, correos electrónicos corporativos y enlaces a redes sociales.
*   **`conveniosData.js`:** Almacena el registro de convenios interinstitucionales y acuerdos académicos vigentes.
*   **`staffData.js`:** Mantiene el directorio completo del plantel administrativo y cuerpo docente.
*   **`regulationsData.js`:** Administra los estatutos, reglamentos internos y normativas universitarias.

### 4.2. Gestión Académica de Pregrado

*   **`pregradoAdmissionsData.js`:** Gestiona la información sobre modalidades de admisión, requisitos y cronogramas de inscripción.
*   **`pregradoConvalidationData.js`:** Detalla los procedimientos administrativos para el trámite de convalidación de materias.
*   **`pregradoCurriculumData.js`:** **[Archivo Crítico]** Estructura el Plan de Estudios y el Calendario Académico. Los prerrequisitos deben ser precisos.
*   **`pregradoGraduationData.js`:** Describe las modalidades de graduación autorizadas (Tesis, Proyecto de Grado, Trabajo Dirigido).
*   **`pregradoProfileData.js`:** Describe el perfil profesional del egresado y su campo de acción laboral.

### 4.3. Programas de Postgrado

*   **`postgradoDiplomadosData.js`:** Gestiona la oferta vigente de diplomados, detallando costos y requisitos.
*   **`postgradoTerminalData.js`:** Controla la información sobre programas terminales como maestrías y especialidades.
*   **`postgradoAutofinanciadaData.js`:** Información complementaria respecto a programas autofinanciados de formación continua.

### 4.4. Instituto de Estadística Teórica y Aplicada (IETA)

*   **`investigacionAcercaIetaData.js`:** Define los principios y estructura organizativa del IETA.
*   **`investigacionProyectosData.js`:** Administra el portafolio de proyectos de investigación, su estado e investigadores responsables.
*   **`investigacionPersonalData.js`:** Directorio de docentes e investigadores adscritos al instituto.
*   **`investigacionServiciosData.js`:** Cataloga los servicios de asesoría y consultoría ofrecidos a terceros.
*   **`investigacionContactoData.js`:** Datos de contacto específicos de las dependencias del IETA.
*   **`investigacionRevistaVarianzaData.js`:** Gestiona las ediciones publicadas de la revista "Varianza" y enlaces a PDF.
*   **`investigacionAutoresVarianzaData.js`:** Repositorio estructurado de autores que contribuyen a la revista científica.

### 4.5. Recursos y Repositorio Documental

*   **`recursosData.js`:** Contiene la estructura general y metadatos del centro de recursos digitales.
*   **`recursosDocumentosData.js`:** Repositorio principal de descarga para formularios de Kardex, resoluciones académicas y calendarios en PDF.
*   **`recursosBibliotecaData.js`:** Listado de material bibliográfico referencial y enlaces a la biblioteca digital.
*   **`recursosRevistasData.js`:** Enlaces a recursos hemerográficos y revistas indexadas.
*   **`recursosTesisData.js`:** Repositorio destacado de tesis y trabajos de grado sobresalientes.
*   **`recursosBancoDatosData.js`:** Registro de enlaces a bases de datos e información estadística pública (INE, etc.).

### 4.6. Gestión y Servicios Estudiantiles

*   **`studentsCenterData.js`:** Información representativa del Centro de Estudiantes (CEE).
*   **`studentsScientificSocietyData.js`:** Información organizativa de la Sociedad Científica de Estudiantes de Estadística (SCEE).
*   **`studentsInternshipsData.js`:** Plataforma de difusión para pasantías, becas y bolsas de trabajo.
*   **`studentsProceduresData.js`:** Manuales instructivos para la gestión de trámites estudiantiles regulares.
*   **`studentsCallsData.js`:** Publicación de convocatorias oficiales (Auxiliaturas, Becas institucionales).

### 4.7. Archivos de Desarrollo (Uso Técnico)

*   **`mockData.js`:** Es un archivo central muy importante. Ahora contiene la configuración transversal de la página: administra la navegación principal (Header), todos los enlaces, contactos y ubicación del pie de página (Footer), y textos globales de llamados a la acción (CTAs). Su modificación impacta directamente la estructura de navegación y contacto de todo el sitio.

---

## 5. Protocolo de Resolución de Incidentes

Ante fallos de visualización posterior a una actualización de contenido, aplique las siguientes medidas correctivas:

1. **Interrupción de Servicio (Pantalla Blanca de Error):**
   *   **Diagnóstico:** Violación de la sintaxis JavaScript descrita en la Sección 1.2.
   *   **Resolución:** Proceda a deshacer la última modificación en su editor de código (Comando `Ctrl + Z`). Revise exhaustivamente la apertura y cierre de llaves `{}`, corchetes `[]` y la presencia de comas `,` separadoras.

2. **Falla en la Renderización de Recursos Gráficos (Imagen Rota):**
   *   **Diagnóstico:** Ruta de enlace incorrecta o archivo inexistente en el directorio.
   *   **Resolución:** Verifique la exactitud de la ruta asignada. Para imágenes locales, confirme que el archivo reside en `public/images/` y que la nomenclatura coincida exactamente, respetando mayúsculas y extensiones (`.jpg`, `.png`).

3. **Inconsistencia al Eliminar Registros:**
   *   **Diagnóstico:** Eliminación parcial de una estructura de bloque.
   *   **Resolución:** Cerciórese de eliminar la totalidad de la estructura del objeto `{ ... }`, incluyendo la coma subsecuente si estuviese presente.
