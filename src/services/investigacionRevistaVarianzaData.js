import {
  Award,
  BookOpen,
  CalendarDays,
  FileSearch,
  FileText,
  Globe,
  Info,
  MapPin,
  Microscope,
  Quote,
  ShieldAlert,
  Users,
} from 'lucide-react'

export const revistaVarianzaHero = {
  tag: 'PUBLICACIÓN OFICIAL IETA - UMSA',
  title: ['REVISTA', 'VARIANZA'],
  subtitle:
    'DIFUNDIENDO CONOCIMIENTO EN LOS ÁMBITOS SOCIAL, ECONÓMICO Y MEDIOAMBIENTAL CON RIGOR METODOLÓGICO Y TÉCNICAS ESTADÍSTICAS AVANZADAS.',
  issn: 'ISSN: 2789-3510 / 2789-3529',
  ojsLabel: 'PORTAL OJS OFICIAL',
  ojsHref: 'https://ojs.umsa.bo/ojs/',
}

export const revistaVarianzaTabs = [
  { id: 'ediciones', label: 'CATÁLOGO DE EDICIONES', icon: BookOpen },
  { id: 'info', label: 'IDENTIDAD EDITORIAL', icon: Info },
  { id: 'comite', label: 'COMITÉ CIENTÍFICO', icon: Users },
]

export const revistaVarianzaMeta = {
  featuredTag: 'ÚLTIMA PUBLICACIÓN',
  featuredTitle: 'EDICIÓN DESTACADA',
  catalogTag: 'REPOSITORIO',
  catalogTitle: 'CATÁLOGO HISTÓRICO',
  detailsTag: 'EDICIÓN OFICIAL',
  detailsSubtitle: 'INSTITUTO DE ESTADÍSTICA TEÓRICA Y APLICADA (IETA)',
  searchPlaceholder: 'BUSCAR AÑO, NÚMERO O PALABRA CLAVE...',
  noResults: 'NO SE ENCONTRARON EDICIONES QUE COINCIDAN.',
  tabPanelEmpty: 'PRESENTACIÓN EN PROCESO DE DIGITALIZACIÓN',
  pdfAction: 'DESCARGAR PDF',
}

export const revistaVarianzaIdentity = {
  missionTitle: 'NUESTRA MISIÓN',
  mission:
    'DIFUNDIR PRINCIPALMENTE ARTÍCULOS ORIGINALES DE INVESTIGACIÓN CIENTÍFICA EN LOS ÁMBITOS SOCIAL, ECONÓMICO Y MEDIOAMBIENTAL, BASADOS EN EL USO DE MÉTODOS Y TÉCNICAS ESTADÍSTICAS APROPIADAS.',
  visionTitle: 'VISIÓN',
  vision:
    'LLEGAR A SER LA REVISTA CIENTÍFICA NACIONAL DE MAYOR CALIDAD E IMPACTO EN EL CAMPO DE LA ESTADÍSTICA APLICADA Y TEÓRICA, Y SER REFERENTE PARA EL CONTEXTO INTERNACIONAL.',
  scopeTitle: 'ALCANCE',
  scope:
    'SE PUBLICAN ARTÍCULOS SIN RESTRICCIÓN DE ÁREA DE APLICACIÓN. LOS ARTÍCULOS DEBEN SER RIGUROSOS EN CUANTO A LOS MÉTODOS ESTADÍSTICOS USADOS.',
  missionIcon: ShieldAlert,
}

export const revistaVarianzaEditor = {
  role: 'EDITOR PRINCIPAL',
  name: 'M.SC. FERNANDO ODAY RIVERO SUGUIURA',
  subtitle: 'DIRECTOR A.I. IETA, CARRERA DE ESTADÍSTICA, UMSA',
  email: 'friverosuguiura2004@gmail.com',
}

export const revistaVarianzaInternationalCommittee = [
  { name: 'LIZBETH ROMÁN PADILLA, PH.D.', uni: 'UNIVERSIDAD ANÁHUAC (NORTE)', country: 'MÉXICO' },
  { name: 'YOLANDA M. GÓMEZ OLMOS, DRA.', uni: 'UNIVERSIDAD DE BÍO BÍO', country: 'CHILE' },
  { name: 'OMAR CHOCOTEA POCA, DR.', uni: 'UNIVERSIDAD SANTIAGO DE CHILE', country: 'CHILE' },
  { name: 'LUZ MERY GONZÁLEZ GARCÍA, PH.D.', uni: 'UNIV. NACIONAL DE COLOMBIA', country: 'COLOMBIA' },
  { name: 'MARTHA P. BOHÓRQUEZ, PH.D.', uni: 'UNIV. NACIONAL DE COLOMBIA', country: 'COLOMBIA' },
  { name: 'ADRIANA D\'AMELIO, MG.', uni: 'UNIVERSIDAD NACIONAL DE CUYO', country: 'ARGENTINA' },
]

