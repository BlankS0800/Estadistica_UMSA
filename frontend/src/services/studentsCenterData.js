import {
  ArrowDown,
  Award,
  BarChart3,
  Briefcase,
  GraduationCap,
  Landmark,
  Mail,
  Megaphone,
  MessageCircle,
  Monitor,
  Send,
  ShieldCheck,
  Sigma,
  Star,
  Trophy,
  UserCircle,
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

export const studentsCenterHero = {
  eyebrow: 'Órgano máximo de representación',
  title: ['Centro de', 'Estudiantes'],
  description:
    'Consolidando una comunidad estudiantil participativa, crítica y líder en el ámbito de la Ciencia de Datos en Bolivia. Tu voz en la toma de decisiones.',
  ctaLabel: 'Contacto Directo',
  icon: Megaphone,
  leftShape: Sigma,
  rightShape: Users,
}

export const studentsCenterServices = [
  {
    title: 'Apoyo Académico',
    desc: 'Organización de cursos extracurriculares, talleres de software y seminarios especializados.',
    icon: Monitor,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Gestión de Auxiliaturas',
    desc: 'Información y guía integral sobre convocatorias para auxiliaturas de docencia y laboratorios.',
    icon: GraduationCap,
    color: 'text-[#ea580c]',
    bg: 'bg-orange-50',
  },
  {
    title: 'Defensa Estudiantil',
    desc: 'Asesoramiento en procesos de reclamos, impugnación de notas y seguimiento de trámites ante el Consejo.',
    icon: ShieldCheck,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    title: 'Cultura y Deporte',
    desc: 'Coordinación de campeonatos facultativos, jornadas culturales y eventos de confraternización.',
    icon: Trophy,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
]

export const studentsCenterStats = [
  { label: 'Representación', value: 'CEE', suffix: 'ACTIVA', icon: BarChart3 },
  { label: 'Voz estudiantil', value: '24/7', suffix: 'CANALES', icon: MessageCircle },
  { label: 'Apoyo académico', value: '04', suffix: 'SERVICIOS', icon: Briefcase },
  { label: 'Participación', value: '100%', suffix: 'ABIERTO', icon: Star },
]

export const studentsCenterStructure = {
  tag: 'Estructura democrática',
  title: 'Representación institucional',
  sub: 'Conoce cómo tu voz es representada a través del Centro de Estudiantes hacia las máximas instancias de decisión universitaria.',
  level1: {
    title: 'Bases estudiantiles',
    subtitle: 'Voz y voto soberano',
  },
  level2: {
    title: 'Centro de Estudiantes',
    subtitle: 'Directiva CEE (gestión actual)',
  },
  level3: [
    {
      title: 'Consejo de Carrera (HCC)',
      subtitle: 'Decisiones académicas locales',
      icon: Landmark,
    },
    {
      title: 'Consejo Facultativo (HCF)',
      subtitle: 'Decisiones FCPN (Decanato)',
      icon: Briefcase,
    },
  ],
}

export const directivaCee = [
  { name: 'Jhoseline Gloria Chambi Velasco', role: 'Primera Secretaria Ejecutiva' },
  { name: 'Alejandra Edith Salas Birrueta', role: 'Segunda Secretaria Ejecutiva' },
  { name: 'Aylin Yenori Maita Chacón', role: 'Tercera Secretaria Ejecutiva' },
  { name: 'Jhovanny Andrés Urbina Vargas', role: 'Cuarto Secretario Ejecutivo' },
  { name: 'Daniela Raquel Nava Canaviri', role: 'Quinta Secretaria Ejecutiva' },
  { name: 'Gerald Luis Condori Lima', role: 'Sexto Secretario Ejecutivo' },
]

export const delegadosHcf = [
  { name: 'Katherine Mayte Mendoza Quispe', role: 'Primer Titular' },
  { name: 'Daniela Raquel Nava Canaviri', role: 'Primer Suplente' },
  { name: 'Milenka Mariana Del Villar Cari', role: 'Segundo Titular' },
  { name: 'Gerald Luis Condori Lima', role: 'Segundo Titular' },
]

export const delegadosAcademico = [
  { name: 'Alejandra Adela Velarde Machicado', role: 'Primer Titular' },
  { name: 'Grover Huanca Flores', role: 'Primer Suplente' },
  { name: 'Daniel Franklin Céspedes Quispe', role: 'Segundo Suplente' },
]

export const studentsCenterChannels = [
  {
    label: 'Grupo de WhatsApp',
    href: '#',
    icon: MessageCircle,
    tone: 'blue',
  },
  {
    label: 'Canal de Telegram',
    href: '#',
    icon: Send,
    tone: 'orange',
  },
]

export const studentsCenterFooter = {
  brand: 'Estadística — UMSA',
  subtitle: 'Centro de Estudiantes (CEE)',
  metrics: ['FCPN', 'Gestión estudiantil'],
  icon: BarChart3,
  socialLinks: [
    { label: 'Facebook', href: '#', icon: Mail },
    { label: 'Instagram', href: '#', icon: Mail },
  ],
}

export async function loadStudentsCenterData() {
  try {
    const [sections, directivosRes] = await Promise.all([
      seccionPaginaApi.list('/estudiantes/centro-estudiantes'),
      httpClient('/directivo-estudiante').catch(() => []),
    ])

    const secMap = buildSectionMap(sections)
    const directivos = Array.isArray(directivosRes)
      ? directivosRes
      : Array.isArray(directivosRes?.data)
      ? directivosRes.data
      : []

    // 1. Hero
    const dynamicHero = {
      ...studentsCenterHero,
      eyebrow: secMap.get('est_centro_hero_eyebrow') || studentsCenterHero.eyebrow,
      title: [
        secMap.get('est_centro_hero_titulo_01') || studentsCenterHero.title[0],
        secMap.get('est_centro_hero_titulo_02') || studentsCenterHero.title[1],
      ],
      description: secMap.get('est_centro_hero_descripcion') || studentsCenterHero.description,
      ctaLabel: secMap.get('est_centro_hero_cta') || studentsCenterHero.ctaLabel,
    }

    // 2. Stats
    const dynamicStats = studentsCenterStats.map((item, idx) => {
      const num = String(idx + 1).padStart(2, '0')
      const lbl = secMap.get(`est_centro_stats_${num}_label`)
      const val = secMap.get(`est_centro_stats_${num}_val`)
      return {
        ...item,
        label: lbl || item.label,
        value: val ? val.split(' ')[0] : item.value,
        suffix: val && val.includes(' ') ? val.split(' ').slice(1).join(' ') : item.suffix,
      }
    })

    // 3. Structure
    const dynamicStructure = {
      ...studentsCenterStructure,
      tag: secMap.get('est_centro_estructura_tag') || studentsCenterStructure.tag,
      title: secMap.get('est_centro_estructura_titulo') || studentsCenterStructure.title,
      sub: secMap.get('est_centro_estructura_sub') || studentsCenterStructure.sub,
    }

    // 4. Channels
    const dynamicChannels = studentsCenterChannels.map((ch, idx) => {
      const num = String(idx + 1).padStart(2, '0')
      const lbl = secMap.get(`est_centro_canal_${num}_label`)
      const url = secMap.get(`est_centro_canal_${num}_url`)
      return {
        ...ch,
        label: lbl || ch.label,
        href: url || ch.href,
      }
    })

    // 5. Directiva / Delegados
    let dynamicCee = directivaCee
    let dynamicHcf = delegadosHcf
    let dynamicAca = delegadosAcademico

    if (directivos.length > 0) {
      const ceeList = directivos.filter(
        (d) => d.area && (d.area.toLowerCase().includes('cee') || d.area.toLowerCase().includes('directiva')),
      )
      const hcfList = directivos.filter(
        (d) => d.area && d.area.toLowerCase().includes('hcf'),
      )
      const acaList = directivos.filter(
        (d) => d.area && (d.area.toLowerCase().includes('académico') || d.area.toLowerCase().includes('academico')),
      )

      if (ceeList.length > 0) {
        dynamicCee = ceeList.map((d) => ({ name: d.nombre, role: d.cargo }))
      }
      if (hcfList.length > 0) {
        dynamicHcf = hcfList.map((d) => ({ name: d.nombre, role: d.cargo }))
      }
      if (acaList.length > 0) {
        dynamicAca = acaList.map((d) => ({ name: d.nombre, role: d.cargo }))
      }
    }

    return {
      hero: dynamicHero,
      stats: dynamicStats,
      structure: dynamicStructure,
      channels: dynamicChannels,
      services: studentsCenterServices,
      directivaCee: dynamicCee,
      delegadosHcf: dynamicHcf,
      delegadosAcademico: dynamicAca,
    }
  } catch (err) {
    console.error('Error cargando datos dinámicos de Centro de Estudiantes:', err)
    return {
      hero: studentsCenterHero,
      stats: studentsCenterStats,
      structure: studentsCenterStructure,
      channels: studentsCenterChannels,
      services: studentsCenterServices,
      directivaCee,
      delegadosHcf,
      delegadosAcademico,
    }
  }
}
