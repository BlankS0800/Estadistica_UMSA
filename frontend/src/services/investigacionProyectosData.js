import {
  Activity,
  Award,
  CalendarDays,
  CheckCircle2,
  Database,
  FileText,
  Globe,
  Info,
  MapPin,
  Microscope,
  Phone,
  Search,
  UserCheck,
  Users,
} from 'lucide-react'

export const investigacionProyectosHero = {
  tag: 'INSTITUTO DE ESTADÍSTICA TEÓRICA Y APLICADA',
  title: ['INVESTIGACIÓN CIENTÍFICA', 'Y PROYECTOS'],
  subtitle:
    'EL IETA ES EL NÚCLEO DE PRODUCCIÓN CIENTÍFICA DE LA CARRERA. GENERAMOS CONOCIMIENTO ESTRATÉGICO Y SOLUCIONES ANALÍTICAS PARA EL DESARROLLO SOCIAL, ECONÓMICO Y TECNOLÓGICO DEL PAÍS.',
  ctaPrimary: { label: 'EXPLORAR REPOSITORIO', href: '#proyectos', icon: Search },
  ctaSecondary: {
    label: 'VER REGLAMENTO IETA',
    href: 'https://drive.google.com/file/d/16txUClDbVJTTxl0bQp39WEylU3WaH2gU/view?usp=sharing',
    icon: FileText,
  },
}

export const investigacionProyectosContact = [
  {
    label: 'CAMPUS UNIVERSITARIO',
    value: 'BLOQUE FCPN, 1ER PISO. CALLE 27 DE COTA COTA.',
    icon: MapPin,
    iconClassName: 'text-[#ea580c]',
  },
  {
    label: 'LÍNEAS DE CONTACTO',
    value: '2612824 - 2612844',
    icon: Phone,
    iconClassName: 'text-blue-300',
  },
]

export const investigacionResearchAreas = {
  tag: 'PILARES FUNDAMENTALES',
  title: 'LÍNEAS DE INVESTIGACIÓN',
  subtitle:
    'ÁREAS ESTRATÉGICAS APROBADAS POR EL HONORABLE CONSEJO FACULTATIVO (RES. N° 1323/2022) QUE GUÍAN LA PRODUCCIÓN CIENTÍFICA DEL IETA.',
  items: [
    'Series de Tiempo',
    'Demografía',
    'Estadística Bayesiana',
    'Machine Learning',
    'Análisis Multivariado',
    'Muestreo',
    'Optimización',
    'Bioestadística',
    'Estadística No Paramétrica',
    'Modelos Lineales',
  ],
}

export const investigacionFeaturedProjects = {
  title: ['PROYECTOS DE', 'IMPACTO'],
  subtitle:
    'INVESTIGACIONES DESTACADAS QUE APORTAN VALOR DIRECTO A LA SOCIEDAD BOLIVIANA.',
  icon: Award,
  cards: [
    {
      category: 'SALUD PÚBLICA',
      title: 'MODELACIÓN DE DATOS COVID-19 EN EL MUNDO',
      summary: 'APLICACIÓN DE SERIES DE TIEMPO UNIVARIADAS PARA PRONOSTICAR CASOS NUEVOS.',
      author: 'M.SC. NICOLÁS CHÁVEZ',
      icon: Activity,
      tone: 'red',
    },
    {
      category: 'SOCIO-ECONOMÍA',
      title: 'EDUCACIÓN Y POBREZA URBANA Y RURAL',
      summary: 'COMPARACIÓN MULTIDIMENSIONAL EN EL DEPARTAMENTO DE LA PAZ PARA POLÍTICAS PÚBLICAS.',
      author: 'LIC. RAÚL DELGADO',
      icon: Globe,
      tone: 'blue',
    },
    {
      category: 'DEMOGRAFÍA',
      title: 'DETERMINANTES DE FECUNDIDAD EN BOLIVIA',
      summary: 'ANÁLISIS MEDIANTE MODELOS LINEALES GENERALIZADOS PARA ENTENDER FACTORES DEMOGRÁFICOS.',
      author: 'M.SC. DINDO VALDEZ',
      icon: Database,
      tone: 'teal',
    },
  ],
}

