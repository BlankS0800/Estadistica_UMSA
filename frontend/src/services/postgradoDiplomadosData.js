import {
  Activity,
  Award,
  BookOpen,
  Briefcase,
  CheckSquare,
  Clock,
  Code,
  CreditCard,
  FileSearch,
  Filter,
  Monitor,
  Sigma,
  Binary,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react'
import { httpClient } from '../api/httpClient'
import { seccionPaginaApi } from './seccionPaginaService'

function buildSectionMap(sections) {
  const map = {}
  if (Array.isArray(sections)) {
    for (const s of sections) {
      const key = s.claveCampo || s.clave_campo
      if (key) map[key] = s.valor
    }
  }
  return {
    get: (key) => map[key],
  }
}

export const diplomadosHero = {
  eyebrow: 'Programas de certificación corta',
  title: ['Diplomados y', 'Especialidades'],
  description:
    'Oferta de actualización profesional orientada a analítica aplicada, investigación y toma de decisiones en contextos reales.',
  highlights: ['Convocatorias vigentes', 'Modalidad flexible', 'Enfoque estadístico'],
  iconLeft: Sigma,
  iconRight: Binary,
}

export const diplomadosFilters = ['Todos', 'Tecnología', 'Salud', 'Economía', 'Social']

export const diplomadosPrograms = [
  {
    id: 'dip-data-science',
    title: 'Ciencia de Datos con R y Python',
    area: 'Tecnología',
    desc: 'Especialización en lenguajes líderes para análisis masivo de datos y visualización interactiva.',
    duration: '4 meses',
    modality: 'Virtual / Sincrónica',
    badge: 'Convocatoria vigente',
    badgeTone: 'open',
    icon: Code,
    details: {
      objective:
        'Proporcionar competencias para manejo, limpieza, análisis y visualización de datos con software libre aplicado a casos reales.',
      modules: [
        { title: 'Módulo I', name: 'Fundamentos avanzados de programación en R y Python' },
        { title: 'Módulo II', name: 'Análisis exploratorio y limpieza de datos' },
        { title: 'Módulo III', name: 'Modelamiento y algoritmos de predicción' },
        { title: 'Módulo IV', name: 'Visualización interactiva y reporte de resultados' },
      ],
      investment: {
        total: '4.500 Bs.',
        matricula: '500 Bs.',
        plan: 'Hasta 4 cuotas mensuales de 1.000 Bs.',
      },
    },
  },
  {
    id: 'dip-bioestadistica',
    title: 'Bioestadística Aplicada',
    area: 'Salud',
    desc: 'Herramientas estadísticas para análisis epidemiológico, salud pública y ensayos clínicos.',
    duration: '5 meses',
    modality: 'Semipresencial',
    badge: 'Próximo inicio',
    badgeTone: 'closing',
    icon: Activity,
    details: {
      objective:
        'Capacitar en diseño de estudios, recolección de datos y modelos estadísticos para investigación clínica y epidemiológica.',
      modules: [
        { title: 'Módulo I', name: 'Fundamentos estadísticos en ciencias de la salud' },
        { title: 'Módulo II', name: 'Diseño epidemiológico y muestreo clínico' },
        { title: 'Módulo III', name: 'Supervivencia y regresión logística' },
        { title: 'Módulo IV', name: 'Software estadístico aplicado a bioestadística' },
      ],
      investment: {
        total: '5.200 Bs.',
        matricula: '600 Bs.',
        plan: 'Matrícula + 4 cuotas mensuales de 1.150 Bs.',
      },
    },
  },
  {
    id: 'dip-econometria',
    title: 'Econometría y Modelos Financieros',
    area: 'Economía',
    desc: 'Modelos predictivos y series de tiempo para riesgos, banca y análisis macroeconómico.',
    duration: '4 meses',
    modality: 'Virtual',
    badge: 'En planificación',
    badgeTone: 'closed',
    icon: TrendingUp,
    details: {
      objective:
        'Brindar herramientas econométricas para modelación de volatilidad, pronóstico de variables económicas y evaluación de riesgos.',
      modules: [
        { title: 'Módulo I', name: 'Fundamentos de econometría y álgebra matricial' },
        { title: 'Módulo II', name: 'Series de tiempo estacionarias y no estacionarias' },
        { title: 'Módulo III', name: 'Modelos ARCH GARCH y riesgo financiero' },
        { title: 'Módulo IV', name: 'Microeconometría y datos de panel' },
      ],
      investment: {
        total: '4.800 Bs.',
        matricula: '500 Bs.',
        plan: 'Matrícula + 4 cuotas mensuales.',
      },
    },
  },
]

export const diplomadosRequirements = {
  tag: 'Trámite rápido',
  title: 'Requisitos generales',
  sub: 'Documentación requerida para la matriculación formal en programas de Diplomado y Especialidad.',
  profileTitle: 'Perfil estudiantil',
  profileText:
    'Programas dirigidos a profesionales con título de licenciatura o egresados con certificado de conclusión de estudios avalado.',
  ctaLabel: 'Ver proceso en portal SIA',
  ctaHref: '#',
  ctaIcon: ArrowUpRight,
  icon: CheckSquare,
  items: [
    'Fotocopia simple de diploma académico o título profesional.',
    'Fotocopia de cédula de identidad vigente.',
    'Formulario de registro de postgrado generado por el sistema SIA.',
    'Comprobante de depósito bancario original de matrícula o cuota inicial.',
  ],
}

export const diplomadosUi = {
  sectionIcon: Award,
  filterIcon: Filter,
  durationIcon: Clock,
  modalityIcon: Monitor,
  moduleIcon: FileSearch,
  investmentIcon: CreditCard,
  emptyIcon: BookOpen,
  opportunitiesIcon: Briefcase,
}

export async function loadPostgradoDiplomadosData() {
  try {
    const [sections, programsList] = await Promise.all([
      seccionPaginaApi.list('/postgrado/diplomados').catch(() => []),
      httpClient('/programa?tipo=Diplomado').catch(() => []),
    ])

    const secMap = buildSectionMap(sections)

    const dynamicHero = {
      ...diplomadosHero,
      eyebrow: secMap.get('pos_dip_hero_eyebrow') || diplomadosHero.eyebrow,
      title: [
        secMap.get('pos_dip_hero_titulo_01') || diplomadosHero.title[0],
        secMap.get('pos_dip_hero_titulo_02') || diplomadosHero.title[1],
      ],
      description: secMap.get('pos_dip_hero_descripcion') || diplomadosHero.description,
      highlights: [
        secMap.get('pos_dip_hero_highlight_01') || diplomadosHero.highlights[0],
        secMap.get('pos_dip_hero_highlight_02') || diplomadosHero.highlights[1],
        secMap.get('pos_dip_hero_highlight_03') || diplomadosHero.highlights[2],
      ],
    }

    const dynamicRequirements = {
      ...diplomadosRequirements,
      tag: secMap.get('pos_dip_requisitos_tag') || diplomadosRequirements.tag,
      title: secMap.get('pos_dip_requisitos_titulo') || diplomadosRequirements.title,
      sub: secMap.get('pos_dip_requisitos_sub') || diplomadosRequirements.sub,
      profileTitle: secMap.get('pos_diplo_perfil_titulo') || diplomadosRequirements.profileTitle,
      profileText: secMap.get('pos_diplo_perfil_desc') || diplomadosRequirements.profileText,
      ctaLabel: secMap.get('pos_diplo_requisitos_cta_label') || diplomadosRequirements.ctaLabel,
      ctaHref: secMap.get('pos_diplo_requisitos_cta_href') || diplomadosRequirements.ctaHref,
      items: [
        secMap.get('pos_diplo_req_item1'),
        secMap.get('pos_diplo_req_item2'),
        secMap.get('pos_diplo_req_item3'),
        secMap.get('pos_diplo_req_item4'),
      ].filter(Boolean).length > 0
        ? [
            secMap.get('pos_diplo_req_item1'),
            secMap.get('pos_diplo_req_item2'),
            secMap.get('pos_diplo_req_item3'),
            secMap.get('pos_diplo_req_item4'),
          ].filter(Boolean)
        : diplomadosRequirements.items,
    }

    let dynamicPrograms = diplomadosPrograms
    if (Array.isArray(programsList) && programsList.length > 0) {
      dynamicPrograms = programsList.map((p, index) => {
        const fallback =
          diplomadosPrograms.find((dp) => dp.title.toLowerCase().trim() === p.nombre.toLowerCase().trim()) ||
          diplomadosPrograms[index] ||
          diplomadosPrograms[0]

        const modules =
          Array.isArray(p.organiza) && p.organiza.length > 0
            ? p.organiza.map((o) => ({
                title: o.modulo?.numeroModulo || 'Módulo',
                name: o.modulo?.tituloModulo || 'Contenido del módulo',
              }))
            : fallback.details.modules

        return {
          ...fallback,
          id: `dip-${p.idPrograma}`,
          title: p.nombre,
          details: {
            ...fallback.details,
            modules,
            investment: {
              ...fallback.details?.investment,
              total: p.costo || fallback.details?.investment?.total,
            },
          },
        }
      })
    }

    return {
      hero: dynamicHero,
      programs: dynamicPrograms,
      requirements: dynamicRequirements,
      filters: diplomadosFilters,
      ui: diplomadosUi,
    }
  } catch (err) {
    console.error('Error cargando datos dinámicos de postgrado diplomados:', err)
    return {
      hero: diplomadosHero,
      programs: diplomadosPrograms,
      requirements: diplomadosRequirements,
      filters: diplomadosFilters,
      ui: diplomadosUi,
    }
  }
}
