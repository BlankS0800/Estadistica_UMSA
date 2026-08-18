import {
  Award,
  Building2,
  CheckCircle2,
  Download,
  FileSignature,
  GraduationCap,
  Microscope,
  Presentation,
  Sigma,
  Star,
  Target,
} from 'lucide-react'

export const graduationHero = {
  icon: GraduationCap,
  eyebrow: 'Grado académico',
  title: ['Modalidades de', 'Graduación'],
  highlights: ['Resolución CEUB', 'Licenciatura'],
}

export const graduationWorkshop = {
  badge: 'Octavo semestre',
  title: ['El Taller de Titulación', 'es el punto de partida'],
  description:
    'Según el Plan de Estudios 2021, todo estudiante debe inscribirse al Taller de Titulación en el último semestre. En esta asignatura se diseña, ajusta y aprueba el Perfil de Grado.',
  ctaLabel: 'Ver en malla curricular',
  ctaHref: '/pregrado/malla-curricular',
  icon: Sigma,
}

export const processSteps = [
  {
    icon: CheckCircle2,
    title: '1. Taller de Titulación',
    desc: 'Inscripción en 8° semestre para elaboración y aprobación del Perfil de Grado.',
  },
  {
    icon: FileSignature,
    title: '2. Aprobación de Perfil',
    desc: 'Asignación oficial de Tutor y Resolución de aprobación del H. Consejo de Carrera.',
  },
  {
    icon: Microscope,
    title: '3. Desarrollo',
    desc: 'Investigación, redacción o ejecución del trabajo práctico bajo seguimiento tutorial.',
  },
  {
    icon: Presentation,
    title: '4. Defensa Pública',
    desc: 'Sustentación oral del trabajo final ante Tribunal Examinador calificado.',
  },
]

export const graduationModalitiesMeta = {
  tag: 'Opciones académicas',
  title: 'Las 4 vías de titulación',
  sub: 'Explora las modalidades oficialmente reconocidas por la UMSA para obtener el grado de Licenciado en Estadística.',
  seal: {
    symbol: 'mu',
    label: 'NIVEL',
    value: 'EXCELENCIA',
  },
  ctaLabel: 'Descargar reglamento',
  ctaIcon: Download,
}

export const graduationModalities = [
  {
    id: 'tesis',
    title: 'Tesis de Grado',
    icon: Microscope,
    pointIcon: CheckCircle2,
    tag: 'Investigación científica',
    desc: 'Trabajo de investigación original que aporta nuevo conocimiento científico, metodológico o técnico al campo de la estadística y ciencia de datos.',
    points: [
      'Aporte metodológico original al área.',
      'Rigor científico y comprobación de hipótesis.',
      'Defensa pública ante tribunal examinador.',
    ],
    color: '#00447e',
  },
  {
    id: 'trabajo_dirigido',
    title: 'Trabajo Dirigido',
    icon: Building2,
    pointIcon: CheckCircle2,
    tag: 'Experiencia profesional',
    desc: 'Ejecución de trabajo práctico en instituciones públicas o privadas con convenios interinstitucionales vigentes.',
    points: [
      'Resolución de problemas reales en campo.',
      'Supervisión por tutor académico y tutor institucional.',
      'Duración regulada y presentación de informe final.',
    ],
    color: '#0f766e',
  },
  {
    id: 'proyecto',
    title: 'Proyecto de Grado',
    icon: Target,
    pointIcon: CheckCircle2,
    tag: 'Aplicación práctica',
    desc: 'Desarrollo de solución estadística, modelo predictivo o sistema de información aplicado a necesidades concretas del entorno.',
    points: [
      'Enfoque en viabilidad y aplicación práctica.',
      'Desarrollo de sistemas o modelos funcionales.',
      'Defensa de factibilidad técnica y económica.',
    ],
    color: '#c2410c',
  },
  {
    id: 'excelencia',
    title: 'Excelencia Académica',
    icon: Award,
    pointIcon: CheckCircle2,
    tag: 'Mérito estudiantil',
    desc: 'Modalidad de titulación directa, eximida de defensa pública, que premia alto rendimiento académico y regularidad durante la carrera.',
    points: [
      'Promedio general sobresaliente según reglamento.',
      'Culminación en el tiempo establecido (8 semestres).',
      'Sin reprobaciones ni abandonos injustificados.',
    ],
    color: '#b45309',
  },
]

export const excellenceBanner = {
  eyebrow: 'Reconocimiento institucional',
  title: 'Graduación por Excelencia',
  quote:
    'La Universidad Mayor de San Andrés premia el esfuerzo constante. Si tu promedio supera la media exigida y concluiste sin reprobaciones, el H. Consejo de Carrera puede eximir la defensa pública.',
  ctaLabel: 'Revisar requisitos',
  icon: Star,
  accentIcon: GraduationCap,
}
