import {
  Activity,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardList,
  Download,
  Eye,
  FileSearch,
  FileSignature,
  GraduationCap,
  Search,
  Send,
  ShieldCheck,
  Sigma,
  Target,
} from 'lucide-react'

export const studentsInternshipsHero = {
  eyebrow: 'Vinculación laboral y titulación',
  title: ['Gestión de Pasantías y', 'Prácticas Pre-Profesionales'],
  description:
    'Conecta tu formación estadística con instituciones públicas y privadas. Encuentra plazas activas, requisitos y rutas de postulación.',
  leftShape: Sigma,
  rightShape: Building2,
}

export const studentsInternshipModalities = [
  {
    title: 'Pasantía de Grado',
    tag: 'Titulación directa',
    icon: GraduationCap,
    desc: 'Modalidad para obtener licenciatura cumpliendo horas de práctica en análisis de datos bajo supervisión académica.',
    tone: 'blue',
  },
  {
    title: 'Pasantía Pre-Profesional',
    tag: 'Experiencia laboral',
    icon: Briefcase,
    desc: 'Prácticas por convenio para fortalecer experiencia en el mercado antes del egreso.',
    tone: 'teal',
  },
  {
    title: 'Trabajo Dirigido',
    tag: 'Proyecto institucional',
    icon: Target,
    desc: 'Desarrollo de proyectos de mejora estadística dentro de instituciones aliadas con tutorías mixtas.',
    tone: 'orange',
  },
]

export const studentsInternshipProcess = [
  {
    id: 1,
    title: 'Postulación',
    desc: 'Selecciona una plaza del banco de ofertas o presenta carta de aceptación externa.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Habilitación',
    desc: 'Kárdex valida avance académico mínimo según reglamento vigente.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: 'Convenio',
    desc: 'Firma tripartita entre UMSA, institución receptora y estudiante.',
    icon: FileSignature,
  },
  {
    id: 4,
    title: 'Ejecución',
    desc: 'Desarrollo de actividades estadísticas y reportes periódicos de avance.',
    icon: Activity,
  },
  {
    id: 5,
    title: 'Defensa',
    desc: 'Informe final y defensa ante tribunal cuando aplique titulación.',
    icon: Award,
  },
]

export const studentsInternshipOffers = [
  {
    id: 'ine-demografia',
    company: 'Instituto Nacional de Estadística (INE)',
    role: 'Pasante en Análisis Demográfico',
    area: 'Sector Público',
    reqs: '8° semestre, manejo de SPSS y R.',
    type: 'Trabajo Dirigido / Grado',
    date: 'Hasta el 30 de noviembre de 2026',
  },
  {
    id: 'bnb-riesgos',
    company: 'Banco Nacional de Bolivia (BNB)',
    role: 'Asistente de Riesgos y Credit Scoring',
    area: 'Finanzas',
    reqs: '7° semestre, SQL, Python y modelos logísticos.',
    type: 'Pre-Profesional',
    date: 'Hasta el 15 de diciembre de 2026',
  },
  {
    id: 'mefp-economia',
    company: 'Ministerio de Economía',
    role: 'Analista de Datos Económicos',
    area: 'Gobierno',
    reqs: 'Egresado, econometría y series de tiempo.',
    type: 'Trabajo Dirigido',
    date: 'Hasta el 5 de enero de 2027',
  },
]

export const studentsInternshipRequirements = [
  'Matrícula universitaria de la gestión actual (fotocopia simple).',
  'Récord académico actualizado con materias vencidas.',
  'Carta de solicitud dirigida a Dirección de Carrera.',
  'Plan de trabajo inicial firmado por tutor institucional.',
]

export const studentsInternshipDocuments = [
  {
    title: 'Formato de Informe Mensual',
    desc: 'Plantilla oficial para reporte de actividades.',
    icon: ClipboardList,
    tone: 'blue',
  },
  {
    title: 'Guía de Informe Final',
    desc: 'Estructura requerida para defensa de pasantía.',
    icon: FileSignature,
    tone: 'orange',
  },
  {
    title: 'Reglamento de Pasantías',
    desc: 'Normativa oficial sobre prácticas pre-profesionales.',
    icon: ShieldCheck,
    tone: 'slate',
  },
]

export const studentsInternshipTestimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Analista Junior - INE Bolivia',
    quote:
      'La pasantía me permitió aplicar modelos de regresión y muestreo complejo en proyectos nacionales.',
    avatar:
      '/images/estudiantes/carlos_mendoza.jpg',
  },
  {
    name: 'Lucía Vargas',
    role: 'Data Scientist - Banca Privada',
    quote:
      'El trabajo dirigido fue decisivo para mi inserción laboral y consolidación profesional.',
    avatar:
      '/images/estudiantes/lucia_vargas.jpg',
  },
]

export const studentsInternshipMapNodes = [
  { label: 'INE La Paz', x: '32%', y: '28%', color: '#ea580c' },
  { label: 'Min. Economía', x: '72%', y: '61%', color: '#00447e' },
  { label: 'Banca Privada', x: '51%', y: '45%', color: '#0f766e' },
]

export const studentsInternshipUi = {
  reqCheckIcon: CheckCircle2,
  searchIcon: Search,
  downloadIcon: Download,
  postulateIcon: Send,
  viewIcon: Eye,
  formatIcon: FileSearch,
}
