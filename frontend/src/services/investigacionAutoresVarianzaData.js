import {
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Database,
  FileBadge,
  FileText,
  Globe,
  GraduationCap,
  Info,
  Library,
  MailPlus,
  MapPin,
  Microscope,
  Scale,
  ScrollText,
  ShieldAlert,
  UserCircle,
} from 'lucide-react'

export const autoresVarianzaHero = {
  tag: 'ISSN 2789-3529 (EN LÍNEA)',
  title: ['COMUNIDAD DE', 'INVESTIGADORES'],
  subtitle:
    'INFORMACIÓN TÉCNICA Y METODOLÓGICA PARA AUTORES INTERESADOS EN PUBLICAR EN LA REVISTA CIENTÍFICA VARIANZA, JUNTO CON EL DIRECTORIO OFICIAL DE APORTES CIENTÍFICOS.',
}

export const autoresVarianzaGuideHeader = {
  tag: 'IDENTIDAD EDITORIAL',
  title: 'LINEAMIENTOS DE PUBLICACIÓN',
  subtitle:
    'NUESTRA MISIÓN ES DIFUNDIR ARTÍCULOS ORIGINALES BASADOS EN EL USO RIGUROSO DE MÉTODOS Y TÉCNICAS ESTADÍSTICAS PARA IMPULSAR EL DESARROLLO SOCIAL.',
}

export const autoresVarianzaGuideCards = [
  {
    title: 'MISIÓN',
    description:
      'DIFUNDIR ARTÍCULOS ORIGINALES DE INVESTIGACIÓN CIENTÍFICA EN DISTINTOS ÁMBITOS, BASADOS EN RIGOR ESTADÍSTICO.',
    icon: CheckCircle2,
    tone: 'light',
  },
  {
    title: 'VISIÓN',
    description:
      'LLEGAR A SER LA REVISTA CIENTÍFICA NACIONAL DE MAYOR CALIDAD E IMPACTO EN ESTADÍSTICA APLICADA Y TEÓRICA.',
    icon: Globe,
    tone: 'dark',
  },
  {
    title: 'ALCANCE',
    description:
      'SIN RESTRICCIONES DE ÁREA, SIEMPRE QUE EL USO DE MÉTODOS ESTADÍSTICOS SEA RIGUROSO Y VERIFICABLE.',
    icon: Award,
    tone: 'light',
  },
]

export const autoresVarianzaManuscriptTypes = [
  { label: 'ARTÍCULOS ORIGINALES', desc: 'TEÓRICOS O PRÁCTICOS', icon: FileText },
  { label: 'DE REVISIÓN', desc: 'ESTADO DEL ARTE', icon: ScrollText },
  { label: 'ESTUDIOS DE CASO', desc: 'FENÓMENOS ESPECÍFICOS', icon: Microscope },
  { label: 'NOTAS CIENTÍFICAS', desc: 'AVANCES BREVES', icon: FileBadge },
  { label: 'COMUNICACIONES', desc: 'INTERÉS ESTIMULAR', icon: MailPlus },
  { label: 'RESEÑAS', desc: 'SOBRE LIBROS RECIENTES', icon: BookOpen },
  { label: 'DE ENSEÑANZA', desc: 'CLARIFICACIÓN TEÓRICA', icon: GraduationCap },
  { label: 'DATA REPORTS', desc: 'TABULACIÓN TÉCNICA', icon: Database },
]

export const autoresVarianzaReviewProcess = [
  {
    step: '01',
    title: 'REVISIÓN POR EL EDITOR',
    desc: 'VERIFICACIÓN DE PERTINENCIA TEMÁTICA, NORMAS DE FORMA Y REQUISITOS BÁSICOS.',
  },
  {
    step: '02',
    title: 'PARES A DOBLE CIEGO',
    desc: 'EVALUACIÓN POR DOS REVISORES EXTERNOS ANÓNIMOS. SE ANALIZA RIGOR DEL MÉTODO Y COHERENCIA CUANTITATIVA.',
    highlighted: true,
  },
  {
    step: '03',
    title: 'MAQUETACIÓN TÉCNICA',
    desc: 'DIAGRAMACIÓN FINAL, CORRECCIÓN DE ESTILO Y PREPARACIÓN PARA PUBLICACIÓN INDEXADA.',
  },
]

