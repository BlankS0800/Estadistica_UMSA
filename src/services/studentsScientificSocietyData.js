import {
  Award,
  BadgeCheck,
  BookMarked,
  Briefcase,
  Cpu,
  Database,
  FileSignature,
  HeartPulse,
  Layers,
  Lightbulb,
  Network,
  Search,
  Sigma,
  Terminal,
  Users,
  CalendarDays,
  ClipboardList,
  FileSearch,
} from 'lucide-react'

export const studentsScientificHero = {
  eyebrow: 'Investigación y desarrollo',
  title: ['Sociedad Científica de', 'Estudiantes de Estadística'],
  description:
    'El núcleo donde las ideas se transforman en investigaciones, papers y proyectos con impacto real en Bolivia.',
  ctaLabel: 'Unirme a la próxima convocatoria',
  icon: Lightbulb,
  leftShape: Sigma,
  rightShape: Users,
}

export const researchLines = [
  {
    title: 'Ciencia de Datos Aplicada',
    desc: 'Modelado predictivo, machine learning y minería de datos para resolver problemas complejos.',
    icon: Database,
    tone: 'blue',
  },
  {
    title: 'Estadística Social y Demográfica',
    desc: 'Análisis de censos, encuestas de hogares y proyecciones para políticas públicas.',
    icon: Users,
    tone: 'orange',
  },
  {
    title: 'Bioestadística',
    desc: 'Colaboración en salud pública, epidemiología y análisis estadístico de ensayos clínicos.',
    icon: HeartPulse,
    tone: 'teal',
  },
]

export const studyNodes = [
  {
    title: 'Nodo R & Python',
    tag: 'Programación',
    desc: 'Automatización de procesos, web scraping y visualización de datos dinámica.',
    icon: Terminal,
  },
  {
    title: 'Métodos Bayesianos',
    tag: 'Inferencia avanzada',
    desc: 'Estadística bayesiana, simulación MCMC y modelos probabilísticos.',
    icon: Sigma,
  },
  {
    title: 'Laboratorio de Minería',
    tag: 'Inteligencia artificial',
    desc: 'Clasificación, clustering y redes neuronales para exploración de datos.',
    icon: Cpu,
  },
]

export const benefits = [
  {
    title: 'Certificaciones',
    desc: 'Certificados avalados por la Carrera y la FCPN.',
    icon: BadgeCheck,
  },
  {
    title: 'Publicaciones',
    desc: 'Artículos para revistas científicas indexadas.',
    icon: BookMarked,
  },
  {
    title: 'Eventos exclusivos',
    desc: 'Congresos, hackatones y ferias de ciencia nacionales.',
    icon: CalendarDays,
  },
  {
    title: 'Networking pro',
    desc: 'Conexión con investigadores y profesionales del área.',
    icon: Network,
  },
]

export const admissionSteps = [
  {
    id: 1,
    title: 'Convocatoria',
    desc: 'Publicación anual de nuevos miembros investigadores.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Postulación',
    desc: 'Carta de interés y récord académico.',
    icon: FileSignature,
  },
  {
    id: 3,
    title: 'Entrevista',
    desc: 'Reunión con la directiva para conocer aptitudes.',
    icon: Users,
  },
  {
    id: 4,
    title: 'Inducción',
    desc: 'Asignación a un grupo activo de investigación.',
    icon: Award,
  },
]

export const papers = [
  {
    id: 'PUB-001',
    title: 'Predicción de deserción estudiantil usando Random Forest',
    author: 'Nodo R & Python',
    year: '2025',
    tag: 'Ciencia de Datos',
  },
  {
    id: 'PUB-002',
    title: 'Análisis Bayesiano de la inflación interanual en Bolivia',
    author: 'Grupo Bayesiano',
    year: '2024',
    tag: 'Econometría',
  },
  {
    id: 'PUB-003',
    title: 'Impacto sociodemográfico post-censo 2024 en La Paz',
    author: 'Línea Demográfica',
    year: '2025',
    tag: 'Estadística Social',
  },
  {
    id: 'PUB-004',
    title: 'Clustering de patologías respiratorias en zonas de altitud',
    author: 'Línea Bioestadística',
    year: '2023',
    tag: 'Salud Pública',
  },
]

export const journals = [
  {
    name: 'Revista Varianza',
    desc: 'Publicación oficial del IETA - UMSA.',
    type: 'UMSA',
  },
  {
    name: 'Revista de Ciencias Puras',
    desc: 'Divulgación científica de la FCPN.',
    type: 'FCPN',
  },
  {
    name: 'Data Science Journal (BO)',
    desc: 'Revista boliviana de analítica avanzada e IA.',
    type: 'Nacional',
  },
]

export const societyTestimonials = [
  {
    name: 'Sofía Fernández',
    role: 'Investigadora estudiante',
    quote:
      'El grupo me dio disciplina, método y apoyo para convertir mi interés en un artículo real.',
    avatar:
      '/images/estudiantes/sofia_fernandez.jpg',
  },
  {
    name: 'Diego Huanca',
    role: 'Miembro de la SCEE',
    quote:
      'La Sociedad Científica me permitió trabajar con datos reales y aprender a comunicar resultados con rigor.',
    avatar:
      '/images/estudiantes/diego_huanca.jpg',
  },
]

export const societyMapNodes = [
  { label: 'INE La Paz', x: '28%', y: '30%', color: '#ea580c' },
  { label: 'FCPN', x: '62%', y: '58%', color: '#00447e' },
  { label: 'Banca Privada', x: '48%', y: '42%', color: '#0f766e' },
]

export const societyUi = {
  sectionIcon: FileSearch,
  downloadIcon: Layers,
}
