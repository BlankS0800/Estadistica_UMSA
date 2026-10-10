import {
  Award,
  BadgeCheck,
  BookMarked,
  Briefcase,
  Cpu,
  Database,
  FileSignature,
  HeartPulse,
  Layers,
  Lightbulb,
  Network,
  Search,
  Sigma,
  Terminal,
  Users,
  CalendarDays,
  ClipboardList,
  FileSearch,
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

export const studentsScientificHero = {
  eyebrow: 'Investigación y desarrollo',
  title: ['Sociedad Científica de', 'Estudiantes de Estadística'],
  description:
    'El núcleo donde las ideas se transforman en investigaciones, papers y proyectos con impacto real en Bolivia.',
  ctaLabel: 'Unirme a la próxima convocatoria',
  icon: Lightbulb,
  leftShape: Sigma,
  rightShape: Users,
}

export const researchLines = [
  {
    title: 'Ciencia de Datos Aplicada',
    desc: 'Modelado predictivo, machine learning y minería de datos para resolver problemas complejos.',
    icon: Database,
    tone: 'blue',
  },
  {
    title: 'Estadística Social y Demográfica',
    desc: 'Análisis de censos, encuestas de hogares y proyecciones para políticas públicas.',
    icon: Users,
    tone: 'orange',
  },
  {
    title: 'Bioestadística',
    desc: 'Colaboración en salud pública, epidemiología y análisis estadístico de ensayos clínicos.',
    icon: HeartPulse,
    tone: 'teal',
  },
]

export const studyNodes = [
  {
    title: 'Nodo R & Python',
    tag: 'Programación',
    desc: 'Automatización de procesos, web scraping y visualización de datos dinámica.',
    icon: Terminal,
  },
  {
    title: 'Métodos Bayesianos',
    tag: 'Inferencia avanzada',
    desc: 'Estadística bayesiana, simulación MCMC y modelos probabilísticos.',
    icon: Sigma,
  },
  {
    title: 'Laboratorio de Minería',
    tag: 'Inteligencia artificial',
    desc: 'Clasificación, clustering y redes neuronales para exploración de datos.',
    icon: Cpu,
  },
]

export const benefits = [
  {
    title: 'Certificaciones',
    desc: 'Certificados avalados por la Carrera y la FCPN.',
    icon: BadgeCheck,
  },
  {
    title: 'Publicaciones',
    desc: 'Artículos para revistas científicas indexadas.',
    icon: BookMarked,
  },
  {
    title: 'Eventos exclusivos',
    desc: 'Congresos, hackatones y ferias de ciencia nacionales.',
    icon: CalendarDays,
  },
  {
    title: 'Networking pro',
    desc: 'Conexión con investigadores y profesionales del área.',
    icon: Network,
  },
]

export const admissionSteps = [
  {
    id: 1,
    title: 'Convocatoria',
    desc: 'Publicación anual de nuevos miembros investigadores.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Postulación',
    desc: 'Carta de interés y récord académico.',
    icon: FileSignature,
  },
  {
    id: 3,
    title: 'Entrevista',
    desc: 'Reunión con la directiva para conocer aptitudes.',
    icon: Users,
  },
  {
    id: 4,
    title: 'Inducción',
    desc: 'Asignación a un grupo activo de investigación.',
    icon: Award,
  },
]

export const papers = [
  {
    id: 'PUB-001',
    title: 'Predicción de deserción estudiantil usando Random Forest',
    author: 'Nodo R & Python',
    year: '2025',
    tag: 'Ciencia de Datos',
  },
  {
    id: 'PUB-002',
    title: 'Análisis Bayesiano de la inflación interanual en Bolivia',
    author: 'Grupo Bayesiano',
    year: '2024',
    tag: 'Econometría',
  },
  {
    id: 'PUB-003',
    title: 'Impacto sociodemográfico post-censo 2024 en La Paz',
    author: 'Línea Demográfica',
    year: '2025',
    tag: 'Estadística Social',
  },
  {
    id: 'PUB-004',
    title: 'Clustering de patologías respiratorias en zonas de altitud',
    author: 'Línea Bioestadística',
    year: '2023',
    tag: 'Salud Pública',
  },
]

export const journals = [
  {
    name: 'Revista Varianza',
    desc: 'Publicación oficial del IETA - UMSA.',
    type: 'UMSA',
  },
  {
    name: 'Revista de Ciencias Puras',
    desc: 'Divulgación científica de la FCPN.',
    type: 'FCPN',
  },
  {
    name: 'Data Science Journal (BO)',
    desc: 'Revista boliviana de analítica avanzada e IA.',
    type: 'Nacional',
  },
]

export const societyTestimonials = [
  {
    name: 'Sofía Fernández',
    role: 'Investigadora estudiante',
    quote:
      'El grupo me dio disciplina, método y apoyo para convertir mi interés en un artículo real.',
    avatar: '/images/estudiantes/sofia_fernandez.jpg',
  },
  {
    name: 'Diego Huanca',
    role: 'Miembro de la SCEE',
    quote:
      'La Sociedad Científica me permitió trabajar con datos reales y aprender a comunicar resultados con rigor.',
    avatar: '/images/estudiantes/diego_huanca.jpg',
  },
]

export const societyMapNodes = [
  { label: 'INE La Paz', x: '28%', y: '30%', color: '#ea580c' },
  { label: 'FCPN', x: '62%', y: '58%', color: '#00447e' },
  { label: 'Banca Privada', x: '48%', y: '42%', color: '#0f766e' },
]

export const societyUi = {
  sectionIcon: FileSearch,
  downloadIcon: Layers,
}

export async function loadStudentsScientificSocietyData() {
  try {
    const [sectionsA, sectionsB, pubRes, matRes] = await Promise.all([
      seccionPaginaApi.list('/estudiantes/sociedad-cientifica').catch(() => []),
      seccionPaginaApi.list('/estudiantes/sociedades-cientificas').catch(() => []),
      httpClient('/publicaciones-estudiantiles').catch(() => []),
      httpClient('/matriz-cientifica').catch(() => []),
    ])

    const allSections = [...(Array.isArray(sectionsA) ? sectionsA : []), ...(Array.isArray(sectionsB) ? sectionsB : [])]
    const secMap = buildSectionMap(allSections)

    const rawPubs = Array.isArray(pubRes) ? pubRes : Array.isArray(pubRes?.data) ? pubRes.data : []
    const rawMats = Array.isArray(matRes) ? matRes : Array.isArray(matRes?.data) ? matRes.data : []

    // 1. Hero
    const dynamicHero = {
      ...studentsScientificHero,
      eyebrow: secMap.get('est_sociedad_hero_eyebrow') || studentsScientificHero.eyebrow,
      title: [
        secMap.get('est_sociedad_hero_titulo_01') || studentsScientificHero.title[0],
        secMap.get('est_sociedad_hero_titulo_02') || studentsScientificHero.title[1],
      ],
      description: secMap.get('est_sociedad_hero_descripcion') || studentsScientificHero.description,
      ctaLabel: secMap.get('est_sociedad_hero_cta') || studentsScientificHero.ctaLabel,
    }

    // 2. Líneas de Investigación (Matriz Científica)
    let dynamicLines = researchLines
    if (rawMats.length > 0) {
      const tones = ['blue', 'orange', 'teal', 'indigo']
      const icons = [Database, Users, HeartPulse, Sigma]
      dynamicLines = rawMats.map((m, idx) => ({
        title: m.titulo || 'Línea de Investigación',
        desc: m.descripcion || '',
        icon: icons[idx % icons.length],
        tone: tones[idx % tones.length],
      }))
    }

    // 3. Publicaciones Estudiantiles
    let dynamicPapers = papers
    if (rawPubs.length > 0) {
      dynamicPapers = rawPubs.map((p) => ({
        id: `PUB-${String(p.id).padStart(3, '0')}`,
        title: p.titulo,
        author: p.autor,
        year: String(p.anio),
        tag: p.area,
      }))
    }

    const dynamicNodes = studyNodes.map((n, idx) => {
      const num = idx + 1
      return {
        ...n,
        title: secMap.get(`est_sociedad_nodo_${num}_titulo`) || n.title,
        tag: secMap.get(`est_sociedad_nodo_${num}_tag`) || n.tag,
        desc: secMap.get(`est_sociedad_nodo_${num}_desc`) || n.desc,
      }
    })

    const dynamicBenefits = benefits.map((b, idx) => {
      const num = idx + 1
      return {
        ...b,
        title: secMap.get(`est_sociedad_ben_${num}_titulo`) || b.title,
        desc: secMap.get(`est_sociedad_ben_${num}_desc`) || b.desc,
      }
    })

    const dynamicSteps = admissionSteps.map((s, idx) => {
      const num = idx + 1
      return {
        ...s,
        title: secMap.get(`est_sociedad_paso_${num}_titulo`) || s.title,
        desc: secMap.get(`est_sociedad_paso_${num}_desc`) || s.desc,
      }
    })

    const dynamicJournals = journals.map((j, idx) => {
      const num = idx + 1
      return {
        ...j,
        title: secMap.get(`est_sociedad_rev_${num}_titulo`) || j.title,
        desc: secMap.get(`est_sociedad_rev_${num}_desc`) || j.desc,
      }
    })

    const dynamicTestimonials = societyTestimonials.map((t, idx) => {
      const num = idx + 1
      return {
        ...t,
        name: secMap.get(`est_sociedad_test_${num}_nombre`) || t.name,
        role: secMap.get(`est_sociedad_test_${num}_cargo`) || t.role,
        quote: secMap.get(`est_sociedad_test_${num}_texto`) || t.quote,
      }
    })

    return {
      hero: dynamicHero,
      researchLines: dynamicLines,
      studyNodes: dynamicNodes,
      benefits: dynamicBenefits,
      admissionSteps: dynamicSteps,
      papers: dynamicPapers,
      journals: dynamicJournals,
      societyTestimonials: dynamicTestimonials,
      societyMapNodes,
      societyUi,
    }
  } catch (err) {
    console.error('Error cargando datos dinámicos de Sociedad Científica:', err)
    return {
      hero: studentsScientificHero,
      researchLines,
      studyNodes,
      benefits,
      admissionSteps,
      papers,
      journals,
      societyTestimonials,
      societyMapNodes,
      societyUi,
    }
  }
}
