import {
  AlertCircle,
  BellRing,
  CheckCircle2,
  ClipboardList,
  Download,
  Eye,
  FileSearch,
  GraduationCap,
  History,
  Landmark,
  Monitor,
  PenTool,
  Sigma,
  Filter,
  Send,
  TrendingUp,
  Users,
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

export const studentsCallsHero = {
  eyebrow: 'Portal de auxiliares',
  title: ['Convocatorias para', 'Auxiliaturas'],
  description:
    'Consulta convocatorias vigentes, requisitos y cronogramas oficiales para postular a auxiliaturas de docencia y laboratorio.',
  leftShape: Sigma,
  rightShape: Monitor,
}

export const studentsCallsFilters = ['Todas', 'Abierta', 'Próximamente', 'Concluida']

export const studentsCalls = [
  {
    id: 'docencia-2026-2',
    title: 'Auxiliatura de Docencia - Gestión II/2026',
    desc: 'Selección de auxiliares para áreas de Matemáticas, Probabilidad, Estadística Aplicada y Programación.',
    pubDate: '15 de abril de 2026',
    closeDate: '30 de abril de 2026',
    status: 'Abierta',
    icon: GraduationCap,
    plazas: 18,
    requirements: [
      'Matrícula vigente de la gestión actual.',
      'Fotocopia de cédula de identidad.',
      'Récord académico actualizado y firmado.',
      'Plan de trabajo preliminar para la materia.',
    ],
    steps: [
      {
        t: 'Revisión de convocatoria',
        d: 'Verifica criterios de promedio mínimo, materias vencidas y plazos oficiales.',
      },
      {
        t: 'Preparación de file',
        d: 'Organiza kárdex, CI, matrícula y documentos respaldatorios solicitados.',
      },
      {
        t: 'Entrega en secretaría',
        d: 'Registra tu postulación en ventanilla y recibe número de seguimiento.',
      },
      {
        t: 'Evaluación y resultados',
        d: 'Participa en examen/entrevista y consulta resolución publicada.',
      },
    ],
  },
  {
    id: 'lab-2026-2',
    title: 'Auxiliatura de Laboratorio - Gestión II/2026',
    desc: 'Convocatoria para apoyo técnico en laboratorios de software estadístico (R, Python, SPSS).',
    pubDate: '18 de abril de 2026',
    closeDate: '5 de mayo de 2026',
    status: 'Próximamente',
    icon: Monitor,
    plazas: 6,
    requirements: [
      'Experiencia demostrable en herramientas de análisis de datos.',
      'Aprobación de materias de programación y estadística computacional.',
      'Disponibilidad horaria para prácticas guiadas.',
    ],
    steps: [
      {
        t: 'Publicación oficial',
        d: 'La convocatoria se habilita con lineamientos completos en secretaría.',
      },
      {
        t: 'Postulación digital',
        d: 'Carga de requisitos y validación inicial por comisión académica.',
      },
      {
        t: 'Prueba técnica',
        d: 'Resolución de casos prácticos de laboratorio y soporte a estudiantes.',
      },
    ],
  },
  {
    id: 'docencia-2026-1',
    title: 'Auxiliatura de Docencia - Gestión I/2026',
    desc: 'Proceso concluido de selección para el primer semestre de la gestión 2026.',
    pubDate: '10 de noviembre de 2025',
    closeDate: '25 de noviembre de 2025',
    status: 'Concluida',
    icon: History,
    plazas: 15,
    requirements: [
      'Proceso cerrado; consultar archivo histórico para referencia.',
    ],
    steps: [
      {
        t: 'Cierre administrativo',
        d: 'Resultados consolidados y actas remitidas al consejo de carrera.',
      },
    ],
  },
]

export const studentsCallsSteps = [
  {
    title: 'Revisión',
    desc: 'Descarga la convocatoria y valida que cumples requisitos académicos.',
    icon: FileSearch,
  },
  {
    title: 'Preparación',
    desc: 'Organiza kárdex, CI, matrícula y documentos complementarios.',
    icon: ClipboardList,
  },
  {
    title: 'Entrega',
    desc: 'Presenta file en secretaría dentro del plazo oficial.',
    icon: Send,
  },
  {
    title: 'Evaluación',
    desc: 'Sigue cronograma de exámenes y publicación de resultados.',
    icon: PenTool,
  },
]

export const studentsCallsRequirements = [
  {
    title: 'Condición académica',
    desc: 'Ser estudiante regular de la Carrera de Estadística con matrícula vigente.',
    icon: Landmark,
    tone: 'blue',
  },
  {
    title: 'Rendimiento destacado',
    desc: 'Aprobar la materia objetivo con nota sobresaliente según convocatoria.',
    icon: TrendingUp,
    tone: 'orange',
  },
  {
    title: 'Documentación base',
    icon: ClipboardList,
    tone: 'slate',
    list: [
      'Nota de postulación dirigida a Dirección de Carrera.',
      'Récord académico y kárdex actualizados.',
      'Currículum Vitae según formato FCPN.',
      'Fotocopia de CI y matrícula vigente.',
    ],
  },
]

export const studentsCallsUi = {
  filterIcon: Filter,
  alertIcon: BellRing,
  alertActionIcon: BellRing,
  cardViewIcon: Eye,
  cardDownloadIcon: Download,
  cardStatusIcon: AlertCircle,
  requirementCheckIcon: CheckCircle2,
  supportIcon: Users,
}

export async function loadStudentsCallsData() {
  try {
    const [sections, callsRes] = await Promise.all([
      seccionPaginaApi.list('/estudiantes/convocatorias-auxiliaturas'),
      httpClient('/convocatoria-auxiliatura').catch(() => []),
    ])

    const secMap = buildSectionMap(sections)
    const rawCalls = Array.isArray(callsRes)
      ? callsRes
      : Array.isArray(callsRes?.data)
      ? callsRes.data
      : []

    // 1. Hero
    const dynamicHero = {
      ...studentsCallsHero,
      eyebrow: secMap.get('est_aux_hero_eyebrow') || studentsCallsHero.eyebrow,
      title: [
        secMap.get('est_aux_hero_titulo_01') || studentsCallsHero.title[0],
        secMap.get('est_aux_hero_titulo_02') || studentsCallsHero.title[1],
      ],
      description: secMap.get('est_aux_hero_descripcion') || studentsCallsHero.description,
    }

    // 2. Convocatorias
    let dynamicCalls = studentsCalls
    if (rawCalls.length > 0) {
      dynamicCalls = rawCalls.map((c, idx) => {
        const fallback = studentsCalls[idx] || studentsCalls[0]
        const pDate = c.fechaPublicacion ? c.fechaPublicacion.split('T')[0] : fallback.pubDate
        const cDate = c.fechaCierre ? c.fechaCierre.split('T')[0] : fallback.closeDate
        const icon =
          c.tipo && c.tipo.toLowerCase().includes('lab')
            ? Monitor
            : c.estado === 'Concluida'
            ? History
            : GraduationCap

        return {
          id: String(c.id),
          title: c.materia || fallback.title,
          desc: c.descripcion || fallback.desc,
          pubDate: pDate,
          closeDate: cDate,
          status: c.estado || fallback.status,
          icon,
          plazas: c.plazas || fallback.plazas,
          requirements: fallback.requirements,
          steps: fallback.steps,
        }
      })
    }

    const dynamicSteps = studentsCallsSteps.map((s, idx) => {
      const num = idx + 1
      return {
        ...s,
        title: secMap.get(`est_aux_paso_${num}_titulo`) || s.title,
        desc: secMap.get(`est_aux_paso_${num}_desc`) || s.desc,
      }
    })

    const dynamicRequirements = studentsCallsRequirements.map((r, idx) => {
      const num = idx + 1
      return {
        ...r,
        title: secMap.get(`est_aux_req_${num}_titulo`) || r.title,
        desc: secMap.get(`est_aux_req_${num}_desc`) || r.desc,
      }
    })

    return {
      hero: dynamicHero,
      calls: dynamicCalls,
      steps: dynamicSteps,
      requirements: dynamicRequirements,
      ui: studentsCallsUi,
      filters: studentsCallsFilters,
    }
  } catch (err) {
    console.error('Error cargando datos dinámicos de auxiliaturas:', err)
    return {
      hero: studentsCallsHero,
      calls: studentsCalls,
      steps: studentsCallsSteps,
      requirements: studentsCallsRequirements,
      ui: studentsCallsUi,
      filters: studentsCallsFilters,
    }
  }
}
