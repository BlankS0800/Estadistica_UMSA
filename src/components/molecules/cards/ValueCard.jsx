import { GaussianCurve, MiniBarChart, ScatterPlot, TrendLineChart } from '../../atoms/data/StatisticalCharts'
import StatisticalOverlay from '../../atoms/data/StatisticalOverlay'

const chartByIndex = {
  0: GaussianCurve,
  1: MiniBarChart,
  2: TrendLineChart,
  3: ScatterPlot,
}

const ValueCard = ({ value, index }) => {
  const Chart = chartByIndex[index % 4]

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition-[background-color,box-shadow,border-color,transform] duration-300 motion-reduce:transition-none hover:bg-white hover:shadow-lg md:p-7">
      <Chart color={value.color} opacity={0.1} />
      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between">
          <div className="flex size-12 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 motion-reduce:transition-none group-hover:scale-105" style={{ background: `${value.color}15` }}>
            <value.icon className="size-6" style={{ color: value.color }} />
          </div>
        </div>
        <h3 className="mb-2 text-xl font-bold tracking-tight" style={{ color: value.color }}>{value.title}</h3>
        <p className="text-sm leading-relaxed text-slate-600 md:text-base">{value.description}</p>
      </div>
    </article>
  )
}

export default ValueCard
