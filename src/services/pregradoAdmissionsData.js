import {
  BrainCircuit,
  Briefcase,
  CalendarCheck,
  ClipboardEdit,
  Factory,
  FileText,
  Folder,
  Globe,
  Layers,
  ListOrdered,
  Map,
  PieChart,
  Sigma,
  Target,
  TrendingUp,
} from 'lucide-react'

export const admissionsHero = {
  badge: 'Convocatoria abierta 2026',
  title: ['Ingreso a la', 'ciencia de', 'Datos.'],
  description:
    'Tu futuro como arquitecto de la evidencia científica comienza aquí. Conoce las vías oficiales de admisión a la Carrera de Estadística de la UMSA.',
  stats: {
    icon: Sigma,
    label: 'Cupos por gestión',
    value: '150+',
    channels: ['PSA', 'PRE-U'],
  },
}

export const regularAdmissions = {
  tag: 'Vías de acceso',
  title: 'Modalidades Regulares',
  sub: 'Las dos rutas principales administradas por la Facultad de Ciencias Puras y Naturales para bachilleres.',
  cards: [
    {
      id: 'psa',
      icon: ClipboardEdit,
      badge: 'Evaluación directa',
      title: 'Prueba de Suficiencia Académica (PSA)',
      description:
        'Examen de dispensación administrado por la FCPN. Evalúa aptitudes lógico-matemáticas y conocimientos exactos en una sola prueba de alto rigor.',
      topics: [
        'Matemática (Cálculo y Álgebra)',
        'Física',
        'Química',
        'Informática básica',
      ],
      cta: {
        label: 'Convocatoria PSA FCPN',
        href: 'https://daf.fcpn.edu.bo/psa/',
      },
      style: 'blue',
    },
    {
      id: 'preu',
      icon: BrainCircuit,
      badge: 'Formación continua',
      title: 'Curso Preparatorio Preuniversitario (Pre-U)',
      description:
        'Programa académico de nivelación dictado por la FCPN. Combina clases teóricas y evaluaciones parciales para preparar al estudiante al rigor universitario.',
      highlights: ['Duración: 10-12 semanas', 'Evaluaciones parciales'],
      cta: {
        label: 'Portal Curso Pre-U',
        href: 'https://daf.fcpn.edu.bo/cursopreparatorio/',
      },
      style: 'orange',
    },
  ],
}

export const generalRequirements = {
  title: ['Documentación', 'General'],
  description:
    'Documentos obligatorios que todo postulante regular debe presentar en ventanillas de Kárdex una vez aprobada la modalidad de ingreso (PSA o Pre-U).',
  items: [
    'Fotocopia legalizada del Título de Bachiller (o libreta de 6° si está en trámite).',
    'Fotocopia simple de Cédula de Identidad vigente.',
    'Certificado de Nacimiento original computarizado.',
    'Comprobante de depósito bancario original (Canje de Valores).',
    'Dos fotografías tamaño 3x4 con fondo celeste o plomo.',
    'Formulario de matriculación web impreso y firmado.',
  ],
}

export const admissionsTimeline = {
  tag: 'Planificación cronológica',
  title: 'Gestiones de Admisión',
  sub: 'La UMSA habilita dos periodos de ingreso al año. Conoce las etapas operativas para las gestiones regulares.',
  periods: [
    {
      id: 's1',
      badge: 'Primera convocatoria',
      title: 'Semestre I / 2026',
      summary: 'Ingreso programado para el inicio de clases en febrero/marzo.',
      badgeStyle: 'orange',
      rows: [
        ['Inscripción Pre-U', 'Agosto - Sept. (año previo)'],
        ['Inscripción PSA', 'Noviembre - Diciembre'],
        ['Entrega de documentos', 'Enero 2026'],
        ['Matriculación Kárdex', 'Febrero 2026'],
      ],
    },
    {
      id: 's2',
      badge: 'Segunda convocatoria',
      title: 'Semestre II / 2026',
      summary: 'Ingreso programado para el inicio de clases en agosto.',
      badgeStyle: 'blue',
      rows: [
        ['Inscripción Pre-U', 'Marzo - Abril'],
        ['Inscripción PSA', 'Junio - Julio'],
        ['Entrega de documentos', 'Julio (última semana)'],
        ['Matriculación Kárdex', 'Agosto 2026'],
      ],
    },
  ],
}

