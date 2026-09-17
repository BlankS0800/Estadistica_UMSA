import { httpClient } from '../api/httpClient'
import { seccionPaginaApi } from './seccionPaginaService'

export const staffHero = {
  eyebrow: 'Plantel Institucional',
  title: ['Nuestro', 'Equipo.'],
  description:
    'Profesionales comprometidos con la excelencia académica y el soporte administrativo para la formación de científicos de datos.',
  imageUrl: '/images/institucional/personal_hero.jpeg',
  badgeSymbol: 'omega',
  badgeText: 'Talento Humano',
}

export const teachers = [
  { name: 'Ph.D. Juan Carlos Flores López', role: 'Docente Titular', specs: [], email: 'jcflores@fcpn.edu.bo', degree: 'Ph.D.' },
  { name: 'M.Sc. Ramiro Coa Clemente', role: 'Docente', specs: [], email: 'rcoa@fcpn.edu.bo', degree: 'M.Sc.' },
  { name: 'M.Sc. Nicolás Chávez Quisbert', role: 'Docente / Asociación', specs: [], email: 'nchaves@fcpn.edu.bo', degree: 'M.Sc.' },
  { name: 'Lic. Raúl León Delgado Álvarez', role: 'Docente', specs: [], email: '', degree: 'Lic.' },
  { name: 'Lic. Nilda Gloria Flores Salinas', role: 'Docente / Asociación', specs: [], email: 'nildafloress@hotmail.com', degree: 'Lic.' },
  { name: 'Lic. María de los Ángeles Ramos Boutier', role: 'Docente', specs: [], email: '', degree: 'Lic.' },
  { name: 'Lic. Jaime Tito Pinto Ajhuacho', role: 'Docente', specs: [], email: 'jtito@fcpn.edu.bo', degree: 'Lic.' },
  { name: 'M.Sc. Fernando Oday Rivero Suguiura', role: 'Docente / Asociación', specs: [], email: 'friverosuguiura2004@gmail.com', degree: 'M.Sc.' },
  { name: 'M.Sc. Lucy Gabriela Cuarita Ajno', role: 'Docente', specs: [], email: 'lcuarita@fcpn.edu.bo', degree: 'M.Sc.' },
  { name: 'M.Sc. Dindo Valdez Blanco', role: 'Docente', specs: [], email: 'dvaldez@fcpn.edu.bo', degree: 'M.Sc.' },
  { name: 'Lic. Emma Martha Mancilla Flores', role: 'Docente', specs: [], email: '', degree: 'Lic.' },
  { name: 'Lic. Marisol Paredes Alarcón', role: 'Docente', specs: [], email: 'mparedes@fcpn.edu.bo', degree: 'Lic.' },
  { name: 'M.Sc. Iván Yony Aliaga Cáceres', role: 'Docente', specs: [], email: '', degree: 'M.Sc.' },
  { name: 'Lic. Mario Amilcar Miranda Gonzales', role: 'Docente', specs: [], email: '', degree: 'Lic.' },
  { name: 'M.Sc. Álvaro Limber Chirino Gutiérrez', role: 'Docente', specs: [], email: '', degree: 'M.Sc.' },
  { name: 'Arq. Leticia Mendoza Gómez', role: 'Docente', specs: [], email: '', degree: 'Arq.' },
  { name: 'Lic. Benito Oscar Siñani Beltrán', role: 'Docente', specs: [], email: '', degree: 'Lic.' },
  { name: 'Lic. Juan Chapi Mamani', role: 'Docente', specs: [], email: '', degree: 'Lic.' },
  { name: 'M.Sc. Verónica Cuenca Ramallo', role: 'Docente', specs: [], email: '', degree: 'M.Sc.' },
  { name: 'M.Sc. María Isabel Conde Altamirano', role: 'Docente', specs: [], email: '', degree: 'M.Sc.' },
  { name: 'Lic. Yomar Andoni Machaca Beltrán', role: 'Docente', specs: [], email: '', degree: 'Lic.' },
  { name: 'Lic. Fernando Espinoza Centella', role: 'Docente (Inglés I)', specs: [], email: '', degree: 'Lic.' },
  { name: 'Lic. Javier Taborga Manrique', role: 'Docente (Inglés II)', specs: [], email: '', degree: 'Lic.' },
]