export const investigacionMemoriesMeta = {
  tag: 'REPOSITORIO OFICIAL',
  title: 'MEMORIAS DE INVESTIGACIÓN',
  subtitle:
    'EXPLORA LOS PROYECTOS DESARROLLADOS POR LOS DOCENTES INVESTIGADORES DEL IETA. SELECCIONA UN PROYECTO PARA VER LOS DETALLES EN EL PANEL LATERAL.',
  searchPlaceholder: 'Buscar por autor o título...',
  years: [2024, 2023],
  yearNotes: {
    2024: 'APROBADOS POR RES. HCF N° 812/2024',
    2023: 'APROBADOS POR RES. HCF N° 1049/2024',
  },
  emptyTitle: 'NO HAY PROYECTOS QUE COINCIDAN',
  emptyDescription: 'AJUSTA EL FILTRO DE BÚSQUEDA O CAMBIA LA GESTIÓN.',
  panelHintTitle: 'VISOR DE PROYECTOS',
  panelHintDescription:
    'HAZ CLIC EN CUALQUIER PROYECTO DE LA LISTA PARA VISUALIZAR EL RESUMEN, RESULTADOS Y DESCARGA DEL DOCUMENTO.',
  panelHintIcon: Info,
  detailAbstractLabel: 'RESUMEN EJECUTIVO',
  detailResultsLabel: 'RESULTADOS CLAVE',
  detailAuthorPrefix: 'AUTOR',
  detailButtonLabel: 'DESCARGAR PDF DE INVESTIGACIÓN',
  defaultDownloadHref: '#',
  detailAuthorIcon: UserCheck,
  detailAbstractIcon: FileText,
  detailResultsIcon: CheckCircle2,
  yearsIcon: CalendarDays,
}

