import {
  AlertCircle,
  Activity,
  BarChart3,
  Binary,
  BookOpen,
  BrainCircuit,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Database,
  Download,
  FileCheck,
  FileSignature,
  GraduationCap,
  Layers,
  Lightbulb,
  LineChart,
  Microscope,
  Network,
  PieChart,
  ShieldCheck,
  Sigma,
  Stamp,
  Target,
  Users,
  Briefcase,
  Globe,
  Cpu,
  LayoutGrid,
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

export const postgradoHero = {
  icon: BarChart3,
  eyebrow: 'Programa de excelencia',
  title: ['Maestría Terminal', 'en Estadística'],
  description:
    'Formación avanzada para profesionales que lideran investigación, modelado matemático y ciencia de datos con rigor científico y proyección internacional.',
  highlights: ['Modalidad modular', 'Enfoque investigativo', 'Proyección Ph.D.'],
  ctaPrimary: { label: 'Descargar convocatoria oficial', href: '#' },
  ctaSecondary: { label: 'Ver plan de estudios', href: '#plan-estudios' },
}

export const postgradoProfile = {
  tag: 'Perfil de egreso',
  title: 'Alta capacidad analítica',
  sub: 'El egresado domina inferencia bajo incertidumbre, optimización, modelado avanzado y dirección técnica de proyectos cuantitativos.',
  seal: { symbol: 'σ', label: 'RIGOR', value: 'ALTO' },
  cards: [
    {
      title: 'Modelado y matemática avanzada',
      desc: 'Abstracción matemática para resolver problemas complejos, usando optimización, simulación estocástica y modelos lineales generalizados.',
      icon: Sigma,
      span: 'md:col-span-2',
    },
    {
      title: 'Ciencia de datos y Big Data',
      desc: 'Análisis masivo mediante machine learning, bases de datos multidimensionales y entornos de desarrollo integrado.',
      icon: Database,
      span: 'md:col-span-1',
    },
    {
      title: 'Investigación científica',
      desc: 'Aplicación del método científico para formular hipótesis, validar resultados y publicar hallazgos de alto impacto.',
      icon: Microscope,
      span: 'md:col-span-1',
    },
    {
      title: 'Diseño de muestras y censos',
      desc: 'Planificación y análisis riguroso de encuestas complejas y operativos estadísticos a escala nacional.',
      icon: Target,
      span: 'md:col-span-2',
    },
  ],
}

export const admissionRequirements = {
  tag: 'Admisión',
  title: 'Dossier de ingreso',
  sub: 'La documentación debe acreditar legalidad, respaldo académico y dominio básico de un idioma extranjero.',
  items: [
    {
      title: 'Titulación profesional',
      desc: 'Fotocopia legalizada del título profesional y/o grado de maestría. Si está en trámite, se acepta documento de conclusión firmado y compromiso de entrega.',
      icon: GraduationCap,
    },
    {
      title: 'Respaldo académico',
      desc: 'Hoja de vida documentada y certificado de calificaciones originales de pregrado.',
      icon: FileCheck,
    },
    {
      title: 'Acreditación de idioma',
      desc: 'Certificación de conocimiento de idioma extranjero (inglés), según reglamentación general de posgrados.',
      icon: Globe,
    },
    {
      title: 'Solicitud formal',
      desc: 'Carta de solicitud de admisión dirigida a la Dirección y formulario oficial de inscripción.',
      icon: FileSignature,
    },
    {
      title: 'Legalidad y registro',
      desc: 'Certificado de no tener proceso universitario ejecutoriado y matrícula posterior a la aceptación.',
      icon: Stamp,
    },
  ],
  note: {
    icon: AlertCircle,
    title: 'Exigencia de idioma',
    text: 'El conocimiento de un idioma extranjero es obligatorio y debe adecuarse a la reglamentación vigente.',
  },
}

export const occupationalFields = {
  tag: 'Proyección',
  title: 'Ecosistema laboral y académico',
  sub: 'La maestría habilita al profesional para liderar proyectos cuantitativos, consultoría de alto nivel y docencia universitaria.',
  icon: Target,
  arrowIcon: ChevronRight,
  sectors: [
    'INE y organismos gubernamentales',
    'Banca y compañías de seguros',
    'ONU, Banco Mundial, CEPAL',
    'Universidades y centros de pensamiento',
    'Empresas multinacionales tech',
    'Consultoras de mercado e industria',
  ],
  roles: [
    { role: 'Dirección de centros de investigación', desc: 'Liderazgo en instituciones de ciencias sociales y económicas.' },
    { role: 'Analista de datos masivos', desc: 'Procesamiento e inteligencia artificial en ecosistemas masivos.' },
    { role: 'Asesor cuantitativo especializado', desc: 'Diseño y dirección de análisis de datos para entidades públicas y privadas.' },
    { role: 'Muestrista y arquitecto censal', desc: 'Asesoría de alto nivel en censos y encuestas poblacionales.' },
    { role: 'Consultor y gestor independiente', desc: 'Administración de empresas de consultoría estadística interdisciplinaria.' },
    { role: 'Docente investigador', desc: 'Cátedra universitaria con proyección a estudios de doctorado.' },
  ],
}

export const curriculumMeta = {
  tag: 'Organización académica',
  title: 'Plan de estudios modular',
  sub: 'La estructura curricular integra progresivamente optimización, inferencia avanzada, series de tiempo y cierre investigativo con taller de grado.',
  icon: LayoutGrid,
  note: 'Cada módulo conserva el mismo peso académico y culmina en un curso o proyecto de avance.',
}

export const curriculumModules = [
  {
    id: 'mod1',
    title: 'Primer módulo',
    subtitle: 'Optimización y modelos lineales',
    icon: Layers,
    items: [
      { id: 'EST-411', name: 'Métodos de optimización', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-412', name: 'Modelos lineales II', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-413', name: 'Muestras complejas', hp: 80, hi: 120, ht: 200, cr: 5 },
    ],
    totals: { hp: 240, hi: 360, ht: 600, cr: 15 },
  },
  {
    id: 'mod2',
    title: 'Segundo módulo',
    subtitle: 'Inferencia avanzada',
    icon: Sigma,
    items: [
      { id: 'EST-421', name: 'Modelos lineales generalizados', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-422', name: 'Estadística Bayesiana II', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-423', name: 'Materia electiva I', hp: 80, hi: 120, ht: 200, cr: 5 },
    ],
    totals: { hp: 240, hi: 360, ht: 600, cr: 15 },
  },
  {
    id: 'mod3',
    title: 'Tercer módulo',
    subtitle: 'Series de tiempo y simulación',
    icon: Activity,
    items: [
      { id: 'EST-431', name: 'Series de tiempo multivariadas', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-432', name: 'Simulación estocástica', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-433', name: 'Materia electiva II', hp: 80, hi: 120, ht: 200, cr: 5 },
    ],
    totals: { hp: 240, hi: 360, ht: 600, cr: 15 },
  },
  {
    id: 'mod4',
    title: 'Cuarto módulo',
    subtitle: 'Investigación aplicada',
    icon: BookOpen,
    items: [
      { id: 'EST-447', name: 'Taller de grado', hp: 200, hi: 200, ht: 400, cr: 10, highlight: true },
      { id: 'EST-448', name: 'Materia electiva III', hp: 80, hi: 120, ht: 200, cr: 5 },
    ],
    totals: { hp: 280, hi: 320, ht: 600, cr: 15 },
  },
]

export const electiveCatalog = {
  tag: 'Especialización',
  title: 'Catálogo de materias electivas',
  sub: 'El estudiante puede orientar su perfil hacia data science, demografía, estadística espacial o procesos avanzados.',
  seal: { icon: PieChart, symbol: 'μ', label: 'CATÁLOGO', value: 'ABIERTO' },
  groups: [
    {
      title: 'Analítica avanzada',
      icon: BrainCircuit,
      items: [
        { id: 'EST-433', name: 'Estadística espacial', pre: 'Métodos avanzados', ht: 200, cr: 5 },
        { id: 'EST-434', name: 'Análisis de datos masivos II', pre: 'Computación estadística', ht: 200, cr: 5 },
        { id: 'EST-435', name: 'Aprendizaje automático estadístico', pre: 'Modelos lineales', ht: 200, cr: 5 },
      ],
    },
    {
      title: 'Ciencias sociales y población',
      icon: Users,
      items: [
        { id: 'EST-441', name: 'Demografía II', pre: 'Demografía', ht: 200, cr: 5 },
        { id: 'EST-442', name: 'Procesos estocásticos II', pre: 'Series de tiempo', ht: 200, cr: 5 },
        { id: 'EST-443', name: 'Estadística Bayesiana III', pre: 'Bayesiana II', ht: 200, cr: 5 },
      ],
    },
  ],
}

export const programHighlights = [
  { label: 'Horas totales', value: '2400', suffix: 'HRS', icon: Calculator },
  { label: 'Créditos', value: '60', suffix: 'CR', icon: CheckCircle2 },
  { label: 'Módulo de tesis', value: '1', suffix: 'FINAL', icon: FileCheck },
  { label: 'Proyección', value: 'Ph.D.', suffix: 'ACADÉMICA', icon: ShieldCheck },
]

export const postgradoSeal = {
  symbol: 'σ',
  label: 'POSTGRADO',
  value: 'ELITE',
}

export const postgradoFooter = {
  brand: 'Estadística — Postgrado',
  subtitle: 'Maestría Terminal en Ciencia de Datos',
  metrics: ['MAGISTER SCIENTIARUM', 'UMSA 2026'],
  icon: BarChart3,
}

export async function loadPostgradoTerminalData() {
  try {
    const [sections, prog1] = await Promise.all([
      seccionPaginaApi.list('/postgrado/maestria-terminal').catch(() => []),
      httpClient('/programa/1').catch(() => null),
    ])

    const secMap = buildSectionMap(sections)

    const dynamicHero = {
      ...postgradoHero,
      eyebrow: secMap.get('pos_terminal_hero_eyebrow') || postgradoHero.eyebrow,
      title: [
        secMap.get('pos_terminal_hero_titulo_01') || (prog1 ? prog1.nombre.split(' en ')[0] : postgradoHero.title[0]),
        secMap.get('pos_terminal_hero_titulo_02') || (prog1 && prog1.nombre.includes(' en ') ? 'en ' + prog1.nombre.split(' en ')[1] : postgradoHero.title[1]),
      ],
      description: secMap.get('pos_terminal_hero_descripcion') || postgradoHero.description,
      highlights: [
        secMap.get('pos_terminal_hero_highlight_01') || postgradoHero.highlights[0],
        secMap.get('pos_terminal_hero_highlight_02') || postgradoHero.highlights[1],
        secMap.get('pos_terminal_hero_highlight_03') || postgradoHero.highlights[2],
      ],
      ctaPrimary: {
        ...postgradoHero.ctaPrimary,
        label: secMap.get('pos_terminal_hero_cta_principal') || postgradoHero.ctaPrimary.label,
      },
      ctaSecondary: {
        ...postgradoHero.ctaSecondary,
        label: secMap.get('pos_terminal_hero_cta_secundario') || postgradoHero.ctaSecondary.label,
      },
    }

    const dynamicProfile = {
      ...postgradoProfile,
      tag: secMap.get('pos_terminal_perfil_tag') || postgradoProfile.tag,
      title: secMap.get('pos_terminal_perfil_titulo') || postgradoProfile.title,
      sub: secMap.get('pos_terminal_perfil_sub') || postgradoProfile.sub,
    }

    const dynamicCurriculumMeta = {
      ...curriculumMeta,
      tag: secMap.get('pos_terminal_curriculum_tag') || curriculumMeta.tag,
      title: secMap.get('pos_terminal_curriculum_titulo') || curriculumMeta.title,
      sub: secMap.get('pos_terminal_curriculum_sub') || curriculumMeta.sub,
      note: secMap.get('pos_terminal_curriculum_nota') || curriculumMeta.note,
    }

    const dynamicAdmission = {
      ...admissionRequirements,
      tag: secMap.get('pos_terminal_admision_tag') || admissionRequirements.tag,
      title: secMap.get('pos_terminal_admision_titulo') || admissionRequirements.title,
      sub: secMap.get('pos_terminal_admision_sub') || admissionRequirements.sub,
    }

    const dynamicFields = {
      ...occupationalFields,
      tag: secMap.get('pos_terminal_campo_tag') || occupationalFields.tag,
      title: secMap.get('pos_terminal_campo_titulo') || occupationalFields.title,
      sub: secMap.get('pos_terminal_campo_sub') || occupationalFields.sub,
    }

    let dynamicModules = curriculumModules
    if (prog1 && Array.isArray(prog1.organiza) && prog1.organiza.length > 0) {
      dynamicModules = prog1.organiza.map((org, index) => {
        const mod = org.modulo || {}
        const fallbackMod = curriculumModules[index] || curriculumModules[0]
        const hpStr = mod.incluye?.horasPresencial || '240 hrs'
        const hiStr = mod.incluye?.horasInvestigacion || '360 hrs'
        const hpNum = parseInt(hpStr, 10) || 240
        const hiNum = parseInt(hiStr, 10) || 360
        const htNum = hpNum + hiNum

        return {
          id: `mod${index + 1}`,
          title: mod.numeroModulo || fallbackMod.title,
          subtitle: mod.tituloModulo || fallbackMod.subtitle,
          icon: fallbackMod.icon,
          items: fallbackMod.items,
          totals: {
            hp: hpNum,
            hi: hiNum,
            ht: htNum,
            cr: fallbackMod.totals.cr,
          },
        }
      })
    }

    return {
      hero: dynamicHero,
      profile: dynamicProfile,
      curriculumMeta: dynamicCurriculumMeta,
      curriculumModules: dynamicModules,
      admissionRequirements: dynamicAdmission,
      occupationalFields: dynamicFields,
      electiveCatalog,
      postgradoFooter,
    }
  } catch (err) {
    console.error('Error cargando datos dinámicos de postgrado terminal:', err)
    return {
      hero: postgradoHero,
      profile: postgradoProfile,
      curriculumMeta,
      curriculumModules,
      admissionRequirements,
      occupationalFields,
      electiveCatalog,
      postgradoFooter,
    }
  }
}
