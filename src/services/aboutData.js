import {
  Award,
  CheckCircle2,
  Eye,
  FlaskConical,
  Globe,
  GraduationCap,
  History,
  Landmark,
  Microscope,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'

export const milestones = [
  {
    year: '1960',
    title: 'Mención en Economía',
    desc: 'Inicia la especialidad de estadística bajo la Facultad de Economía para atender la necesidad de cuantificar el desarrollo nacional.',
  },
  {
    year: '1972',
    title: 'Creación de la FCPN',
    desc: 'Reapertura universitaria tras la intervención de 1970. Se crea la Facultad de Ciencias Puras y Naturales integrando Estadística como mención.',
  },
  {
    year: '1979',
    title: 'Primer Titulado',
    desc: 'Hito académico con la emisión del primer título profesional, marcando el inicio de la demanda creciente de estadísticos en el país.',
  },
  {
    year: '1984',
    title: 'Autonomía de Carrera',
    desc: 'Por resolución del 7mo congreso de universidades, la especialidad se separa definitivamente de Matemática como carrera autónoma.',
  },
  {
    year: '1985',
    title: 'Creación del IETA',
    desc: 'Fundación del Instituto de Estadística Teórica y Aplicada para desarrollar investigación científica y consultoría estratégica.',
  },
]

export const values = [
  {
    icon: Target,
    title: 'Excelencia Académica',
    description: 'Compromiso con la formación de profesionales altamente calificados con pensamiento crítico y capacidad analítica.',
    color: '#00447e',
    stat: 'R2 = 0.98',
  },
  {
    icon: Users,
    title: 'Inclusión e Igualdad',
    description: 'Educación de calidad accesible para todos los sectores de la sociedad boliviana sin discriminación.',
    color: '#c2410c',
    stat: 'p < 0.01',
  },
  {
    icon: FlaskConical,
    title: 'Investigación Científica',
    description: 'Generación de conocimiento aplicado mediante IETA para resolver problemas nacionales estratégicos.',
    color: '#00447e',
    stat: 'n = 25+',
  },
  {
    icon: Globe,
    title: 'Responsabilidad Social',
    description: 'Contribución activa al desarrollo sostenible mediante análisis estadístico ético y socialmente responsable.',
    color: '#c2410c',
    stat: 'sigma = 1.05',
  },
]

export const achievements = [
  { number: '50+', label: 'Años', sublabel: 'Trayectoria', icon: History },
  { number: '380+', label: 'Estudiantes', sublabel: 'Matrícula', icon: Users },
  { number: '1985', label: 'IETA', sublabel: 'Fundación', icon: Microscope },
  { number: '120+', label: 'Titulados', sublabel: 'Gestión 2025', icon: GraduationCap },
]

export const objectives = [
  {
    t: 'Pensamiento Crítico',
    d: 'Generar conocimiento científico con capacidad de análisis reflexivo crítico de apoyo a las decisiones de estado.',
    id: '01',
  },
  {
    t: 'Cultura Estadística',
    d: 'Desarrollar y difundir la ciencia, tecnología y cultura estadística dentro y fuera de la institución universitaria.',
    id: '02',
  },
  {
    t: 'Integración Praxis',
    d: 'Desarrollar el proceso académico integrando teoría y práctica y fomentando la enseñanza aprendizaje ligada a la investigación.',
    id: '03',
  },
]

export const aboutHero = {
  title: ['Referente', 'de la', 'Evidencia.'],
  description:
    'Identidad institucional, misión, visión y valores que guían nuestra formación de estadísticos y científicos de datos para Bolivia.',
  imageUrl: '/images/institucional/acerca_hero.jpeg',
}

export const ietaSummary = {
  title: 'Instituto IETA',
  text: 'El Instituto de Estadística Teórica y Aplicada tiene la finalidad de desarrollar investigación científica y contribuir al avance en diferentes campos donde la estadística es transversal.',
  founded: 'Octubre, 1985',
}

export const accreditation = {
  icon: ShieldCheck,
  title: 'Acreditación Institucional',
  description:
    'Reconocidos por el CEUB como carrera de excelencia académica con certificación de calidad en formación estadística.',
  links: [
    { href: '/institucional/acreditacion', label: 'Ver Acreditación', icon: CheckCircle2 },
    { href: '/institucional/autoridades', label: 'Conoce Autoridades', icon: Landmark },
  ],
}

export const missionVision = {
  mission: {
    icon: Target,
    title: 'Misión',
    text: 'Formar profesionales idóneos y competentes en estadística, capaces de generar soluciones creativas e innovadoras comprometidos con el desarrollo nacional.',
  },
  vision: {
    icon: Eye,
    title: 'Visión',
    text: 'Ser líder en la formación de profesionales en ciencia estadística, buscando excelencia académica mediante docencia, investigación y extensión.',
  },
}

export const sideBadges = {
  awardIcon: Award,
}
