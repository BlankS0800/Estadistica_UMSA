import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AUTOPLAY_MS = 4000

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const AccreditationHeroCarousel = ({ images = [], alt = 'Acreditación' }) => {
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

  return (
    <div
      className="relative aspect-[3/2] w-full overflow-hidden rounded-[2.5rem]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {images.map((src, index) => (
        <img
          key={`${index}-${src}`}
          src={src}
          alt={index === active ? alt : ''}
          aria-hidden={index !== active}
          onError={(e) => { e.target.style.display = 'none' }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
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

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((src, index) => (
              <button
                key={`dot-${index}-${src}`}
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

export default AccreditationHeroCarousel
