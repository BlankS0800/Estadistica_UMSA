import { CheckCircle2 } from 'lucide-react'
import StatisticalOverlay from '../../atoms/data/StatisticalOverlay'

   const AboutHistorySection = () => {
return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:px-10 md:py-24">
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

      <div className="mx-auto max-w-4xl">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="h-1 w-10 bg-[#c2410c]" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Compendio academico</span>
          </div>

          <h2 className="mb-7 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Contexto e Impacto
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              La Carrera de Estadistica de la UMSA nace de la necesidad de cuantificar el desarrollo nacional. Desde su fundacion oficial in <strong className="font-black text-[#00447e]">1984</strong>, ha evolucionado de metodos puramente matematicos a la integracion de <span className="font-bold text-[#00447e]">Ciencia de Datos y Machine Learning.</span>
            </p>

            <p>
              Somos la unidad academica encargada de formar cuadros tecnicos que lideran el INE y unidades de planificacion del pais, transformando datos en conocimiento estrategico para el desarrollo de Bolivia.
            </p>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 md:p-7">
              <StatisticalOverlay sigma="0.98" r2="0.95" n="380" />
              <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-[#00447e]">
                <CheckCircle2 className="text-[#c2410c]" size={20} />
                Modalidades de Graduacion
              </h4>
              <p className="mb-5 text-sm leading-relaxed text-slate-600 md:text-base">
                La carrera trabaja en solucionar la brecha de titulacion con Tesis de Grado, Trabajo Dirigido y Graduacion por Excelencia.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500">Plan de Estudios 2021</div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500">Maestria Terminal</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default AboutHistorySection
