import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AUTOPLAY_MS = 5000

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Carrusel reutilizable con avance automático y texto opcional al pie (derecha).
 *
 * images: [{ url, caption }]  (usar parseCarouselItems de services/carouselUtils)
 * aspect: clase Tailwind de proporción. Ej: 'aspect-[3/2]', 'aspect-video', 'aspect-[4/3]'
 */
const ImageCarousel = ({ images = [], alt = 'Imagen', aspect = 'aspect-[3/2]' }) => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const total = images.length
  // Si el administrador quita imágenes, el índice nunca queda fuera de rango.
  const active = total > 0 ? current % total : 0

  useEffect(() => {
    if (total <= 1 || isPaused || prefersReducedMotion()) return undefined

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, AUTOPLAY_MS)

    return () => clearTimeout(timer)
  }, [active, total, isPaused])

  if (total === 0) return null

  const goTo = (index) => setCurrent((index + total) % total)
  const hasAnyCaption = images.some((item) => item.caption)

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[2.5rem] ${aspect}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {images.map((item, index) => {
        const isActive = index === active
        return (
          <div
            key={`${index}-${item.url}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
              isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <img
              src={item.url}
              alt={isActive ? item.caption || alt : ''}
              onError={(e) => { e.target.style.display = 'none' }}
              className="h-full w-full object-cover"
            />
            {item.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-6 pb-5 pt-16 sm:px-8">
                <p className="ml-auto max-w-[75%] text-right text-sm font-bold uppercase tracking-widest text-white drop-shadow-lg sm:text-base md:text-lg">
                  {item.caption}
                </p>
              </div>
            )}
          </div>
        )
      })}

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/20 text-white backdrop-blur transition-transform hover:scale-110 motion-reduce:transition-none"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/20 text-white backdrop-blur transition-transform hover:scale-110 motion-reduce:transition-none"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Puntos a la izquierda para no chocar con el texto al pie (derecha) */}
          <div
            className={`absolute left-6 z-10 flex gap-2 sm:left-8 ${
              hasAnyCaption ? 'bottom-6' : 'bottom-4'
            }`}
          >
            {images.map((item, index) => (
              <button
                key={`dot-${index}-${item.url}`}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
                aria-current={index === active}
                className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                  index === active ? 'w-7 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ImageCarousel