export const revistaVarianzaNationalCommittee = [
  { name: 'MARÍA EUGENIA APARICIO TORRICO, M. SC.', uni: 'UNIV. AUTÓNOMA JUAN MISAEL SARACHO', country: 'TARIJA, BOLIVIA' },
  { name: 'ARMINDA FLORA CASSO LISARAZU, M. SC.', uni: 'UNIV. AUTÓNOMA JUAN MISAEL SARACHO', country: 'TARIJA, BOLIVIA' },
]

export const revistaVarianzaCommitteeMeta = {
  titleTag: 'AUTORIDAD CIENTÍFICA',
  title: 'COMITÉ EDITORIAL',
  internationalTitle: 'COMITÉ INTERNACIONAL',
  nationalTitle: 'COMITÉ NACIONAL',
  internationalIcon: Globe,
  nationalIcon: MapPin,
}

export const revistaVarianzaEditions = [
  {
    id: 24,
    title: 'VARIANZA N° 24',
    date: 'OCTUBRE 2024',
    year: '2024',
    originales: 2,
    notas: 1,
    paginas: 61,
    size: '2.8 MB',
    issnPrint: '2789-3510',
    issnOnline: '2789-3529',
    featured: true,
    presentacion:
      'UNA VEZ MÁS, EL INSTITUTO DE ESTADÍSTICA TEÓRICA Y APLICADA (IETA) COMPARTE LA EDICIÓN N° 24 DE LA REVISTA CIENTÍFICA VARIANZA. EN ESTA EDICIÓN SE PRESENTAN DOS ARTÍCULOS ORIGINALES Y UNA NOTA CIENTÍFICA.',
    articulos: [
      { titulo: 'DESIGUALDADES EN LOS INGRESOS DE ADULTOS MAYORES BOLIVIANOS', autores: 'RAMIRO COA CLEMENTE Y PATRICIA LOZA CRUZ', pags: '22 PÁG.' },
      { titulo: 'ANÁLISIS FACTORIAL DINÁMICO APLICADO A LA MEDICIÓN DE RIESGO DE LIQUIDEZ', autores: 'RONAL EDWIN CONDORI HUANCA', pags: '9 PÁG.' },
      { titulo: 'DETERMINANTES DEL RENDIMIENTO DE LA QANAWA', autores: 'CARLOS ENRIQUE GUZMÁN DELGADO', autoresProper: 'CARLOS ENRIQUE GUZMÁN DELGADO', pags: '9 PÁG.' },
    ],
  },
  { id: 23, title: 'VARIANZA N° 23', date: 'ABRIL 2024', year: '2024', originales: 3, notas: 0, paginas: 75, size: '2.7 MB' },
  { id: 22, title: 'VARIANZA N° 22', date: 'OCTUBRE 2023', year: '2023', originales: 3, notas: 0, paginas: 67, size: '1.9 MB' },
  { id: 21, title: 'VARIANZA N° 21', date: 'ABRIL 2023', year: '2023', originales: 3, notas: 1, paginas: 63, size: '1.2 MB' },
  { id: 20, title: 'VARIANZA N° 20', date: 'OCTUBRE 2022', year: '2022', originales: 7, notas: 0, paginas: 85, size: '1.6 MB' },
  { id: 19, title: 'VARIANZA N° 19', date: 'ABRIL 2022', year: '2022', originales: 6, notas: 0, paginas: 86, size: '3 MB' },
  { id: 18, title: 'VARIANZA N° 18', date: 'NOVIEMBRE 2021', year: '2021', originales: 7, notas: 0, paginas: 92, size: '4 MB' },
  { id: 17, title: 'VARIANZA N° 17', date: 'NOVIEMBRE 2020', year: '2020', originales: 7, notas: 0, paginas: 48, size: '4 MB' },
  { id: 16, title: 'VARIANZA N° 16', date: 'ABRIL 2020', year: '2020', originales: 5, notas: 0, paginas: 60, size: '2.5 MB' },
  { id: 15, title: 'VARIANZA N° 15', date: 'OCTUBRE 2019', year: '2019', originales: 4, notas: 2, paginas: 70, size: '3.1 MB' },
]

export const revistaVarianzaUiIcons = {
  detailsQuoteIcon: Quote,
  detailsFileIcon: FileSearch,
  detailsSheetIcon: FileText,
  detailsStatsIcon: Microscope,
  detailsMetricIcon: CalendarDays,
  featuredIcon: Award,
}
