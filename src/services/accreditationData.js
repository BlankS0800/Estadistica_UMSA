import {
  Award,
  Briefcase,
  CheckCircle2,
  Globe,
  PieChart,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from 'lucide-react'

export const accreditationHero = {
  eyebrow: 'Acreditación Institucional',
  title: ['Garantía de', 'calidad', 'Académica.'],
  description:
    'Nuestra carrera lidera el análisis de datos en Bolivia bajo estándares estrictos del sistema universitario. La acreditación vigente ante el CEUB respalda competitividad y mejora continua.',
  imageUrl: '/images/institucional/acreditacion_hero.jpeg',
  chips: [
    { symbol: 'int', label: 'Integridad', subtitle: 'Curricular' },
    { symbol: 'chi2', label: 'Validez', subtitle: 'Estadística' },
  ],
}

export const credentials = [
  {
    title: 'Acreditación Nacional CEUB',
    sub: 'Certificación de Calidad Superior',
    org: 'Resolución de Congreso Universitario',
    desc: 'Aval oficial del CEUB que certifica excelencia en currículo, plantel docente e infraestructura técnica de la carrera.',
    cta: 'Ver Resolución Oficial',
    icon: ShieldCheck,
    stats: { label: 'p < 0.05', value: 'check' },
  },
  {
    title: 'Autoevaluación Continua',
    sub: 'Gestión de Calidad Interna',
    org: 'Comisión de Evaluación FCPN',
    desc: 'Proceso sistemático de revisión de indicadores académicos y administrativos para asegurar cumplimiento de estándares internacionales.',
    cta: 'Consultar Indicadores',
    icon: Users,
    stats: { label: 'CI: 99.5%', value: 'star' },
  },
  {
    title: 'Evaluación de Pares Externos',
    sub: 'Veredicto Internacional',
    org: 'Pares Académicos del Sistema',
    desc: 'Reconocimiento otorgado por expertos tras auditoría técnica de procesos de enseñanza, investigación e interacción social.',
    cta: 'Informe de Evaluación',
    icon: Award,
    stats: { label: 'p < 0.01', value: 'diamond' },
  },
]

export const impactHighlights = {
  title: ['Impacto en', 'tu Carrera'],
  description:
    'Egresar de un programa acreditado abre oportunidades profesionales con respaldo técnico y rigor científico.',
  statusTitle: 'Estado de Gestión',
  statusText:
    'Participación activa en el Censo Universitario 2025 para la actualización integral de indicadores de calidad institucional.',
  statusPill: 'Mejora Continua Activa',
  statusIcon: Zap,
}

export const impactCards = [
  {
    t: 'Movilidad Global',
    d: 'Acceso preferente a becas de intercambio y convenios de postgrado en universidades líderes de la región.',
    icon: Globe,
  },
  {
    t: 'Prestigio Laboral',
    d: 'El sector financiero e instituciones públicas priorizan graduados de programas acreditados por su formación técnica.',
    icon: Briefcase,
  },
  {
    t: 'Investigación Financiada',
    d: 'Acceso a fondos exclusivos y patrocinios para tesis e interacción social con respaldo institucional.',
    icon: PieChart,
  },
]

export const accreditationCta = {
  title: 'Declaración de Calidad',
  label: 'Comprometidos con la Excelencia',
  icon: Star,
  links: [
    { href: '/institucional/acerca', label: 'Volver a Acerca', icon: CheckCircle2 },
    { href: '/institucional/autoridades', label: 'Ver Autoridades', icon: Users },
  ],
}
