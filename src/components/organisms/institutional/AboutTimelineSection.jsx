const AboutTimelineSection = ({ milestones }) => (
  <section className="bg-[#f1f5f9] px-6 py-16 md:px-10 md:py-24">
    <div className="mx-auto max-w-5xl">
      <div className="mb-10 max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#c2410c]">Evolucion historica</span>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Hitos del desarrollo</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">Una trayectoria construida junto a las necesidades estadísticas de Bolivia.</p>
      </div>

      <ol className="divide-y divide-slate-200 border-y border-slate-200">
        {milestones.map((milestone) => (
          <li key={milestone.year} className="grid gap-3 py-6 md:grid-cols-[7rem_1fr] md:gap-8">
            <p className="text-2xl font-black text-[#00447e]">{milestone.year}</p>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{milestone.title}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">{milestone.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

export default AboutTimelineSection
