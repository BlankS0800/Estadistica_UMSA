import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { seccionPaginaService } from '../services/seccion-pagina.service'
import { authStateService } from '../services/auth-state.service'
import { uploadService } from '../services/upload.service'
import PlantelCrud from '../components/PlantelCrud'
import EstudianteAutoridadCrud from '../components/EstudianteAutoridadCrud'
import ConvenioCrud from '../components/ConvenioCrud'
import MateriaPlanCrud from '../components/MateriaPlanCrud'
import ConvalidaCrud from '../components/ConvalidaCrud'
import ConvocatoriaCrud from '../components/ConvocatoriaCrud'
import ProgramaCrud from '../components/ProgramaCrud'
import ModuloCrud from '../components/ModuloCrud'
import DirectivoEstudianteCrud from '../components/DirectivoEstudianteCrud'
import ConvocatoriaAuxiliaturaCrud from '../components/ConvocatoriaAuxiliaturaCrud'
import PasantiaCrud from '../components/PasantiaCrud'
import PublicacionesEstudiantilesCrud from '../components/PublicacionesEstudiantilesCrud'
import MatrizCientificaCrud from '../components/MatrizCientificaCrud'
import AutorCrud from '../components/AutorCrud'
import LibroCrud from '../components/LibroCrud'
import RevistaCrud from '../components/RevistaCrud'
import DocumentoDigitalCrud from '../components/DocumentoDigitalCrud'
import TesisCrud from '../components/TesisCrud'
import BancoDatosCrud from '../components/BancoDatosCrud'
import DatosArchivoCrud from '../components/DatosArchivoCrud'
import NoticiaCrud from '../components/NoticiaCrud'
import EventoCrud from '../components/EventoCrud'

import {
  IconSearch,
  IconFileText,
  IconImage,
  IconHandshake,
  IconGraduationCap,
  IconUsers,
  IconChevronDown,
  IconArrowLeft,
  IconArrowRight,
  IconClose,
  IconSave,
  IconUpload,
  IconLogOut,
  IconLock,
  IconCheck,
  IconAlertCircle,
  IconBookOpen,
  IconCalendar,
  IconLayers,
  IconTrash,
  IconCopy,
  IconExternalLink,
} from '../components/Icons'

const pageGroups = [
  { label: 'Inicio', items: [{ slug: '/', label: 'Inicio' }] },
  {
    label: 'Institucional',
    items: [
      { slug: '/institucional/acerca', label: 'Acerca de la carrera' },
      { slug: '/institucional/acreditacion', label: 'Acreditación y evaluación continua', aliases: ['/acreditacion'] },
      { slug: '/institucional/autoridades', label: 'Autoridades' },
      { slug: '/institucional/docentes', label: 'Plantel docente y administrativo' },
      { slug: '/institucional/convenios', label: 'Convenios interinstitucionales' },
      { slug: '/institucional/reglamentos', label: 'Reglamentos y resoluciones' },
    ],
  },
  {
    label: 'Pregrado',
    items: [
      { slug: '/pregrado/perfil-profesional', label: 'Perfil profesional' },
      { slug: '/pregrado/malla-curricular', label: 'Malla curricular' },
      { slug: '/pregrado/calendario-academico', label: 'Calendario académico' },
      { slug: '/pregrado/admisiones', label: 'Admisiones' },
      { slug: '/pregrado/convalidaciones', label: 'Convalidaciones' },
      { slug: '/pregrado/modalidades-graduacion', label: 'Modalidades de graduación' },
    ],
  },
  {
    label: 'Postgrado',
    items: [
      { slug: '/postgrado/maestria-terminal', label: 'Maestría terminal', aliases: ['/postgrado'] },
      { slug: '/postgrado/maestria-autofinanciada', label: 'Maestría autofinanciada', aliases: ['/postgrado/autofinanciada'] },
      { slug: '/postgrado/diplomados', label: 'Diplomados y especialidades', aliases: ['/postgrado/diplomados-especialidades'] },
    ],
  },
  {
    label: 'Estudiantes',
    items: [
      { slug: '/estudiantes/guia-seguimiento-tramites', label: 'Trámites estudiantiles' },
      { slug: '/estudiantes/centro-estudiantes', label: 'Centro de estudiantes' },
      { slug: '/estudiantes/convocatorias-auxiliaturas', label: 'Auxiliaturas' },
      { slug: '/estudiantes/pasantias-bolsa-trabajo', label: 'Pasantías y bolsa de trabajo' },
      { slug: '/estudiantes/sociedad-cientifica', label: 'Sociedad científica' },
    ],
  },
  {
    label: 'Investigación',
    items: [
      { slug: '/investigacion/acerca-ieta', label: 'Acerca del IETA' },
      { slug: '/investigacion/personal', label: 'Personal de investigación' },
      { slug: '/investigacion/proyectos', label: 'Proyectos' },
      { slug: '/investigacion/revista-varianza', label: 'Revista Varianza' },
      { slug: '/investigacion/autores-varianza', label: 'Autores Varianza' },
      { slug: '/investigacion/servicios', label: 'Servicios' },
      { slug: '/investigacion/contacto', label: 'Contacto de investigación' },
    ],
  },
  {
    label: 'Recursos',
    items: [
      { slug: '/recursos/biblioteca', label: 'Biblioteca' },
      { slug: '/recursos/banco-datos', label: 'Banco de datos' },
      { slug: '/recursos/revistas', label: 'Revistas' },
      { slug: '/recursos/tesis', label: 'Tesis' },
      { slug: '/recursos/documentos', label: 'Documentos' },

    ],
  },
  { label: 'Contacto', items: [{ slug: '/contacto', label: 'Contacto' }] },
]

const pageTabs = pageGroups.flatMap((group) => group.items)

