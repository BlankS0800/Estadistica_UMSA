import {
  Award,
  Building2,
  CheckCircle2,
  Download,
  FileSignature,
  GraduationCap,
  Microscope,
  Presentation,
  Sigma,
  Star,
  Target,
} from 'lucide-react'

import { seccionPaginaApi } from './seccionPaginaService'

export const graduationHero = {
  icon: GraduationCap,
  eyebrow: 'Grado académico',
  title: ['Modalidades de', 'Graduación'],
  highlights: ['Resolución CEUB', 'Licenciatura'],
}

export const graduationWorkshop = {
  badge: 'Octavo semestre',
  title: ['El Taller de Titulación', 'es el punto de partida'],
  description:
    'Según el Plan de Estudios 2021, todo estudiante debe inscribirse al Taller de Titulación en el último semestre. En esta asignatura se diseña, ajusta y aprueba el Perfil de Grado.',
  ctaLabel: 'Ver en malla curricular',
  ctaHref: '/pregrado/malla-curricular',
  icon: Sigma,
}

export const processSteps = [
  {
    icon: CheckCircle2,
    title: '1. Taller de Titulación',
    desc: 'Inscripción en 8° semestre para elaboración y aprobación del Perfil de Grado.',
  },
  {
    icon: FileSignature,
    title: '2. Aprobación de Perfil',
    desc: 'Asignación oficial de Tutor y Resolución de aprobación del H. Consejo de Carrera.',
  },
  {
    icon: Microscope,
    title: '3. Desarrollo',
    desc: 'Investigación, redacción o ejecución del trabajo práctico bajo seguimiento tutorial.',
  },
  {
    icon: Presentation,
    title: '4. Defensa Pública',
    desc: 'Sustentación oral del trabajo final ante Tribunal Examinador calificado.',
  },
]

export const graduationModalitiesMeta = {
  tag: 'Opciones académicas',
  title: 'Las 4 vías de titulación',
  sub: 'Explora las modalidades oficialmente reconocidas por la UMSA para obtener el grado de Licenciado en Estadística.',
  seal: {
    symbol: 'mu',
    label: 'NIVEL',
    value: 'EXCELENCIA',
  },
  ctaLabel: 'Descargar reglamento',
  ctaIcon: Download,
}

export const graduationModalities = [
  {
    id: 'tesis',
    title: 'Tesis de Grado',
    icon: Microscope,
    pointIcon: CheckCircle2,
    tag: 'Investigación científica',
    desc: 'Trabajo de investigación original que aporta nuevo conocimiento científico, metodológico o técnico al campo de la estadística y ciencia de datos.',
    points: [
      'Aporte metodológico original al área.',
      'Rigor científico y comprobación de hipótesis.',
      'Defensa pública ante tribunal examinador.',
    ],
    color: '#00447e',
  },
  {
    id: 'trabajo_dirigido',
    title: 'Trabajo Dirigido',
    icon: Building2,
    pointIcon: CheckCircle2,
    tag: 'Experiencia profesional',
    desc: 'Ejecución de trabajo práctico en instituciones públicas o privadas con convenios interinstitucionales vigentes.',
    points: [
      'Resolución de problemas reales en campo.',
      'Supervisión por tutor académico y tutor institucional.',
      'Duración regulada y presentación de informe final.',
    ],
    color: '#0f766e',
  },
  {
    id: 'proyecto',
    title: 'Proyecto de Grado',
    icon: Target,
    pointIcon: CheckCircle2,
    tag: 'Aplicación práctica',
    desc: 'Desarrollo de solución estadística, modelo predictivo o sistema de información aplicado a necesidades concretas del entorno.',
    points: [
      'Enfoque en viabilidad y aplicación práctica.',
      'Desarrollo de sistemas o modelos funcionales.',
      'Defensa de factibilidad técnica y económica.',
    ],
    color: '#c2410c',
  },
  {
    id: 'excelencia',
    title: 'Excelencia Académica',
    icon: Award,
    pointIcon: CheckCircle2,
    tag: 'Mérito estudiantil',
    desc: 'Modalidad de titulación directa, eximida de defensa pública, que premia alto rendimiento académico y regularidad durante la carrera.',
    points: [
      'Promedio general sobresaliente según reglamento.',
      'Culminación en el tiempo establecido (8 semestres).',
      'Sin reprobaciones ni abandonos injustificados.',
    ],
    color: '#b45309',
  },
]

export const excellenceBanner = {
  eyebrow: 'Reconocimiento institucional',
  title: 'Graduación por Excelencia',
  quote:
    'La Universidad Mayor de San Andrés premia el esfuerzo constante. Si tu promedio supera la media exigida y concluiste sin reprobaciones, el H. Consejo de Carrera puede eximir la defensa pública.',
  ctaLabel: 'Revisar requisitos',
  icon: Star,
  accentIcon: GraduationCap,
}

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

