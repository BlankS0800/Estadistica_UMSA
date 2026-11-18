import { seccionPaginaApi } from './seccionPaginaService'

// Textos editables de la sección de noticias y del botón del banner (seccion_pagina, slug '/')
const INICIO_PAGE_SLUG = '/'

export const inicioNewsUi = {
  heroButton: 'Últimas noticias',
  title: 'Actualidad institucional',
  description: 'Comunicados, convocatorias e investigación de la Carrera de Estadística.',
  searchPlaceholder: 'Buscar en las noticias',
  clearLabel: 'Borrar búsqueda',
  allLabel: 'Todas',
  readLabel: 'de lectura',
  expiredLabel: 'Caducada',
  moreLabel: 'Ver más noticias',
  resultsText: 'Noticias encontradas: {n}',
  emptyTitle: 'No encontramos noticias',
  emptyText: 'Prueba con otras palabras o elige otra categoría.',
}

const KEYS = {
  heroButton: 'inicio_hero_noticias_boton',
  title: 'inicio_noticias_titulo',
  description: 'inicio_noticias_descripcion',
  searchPlaceholder: 'inicio_noticias_buscador',
  clearLabel: 'inicio_noticias_borrar',
  allLabel: 'inicio_noticias_todas',
  readLabel: 'inicio_noticias_lectura',
  expiredLabel: 'inicio_noticias_caducada',
  moreLabel: 'inicio_noticias_mas',
  resultsText: 'inicio_noticias_resultados',
  emptyTitle: 'inicio_noticias_vacio_titulo',
  emptyText: 'inicio_noticias_vacio_texto',
}

export async function getInicioNewsUi() {
  const records = await seccionPaginaApi.list(INICIO_PAGE_SLUG)
  const read = (key, fallback) => {
    const record = records.find((item) => (item.claveCampo ?? item.clave_campo) === key)
    return record?.valor || fallback
  }

  return Object.fromEntries(
    Object.entries(KEYS).map(([field, key]) => [field, read(key, inicioNewsUi[field])]),
  )
}
