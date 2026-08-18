import {
  Book,
  FileSignature,
  Globe,
  GraduationCap,
  Microscope,
  Landmark,
  Users,
  Briefcase,
  ShieldCheck,
  ScrollText,
} from 'lucide-react'

export const regulationsHero = {
  eyebrow: 'Normativa Institucional',
  title: ['Repositorio', 'y', 'Marco Legal'],
  description:
    'Compendio normativo que rige la vida académica, administrativa e investigativa de la Carrera de Estadística, garantizando el respeto a la autonomía universitaria.',
  chips: [
    { symbol: '¶', label: 'Estatutos', subtitle: 'Universitarios' },
    { symbol: 'ℓ', label: 'Garantía', subtitle: 'Académica' },
  ],
  imageUrl: '/images/institucional/reglamentos_hero.jpeg',
}

export const universityFramework = [
  {
    art: 'Art. 1',
    title: 'Nacional (CEUB)',
    sub: 'Estatuto Orgánico de la Universidad Boliviana',
    desc: 'Base legal de la autonomía y del sistema universitario en Bolivia.',
    icon: Globe,
  },
  {
    art: 'Art. 2',
    title: 'Estudiantil',
    sub: 'Régimen Estudiantil de la Universidad Boliviana',
    desc: 'Derechos, deberes, becas y procesos disciplinarios del estudiante.',
    icon: GraduationCap,
  },
  {
    art: 'Art. 3',
    title: 'Docente',
    sub: 'Régimen Académico Docente',
    desc: 'Normativa sobre la carrera docente, escalafón y evaluación continua.',
    icon: Users,
  },
  {
    art: 'Art. 4',
    title: 'Institucional',
    sub: 'Estatuto Orgánico de la UMSA',
    desc: 'Norma matriz propia de la Universidad Mayor de San Andrés.',
    icon: Landmark,
  },
]

export const internalRegulations = [
  {
    id: 'academica',
    label: 'Gestión Académica',
    icon: Book,
    symbol: '∇',
    items: [
      {
        name: 'Reglamento de Convalidación',
        desc: 'Requisitos técnicos para traspasos y validación de materias aprobadas.',
      },
      {
        name: 'Mesa de Examen',
        desc: 'Normas para solicitar exámenes de última instancia y evaluación extraordinaria.',
      },
      {
        name: 'Evaluación del Aprendizaje',
        desc: 'Criterios de calificación, asistencia y aprobación por competencias.',
      },
      {
        name: 'Reglamento Interno de la Carrera',
        desc: 'Normas de convivencia y organización interna del estamento.',
      },
    ],
  },
  {
    id: 'graduacion',
    label: 'Modalidades de Graduación',
    icon: FileSignature,
    symbol: '∆',
    items: [
      {
        name: 'Guía Metodológica General',
        desc: 'Estándares oficiales de formato y redacción para trabajos finales de grado.',
      },
      {
        name: 'Reglamento de Tesis de Grado',
        desc: 'Protocolo para investigaciones de aporte científico y defensa.',
      },
      {
        name: 'Reglamento de Trabajo Dirigido',
        desc: 'Normativa para pasantías con convenio e impacto institucional.',
      },
      {
        name: 'Reglamento de Proyecto de Grado',
        desc: 'Guía para resolver problemas prácticos en el entorno laboral.',
      },
    ],
  },
  {
    id: 'investigacion',
    label: 'Investigación (IETA)',
    icon: Microscope,
    symbol: 'Σ',
    items: [
      {
        name: 'Reglamento Interno IETA',
        desc: 'Normas que rigen el funcionamiento del Instituto de Estadística Teórica y Aplicada.',
      },
      {
        name: 'Congreso Interno',
        desc: 'Resoluciones y actas de las máximas instancias de decisión científica.',
      },
      {
        name: 'Publicaciones y Repositorio',
        desc: 'Lineamientos para gestión editorial, citación y acceso abierto.',
      },
      {
        name: 'Comités Técnicos',
        desc: 'Criterios de conformación y seguimiento de comités de evaluación.',
      },
    ],
  },
]

export const resolutionHighlight = {
  eyebrow: 'Patrimonio Documental',
  title: 'Resolución de Fundación',
  description:
    'Documento histórico que oficializa la creación de la carrera en la Facultad de Ciencias Puras y Naturales, estableciendo sus bases académicas y administrativas.',
  imageUrl: '/images/institucional/resolucion_fundacion.jpeg',
}

export const regulationBenefits = [
  {
    title: 'Seguridad Jurídica',
    description: 'Normas claras para estudiantes, docentes y administrativos en cada proceso académico.',
    symbol: 'A1',
    icon: ShieldCheck,
  },
  {
    title: 'Transparencia de Procesos',
    description: 'Trazabilidad de decisiones mediante resoluciones, actas y reglamentos vigentes.',
    symbol: 'A2',
    icon: ScrollText,
  },
  {
    title: 'Proyección Profesional',
    description: 'Regulaciones que fortalecen prácticas, pasantías y modalidades de graduación aplicadas.',
    symbol: 'A3',
    icon: Briefcase,
  },
]

export const regulationsCta = {
  title: 'Referente Normativo',
  label: 'Repositorio Normativo Actualizado',
}
