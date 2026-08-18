import {
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Search,
  Target,
  UserCircle2,
  Users,
} from 'lucide-react'

export const investigacionPersonalHero = {
  tag: 'DIRECTORIO INSTITUCIONAL',
  title: ['EQUIPO DE', 'INVESTIGACIÓN IETA'],
  subtitle:
    'CONOCE A LOS DOCENTES INVESTIGADORES, PERSONAL ADMINISTRATIVO Y EQUIPO DE APOYO DEL INSTITUTO DE ESTADÍSTICA TEÓRICA Y APLICADA.',
}

export const investigacionPersonalDirector = {
  name: 'M.SC. FERNANDO ODAY RIVERO SUGUIURA',
  role: 'DIRECTOR A.I. DEL INSTITUTO DE ESTADÍSTICA TEÓRICA Y APLICADA',
  email: 'friverosuguiura2004@gmail.com',
  specialty: 'ANÁLISIS MULTIVARIADO Y GESTIÓN ACADÉMICA',
  imageUrl:
    '/images/investigacion/personal_director_rivero.jpg',
}

export const investigacionPersonalResearchers = [
  {
    name: 'M.SC. NICOLÁS CHÁVEZ QUISBERT',
    role: 'DOCENTE INVESTIGADOR',
    specialty: 'SERIES DE TIEMPO Y MODELACIÓN',
    email: 'nchavez@umsa.bo',
    imageUrl:
      '/images/investigacion/personal_nicolas_chavez.jpg',
  },
  {
    name: 'M.SC. DINDO VALDEZ BLANCO',
    role: 'DOCENTE INVESTIGADOR',
    specialty: 'DEMOGRAFÍA Y MODELOS LINEALES',
    email: 'dvaldez@umsa.bo',
    imageUrl:
      '/images/investigacion/personal_dindo_valdez.jpg',
  },
  {
    name: 'LIC. RAÚL DELGADO ÁLVAREZ',
    role: 'DOCENTE INVESTIGADOR',
    specialty: 'ESTADÍSTICA SOCIAL Y EDUCACIÓN',
    email: 'rdelgado@umsa.bo',
    imageUrl:
      '/images/investigacion/personal_raul_delgado.jpg',
  },
  {
    name: 'LIC. JAIME PINTO AJHUACHO',
    role: 'DOCENTE INVESTIGADOR',
    specialty: 'MUESTREO Y MARCOS POBLACIONALES',
    email: 'jpinto@umsa.bo',
    imageUrl:
      '/images/investigacion/personal_jaime_pinto.jpg',
  },
  {
    name: 'M.SC. FERNANDO ODAY RIVERO SUGUIURA',
    role: 'DOCENTE INVESTIGADOR',
    specialty: 'ANÁLISIS MULTIVARIADO',
    email: 'frivero@umsa.bo',
    imageUrl:
      '/images/investigacion/personal_director_rivero.jpg',
  },
  {
    name: 'LIC. NILDA GLORIA FLORES SALINAS',
    role: 'DOCENTE INVESTIGADORA',
    specialty: 'OPTIMIZACIÓN Y GESTIÓN (PERT/CPM)',
    email: 'nflores@umsa.bo',
    imageUrl:
      '/images/investigacion/personal_nilda_flores.jpg',
  },
]

export const investigacionPersonalAdministrative = [
  {
    name: 'SRA. ANA MARÍA PANCA PÉREZ',
    role: 'SECRETARIA DEL INSTITUTO',
    email: 'ieta@umsa.bo',
  },
  {
    name: 'SRA. LIDIA MAMANI MAYTA',
    role: 'PORTERA MENSAJERA',
    email: 'liditamayta@gmail.com',
  },
]

export const investigacionPersonalAuxiliaries = [
  {
    name: 'UNIV. CÁRDENAS SORIA ADRIANA',
    role: 'AUXILIAR DE INVESTIGACIÓN',
    email: '',
    icon: Search,
  },
  {
    name: 'UNIV. DANIEL FRANKLIN CÉSPEDES QUISPE',
    role: 'AUXILIAR DE INVESTIGACIÓN',
    email: '',
    icon: Search,
  },
  {
    name: 'UNIV. CÁRDENAS SORIA ALEJANDRO',
    role: 'AUXILIAR DE INVESTIGACIÓN',
    email: '',
    icon: Search,
  },
  {
    name: 'UNIV. RODE BELÉN VALERIANO TÓRREZ',
    role: 'AUXILIAR DE INTERACCIÓN',
    email: '',
    icon: Users,
  },
  {
    name: 'UNIV. LAURA ELIZABETH QUENTA MARCA',
    role: 'AUXILIAR DE INTERACCIÓN',
    email: '',
    icon: Users,
  },
  {
    name: 'UNIV. ALEX SUXO POMA',
    role: 'AUXILIAR DE INTERACCIÓN',
    email: '',
    icon: Users,
  },
]

export const investigacionPersonalStats = [
  { label: 'DOCENTES', value: '06', icon: Users },
  { label: 'ADMINISTRATIVOS', value: '02', icon: Briefcase },
  { label: 'AUXILIARES', value: '06', icon: GraduationCap },
]

export const investigacionPersonalContactStrip = [
  {
    label: 'UBICACIÓN',
    value: 'CAMPUS COTA COTA - BLOQUE FCPN, 1ER PISO',
    icon: MapPin,
  },
  {
    label: 'TELÉFONO',
    value: '2612824 - 2612844',
    icon: Phone,
  },
  {
    label: 'CORREO',
    value: 'ieta@umsa.bo',
    icon: Mail,
  },
]

export const investigacionPersonalDirectorMeta = {
  badge: 'MÁXIMA AUTORIDAD',
  sectionTag: 'NIVEL EJECUTIVO',
  sectionTitle: 'DIRECCIÓN DEL IETA',
  sectionIcon: Award,
}

export const investigacionPersonalResearchersMeta = {
  sectionTag: 'EQUIPO ACADÉMICO',
  sectionTitle: 'CUERPO DE INVESTIGADORES',
  sectionSubtitle:
    'PROFESIONALES DEDICADOS A LA INVESTIGACIÓN CIENTÍFICA ESTADÍSTICA Y AL DESARROLLO DE PROYECTOS DE IMPACTO SOCIAL.',
  pointIcon: Target,
}

export const investigacionPersonalSupportMeta = {
  sectionTag: 'OPERACIÓN INSTITUCIONAL',
  sectionTitle: 'PERSONAL ADMINISTRATIVO Y APOYO',
  adminTitle: 'ÁREA ADMINISTRATIVA',
  auxTitle: 'AUXILIARES DEL IETA',
  adminIcon: UserCircle2,
}