const KNOWN_GROUP_LABELS = {
  acreditacion: 'Acreditación',
  hito: 'Hitos Históricos',
  ieta: 'IETA',
  inicio: 'Inicio',
  mision: 'Misión',
  vision: 'Visión',
  objetivo: 'Objetivos',
  valor: 'Valores',
  chip: 'Chips Informativos',
  credencial: 'Credenciales y Acreditaciones',
  cta: 'Llamado a la Acción (CTA)',
  impacto: 'Impacto Institucional',
  hero: 'Portada (Hero)',
  contacto: 'Contacto',
  perfil: 'Perfil Profesional',
  admision: 'Admisiones',
  admisiones: 'Admisiones',
  requisito: 'Requisitos',
  requisitos: 'Requisitos',
  malla: 'Malla Curricular',
  convenio: 'Convenios',
  reglamento: 'Reglamentos',
  tramite: 'Trámites',
  tramites: 'Trámites',
  pasantia: 'Pasantías',
  pasantias: 'Pasantías',
  revista: 'Revistas y Publicaciones',
  biblioteca: 'Biblioteca',
  aptitud: 'Aptitudes',
  competencias: 'Competencias de Grado',
  salidas: 'Salidas Laborales',
  campo: 'Campo Ocupacional',
  convalidacion: 'Convalidaciones',
  calendario: 'Calendario Académico',
  graduacion: 'Modalidades de Graduación',
  auxiliatura: 'Auxiliaturas',
  sociedad: 'Sociedad Científica',
  directiva: 'Directiva',
  cee: 'Centro de Estudiantes',
  ciclos: 'Ciclos Formativos',
  electivas: 'Materias Electivas',
  electiva: 'Seminarios Electivos',
  areas: 'Áreas de Especialidad',
  leyenda: 'Leyenda de Áreas',
  mesa: 'Mesa de Exámenes',
  regular: 'Semestre Regular',
  comunicado: 'Comunicados Oficiales',
  descarga: 'Descargas y Resoluciones',
  nota: 'Notas y Disposiciones',
  especial: 'Admisiones Especiales',
  cronograma: 'Cronograma y Gestiones',
  intro: 'Introducción',
  pasos: 'Pasos del Proceso',
  procedimiento: 'Procedimientos',
  taller: 'Taller de Titulación',
  modalidad: 'Modalidades de Titulación',
  modalidades: 'Modalidades de Práctica',
  excelencia: 'Graduación por Excelencia',
  curriculum: 'Plan Modular y Módulos',
  inversion: 'Inversión y Cuotas',
  oferta: 'Oferta Académica',
  ofertas: 'Bolsa de Plazas Activas',
  recursos: 'Recursos y Guías',
  documentos: 'Documentos Oficiales',
  sistema: 'Sistemas de Seguimiento',
  stats: 'Estadísticas y Métricas',
  servicios: 'Servicios Estudiantiles',
  estructura: 'Estructura Democrática',
  liderazgo: 'Representantes y Liderazgo',
  canal: 'Canales de Comunicación',
  footer: 'Pie de Página',
  guia: 'Guía de Postulación',
  alerta: 'Avisos y Comunicados',
  lineas: 'Líneas de Investigación',
  nodo: 'Nodos de Estudio',
  beneficios: 'Beneficios para Miembros',
  testimonio: 'Testimonios',
  catalogo: 'Catálogo de Libros',
  autores: 'Autores Destacados',
  varianza: 'Revista Varianza',
  directrices: 'Directrices para Autores',
  archivero: 'Archivero de Documentos',
  kardex: 'Formatos Kardex',
  sello: 'Legalizaciones y Sello',
  repositorio: 'Repositorio de Tesis',
  banco: 'Banco de Datos Estadísticos',
  archivos: 'Archivos y Descargas de Datos',
  descargas: 'Descarga de Datasets',
  biblio: 'Biblioteca',
  autor: 'Autores',
  libro: 'Libros',
  tesis: 'Tesis de Grado',
  datos: 'Banco de Datos',
}

function formatGroupLabel(groupKey) {
  if (KNOWN_GROUP_LABELS[groupKey]) {
    return KNOWN_GROUP_LABELS[groupKey]
  }
  if (!groupKey) return 'General'
  return groupKey.charAt(0).toUpperCase() + groupKey.slice(1)
}

const FIELD_WORD_MAP = {
  titulo: 'Título',
  subtitulo: 'Subtítulo',
  descripcion: 'Descripción',
  desc: 'Descripción',
  texto: 'Texto',
  contenido: 'Contenido',
  imagen: 'Imagen',
  img: 'Imagen',
  foto: 'Fotografía',
  banner: 'Banner',
  hero: 'Portada',
  badge: 'Etiqueta superior',
  etiqueta: 'Etiqueta',
  cta: 'Botón de acción',
  boton: 'Botón',
  btn: 'Botón',
  url: 'Enlace',
  link: 'Enlace',
  telefono: 'Teléfono',
  correo: 'Correo electrónico',
  email: 'Correo electrónico',
  direccion: 'Dirección',
  horario: 'Horario',
  ubicacion: 'Ubicación',
  mision: 'Misión',
  vision: 'Visión',
  objetivo: 'Objetivo',
  resumen: 'Resumen',
  nota: 'Nota',
  aviso: 'Aviso',
  alerta: 'Alerta',
  fecha: 'Fecha',
  periodo: 'Periodo',
  nombre: 'Nombre',
  cargo: 'Cargo',
  pie: 'Pie de página',
  kpi: 'Indicador',
  numero: 'Número',
  valor: 'Valor',
  label: 'Etiqueta',
  title: 'Título',
  subtitle: 'Subtítulo',
}

function formatFieldLabel(subKey, tipo) {
  if (!subKey) return tipo === 'imagen' ? 'Imagen' : 'Texto'
  const words = subKey
    .split('_')
    .filter(Boolean)
    .map((word, index) => {
      const lower = word.toLowerCase()
      if (FIELD_WORD_MAP[lower]) {
        return index === 0
          ? FIELD_WORD_MAP[lower]
          : FIELD_WORD_MAP[lower].toLowerCase()
      }
      if (/^\d+$/.test(word)) return `#${word}`
      return index === 0
        ? lower.charAt(0).toUpperCase() + lower.slice(1)
        : lower
    })
  return words.join(' ')
}

const QUICK_ACCESS_ITEMS = [
  { id: 'noticias', label: 'Noticias', slug: '/', mode: 'crud', description: 'Publicar o editar noticias' },
  { id: 'agenda', label: 'Agenda y Eventos', slug: '/', mode: 'eventos', description: 'Fechas y actividades' },
  { id: 'convocatorias', label: 'Admisiones', slug: '/pregrado/admisiones', mode: 'crud', description: 'Convocatorias vigentes' },
  { id: 'auxiliaturas', label: 'Auxiliaturas', slug: '/estudiantes/convocatorias-auxiliaturas', mode: 'crud', description: 'Plazas y requisitos' },
  { id: 'docentes', label: 'Docentes', slug: '/institucional/docentes', mode: 'crud', description: 'Plantel docente' },
  { id: 'calendario', label: 'Calendario', slug: '/pregrado/calendario-academico', mode: 'textos', description: 'Fechas académicas' },
]

function normalizeRawGroup(g) {
  if (g === 'serv') return 'servicios'
  if (g === 'mod') return 'modalidades'
  if (g === 'req') return 'requisitos'
  if (g === 'ben') return 'beneficios'
  if (g === 'paso') return 'pasos'
  if (g === 'linea') return 'lineas'
  if (g === 'tramite') return 'tramites'
  if (g === 'item') return 'tramites'
  if (g === 'rev') return 'revista'
  if (g === 'repo') return 'revista'
  if (g === 'doc') return 'documentos'
  if (g === 'proceso') return 'pasos'
  return g
}

function buildSectionGroups(pageSections) {
  if (!pageSections || pageSections.length === 0) return []

  const keys = pageSections.map((s) => s.claveCampo)
  const p2Counts = {}
  const p1Counts = {}

  keys.forEach((key) => {
    const parts = key.split('_')
    if (parts.length >= 2) {
      const p2 = parts[0] + '_' + parts[1]
      p2Counts[p2] = (p2Counts[p2] || 0) + 1
    }
    if (parts.length >= 1) {
      const p1 = parts[0]
      p1Counts[p1] = (p1Counts[p1] || 0) + 1
    }
  })

  let commonPrefix = ''
  const sorted2 = Object.entries(p2Counts).sort((a, b) => b[1] - a[1])
  if (sorted2.length > 0 && sorted2[0][1] / keys.length >= 0.6) {
    commonPrefix = sorted2[0][0] + '_'
  } else {
    const sorted1 = Object.entries(p1Counts).sort((a, b) => b[1] - a[1])
    if (sorted1.length > 0 && sorted1[0][1] / keys.length >= 0.6) {
      commonPrefix = sorted1[0][0] + '_'
    }
  }

  const groupsMap = new Map()

  pageSections.forEach((section) => {
    let keyAfterPrefix = section.claveCampo
    if (commonPrefix && keyAfterPrefix.startsWith(commonPrefix)) {
      keyAfterPrefix = keyAfterPrefix.slice(commonPrefix.length)
    }

    const parts = keyAfterPrefix.split('_')
    const rawSegment = (parts[0] || 'general').toLowerCase()
    const rawGroup = normalizeRawGroup(rawSegment)
    const subKey = parts.length > 1 ? parts.slice(1).join('_') : parts[0]

    const enhancedSection = {
      ...section,
      groupKey: rawGroup,
      subKey,
    }

    if (!groupsMap.has(rawGroup)) {
      groupsMap.set(rawGroup, {
        key: rawGroup,
        label: formatGroupLabel(rawGroup),
        sections: [],
      })
    }

    groupsMap.get(rawGroup).sections.push(enhancedSection)
  })

  return Array.from(groupsMap.values())
}

