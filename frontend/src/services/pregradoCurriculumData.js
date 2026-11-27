import {
  AlertTriangle,
  Award,
  BookOpen,
  Calculator,
  CalendarClock,
  CheckCircle2,
  CheckSquare,
  Clock,
  Code,
  Download,
  Factory,
  FileEdit,
  FileText,
  Info,
  Layers,
  ListPlus,
  Map as MapIcon,
  MousePointer2,
  PenTool,
  PieChart,
  ShieldCheck,
  Sigma,
  Timer,
  TrendingUp,
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

export const curriculumHero = {
  eyebrow: 'Resolución académica 2021',
  title: ['Plan de Estudios', 'y Malla Curricular'],
  highlights: ['9.600 Horas', '240 Créditos'],
}

const fallbackMaterias = [
  { idMateriaAct: 1, siglaMateriaAct: 'INF-111', nombreMateriaAct: 'Programación I', horasMateria: 200, prerrequisitos: 'Ninguno', semestre: 1, incluye: [{ idPlanEstudio: 1 }, { idPlanEstudio: 2 }] },
  { idMateriaAct: 2, siglaMateriaAct: 'LAB-111', nombreMateriaAct: 'Laboratorio de Programación I', horasMateria: 240, prerrequisitos: 'Ninguno', semestre: 1, incluye: [{ idPlanEstudio: 1 }, { idPlanEstudio: 2 }] },
  { idMateriaAct: 3, siglaMateriaAct: 'MAT-130', nombreMateriaAct: 'Álgebra', horasMateria: 200, prerrequisitos: 'Ninguno', semestre: 1, incluye: [{ idPlanEstudio: 1 }, { idPlanEstudio: 2 }] },
  { idMateriaAct: 4, siglaMateriaAct: 'MAT-132', nombreMateriaAct: 'Cálculo I', horasMateria: 200, prerrequisitos: 'Ninguno', semestre: 1, incluye: [{ idPlanEstudio: 1 }, { idPlanEstudio: 2 }] },
  { idMateriaAct: 5, siglaMateriaAct: 'EST-113', nombreMateriaAct: 'Estadística Descriptiva', horasMateria: 240, prerrequisitos: 'Ninguno', semestre: 1, incluye: [{ idPlanEstudio: 2 }] },
  { idMateriaAct: 6, siglaMateriaAct: 'LIN-116', nombreMateriaAct: 'Inglés I', horasMateria: 120, prerrequisitos: 'Ninguno', semestre: 1, incluye: [{ idPlanEstudio: 1 }, { idPlanEstudio: 2 }] },
  { idMateriaAct: 8, siglaMateriaAct: 'EST-122', nombreMateriaAct: 'Computación Estadística I', horasMateria: 240, prerrequisitos: 'INF-111, LAB-111', semestre: 2, incluye: [{ idPlanEstudio: 2 }] },
  { idMateriaAct: 9, siglaMateriaAct: 'EST-124', nombreMateriaAct: 'Diseño y Proc. Estadístico I', horasMateria: 240, prerrequisitos: 'EST-113', semestre: 2, incluye: [{ idPlanEstudio: 2 }] },
  { idMateriaAct: 10, siglaMateriaAct: 'MAT-136', nombreMateriaAct: 'Álgebra Lineal', horasMateria: 200, prerrequisitos: 'MAT-130', semestre: 2, incluye: [{ idPlanEstudio: 1 }, { idPlanEstudio: 2 }] },
  { idMateriaAct: 11, siglaMateriaAct: 'MAT-134', nombreMateriaAct: 'Cálculo II', horasMateria: 200, prerrequisitos: 'MAT-132', semestre: 2, incluye: [{ idPlanEstudio: 1 }, { idPlanEstudio: 2 }] },
  { idMateriaAct: 12, siglaMateriaAct: 'EST-123', nombreMateriaAct: 'Probabilidad I', horasMateria: 200, prerrequisitos: 'MAT-132', semestre: 2, incluye: [{ idPlanEstudio: 2 }] },
  { idMateriaAct: 13, siglaMateriaAct: 'LIN-117', nombreMateriaAct: 'Inglés II', horasMateria: 120, prerrequisitos: 'LIN-116', semestre: 2, incluye: [{ idPlanEstudio: 1 }, { idPlanEstudio: 2 }] },
]

export async function loadCurriculumPageData() {
  try {
    const [sections, plans, subjects] = await Promise.all([
      seccionPaginaApi.list('/pregrado/malla-curricular').catch(() => []),
      httpClient('/plan-estudios').catch(() => []),
      httpClient('/materia-pregrado').catch(() => []),
    ])

    const secMap = buildSectionMap(sections)

    const dynamicHero = {
      eyebrow: secMap.get('malla_hero_eyebrow') || curriculumHero.eyebrow,
      title: [
        secMap.get('malla_hero_titulo_01') || curriculumHero.title[0],
        secMap.get('malla_hero_titulo_02') || curriculumHero.title[1],
      ],
      highlights: [
        secMap.get('malla_hero_horas') || curriculumHero.highlights[0],
        secMap.get('malla_hero_creditos') || curriculumHero.highlights[1],
      ],
    }

    const validMaterias = Array.isArray(subjects) && subjects.length > 0 ? subjects : fallbackMaterias

    return {
      hero: dynamicHero,
      planes: Array.isArray(plans) && plans.length > 0 ? plans : [
        { idPlanEstudio: 1, nombrePlan: 'Plan Antiguo' },
        { idPlanEstudio: 2, nombrePlan: 'Plan Nuevo' },
      ],
      materias: validMaterias,
    }
  } catch (err) {
    console.error('Error cargando datos dinámicos de malla:', err)
    return {
      hero: curriculumHero,
      planes: [
        { idPlanEstudio: 1, nombrePlan: 'Plan Antiguo' },
        { idPlanEstudio: 2, nombrePlan: 'Plan Nuevo' },
      ],
      materias: fallbackMaterias,
    }
  }
}


export const curriculumData = [
  {
    sem: 1,
    level: 'Básico',
    subjects: [
      { id: 'INF 111', n: 'Programación I', area: 'prog', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
      { id: 'LAB 111', n: 'Laboratorio de Programación I', area: 'prog', hp: 8, hnp: 4, ht: 240, cred: 6, pre: [] },
      { id: 'MAT 130', n: 'Álgebra', area: 'math', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
      { id: 'MAT 132', n: 'Cálculo I', area: 'math', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
      { id: 'EST 113', n: 'Estadística Descriptiva', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: [] },
      { id: 'LIN 116', n: 'Inglés I', area: 'other', hp: 4, hnp: 2, ht: 120, cred: 3, pre: [] },
    ],
  },
  {
    sem: 2,
    level: 'Básico',
    subjects: [
      { id: 'EST 122', n: 'Computación Estadística I', area: 'prog', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['INF 111', 'LAB 111'] },
      { id: 'EST 124', n: 'Diseño y Proc. Estadístico I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 113'] },
      { id: 'MAT 136', n: 'Álgebra Lineal', area: 'math', hp: 8, hnp: 2, ht: 200, cred: 5, pre: ['MAT 130'] },
      { id: 'MAT 134', n: 'Cálculo II', area: 'math', hp: 8, hnp: 2, ht: 200, cred: 5, pre: ['MAT 132'] },
      { id: 'EST 123', n: 'Probabilidad I', area: 'stats', hp: 8, hnp: 2, ht: 200, cred: 5, pre: ['MAT 132'] },
      { id: 'LIN 117', n: 'Inglés II', area: 'other', hp: 4, hnp: 2, ht: 120, cred: 3, pre: ['LIN 116'] },
    ],
  },
  {
    sem: 3,
    level: 'Formación',
    subjects: [
      { id: 'MAT 274', n: 'Ecuaciones Diferenciales', area: 'math', hp: 8, hnp: 2, ht: 200, cred: 5, pre: ['MAT 134'] },
      { id: 'EST 233', n: 'Probabilidad II', area: 'stats', hp: 8, hnp: 6, ht: 280, cred: 7, pre: ['EST 123'] },
      { id: 'EST 231', n: 'Análisis Matricial Estadístico', area: 'math', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['MAT 136'] },
      { id: 'EST 235', n: 'Inferencia Estadística I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 123'] },
      { id: 'EST 232', n: 'Demografía', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 123'] },
    ],
  },
  {
    sem: 4,
    level: 'Formación',
    subjects: [
      { id: 'EST 240', n: 'Teoría de Probabilidad I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 233'] },
      { id: 'EST 241', n: 'Estadística no Paramétrica', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 235'] },
      { id: 'EST 242', n: 'Investigación Operativa I', area: 'math', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 231'] },
      { id: 'EST 243', n: 'Inferencia Estadística II', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 235'] },
      { id: 'EST 244', n: 'Muestreo I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 235'] },
    ],
  },
  {
    sem: 5,
    level: 'Profesional',
    subjects: [
      { id: 'EST 354', n: 'Muestreo II', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 244'] },
      { id: 'EST 355', n: 'Procesos Estocásticos', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 240'] },
      { id: 'EST 352', n: 'Investigación Operativa II', area: 'math', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 242'] },
      { id: 'EST 353', n: 'Modelos Lineales I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 243'] },
      { id: 'EST 351', n: 'Computación Estadística II', area: 'prog', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 122'] },
    ],
  },
  {
    sem: 6,
    level: 'Profesional',
    subjects: [
      { id: 'EST 362', n: 'Estadística Computacional', area: 'prog', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 351', 'EST 354'] },
      { id: 'EST 365', n: 'Métodos Multivariados I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 353'] },
      { id: 'EST 367', n: 'Series Tiempo Univariante', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 355'] },
      { id: 'EST 368', n: 'Metodología de Investigación', area: 'other', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 354'] },
      { id: 'EST 366', n: 'Estadística Bayesiana I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 243'] },
    ],
  },
  {
    sem: 7,
    level: 'Profesional',
    subjects: [
      { id: 'EST 373', n: 'Diseño de Experimentos', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 353'] },
      { id: 'EST 375', n: 'Métodos Multivariados II', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 365'] },
      { id: 'EST 374', n: 'Análisis de Datos Categóricos', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 353'] },
      { id: 'EST 372', n: 'Análisis de Datos Masivo I', area: 'prog', hp: 10, hnp: 4, ht: 280, cred: 7, pre: ['EST 365'] },
      { id: 'OPT I', n: 'Optativa I', area: 'opt', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
    ],
  },
  {
    sem: 8,
    level: 'Titulación',
    subjects: [
      { id: 'EST 381', n: 'Minería de Datos', area: 'prog', hp: 10, hnp: 4, ht: 280, cred: 7, pre: ['EST 372'] },
      { id: 'EST 389', n: 'Taller de Titulación', area: 'grad', hp: 12, hnp: 14, ht: 520, cred: 13, pre: ['Hasta 7° Semestre'] },
      { id: 'OPT II', n: 'Optativa II', area: 'opt', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
      { id: 'OPT III', n: 'Optativa III', area: 'opt', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
    ],
  },
]

export const electivesAreas = [
  {
    title: 'Estadística Aplicada',
    icon: PieChart,
    items: [
      { id: 'EST 382', n: 'Visualización de Gráficos', pre: 'Estadística Computacional', ht: 200, cr: 5 },
      { id: 'EST 383', n: 'Diseño y Proc. Est. II', pre: 'Muestreo II', ht: 200, cr: 5 },
      { id: 'EST 384', n: 'Control Est. Calidad', pre: 'Inferencia II', ht: 200, cr: 5 },
      { id: 'EST 385', n: 'Estadística Actuarial', pre: 'Inferencia II', ht: 200, cr: 5 },
      { id: 'EST 386', n: 'Epidemiología Estadística', pre: 'Inferencia II', ht: 200, cr: 5 },
    ],
  },
  {
    title: 'Área Matemática',
    icon: Sigma,
    items: [
      { id: 'MAT 252', n: 'Análisis I', pre: 'Hasta 4° Semestre', ht: 200, cr: 5 },
      { id: 'MAT 253', n: 'Topología General', pre: 'Análisis I', ht: 200, cr: 5 },
      { id: 'MAT 382', n: 'Teoría de la Medida', pre: 'Análisis I', ht: 200, cr: 5 },
      { id: 'MAT 262', n: 'Análisis Complejo I', pre: 'Hasta 4° Semestre', ht: 200, cr: 5 },
    ],
  },
  {
    title: 'Ingeniería Geográfica',
    icon: MapIcon,
    items: [
      { id: 'MAP 202', n: 'Cartografía', pre: 'Computación Est. I', ht: 200, cr: 5 },
      { id: 'GEO 304', n: 'Geografía Regional', pre: 'Cartografía', ht: 200, cr: 5 },
      { id: 'GEO 305', n: 'Sistemas de Inf. Geográfica', pre: 'Geografía regional', ht: 400, cr: 10 },
      { id: 'GOE 406', n: 'Métodos Est. Geografía', pre: 'Cartografía', ht: 200, cr: 5 },
    ],
  },
  {
    title: 'Ingeniería Industrial',
    icon: Factory,
    items: [
      { id: 'IND 844', n: 'Gestión de la Calidad', pre: 'Hasta 4° Semestre', ht: 200, cr: 5 },
      { id: 'IND 621', n: 'Marketing', pre: 'Metodología Inv.', ht: 400, cr: 10 },
      { id: 'IND 481', n: 'Calidad Industrial', pre: 'Hasta 4° Semestre', ht: 200, cr: 5 },
      { id: 'IND 723', n: 'Eval. de Proyectos I', pre: 'Inv. Operativa I', ht: 200, cr: 5 },
      { id: 'IND 823', n: 'Eval. de Proyectos II', pre: 'Eval. Proyectos I', ht: 200, cr: 5 },
    ],
  },
  {
    title: 'Área Economía',
    icon: TrendingUp,
    items: [
      { id: 'TE-302', n: 'Microeconomía I', pre: 'Hasta 4° Semestre', ht: 200, cr: 5 },
      { id: 'TE-303', n: 'Microeconomía II', pre: 'Microeconomía I', ht: 200, cr: 5 },
      { id: 'TE-313', n: 'Macroeconomía I', pre: 'Microeconomía I', ht: 200, cr: 5 },
      { id: 'C-115', n: 'Econometría I', pre: 'Hasta 4° Semestre', ht: 200, cr: 5 },
      { id: 'C-116', n: 'Econometría II', pre: 'Econometría I', ht: 200, cr: 5 },
    ],
  },
]

export const areaColors = {
  math: '#475569',
  stats: '#92400e',
  prog: '#115e59',
  grad: '#3730a3',
  opt: '#7c3aed',
  other: '#94a3b8',
}

export const areaLegend = [
  { label: 'Cálculo y Álgebra', color: areaColors.math },
  { label: 'Teoría Estadística', color: areaColors.stats },
  { label: 'Data y Programación', color: areaColors.prog },
  { label: 'Titulación', color: areaColors.grad },
]

export const planMeta = {
  levelLabel: 'Niveles',
  semesterHoursLabel: 'Horas semestre',
  semesterCreditsLabel: 'Créditos',
  pdfLabel: 'PDF oficial',
  downloadIcon: Download,
  accentIcon: Award,
}

export const gridMeta = {
  eyebrow: 'Arquitectura de correlatividad',
  title: ['Malla', 'Curricular'],
  interactionHint: 'Pasa el cursor por una materia para ver su ruta de prerrequisitos y dependencias.',
  icon: MousePointer2,
}

export const electivesMeta = {
  title: ['Materias Optativas', 'Especialización de Perfil'],
  icon: ListPlus,
}

export const curriculumCalendarMeta = {
  tag: 'Cronograma principal',
  title: 'Calendario Académico II/2026',
  sub: 'Fechas oficiales para mesa de examen, desarrollo del curso regular y cierre académico de gestión.',
  resolution: 'Resolución FCPN.CE.DA.COM N° 06/2026',
  term: 'II/2026',
  termLabel: 'Semestre regular',
  noticeTitle: 'Comunicado Institucional',
  noticeText:
    'La Dirección Académica de la Carrera de Estadística pone en conocimiento de docentes y estudiantes el cronograma de actividades correspondiente a la gestión II/2026, en cumplimiento del calendario académico facultativo y disposiciones internas vigentes.',
  noticeIcon: CalendarClock,
  seal: { symbol: 'T', label: 'Timeline', value: 'Acad' },
  examSession: { title: 'Primera Mesa de Examen 2026', icon: Timer },
  downloadCard: {
    title: 'Documento Oficial',
    caption: 'Descarga el PDF sellado por Dirección Académica.',
    ctaLabel: 'PDF 06/2026',
    icon: FileText,
  },
}

export const examSessionData = [
  { event: 'Inscripciones', date: '21 de julio - 22 de julio' },
  { event: 'Aplicación del examen', date: '28 de julio - 29 de julio' },
  { event: 'Notas en el SSA', date: '28 de julio - 29 de julio' },
  { event: 'Firma de actas en Kárdex', date: '30 de julio' },
  { event: 'Notas en Vicedecanato', date: '31 de julio' },
]

export const regularCourseData = [
  { event: 'Inscripciones (*)', date: '26 de julio - 29 de julio', type: 'admin', icon: FileEdit },
  { event: 'Inicio de la actividad académica', date: '30 de julio', type: 'academic', icon: BookOpen },
  { event: 'Desarrollo de la actividad académica', date: '30 de julio - 12 de diciembre', type: 'academic', icon: Layers },
  { event: 'Retiro y/o adición de materias', date: '18 de agosto - 22 de agosto', type: 'admin', icon: FileText },
  { event: 'Primer parcial', date: '22 de septiembre - 26 de septiembre', type: 'exam', icon: PenTool },
  { event: 'Segundo parcial', date: '24 de noviembre - 28 de noviembre', type: 'exam', icon: PenTool },
  { event: 'Examen final', date: '1 de diciembre - 5 de diciembre', type: 'exam', icon: CheckSquare },
  { event: 'Examen recuperatorio', date: '8 de diciembre - 12 de diciembre', type: 'examAlert', icon: AlertTriangle },
  { event: 'Notas en el SSA', date: '15 de diciembre - 17 de diciembre', type: 'closing', icon: Calculator },
  { event: 'Firma de actas en Kárdex', date: '15 de diciembre - 18 de diciembre', type: 'closing', icon: CheckCircle2 },
  { event: 'Notas en Vicedecanato', date: '19 de diciembre', type: 'closing', icon: ShieldCheck },
]

export const eventTypeStyles = {
  admin: { color: 'bg-blue-600', border: 'border-blue-200', text: 'text-blue-800', label: 'Administrativo' },
  academic: { color: 'bg-teal-600', border: 'border-teal-200', text: 'text-teal-800', label: 'Académico' },
  exam: { color: 'bg-[#ea580c]', border: 'border-orange-200', text: 'text-[#c2410c]', label: 'Evaluación' },
  examAlert: { color: 'bg-red-600', border: 'border-red-200', text: 'text-red-800', label: 'Recuperatorio' },
  closing: { color: 'bg-slate-700', border: 'border-slate-200', text: 'text-slate-800', label: 'Cierre de gestión' },
}

export const specialEnrollmentNote = {
  title: '(*) Inscripción de Casos Especiales',
  description:
    'Corresponde a una inscripción excepcional para estudiantes en trámites de carrera paralela, traspaso, convalidación de materias u otros casos que la Comisión Académica considere pertinentes.',
  icon: AlertTriangle,
  detailIcon: Info,
}

export const footerMeta = {
  brand: 'Estadística — UMSA',
  subtitle: 'Excelencia Académica CEUB',
  metrics: ['Plan de Estudios Oficial', 'Acreditación CEUB'],
  icon: Layers,
}

export const curriculumUtilities = {
  hourIcon: Clock,
  codeIcon: Code,
  semesterIcon: Calculator,
}

export const flatSubjects = curriculumData.flatMap((sem) => sem.subjects)

export async function loadCalendarPageData() {
  try {
    const sections = await seccionPaginaApi.list('/pregrado/calendario-academico').catch(() => [])
    const secMap = buildSectionMap(sections)

    const calendarMeta = {
      ...curriculumCalendarMeta,
      tag: secMap.get('calendario_hero_badge') || curriculumCalendarMeta.tag,
      title: secMap.get('calendario_hero_titulo') || curriculumCalendarMeta.title,
      sub: secMap.get('calendario_hero_subtitulo') || curriculumCalendarMeta.sub,
      noticeText: secMap.get('calendario_comunicado_texto') || secMap.get('calendario_hero_descripcion') || curriculumCalendarMeta.noticeText,
      noticeTitle: secMap.get('calendario_comunicado_titulo') || curriculumCalendarMeta.noticeTitle,
      resolution: secMap.get('calendario_hero_resolucion') || curriculumCalendarMeta.resolution,
      term: secMap.get('calendario_hero_gestion') || curriculumCalendarMeta.term,
      downloadCard: {
        ...curriculumCalendarMeta.downloadCard,
        title: secMap.get('calendario_descarga_titulo') || curriculumCalendarMeta.downloadCard.title,
        caption: secMap.get('calendario_descarga_subtitulo') || curriculumCalendarMeta.downloadCard.caption,
        ctaLabel: secMap.get('calendario_descarga_cta_texto') || curriculumCalendarMeta.downloadCard.ctaLabel,
      },
      examSession: {
        ...curriculumCalendarMeta.examSession,
        title: secMap.get('calendario_mesa_titulo') || curriculumCalendarMeta.examSession.title,
      },
    }

    const dynamicExamSessions = examSessionData.map((item, idx) => {
      const num = String(idx + 1).padStart(2, '0')
      const ev = secMap.get(`calendario_mesa_${num}_evento`)
      const fe = secMap.get(`calendario_mesa_${num}_fecha`)
      return {
        ...item,
        event: ev || item.event,
        date: fe || item.date,
      }
    })

    const dynamicRegularCourses = regularCourseData.map((item, idx) => {
      const num = String(idx + 1).padStart(2, '0')
      const ev = secMap.get(`calendario_regular_${num}_evento`)
      const fe = secMap.get(`calendario_regular_${num}_fecha`)
      return {
        ...item,
        event: ev || item.event,
        date: fe || item.date,
      }
    })

    const dynamicSpecialNote = {
      ...specialEnrollmentNote,
      title: secMap.get('calendario_nota_titulo') || specialEnrollmentNote.title,
      description: secMap.get('calendario_nota_descripcion') || specialEnrollmentNote.description,
    }

    return {
      calendarMeta,
      examSessionData: dynamicExamSessions,
      regularCourseData: dynamicRegularCourses,
      specialEnrollmentNote: dynamicSpecialNote,
    }
  } catch (err) {
    console.error('Error cargando calendario dinámico:', err)
    return {
      calendarMeta: curriculumCalendarMeta,
      examSessionData,
      regularCourseData,
      specialEnrollmentNote,
    }
  }
}