export const admins = [
  { name: 'Silvia Aranibar Silva', role: 'Secretaria Ejecutiva', symbol: 'Delta' },
  { name: 'Alfredo Candia Chambi', role: 'Operador de Computación', symbol: 'Delta' },
  { name: 'Mario Alberto Clavel Salcedo', role: 'Mensajero', symbol: 'Delta' },
  { name: 'Emilia Lidia Daza Mendoza', role: 'Auxiliar de Biblioteca', symbol: 'Delta' },
  { name: 'René Quelca Suntura', role: 'Kardista Académico', symbol: 'Delta' },
  { name: 'Yomar Erika Michel Valle', role: 'Técnico de Registro', symbol: 'Delta' },
  { name: 'Oscar Ramiro Rodríguez Lliulli', role: 'Oficinista', symbol: 'Delta' },
  { name: 'Lidia Mamani Mayta', role: 'Portero Mensajero', symbol: 'Delta' },
  { name: 'Ana María Panca Pérez', role: 'Secretaria IETA', symbol: 'Delta' },
]

export const assistants = [
  { name: 'Richard Daniel Mancilla Mamani', role: 'Auxiliar de Docencia', course: 'Probabilidad I - Estadística I', stats: 'Item 2482' },
  { name: 'Gabriel Yujra Machaca', role: 'Auxiliar de Docencia', course: 'Inv. Operativa I', stats: 'Item 2483' },
  { name: 'Marcelo Sebastian Tudela Toro', role: 'Auxiliar de Docencia', course: 'Inv. Operativa II', stats: 'Item 2484' },
  { name: 'José Alejandro Zegarra Espinoza', role: 'Auxiliar de Docencia', course: 'Teoría de Probabilidad / Muestreo I', stats: 'Item 2486 / 2487' },
  { name: 'Cárdenas Soria Adriana', role: 'Auxiliar de Investigación', course: 'Investigación', stats: 'Item 2485' },
  { name: 'Valentina Valdez Vega', role: 'Auxiliar de Docencia', course: 'Estadística Descriptiva', stats: 'Item 2472' },
  { name: 'Rafaela Jhovana Condori Quino', role: 'Auxiliar de Docencia', course: 'Probabilidad II', stats: 'Item 2473' },
  { name: 'Grover Huanca Flores', role: 'Auxiliar de Docencia', course: 'Inferencia Estadística I', stats: 'Item 2474' },
  { name: 'Carlos Enrique Guzmán Delgado', role: 'Auxiliar de Docencia', course: 'Inferencia Estadística I', stats: 'Item 2475' },
  { name: 'Manuel Alejandro Loayza Medina', role: 'Auxiliar de Docencia', course: 'Inv. Operativa I', stats: 'Item 2476 / 2477' },
  { name: 'Daniel Franklin Céspedes Quispe', role: 'Auxiliar de Investigación', course: 'Investigación', stats: 'Item 2488' },
  { name: 'Cárdenas Soria Alejandro', role: 'Auxiliar de Investigación', course: 'Investigación', stats: 'Item 2478' },
  { name: 'Rode Belén Valeriano Tórrez', role: 'Auxiliar de Interacción', course: 'Interacción', stats: 'Item 2479' },
  { name: 'Laura Elizabeth Quenta Marca', role: 'Auxiliar de Interacción', course: 'Interacción', stats: 'Item 2480' },
  { name: 'Alex Suxo Poma', role: 'Auxiliar de Interacción', course: 'Interacción', stats: 'Item 2481' },
]

export const staffDataFallback = {
  hero: staffHero,
  teachers: teachers.map((t) => ({ ...t, photo: staffHero.imageUrl })),
  admins: admins.map((a) => ({ ...a, photo: staffHero.imageUrl })),
  assistants: assistants.map((aux) => ({ ...aux, photo: staffHero.imageUrl })),
  hasApiError: false,
}

const STAFF_PAGE_SLUG = '/institucional/docentes'

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

const readValue = (record, camelCaseKey, snakeCaseKey, fallback = null) =>
  record?.[camelCaseKey] ?? record?.[snakeCaseKey] ?? fallback

const normalizeFallbackTeacher = (teacher) => ({
  ...teacher,
  name: teacher.name.replace(/^(Ph\.D\.|M\.Sc\.|Lic\.|Arq\.)\s*/, ''),
  summary: '',
})

