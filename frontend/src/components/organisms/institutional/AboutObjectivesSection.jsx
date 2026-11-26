import ObjectiveCard from '../../molecules/cards/ObjectiveCard'

const AboutObjectivesSection = ({ objectives }) => (
  <section className="bg-[#f1f5f9] px-6 py-16 md:px-10 md:py-24">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-10 flex flex-col gap-4 border-b border-slate-200 pb-8">
        <div className="max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-1 w-10 bg-[#00447e]" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Ejes de accion</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Fines institucionales</h2>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {objectives.map((objective) => (
          <ObjectiveCard key={objective.id} objective={objective} />
        ))}
      </div>
    </div>
  </section>
)

export default AboutObjectivesSection
