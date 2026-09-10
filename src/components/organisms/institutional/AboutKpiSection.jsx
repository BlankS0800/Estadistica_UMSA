import FloatingSymbols from '../../atoms/layout/FloatingSymbols'
import AchievementCard from '../../molecules/cards/AchievementCard'

const AboutKpiSection = ({ achievements }) => (
  <section className="relative mx-4 overflow-hidden border-x border-b border-slate-200 bg-white py-8 shadow-sm md:py-10">
    <FloatingSymbols />
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-7 px-6 md:grid-cols-4 md:gap-8 md:px-10">
      {achievements.map((item, index) => (
        <AchievementCard key={`${item.label}-${index}`} item={item} index={index} />
      ))}
    </div>
  </section>
)

export default AboutKpiSection
