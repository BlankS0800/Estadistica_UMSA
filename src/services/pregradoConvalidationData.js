import {
  AlertTriangle,
  ArrowRightLeft,
  BookOpen,
  Factory,
  FileSearch,
  FileText,
  Globe,
  History,
  Layers,
  ListFilter,
  Map,
  PieChart,
  RefreshCcw,
  Sigma,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'

export const convalidationHero = {
  eyebrow: 'Migración de planes',
  title: ['Tabla de', 'Convalidaciones'],
  highlights: ['Resoluciones oficiales', 'Mapeo directo'],
}

export const convalidationIntro = {
  title: 'Herramienta de Transición',
  description:
    'Verifica la equivalencia exacta de asignaturas entre planes de estudio para facilitar tu trámite de homologación académica.',
  searchPlaceholder: 'Buscar sigla o materia...',
}

export const convalidationData2007to2012 = [
  {
    sem: 1,
    title: 'Primer Semestre',
    items: [
      { old: { id: 'INF-111', n: 'Programación I' }, new: { id: 'INF-111', n: 'Programación I' } },
      { old: { id: 'LAB-111', n: 'Laboratorio de Programación I' }, new: { id: 'LAB-111', n: 'Laboratorio de Programación I' } },
      { old: { id: 'MAT-130', n: 'Álgebra' }, new: { id: 'MAT-130', n: 'Álgebra' } },
      { old: { id: 'MAT-132', n: 'Cálculo I' }, new: { id: 'MAT-132', n: 'Cálculo I' } },
      { old: { id: 'EST-130', n: 'Estadística General' }, new: { id: 'EST-130', n: 'Estadística General' } },
      { old: { id: 'LIN-116', n: 'Inglés I' }, new: { id: 'LIN-116', n: 'Inglés I' } },
    ],
  },
  {
    sem: 2,
    title: 'Segundo Semestre',
    items: [
      { old: { id: 'INF-121', n: 'Programación II' }, new: { id: 'INF-121', n: 'Programación II' } },
      { old: { id: 'LAB-121', n: 'Laboratorio de Programación II' }, new: { id: 'LAB-121', n: 'Laboratorio de Programación II' } },
      { old: { id: 'MAT-136', n: 'Álgebra Lineal' }, new: { id: 'MAT-136', n: 'Álgebra Lineal' } },
      { old: { id: 'MAT-134', n: 'Cálculo II' }, new: { id: 'MAT-134', n: 'Cálculo II' } },
      { old: { id: 'EST-133', n: 'Probabilidad I' }, new: { id: 'EST-133', n: 'Probabilidad I' } },
      { old: { id: 'LIN-117', n: 'Inglés II' }, new: { id: 'LIN-117', n: 'Inglés II' } },
    ],
  },
  {
    sem: 3,
    title: 'Tercer Semestre',
    items: [
      { old: { id: 'MAT-274', n: 'Cálculo III' }, new: { id: 'MAT-274', n: 'Cálculo III' } },
      { old: { id: 'EST-233', n: 'Probabilidad II' }, new: { id: 'EST-233', n: 'Probabilidad II' } },
      { old: { id: 'EST-231', n: 'Álgebra Lineal Aplicada' }, new: { id: 'EST-231', n: 'Álgebra Lineal Aplicada' } },
      { old: { id: 'EST-230', n: 'Bases de Datos' }, new: { id: 'EST-230', n: 'Bases de Datos' } },
      { old: { id: 'EST-232', n: 'Metodología de la Investigación' }, new: { id: 'EST-232', n: 'Metodología de la Investigación' } },
    ],
  },
  {
    sem: 4,
    title: 'Cuarto Semestre',
    items: [
      { old: { id: 'MAT-278', n: 'Cálculo IV' }, new: { id: 'MAT-278', n: 'Cálculo IV' } },
      { old: { id: 'EST-270', n: 'Intro. Teoría de Probabilidad I' }, new: { id: 'EST-270', n: 'Intro. Teoría de Probabilidad I' } },
      { old: { id: 'EST-216', n: 'Investigación Operativa I' }, new: { id: 'EST-216', n: 'Investigación Operativa I' } },
      { old: { id: 'EST-250', n: 'Muestreo I' }, new: { id: 'EST-250', n: 'Muestreo I' } },
      { old: { id: 'EST-225', n: 'Estadística Matemática I' }, new: { id: 'EST-225', n: 'Estadística Matemática I' } },
    ],
  },
  {
    sem: 5,
    title: 'Quinto Semestre',
    items: [
      { old: { id: 'EST-330', n: 'Modelos Lineales' }, new: { id: 'EST-330', n: 'Modelos Lineales' } },
      { old: { id: 'EST-350', n: 'Muestreo II' }, new: { id: 'EST-350', n: 'Muestreo II' } },
      { old: { id: 'EST-378', n: 'Estadística no Paramétrica' }, new: { id: 'EST-378', n: 'Estadística no Paramétrica' } },
      { old: { id: 'EST-310', n: 'Investigación Operativa II' }, new: { id: 'EST-310', n: 'Investigación Operativa II' } },
      { old: { id: 'OPT-001', n: 'Optativa I' }, new: { id: 'OPT-001', n: 'Optativa I' } },
    ],
  },
  {
    sem: 6,
    title: 'Sexto Semestre',
    items: [
      { old: { id: 'EST-315', n: 'Procesos Estocásticos' }, new: { id: 'EST-315', n: 'Procesos Estocásticos' } },
      { old: { id: 'EST-376', n: 'Estadística Bayesiana' }, new: { id: 'EST-376', n: 'Estadística Bayesiana' } },
      { old: { id: 'EST-335', n: 'Métodos Multivariados I' }, new: { id: 'EST-335', n: 'Métodos Multivariados I' } },
      { old: { id: 'EST-377', n: 'Sistemas de Información Estadística' }, new: { id: 'EST-377', n: 'Sistemas de Información Estadística' } },
      { old: { id: 'OPT-002', n: 'Optativa II' }, new: { id: 'OPT-002', n: 'Optativa II' } },
    ],
  },
  {
    sem: 7,
    title: 'Séptimo Semestre',
    items: [
      { old: { id: 'EST-367', n: 'Series de Tiempo I' }, new: { id: 'EST-367', n: 'Series de Tiempo I' } },
      { old: { id: 'EST-360', n: 'Diseño de Experimentos' }, new: { id: 'EST-360', n: 'Diseño de Experimentos' } },
      { old: { id: 'EST-337', n: 'Métodos Multivariados II' }, new: { id: 'EST-337', n: 'Métodos Multivariados II' } },
      { old: { id: 'OPT-003', n: 'Optativa III' }, new: { id: 'OPT-003', n: 'Optativa III' } },
      { old: { id: 'OPT-004', n: 'Optativa IV' }, new: { id: 'OPT-004', n: 'Optativa IV' } },
    ],
  },
  {
    sem: 8,
    title: 'Octavo Semestre',
    items: [
      { old: { id: 'EST-437', n: 'Análisis de Datos Categóricos' }, new: { id: 'EST-339', n: 'Análisis de Datos Categóricos' } },
      { old: { id: 'EST-499', n: 'Trabajo de Grado' }, new: { id: 'EST-399', n: 'Trabajo de Grado' } },
      { old: { id: 'OPT-005', n: 'Optativa V' }, new: { id: 'OPT-005', n: 'Optativa V' } },
    ],
  },
]

export const convalidation2012to2021Troncales = [
  { old: { id: 'INF 111', n: 'Programación I' }, new: { id: 'INF 111', n: 'Programación I' } },
  { old: { id: 'LAB 111', n: 'Laboratorio de Programación I' }, new: { id: 'LAB 111', n: 'Laboratorio de Programación I' } },
  { old: { id: 'MAT 130', n: 'Álgebra' }, new: { id: 'MAT 130', n: 'Álgebra' } },
  { old: { id: 'MAT 132', n: 'Cálculo I' }, new: { id: 'MAT 132', n: 'Cálculo I' } },
  { old: { id: 'EST 130', n: 'Estadística General' }, new: { id: 'EST 113', n: 'Estadística Descriptiva' } },
  { old: { id: 'INF 121', n: 'Programación II' }, new: { id: 'EST 122', n: 'Computación Estadística I' } },
  { old: { id: 'EST 233', n: 'Probabilidad II' }, new: { id: 'EST 235', n: 'Inferencia Estadística I' } },
  { old: { id: 'EST 230', n: 'Bases de Datos' }, new: { id: 'EST 351', n: 'Computación Estadística II' } },
  { old: { id: 'EST 330', n: 'Modelos Lineales' }, new: { id: 'EST 353', n: 'Modelos Lineales I' } },
  { old: { id: 'EST 315', n: 'Procesos Estocásticos' }, new: { id: 'EST 355', n: 'Procesos Estocásticos' } },
  { old: { id: 'EST 337', n: 'Métodos Multivariados II' }, new: { id: 'EST 375', n: 'Métodos Multivariados II' } },
  { old: { id: 'EST 383', n: 'Programación Estadística I' }, new: { id: 'EST 372', n: 'Análisis de Datos Masivo I' } },
]

export const convalidation2012to2021Optativas = [
  {
    title: 'Área Estadística',
    icon: PieChart,
    items: [
      { old: { id: 'IIM 337', n: 'Control de Calidad' }, new: { id: 'EST 384', n: 'Control Est. de la Calidad' } },
      { old: { id: 'ECO 315', n: 'Matemática Actuarial' }, new: { id: 'EST 385', n: 'Estadística Actuarial' } },
      { old: { id: 'BIO 258', n: 'Epidemiología Médica' }, new: { id: 'EST 386', n: 'Epidemiología Estadística' } },
    ],
  },
  {
    title: 'Área Economía',
    icon: TrendingUp,
    items: [
      { old: { id: 'ECO 200', n: 'Microeconomía' }, new: { id: 'TE 302', n: 'Microeconomía I' } },
      { old: { id: 'ECO 201', n: 'Macroeconomía' }, new: { id: 'TE 313', n: 'Macroeconomía I' } },
      { old: { id: 'ECO 300', n: 'Econometría' }, new: { id: 'C 115', n: 'Econometría I' } },
    ],
  },
  {
    title: 'Área Matemática',
    icon: Sigma,
    items: [
      { old: { id: 'MAT 263', n: 'Topología General' }, new: { id: 'MAT 253', n: 'Topología General' } },
      { old: { id: 'MAT 278', n: 'Cálculo IV' }, new: { id: 'MAT 262', n: 'Análisis Complejo I' } },
    ],
  },
  {
    title: 'Área Física',
    icon: Zap,
    items: [
      { old: { id: 'FIS 222', n: 'Termodinámica' }, new: { id: 'FIS 362', n: 'Termodinámica' } },
      { old: { id: 'FIS 230', n: 'Mecánica Estadística' }, new: { id: 'FIS 370', n: 'Mecánica Estadística' } },
    ],
  },
  {
    title: 'Área Ing. Geográfica',
    icon: Map,
    items: [
      { old: { id: 'IIM 384', n: 'Cartografía Digitalizada' }, new: { id: 'MAP 202', n: 'Cartografía' } },
    ],
  },
  {
    title: 'Área Ing. Industrial',
    icon: Factory,
    items: [
      { old: { id: 'ECO 320', n: 'Mercadotecnia I' }, new: { id: 'IND 621', n: 'Marketing' } },
      { old: { id: 'IIM 375', n: 'Prep. y Eval. de Proyectos' }, new: { id: 'IND 723', n: 'Prep. y Eval. de Proyectos I' } },
    ],
  },
]

export const convalidationMappingMeta = {
  tag: 'Mapeo analítico',
  title: 'Equivalencias Oficiales',
  sub: 'Selecciona la resolución de transición que corresponda a tu historial académico para visualizar la matriz de convalidación.',
  planTabs: [
    { id: '2021', label: 'Plan 2012 -> 2021', icon: ArrowRightLeft, accent: 'orange' },
    { id: '2012', label: 'Plan 2007 -> 2012', icon: History, accent: 'blue' },
  ],
  typeTabs: [
    { id: 'troncales', label: 'Materias troncales', icon: Layers, accent: 'blue' },
    { id: 'optativas', label: 'Materias optativas', icon: ListFilter, accent: 'orange' },
  ],
  emptyLabel: 'No se encontraron equivalencias',
  warningTitle: 'Normativa de convalidación de optativas',
  warningText:
    'El estudiante debe elegir una sola área para convalidar materias optativas. No se permite combinar optativas de distintas áreas en el plan nuevo.',
  warningIcon: AlertTriangle,
  searchIcon: FileSearch,
}

export const convalidationProcedure = {
  tag: 'Trámites',
  title: ['Proceso de', 'Homologación'],
  description:
    'La convalidación de materias es un proceso automático para estudiantes regulares. En casos especiales de abandono, readmisión o traspaso, se aplica protocolo normativo.',
  requirements: [
    'Memorial o carta valorada dirigida a Dirección de Carrera solicitando homologación.',
    'Historial académico original (récord) firmado y sellado.',
    'Fotocopia de Resolución de Traspaso o Readmisión (si aplica).',
    'Fotocopia simple de Cédula de Identidad.',
    'Formulario de Convalidación adquirido en Caja Universitaria.',
    'Presentar documentación en folder oficial de la Carrera.',
  ],
  ctaLabel: 'Tabla oficial PDF',
  icon: BookOpen,
}

export const convalidationVisuals = {
  searchIcon: RefreshCcw,
  pageMarks: [
    { label: 'r = 0.94' },
    { label: 'sigma = 0.33' },
    { label: 'n = 240' },
  ],
  areaChips: [
    { label: 'Área estadística', icon: PieChart },
    { label: 'Área economía', icon: TrendingUp },
    { label: 'Área matemática', icon: Sigma },
    { label: 'Área industrial', icon: Factory },
    { label: 'Área geográfica', icon: Globe },
  ],
  headerIcon: FileText,
  processIcon: Target,
}
