import {
  Award,
  BookOpen,
  Eye,
  FileText,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  Microscope,
  Phone,
  Search,
  Target,
} from 'lucide-react'

export const ietaHero = {
  tag: 'INVESTIGACIÓN APLICADA',
  title: ['ACERCA', 'DEL IETA'],
  subtitle:
    'INSTITUTO DE ESTADÍSTICA TEÓRICA Y APLICADA. MOTOR CIENTÍFICO DE LA CARRERA DE ESTADÍSTICA PARA LA GENERACIÓN DE CONOCIMIENTO, INTERACCIÓN SOCIAL Y SERVICIOS ESPECIALIZADOS.',
  ctaPrimary: { label: 'CONOCE EL INSTITUTO', href: '#historia' },
  ctaSecondary: { label: 'VER REGLAMENTO', href: '#reglamento', icon: FileText },
  imageUrl:
    '/images/investigacion/ieta_hero.jpg',
}

export const ietaQuickContact = [
  {
    title: 'CAMPUS UNIVERSITARIO',
    detail: 'BLOQUE FCPN, 1ER PISO. CALLE 27 DE COTA COTA.',
    icon: MapPin,
    iconClassName: 'text-[#ea580c]',
  },
  {
    title: 'LÍNEAS DE CONTACTO',
    detail: '2612824 - 2612844',
    icon: Phone,
    iconClassName: 'text-blue-300',
  },
  {
    title: 'CORREO OFICIAL',
    detail: 'ieta@umsa.bo',
    icon: Mail,
    iconClassName: 'text-emerald-300',
  },
]

export const ietaHistory = {
  tag: 'RESEÑA HISTÓRICA',
  title: 'ORIGEN Y CONSOLIDACIÓN DEL IETA',
  imageUrl: '/images/investigacion/ieta-logo.jpg',
  paragraphs: [
    'BAJO LA VISIÓN DEL DECANO LIC. LUIS ZAPATA ESCOBAR Y EL JEFE DE CARRERA LIC. RAÚL MARQUIEGUI NAVARRO, EL IETA NACE PARA INCENTIVAR E INNOVAR LA INVESTIGACIÓN E INTERACCIÓN SOCIAL EN DOCENTES Y ESTUDIANTES, RECONOCIENDO A LA ESTADÍSTICA COMO CIENCIA TRANSVERSAL.',
    'SU ACTIVIDAD PRINCIPAL ES PROMOVER LA INVESTIGACIÓN ESTADÍSTICA EN BENEFICIO DE LA UMSA Y LA SOCIEDAD, CON PROYECTOS ORIENTADOS AL ANÁLISIS CUANTITATIVO PARA LA TOMA DE DECISIONES EN PLANES DE DESARROLLO SOCIAL Y ECONÓMICO.',
  ],
  milestone: {
    label: 'RESOLUCIÓN N° 082/94 DEL HCU',
    detail: 'APROBACIÓN OFICIAL DE REGLAMENTOS DEL INSTITUTO (1994).',
    icon: Award,
  },
}

export const ietaIdentity = {
  mission: {
    title: 'MISIÓN',
    symbol: 'MU',
    icon: Target,
    text: 'GENERAR CONOCIMIENTO CIENTÍFICO MEDIANTE LA INVESTIGACIÓN ESTADÍSTICA TEÓRICA Y APLICADA, CONTRIBUYENDO AL DESARROLLO TECNOLÓGICO Y SOCIAL DEL PAÍS, FORMANDO INVESTIGADORES DE ALTO NIVEL Y BRINDANDO SERVICIOS DE CONSULTORÍA CON EXCELENCIA ACADÉMICA.',
  },
  vision: {
    title: 'VISIÓN',
    symbol: 'SIGMA',
    icon: Eye,
    text: 'SER EL INSTITUTO DE INVESTIGACIÓN LÍDER Y DE REFERENCIA NACIONAL E INTERNACIONAL EN CIENCIA ESTADÍSTICA, RECONOCIDO POR SU CALIDAD CIENTÍFICA, APORTE A LA RESOLUCIÓN DE PROBLEMAS NACIONALES Y DIFUSIÓN DE CONOCIMIENTO DE VANGUARDIA.',
  },
}

export const ietaObjectives = {
  tag: 'LÍNEAS DE ACCIÓN',
  title: 'OBJETIVOS ESTRATÉGICOS',
  subtitle:
    'EL IETA DESARROLLA INVESTIGACIÓN CIENTÍFICA MEDIANTE PROGRAMAS, PROYECTOS Y ACTIVIDADES CON PARTICIPACIÓN ACTIVA DE DOCENTES Y ESTUDIANTES.',
  cards: [
    {
      title: 'INVESTIGACIÓN APLICADA',
      description:
        'PLANIFICAR, DESARROLLAR Y EJECUTAR PROYECTOS DE INVESTIGACIÓN, INTERACCIÓN SOCIAL Y EXTENSIÓN UNIVERSITARIA.',
      icon: Search,
    },
    {
      title: 'SERVICIOS ESTRATÉGICOS',
      description:
        'PRESTAR ASESORAMIENTO TÉCNICO A UNIDADES DEL SISTEMA UNIVERSITARIO Y ENTIDADES PÚBLICAS Y PRIVADAS.',
      icon: Handshake,
    },
    {
      title: 'FORMACIÓN INTEGRAL',
      description:
        'COADYUVAR EN LA FORMACIÓN APLICADA E INVESTIGATIVA DE LOS ESTUDIANTES MEDIANTE PARTICIPACIÓN DIRECTA EN PROYECTOS.',
      icon: GraduationCap,
    },
    {
      title: 'INCENTIVO DOCENTE',
      description:
        'FORTALECER LA ACTIVIDAD INVESTIGATIVA Y LA INTERACCIÓN SOCIAL DEL PLANTEL DOCENTE DE LA CARRERA.',
      icon: Award,
    },
    {
      title: 'DIFUSIÓN CIENTÍFICA',
      description:
        'PROMOVER Y RECOMENDAR LA PUBLICACIÓN DE REVISTAS, ARTÍCULOS CIENTÍFICOS Y TESIS DE ALTO IMPACTO.',
      icon: BookOpen,
    },
    {
      title: 'CULTURA DE EVIDENCIA',
      description:
        'IMPULSAR EL USO DE INDICADORES, MODELOS Y ANALÍTICA PARA DECISIONES INSTITUCIONALES Y SOCIALES.',
      icon: Microscope,
    },
  ],
}

export const ietaRegulation = {
  tag: 'MARCO LEGAL',
  title: 'REGLAMENTO INTERNO DEL IETA',
  description:
    'ACCEDE AL DOCUMENTO NORMATIVO OFICIAL QUE RIGE EL FUNCIONAMIENTO, LA ESTRUCTURA ADMINISTRATIVA, DEBERES Y PROCESOS DE INVESTIGACIÓN DEL INSTITUTO DE ESTADÍSTICA TEÓRICA Y APLICADA.',
  primaryCta: {
    label: 'VISUALIZAR EN NAVEGADOR',
    href: 'https://drive.google.com/file/d/16txUClDbVJTTxl0bQp39WEylU3WaH2gU/view?usp=sharing',
  },
  secondaryCta: {
    label: 'DESCARGAR PDF',
    href: 'https://drive.google.com/uc?export=download&id=16txUClDbVJTTxl0bQp39WEylU3WaH2gU',
  },
}