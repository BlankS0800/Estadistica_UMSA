import {
  ArrowDown,
  Award,
  BarChart3,
  Briefcase,
  GraduationCap,
  Landmark,
  Mail,
  Megaphone,
  MessageCircle,
  Monitor,
  Send,
  ShieldCheck,
  Sigma,
  Star,
  Trophy,
  UserCircle,
  Users,
} from 'lucide-react'

export const studentsCenterHero = {
  eyebrow: 'Órgano máximo de representación',
  title: ['Centro de', 'Estudiantes'],
  description:
    'Consolidando una comunidad estudiantil participativa, crítica y líder en el ámbito de la Ciencia de Datos en Bolivia. Tu voz en la toma de decisiones.',
  ctaLabel: 'Contacto Directo',
  icon: Megaphone,
  leftShape: Sigma,
  rightShape: Users,
}

export const studentsCenterServices = [
  {
    title: 'Apoyo Académico',
    desc: 'Organización de cursos extracurriculares, talleres de software y seminarios especializados.',
    icon: Monitor,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Gestión de Auxiliaturas',
    desc: 'Información y guía integral sobre convocatorias para auxiliaturas de docencia y laboratorios.',
    icon: GraduationCap,
    color: 'text-[#ea580c]',
    bg: 'bg-orange-50',
  },
  {
    title: 'Defensa Estudiantil',
    desc: 'Asesoramiento en procesos de reclamos, impugnación de notas y seguimiento de trámites ante el Consejo.',
    icon: ShieldCheck,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    title: 'Cultura y Deporte',
    desc: 'Coordinación de campeonatos facultativos, jornadas culturales y eventos de confraternización.',
    icon: Trophy,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
]

export const studentsCenterStats = [
  { label: 'Representación', value: 'CEE', suffix: 'ACTIVA', icon: BarChart3 },
  { label: 'Voz estudiantil', value: '24/7', suffix: 'CANALES', icon: MessageCircle },
  { label: 'Apoyo académico', value: '04', suffix: 'SERVICIOS', icon: Briefcase },
  { label: 'Participación', value: '100%', suffix: 'ABIERTO', icon: Star },
]

export const studentsCenterStructure = {
  tag: 'Estructura democrática',
  title: 'Representación institucional',
  sub: 'Conoce cómo tu voz es representada a través del Centro de Estudiantes hacia las máximas instancias de decisión universitaria.',
  level1: {
    title: 'Bases estudiantiles',
    subtitle: 'Voz y voto soberano',
  },
  level2: {
    title: 'Centro de Estudiantes',
    subtitle: 'Directiva CEE (gestión actual)',
  },
  level3: [
    {
      title: 'Consejo de Carrera (HCC)',
      subtitle: 'Decisiones académicas locales',
      icon: Landmark,
    },
    {
      title: 'Consejo Facultativo (HCF)',
      subtitle: 'Decisiones FCPN (Decanato)',
      icon: Briefcase,
    },
  ],
}

export const directivaCee = [
  { name: 'Jhoseline Gloria Chambi Velasco', role: 'Primera Secretaria Ejecutiva' },
  { name: 'Alejandra Edith Salas Birrueta', role: 'Segunda Secretaria Ejecutiva' },
  { name: 'Aylin Yenori Maita Chacón', role: 'Tercera Secretaria Ejecutiva' },
  { name: 'Jhovanny Andrés Urbina Vargas', role: 'Cuarto Secretario Ejecutivo' },
  { name: 'Daniela Raquel Nava Canaviri', role: 'Quinta Secretaria Ejecutiva' },
  { name: 'Gerald Luis Condori Lima', role: 'Sexto Secretario Ejecutivo' },
]

export const delegadosHcf = [
  { name: 'Katherine Mayte Mendoza Quispe', role: 'Primer Titular' },
  { name: 'Daniela Raquel Nava Canaviri', role: 'Primer Suplente' },
  { name: 'Milenka Mariana Del Villar Cari', role: 'Segundo Titular' },
  { name: 'Gerald Luis Condori Lima', role: 'Segundo Titular' },
]

export const delegadosAcademico = [
  { name: 'Alejandra Adela Velarde Machicado', role: 'Primer Titular' },
  { name: 'Grover Huanca Flores', role: 'Primer Suplente' },
  { name: 'Daniel Franklin Céspedes Quispe', role: 'Segundo Suplente' },
]

export const studentsCenterChannels = [
  {
    label: 'Grupo de WhatsApp',
    href: '#',
    icon: MessageCircle,
    tone: 'blue',
  },
  {
    label: 'Canal de Telegram',
    href: '#',
    icon: Send,
    tone: 'orange',
  },
]

export const studentsCenterFooter = {
  brand: 'Estadística — UMSA',
  subtitle: 'Centro de Estudiantes (CEE)',
  metrics: ['FCPN', 'Gestión estudiantil'],
  icon: BarChart3,
  socialLinks: [
    { label: 'Facebook', href: '#', icon: Mail },
    { label: 'Instagram', href: '#', icon: Mail },
  ],
}
