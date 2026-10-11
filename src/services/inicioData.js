import { BarChart3, Database, Users, Trophy, GraduationCap, Mail, TrendingUp, FlaskConical, BookOpen } from 'lucide-react'
import { httpClient } from '../api/httpClient'
import { seccionPaginaApi } from './seccionPaginaService'

export const inicioSlides = [
  {
    title: 'Licenciatura en Estadística de la UMSA',
    subtitle: 'FORMACIÓN PROFESIONAL DE EXCELENCIA',
    description: 'Prepárate en análisis multivariante, modelado probabilístico, muestreo y ciencia de datos con el programa de pregrado de la carrera líder en Bolivia.',
    buttonText: 'Malla Curricular',
    to: '/pregrado/malla-curricular',
    secondaryTo: '/pregrado/perfil-profesional',
    imageUrl: '/images/inicio/imagen1.jpeg',
    accent: '#00447e',
    tag: '🎓 PREGRADO ACADÉMICO',
    stats: ['n = 380+', 'R² = 0.94', 'σ = 1.05'],
  },
  {
    title: 'Investigación Estadística y Consultoría con el IETA',
    subtitle: 'INSTITUTO DE ESTADÍSTICA TEÓRICA Y APLICADA',
    description: 'Desarrollamos modelos estadísticos avanzados y brindamos consultoría técnica especializada para resolver problemas socioeconómicos clave en Bolivia.',
    buttonText: 'Conocer el IETA',
    to: '/investigacion/acerca-ieta',
    secondaryTo: '/investigacion/proyectos',
    imageUrl: '/images/inicio/imagen2.png',
    accent: '#ea580c',
    tag: '🔬 CIENCIA APLICADA Y PROYECTOS',
    stats: ['R² = 0.98', 'p < 0.001', 'N = 100%'],
  },
  {
    title: 'Revista Científica Varianza',
    subtitle: 'DIFUSIÓN Y PUBLICACIÓN CIENTÍFICA',
    description: 'Explora y lee los artículos de investigación estadística, metodologías probabilísticas y análisis cuantitativos publicados por docentes e investigadores.',
    buttonText: 'Leer Revista',
    to: '/investigacion/revista-varianza',
    secondaryTo: '/investigacion/autores-varianza',
    imageUrl: '/images/inicio/imagen3.jpeg',
    accent: '#00447e',
    tag: '📊 PUBLICACIÓN OFICIAL',
    stats: ['ISSN = Activo', 'Vol = 2026', 'n = IETA'],
  },
];

export const inicioQuickLinks = [
  { title: 'Seguimiento de Egresados', description: 'Portal de empleabilidad', href: '/estudiantes/pasantias-bolsa-trabajo', icon: Users, color: '#00447e', stat: 'Activo' },
  { title: 'Olimpiadas de Estadística', description: 'Competencia académica', href: '#', icon: Trophy, color: '#ea580c', stat: '2026' },
  { title: 'Instituto de Investigación', description: 'IETA · Investigación y consultoría', href: '/investigacion/acerca-ieta', icon: FlaskConical, color: '#00447e', stat: 'IETA' },
  { title: 'Posgrado', description: 'Maestrías y diplomados', href: '/postgrado', icon: GraduationCap, color: '#ea580c', stat: 'Posgrado' }
];

export const inicioStats = [
  { value: '92', suffix: '%', title: 'Empleabilidad<br/>Directa', description: 'Egresados en puestos clave', color: '#00447e' },
  { value: '15', suffix: ':1', title: 'Ratio Estudiante<br/>Docente', description: 'Atención personalizada', color: '#ea580c' },
  { value: '25', suffix: '+', title: 'Investigaciones<br/>Publicadas', description: 'Gestión 2025-2026', color: '#00447e' },
  { value: 'A', suffix: '+', title: 'Acreditación<br/>Internacional', description: 'Mercosur Educativo', color: '#ea580c' }
];

