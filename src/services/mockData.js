import {
  GraduationCap,
  Mail,
  BarChart3,
  Database,
  TrendingUp,
  FlaskConical,
  Trophy,
  Users
} from 'lucide-react';

/**
 * @typedef {Object} CmsLink
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} CmsNewsItem
 * @property {number} id
 * @property {string} category
 * @property {string} accent
 * @property {string} date
 * @property {string} title
 * @property {string} excerpt
 * @property {string} imageUrl
 * @property {string} readTime
 * @property {string} href
 */

/**
 * @typedef {Object} CmsEventItem
 * @property {string} day
 * @property {string} month
 * @property {string} color
 * @property {string} category
 * @property {string} title
 * @property {string} time
 * @property {string} location
 */

export const mockNavItems = [
  {
    label: 'Inicio',
    href: '/',
    accent: '#00447e',
    align: 'left',
  },
  {
    label: 'Institucional',
    href: '/institucional/acerca',
    accent: '#00447e',
    align: 'left',
    children: [
      { label: 'Acerca de la Carrera (Historia, Misión, Visión)', href: '/institucional/acerca' },
      { label: 'Acreditación y Evaluación Continua', href: '/institucional/acreditacion' },
      { label: 'Autoridades (Director y HCC)', href: '/institucional/autoridades' },
      { label: 'Plantel Docente y Administrativo', href: '/institucional/docentes' },
      { label: 'Convenios Interinstitucionales', href: '/institucional/convenios' },
      { label: 'Reglamentos y Resoluciones', href: '/institucional/reglamentos' },
    ]
  },
  {
    label: 'Pregrado',
    href: '/pregrado/perfil-profesional',
    accent: '#00447e',
    align: 'left',
    children: [
      { label: 'Perfil Profesional y Laboral', href: '/pregrado/perfil-profesional' },
      { label: 'Plan de Estudios y Malla Curricular', href: '/pregrado/malla-curricular' },
      { label: 'Admisiones y Modalidades de Ingreso', href: '/pregrado/admisiones' },
      { label: 'Convalidaciones', href: '/pregrado/convalidaciones' },
      { label: 'Modalidades de Graduación', href: '/pregrado/modalidades-graduacion' },
      { label: 'Calendario Académico', href: '/pregrado/calendario-academico' },
    ],
  },
  {
    label: 'Postgrado',
    href: '/postgrado/maestria-terminal',
    accent: '#00447e',
    align: 'center',
    children: [
      { label: 'Maestría Terminal', href: '/postgrado/maestria-terminal' },
      { label: 'Maestría Autofinanciada', href: '/postgrado/maestria-autofinanciada' },
      { label: 'Diplomados y Especialidades', href: '/postgrado/diplomados-especialidades' },
    ],
  },
  {
    label: 'Estudiantes',
    href: '#estudiantes',
    accent: '#ea580c',
    align: 'center',
    children: [
      { label: 'Guía y Seguimiento de Trámites', href: '/estudiantes/guia-seguimiento-tramites' },
      { label: 'Centro de Estudiantes (CEE)', href: '/estudiantes/centro-estudiantes' },
      { label: 'Convocatorias (Auxiliaturas)', href: '/estudiantes/convocatorias-auxiliaturas' },
      { label: 'Pasantías y Bolsa de Trabajo', href: '/estudiantes/pasantias-bolsa-trabajo' },
      { label: 'Sociedades Científicas', href: '/estudiantes/sociedad-cientifica' },
    ],
  },
  {
    label: 'Investigación',
    href: '#investigacion',
    accent: '#00447e',
    align: 'right',
    children: [
      { label: 'Acerca del IETA', href: '/investigacion/acerca-ieta' },
      { label: 'Personal', href: '/investigacion/personal' },
      { label: 'Investigación y Proyectos', href: '/investigacion/proyectos' },
      { label: 'Revista Varianza', href: '/investigacion/revista-varianza' },
      { label: 'Autores Varianza', href: '/investigacion/autores-varianza' },
      { label: 'Servicios y Capacitación', href: '/investigacion/servicios' },
      { label: 'Contacto IETA', href: '/investigacion/contacto' },
    ],
  },
  {
    label: 'Recursos',
    href: '#recursos',
    accent: '#00447e',
    align: 'right',
    children: [
      { label: 'Biblioteca Especializada', href: '/recursos/biblioteca' },
      { label: 'Banco de Datos (Censos y Encuestas)', href: '/recursos/banco-datos' },
      { label: 'Revistas y Publicaciones', href: '/recursos/revistas' },
      { label: 'Repositorio de Tesis y Proyectos (Cyber-Tesis)', href: '/recursos/tesis' },
      { label: 'Documentos y Reglamentos Digitales', href: '/recursos/documentos' },
    ],
  },
  {
    label: 'Contacto',
    href: '/contacto',
    accent: '#ea580c',
    align: 'right',
  },
];



