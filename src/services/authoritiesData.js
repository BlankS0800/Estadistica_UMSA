import { Briefcase, Gavel, GraduationCap, Scale, UserCheck, Users, Zap } from 'lucide-react'
import { httpClient } from '../api/httpClient'
import { seccionPaginaApi } from './seccionPaginaService'

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

export const authoritiesDataFallback = {
  authoritiesHero,
  hccMeta,
  orgStructure,
  directionData: [],
  hccTeachers: [],
  hccStudents: hccStudentsFallback,
}

const AUTHORITIES_PAGE_SLUG = '/institucional/autoridades'

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

const getValue = (record, camelCaseKey, snakeCaseKey, fallback = '') =>
  record?.[camelCaseKey] ?? record?.[snakeCaseKey] ?? fallback

const normalizeRole = (role) => role.trim().toLowerCase().replace(/\s+/g, ' ')

const mapAuthority = (record, role, index, defaultImage = authoritiesHero.imageUrl) => ({
  name: `${getValue(record, 'gradoAcademico', 'grado_academico')} ${getValue(record, 'nombre', 'nombre')}`.trim(),
  role,
  email: getValue(record, 'correoInstitucional', 'correo_institucional'),
  stats: { s: 'autoridad', v: String(index + 1).padStart(2, '0') },
  img: (() => {
    const image = getValue(record, 'imagen', 'imagen', '')
    return image && image !== '/' ? image : defaultImage
  })(),
  color: role === 'Director(a) de Carrera' ? '#c2410c' : '#00447e',
})

const mapStudentAuthority = (record, defaultImage = authoritiesHero.imageUrl) => {
  const image = getValue(record, 'imagen', 'imagen', '')

  return {
    id: record.id,
    name: getValue(record, 'nombre', 'nombre'),
    role: getValue(record, 'cargo', 'cargo', 'Delegada Estudiantil'),
    email: '',
    img: image && image !== '/' ? image : defaultImage,
  }
}

export async function getAuthoritiesData() {
  const [teachersResult, studentsResult, sectionsResult] = await Promise.allSettled([
    httpClient('/plantel/docentes'),
    httpClient('/estudiante-autoridad'),
    seccionPaginaApi.list(AUTHORITIES_PAGE_SLUG),
  ])

  const records = teachersResult.status === 'fulfilled' ? getRecords(teachersResult.value) : []
  const studentRecords = studentsResult.status === 'fulfilled' ? getRecords(studentsResult.value) : []
  const sectionRecords =
    sectionsResult.status === 'fulfilled' && Array.isArray(sectionsResult.value)
      ? sectionsResult.value
      : []

  const val = (key, fallback) => getRecordValue(sectionRecords, key, fallback)

  const dynamicHero = {
    ...authoritiesHero,
    eyebrow: val('autoridades_inicio_etiqueta', authoritiesHero.eyebrow),
    title: [
      val('autoridades_inicio_titulo_01', authoritiesHero.title[0]),
      val('autoridades_inicio_titulo_02', authoritiesHero.title[1]),
      val('autoridades_inicio_titulo_03', authoritiesHero.title[2]),
    ],
    description: val('autoridades_inicio_descripcion', authoritiesHero.description),
    imageUrl: val('autoridades_inicio_imagen', authoritiesHero.imageUrl),
    chips: [
      {
        symbol: val('autoridades_chip_01_simbolo', authoritiesHero.chips[0].symbol),
        label: val('autoridades_chip_01_etiqueta', authoritiesHero.chips[0].label),
        subtitle: val('autoridades_chip_01_subtitulo', authoritiesHero.chips[0].subtitle),
      },
      {
        symbol: val('autoridades_chip_02_simbolo', authoritiesHero.chips[1].symbol),
        label: val('autoridades_chip_02_etiqueta', authoritiesHero.chips[1].label),
        subtitle: val('autoridades_chip_02_subtitulo', authoritiesHero.chips[1].subtitle),
      },
    ],
  }

  const dynamicHccMeta = {
    ...hccMeta,
    title: val('autoridades_hcc_titulo', hccMeta.title),
    subtitle: val('autoridades_hcc_subtitulo', hccMeta.subtitle),
    description: val('autoridades_hcc_descripcion', hccMeta.description),
    teacherTitle: val('autoridades_hcc_docente_titulo', hccMeta.teacherTitle),
    studentTitle: val('autoridades_hcc_estudiante_titulo', hccMeta.studentTitle),
  }

  const dynamicOrgStructure = {
    ...orgStructure,
    title: val('autoridades_estructura_titulo', orgStructure.title),
    subtitle: val('autoridades_estructura_subtitulo', orgStructure.subtitle),
    top: {
      level: val('autoridades_estructura_top_nivel', orgStructure.top.level),
      title: val('autoridades_estructura_top_titulo', orgStructure.top.title),
    },
    middle: [
      {
        ...orgStructure.middle[0],
        tag: val('autoridades_estructura_medio_01_etiqueta', orgStructure.middle[0].tag),
        title: val('autoridades_estructura_medio_01_titulo', orgStructure.middle[0].title),
        subtitle: val('autoridades_estructura_medio_01_subtitulo', orgStructure.middle[0].subtitle),
      },
      {
        ...orgStructure.middle[1],
        tag: val('autoridades_estructura_medio_02_etiqueta', orgStructure.middle[1].tag),
        title: val('autoridades_estructura_medio_02_titulo', orgStructure.middle[1].title),
        subtitle: val('autoridades_estructura_medio_02_subtitulo', orgStructure.middle[1].subtitle),
      },
    ],
    bottom: [
      {
        ...orgStructure.bottom[0],
        title: val('autoridades_estructura_base_01_titulo', orgStructure.bottom[0].title),
      },
      {
        ...orgStructure.bottom[1],
        title: val('autoridades_estructura_base_02_titulo', orgStructure.bottom[1].title),
      },
      {
        ...orgStructure.bottom[2],
        title: val('autoridades_estructura_base_03_titulo', orgStructure.bottom[2].title),
      },
    ],
  }

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
    .filter((record) =>
      directionRoles
        .map(normalizeRole)
        .includes(normalizeRole(getValue(record, 'cargoAutoridad', 'cargo_autoridad'))),
    )
    .map((record, index) =>
      mapAuthority(record, getValue(record, 'cargoAutoridad', 'cargo_autoridad'), index, dynamicHero.imageUrl),
    )

  const hccTeachers = authorityRecords
    .filter((record) =>
      ['estamento docente', 'estamendo docente'].includes(
        normalizeRole(getValue(record, 'cargoAutoridad', 'cargo_autoridad')),
      ),
    )
    .map((record, index) => mapAuthority(record, 'Estamento Docente', index, dynamicHero.imageUrl))

  return {
    authoritiesHero: dynamicHero,
    hccMeta: dynamicHccMeta,
    orgStructure: dynamicOrgStructure,
    directionData,
    hccTeachers,
    hccStudents:
      studentRecords.length > 0
        ? studentRecords.map((s) => mapStudentAuthority(s, dynamicHero.imageUrl))
        : hccStudentsFallback,
    hasApiError:
      teachersResult.status === 'rejected' ||
      studentsResult.status === 'rejected' ||
      sectionsResult.status === 'rejected',
  }
}
