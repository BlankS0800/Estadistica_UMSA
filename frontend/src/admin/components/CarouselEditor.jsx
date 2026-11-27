import { useRef, useState } from 'react'
import { uploadService } from '../services/upload.service'
import { IconImage, IconTrash, IconUpload, IconArrowLeft, IconArrowRight } from './Icons'

function parseItems(raw) {
  try {
    const parsed = JSON.parse(raw || '[]')
    if (Array.isArray(parsed)) {
      return parsed
        .map((item) =>
          typeof item === 'string'
            ? { url: item, caption: '' }
            : {
                url: typeof item?.url === 'string' ? item.url : '',
                caption: typeof item?.caption === 'string' ? item.caption : '',
              },
        )
        .filter((item) => item.url)
    }
  } catch {
    // fallback vacío si el JSON no es válido
  }
  return []
}

export default function CarouselEditor({ value, onChange, onNotify }) {
  const fileInputRef = useRef(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const items = parseItems(value)

  const emitChange = (nextItems) => {
    onChange(JSON.stringify(nextItems))
  }

  const handleFilesSelected = async (fileList) => {
    const files = Array.from(fileList || [])
    if (files.length === 0) return

    setError('')
    setUploading(true)
    const uploaded = []

    try {
      for (const file of files) {
        if (!file.type.startsWith('image/') || file.type === 'image/svg+xml') {
          throw new Error('Solo se permiten imágenes JPG, PNG, WEBP o GIF.')
        }
        if (file.size > 10 * 1024 * 1024) {
          throw new Error(`"${file.name}" supera el límite de 10 MB.`)
        }
        const res = await uploadService.uploadImage(file)
        uploaded.push({ url: res.url, caption: '' })
      }
      if (uploaded.length > 0) {
        emitChange([...items, ...uploaded])
        onNotify?.('info', 'Imagen agregada al carrusel. Recuerda pulsar "Guardar cambios".')
      }
    } catch (err) {
      setError(err.message || 'Error al subir la imagen.')
      onNotify?.('error', err.message || 'Error al subir la imagen')
    } finally {
      setUploading(false)
    }
  }

  const updateCaption = (index, caption) => {
    const next = items.map((item, i) => (i === index ? { ...item, caption } : item))
    emitChange(next)
  }

  const moveItem = (index, delta) => {
    const target = index + delta
    if (target < 0 || target >= items.length) return
    const next = [...items]
    ;[next[index], next[target]] = [next[target], next[index]]
    emitChange(next)
  }

  const removeItem = (index) => {
    emitChange(items.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-1 flex-col gap-5">
      {/* Zona para añadir imágenes al carrusel */}
      <div
        onClick={() => !uploading && fileInputRef.current?.click()}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-5 text-center transition ${
          uploading
            ? 'border-slate-300 bg-slate-50 opacity-80'
            : 'border-slate-300 bg-slate-50/70 hover:border-umsa-blue hover:bg-sky-50/40'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={(e) => {
            handleFilesSelected(e.target.files)
            e.target.value = ''
          }}
          disabled={uploading}
          className="hidden"
        />
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-umsa-blue">
          <IconUpload className="h-5 w-5" />
        </div>
        <p className="mt-2 text-sm font-semibold text-slate-700">
          {uploading ? (
            'Subiendo imágenes...'
          ) : (
            <>
              <span className="text-umsa-blue underline">Haz clic para agregar fotos</span> al carrusel
            </>
          )}
        </p>
        <p className="mt-0.5 text-xs text-slate-400">
          Puedes seleccionar una o varias fotos (JPG, PNG, WEBP, GIF · máx. 10 MB c/u)
        </p>
      </div>

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
          {error}
        </p>
      )}

      {/* Listado de fotos del carrusel */}
      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-10 text-center text-slate-400">
          <IconImage className="h-10 w-10 stroke-1" />
          <p className="text-sm font-medium">Este carrusel aún no tiene imágenes.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={`${item.url}-${index}`}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs"
            >
              <div className="relative h-40 w-full bg-slate-100">
                <img
                  src={uploadService.resolveMediaUrl(item.url)}
                  alt={item.caption || `Imagen ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-2 top-2 rounded-md bg-slate-900/75 px-2 py-0.5 text-[11px] font-bold text-white">
                  #{index + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-3">
                <label className="text-xs font-semibold text-slate-600">
                  Pie de foto (opcional)
                  <input
                    type="text"
                    value={item.caption}
                    onChange={(e) => updateCaption(index, e.target.value)}
                    placeholder="Ej. Ceremonia de acreditación..."
                    className="mt-1 w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs font-normal text-slate-800 outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
                  />
                </label>

                <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-2">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      disabled={index === 0}
                      onClick={() => moveItem(index, -1)}
                      title="Mover antes"
                      className="rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-30"
                    >
                      <IconArrowLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      disabled={index === items.length - 1}
                      onClick={() => moveItem(index, 1)}
                      title="Mover después"
                      className="rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-30"
                    >
                      <IconArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="inline-flex items-center gap-1 rounded-md border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600 hover:bg-red-100"
                  >
                    <IconTrash className="h-3.5 w-3.5" />
                    <span>Quitar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