export const footerAbout = {
  title: 'Carrera de Estadística',
  institution: 'Universidad Mayor de San Andrés',
  description: 'Líder en la formación académica y científica de profesionales en estadística, ciencia de datos y modelado predictivo en Bolivia desde 1974. Comprometidos con el desarrollo nacional.',
  address: 'Av. Villazón N° 1995, Plaza del Bicentenario - Zona Central.',
  phones: [
    { display: '+591 244-2100', clean: '+59122442100' },
    { display: '+591 261-2915', clean: '+59122612915' },
  ],
  email: 'estadistica@umsa.bo',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.460879555139!2d-68.13010372483162!3d-16.504289884252613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206e2329241b%3A0x6b88939c3629e843!2sMonoblock%20Central%20UMSA!5e0!3m2!1ses!2sbo!4v1709489245100!5m2!1ses!2sbo',
  schedule: [
    'Lunes a Viernes: 08:00 — 16:00',
    'Sábados: Cerrado'
  ],
  copyright: 'Carrera de Estadística — Universidad Mayor de San Andrés. Todos los derechos reservados.'
};

export const footerColumns = [
  {
    title: 'Institucional',
    links: [
      { label: 'Acerca de la Carrera', href: '/institucional/acerca' },
      { label: 'Acreditación y Calidad', href: '/institucional/acreditacion' },
      { label: 'Autoridades y HCC', href: '/institucional/autoridades' },
      { label: 'Docentes y Plantel', href: '/institucional/docentes' },
      { label: 'Convenios Interinstitucionales', href: '/institucional/convenios' },
      { label: 'Reglamentos y Resoluciones', href: '/institucional/reglamentos' }
    ]
  },
  {
    title: 'Pregrado y Postgrado',
    links: [
      { label: 'Perfil Profesional', href: '/pregrado/perfil-profesional' },
      { label: 'Plan de Estudios', href: '/pregrado/malla-curricular' },
      { label: 'Admisiones 2026', href: '/pregrado/admisiones' },
      { label: 'Calendario Académico', href: '/pregrado/calendario-academico' },
      { label: 'Maestría Académica', href: '/postgrado/maestria-terminal' },
      { label: 'Maestría Autofinanciada', href: '/postgrado/maestria-autofinanciada' },
      { label: 'Diplomados y Especialidades', href: '/postgrado/diplomados' }
    ]
  },
  {
    title: 'Área Estudiantil',
    links: [
      { label: 'Guía de Trámites', href: '/estudiantes/guia-seguimiento-tramites' },
      { label: 'Centro de Estudiantes (CEE)', href: '/estudiantes/centro-estudiantes' },
      { label: 'Convocatorias y Auxiliaturas', href: '/estudiantes/convocatorias-auxiliaturas' },
      { label: 'Pasantías y Bolsa de Trabajo', href: '/estudiantes/pasantias' },
      { label: 'Sociedad Científica', href: '/estudiantes/sociedad-cientifica' }
    ]
  },
  {
    title: 'Investigación y Recursos',
    links: [
      { label: 'Biblioteca Especializada', href: '/recursos/biblioteca' },
      { label: 'Repositorio Cybertesis', href: '/recursos/tesis' },
      { label: 'Revista Científica Varianza', href: '/investigacion/revista-varianza' },
      { label: 'Proyectos del Instituto (IETA)', href: '/investigacion/proyectos' },
      { label: 'Banco de Datos Oficiales', href: '/recursos/banco-datos' },
      { label: 'Documentos Digitales', href: '/recursos/documentos' }
    ]
  }
];

export const mockSocialLinks = [
  { href: 'https://www.facebook.com/estadisticaumsa', label: 'Facebook', icon: 'Facebook' },
];

export const mockDirectAccessLinks = [
  { label: 'Revista Varianza (OJS)', href: 'https://ojs.umsa.bo/ojs/index.php/varianza' },
  { label: 'Biblioteca Especializada (Koha)', href: 'https://koha.umsa.bo/catalog?collection=estadistica' },
  { label: 'Webmail UMSA', href: 'https://correo.umsa.bo' },
];

export const mockPostgradoCTA = {
  titleLine1: 'Lidera el',
  titleLine2: 'análisis global',
  quote: '"El futuro pertenece a quienes pueden sintetizar y modelar información cuantitativa".',
  buttonLabel: 'Contactar Coordinación Postgrado',
  bgImage: '/images/postgrado/postgrado_cta_bg.jpg'
};

export const mockInvestigacionCTA = {
  buttonLabel: 'Solicitar Cotización / Presupuesto',
};