export const autoresVarianzaCta = {
  title: 'RECEPCIÓN DE MANUSCRITOS',
  subtitle:
    'PUEDE ENVIAR SU ARTÍCULO EN CUALQUIER MOMENTO DEL AÑO JUNTO CON LA CARTA DE ORIGINALIDAD FIRMADA POR LOS AUTORES.',
  email: 'ieta@umsa.bo',
}

export const autoresVarianzaDirectoryHeader = {
  tag: 'RED DE INVESTIGADORES',
  title: 'DIRECTORIO OFICIAL',
  subtitle:
    'PERFILES ACADÉMICOS Y APORTES PUBLICADOS EN LAS EDICIONES DE LA REVISTA VARIANZA.',
  searchPlaceholder: 'BUSCAR INVESTIGADOR...',
}

export const autoresVarianzaAuthors = [
  {
    id: 'A1',
    name: 'ALIAGA CÁCERES, IVÁN YONY',
    affiliation: 'IETA, UMSA',
    orcid: '0000-0002-1234-5678',
    scholar: 'https://scholar.google.com',
    bio: 'INVESTIGADOR TITULAR DEL IETA. ESPECIALISTA EN SERIES DE TIEMPO Y MODELOS ECONOMÉTRICOS PARA INDICADORES ECONÓMICOS BOLIVIANOS.',
    articles: [
      { title: 'ANÁLISIS DE SERIES DE TIEMPO DEL COMERCIO EXTERIOR', edition: 'VARIANZA N° 23', year: '2024' },
      { title: 'MODELACIÓN DE VARIABLES MACROECONÓMICAS', edition: 'VARIANZA N° 19', year: '2022' },
      { title: 'ESTIMACIÓN DE LA POBREZA MULTIDIMENSIONAL', edition: 'VARIANZA N° 15', year: '2019' },
    ],
  },
  {
    id: 'B1',
    name: 'BOHÓRQUEZ CASTAÑEDA, MARTHA P.',
    affiliation: 'UNIVERSIDAD NACIONAL DE COLOMBIA',
    orcid: null,
    scholar: 'https://scholar.google.com',
    bio: 'DOCTORA EN ESTADÍSTICA, MIEMBRO DEL COMITÉ INTERNACIONAL DE VARIANZA Y COLABORADORA EN MÉTODOS ESTADÍSTICOS ESPACIALES.',
    articles: [{ title: 'MODELOS ESPACIALES EN LA PREDICCIÓN DE CULTIVOS AGRÍCOLAS', edition: 'VARIANZA N° 21', year: '2023' }],
  },
  {
    id: 'C1',
    name: 'COA CLEMENTE, RAMIRO',
    affiliation: 'DIRECTOR IETA, UMSA',
    orcid: '0000-0003-9876-5432',
    scholar: null,
    bio: 'DIRECTOR DEL IETA. EXPERTO EN ESTADÍSTICA SOCIAL, ENCUESTAS DE HOGARES Y DEMOGRAFÍA.',
    articles: [
      { title: 'DESIGUALDADES EN LOS INGRESOS DE ADULTOS MAYORES BOLIVIANOS', edition: 'VARIANZA N° 24', year: '2024' },
      { title: 'DINÁMICA DEMOGRÁFICA POST-COVID EN ÁREAS PERIURBANAS', edition: 'VARIANZA N° 22', year: '2023' },
    ],
  },
  {
    id: 'C2',
    name: 'CONDORI HUANCA, RONAL EDWIN',
    affiliation: 'CARRERA DE ESTADÍSTICA, UMSA',
    orcid: null,
    scholar: null,
    bio: 'ANALISTA ESPECIALISTA EN RIESGO FINANCIERO, MINERÍA DE DATOS APLICADA E INTELIGENCIA DE NEGOCIOS.',
    articles: [{ title: 'ANÁLISIS FACTORIAL DINÁMICO APLICADO A LA MEDICIÓN DE RIESGO DE LIQUIDEZ', edition: 'VARIANZA N° 24', year: '2024' }],
  },
  {
    id: 'C3',
    name: 'CHÁVEZ QUISBERT, NICOLÁS',
    affiliation: 'INVESTIGADOR ASOCIADO',
    orcid: '0000-0001-2233-4455',
    scholar: 'https://scholar.google.com',
    bio: 'ESPECIALISTA EN MUESTREO ESTADÍSTICO Y DISEÑO DE EXPERIMENTOS AGROPECUARIOS.',
    articles: [{ title: 'MUESTREO ESTRATIFICADO EN ZONAS DE CULTIVO', edition: 'VARIANZA N° 20', year: '2022' }],
  },
  {
    id: 'G1',
    name: 'GUZMÁN DELGADO, CARLOS ENRIQUE',
    affiliation: 'ESTUDIANTE INVESTIGADOR, UMSA',
    orcid: null,
    scholar: null,
    bio: 'ESTUDIANTE DESTACADO DE LA CARRERA, GANADOR DEL CONCURSO DE ARTÍCULOS CIENTÍFICOS DEL IETA EN LA GESTIÓN 2024.',
    articles: [{ title: 'DETERMINANTES DEL RENDIMIENTO DE LA QANAWA', edition: 'VARIANZA N° 24', year: '2024' }],
  },
  {
    id: 'L1',
    name: 'LOZA CRUZ, PATRICIA',
    affiliation: 'INVESTIGADORA INDEPENDIENTE',
    orcid: '0000-0001-5555-4444',
    scholar: 'https://scholar.google.com',
    bio: 'ECONOMISTA Y ANALISTA DE DATOS CON ENFOQUE EN ECONOMÍA DEL ENVEJECIMIENTO Y ESTUDIOS DE VULNERABILIDAD.',
    articles: [{ title: 'DESIGUALDADES EN LOS INGRESOS DE ADULTOS MAYORES BOLIVIANOS', edition: 'VARIANZA N° 24', year: '2024' }],
  },
  {
    id: 'M1',
    name: 'MAMANI VARGAS, JORGE',
    affiliation: 'INE, BOLIVIA',
    orcid: null,
    scholar: null,
    bio: 'ANALISTA DEMOGRÁFICO ENFOCADO EN CENSOS POBLACIONALES Y ESTIMACIONES DE PROYECCIONES INTERCENSALES.',
    articles: [
      { title: 'ANÁLISIS DE COBERTURA CENSAL EN ÁREAS RURALES', edition: 'VARIANZA N° 23', year: '2024' },
      { title: 'TASAS DE FECUNDIDAD ESTIMADAS', edition: 'VARIANZA N° 18', year: '2021' },
    ],
  },
  {
    id: 'R1',
    name: 'ROMÁN PADILLA, LIZBETH',
    affiliation: 'UNIVERSIDAD ANÁHUAC, MÉXICO',
    orcid: '0000-0002-1111-2222',
    scholar: 'https://scholar.google.com',
    bio: 'MIEMBRO DEL COMITÉ INTERNACIONAL, ESPECIALISTA EN BIOESTADÍSTICA Y DISEÑO DE EXPERIMENTOS PARA ENSAYOS CLÍNICOS.',
    articles: [
      { title: 'ENFOQUE BAYESIANO PARA ENSAYOS CLÍNICOS DE FASE II', edition: 'VARIANZA N° 20', year: '2022' },
      { title: 'SUPERVIVENCIA Y RIESGOS COMPETITIVOS EN SALUD', edition: 'VARIANZA N° 18', year: '2021' },
    ],
  },
]

export const autoresAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export const autoresVarianzaIcons = {
  mission: ShieldAlert,
  vision: Globe,
  scope: Library,
  process: Scale,
  profile: UserCircle,
  location: MapPin,
  article: BookOpen,
  year: CalendarDays,
  info: Info,
}