export const specialModalities = [
  {
    id: 'paralelas',
    title: 'Carreras Paralelas',
    icon: Layers,
    desc: 'Para estudiantes regulares de la UMSA que deseen cursar Estadística en simultáneo con su carrera de origen.',
    folder: 'Guindo',
    horario: '09:00 a 12:00 (Ventanillas 6 y 8)',
    hasTable: true,
    reqs: [
      'Carta dirigida a la Jefa Div. Gestiones con carrera origen/destino, C.I. y teléfono.',
      'Historial académico original firmado por el Director de Carrera.',
      'Promedio mínimo de materias aprobadas: 65% (o 80% del plan de estudios).',
      'Plan de estudios con firma y sello de la carrera de origen.',
      'Fotocopia simple de la última matrícula universitaria.',
      'Fotocopia simple de Diploma de Bachiller y C.I.',
    ],
    proc: [
      'Recepción en ventanilla 8 (C.I. pares) y ventanilla 6 (C.I. impares).',
      'Presentar documentación en folder color guindo.',
      'Resultados publicados en vitrinas de la División de Gestiones y portal UMSA.',
    ],
  },
  {
    id: 'profesionales',
    title: 'Admisión de Profesionales',
    icon: Briefcase,
    desc: 'Ingreso directo para profesionales universitarios, militares/policías, maestros normalistas y titulados técnicos por convenio.',
    folder: 'Naranja',
    horario: '09:00 a 10:00 (Ventanilla 8)',
    hasTable: true,
    reqs: [
      'Carta de solicitud dirigida a la Jefa Div. Gestiones.',
      'Fotocopia legalizada de Diploma Académico o Título en Provisión Nacional.',
      'Fotocopia simple del Certificado de Calificación de Grado Académico.',
      'Fotocopia legalizada de Diploma de Bachiller.',
      'Certificado de Nacimiento original y fotocopia simple de C.I.',
      'Un juego adicional de fotocopias simples de toda la documentación.',
    ],
    proc: [
      'Presentar documentos en folder color naranja en ventanilla 8.',
      'Adquirir y llenar Formulario de Admisiones Especiales en Caja Recaudadora.',
      'La documentación se enviará a la carrera para informe y aprobación.',
      'Con informe favorable, recabar Orden de Compra de Matrícula y pagar en entidad autorizada.',
    ],
  },
  {
    id: 'cambio_carrera',
    title: 'Cambio de Carrera (Interno)',
    icon: Target,
    desc: 'Movilidad estudiantil interna para universitarios UMSA que deseen trasladarse definitivamente a Estadística.',
    folder: 'Oficial',
    horario: '09:00 a 10:00',
    hasTable: true,
    reqs: [
      'Matrícula obtenida en una de las tres últimas gestiones.',
      'Historial académico original: mínimo 2 anuales o 4 semestrales aprobadas.',
      'Fotocopia simple de C.I. y Título de Bachiller.',
      'Fotocopia del plan de estudios de la carrera de origen.',
      'Certificación de Biblioteca (origen) de no adeudo de libros.',
    ],
    proc: [
      'Recepción y selección según reglamento y requisitos FCPN.',
      'Comunicación de procedencia al concluir selección.',
      'Estudiantes aceptados compran Formulario 010 de Cambio de Carrera.',
      'Con firmas autorizadas se emite orden de matriculación en Estadística.',
    ],
  },
  {
    id: 'traspasos_ext',
    title: 'Traspasos (Sistema y Exterior)',
    icon: Globe,
    desc: 'Movilidad para estudiantes de otras universidades del sistema boliviano o del exterior.',
    folder: 'Oficial',
    horario: 'Según cronograma',
    hasTable: false,
    reqs: [
      'Matrícula vigente en la universidad de origen.',
      'Historial académico original (mínimo 4 materias semestrales aprobadas).',
      'Fotocopia de C.I. y Diploma de Bachiller.',
      'Certificados de no adeudo bibliográfico.',
      'Exterior: documentos legalizados por Consulado Boliviano y Cancillería.',
    ],
    proc: [
      'Carta de solicitud a la Jefa Div. Gestiones especificando carrera y universidad de origen/destino.',
      'Adquirir formulario de traspaso tras autorización.',
      'Someterse a proceso de convalidación de materias en la FCPN.',
    ],
  },
]

export const specialMeta = {
  title: ['Casos', 'Especiales'],
  entity: 'División de Gestiones, Admisiones y Registros UMSA',
  requisitesIcon: FileText,
  procedureIcon: ListOrdered,
  folderIcon: Folder,
}

export const admissionsVisuals = {
  decorativeIcons: {
    regularA: ClipboardEdit,
    regularB: BrainCircuit,
    requirements: FileText,
    timeline: CalendarCheck,
  },
  electivesPalette: [
    { label: 'Analítica aplicada', icon: PieChart },
    { label: 'Proyección económica', icon: TrendingUp },
    { label: 'Rutas geográficas', icon: Map },
    { label: 'Entorno industrial', icon: Factory },
  ],
}
