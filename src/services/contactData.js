import { seccionPaginaApi } from './seccionPaginaService'
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

// ---------------------------------------------------------------
// Textos editables de Contacto (seccion_pagina, slug '/contacto')
// ---------------------------------------------------------------
const CONTACTO_PAGE_SLUG = '/contacto'

export const contactoDataFallback = {
  hero: contactHero,
  faqs: contactFaqs,
  formConfig: contactFormConfig,
  directoryPhones: contactDirectoryPhones,
  directoryEmails: contactDirectoryEmails,
  directoryUi: contactDirectoryUi,
  locationsSection: contactLocationsSection,
  locations: contactLocations,
  gallery: contactGallery,
}

const getContactoRecordValue = (records, key, fallback) => {
  const record = records.find(
    (item) => (item.claveCampo ?? item.clave_campo) === key,
  )

  return record?.valor ?? fallback
}

export const getContactoDataFromRecords = (records) => {
  const value = (key, fallback) => getContactoRecordValue(records, key, fallback)
  const nn = (index) => String(index + 1).padStart(2, '0')

  return {
    hero: {
      ...contactHero,
      eyebrow: value('contacto_hero_eyebrow', contactHero.eyebrow),
      title: [
        value('contacto_hero_titulo_01', contactHero.title[0]),
        value('contacto_hero_titulo_02', contactHero.title[1]),
      ],
      description: value('contacto_hero_descripcion', contactHero.description),
      ctaLabel: value('contacto_hero_boton', contactHero.ctaLabel),
    },

    faqs: contactFaqs.map((faq, index) => ({
      ...faq,
      question: value(`contacto_faq_${nn(index)}_pregunta`, faq.question),
      answer: value(`contacto_faq_${nn(index)}_respuesta`, faq.answer),
    })),

    formConfig: {
      ...contactFormConfig,
      title: [
        value('contacto_form_titulo_01', contactFormConfig.title[0]),
        value('contacto_form_titulo_02', contactFormConfig.title[1]),
      ],
      subtitle: value('contacto_form_subtitulo', contactFormConfig.subtitle),
      submitLabel: value('contacto_form_boton', contactFormConfig.submitLabel),
      studentToggleLabel: value(
        'contacto_form_interruptor_estudiante',
        contactFormConfig.studentToggleLabel,
      ),
      categories: contactFormConfig.categories.map((category, index) => ({
        ...category,
        label: value(`contacto_form_categoria_${nn(index)}_etiqueta`, category.label),
      })),
      fields: {
        fullName: value('contacto_form_campo_nombre', contactFormConfig.fields.fullName),
        email: value('contacto_form_campo_correo', contactFormConfig.fields.email),
        category: value('contacto_form_campo_categoria', contactFormConfig.fields.category),
        studentCode: value('contacto_form_campo_ru', contactFormConfig.fields.studentCode),
        message: value('contacto_form_campo_mensaje', contactFormConfig.fields.message),
      },
      placeholders: {
        fullName: value('contacto_form_placeholder_nombre', contactFormConfig.placeholders.fullName),
        email: value('contacto_form_placeholder_correo', contactFormConfig.placeholders.email),
        category: value('contacto_form_placeholder_categoria', contactFormConfig.placeholders.category),
        studentCode: value('contacto_form_placeholder_ru', contactFormConfig.placeholders.studentCode),
        message: value('contacto_form_placeholder_mensaje', contactFormConfig.placeholders.message),
      },
      successMessage: value('contacto_form_mensaje_exito', contactFormConfig.successMessage),
    },

    directoryPhones: contactDirectoryPhones.map((phone, index) => {
      const p = `contacto_tel_${nn(index)}_`
      const item = {
        ...phone,
        unit: value(`${p}unidad`, phone.unit),
        role: value(`${p}rol`, phone.role),
        number: value(`${p}numero`, phone.number),
        ext: value(`${p}extension`, phone.ext),
      }
      const altNumber = value(`${p}numero_alterno`, phone.altNumber)
      if (altNumber) item.altNumber = altNumber
      else delete item.altNumber
      return item
    }),

    directoryEmails: contactDirectoryEmails.map((mail, index) => {
      const p = `contacto_correo_${nn(index)}_`
      return {
        ...mail,
        unit: value(`${p}unidad`, mail.unit),
        email: value(`${p}correo`, mail.email),
        desc: value(`${p}descripcion`, mail.desc),
      }
    }),

    directoryUi: {
      ...contactDirectoryUi,
      phonesTitle: value('contacto_tel_titulo', contactDirectoryUi.phonesTitle),
      emailsTitle: value('contacto_correo_titulo', contactDirectoryUi.emailsTitle),
    },

    locationsSection: {
      ...contactLocationsSection,
      tag: value('contacto_sedes_etiqueta', contactLocationsSection.tag),
      title: value('contacto_sedes_titulo', contactLocationsSection.title),
      subtitle: value('contacto_sedes_subtitulo', contactLocationsSection.subtitle),
    },

    locations: contactLocations.map((location, index) => {
      const p = `contacto_sede_${nn(index)}_`
      return {
        ...location,
        label: value(`${p}etiqueta`, location.label),
        title: value(`${p}titulo`, location.title),
        mapTitle: value(`${p}mapa_titulo`, location.mapTitle),
        mapEmbedUrl: value(`${p}mapa_url`, location.mapEmbedUrl),
        details: location.details.map((detail, j) => ({
          ...detail,
          text: value(`${p}detalle_${nn(j)}`, detail.text),
        })),
      }
    }),

    gallery: {
      ...contactGallery,
      title: [
        value('contacto_galeria_titulo_01', contactGallery.title[0]),
        value('contacto_galeria_titulo_02', contactGallery.title[1]),
      ],
      subtitle: value('contacto_galeria_subtitulo', contactGallery.subtitle),
      items: contactGallery.items.map((item, index) => {
        const p = `contacto_galeria_item_${nn(index)}_`
        return {
          ...item,
          title: value(`${p}titulo`, item.title),
          sub: value(`${p}subtitulo`, item.sub),
          img: value(`${p}imagen`, item.img),
        }
      }),
    },
  }
}

export async function getContactoData() {
  const records = await seccionPaginaApi.list(CONTACTO_PAGE_SLUG)
  return records.length > 0
    ? getContactoDataFromRecords(records)
    : contactoDataFallback
}