// Noticias del Portal (preparado para CMS)
// - 'status': 'published' para mostrar, 'draft' para ocultar.
// - 'imageUrl': Opcional. Si se omite o está en blanco, se dibuja un elegante diseño de Comunicado Oficial.
// - 'expiryDate': Opcional (formato YYYY-MM-DD). Si la fecha actual supera este valor, la noticia se ocultará automáticamente.
export const inicioNews = [
  {
    id: 7,
    category: 'Comunicado',
    accent: '#00447e',
    date: '2026-06-02', // Fecha de publicación
    title: 'Comunicado de ampliación para recepción de files de auxiliaturas de cátedra',
    excerpt: 'Se comunica a los postulantes que la entrega física de documentos se extiende excepcionalmente en la secretaría del IETA.',
    // imageUrl se omite para renderizar el fondo geométrico del comunicado oficial
    readTime: '2 min',
    href: '/estudiantes/convocatorias-auxiliaturas',
    status: 'published',
  },
  {
    id: 8,
    category: 'Becas',
    accent: '#ea580c',
    date: '2026-05-01',
    title: 'Convocatoria caducada para becas de investigación en ciencia de datos',
    excerpt: 'Esta noticia ya no se mostrará públicamente porque su fecha de vencimiento (expiryDate) está en el pasado.',
    imageUrl: '/images/inicio/noticia_becas.jpg',
    readTime: '3 min',
    href: '#',
    status: 'published',
    expiryDate: '2026-05-15', // Venció el 15 de Mayo de 2026 (hoy es 3 de Junio de 2026)
  },
  {
    id: 1,
    category: 'Investigación',
    accent: '#ea580c',
    date: '2025-03-15', // Formato estándar de fecha
    title: 'Investigadores de la Carrera publican en revista ISI sobre modelos de pobreza multidimensional en Bolivia',
    excerpt: 'El equipo del IETA presentó resultados de tres años de investigación aplicada con datos del INE, siendo la primera publicación boliviana en el índice.',
    imageUrl: '/images/inicio/noticia_pobreza.jpg',
    readTime: '4 min',
    href: '/investigacion/proyectos',
    status: 'published',
  },
  {
    id: 2,
    category: 'Académico',
    accent: '#00447e',
    date: '2025-03-10',
    title: 'Apertura de inscripciones para la Maestría en Análisis de Datos 2025',
    excerpt: 'El Postgrado de la Carrera de Estadística anuncia el inicio de inscripciones para la nueva cohorte y programas de postgrado autofinanciados.',
    imageUrl: '/images/inicio/noticia_maestria.jpg',
    readTime: '3 min',
    href: '/postgrado/maestria-autofinanciada',
    status: 'published',
  },
  {
    id: 3,
    category: 'Eventos',
    accent: '#64748b',
    date: '2025-03-05',
    title: 'Feria de Ciencia de Datos: estudiantes presentan proyectos de análisis social',
    excerpt: 'La segunda edición reunió a más de 150 estudiantes con proyectos estadísticos innovadores orientados al desarrollo nacional.',
    imageUrl: '/images/inicio/noticia_feria.jpg',
    readTime: '5 min',
    href: '/investigacion/revista-varianza',
    status: 'published',
  },
  {
    id: 4,
    category: 'Institucional',
    accent: '#00447e',
    date: '2025-03-01',
    title: 'Actualización del Reglamento Académico de la Gestión de la Carrera',
    excerpt: 'Nuevos lineamientos aprobados para agilizar los procesos de evaluación y el seguimiento estudiantil.',
    imageUrl: '/images/inicio/noticia_reglamento.jpg',
    readTime: '2 min',
    href: '/institucional/reglamentos',
    status: 'published',
  },
  {
    id: 5,
    category: 'Postgrado',
    accent: '#ea580c',
    date: '2025-02-27',
    title: 'Becas parciales para diplomados en estadística aplicada en el sector público',
    excerpt: 'Convocatoria abierta para profesionales que buscan especializarse en el análisis de datos masivos y toma de decisiones.',
    imageUrl: '/images/inicio/noticia_becas.jpg',
    readTime: '3 min',
    href: '/postgrado/diplomados',
    status: 'published',
  },
  {
    id: 6,
    category: 'Convocatorias',
    accent: '#ea580c',
    date: '2025-02-20',
    title: 'Convocatoria de Auxiliaturas Académicas para la Gestión 2026',
    excerpt: 'Se publican las plazas oficiales para postulantes a auxiliares de docencia y laboratorio en diversas materias.',
    imageUrl: '/images/inicio/noticia_auxiliaturas.jpg',
    readTime: '4 min',
    href: '/estudiantes/convocatorias-auxiliaturas',
    status: 'published',
  },
];

