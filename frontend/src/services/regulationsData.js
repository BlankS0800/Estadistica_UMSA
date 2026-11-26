import {
  Book,
  FileSignature,
  Globe,
  GraduationCap,
  Microscope,
  Landmark,
  Users,
  Briefcase,
  ShieldCheck,
  ScrollText,
} from 'lucide-react'
import { seccionPaginaApi } from './seccionPaginaService'

export const regulationsHero = {
  eyebrow: 'Normativa Institucional',
  title: ['Repositorio', 'y', 'Marco Legal'],
  description:
    'Compendio normativo que rige la vida académica, administrativa e investigativa de la Carrera de Estadística, garantizando el respeto a la autonomía universitaria.',
  chips: [
    { symbol: '¶', label: 'Estatutos', subtitle: 'Universitarios' },
    { symbol: 'ℓ', label: 'Garantía', subtitle: 'Académica' },
  ],
  imageUrl: '/images/institucional/reglamentos_hero.jpeg',
}

export const universityFramework = [
  {
    art: 'Art. 1',
    title: 'Nacional (CEUB)',
    sub: 'Estatuto Orgánico de la Universidad Boliviana',
    desc: 'Base legal de la autonomía y del sistema universitario en Bolivia.',
    icon: Globe,
  },
  {
    art: 'Art. 2',
    title: 'Estudiantil',
    sub: 'Régimen Estudiantil de la Universidad Boliviana',
    desc: 'Derechos, deberes, becas y procesos disciplinarios del estudiante.',
    icon: GraduationCap,
  },
  {
    art: 'Art. 3',
    title: 'Docente',
    sub: 'Régimen Académico Docente',
    desc: 'Normativa sobre la carrera docente, escalafón y evaluación continua.',
    icon: Users,
  },
  {
    art: 'Art. 4',
    title: 'Institucional',
    sub: 'Estatuto Orgánico de la UMSA',
    desc: 'Norma matriz propia de la Universidad Mayor de San Andrés.',
    icon: Landmark,
  },
]

export const internalRegulations = [
  {
    id: 'academica',
    label: 'Gestión Académica',
    icon: Book,
    symbol: '∇',
    items: [
      {
        name: 'Reglamento de Convalidación',
        desc: 'Requisitos técnicos para traspasos y validación de materias aprobadas.',
      },
      {
        name: 'Mesa de Examen',
        desc: 'Normas para solicitar exámenes de última instancia y evaluación extraordinaria.',
      },
      {
        name: 'Evaluación del Aprendizaje',
        desc: 'Criterios de calificación, asistencia y aprobación por competencias.',
      },
      {
        name: 'Reglamento Interno de la Carrera',
        desc: 'Normas de convivencia y organización interna del estamento.',
      },
    ],
  },
  {
    id: 'graduacion',
    label: 'Modalidades de Graduación',
    icon: FileSignature,
    symbol: '∆',
    items: [
      {
        name: 'Guía Metodológica General',
        desc: 'Estándares oficiales de formato y redacción para trabajos finales de grado.',
      },
      {
        name: 'Reglamento de Tesis de Grado',
        desc: 'Protocolo para investigaciones de aporte científico y defensa.',
      },
      {
        name: 'Reglamento de Trabajo Dirigido',
        desc: 'Normativa para pasantías con convenio e impacto institucional.',
      },
      {
        name: 'Reglamento de Proyecto de Grado',
        desc: 'Guía para resolver problemas prácticos en el entorno laboral.',
      },
    ],
  },
  {
    id: 'investigacion',
    label: 'Investigación (IETA)',
    icon: Microscope,
    symbol: 'Σ',
    items: [
      {
        name: 'Reglamento Interno IETA',
        desc: 'Normas que rigen el funcionamiento del Instituto de Estadística Teórica y Aplicada.',
      },
      {
        name: 'Congreso Interno',
        desc: 'Resoluciones y actas de las máximas instancias de decisión científica.',
      },
      {
        name: 'Publicaciones y Repositorio',
        desc: 'Lineamientos para gestión editorial, citación y acceso abierto.',
      },
      {
        name: 'Comités Técnicos',
        desc: 'Criterios de conformación y seguimiento de comités de evaluación.',
      },
    ],
  },
]

export const resolutionHighlight = {
  eyebrow: 'Patrimonio Documental',
  title: 'Resolución de Fundación',
  description:
    'Documento histórico que oficializa la creación de la carrera en la Facultad de Ciencias Puras y Naturales, estableciendo sus bases académicas y administrativas.',
  imageUrl: '/images/institucional/resolucion_fundacion.jpeg',
}

export const regulationBenefits = [
  {
    title: 'Seguridad Jurídica',
    description: 'Normas claras para estudiantes, docentes y administrativos en cada proceso académico.',
    symbol: 'A1',
    icon: ShieldCheck,
  },
  {
    title: 'Transparencia de Procesos',
    description: 'Trazabilidad de decisiones mediante resoluciones, actas y reglamentos vigentes.',
    symbol: 'A2',
    icon: ScrollText,
  },
  {
    title: 'Proyección Profesional',
    description: 'Regulaciones que fortalecen prácticas, pasantías y modalidades de graduación aplicadas.',
    symbol: 'A3',
    icon: Briefcase,
  },
]

