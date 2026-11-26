import { Briefcase, Globe, HeartPulse, Handshake, Landmark, PieChart, Target, Building2 } from 'lucide-react'
import { httpClient } from '../api/httpClient'
import { seccionPaginaApi } from './seccionPaginaService'

export const conveniosHero = {
  eyebrow: 'Alianzas Estratégicas',
  title: ['Conectando', 'la', 'Academia.'],
  description:
    'Fortalecemos la formación profesional a través de convenios con instituciones gubernamentales y organismos privados, facilitando pasantías y trabajos dirigidos.',
  imageUrl: '/images/institucional/convenios_hero.jpeg',
  chips: [
    { symbol: 'pi', label: 'Impacto', subtitle: 'Profesional' },
    { symbol: 'lambda', label: 'n = 12', subtitle: 'Convenios' },
  ],
}

export const sectorsFallback = [
  {
    id: 'publico',
    sectorDb: 'Sector Publico',
    label: 'Sector Público',
    icon: Building2,
    symbol: 'Omega',
    items: [
      { name: 'Instituto Nacional de Estadística (INE)', desc: 'Principal aliado estratégico para la práctica censal y encuestas nacionales de gran escala.' },
      { name: 'Gobierno Autónomo de La Paz', desc: 'Desarrollo de proyectos de planificación regional y análisis demográfico departamental.' },
      { name: 'Agencia Nacional de Hidrocarburos (ANH)', desc: 'Modelado y análisis de datos energéticos para la regulación soberana.' },
      { name: 'Ministerio de Trabajo y Empleo', desc: 'Generación de estadísticas laborales y monitoreo de la seguridad social boliviana.' },
      { name: 'Defensa Pública (SEPDEP)', desc: 'Procesamiento y análisis de datos críticos del sistema judicial nacional.' },
      { name: 'Policía Nacional (UNIPOL)', desc: 'Investigación conjunta en áreas de estadística criminal y seguridad ciudadana.' },
    ],
  },
  {
    id: 'salud',
    sectorDb: 'Salud y Bienestar',
    label: 'Salud y Bienestar',
    icon: HeartPulse,
    symbol: 'psi',
    items: [
      { name: 'Seguro Social Universitario (SSU)', desc: 'Gestión avanzada de datos de salud hospitalaria y bioestadística aplicada.' },
      { name: 'Hospital Central de Tipuani', desc: 'Implementación de métodos estadísticos en salud pública para áreas rurales.' },
    ],
  },
  {
    id: 'internacional',
    sectorDb: 'Org. Internacionales',
    label: 'Org. Internacionales',
    icon: Globe,
    symbol: 'phi',
    items: [
      { name: 'Visión Mundial Bolivia', desc: 'Análisis de impacto en proyectos de desarrollo infantil y vulnerabilidad social.' },
      { name: 'Plan Internacional INC', desc: 'Gestión y auditoría de datos para programas de igualdad y derechos humanos.' },
    ],
  },
  {
    id: 'consultoria',
    sectorDb: 'Consultoria',
    label: 'Consultoría',
    icon: Briefcase,
    symbol: 'theta',
    items: [
      { name: 'CIECI Consultora Integral', desc: 'Investigación privada y analítica avanzada para el sector empresarial.' },
      { name: 'Acreditación & Certificación', desc: 'Apoyo técnico en procesos de calidad y auditoría institucional.' },
    ],
  },
]

export const sectors = sectorsFallback

export const proposalFallback = {
  eyebrow: 'Propuesta de Valor',
  title: 'Beneficios para Estudiantes',
  description:
    'Aprovecha estas oportunidades para potenciar tu desarrollo profesional con experiencia real certificada.',
  cardTitle: 'Gestión 2026',
  cardDescription:
    'Convenios activos para Pasantías Pre-profesionales y Trabajos Dirigidos de titulación.',
  cardStatus: 'Entorno Profesional Activo',
}

export const benefits = [
  {
    title: 'Pasantías Pre-profesionales',
    description: 'Adquiere experiencia real en el manejo de bases de datos masivas antes de graduarte.',
    icon: Briefcase,
    symbol: 'int',
  },
  {
    title: 'Trabajo Dirigido',
    description: 'Titúlate resolviendo un problema real de análisis estadístico en una institución de prestigio.',
    icon: Target,
    symbol: 'sum',
  },
  {
    title: 'Red de Contactos',
    description: 'Establece vínculos con profesionales del área estadística y líderes de opinión del mercado laboral.',
    icon: Handshake,
    symbol: 'inf',
  },
]

export const conveniosCta = {
  title: 'Referente Nacional',
  label: 'Vínculo Profesional Garantizado',
  icon: PieChart,
}