// Eventos de la Agenda (preparado para CMS)
// Con 'status: published' para controlar su visibilidad
export const inicioEvents = [
  {
    date: '2025-03-20',
    color: '#00447e',
    category: 'Institucional',
    title: 'Inicio Censo Universitario 2025',
    time: '08:00 — 17:00',
    location: 'Campus Central UMSA',
    status: 'published',
  },
  {
    date: '2025-03-25',
    color: '#00447e',
    category: 'Académico',
    title: 'Ceremonia de Graduación 2024',
    time: '09:00 — 12:00',
    location: 'Auditorio Central UMSA',
    status: 'published',
  },
  {
    date: '2025-03-30',
    color: '#ea580c',
    category: 'Postgrado',
    title: 'Cierre de Inscripciones — Postgrado 2025',
    time: '08:00 — 16:00',
    location: 'Secretaría de Postgrado, Piso 3',
    status: 'published',
  },
  {
    date: '2025-04-04',
    color: '#64748b',
    category: 'Taller',
    title: 'Taller de Introducción a Python para Estadísticos',
    time: '14:00 — 18:00',
    location: 'Sala de Cómputo Principal',
    status: 'published',
  },
  {
    date: '2025-04-10',
    color: '#00447e',
    category: 'Investigación',
    title: 'Defensa de Tesis de Maestría en Estadística Aplicada',
    time: '09:00 — 13:00',
    location: 'Sala del IETA',
    status: 'published',
  },
  {
    date: '2025-04-18',
    color: '#ea580c',
    category: 'Seminario',
    title: 'Seminario de Big Data e Inteligencia Artificial en INE Bolivia',
    time: '10:00 — 12:00',
    location: 'Auditorio de la Facultad de Ciencias Puras',
    status: 'published',
  },
];

export const inicioGraduateProfile = {
  badgeValue: '92',
  badgeSuffix: '%',
  badgeLabel: 'Tasa de Empleo Directo',
  titleLines: ['PERFIL DEL', 'EGRESADO'],
  description:
    'Nuestros profesionales dominan el lenguaje de los datos. Están capacitados para liderar la transformación digital mediante el modelado matemático riguroso.',
};

export const inicioGraduateRoles = [
  {
    title: 'Analista de Riesgos',
    subtitle: 'Sectores Bancarios y Seguros',
    icon: BarChart3,
    accent: '#ea580c',
  },
  {
    title: 'Data Scientist',
    subtitle: 'IA y Machine Learning Avanzado',
    icon: Database,
    accent: '#00447e',
  },
  {
    title: 'Consultor Público',
    subtitle: 'Políticas Basadas en Evidencia',
    icon: TrendingUp,
    accent: '#00447e',
  },
  {
    title: 'Investigador',
    subtitle: 'Desarrollo de Nuevas Metodologías',
    icon: FlaskConical,
    accent: '#00447e',
  },
];

