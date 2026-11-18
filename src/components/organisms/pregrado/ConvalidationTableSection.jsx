import { Download, ImageOff } from 'lucide-react'
import PregradoSectionHeader from '../../molecules/pregrado/PregradoSectionHeader'

const getExtension = (url, mime) => {
  const fromUrl = url.split('?')[0].match(/\.(png|jpe?g|webp|gif|pdf)$/i)
  if (fromUrl) return fromUrl[0].toLowerCase()
  if (mime?.includes('png')) return '.png'
  if (mime?.includes('webp')) return '.webp'
  return '.jpg'
}

function ConvalidationTableSection({ section }) {
  const hasImage = Boolean(section.imageUrl)

  const handleDownload = async () => {
    try {
      const response = await fetch(section.imageUrl)
      if (!response.ok) throw new Error('No se pudo descargar')
      const blob = await response.blob()
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `tabla-convalidaciones${getExtension(section.imageUrl, blob.type)}`
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(link.href)
    } catch {
      window.open(section.imageUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section>
      <PregradoSectionHeader tag={section.tag} title={section.title} sub={section.sub} />

      <div className="rounded-[3rem] border border-slate-200 bg-white p-6 shadow-xl md:p-10">
        {hasImage ? (
          <>
            <a href={section.imageUrl} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-2xl border border-slate-100">
              <img src={section.imageUrl} alt={section.imageAlt} className="h-auto w-full" loading="lazy" />
            </a>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-3 rounded-xl bg-[#001d3d] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#ea580c] sm:text-base md:text-lg"
              >
                <Download size={20} /> {section.downloadLabel}
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-slate-300 p-16 text-center">
            <ImageOff size={48} className="text-slate-300" />
            <p className="text-lg font-black uppercase tracking-widest text-slate-400">{section.emptyText}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ConvalidationTableSection
