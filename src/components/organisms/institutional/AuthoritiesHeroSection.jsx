import { StatisticalGrid } from '../../atoms/data/StatisticalCharts'
import ImageCarousel from '../../molecules/media/ImageCarousel'

const AuthoritiesHeroSection = ({ hero }) => (
  <section className="relative overflow-hidden border-b-8 border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)] px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
    <StatisticalGrid color="#ffffff" opacity={0.06} />

    <svg className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] opacity-[0.07]" viewBox="0 0 420 420" fill="none" aria-hidden="true">
      <circle cx="210" cy="210" r="180" stroke="#9ad6ff" strokeWidth="2.1" />
      <circle cx="210" cy="210" r="140" stroke="#9ad6ff" strokeWidth="1.6" opacity="0.74" />
      <circle cx="210" cy="210" r="100" stroke="#ea580c" strokeWidth="1.3" opacity="0.56" />
    </svg>

    <svg className="pointer-events-none absolute right-0 top-0 h-[400px] w-[600px] opacity-[0.08]" viewBox="0 0 600 400" fill="none" aria-hidden="true">
      <path d="M0 200 Q150 100 300 200 T600 200" stroke="#ea580c" strokeWidth="2.4" />
      <path d="M0 220 Q150 120 300 220 T600 220" stroke="#9ad6ff" strokeWidth="1.5" opacity="0.74" />
      <path d="M0 244 Q150 144 300 244 T600 244" stroke="#ffffff" strokeWidth="1.1" opacity="0.36" />
    </svg>

    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(234,88,12,0.2),transparent_35%),repeating-linear-gradient(0deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_24px)]" aria-hidden="true" />

    <div className="mx-auto grid max-w-[1440px] items-center gap-8 md:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[2px] w-10 rounded-full bg-[#c2410c]" />
          <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/75">{hero.eyebrow}</span>
        </div>

        <h2 className="mb-8 text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-6xl">
          {hero.title[0]} <br />
          <span className="font-serif italic lowercase tracking-tight text-[#ea580c]">{hero.title[1]}</span> <br />
          {hero.title[2]}
        </h2>

        <div className="max-w-lg">
          <p className="rounded-r-2xl border-l-4 border-[#ea580c] bg-white/10 py-4 pl-6 text-base font-medium leading-relaxed text-slate-200 shadow-sm md:text-base">
            {hero.description}
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-10 rounded-full bg-blue-500/5 blur-[80px]" />
        <div className="relative rounded-[2.5rem] shadow-2x1">
          <ImageCarousel 
          images={hero.images} 
          alt="Autoridades de la carrera" 
          aspect="aspect-[4/3]"
          />
          
        </div>
      </div>
    </div>
  </section>
)

export default AuthoritiesHeroSection