export const conveniosDataFallback = {
  conveniosHero,
  sectors: sectorsFallback,
  proposal: proposalFallback,
  benefits,
  conveniosCta,
  totalConveniosCount: 12,
  hasApiError: false,
}

const CONVENIOS_PAGE_SLUG = '/institucional/convenios'

const getRecordValue = (records, key, fallback) => {
  const record = records.find(
    (item) => (item.claveCampo ?? item.clave_campo) === key,
  )
  return record?.valor ?? fallback
}

const getRecords = (response) => {
  if (Array.isArray(response)) return response
  if (Array.isArray(response?.content)) return response.content
  if (Array.isArray(response?.data)) return response.data
  if (Array.isArray(response?.items)) return response.items
  if (Array.isArray(response?.records)) return response.records
  return []
}

export async function getConveniosData() {
  const [sectionsResult, conveniosResult] = await Promise.allSettled([
    seccionPaginaApi.list(CONVENIOS_PAGE_SLUG),
    httpClient('/convenio'),
  ])

  const sectionRecords =
    sectionsResult.status === 'fulfilled' && Array.isArray(sectionsResult.value)
      ? sectionsResult.value
      : []

  const val = (key, fallback) => getRecordValue(sectionRecords, key, fallback)

  const dynamicHero = {
    ...conveniosHero,
    eyebrow: val('convenios_inicio_etiqueta', conveniosHero.eyebrow),
    title: [
      val('convenios_inicio_titulo_01', conveniosHero.title[0]),
      val('convenios_inicio_titulo_02', conveniosHero.title[1]),
      val('convenios_inicio_titulo_03', conveniosHero.title[2]),
    ],
    description: val('convenios_inicio_descripcion', conveniosHero.description),
    imageUrl: val('convenios_inicio_imagen', conveniosHero.imageUrl),
    chips: [
      {
        symbol: val('convenios_chip_01_simbolo', conveniosHero.chips[0].symbol),
        label: val('convenios_chip_01_etiqueta', conveniosHero.chips[0].label),
        subtitle: val('convenios_chip_01_subtitulo', conveniosHero.chips[0].subtitle),
      },
      {
        symbol: val('convenios_chip_02_simbolo', conveniosHero.chips[1].symbol),
        label: val('convenios_chip_02_etiqueta', conveniosHero.chips[1].label),
        subtitle: val('convenios_chip_02_subtitulo', conveniosHero.chips[1].subtitle),
      },
    ],
  }

  const dynamicProposal = {
    eyebrow: val('convenios_propuesta_etiqueta', proposalFallback.eyebrow),
    title: val('convenios_propuesta_titulo', proposalFallback.title),
    description: val('convenios_propuesta_descripcion', proposalFallback.description),
    cardTitle: val('convenios_propuesta_card_titulo', proposalFallback.cardTitle),
    cardDescription: val('convenios_propuesta_card_descripcion', proposalFallback.cardDescription),
    cardStatus: val('convenios_propuesta_card_estado', proposalFallback.cardStatus),
  }

  const dynamicBenefits = benefits.map((b, index) => {
    const num = String(index + 1).padStart(2, '0')
    return {
      ...b,
      title: val(`convenios_beneficio_${num}_titulo`, b.title),
      description: val(`convenios_beneficio_${num}_descripcion`, b.description),
    }
  })

  const dynamicCta = {
    ...conveniosCta,
    title: val('convenios_cta_titulo', conveniosCta.title),
    label: val('convenios_cta_etiqueta', conveniosCta.label),
  }

  // Mapear convenios desde la BD
  const rawConvenios =
    conveniosResult.status === 'fulfilled' ? getRecords(conveniosResult.value) : []

  const dynamicSectors = sectorsFallback.map((sec) => {
    if (rawConvenios.length > 0) {
      const itemsForSector = rawConvenios
        .filter((c) => c.sector === sec.sectorDb)
        .map((c) => ({
          name: c.titulo,
          desc: c.descripcion,
        }))
      return {
        ...sec,
        items: itemsForSector.length > 0 ? itemsForSector : sec.items,
      }
    }
    return sec
  })

  const totalConveniosCount =
    rawConvenios.length > 0 ? rawConvenios.length : conveniosDataFallback.totalConveniosCount

  return {
    conveniosHero: dynamicHero,
    sectors: dynamicSectors,
    proposal: dynamicProposal,
    benefits: dynamicBenefits,
    conveniosCta: dynamicCta,
    totalConveniosCount,
    hasApiError: sectionsResult.status === 'rejected' || conveniosResult.status === 'rejected',
  }
}

export async function saveConveniosSection(section) {
  return seccionPaginaApi.save({
    ...section,
    paginaSlug: CONVENIOS_PAGE_SLUG,
  })
}
