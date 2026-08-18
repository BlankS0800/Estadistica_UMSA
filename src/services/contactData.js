import {
  Binary,
  Building,
  Building2,
  CalendarClock,
  Camera,
  Globe,
  Mail,
  MapPin,
  Microscope,
  Phone,
  Send,
  Sigma,
  Users,
} from 'lucide-react'

export const contactHero = {
  eyebrow: 'Atención institucional y soporte',
  title: ['Centro de Atención', 'Contacto Oficial'],
  description:
    'Canal unificado para consultas académicas, administrativas y de investigación de la Carrera de Estadística UMSA.',
  ctaLabel: 'Enviar consulta',
  leftShape: Sigma,
  rightShape: Binary,
  icon: Phone,
}

export const contactFaqs = [
  {
    question: '¿Cómo solicito mi récord académico actualizado?',
    answer:
      'Debes presentar una carta de solicitud en Kardex adjuntando la boleta de pago de valores universitarios. El trámite demora 48 horas hábiles.',
  },
  {
    question: '¿Cuándo se publican las fechas del examen PSA?',
    answer:
      'Las fechas del examen de dispensación (PSA) se publican en noviembre para semestre I y junio para semestre II en la sección de Admisiones.',
  },
  {
    question: '¿Dónde debo entregar mis documentos de egreso?',
    answer:
      'La documentación final para egreso debe entregarse en ventanilla de Secretaría de Kardex en la sede Monoblock Central.',
  },
]

export const contactFormConfig = {
  title: ['Envíanos un', 'mensaje'],
  subtitle: 'Te responderemos al correo proporcionado en un lapso de 24 horas hábiles.',
  submitLabel: 'Enviar mensaje',
  categories: [
    { value: 'tramites', label: 'Trámites académicos (Kardex)' },
    { value: 'pasantias', label: 'Pasantías y titulación' },
    { value: 'investigacion', label: 'Investigación y revista (IETA)' },
    { value: 'soporte', label: 'Soporte técnico SIA' },
    { value: 'otro', label: 'Otras consultas' },
  ],
  studentToggleLabel: 'Soy estudiante de la carrera',
  fields: {
    fullName: 'Nombre completo',
    email: 'Correo electrónico',
    category: 'Tipo de consulta',
    studentCode: 'Registro Universitario (RU) - opcional',
    message: 'Mensaje',
  },
  placeholders: {
    fullName: 'Ej. Juan Pérez',
    email: 'ejemplo@correo.com',
    category: 'Selecciona el área...',
    studentCode: 'Ej. 1234567',
    message: 'Escribe los detalles de tu consulta aquí...',
  },
  successMessage: 'Mensaje enviado correctamente. El equipo de soporte se pondrá en contacto pronto.',
  icon: Send,
}

export const contactDirectoryPhones = [
  { unit: 'Secretaría de Dirección', role: 'Atención general de la carrera', number: '2442100', ext: '123', altNumber: '2612915' },
  { unit: 'Kardex Académico', role: 'Récords, certificados y trámites', number: '2442100', ext: '125' },
  { unit: 'Instituto IETA', role: 'Investigación y consultorías', number: '2612824', ext: 'N/A', altNumber: '2612844' },
  { unit: 'Biblioteca Especializada', role: 'Consultas y préstamos', number: '2442100', ext: '130' },
  { unit: 'Centro de Estudiantes', role: 'Representación y eventos', number: '76543210', ext: 'Celular' },
]

export const contactDirectoryEmails = [
  { unit: 'Consultas Generales', email: 'estadistica@umsa.bo', desc: 'Consultas generales e información sobre la Carrera.' },
  { unit: 'Dirección de Carrera', email: 'direccion@estadistica.umsa.bo', desc: 'Asuntos oficiales e institucionales.' },
  { unit: 'Kardex Académico', email: 'kardex@estadistica.umsa.bo', desc: 'Envío de requisitos y consultas de trámites.' },
  { unit: 'Instituto IETA', email: 'ieta@umsa.bo', desc: 'Recepción de papers y proyectos.' },
  { unit: 'Facebook Oficial', email: 'https://www.facebook.com/estadisticaumsa', desc: 'Sigue nuestras publicaciones y transmisiones.' },
]

export const contactDirectoryUi = {
  phonesTitle: 'Central telefónica',
  emailsTitle: 'Correos oficiales',
  phonesIcon: Phone,
  emailsIcon: Mail,
}

export const contactLocationsSection = {
  tag: 'Campus universitario',
  title: 'Nuestras sedes',
  subtitle:
    'La Carrera de Estadística opera en ubicaciones estratégicas para docencia, investigación y atención estudiantil.',
}

export const contactLocations = [
  {
    id: 'monoblock',
    label: 'Administración y pregrado',
    title: 'Sede Central',
    icon: Building,
    iconClassName: 'bg-[#001d3d] text-white',
    accentClassName: 'text-[#ea580c]',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2638891040327!2d-68.13110902484643!3d-16.50570658423851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2066c6b3e34b%3A0x6b14207865f5ed0!2sUniversidad%20Mayor%20de%20San%20Andr%C3%A9s%20(UMSA)!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo',
    mapTitle: 'Mapa Monoblock UMSA',
    details: [
      { icon: MapPin, text: 'Av. Villazón N° 1995, Plaza del Bicentenario. Edificio Viejo del Monoblock Central, 2do piso.' },
      { icon: CalendarClock, text: 'Lunes a Viernes (08:00 - 16:00 hrs)' },
      { icon: Users, text: 'Dirección, Kardex y aulas de pregrado.' },
    ],
  },
  {
    id: 'cota-cota',
    label: 'Laboratorios e IETA',
    title: 'Sede Cota Cota',
    icon: Microscope,
    iconClassName: 'bg-teal-800 text-white',
    accentClassName: 'text-teal-600',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2372728919634!2d-68.06941192484521!3d-16.53932758421066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2122601a4e1d%3A0x6b14207865f5ed0!2sCampus%20Universitario%20UMSA%20Cota%20Cota!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo',
    mapTitle: 'Mapa Cota Cota UMSA',
    details: [
      { icon: MapPin, text: 'Calle 27 de Cota Cota, Campus Universitario. Edificio de la FCPN, 1er piso.' },
      { icon: CalendarClock, text: 'Lunes a Viernes (09:00 - 17:00 hrs)' },
      { icon: Building2, text: 'Instituto IETA y laboratorios de cómputo.' },
    ],
  },
]

export const contactGallery = {
  title: ['Nuestros', 'espacios'],
  subtitle: 'Infraestructura para formación, análisis de datos e investigación aplicada.',
  icon: Camera,
  items: [
    {
      title: 'Entrada principal de la Carrera',
      sub: 'Monoblock Central',
      img: '/images/contacto/espacio_monoblock.jpg',
    },
    {
      title: 'Laboratorio de computación',
      sub: 'Equipamiento especializado',
      img: '/images/contacto/espacio_laboratorio.jpg',
    },
    {
      title: 'Sala audiovisual',
      sub: 'Defensas y seminarios',
      img: '/images/contacto/sala_audiovisual.png',
    },
  ],
}


