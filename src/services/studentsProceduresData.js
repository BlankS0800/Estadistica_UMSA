import {
  Award,
  ClipboardList,
  ExternalLink,
  FileSearch,
  Globe,
  GraduationCap,
  History,
  ListOrdered,
  Search,
  Sigma,
  Binary,
  Stamp,
} from 'lucide-react'

export const studentsHero = {
  eyebrow: 'Gestión administrativa transparente',
  title: ['Guía y Seguimiento', 'de Trámites'],
  description:
    'Centralizamos requisitos y flujos procedimentales para que el estudiante gestione solicitudes académicas sin contratiempos.',
  placeholder: 'Ej. egreso, excelencia, legalización...',
  icon: ClipboardList,
  leftShape: Sigma,
  rightShape: Binary,
  searchIcon: Search,
}

export const studentsSystems = [
  {
    id: 'chasqui',
    tag: 'Trámites Facultativos (FCPN)',
    title: 'Sistema CHASQUI',
    caption: 'Seguimiento con N° RUT',
    href: 'https://chasqui.fcpn.edu.bo/',
    icon: FileSearch,
    tone: 'blue',
  },
  {
    id: 'ayni',
    tag: 'Ventanilla Única (UMSA)',
    title: 'Sistema AYNI',
    caption: 'Trámites universitarios',
    href: 'https://ayni.umsa.bo/',
    icon: Globe,
    tone: 'amber',
  },
]

export const studentsProcedures = [
  {
    id: 'reinscripcion',
    title: 'Reinscripción / Readmisión',
    tag: 'Permanencia Estudiantil',
    icon: History,
    desc: 'Proceso para reincorporar a un universitario inactivo con registro académico previo.',
    requirements: [
      '2 fotocopias del título de bachiller.',
      '2 fotocopias de cédula de identidad vigente.',
      '2 certificados de notas con mínimo 2 asignaturas aprobadas o récord académico firmado.',
      'Matrícula original de la última gestión (o copia legalizada).',
      'Si concluyó plan de estudios: adjuntar certificado de conclusión de estudios.',
    ],
    steps: [
      {
        t: 'División de Gestiones',
        d: 'Verificación de documentos y emisión de orden de compra del formulario.',
      },
      {
        t: 'Kárdex de Carrera',
        d: 'Validación en file académico y llenado del formulario con firmas requeridas.',
      },
      {
        t: 'División de Gestiones (Retorno)',
        d: 'Devolución del trámite firmado para emitir orden de compra de matrícula actual.',
      },
    ],
  },
  {
    id: 'conclusion',
    title: 'Certificado de Conclusión de Estudios',
    tag: 'Trámites de Egreso',
    icon: GraduationCap,
    desc: 'Documento oficial que acredita el vencimiento exitoso de asignaturas del plan de estudios.',
    requirements: [
      'Carta dirigida al Director solicitando el certificado.',
      'Fotocopia de matrícula actual y cédula de identidad vigente.',
      'Récord académico emitido por kárdex.',
      '3 fotografías 3x3 fondo plomo claro.',
      '2 certificados únicos de calificaciones.',
      'Resoluciones de convalidación cuando aplique.',
      'Valoradas por Bs. 65.',
    ],
    steps: [
      {
        t: 'Recepción (Dirección)',
        d: 'Ingreso del trámite con nota y proveído hacia kárdex.',
      },
      {
        t: 'Auditoría en Kárdex',
        d: 'Revisión de actas, sistema académico y cumplimiento del plan.',
      },
      {
        t: 'Visto Bueno',
        d: 'Conformidad del Director y elevación de informe sin observaciones.',
      },
      {
        t: 'Kárdex Facultativo',
        d: 'Remisión a facultad para impresión y emisión del certificado final.',
      },
    ],
  },
  {
    id: 'excelencia',
    title: 'Graduación por Excelencia',
    tag: 'Modalidad Titulación',
    icon: Award,
    desc: 'Modalidad de titulación directa para estudiantes con alto rendimiento académico sostenido.',
    requirements: [
      'Nota dirigida al Decano solicitando graduación por excelencia.',
      'Fotocopia legalizada del título de bachiller y certificado de conclusión.',
      'Récord e historial académico y juego de certificados originales.',
      'Informe de kárdex con V.B. del Director con promedio ponderado.',
      'Plan de estudios firmado y resoluciones de convalidación si aplica.',
      'Matrículas universitarias (primera y última).',
      'Fotocopia de carné de identidad.',
      'Informe del tribunal revisor y resolución facultativa de aprobación.',
    ],
    steps: [
      {
        t: 'Tribunal Revisor',
        d: 'Designación de tres docentes para auditoría de antecedentes del postulante.',
      },
      {
        t: 'Dictamen Oficial',
        d: 'Informe del tribunal con verificación de promedio y procedencia.',
      },
      {
        t: 'Aprobación Plenaria',
        d: 'Resolución de consejo de carrera y resolución facultativa final.',
      },
      {
        t: 'Gestiones y Admisiones',
        d: 'Presentación del dossier consolidado en división de gestiones.',
      },
    ],
  },
  {
    id: 'legalizaciones',
    title: 'Legalización de Documentos',
    tag: 'Certificaciones',
    icon: Stamp,
    desc: 'Certificación para reconocimiento oficial de documentos dentro del sistema legal.',
    requirements: [
      'Título o diploma original a legalizar.',
      'Fotocopias claras de anverso y reverso en tamaño oficio.',
      'Carné de identidad físico para recojo.',
      'En extravío de boleta: recibo de pago por reposición.',
    ],
    steps: [
      {
        t: 'Sello de Autorización',
        d: 'Recabar sello en ventanilla de legalizaciones con originales y copias.',
      },
      {
        t: 'Tesoro Universitario',
        d: 'Pago de valores correspondientes en cajas habilitadas.',
      },
      {
        t: 'Entrega y Contraseña',
        d: 'Entrega de recibo y fotocopias para obtener boleta de trámite.',
      },
      {
        t: 'Recojo Documental',
        d: 'Recojo 24 horas después, de forma personal o pariente de primer grado.',
      },
    ],
  },
]

export const studentsUi = {
  externalLinkIcon: ExternalLink,
  modeFlowIcon: ListOrdered,
  modeRequirementsIcon: ClipboardList,
}
