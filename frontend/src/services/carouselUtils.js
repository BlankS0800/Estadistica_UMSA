// Utilidades compartidas por todos los carruseles del sitio público.
// Un carrusel se guarda en seccion_pagina.valor como JSON:
//   [{ "url": "/uploads/images/a.jpg", "caption": "Rectora de la Universidad" }, ...]
// También se aceptan elementos que sean solo texto ("/ruta.jpg") por compatibilidad.

const API_BASE_URL = (import.meta.env.VITE_API_URL ?? '/api').replace(/\/$/, '')

// Las imágenes subidas desde el panel viven en el backend (/uploads/...).
export const resolveMediaUrl = (url) => {
  if (!url || typeof url !== 'string') return ''
  const trimmed = url.trim()
  return trimmed.startsWith('/uploads/') ? `${API_BASE_URL}${trimmed}` : trimmed
}

export const parseCarouselItems = (raw, fallback = []) => {
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) {
      const items = parsed
        .map((item) =>
          typeof item === 'string'
            ? { url: resolveMediaUrl(item), caption: '' }
            : {
                url: resolveMediaUrl(item?.url),
                caption: typeof item?.caption === 'string' ? item.caption.trim() : '',
              },
        )
        .filter((item) => item.url)

      if (items.length > 0) return items
    }
  } catch {
    // JSON inválido o vacío: se usa el respaldo
  }
  return fallback
}
