import { useState } from 'react'
import { Award, CheckCircle2, Microscope, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import StatisticalOverlay from '../../atoms/data/StatisticalOverlay'

const AboutHistorySection = ({ ieta }) => {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 md:px-10 md:py-32">
      <svg className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] opacity-[0.06]" viewBox="0 0 500 500" fill="none" aria-hidden="true">
        <circle cx="100" cy="100" r="200" stroke="#00447e" strokeWidth="2" />
        <circle cx="100" cy="100" r="150" stroke="#00447e" strokeWidth="1.5" opacity="0.6" />
        <circle cx="100" cy="100" r="100" stroke="#00447e" strokeWidth="1" opacity="0.4" />
      </svg>

      <svg className="pointer-events-none absolute right-0 top-20 h-[260px] w-[520px] opacity-[0.07]" viewBox="0 0 520 260" fill="none" aria-hidden="true">
        <path d="M0 130 Q130 58 260 130 T520 130" stroke="#00447e" strokeWidth="2" />
        <path d="M0 156 Q130 84 260 156 T520 156" stroke="#00447e" strokeWidth="1.5" opacity="0.65" />
        <path d="M0 182 Q130 110 260 182 T520 182" stroke="#c2410c" strokeWidth="1.2" opacity="0.5" />
      </svg>

      <div className="absolute bottom-20 right-20 hidden select-none font-serif text-9xl italic font-black text-[#c2410c] opacity-[0.04] lg:block" aria-hidden="true">
        R2
      </div>
      <div className="absolute left-14 top-[62%] hidden font-mono text-[10px] font-bold tracking-[0.25em] text-[#00447e] opacity-[0.22] md:block">ARCHIVE_TRACE</div>

      <div className="mx-auto grid max-w-[1440px] items-start gap-16 lg:grid-cols-[1.4fr_1fr] md:gap-24">
        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-1 w-16 bg-[#c2410c]" />
            <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.5em] text-slate-400">Compendio Academico</span>
          </div>

          <h2 className="mb-10 text-3xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-5xl">
            Contexto e Impacto
          </h2>

          <div className="space-y-8 text-sm font-medium leading-relaxed text-slate-600 md:text-base">
            <p>
              La Carrera de Estadistica de la UMSA nace de la necesidad de cuantificar el desarrollo nacional. Desde su fundacion oficial in <strong className="font-black text-[#00447e]">1984</strong>, ha evolucionado de metodos puramente matematicos a la integracion de <span className="font-bold text-[#00447e]">Ciencia de Datos y Machine Learning.</span>
            </p>

            <p>
              Somos la unidad academica encargada de formar cuadros tecnicos que lideran el INE y unidades de planificacion del pais, transformando datos en conocimiento estrategico para el desarrollo de Bolivia.
            </p>

            <div className="group relative overflow-hidden rounded-[3rem] border border-slate-200 bg-[#f1f5f9] p-8">
              <StatisticalOverlay sigma="0.98" r2="0.95" n="380" />
              <h4 className="mb-4 flex items-center gap-2 text-lg font-black uppercase text-[#00447e]">
                <CheckCircle2 className="text-[#c2410c]" size={20} />
                Modalidades de Graduacion
              </h4>
              <p className="mb-6 text-base sm:text-base md:text-lg uppercase tracking-wider text-slate-500">
                La carrera trabaja en solucionar la brecha de titulacion con Tesis de Grado, Trabajo Dirigido y Graduacion por Excelencia.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="rounded-full border border-slate-200 bg-white px-5 py-2 text-[10px] font-bold uppercase text-slate-400">Plan de Estudios 2021</div>
                <div className="rounded-full border border-slate-200 bg-white px-5 py-2 text-[10px] font-bold uppercase text-slate-400">Maestria Terminal</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-40">
          <div className="relative overflow-hidden rounded-[4rem] border-b-[8px] border-[#c2410c] bg-[#002a52] p-10 text-white shadow-2xl">
            <h4 className="mb-6 border-b border-white/20 pb-4 text-2xl font-black uppercase tracking-widest">{ieta.title}</h4>
            <p className="mb-10 text-base sm:text-base md:text-lg font-medium uppercase tracking-widest text-blue-100/70 md:text-base">{ieta.text}</p>

            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-[#002a52] shadow-xl">
                <Microscope size={24} />
              </div>
              <div>
                <p className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em]">Fundado en</p>
                <p className="text-xl font-black">{ieta.founded}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button
              onClick={() => setIsZoomed(true)}
              className="h-40 overflow-hidden rounded-[2.5rem] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-zoom-in group relative outline-none focus:ring-2 focus:ring-[#00447e] focus:ring-offset-2"
              title="Click para agrandar la imagen de Acreditación CEUB"
              aria-label="Agrandar imagen de Acreditación CEUB"
            >
              <img
                src="/images/institucional/certificacion_ceub.png"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Certificacion CEUB"
              />
              <div className="absolute inset-0 bg-[#002a52]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <div className="flex flex-col items-center justify-center rounded-[2.5rem] border border-slate-200 bg-white p-8 text-center">
              <Award className="mb-2 text-[#c2410c]" size={32} />
              <p className="text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400 leading-none">Acreditacion</p>
              <p className="mt-1 text-lg font-black uppercase text-[#002a52]">CEUB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Acreditación CEUB Lightbox Modal */}
      <AnimatePresence>
        {isZoomed && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomed(false)}
              className="absolute inset-0 bg-[#001d3d]/90 backdrop-blur-md cursor-zoom-out"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative max-h-[85vh] max-w-5xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl z-10 border border-slate-200/50 p-2 sm:p-4 flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#002a52] text-white hover:bg-[#c2410c] transition-all shadow-lg active:scale-95"
                aria-label="Cerrar"
                title="Cerrar"
              >
                <X size={20} />
              </button>

              <div className="w-full h-full overflow-auto flex items-center justify-center p-2">
                <img
                  src="/images/institucional/certificacion_ceub.png"
                  className="max-h-[75vh] w-auto object-contain rounded-xl select-none"
                  alt="Acreditación CEUB Ampliada"
                />
              </div>
              
              <div className="py-2 text-center">
                <p className="text-xs font-mono font-black uppercase tracking-widest text-[#002a52]">
                  Certificación de Acreditación - CEUB
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default AboutHistorySection
