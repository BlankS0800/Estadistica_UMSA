import StatisticalOverlay from '../../atoms/data/StatisticalOverlay'
import { Sigma } from 'lucide-react'

const MilestoneCard = ({ milestone, index }) => (
  <article className="relative z-10 w-full overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:w-[48%]">
    <div className="flex items-center justify-between mb-4">
      <span className="text-3xl font-black italic text-[#ea580c]">{milestone.year}</span>
      <div className="h-[2px] flex-1 bg-slate-100 mx-4" />
      <span className="font-mono text-[9px] text-slate-400">Hito #{index + 1}</span>
    </div>

    <div className="px-2">
      <h4 className="mb-2 text-base font-black uppercase leading-tight tracking-tight text-[#002a52] md:text-lg">{milestone.title}</h4>
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500 leading-relaxed">{milestone.desc}</p>
    </div>

    <StatisticalOverlay sigma={`${index}.1`} r2="0.98" n="380" />

    <div className="pointer-events-none hidden w-[48%] flex-col gap-4 px-10 opacity-20 md:flex">
      <div className="flex items-center gap-3">
        <Sigma size={14} />
        <div className="h-[1px] flex-1 bg-slate-300" />
        <span className="font-mono text-[9px]">P(X = {index}) = 0.{index + 1}</span>
      </div>
      <div className="flex flex-col gap-1 pl-6">
        <div className="h-[2px] w-8 bg-[#c2410c]" />
        <div className="h-[2px] w-16 bg-slate-300" />
      </div>
    </div>
  </article>
)

export default MilestoneCard