export const regulationsCta = {
  title: 'Referente Normativo',
  label: 'Repositorio Normativo Actualizado',
}

export const regulationsDataFallback = {
  regulationsHero,
  universityFramework,
  internalRegulations,
  resolutionHighlight,
  regulationBenefits,
  regulationsCta,
  hasApiError: false,
}

const REGULATIONS_PAGE_SLUG = '/institucional/reglamentos'

const getRecordValue = (records, key, fallback) => {
  const record = records.find(
    (item) => (item.claveCampo ?? item.clave_campo) === key,
  )
  return record?.valor ?? fallback
}

export async function getRegulationsData() {
  const records = await seccionPaginaApi.list(REGULATIONS_PAGE_SLUG)

  if (!records || records.length === 0) {
    return regulationsDataFallback
  }

  const val = (key, fallback) => getRecordValue(records, key, fallback)

  const dynamicHero = {
    ...regulationsHero,
    eyebrow: val('reglamentos_inicio_etiqueta', regulationsHero.eyebrow),
    title: [
      val('reglamentos_inicio_titulo_01', regulationsHero.title[0]),
      val('reglamentos_inicio_titulo_02', regulationsHero.title[1]),
      val('reglamentos_inicio_titulo_03', regulationsHero.title[2]),
    ],
    description: val('reglamentos_inicio_descripcion', regulationsHero.description),
    imageUrl: val('reglamentos_inicio_imagen', regulationsHero.imageUrl),
    chips: [
      {
        symbol: val('reglamentos_chip_01_simbolo', regulationsHero.chips[0].symbol),
        label: val('reglamentos_chip_01_etiqueta', regulationsHero.chips[0].label),
        subtitle: val('reglamentos_chip_01_subtitulo', regulationsHero.chips[0].subtitle),
      },
      {
        symbol: val('reglamentos_chip_02_simbolo', regulationsHero.chips[1].symbol),
        label: val('reglamentos_chip_02_etiqueta', regulationsHero.chips[1].label),
        subtitle: val('reglamentos_chip_02_subtitulo', regulationsHero.chips[1].subtitle),
      },
    ],
  }

  const dynamicFramework = universityFramework.map((law, index) => {
    const num = String(index + 1).padStart(2, '0')
    return {
      ...law,
      art: val(`reglamentos_marco_${num}_articulo`, law.art),
      title: val(`reglamentos_marco_${num}_titulo`, law.title),
      sub: val(`reglamentos_marco_${num}_subtitulo`, law.sub),
      desc: val(`reglamentos_marco_${num}_descripcion`, law.desc),
      url: val(`reglamentos_marco_${num}_url`, ''),
    }
  })

  const dynamicInternal = internalRegulations.map((cat) => {
    const catKey = cat.id
    const label = val(`reglamentos_interno_${catKey}_etiqueta`, cat.label)
    const items = cat.items.map((it, itemIndex) => {
      const num = String(itemIndex + 1).padStart(2, '0')
      return {
        name: val(`reglamentos_interno_${catKey}_item_${num}_nombre`, it.name),
        desc: val(`reglamentos_interno_${catKey}_item_${num}_descripcion`, it.desc),
        url: val(`reglamentos_interno_${catKey}_item_${num}_url`, ''),
      }
    })
    return {
      ...cat,
      label,
      items,
    }
  })

  const dynamicResolution = {
    ...resolutionHighlight,
    eyebrow: val('reglamentos_resolucion_etiqueta', resolutionHighlight.eyebrow),
    title: val('reglamentos_resolucion_titulo', resolutionHighlight.title),
    description: val('reglamentos_resolucion_descripcion', resolutionHighlight.description),
    imageUrl: val('reglamentos_resolucion_imagen', resolutionHighlight.imageUrl),
  }

  const dynamicBenefits = regulationBenefits.map((b, index) => {
    const num = String(index + 1).padStart(2, '0')
    return {
      ...b,
      title: val(`reglamentos_beneficio_${num}_titulo`, b.title),
      description: val(`reglamentos_beneficio_${num}_descripcion`, b.description),
    }
  })

  const dynamicCta = {
    title: val('reglamentos_cta_titulo', regulationsCta.title),
    label: val('reglamentos_cta_etiqueta', regulationsCta.label),
  }

  return {
    regulationsHero: dynamicHero,
    universityFramework: dynamicFramework,
    internalRegulations: dynamicInternal,
    resolutionHighlight: dynamicResolution,
    regulationBenefits: dynamicBenefits,
    regulationsCta: dynamicCta,
    hasApiError: false,
  }
}

export async function saveRegulationsSection(section) {
  return seccionPaginaApi.save({
    ...section,
    paginaSlug: REGULATIONS_PAGE_SLUG,
  })
}
