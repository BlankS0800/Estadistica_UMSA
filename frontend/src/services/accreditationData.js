import {
  Award,
  Briefcase,
  CheckCircle2,
  Globe,
  PieChart,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from 'lucide-react'
import { seccionPaginaApi } from './seccionPaginaService'
import { parseCarouselItems, resolveMediaUrl } from './carouselUtils'

export const accreditationHero = {
  eyebrow: 'Acreditacion',
  title: ['Garantía de', 'calidad', 'Académica.'],
  description:
    'Nuestra carrera lidera el análisis de datos en Bolivia bajo estándares estrictos del sistema universitario. La acreditación vigente ante el CEUB respalda competitividad y mejora continua.',
  imageUrl: '/images/institucional/acreditacion_hero.jpeg',
  images: [{ url: '/images/institucional/acreditacion_hero.jpeg', caption: '' }],
}

export const credentials = [
  {
    title: 'Acreditación Nacional CEUB',
    sub: 'Certificación de Calidad Superior',
    org: 'Resolución de Congreso Universitario',
    desc: 'Aval oficial del CEUB que certifica excelencia en currículo, plantel docente e infraestructura técnica de la carrera.',
    cta: 'Ver Resolución Oficial',
    icon: ShieldCheck,
    stats: { label: 'Vigente', value: 'check' },
  },
  {
    title: 'Autoevaluación Continua',
    sub: 'Gestión de Calidad Interna',
    org: 'Comisión de Evaluación FCPN',
    desc: 'Proceso sistemático de revisión de indicadores académicos y administrativos para asegurar cumplimiento de estándares internacionales.',
    cta: 'Consultar Indicadores',
    icon: Users,
    stats: { label: 'Continua', value: 'star' },
  },
  {
    title: 'Evaluación de Pares Externos',
    sub: 'Veredicto Internacional',
    org: 'Pares Académicos del Sistema',
    desc: 'Reconocimiento otorgado por expertos tras auditoría técnica de procesos de enseñanza, investigación e interacción social.',
    cta: 'Informe de Evaluación',
    icon: Award,
    stats: { label: 'Certificada', value: 'diamond' },
  },
]

export const impactHighlights = {
  title: ['Impacto en', 'tu Carrera'],
  description:
    'Egresar de un programa acreditado abre oportunidades profesionales con respaldo técnico y rigor científico.',
  statusTitle: 'Estado de Gestión',
  statusText:
    'Participación activa en el Censo Universitario 2025 para la actualización integral de indicadores de calidad institucional.',
  statusPill: 'Mejora Continua Activa',
  statusIcon: Zap,
}

export const impactCards = [
  {
    t: 'Movilidad Global',
    d: 'Acceso preferente a becas de intercambio y convenios de postgrado en universidades líderes de la región.',
    icon: Globe,
  },
  {
    t: 'Prestigio Laboral',
    d: 'El sector financiero e instituciones públicas priorizan graduados de programas acreditados por su formación técnica.',
    icon: Briefcase,
  },
  {
    t: 'Investigación Financiada',
    d: 'Acceso a fondos exclusivos y patrocinios para tesis e interacción social con respaldo institucional.',
    icon: PieChart,
  },
]

export const accreditationCta = {
  title: 'Declaración de Calidad',
  label: 'Comprometidos con la Excelencia',
  icon: Star,
  links: [
    { href: '/institucional/acerca', label: 'Volver a Acerca', icon: CheckCircle2 },
    { href: '/institucional/autoridades', label: 'Ver Autoridades', icon: Users },
  ],
}

export const accreditationDataFallback = {
  accreditationHero,
  credentials,
  impactHighlights,
  impactCards,
  accreditationCta,
}

const ACCREDITATION_PAGE_SLUG = '/institucional/acreditacion'

const getRecordValue = (records, key, fallback) => {
  const record = records.find(
    (item) => (item.claveCampo ?? item.clave_campo) === key,
  )

  return record?.valor ?? fallback
}

const getAccreditationDataFromRecords = (records) => {
  const value = (key, fallback) => getRecordValue(records, key, fallback)
  const heroImageUrl = resolveMediaUrl(
    value('acreditacion_inicio_imagen', accreditationHero.imageUrl),
  )

  return {
    accreditationHero: {
      ...accreditationHero,
      eyebrow: value('acreditacion_inicio_etiqueta', accreditationHero.eyebrow),
      title: [
        value('acreditacion_inicio_titulo_01', accreditationHero.title[0]),
        value('acreditacion_inicio_titulo_02', accreditationHero.title[1]),
        value('acreditacion_inicio_titulo_03', accreditationHero.title[2]),
      ],
      description: value('acreditacion_inicio_descripcion', accreditationHero.description),
      imageUrl: heroImageUrl,
      images: parseCarouselItems(value('acreditacion_inicio_carrusel', ''), [
        { url: heroImageUrl, caption: '' },
      ]),
    },
    credentials: credentials.map((card, index) => {
      const number = String(index + 1).padStart(2, '0')
      return {
        ...card,
        title: value(`acreditacion_credencial_${number}_titulo`, card.title),
        sub: value(`acreditacion_credencial_${number}_subtitulo`, card.sub),
        org: value(`acreditacion_credencial_${number}_organizacion`, card.org),
        desc: value(`acreditacion_credencial_${number}_descripcion`, card.desc),
        cta: value(`acreditacion_credencial_${number}_cta`, card.cta),
        stats: {
          ...card.stats,
          label: value(`acreditacion_credencial_${number}_estadistica`, card.stats.label),
        },
      }
    }),
    impactHighlights: {
      ...impactHighlights,
      title: [
        value('acreditacion_impacto_titulo_01', impactHighlights.title[0]),
        value('acreditacion_impacto_titulo_02', impactHighlights.title[1]),
      ],
      description: value('acreditacion_impacto_descripcion', impactHighlights.description),
      statusTitle: value('acreditacion_impacto_estado_titulo', impactHighlights.statusTitle),
      statusText: value('acreditacion_impacto_estado_texto', impactHighlights.statusText),
      statusPill: value('acreditacion_impacto_estado_pildora', impactHighlights.statusPill),
    },
    impactCards: impactCards.map((item, index) => {
      const number = String(index + 1).padStart(2, '0')
      return {
        ...item,
        t: value(`acreditacion_impacto_card_${number}_titulo`, item.t),
        d: value(`acreditacion_impacto_card_${number}_descripcion`, item.d),
      }
    }),
    accreditationCta: {
      ...accreditationCta,
      title: value('acreditacion_cta_titulo', accreditationCta.title),
      label: value('acreditacion_cta_etiqueta', accreditationCta.label),
      links: accreditationCta.links.map((link, index) => {
        const number = String(index + 1).padStart(2, '0')
        return {
          ...link,
          href: value(`acreditacion_cta_enlace_${number}_url`, link.href),
          label: value(`acreditacion_cta_enlace_${number}_texto`, link.label),
        }
      }),
    },
  }
}

export async function getAccreditationData() {
  const records = await seccionPaginaApi.list(ACCREDITATION_PAGE_SLUG)
  return records.length > 0
    ? getAccreditationDataFromRecords(records)
    : accreditationDataFallback
}

export async function saveAccreditationSection(section) {
  return seccionPaginaApi.save({
    ...section,
    paginaSlug: ACCREDITATION_PAGE_SLUG,
  })
}