const mapTeacher = (record) => {
  const type = readValue(record, 'tipo', 'tipo', 'Interino')
  const summary = readValue(record, 'resumenCv', 'resumen_cv', '')

  return {
    id: record.id,
    name: readValue(record, 'nombre', 'nombre', ''),
    role: `Docente ${type}`,
    specs: summary ? [summary] : [],
    summary,
    email: readValue(record, 'correoInstitucional', 'correo_institucional', ''),
    degree: readValue(record, 'gradoAcademico', 'grado_academico', 'Lic.'),
    type,
    photo: readValue(record, 'imagen', 'imagen', readValue(record, 'foto', 'foto', '/')),
  }
}

const mapAdmin = (record) => ({
  id: record.id,
  name: readValue(record, 'nombre', 'nombre', ''),
  role: readValue(record, 'cargo', 'cargo', ''),
  email: readValue(record, 'correoInstitucional', 'correo_institucional', ''),
  photo: readValue(record, 'imagen', 'imagen', readValue(record, 'foto', 'foto', '/')),
  symbol: 'Delta',
})

const mapAssistant = (record) => {
  const type = readValue(record, 'tipo', 'tipo', 'academico')
  const isAcademic = type === 'academico'
  const role =
    {
      academico: 'Auxiliar de Docencia',
      investigacion: 'Auxiliar de Investigación',
      'interaccion social': 'Auxiliar de Interacción Social',
    }[type] || 'Auxiliar'

  return {
    id: record.id,
    name: readValue(record, 'nombre', 'nombre', ''),
    role,
    type,
    photo: readValue(record, 'imagen', 'imagen', readValue(record, 'foto', 'foto', '/')),
    course: isAcademic ? readValue(record, 'materia', 'materia') : null,
    parallel: isAcademic ? readValue(record, 'paralelo', 'paralelo') : null,
    days: isAcademic ? readValue(record, 'diasAuxiliatura', 'dias_auxiliatura') : null,
    schedule: isAcademic ? readValue(record, 'horarioAuxiliatura', 'horario_auxiliatura') : null,
    classroom: isAcademic ? readValue(record, 'aula', 'aula') : null,
  }
}

const loadEndpoint = (path) => httpClient(path).then(getRecords)

export async function getStaffData() {
  const results = await Promise.allSettled([
    loadEndpoint('/plantel/docentes'),
    loadEndpoint('/plantel/administrativos'),
    loadEndpoint('/plantel/auxiliares'),
    seccionPaginaApi.list(STAFF_PAGE_SLUG),
  ])

  const [docentesResult, adminsResult, auxResult, sectionResult] = results

  const sectionRecords =
    sectionResult.status === 'fulfilled' && Array.isArray(sectionResult.value)
      ? sectionResult.value
      : []

  const val = (key, fallback) => getRecordValue(sectionRecords, key, fallback)

  const dynamicHero = {
    ...staffHero,
    eyebrow: val('plantel_inicio_etiqueta', staffHero.eyebrow),
    title: [
      val('plantel_inicio_titulo_01', staffHero.title[0]),
      val('plantel_inicio_titulo_02', staffHero.title[1]),
    ],
    description: val('plantel_inicio_descripcion', staffHero.description),
    imageUrl: val('plantel_inicio_imagen', staffHero.imageUrl),
    badgeSymbol: val('plantel_inicio_badge_simbolo', staffHero.badgeSymbol),
    badgeText: val('plantel_inicio_badge_texto', staffHero.badgeText),
  }

  const teachersData =
    docentesResult.status === 'fulfilled' && docentesResult.value.length > 0
      ? docentesResult.value.map(mapTeacher)
      : teachers.map(normalizeFallbackTeacher)

  const adminsData =
    adminsResult.status === 'fulfilled' && adminsResult.value.length > 0
      ? adminsResult.value.map(mapAdmin)
      : admins

  const assistantsData =
    auxResult.status === 'fulfilled' && auxResult.value.length > 0
      ? auxResult.value.map(mapAssistant)
      : assistants

  return {
    hero: dynamicHero,
    teachers: teachersData,
    admins: adminsData,
    assistants: assistantsData,
    hasApiError: results.some((r) => r.status === 'rejected'),
  }
}
