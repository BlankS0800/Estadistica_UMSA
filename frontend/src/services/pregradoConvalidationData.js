import { BookOpen, FileText, Target } from 'lucide-react'

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

export const convalidationHero = {
  eyebrow: 'Migración de planes',
  title: ['Tabla de', 'Convalidaciones'],
  highlights: ['Resoluciones oficiales', 'Mapeo directo'],
}

export const convalidationTable = {
  tag: 'Mapeo analítico',
  title: 'Tabla de convalidaciones oficiales',
  sub: 'Consulta la tabla oficial de equivalencias entre planes de estudio y descárgala para tu trámite.',
  imageUrl: '',
  imageAlt: 'Tabla oficial de convalidaciones entre planes de estudio',
  emptyText: 'La tabla de convalidaciones aún no ha sido publicada.',
  downloadLabel: 'Descargar tabla',
}

export const convalidationProcedure = {
  tag: 'Trámites',
  title: ['Proceso de', 'Homologación'],
  description:
    'La convalidación de materias es un proceso automático para estudiantes regulares. En casos especiales de abandono, readmisión o traspaso, se aplica protocolo normativo.',
  requirements: [
    'Memorial o carta valorada dirigida a Dirección de Carrera solicitando homologación.',
    'Historial académico original (récord) firmado y sellado.',
    'Fotocopia de Resolución de Traspaso o Readmisión (si aplica).',
    'Fotocopia simple de Cédula de Identidad.',
    'Formulario de Convalidación adquirido en Caja Universitaria.',
    'Presentar documentación en folder oficial de la Carrera.',
  ],
  icon: BookOpen,
}

export const convalidationVisuals = {
  headerIcon: FileText,
  processIcon: Target,
}

const API_BASE_URL = (import.meta.env.VITE_API_URL ?? '/api').replace(/\/$/, '')

const resolveMediaUrl = (url) => {
  if (!url || typeof url !== 'string') return ''
  const trimmed = url.trim()
  return trimmed.startsWith('/uploads/') ? `${API_BASE_URL}${trimmed}` : trimmed
}

export async function loadConvalidationPageData() {
  try {
    const sections = await seccionPaginaApi.list('/pregrado/convalidaciones').catch(() => [])
    const secMap = buildSectionMap(sections)

    const hero = {
      ...convalidationHero,
      eyebrow: secMap.get('convalidacion_hero_eyebrow') || convalidationHero.eyebrow,
      title: [
        secMap.get('convalidacion_hero_titulo_01') || convalidationHero.title[0],
        secMap.get('convalidacion_hero_titulo_02') || convalidationHero.title[1],
      ],
      highlights: [
        secMap.get('convalidacion_hero_highlight_01') || convalidationHero.highlights[0],
        secMap.get('convalidacion_hero_highlight_02') || convalidationHero.highlights[1],
      ],
    }

    const table = {
      ...convalidationTable,
      tag: secMap.get('convalidacion_mapeo_tag') || convalidationTable.tag,
      title: secMap.get('convalidacion_mapeo_titulo') || convalidationTable.title,
      sub: secMap.get('convalidacion_mapeo_subtitulo') || convalidationTable.sub,
      imageUrl: resolveMediaUrl(secMap.get('convalidacion_tabla_imagen')) || convalidationTable.imageUrl,
      downloadLabel: secMap.get('convalidacion_cta_label') || convalidationTable.downloadLabel,
    }

    const pasos = [1, 2, 3, 4, 5, 6]
      .map((n) => secMap.get(`convalidacion_paso_${n}`))
      .filter(Boolean)

    const procedure = {
      ...convalidationProcedure,
      tag: secMap.get('convalidacion_procedimiento_tag') || convalidationProcedure.tag,
      title: [
        secMap.get('convalidacion_procedimiento_titulo') || convalidationProcedure.title[0],
        secMap.get('convalidacion_procedimiento_subtitulo') || convalidationProcedure.title[1],
      ],
      description: secMap.get('convalidacion_procedimiento_descripcion') || convalidationProcedure.description,
      requirements: pasos.length > 0 ? pasos : convalidationProcedure.requirements,
    }

    return { hero, table, procedure }
  } catch (err) {
    console.error('Error cargando convalidaciones dinámicas:', err)
    return { hero: convalidationHero, table: convalidationTable, procedure: convalidationProcedure }
  }
}
