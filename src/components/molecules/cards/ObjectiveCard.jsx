import StatisticalOverlay from '../../atoms/data/StatisticalOverlay'

const ObjectiveCard = ({ objective }) => (
  <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-[box-shadow,border-color] duration-300 motion-reduce:transition-none hover:shadow-lg md:p-7">
    <span className="absolute -right-4 -top-4 text-6xl font-black text-slate-100 transition-colors duration-300 motion-reduce:transition-none group-hover:text-orange-50">{objective.id}</span>

    <h5 className="relative z-10 mb-3 text-lg font-bold tracking-tight text-[#002a52] md:text-xl">{objective.t}</h5>
    <p className="relative z-10 text-sm leading-relaxed text-slate-600 md:text-base">{objective.d}</p>

    <StatisticalOverlay sigma="1.05" r2="0.94" n="380" />
  </article>
)

export default ObjectiveCard
