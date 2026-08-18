import {
  Activity,
  BadgeCheck,
  Briefcase,
  Calculator,
  CheckCircle2,
  Cpu,
  Database,
  GraduationCap,
  Microscope,
  Network,
  ShieldCheck,
  Sigma,
  TrendingUp,
  Binary,
} from 'lucide-react'

export const pregradoHero = {
  eyebrow: 'Carrera de Licenciatura · UMSA',
  title: ['Forjando los líderes', 'del análisis de datos', 'en Bolivia.'],
  description:
    'La incertidumbre es el caos; la estadística es la ley que lo gobierna. Únete a una formación científica con enfoque cuantitativo, tecnológico y ético.',
  imageUrl:
    '/images/pregrado/pregrado_hero.jpg',
  primaryCta: { label: 'Ver plan de estudios', href: '/pregrado/malla-curricular' },
  secondaryCta: { label: 'Perfil del postulante', href: '/pregrado/perfil-profesional' },
}

export const applicantProfile = {
  tag: 'Aptitud',
  title: 'Vocación y Aptitudes',
  sub: 'Buscamos mentes inquietas con base ética, curiosidad intelectual y capacidad para resolver problemas lógicos en escenarios reales.',
  cards: [
    {
      title: 'Razonamiento Analítico',
      description: 'Inclinación por matemáticas, abstracción y comprensión de fenómenos aleatorios.',
      icon: Calculator,
      colorClass: 'text-blue-600 bg-blue-50',
    },
    {
      title: 'DNA Tecnológico',
      description: 'Interés en programación, automatización y software especializado para analítica.',
      icon: Cpu,
      colorClass: 'text-[#ea580c] bg-orange-50',
    },
    {
      title: 'Visión Interdisciplinaria',
      description: 'Capacidad para traducir necesidades reales a modelos cuantitativos robustos.',
      icon: Network,
      colorClass: 'text-teal-600 bg-teal-50',
    },
    {
      title: 'Compromiso Ético',
      description: 'Responsabilidad y cuidado en el manejo de información sensible y datos públicos.',
      icon: ShieldCheck,
      colorClass: 'text-indigo-600 bg-indigo-50',
    },
  ],
}

export const graduateCompetencies = {
  tag: 'Excelencia',
  title: 'Competencias del Egresado',
  sub: 'Formación rigurosa para liderar la ciencia de datos en sectores estratégicos de Bolivia.',
  degree: {
    icon: GraduationCap,
    title: 'Licenciado en Estadística',
    subtitle: 'Acreditación nacional vigente',
    decorationIcon: Sigma,
  },
  accordions: [
    {
      id: 'modelamiento',
      title: 'Modelamiento y Análisis Estadístico',
      icon: Calculator,
      bullets: [
        {
          icon: CheckCircle2,
          title: 'Fundamentación Matemática',
          text: 'Formula, valida y resuelve problemas usando probabilidad e inferencia.',
        },
        {
          icon: CheckCircle2,
          title: 'Inferencia y Predicción',
          text: 'Explica fenómenos y proyecta escenarios bajo incertidumbre.',
        },
        {
          icon: CheckCircle2,
          title: 'Análisis Multivariante',
          text: 'Identifica patrones complejos en grandes volúmenes de variables.',
        },
      ],
    },
    {
      id: 'innovacion',
      title: 'Gestión de Datos e Innovación',
      icon: Database,
      bullets: [
        {
          icon: CheckCircle2,
          title: 'Arquitectura de Datos',
          text: 'Administra datos relacionales y dimensionales con enfoque de seguridad.',
        },
        {
          icon: CheckCircle2,
          title: 'Data Science y Big Data',
          text: 'Extrae valor estratégico con minería de datos y aprendizaje automático.',
        },
        {
          icon: CheckCircle2,
          title: 'Procesos Estocásticos',
          text: 'Modela series de tiempo y dinámicas aleatorias en distintos dominios.',
        },
      ],
    },
    {
      id: 'investigacion',
      title: 'Investigación Científica',
      icon: Microscope,
      bullets: [
        {
          icon: CheckCircle2,
          title: 'Diseño Metodológico',
          text: 'Planifica encuestas y muestras para estudios de alcance nacional.',
        },
        {
          icon: CheckCircle2,
          title: 'Comunicación de Hallazgos',
          text: 'Traduce resultados estadísticos en informes ejecutivos de decisión.',
        },
      ],
    },
  ],
}