export const investigacionProjectMemories = [
  {
    id: '2024-1',
    year: 2024,
    title: 'Modelación de las series de población estudiantil de la UMSA y de la FCPN con métodos estadísticos',
    author: 'M.Sc. Nicolás Chávez Quisbert',
    status: 'En Publicación',
    abstract:
      'Estudio predictivo enfocado en modelar el crecimiento y comportamiento de la población estudiantil universitaria mediante técnicas de series de tiempo para optimizar la asignación de recursos académicos.',
    results: [
      'Proyección de crecimiento estudiantil a cinco años.',
      'Identificación de cuellos de botella en procesos de admisión.',
    ],
    resolution: 'Res. HCF N° 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-2',
    year: 2024,
    title: 'Comparación de la educación y la pobreza en el área urbana y rural del departamento de La Paz',
    author: 'Lic. Raúl Delgado Álvarez',
    status: 'Concluido',
    abstract:
      'Análisis comparativo bidimensional que evalúa el impacto del nivel educativo en los índices de pobreza estructural, diferenciando realidades urbanas y rurales del departamento.',
    results: [
      'Brecha del 40% detectada en acceso a educación rural.',
      'Propuesta de focalización de políticas públicas por territorio.',
    ],
    resolution: 'Res. HCF N° 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-3',
    year: 2024,
    title: 'Revisión del modelo PERT/CPM',
    author: 'Lic. Nilda Gloria Flores Salinas',
    status: 'Concluido',
    abstract:
      'Evaluación técnica y actualización del modelo clásico de gestión de proyectos PERT/CPM adaptado a entornos de alta incertidumbre y datos incompletos.',
    results: [
      'Algoritmo optimizado propuesto para cronogramas institucionales.',
      'Reducción del 15% en sesgo de estimación de tiempo.',
    ],
    resolution: 'Res. HCF N° 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-4',
    year: 2024,
    title: 'Aplicación de marcos muestrales de población y vivienda a encuestas agropecuarias',
    author: 'Lic. Jaime Pinto Ajhuacho',
    status: 'En Revisión',
    abstract:
      'Investigación metodológica para adaptar y utilizar marcos poblacionales existentes en el diseño eficiente de encuestas del sector agropecuario, reduciendo costos operativos.',
    results: [
      'Metodología de traslape validada para levantamiento rural.',
      'Eficiencia de costos mejorada en 22%.',
    ],
    resolution: 'Res. HCF N° 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-5',
    year: 2024,
    title: 'Estudios de indicadores socioeconómicos municipales mediante correlación canónica',
    author: 'M.Sc. Fernando Oday Rivero Suguiura',
    status: 'Concluido',
    abstract:
      'Análisis multivariado para entender la relación entre conjuntos de indicadores sociales y económicos a nivel municipal en Bolivia.',
    results: [
      'Mapas de calor de correlación para la toma de decisión local.',
      'Identificación de municipios críticos por brechas compuestas.',
    ],
    resolution: 'Res. HCF N° 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-6',
    year: 2024,
    title: 'Análisis cualitativo de la encuesta de percepción universitaria',
    author: 'M.Sc. Fernando Oday Rivero Suguiura',
    status: 'Concluido',
    abstract:
      'Procesamiento de datos cualitativos para extraer percepciones, sentimientos y niveles de satisfacción de la comunidad universitaria respecto a su entorno académico.',
    results: [
      'Clasificación de áreas de mejora institucional.',
      'Dashboard de sentimiento desarrollado para seguimiento.',
    ],
    resolution: 'Res. HCF N° 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-7',
    year: 2024,
    title: 'Estudio sobre técnicas de predicción de precipitación pluvial en el municipio de La Paz',
    author: 'M.Sc. Dindo Valdez Blanco',
    status: 'En Publicación',
    abstract:
      'Aplicación de modelos estadísticos avanzados para predecir anomalías pluviales en La Paz, apoyando la gestión de riesgos y desastres naturales.',
    results: [
      'Modelo predictivo con 88% de precisión.',
      'Identificación de patrones de riesgo asociados a El Niño.',
    ],
    resolution: 'Res. HCF N° 812/2024',
    downloadHref: '#',
  },
  {
    id: '2023-1',
    year: 2023,
    title: 'Aplicación de las series de tiempo univariadas para la modelación de datos del COVID en el mundo para casos nuevos',
    author: 'M.Sc. Nicolás Chávez Quisbert',
    status: 'Publicado',
    abstract:
      'Modelamiento de la curva de contagios mundiales de COVID-19 utilizando modelos ARIMA y SARIMA para pronosticar futuras olas de infección.',
    results: [
      'Modelo ARIMA validado con series internacionales.',
      'Pronósticos publicados en repositorios de salud.',
    ],
    resolution: 'Res. HCF N° 1049/2024',
    downloadHref: '#',
  },
  {
    id: '2023-2',
    year: 2023,
    title: 'La enseñanza de la matemática y el rendimiento estudiantil en la carrera de Estadística',
    author: 'Lic. Raúl Delgado Álvarez',
    status: 'Publicado',
    abstract:
      'Investigación educativa que correlaciona metodologías de enseñanza de cálculo y álgebra con tasas de retención y éxito en los primeros semestres de la carrera.',
    results: [
      'Propuesta de rediseño curricular básico.',
      'Talleres de nivelación implementados y monitoreados.',
    ],
    resolution: 'Res. HCF N° 1049/2024',
    downloadHref: '#',
  },
  {
    id: '2023-3',
    year: 2023,
    title: 'Actividad pecuaria del departamento de La Paz - Bolivia',
    author: 'Lic. Jaime Pinto Ajhuacho',
    status: 'Concluido',
    abstract:
      'Levantamiento y análisis estadístico del sector pecuario paceño, estructurando un mapa de producción, viabilidad económica y riesgos del sector.',
    results: [
      'Censo pecuario local actualizado por zonas.',
      'Identificación de zonas de alto rendimiento productivo.',
    ],
    resolution: 'Res. HCF N° 1049/2024',
    downloadHref: '#',
  },
  {
    id: '2023-4',
    year: 2023,
    title: 'Análisis de los determinantes asociados a la fecundidad de las mujeres en Bolivia a través de un modelo lineal generalizado',
    author: 'M.Sc. Dindo Valdez Blanco',
    status: 'Publicado',
    abstract:
      'Uso de modelos lineales generalizados para analizar factores socioeconómicos, geográficos y educativos que determinan tasas de fecundidad en Bolivia.',
    results: [
      'Nivel educativo como predictor principal.',
      'Publicación de resultados en revista Varianza.',
    ],
    resolution: 'Res. HCF N° 1049/2024',
    downloadHref: '#',
  },
]

export const projectStatusTone = {
  Concluido: 'success',
  Publicado: 'info',
  'En Publicación': 'warning',
  'En Revisión': 'warning',
}

export const projectCardTone = {
  red: {
    icon: 'bg-red-500/20 text-red-400 border-red-500/30',
    category: 'text-red-300',
    titleHover: 'group-hover:text-red-300',
    border: 'border-red-500/50',
  },
  blue: {
    icon: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    category: 'text-blue-300',
    titleHover: 'group-hover:text-blue-300',
    border: 'border-blue-500/50',
  },
  teal: {
    icon: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    category: 'text-teal-300',
    titleHover: 'group-hover:text-teal-300',
    border: 'border-teal-500/50',
  },
}

export const investigacionProjectListUi = {
  noteIcon: Info,
  listPrefix: 'INVESTIGACIÓN',
  authorIcon: Users,
  panelResolutionPrefix: 'RESOLUCIÓN',
}