export const inicioIETAContent = {
  eyebrow: 'IETA INVESTIGACIÓN',
  title: ['CIENCIA', 'APLICADA', 'INSTITUTO', 'IETA'],
  description:
    'El Instituto de Estadística Teórica y Aplicada (IETA) es el motor de investigación de nuestra facultad. Desarrollamos modelos de alta precisión para resolver desafíos críticos de Bolivia.',
  imageUrl: '/images/inicio/imagen4.jpeg',
  badge: { label: 'R²', value: '0.98', subtitle: 'Poder Predictivo' },
  projects: [
    {
      title: 'Modelado Multivariante',
      description: 'Análisis de pobreza multidimensional con organismos internacionales.',
      icon: 'LineChart'
    },
    {
      title: 'Ciencia de Datos Pública',
      description: 'Soporte técnico avanzado para el INE y UDAPE.',
      icon: 'Database'
    },
  ],
  ctaLabel: 'Explorar Investigaciones',
  ctaHref: '/investigacion/proyectos',
};

export const inicioPartners = [
  { name: 'INE Bolivia', abbr: 'INE' },
  { name: 'Banco Central de Bolivia', abbr: 'BCB' },
  { name: 'Ministerio de Economía', abbr: 'MEF' },
  { name: 'UDAPE', abbr: 'UDAPE' },
  { name: 'Banco Mundial', abbr: 'BM' },
  { name: 'OPS / OMS', abbr: 'OPS' },
  { name: 'CEPAL', abbr: 'CEPAL' },
  { name: 'Banco BNB', abbr: 'BNB' },
  { name: 'UNFPA Bolivia', abbr: 'UNFPA' },
  { name: 'Ministerio de Salud', abbr: 'MSD' },
  { name: 'Banco Unión', abbr: 'BU' },
  { name: 'PNUD Bolivia', abbr: 'PNUD' },
];

// Atajos y Servicios Clave de la Plataforma Web ("Cosas de la web en sí")
export const inicioPortalServices = [
  {
    title: 'Plan de Estudios',
    description: 'Consulta las materias, requisitos y la malla curricular vigente de la carrera de Estadística.',
    href: '/pregrado/malla-curricular',
    icon: 'GraduationCap',
    color: '#00447e',
    tag: 'Pregrado',
  },
  {
    title: 'Calendario Académico',
    description: 'Fechas oficiales para inscripciones, exámenes, defensas, recesos y feriados institucionales.',
    href: '/pregrado/calendario-academico',
    icon: 'Calendar',
    color: '#ea580c',
    tag: 'Fechas Clave',
  },
  {
    title: 'Biblioteca Virtual',
    description: 'Catálogo completo en línea de libros y material de referencia científica para la carrera.',
    href: '/recursos/biblioteca',
    icon: 'Library',
    color: '#00447e',
    tag: 'Biblioteca',
  },
  {
    title: 'Cybertesis UMSA',
    description: 'Buscador y repositorio digital para acceder a tesis y proyectos de grado aprobados.',
    href: '/recursos/tesis',
    icon: 'FolderOpen',
    color: '#ea580c',
    tag: 'Tesis Digitales',
  },
  {
    title: 'Convocatorias Oficiales',
    description: 'Avisos oficiales de auxiliaturas académicas de docencia e investigación de la carrera.',
    href: '/estudiantes/convocatorias-auxiliaturas',
    icon: 'Megaphone',
    color: '#00447e',
    tag: 'Auxiliaturas',
  },
  {
    title: 'Guía de Trámites',
    description: 'Requisitos y pasos a seguir para matriculación académica, reincorporaciones y traspasos.',
    href: '/estudiantes/guia-seguimiento-tramites',
    icon: 'ClipboardList',
    color: '#ea580c',
    tag: 'Trámites',
  },
  {
    title: 'Revista Varianza',
    description: 'Publicaciones científicas del Instituto de Estadística Teórica y Aplicada (IETA) para lectura directa.',
    href: '/investigacion/revista-varianza',
    icon: 'BookOpen',
    color: '#00447e',
    tag: 'Revista Científica',
  },
  {
    title: 'Proyectos del IETA',
    description: 'Explora las líneas de investigación, consultorías estadísticas y desarrollo académico activo.',
    href: '/investigacion/proyectos',
    icon: 'FlaskConical',
    color: '#ea580c',
    tag: 'Investigación',
  },
];