export default function TextEditorPage() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const navRef = useRef(null)
  const [sections, setSections] = useState([])
  const [savedValues, setSavedValues] = useState({})
  const [activePageSlug, setActivePageSlug] = useState('/')
  const [openNavGroup, setOpenNavGroup] = useState(null)
  const [activeKey, setActiveKey] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [savingAll, setSavingAll] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [copiedUrl, setCopiedUrl] = useState(false)
  const [previewError, setPreviewError] = useState(false)
  const [showAdvancedImageUrl, setShowAdvancedImageUrl] = useState(false)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState('')
  const [toast, setToast] = useState(null)

  // UI state for group organization, search, and collapsible accordions
  const [selectedGroupFilter, setSelectedGroupFilter] = useState('all')
  const [openSectionGroups, setOpenSectionGroups] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  const showToast = (type, text) => {
    setToast({ type, text })
  }

  useEffect(() => {
    if (!toast) return undefined
    const timer = setTimeout(() => setToast(null), 3500)
    return () => clearTimeout(timer)
  }, [toast])

  // Cerrar menú desplegable superior al hacer clic fuera
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenNavGroup(null)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  useEffect(() => {
    let isMounted = true

    seccionPaginaService
      .findAll()
      .then((data) => {
        if (!isMounted) return
        setSections(data)
        const initialSaved = {}
        data.forEach((s) => {
          initialSaved[s.claveCampo] = s.valor ?? ''
        })
        setSavedValues(initialSaved)
        const initialPageSlug = findInitialPage(data)
        setActivePageSlug(initialPageSlug)
        setActiveKey(
          data.find((section) => normalizePageSlug(section.paginaSlug) === initialPageSlug)?.claveCampo ?? '',
        )
      })
      .catch((requestError) => {
        if (isMounted) setError(requestError.message)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const pageSections = sections.filter(
    (section) => normalizePageSlug(section.paginaSlug) === activePageSlug,
  )
  const activeSection = pageSections.find((section) => section.claveCampo === activeKey)

  const sectionGroups = useMemo(() => {
    return buildSectionGroups(pageSections)
  }, [pageSections])

  const filteredGroups = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    return sectionGroups
      .filter((group) => {
        if (selectedGroupFilter !== 'all' && group.key !== selectedGroupFilter) {
          return false
        }
        return true
      })
      .map((group) => {
        if (!term) return group
        const matchingSections = group.sections.filter(
          (s) =>
            s.claveCampo.toLowerCase().includes(term) ||
            s.subKey.toLowerCase().includes(term) ||
            (s.valor && s.valor.toLowerCase().includes(term)),
        )
        return {
          ...group,
          sections: matchingSections,
        }
      })
      .filter((group) => group.sections.length > 0)
  }, [sectionGroups, selectedGroupFilter, searchTerm])

  const activeGroup = sectionGroups.find((g) =>
    g.sections.some((s) => s.claveCampo === activeKey),
  )
  const activeGroupSections = activeGroup ? activeGroup.sections : []
  const activeIndexInGroup = activeGroupSections.findIndex(
    (s) => s.claveCampo === activeKey,
  )

  const [pageMode, setPageMode] = useState('textos')

  const hasCrudForPage = (slug) =>
    [
      '/institucional/convenios',
      '/institucional/autoridades',
      '/institucional/docentes',
      '/pregrado/malla-curricular',
      '/pregrado/convalidaciones',
      '/pregrado/admisiones',
      '/postgrado/maestria-terminal',
      '/postgrado',
      '/postgrado/maestria-autofinanciada',
      '/postgrado/autofinanciada',
      '/postgrado/diplomados',
      '/postgrado/diplomados-especialidades',
      '/estudiantes/centro-estudiantes',
      '/estudiantes/convocatorias-auxiliaturas',
      '/estudiantes/auxiliaturas',
      '/estudiantes/pasantias-bolsa-trabajo',
      '/estudiantes/pasantias',
      '/estudiantes/sociedad-cientifica',
      '/estudiantes/sociedades-cientificas',
      '/recursos/biblioteca',
      '/recursos/banco-datos',
      '/recursos/revistas',
      '/recursos/tesis',
      '/recursos/documentos',
      '/',
    ].includes(slug)

  const changePage = (pageSlug) => {
    setActivePageSlug(pageSlug)
    setSelectedGroupFilter('all')
    setSearchTerm('')
    const targetSections = sections.filter(
      (section) => normalizePageSlug(section.paginaSlug) === pageSlug,
    )
    setActiveKey(targetSections[0]?.claveCampo ?? '')
    setMessage(null)
    setPageMode('textos')
  }

  const toggleGroup = (groupKey, currentlyOpen) => {
    setOpenSectionGroups((prev) => ({
      ...prev,
      [groupKey]: !currentlyOpen,
    }))
  }

  const expandAllGroups = () => {
    const allOpen = {}
    sectionGroups.forEach((g) => {
      allOpen[g.key] = true
    })
    setOpenSectionGroups(allOpen)
  }

  const collapseAllGroups = () => {
    setOpenSectionGroups({})
  }

  const dirtyKeys = useMemo(() => {
    const set = new Set()
    sections.forEach((s) => {
      if ((s.valor ?? '') !== (savedValues[s.claveCampo] ?? '')) {
        set.add(s.claveCampo)
      }
    })
    return set
  }, [sections, savedValues])

  const isActiveDirty = activeSection ? dirtyKeys.has(activeSection.claveCampo) : false
  const activeEnhancedSection = activeGroupSections.find((s) => s.claveCampo === activeKey)
  const activeFriendlyLabel = activeEnhancedSection
    ? formatFieldLabel(activeEnhancedSection.subKey, activeEnhancedSection.tipo)
    : activeSection
    ? formatFieldLabel(activeSection.claveCampo, activeSection.tipo)
    : ''

  // Proteger contra cierre accidental de pestaña con cambios sin guardar
  useEffect(() => {
    if (dirtyKeys.size === 0) return undefined
    const handleBeforeUnload = (event) => {
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [dirtyKeys.size])

  const selectSection = (key) => {
    setActiveKey(key)
    setPageMode('textos')
    setMessage(null)
    setError('')
    setPreviewError(false)
    setShowAdvancedImageUrl(false)
  }

  const openQuickAccess = (item) => {
    setActivePageSlug(item.slug)
    setSelectedGroupFilter('all')
    setSearchTerm('')
    setOpenNavGroup(null)
    const targetSections = sections.filter(
      (section) => normalizePageSlug(section.paginaSlug) === item.slug,
    )
    setActiveKey(targetSections[0]?.claveCampo ?? '')
    setMessage(null)
    setError('')
    setPageMode(item.mode)
  }

  const updateActiveSection = (field, value) => {
    setSections((currentSections) =>
      currentSections.map((section) =>
        section.claveCampo === activeKey ? { ...section, [field]: value } : section,
      ),
    )
    setMessage(null)
    if (field === 'valor') {
      setPreviewError(false)
    }
  }

  const discardActiveChanges = () => {
    if (!activeSection) return
    const original = savedValues[activeSection.claveCampo] ?? ''
    updateActiveSection('valor', original)
    setMessage('Cambios descartados')
    showToast('info', 'Se restauró el último valor guardado')
  }

  const saveSection = async () => {
    if (!activeSection || !activeSection.claveCampo.trim()) return

    setSaving(true)
    setError('')
    setMessage(null)

    try {
      await seccionPaginaService.save(activeSection)
      setSavedValues((prev) => ({
        ...prev,
        [activeSection.claveCampo]: activeSection.valor ?? '',
      }))
      setMessage('Cambios guardados con éxito')
      showToast('success', 'Cambios guardados y publicados en el portal')
    } catch (requestError) {
      setError(requestError.message)
      showToast('error', requestError.message || 'No se pudo guardar')
    } finally {
      setSaving(false)
    }
  }

  const saveAllDirty = async () => {
    const dirtySections = sections.filter((s) => dirtyKeys.has(s.claveCampo))
    if (dirtySections.length === 0) return

    setSavingAll(true)
    setError('')
    setMessage(null)

    try {
      await Promise.all(dirtySections.map((s) => seccionPaginaService.save(s)))
      setSavedValues((prev) => {
        const next = { ...prev }
        dirtySections.forEach((s) => {
          next[s.claveCampo] = s.valor ?? ''
        })
        return next
      })
      const msg = `${dirtySections.length} ${dirtySections.length === 1 ? 'sección guardada' : 'secciones guardadas'} con éxito`
      setMessage(msg)
      showToast('success', msg)
    } catch (requestError) {
      setError(requestError.message)
      showToast('error', requestError.message || 'Error al guardar cambios pendientes')
    } finally {
      setSavingAll(false)
    }
  }

  // Atajo de teclado Ctrl+S / Cmd+S para guardar la sección actual
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
        if (pageMode === 'textos' && activeSection && !saving) {
          event.preventDefault()
          saveSection()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  const handleUploadFile = async (file) => {
    if (!file) return

    if (!file.type.startsWith('image/') || file.type === 'image/svg+xml') {
      setError('Por favor selecciona una imagen válida (JPG, PNG, WEBP o GIF).')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('El tamaño de la imagen no debe superar los 10 MB.')
      return
    }

    setUploading(true)
    setError('')
    setMessage(null)

    try {
      const result = await uploadService.uploadImage(file)
      updateActiveSection('valor', result.url)
      setMessage('Imagen cargada. Haz clic en "Guardar cambios" para publicarla.')
      showToast('info', 'Imagen subida. Recuerda presionar "Guardar cambios".')
    } catch (uploadError) {
      setError(uploadError.message || 'Error al subir la imagen al servidor.')
      showToast('error', uploadError.message || 'Error al subir la imagen')
    } finally {
      setUploading(false)
    }
  }

  const handleImageFileChange = (event) => {
    const [file] = event.target.files
    if (file) handleUploadFile(file)
    event.target.value = ''
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const [file] = e.dataTransfer.files
    if (file) handleUploadFile(file)
  }

  const copyImageUrl = () => {
    if (!activeSection?.valor) return
    navigator.clipboard.writeText(activeSection.valor)
    setCopiedUrl(true)
    setTimeout(() => setCopiedUrl(false), 2000)
  }

  const signOut = () => {
    authStateService.signOut()
    navigate('/admin/login')
  }

  const activePageTitle =
    pageTabs.find((tab) => tab.slug === activePageSlug)?.label ?? activePageSlug

  if (loading) {
    return <main className="min-h-screen p-8 text-umsa-text-suave">Cargando editor...</main>
  }

  return (
    <main className="min-h-screen bg-slate-100 p-4 text-slate-800 sm:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-umsa-orange">
              Administración de contenido
            </p>
            <h1 className="text-2xl font-bold text-umsa-blue sm:text-3xl">Panel de edición</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {dirtyKeys.size > 0 && (
              <button
                type="button"
                onClick={saveAllDirty}
                disabled={savingAll}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-white shadow-xs transition hover:bg-amber-600 disabled:opacity-50"
              >
                <IconSave className="h-4 w-4" />
                <span>
                  {savingAll
                    ? 'Guardando todo...'
                    : `Guardar pendientes (${dirtyKeys.size})`}
                </span>
              </button>
            )}
            <a
              href={activePageSlug}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-umsa-blue transition hover:border-umsa-blue hover:bg-sky-100 shadow-2xs"
            >
              <IconExternalLink className="h-4 w-4" />
              <span>Ver página en vivo</span>
            </a>
            <button
              type="button"
              onClick={signOut}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-umsa-blue hover:text-umsa-blue shadow-2xs"
            >
              <IconLogOut className="h-4 w-4 text-slate-500" />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </div>

        {/* Accesos rápidos para tareas frecuentes */}
        <div className="mb-5 rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Accesos rápidos · ¿Qué deseas actualizar hoy?
            </p>
            <span className="hidden text-xs text-slate-400 sm:inline">
              Usa <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] text-slate-600">Ctrl + S</kbd> para guardar rápido
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {QUICK_ACCESS_ITEMS.map((item) => {
              const isCurrent = activePageSlug === item.slug && pageMode === item.mode
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openQuickAccess(item)}
                  className={`flex flex-col rounded-lg border px-3 py-2 text-left transition ${
                    isCurrent
                      ? 'border-umsa-blue bg-sky-50 text-umsa-blue shadow-2xs'
                      : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:border-sky-300 hover:bg-white'
                  }`}
                >
                  <span className="text-xs font-bold">{item.label}</span>
                  <span className="mt-0.5 truncate text-[11px] text-slate-500">{item.description}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Page navigation tabs */}
        <div ref={navRef} className="relative z-10 mb-4 flex flex-wrap gap-1 border-b border-slate-200 pb-1">
          {pageGroups.map((group, groupIndex) => {
            const groupHasActivePage = group.items.some((item) => item.slug === activePageSlug)
            const groupSectionCount = group.items.reduce(
              (total, item) =>
                total + sections.filter((section) => normalizePageSlug(section.paginaSlug) === item.slug).length,
              0,
            )

            if (group.items.length === 1) {
              const [tab] = group.items

              return (
                <button
                  key={tab.slug}
                  type="button"
                  onClick={() => changePage(tab.slug)}
                  className={`rounded-t-lg px-4 py-3 text-sm font-semibold transition ${
                    activePageSlug === tab.slug
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-200 hover:text-umsa-blue'
                  }`}
                >
                  {group.label}
                </button>
              )
            }

            return (
              <div key={group.label} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenNavGroup(openNavGroup === groupIndex ? null : groupIndex)}
                  className={`rounded-t-lg px-4 py-3 text-sm font-semibold transition ${
                    groupHasActivePage
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-200 hover:text-umsa-blue'
                  }`}
                >
                  {group.label}
                  <IconChevronDown
                    className={`ml-2 inline-block h-3.5 w-3.5 transition-transform duration-200 ${
                      openNavGroup === groupIndex ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openNavGroup === groupIndex && (
                  <div className="absolute left-0 top-full z-20 min-w-72 rounded-b-xl rounded-tr-xl border border-slate-200 bg-white p-2 shadow-xl">
                    {group.items.map((tab) => {
                      const sectionCount = sections.filter(
                        (section) => normalizePageSlug(section.paginaSlug) === tab.slug,
                      ).length

                      return (
                        <button
                          key={tab.slug}
                          type="button"
                          onClick={() => {
                            changePage(tab.slug)
                            setOpenNavGroup(null)
                          }}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                            activePageSlug === tab.slug
                              ? 'bg-sky-50 font-semibold text-umsa-blue'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-umsa-blue'
                          }`}
                        >
                          <span>{tab.label}</span>
                          <span className="ml-4 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 font-medium">
                            {sectionCount}
                          </span>
                        </button>
                      )
                    })}
                    {groupSectionCount === 0 && (
                      <p className="px-3 py-2 text-xs text-slate-400">Sin contenido registrado</p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Main Editor Container */}
        <div className="grid min-h-[660px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:grid-cols-[340px_1fr]">
          {/* Sidebar with Grouped Sections */}
          <aside className="flex flex-col border-b border-slate-200 bg-slate-50 lg:border-b-0 lg:border-r">
            {/* Sidebar header */}
            <div className="border-b border-slate-200 bg-white/70 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Secciones de página
                </h2>
                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700">
                  {pageSections.length} {pageSections.length === 1 ? 'campo' : 'campos'}
                </span>
              </div>
              <p className="mt-1 truncate text-sm font-bold text-umsa-blue">
                {activePageTitle}
              </p>

              {/* Search bar */}
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Buscar clave, título o contenido..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white py-1.5 pl-8 pr-7 text-xs text-slate-800 outline-none placeholder:text-slate-400 focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
                />
                <span className="pointer-events-none absolute left-2.5 top-2.5 text-slate-400">
                  <IconSearch className="h-3.5 w-3.5" />
                </span>
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-2 text-slate-400 hover:text-slate-700 transition"
                    title="Limpiar búsqueda"
                  >
                    <IconClose className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Group filter pills */}
              {sectionGroups.length > 1 && (
                <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedGroupFilter('all')}
                    className={`whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                      selectedGroupFilter === 'all'
                        ? 'bg-umsa-blue text-white shadow-xs'
                        : 'bg-slate-200/80 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    Todos ({pageSections.length})
                  </button>
                  {sectionGroups.map((group) => (
                    <button
                      key={group.key}
                      type="button"
                      onClick={() => setSelectedGroupFilter(group.key)}
                      className={`whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                        selectedGroupFilter === group.key
                          ? 'bg-umsa-blue text-white shadow-xs'
                          : 'bg-slate-200/80 text-slate-600 hover:bg-slate-300'
                      }`}
                    >
                      {group.label} ({group.sections.length})
                    </button>
                  ))}
                </div>
              )}

              {/* Expand / Collapse all controls */}
              {selectedGroupFilter === 'all' && sectionGroups.length > 1 && (
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500">
                  <span>
                    {filteredGroups.length} grupo{filteredGroups.length !== 1 ? 's' : ''}
                  </span>
                  <div className="flex gap-2 font-medium">
                    <button
                      type="button"
                      onClick={expandAllGroups}
                      className="text-umsa-blue hover:underline"
                    >
                      Expandir todos
                    </button>
                    <span>·</span>
                    <button
                      type="button"
                      onClick={collapseAllGroups}
                      className="text-slate-500 hover:text-slate-800 hover:underline"
                    >
                      Colapsar todos
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion List */}
            <div className="max-h-[calc(100vh-270px)] flex-1 space-y-2.5 overflow-y-auto p-3">
              {filteredGroups.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-400">
                  {searchTerm ? (
                    <>
                      No se encontraron secciones que coincidan con &quot;{searchTerm}&quot;.
                      <button
                        type="button"
                        onClick={() => setSearchTerm('')}
                        className="mt-2 block w-full text-center font-semibold text-umsa-blue hover:underline"
                      >
                        Limpiar búsqueda
                      </button>
                    </>
                  ) : (
                    'No hay secciones disponibles para esta vista.'
                  )}
                </div>
              ) : (
                filteredGroups.map((group) => {
                  const hasActiveSection = group.sections.some(
                    (section) => section.claveCampo === activeKey,
                  )
                  const isOpen = searchTerm
                    ? true
                    : openSectionGroups[group.key] !== undefined
                    ? openSectionGroups[group.key]
                    : hasActiveSection

                  return (
                    <div
                      key={group.key}
                      className={`overflow-hidden rounded-xl border transition-all ${
                        hasActiveSection
                          ? 'border-sky-300 bg-white shadow-xs'
                          : 'border-slate-200 bg-white/90'
                      }`}
                    >
                      {/* Group Header Button */}
                      <button
                        type="button"
                        onClick={() => toggleGroup(group.key, isOpen)}
                        className="flex w-full items-center justify-between px-3 py-2.5 text-left text-xs font-bold transition hover:bg-slate-50"
                      >
                        <div className="flex items-center gap-2">
                          <IconChevronDown
                            className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                              isOpen ? 'rotate-0' : '-rotate-90'
                            }`}
                          />
                          <span
                            className={
                              hasActiveSection ? 'font-bold text-umsa-blue' : 'text-slate-700'
                            }
                          >
                            {group.label}
                          </span>
                        </div>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            hasActiveSection
                              ? 'bg-sky-100 text-umsa-blue'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {group.sections.length}
                        </span>
                      </button>

                      {/* Group Items */}
                      {isOpen && (
                        <div className="space-y-1 border-t border-slate-100 bg-slate-50/60 p-1.5">
                          {group.sections.map((section) => {
                            const isSelected = section.claveCampo === activeKey
                            const isImage = section.tipo === 'imagen'
                            const isDirty = dirtyKeys.has(section.claveCampo)
                            const friendlyLabel = formatFieldLabel(section.subKey, section.tipo)

                            return (
                              <button
                                key={section.claveCampo}
                                type="button"
                                onClick={() => selectSection(section.claveCampo)}
                                className={`w-full rounded-lg px-2.5 py-2 text-left transition ${
                                  isSelected
                                    ? 'bg-umsa-blue text-white shadow-sm'
                                    : isDirty
                                    ? 'border border-amber-300 bg-amber-50/70 text-slate-800 hover:bg-amber-50'
                                    : 'border border-slate-100 bg-white text-slate-700 hover:border-sky-200 hover:bg-sky-50/60'
                                }`}
                              >
                                <div className="flex items-center justify-between gap-1.5">
                                  <span className="flex items-center gap-1.5 truncate text-xs font-semibold">
                                    {isDirty && (
                                      <span
                                        className={`h-2 w-2 shrink-0 rounded-full ${
                                          isSelected ? 'bg-amber-300' : 'bg-amber-500'
                                        }`}
                                        title="Tiene cambios sin guardar"
                                      />
                                    )}
                                    <span className="truncate">{friendlyLabel}</span>
                                  </span>
                                  <span
                                    className={`shrink-0 inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-medium ${
                                      isSelected
                                        ? 'bg-white/20 text-white'
                                        : isImage
                                        ? 'bg-amber-100 text-amber-800'
                                        : 'bg-slate-100 text-slate-600'
                                    }`}
                                  >
                                    {isImage ? (
                                      <>
                                        <IconImage className="h-3 w-3" />
                                        <span>Imagen</span>
                                      </>
                                    ) : (
                                      <>
                                        <IconFileText className="h-3 w-3" />
                                        <span>Texto</span>
                                      </>
                                    )}
                                  </span>
                                </div>
                                {section.valor && (
                                  <div
                                    className={`mt-1 line-clamp-1 text-[11px] ${
                                      isSelected ? 'text-sky-100/90' : 'text-slate-500'
                                    }`}
                                  >
                                    {isImage ? 'Imagen configurada' : section.valor}
                                  </div>
                                )}
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })
              )}
            </div>
          </aside>

          {/* Right Editor Area */}
          <section className="flex min-w-0 flex-col p-5 sm:p-8">
            {hasCrudForPage(activePageSlug) && (
              <div className="mb-6 flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                <button
                  type="button"
                  onClick={() => setPageMode('textos')}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
                    pageMode === 'textos'
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <IconFileText className="h-3.5 w-3.5" />
                  <span>Contenido de Página</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPageMode('crud')}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
                    pageMode === 'crud'
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {activePageSlug === '/institucional/convenios' ? (
                    <>
                      <IconHandshake className="h-3.5 w-3.5" />
                      <span>Convenios Interinstitucionales</span>
                    </>
                  ) : activePageSlug === '/institucional/autoridades' ? (
                    <>
                      <IconGraduationCap className="h-3.5 w-3.5" />
                      <span>Representación Estudiantil (HCC)</span>
                    </>
                  ) : activePageSlug === '/institucional/docentes' ? (
                    <>
                      <IconUsers className="h-3.5 w-3.5" />
                      <span>Plantel Docente y Administrativo</span>
                    </>
                  ) : activePageSlug === '/pregrado/malla-curricular' ? (
                    <>
                      <IconBookOpen className="h-3.5 w-3.5" />
                      <span>Gestión de Materias y Planes</span>
                    </>
                  ) : activePageSlug === '/pregrado/convalidaciones' ? (
                    <>
                      <IconLayers className="h-3.5 w-3.5" />
                      <span>Gestión de Convalidaciones</span>
                    </>
                  ) : activePageSlug === '/pregrado/admisiones' ? (
                    <>
                      <IconCalendar className="h-3.5 w-3.5" />
                      <span>Gestión de Convocatorias</span>
                    </>
                  ) : ['/postgrado', '/postgrado/maestria-terminal', '/postgrado/maestria-autofinanciada', '/postgrado/autofinanciada', '/postgrado/diplomados', '/postgrado/diplomados-especialidades'].includes(activePageSlug) ? (
                    <>
                      <IconBookOpen className="h-3.5 w-3.5" />
                      <span>Módulos de Postgrado</span>
                    </>
                  ) : activePageSlug === '/estudiantes/centro-estudiantes' ? (
                    <>
                      <IconUsers className="h-3.5 w-3.5" />
                      <span>Directiva Estudiantil</span>
                    </>
                  ) : ['/estudiantes/convocatorias-auxiliaturas', '/estudiantes/auxiliaturas'].includes(activePageSlug) ? (
                    <>
                      <IconCalendar className="h-3.5 w-3.5" />
                      <span>Convocatorias de Auxiliatura</span>
                    </>
                  ) : ['/estudiantes/pasantias-bolsa-trabajo', '/estudiantes/pasantias'].includes(activePageSlug) ? (
                    <>
                      <IconHandshake className="h-3.5 w-3.5" />
                      <span>Pasantías y Empleo</span>
                    </>
                  ) : ['/estudiantes/sociedad-cientifica', '/estudiantes/sociedades-cientificas'].includes(activePageSlug) ? (
                    <>
                      <IconBookOpen className="h-3.5 w-3.5" />
                      <span>Publicaciones Estudiantiles</span>
                    </>
                  ) : activePageSlug === '/recursos/biblioteca' ? (
                    <>
                      <IconBookOpen className="h-3.5 w-3.5" />
                      <span>Catálogo de Libros</span>
                    </>
                  ) : activePageSlug === '/recursos/revistas' ? (
                    <>
                      <IconFileText className="h-3.5 w-3.5" />
                      <span>Revistas Académicas</span>
                    </>
                  ) : activePageSlug === '/recursos/documentos' ? (
                    <>
                      <IconFileText className="h-3.5 w-3.5" />
                      <span>Documentos Digitales</span>
                    </>
                  ) : activePageSlug === '/recursos/tesis' ? (
                    <>
                      <IconGraduationCap className="h-3.5 w-3.5" />
                      <span>Tesis de Grado</span>
                    </>
                  ) : activePageSlug === '/recursos/banco-datos' ? (
                    <>
                      <IconLayers className="h-3.5 w-3.5" />
                      <span>Bancos de Datos</span>
                    </>
                    ) : activePageSlug === '/' ? (
                    <>
                      <IconFileText className="h-3.5 w-3.5" />
                      <span>Noticias</span>
                    </>
                  ) : (
                    <>
                      <IconBookOpen className="h-3.5 w-3.5" />
                      <span>Gestión de Datos</span>
                    </>
                  )}
                </button>

                {activePageSlug === '/' && (
                  <button
                    type="button"
                    onClick={() => setPageMode('eventos')}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
                      pageMode === 'eventos'
                        ? 'bg-umsa-blue text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <IconCalendar className="h-3.5 w-3.5" />
                    <span>Agenda</span>
                  </button>
                )}
                {activePageSlug === '/recursos/biblioteca' && (
                  <button
                    type="button"
                    onClick={() => setPageMode('autores')}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
                      pageMode === 'autores'
                        ? 'bg-umsa-blue text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <IconUsers className="h-3.5 w-3.5" />
                    <span>Autores</span>
                  </button>
                )}

                {activePageSlug === '/recursos/banco-datos' && (
                  <button
                    type="button"
                    onClick={() => setPageMode('archivos')}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
                      pageMode === 'archivos'
                        ? 'bg-umsa-blue text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <IconFileText className="h-3.5 w-3.5" />
                    <span>Archivos de Datos</span>
                  </button>
                )}

                {['/postgrado', '/postgrado/maestria-terminal', '/postgrado/maestria-autofinanciada', '/postgrado/autofinanciada', '/postgrado/diplomados', '/postgrado/diplomados-especialidades'].includes(activePageSlug) && (
                  <button
                    type="button"
                    onClick={() => setPageMode('programas')}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
                      pageMode === 'programas'
                        ? 'bg-umsa-blue text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <IconLayers className="h-3.5 w-3.5" />
                    <span>Programas de Postgrado</span>
                  </button>
                )}

                {['/estudiantes/sociedad-cientifica', '/estudiantes/sociedades-cientificas'].includes(activePageSlug) && (
                  <button
                    type="button"
                    onClick={() => setPageMode('matriz')}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
                      pageMode === 'matriz'
                        ? 'bg-umsa-blue text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <IconLayers className="h-3.5 w-3.5" />
                    <span>Matriz Científica</span>
                  </button>
                )}
              </div>
            )}

            {(pageMode === 'directivos' || (pageMode === 'crud' && activePageSlug === '/estudiantes/centro-estudiantes')) ? (
              <DirectivoEstudianteCrud />
            ) : (pageMode === 'auxiliaturas' || (pageMode === 'crud' && ['/estudiantes/convocatorias-auxiliaturas', '/estudiantes/auxiliaturas'].includes(activePageSlug))) ? (
              <ConvocatoriaAuxiliaturaCrud />
            ) : (pageMode === 'pasantias' || (pageMode === 'crud' && ['/estudiantes/pasantias-bolsa-trabajo', '/estudiantes/pasantias'].includes(activePageSlug))) ? (
              <PasantiaCrud />
            ) : (pageMode === 'publicaciones' || (pageMode === 'crud' && ['/estudiantes/sociedad-cientifica', '/estudiantes/sociedades-cientificas'].includes(activePageSlug))) ? (
              <PublicacionesEstudiantilesCrud />
            ) : pageMode === 'matriz' ? (
              <MatrizCientificaCrud />
            ) : pageMode === 'programas' ? (
              <ProgramaCrud />
            ) : pageMode === 'modulos' ? (
              <ModuloCrud />
            ) : pageMode === 'crud' && activePageSlug === '/institucional/convenios' ? (
              <>
                <div className="mb-6 border-b border-slate-200 pb-5">
                  <h2 className="text-xl font-bold text-slate-800">Convenios Interinstitucionales</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Administra los convenios y alianzas estratégicas de la carrera.
                  </p>
                </div>
                <ConvenioCrud />
              </>
            ) : pageMode === 'crud' && activePageSlug === '/institucional/autoridades' ? (
              <>
                <div className="mb-6 border-b border-slate-200 pb-5">
                  <h2 className="text-xl font-bold text-slate-800">Autoridades estudiantiles</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Administra los representantes estudiantiles de la carrera.
                  </p>
                </div>
                <EstudianteAutoridadCrud />
              </>
            ) : pageMode === 'crud' && activePageSlug === '/institucional/docentes' ? (
              <>
                <div className="mb-6 border-b border-slate-200 pb-5">
                  <h2 className="text-xl font-bold text-slate-800">
                    Plantel docente y administrativo
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Administra los registros que se muestran en esta sección.
                  </p>
                </div>
                <PlantelCrud />
              </>
            ) : pageMode === 'crud' && activePageSlug === '/pregrado/malla-curricular' ? (
              <MateriaPlanCrud />
            ) : pageMode === 'crud' && activePageSlug === '/pregrado/convalidaciones' ? (
              <ConvalidaCrud />
            ) : pageMode === 'crud' && activePageSlug === '/pregrado/admisiones' ? (
              <ConvocatoriaCrud />
            ) : pageMode === 'crud' && ['/postgrado', '/postgrado/maestria-terminal', '/postgrado/maestria-autofinanciada', '/postgrado/autofinanciada', '/postgrado/diplomados', '/postgrado/diplomados-especialidades'].includes(activePageSlug) ? (
              <ModuloCrud />
            ) : pageMode === 'crud' && activePageSlug === '/' ? (
              <NoticiaCrud />
            ) : pageMode === 'eventos' ? (
              <EventoCrud />
            ) : pageMode === 'autores' ? (
              <AutorCrud />
            ) : (pageMode === 'libros' || (pageMode === 'crud' && activePageSlug === '/recursos/biblioteca')) ? (
              <LibroCrud />
            ) : (pageMode === 'revistas' || (pageMode === 'crud' && activePageSlug === '/recursos/revistas')) ? (
              <RevistaCrud />
            ) : (pageMode === 'documentos' || (pageMode === 'crud' && activePageSlug === '/recursos/documentos')) ? (
              <DocumentoDigitalCrud />
            ) : (pageMode === 'tesis' || (pageMode === 'crud' && activePageSlug === '/recursos/tesis')) ? (
              <TesisCrud />
            ) : (pageMode === 'banco' || (pageMode === 'crud' && activePageSlug === '/recursos/banco-datos')) ? (
              <BancoDatosCrud />
            ) : pageMode === 'archivos' ? (
              <DatosArchivoCrud />
            ) : activeSection ? (
              <>
                {/* Section context breadcrumb and group navigation */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-slate-500">Página:</span>
                    <span className="rounded bg-slate-100 px-2 py-1 font-bold text-slate-700">
                      {activePageTitle}
                    </span>
                    {activeGroup && (
                      <>
                        <span className="text-slate-300">/</span>
                        <span className="font-semibold text-slate-500">Grupo:</span>
                        <span className="rounded bg-sky-100 px-2 py-1 font-bold text-umsa-blue">
                          {activeGroup.label}
                        </span>
                      </>
                    )}
                  </div>

                  {activeGroupSections.length > 1 && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">
                        {activeIndexInGroup + 1} de {activeGroupSections.length}
                      </span>
                      <div className="flex gap-1">
                        <button
                          type="button"
                          disabled={activeIndexInGroup <= 0}
                          onClick={() =>
                            selectSection(activeGroupSections[activeIndexInGroup - 1].claveCampo)
                          }
                          className="inline-flex items-center gap-1 rounded border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-xs transition hover:bg-slate-50 hover:text-umsa-blue disabled:cursor-not-allowed disabled:opacity-30"
                          title="Sección anterior en este grupo"
                        >
                          <IconArrowLeft className="h-3 w-3" />
                          <span>Anterior</span>
                        </button>
                        <button
                          type="button"
                          disabled={activeIndexInGroup >= activeGroupSections.length - 1}
                          onClick={() =>
                            selectSection(activeGroupSections[activeIndexInGroup + 1].claveCampo)
                          }
                          className="inline-flex items-center gap-1 rounded border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-xs transition hover:bg-slate-50 hover:text-umsa-blue disabled:cursor-not-allowed disabled:opacity-30"
                          title="Siguiente sección en este grupo"
                        >
                          <span>Siguiente</span>
                          <IconArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Section Form Details */}
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl font-bold text-slate-800">{activeFriendlyLabel}</h2>
                      {isActiveDirty && (
                        <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
                          Sin guardar
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-slate-400">
                      Identificador interno:{' '}
                      <span className="font-mono text-slate-500">{activeSection.claveCampo}</span>
                    </p>
                  </div>
                  <div>
                    <div
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-100/90 px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-2xs select-none cursor-default"
                      title="Tipo de contenido"
                    >
                      {activeSection.tipo === 'imagen' ? (
                        <>
                          <IconImage className="h-4 w-4 text-amber-600" />
                          <span className="text-slate-700">Imagen</span>
                        </>
                      ) : (
                        <>
                          <IconFileText className="h-4 w-4 text-umsa-blue" />
                          <span className="text-slate-700">Texto</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {activeSection.tipo === 'imagen' ? (
                  <div className="flex flex-1 flex-col gap-5">
                    {/* Upload Dropzone */}
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => !uploading && fileInputRef.current?.click()}
                      className={`relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center cursor-pointer transition ${
                        isDragging
                          ? 'border-umsa-blue bg-sky-50/70 scale-[1.01]'
                          : uploading
                          ? 'border-slate-300 bg-slate-50 cursor-wait opacity-80'
                          : 'border-slate-300 bg-slate-50/70 hover:border-umsa-blue hover:bg-sky-50/40'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        onChange={handleImageFileChange}
                        disabled={uploading}
                        className="hidden"
                      />

                      {uploading ? (
                        <div className="flex flex-col items-center gap-2 py-3">
                          <div className="h-8 w-8 animate-spin rounded-full border-3 border-umsa-blue border-t-transparent" />
                          <p className="text-sm font-semibold text-umsa-blue">Subiendo imagen al servidor...</p>
                          <p className="text-xs text-slate-400">Espera un momento, se mostrará en la vista previa</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2 py-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-umsa-blue">
                            <IconUpload className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-700">
                              <span className="text-umsa-blue underline">Haz clic para elegir una foto</span> o arrástrala aquí
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                              Formatos admitidos: JPG, PNG, WEBP o GIF (máximo 10 MB)
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Preview Area */}
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500">
                        <span>Vista previa actual</span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setShowAdvancedImageUrl((prev) => !prev)}
                            className="text-xs font-semibold text-umsa-blue hover:underline"
                          >
                            {showAdvancedImageUrl ? 'Ocultar enlace / ruta' : 'Usar enlace externo o ver ruta'}
                          </button>
                          {activeSection.valor && (
                            <button
                              type="button"
                              onClick={() => updateActiveSection('valor', '')}
                              className="inline-flex items-center gap-1 rounded-md border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600 hover:bg-red-100"
                            >
                              <IconTrash className="h-3.5 w-3.5" />
                              <span>Quitar imagen</span>
                            </button>
                          )}
                        </div>
                      </div>

                      {showAdvancedImageUrl && (
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                          <div className="mb-1.5 flex items-center justify-between">
                            <label htmlFor="image-value" className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                              Ruta o URL de la imagen (opcional)
                            </label>
                            {activeSection.valor && (
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={copyImageUrl}
                                  className="inline-flex items-center gap-1 text-xs font-semibold text-umsa-blue hover:underline"
                                >
                                  {copiedUrl ? (
                                    <>
                                      <IconCheck className="h-3.5 w-3.5 text-emerald-600" />
                                      <span className="text-emerald-600">¡Copiado!</span>
                                    </>
                                  ) : (
                                    <>
                                      <IconCopy className="h-3.5 w-3.5" />
                                      <span>Copiar ruta</span>
                                    </>
                                  )}
                                </button>
                                <a
                                  href={uploadService.resolveMediaUrl(activeSection.valor)}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-umsa-blue"
                                >
                                  <IconExternalLink className="h-3.5 w-3.5" />
                                  <span>Abrir original</span>
                                </a>
                              </div>
                            )}
                          </div>
                          <input
                            id="image-value"
                            value={activeSection.valor}
                            onChange={(event) => updateActiveSection('valor', event.target.value)}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-mono outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
                            placeholder="Ej: /uploads/images/... o https://..."
                          />
                        </div>
                      )}

                      <div className="flex min-h-64 flex-1 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-900/5 p-4">
                        {activeSection.valor ? (
                          <div className="relative max-h-96 max-w-full flex flex-col items-center justify-center">
                            {previewError ? (
                              <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-center text-xs text-amber-800 max-w-md">
                                <p className="font-semibold mb-1">No se pudo cargar la vista previa</p>
                                <p className="mt-1 text-slate-600">
                                  Sube una nueva imagen desde el recuadro superior o verifica el enlace en opciones avanzadas.
                                </p>
                              </div>
                            ) : (
                              <img
                                key={uploadService.resolveMediaUrl(activeSection.valor)}
                                src={uploadService.resolveMediaUrl(activeSection.valor)}
                                alt="Vista previa de la sección"
                                className="max-h-80 max-w-full rounded-lg object-contain shadow-md"
                                onLoad={() => setPreviewError(false)}
                                onError={() => setPreviewError(true)}
                              />
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-1 text-slate-400">
                            <IconImage className="h-10 w-10 stroke-1" />
                            <span className="text-sm">No hay ninguna imagen asignada todavía</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-1 flex-col">
                    <div className="mb-2 flex items-center justify-between">
                      <label htmlFor="text-value" className="text-sm font-semibold text-slate-600">
                        Texto visible en el portal
                      </label>
                      <span className="text-xs text-slate-400">
                        {(activeSection.valor || '').length} caracteres ·{' '}
                        {(activeSection.valor || '').trim()
                          ? (activeSection.valor || '').trim().split(/\s+/).length
                          : 0}{' '}
                        palabras
                      </span>
                    </div>
                    <textarea
                      id="text-value"
                      value={activeSection.valor}
                      onChange={(event) => updateActiveSection('valor', event.target.value)}
                      className="min-h-80 flex-1 resize-y rounded-xl border border-slate-300 p-4 text-base leading-7 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
                      placeholder="Escribe aquí el texto que se mostrará en la página..."
                    />
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
                  <div aria-live="polite" className="text-sm">
                    {error && (
                      <span className="inline-flex items-center gap-1.5 font-semibold text-red-600">
                        <IconAlertCircle className="h-4 w-4" />
                        {error}
                      </span>
                    )}
                    {!error && message && (
                      <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-600">
                        <IconCheck className="h-4 w-4" />
                        {message}
                      </span>
                    )}
                    {!error && !message && isActiveDirty && (
                      <span className="text-xs font-medium text-amber-700">
                        Tienes cambios sin guardar en este campo.
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {isActiveDirty && (
                      <button
                        type="button"
                        onClick={discardActiveChanges}
                        disabled={saving}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50"
                      >
                        <span>Descartar</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={saveSection}
                      disabled={saving || !isActiveDirty}
                      className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-6 py-2.5 text-sm font-bold text-white shadow-xs transition hover:bg-sky-900 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <IconSave className="h-4 w-4" />
                      <span>{saving ? 'Guardando...' : 'Guardar cambios'}</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center p-8 text-center text-slate-400">
                <p className="text-base font-semibold">No hay secciones existentes para esta página.</p>
                <p className="mt-1 text-xs text-slate-400">
                  Selecciona otra página o administra su contenido desde el menú superior.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Notificación flotante (toast) */}
      {toast && (
        <div
          role="status"
          className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-xl transition-all ${
            toast.type === 'error'
              ? 'bg-red-600'
              : toast.type === 'info'
              ? 'bg-slate-700'
              : 'bg-emerald-600'
          }`}
        >
          {toast.type === 'error' ? (
            <IconAlertCircle className="h-4 w-4 shrink-0" />
          ) : (
            <IconCheck className="h-4 w-4 shrink-0" />
          )}
          <span>{toast.text}</span>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="ml-1 rounded p-0.5 text-white/80 hover:bg-white/15 hover:text-white"
            aria-label="Cerrar notificación"
          >
            <IconClose className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </main>
  )
}

function findInitialPage(sections) {
  const firstExistingPage = pageTabs.find((tab) =>
    sections.some((section) => normalizePageSlug(section.paginaSlug) === tab.slug),
  )

  return firstExistingPage?.slug ?? pageTabs[0].slug
}

function normalizePageSlug(slug) {
  if (!slug) return '/'
  if (slug === '/acreditacion') return '/institucional/acreditacion'
  if (slug === '/postgrado') return '/postgrado/maestria-terminal'
  if (slug === '/postgrado/autofinanciada') return '/postgrado/maestria-autofinanciada'
  if (slug === '/postgrado/diplomados-especialidades') return '/postgrado/diplomados'
  if (slug === '/estudiantes/tramites') return '/estudiantes/guia-seguimiento-tramites'
  if (slug === '/estudiantes/auxiliaturas') return '/estudiantes/convocatorias-auxiliaturas'
  if (slug === '/estudiantes/pasantias') return '/estudiantes/pasantias-bolsa-trabajo'
  if (slug === '/estudiantes/sociedades-cientificas') return '/estudiantes/sociedad-cientifica'
  return slug
}
