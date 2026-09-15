import { Briefcase, Gavel, GraduationCap, Scale, UserCheck, Users, Zap } from 'lucide-react'
import { httpClient } from '../api/httpClient'

export const authoritiesHero = {
  eyebrow: 'Gobierno y Liderazgo',
  title: ['Autoridades', 'y', 'Gobierno.'],
  description:
    'Liderazgo comprometido con la excelencia académica y la transparencia institucional en la Carrera de Estadística, fundamentado en cogobierno paritario.',
  imageUrl: '/images/institucional/autoridades_hero.jpeg',
  chips: [
    { symbol: 'partial', label: 'Gestión', subtitle: 'Eficiente' },
    { symbol: 'beta', label: 'Beta = 0.8', subtitle: 'Potencia Académica' },
  ],
}

export const hccStudentsFallback = [
  {
    name: 'Univ. Jhoseline Gloria Chambi Velasco',
    role: 'Delegada Estudiantil',
    email: 'jchambiv@fcpn.edu.bo',
    img: '/images/institucional/estudiante_chambi.jpeg',
  },
  {
    name: 'Univ. Alejandra Edith Salas Birrueta',
    role: 'Delegada Estudiantil',
    email: 'aesalas@fcpn.edu.bo',
    img: '/images/institucional/estudiante_salas.jpeg',
  },
  {
    name: 'Univ. Alejandra Adela Velarde Machicado',
    role: 'Delegada Estudiantil',
    email: 'avelardem@fcpn.edu.bo',
    img: '/images/institucional/estudiante_velarde.jpeg',
  },
]

export const hccMeta = {
  title: 'Honorable Consejo de Carrera (HCC)',
  subtitle: 'Órgano de Cogobierno',
  description:
    'Estructura paritaria encargada de decisiones normativas, académicas y administrativas para el desarrollo integral de la carrera.',
  teacherTitle: 'Estamento Docente',
  studentTitle: 'Estamento Estudiantil',
  teacherIcon: Gavel,
  studentIcon: Users,
}

export const orgStructure = {
  title: 'Arquitectura de Gestión',
  subtitle: 'Organigrama Funcional',
  top: { title: 'Dirección de Carrera', level: 'Nivel Ejecutivo' },
  middle: [
    { title: 'Honorable Consejo (HCC)', subtitle: 'Cogobierno Docente - Estudiantil', tag: 'Normativo', icon: Scale },
    { title: 'Gestión de Calidad', subtitle: 'Coordinación Curricular', tag: 'Académico', icon: Briefcase },
  ],
  bottom: [
    { title: 'Kardex Académico', icon: UserCheck },
    { title: 'Secretaría de Dirección', icon: GraduationCap },
    { title: 'Soporte Técnico', icon: Zap },
  ],
}

const getRecords = (response) => {
  if (Array.isArray(response)) return response
  if (Array.isArray(response?.content)) return response.content
  if (Array.isArray(response?.data)) return response.data
  if (Array.isArray(response?.items)) return response.items
  if (Array.isArray(response?.records)) return response.records
  return []
}

const getValue = (record, camelCaseKey, snakeCaseKey, fallback = '') =>
  record?.[camelCaseKey] ?? record?.[snakeCaseKey] ?? fallback

const normalizeRole = (role) => role.trim().toLowerCase().replace(/\s+/g, ' ')

const mapAuthority = (record, role, index) => ({
  name: `${getValue(record, 'gradoAcademico', 'grado_academico')} ${getValue(record, 'nombre', 'nombre')}`.trim(),
  role,
  email: getValue(record, 'correoInstitucional', 'correo_institucional'),
  stats: { s: 'autoridad', v: String(index + 1).padStart(2, '0') },
  img: (() => {
    const image = getValue(record, 'imagen', 'imagen', '')
    return image && image !== '/' ? image : authoritiesHero.imageUrl
  })(),
  color: role === 'Director(a) de Carrera' ? '#c2410c' : '#00447e',
})

const mapStudentAuthority = (record) => {
  const image = getValue(record, 'imagen', 'imagen', '')

  return {
    id: record.id,
    name: getValue(record, 'nombre', 'nombre'),
    role: getValue(record, 'cargo', 'cargo', 'Delegada Estudiantil'),
    email: '',
    img: image && image !== '/' ? image : authoritiesHero.imageUrl,
  }
}

export async function getAuthoritiesData() {
  const [teachersResult, studentsResult] = await Promise.allSettled([
    httpClient('/plantel/docentes'),
    httpClient('/estudiante-autoridad'),
  ])
  const records = teachersResult.status === 'fulfilled' ? getRecords(teachersResult.value) : []
  const studentRecords = studentsResult.status === 'fulfilled' ? getRecords(studentsResult.value) : []
  const authorityRecords = records.filter((record) => {
    const role = normalizeRole(getValue(record, 'cargoAutoridad', 'cargo_autoridad'))
    return [
      'director(a) de carrera',
      'director(a) academico(a)',
      'estamento docente',
      'estamendo docente',
    ].includes(role)
  })

  const directionRoles = ['Director(a) de Carrera', 'Director(a) Academico(a)']
  const directionData = authorityRecords
    .filter((record) => directionRoles.map(normalizeRole).includes(normalizeRole(getValue(record, 'cargoAutoridad', 'cargo_autoridad'))))
    .map((record, index) => mapAuthority(record, getValue(record, 'cargoAutoridad', 'cargo_autoridad'), index))
  const hccTeachers = authorityRecords
    .filter((record) => ['estamento docente', 'estamendo docente'].includes(normalizeRole(getValue(record, 'cargoAutoridad', 'cargo_autoridad'))))
    .map((record, index) => mapAuthority(record, 'Estamento Docente', index))

  return {
    directionData,
    hccTeachers,
    hccStudents: studentRecords.length > 0
      ? studentRecords.map(mapStudentAuthority)
      : hccStudentsFallback,
    hasApiError: teachersResult.status === 'rejected' || studentsResult.status === 'rejected',
  }
}