export async function loadGraduationPageData() {
  try {
    const sections = await seccionPaginaApi.list('/pregrado/modalidades-graduacion').catch(() => [])
    const secMap = buildSectionMap(sections)

    const hero = {
      ...graduationHero,
      eyebrow: secMap.get('graduacion_hero_badge') || graduationHero.eyebrow,
      title: [
        secMap.get('graduacion_hero_titulo_01') || graduationHero.title[0],
        secMap.get('graduacion_hero_titulo_02') || graduationHero.title[1],
        secMap.get('graduacion_hero_titulo_03') || '',
      ],
    }

    const workshop = {
      ...graduationWorkshop,
      badge: secMap.get('graduacion_taller_badge') || graduationWorkshop.badge,
      title: [
        secMap.get('graduacion_taller_titulo') || graduationWorkshop.title[0],
        graduationWorkshop.title[1],
      ],
      description: secMap.get('graduacion_taller_subtitulo') || graduationWorkshop.description,
      ctaLabel: secMap.get('graduacion_taller_cta_label') || graduationWorkshop.ctaLabel,
      ctaHref: secMap.get('graduacion_taller_cta_href') || graduationWorkshop.ctaHref,
    }

    const dynSteps = [
      {
        ...processSteps[0],
        title: secMap.get('graduacion_paso1_title') || processSteps[0].title,
        desc: secMap.get('graduacion_paso1_desc') || processSteps[0].desc,
      },
      {
        ...processSteps[1],
        title: secMap.get('graduacion_paso2_title') || processSteps[1].title,
        desc: secMap.get('graduacion_paso2_desc') || processSteps[1].desc,
      },
      {
        ...processSteps[2],
        title: secMap.get('graduacion_paso3_title') || processSteps[2].title,
        desc: secMap.get('graduacion_paso3_desc') || processSteps[2].desc,
      },
      {
        ...processSteps[3],
        title: secMap.get('graduacion_paso4_title') || processSteps[3].title,
        desc: secMap.get('graduacion_paso4_desc') || processSteps[3].desc,
      },
    ]

    const dynModalitiesMeta = {
      ...graduationModalitiesMeta,
      tag: secMap.get('graduacion_modalidades_tag') || graduationModalitiesMeta.tag,
      title: secMap.get('graduacion_modalidades_title') || graduationModalitiesMeta.title,
      sub: secMap.get('graduacion_modalidades_sub') || graduationModalitiesMeta.sub,
      ctaLabel: secMap.get('graduacion_modalidades_cta_label') || graduationModalitiesMeta.ctaLabel,
    }

    const dynModalities = graduationModalities.map((m) => {
      if (m.id === 'tesis') {
        const points = [
          secMap.get('graduacion_mod_tesis_p1'),
          secMap.get('graduacion_mod_tesis_p2'),
          secMap.get('graduacion_mod_tesis_p3'),
        ].filter(Boolean)
        return {
          ...m,
          title: secMap.get('graduacion_mod_tesis_title') || m.title,
          tag: secMap.get('graduacion_mod_tesis_tag') || m.tag,
          desc: secMap.get('graduacion_mod_tesis_desc') || m.desc,
          points: points.length > 0 ? points : m.points,
        }
      }
      if (m.id === 'trabajo_dirigido') {
        const points = [
          secMap.get('graduacion_mod_tdir_p1'),
          secMap.get('graduacion_mod_tdir_p2'),
          secMap.get('graduacion_mod_tdir_p3'),
        ].filter(Boolean)
        return {
          ...m,
          title: secMap.get('graduacion_mod_tdir_title') || m.title,
          tag: secMap.get('graduacion_mod_tdir_tag') || m.tag,
          desc: secMap.get('graduacion_mod_tdir_desc') || m.desc,
          points: points.length > 0 ? points : m.points,
        }
      }
      if (m.id === 'proyecto') {
        const points = [
          secMap.get('graduacion_mod_proy_p1'),
          secMap.get('graduacion_mod_proy_p2'),
          secMap.get('graduacion_mod_proy_p3'),
        ].filter(Boolean)
        return {
          ...m,
          title: secMap.get('graduacion_mod_proy_title') || m.title,
          tag: secMap.get('graduacion_mod_proy_tag') || m.tag,
          desc: secMap.get('graduacion_mod_proy_desc') || m.desc,
          points: points.length > 0 ? points : m.points,
        }
      }
      if (m.id === 'excelencia') {
        const points = [
          secMap.get('graduacion_mod_exce_p1'),
          secMap.get('graduacion_mod_exce_p2'),
          secMap.get('graduacion_mod_exce_p3'),
        ].filter(Boolean)
        return {
          ...m,
          title: secMap.get('graduacion_mod_exce_title') || m.title,
          tag: secMap.get('graduacion_mod_exce_tag') || m.tag,
          desc: secMap.get('graduacion_mod_exce_desc') || m.desc,
          points: points.length > 0 ? points : m.points,
        }
      }
      return m
    })

    const banner = {
      ...excellenceBanner,
      eyebrow: secMap.get('graduacion_excelencia_eyebrow') || excellenceBanner.eyebrow,
      title: secMap.get('graduacion_excelencia_titulo') || excellenceBanner.title,
      quote: secMap.get('graduacion_excelencia_desc') || excellenceBanner.quote,
      ctaLabel: secMap.get('graduacion_excelencia_cta') || excellenceBanner.ctaLabel,
    }

    return {
      hero,
      workshop,
      processSteps: dynSteps,
      modalitiesMeta: dynModalitiesMeta,
      modalities: dynModalities,
      banner,
    }
  } catch (err) {
    console.error('Error cargando datos dinámicos de graduación:', err)
    return {
      hero: graduationHero,
      workshop: graduationWorkshop,
      processSteps,
      modalitiesMeta: graduationModalitiesMeta,
      modalities: graduationModalities,
      banner: excellenceBanner,
    }
  }
}