// ---------------------------------------------------------------
// Noticias y Agenda desde la API (con respaldo en los datos estáticos)
// ---------------------------------------------------------------
const API_BASE_URL = (import.meta.env.VITE_API_URL ?? '/api').replace(/\/$/, '')

const toDay = (value) => (value ? String(value).slice(0, 10) : '')

const resolveNewsImage = (url) => {
  if (!url || typeof url !== 'string') return ''
  const trimmed = url.trim()
  return trimmed.startsWith('/uploads/') ? `${API_BASE_URL}${trimmed}` : trimmed
}

const mapNoticia = (row) => {
  const item = {
    id: row.id,
    category: row.categoria,
    accent: row.color,
    date: toDay(row.fecha),
    title: row.titulo,
    excerpt: row.extracto,
    readTime: row.tiempoLectura,
    href: row.enlace,
    status: row.estado,
  }
  const imageUrl = resolveNewsImage(row.imagenUrl)
  if (imageUrl) item.imageUrl = imageUrl
  const expiryDate = toDay(row.fechaExpiracion)
  if (expiryDate) item.expiryDate = expiryDate
  return item
}

const mapEvento = (row) => ({
  date: toDay(row.fecha),
  color: row.color,
  category: row.categoria,
  title: row.titulo,
  time: row.hora,
  location: row.ubicacion,
  status: row.estado,
})

export async function getInicioNoticiasEventos() {
  const [noticiasResult, eventosResult] = await Promise.allSettled([
    httpClient('/noticia'),
    httpClient('/evento'),
  ])

  const noticias =
    noticiasResult.status === 'fulfilled' && Array.isArray(noticiasResult.value)
      ? noticiasResult.value.map(mapNoticia)
      : []

  const eventos =
    eventosResult.status === 'fulfilled' && Array.isArray(eventosResult.value)
      ? eventosResult.value.map(mapEvento)
      : []

  return {
    news: noticias.length > 0 ? noticias : inicioNews,
    events: eventos.length > 0 ? eventos : inicioEvents,
  }
}

// ---------------------------------------------------------------
// Textos editables de Inicio (seccion_pagina, slug '/')
// ---------------------------------------------------------------
const INICIO_PAGE_SLUG = '/'

export const inicioDataFallback = {
  slides: inicioSlides,
  quickLinks: inicioQuickLinks,
  stats: inicioStats,
  graduateProfile: inicioGraduateProfile,
  graduateRoles: inicioGraduateRoles,
  ietaContent: inicioIETAContent,
  partners: inicioPartners,
  portalServices: inicioPortalServices,
}

const getInicioRecordValue = (records, key, fallback) => {
  const record = records.find(
    (item) => (item.claveCampo ?? item.clave_campo) === key,
  )

  return record?.valor ?? fallback
}

