import ValueCard from '../../molecules/cards/ValueCard'

const AboutValuesSection = ({ values }) => (
  <section className="relative overflow-hidden bg-white px-6 py-16 md:px-10 md:py-24">
    <svg className="pointer-events-none absolute -left-20 top-10 h-[320px] w-[320px] opacity-[0.07]" viewBox="0 0 320 320" fill="none" aria-hidden="true">
      <circle cx="160" cy="160" r="120" stroke="#00447e" strokeWidth="1.8" />
      <circle cx="160" cy="160" r="92" stroke="#00447e" strokeWidth="1.2" opacity="0.7" />
      <circle cx="160" cy="160" r="66" stroke="#c2410c" strokeWidth="1" opacity="0.52" />
    </svg>
    <svg className="pointer-events-none absolute right-0 bottom-8 h-[220px] w-[420px] opacity-[0.08]" viewBox="0 0 420 220" fill="none" aria-hidden="true">
      <path d="M0 118 Q105 48 210 118 T420 118" stroke="#00447e" strokeWidth="2" />
      <path d="M0 144 Q105 74 210 144 T420 144" stroke="#c2410c" strokeWidth="1.3" opacity="0.58" />
    </svg>

    <div className="mx-auto max-w-[1440px]">
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-1 w-10 bg-[#00447e]" />
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Nuestros principios</span>
        </div>
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Valores rectores</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {values.map((value, index) => (
          <ValueCard key={value.title} value={value} index={index} />
        ))}
      </div>
    </div>
  </section>
)

export default AboutValuesSection
