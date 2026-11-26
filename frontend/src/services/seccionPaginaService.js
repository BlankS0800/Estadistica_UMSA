import { httpClient } from '../api/httpClient'

const getRecords = (response) => {
  if (Array.isArray(response)) return response
  if (Array.isArray(response?.content)) return response.content
  if (Array.isArray(response?.data)) return response.data
  if (Array.isArray(response?.items)) return response.items
  if (Array.isArray(response?.records)) return response.records
  if (Array.isArray(response?.data?.content)) return response.data.content
  if (Array.isArray(response?.data?.items)) return response.data.items
  if (Array.isArray(response?.data?.records)) return response.data.records
  return []
}

export const seccionPaginaApi = {
  async list(paginaSlug) {
    const response = await httpClient('/seccion-pagina')

    return getRecords(response).filter(
      (record) => (record.paginaSlug ?? record.pagina_slug) === paginaSlug,
    )
  },

  async save(section) {
    const response = await httpClient(
      `/seccion-pagina/${encodeURIComponent(section.claveCampo)}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          paginaSlug: section.paginaSlug,
          valor: section.valor,
          tipo: section.tipo,
        }),
      },
    )

    return response
  },
}