const getInicioDataFromRecords = (records) => {
  const value = (key, fallback) => getInicioRecordValue(records, key, fallback)
  const nn = (index) => String(index + 1).padStart(2, '0')

  return {
    slides: inicioSlides.map((slide, index) => {
      const p = `inicio_slide_${nn(index)}_`
      return {
        ...slide,
        subtitle: value(`${p}subtitulo`, slide.subtitle),
        title: value(`${p}titulo`, slide.title),
        description: value(`${p}descripcion`, slide.description),
        buttonText: value(`${p}boton`, slide.buttonText),
        tag: value(`${p}etiqueta`, slide.tag),
        imageUrl: value(`${p}imagen`, slide.imageUrl),
        to: value(`${p}enlace_principal`, slide.to),
        secondaryTo: value(`${p}enlace_secundario`, slide.secondaryTo),
        stats: slide.stats.map((stat, j) => value(`${p}stat_${nn(j)}`, stat)),
      }
    }),

    quickLinks: inicioQuickLinks.map((link, index) => {
      const p = `inicio_acceso_${nn(index)}_`
      return {
        ...link,
        title: value(`${p}titulo`, link.title),
        description: value(`${p}descripcion`, link.description),
        href: value(`${p}enlace`, link.href),
        stat: value(`${p}stat`, link.stat),
      }
    }),

    stats: inicioStats.map((stat, index) => {
      const p = `inicio_stat_${nn(index)}_`
      return {
        ...stat,
        value: value(`${p}valor`, stat.value),
        suffix: value(`${p}sufijo`, stat.suffix),
        title: value(`${p}titulo`, stat.title),
        description: value(`${p}descripcion`, stat.description),
      }
    }),

    graduateProfile: {
      ...inicioGraduateProfile,
      badgeValue: value('inicio_perfil_badge_valor', inicioGraduateProfile.badgeValue),
      badgeSuffix: value('inicio_perfil_badge_sufijo', inicioGraduateProfile.badgeSuffix),
      badgeLabel: value('inicio_perfil_etiqueta', inicioGraduateProfile.badgeLabel),
      titleLines: [
        value('inicio_perfil_titulo_01', inicioGraduateProfile.titleLines[0]),
        value('inicio_perfil_titulo_02', inicioGraduateProfile.titleLines[1]),
      ],
      description: value('inicio_perfil_descripcion', inicioGraduateProfile.description),
    },

    graduateRoles: inicioGraduateRoles.map((role, index) => {
      const p = `inicio_rol_${nn(index)}_`
      return {
        ...role,
        title: value(`${p}titulo`, role.title),
        subtitle: value(`${p}subtitulo`, role.subtitle),
      }
    }),

    ietaContent: {
      ...inicioIETAContent,
      eyebrow: value('inicio_ieta_eyebrow', inicioIETAContent.eyebrow),
      title: inicioIETAContent.title.map((line, index) =>
        value(`inicio_ieta_titulo_${nn(index)}`, line),
      ),
      description: value('inicio_ieta_descripcion', inicioIETAContent.description),
      imageUrl: value('inicio_ieta_imagen', inicioIETAContent.imageUrl),
      badge: {
        ...inicioIETAContent.badge,
        label: value('inicio_ieta_badge_etiqueta', inicioIETAContent.badge.label),
        value: value('inicio_ieta_badge_valor', inicioIETAContent.badge.value),
        subtitle: value('inicio_ieta_badge_subtitulo', inicioIETAContent.badge.subtitle),
      },
      projects: inicioIETAContent.projects.map((project, index) => ({
        ...project,
        title: value(`inicio_ieta_proyecto_${nn(index)}_titulo`, project.title),
        description: value(`inicio_ieta_proyecto_${nn(index)}_descripcion`, project.description),
      })),
      ctaLabel: value('inicio_ieta_boton_texto', inicioIETAContent.ctaLabel),
      ctaHref: value('inicio_ieta_boton_enlace', inicioIETAContent.ctaHref),
    },

    partners: inicioPartners.map((partner, index) => {
      const p = `inicio_aliado_${nn(index)}_`
      return {
        ...partner,
        name: value(`${p}nombre`, partner.name),
        abbr: value(`${p}sigla`, partner.abbr),
      }
    }),

    portalServices: inicioPortalServices.map((service, index) => {
      const p = `inicio_servicio_${nn(index)}_`
      return {
        ...service,
        title: value(`${p}titulo`, service.title),
        description: value(`${p}descripcion`, service.description),
        href: value(`${p}enlace`, service.href),
      }
    }),
  }
}

export async function getInicioData() {
  const records = await seccionPaginaApi.list(INICIO_PAGE_SLUG)
  return records.length > 0
    ? getInicioDataFromRecords(records)
    : inicioDataFallback
}