export const careerOutcomes = {
  tag: 'Proyección',
  title: 'Salidas Laborales',
  sub: 'Nuestros graduados ocupan puestos de decisión en la economía del dato.',
  featured: {
    badge: 'Más demandado',
    title: 'Científico de Datos',
    subtitle: 'Data Scientist',
    description:
      'Optimiza procesamientos y predice tendencias con analítica avanzada, modelos estadísticos e IA aplicada.',
    icon: Binary,
    ctaLabel: 'Ver perfil',
  },
  cards: [
    {
      title: 'Consultor Actuarial',
      description: 'Seguros, pensiones y modelos de riesgo financiero.',
      icon: Calculator,
      variant: 'light',
    },
    {
      title: 'Investigador Senior',
      description: 'Especialista en demografía y diseño de experimentos sociales.',
      icon: Microscope,
      variant: 'dark',
    },
    {
      title: 'Líder Estratégico',
      description:
        'Dirección de estadística en corporaciones, banca y entidades de gobierno.',
      icon: TrendingUp,
      variant: 'wide',
    },
  ],
}

export const occupationalField = {
  tag: 'Ubicación',
  title: 'Campo Ocupacional',
  sectors: {
    Estatales: [
      {
        name: 'INE Bolivia',
        line: 'Instituto Nacional de Estadística',
        description: 'Diseño de muestras maestras, censos y análisis demográfico avanzado.',
      },
      {
        name: 'Ministerios',
        line: 'Economía y Planificación',
        description: 'Modelamiento de políticas públicas y seguimiento de indicadores sociales.',
      },
      {
        name: 'Reguladores',
        line: 'ASFI, ANH y APS',
        description: 'Control técnico de mercados mediante auditoría de datos y riesgos.',
      },
    ],
    Finanzas: [
      {
        name: 'Banca Privada',
        line: 'Entidades Financieras',
        description: 'Modelos de credit scoring, fraude y evaluación de cartera.',
      },
      {
        name: 'Seguros',
        line: 'Mercado Asegurador',
        description: 'Cálculo actuarial de primas y estimación de reservas técnicas.',
      },
      {
        name: 'Inversiones',
        line: 'Mercado de Capitales',
        description: 'Proyección de activos y optimización de portafolios.',
      },
    ],
    Ciencia: [
      {
        name: 'Epidemiología',
        line: 'Salud Pública',
        description: 'Vigilancia de brotes, bioestadística y análisis de ensayos.',
      },
      {
        name: 'Investigación',
        line: 'Universidades y ONG',
        description: 'Diseño experimental y evaluación de impacto social.',
      },
      {
        name: 'Biomedicina',
        line: 'Genómica y Clínica',
        description: 'Análisis de datos genéticos y validación de protocolos.',
      },
    ],
    Corporativo: [
      {
        name: 'Big Data',
        line: 'Tech y E-commerce',
        description: 'Predicción de consumo y optimización de logística.',
      },
      {
        name: 'Marketing',
        line: 'Inteligencia de Mercados',
        description: 'Segmentación, minería de opiniones y analítica digital.',
      },
      {
        name: 'Industria',
        line: 'Control de Calidad',
        description: 'Metodologías seis sigma y mejora de procesos.',
      },
    ],
  },
  cta: {
    title: '¿Listo para transformar la realidad con datos?',
    buttonLabel: 'Inicia tu carrera hoy',
    status: {
      icon: BadgeCheck,
      label: 'Alta demanda profesional',
      metric: 'n = 380+',
    },
  },
}

export const pregradoStats = [
  { icon: Activity, label: 'Dinámica laboral', value: '92%' },
  { icon: Briefcase, label: 'Sectores de impacto', value: '12+' },
  { icon: Database, label: 'Cursos cuantitativos', value: '40+' },
]
