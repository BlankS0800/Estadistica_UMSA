import { Binary, Target } from 'lucide-react'

const AboutMissionVisionSection = ({ missionVision }) => (
  <section className="relative z-30 mx-4 overflow-hidden border-y-4 border-[#c2410c] bg-[#001d3d] py-12 text-white shadow-xl md:py-16">
    <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 md:gap-12 md:px-10">
      <article className="group relative border-b border-white/15 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-12">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-full bg-[#c2410c] shadow-lg">
            <Target size={24} />
          </div>
          <h3 className="text-2xl font-bold tracking-tight">
            {missionVision.mission.title}
          </h3>
        </div>

        <p className="border-l-2 border-[#c2410c]/40 pl-6 text-base leading-relaxed text-blue-100 md:text-lg">
          {missionVision.mission.text}
        </p>
      </article>

      <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#00447e] p-7 shadow-lg md:p-9">
        <Binary className="absolute -right-10 -top-10 opacity-10" size={180} />

        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-full bg-white text-[#00447e] shadow-lg">
            <missionVision.vision.icon size={24} />
          </div>
          <h3 className="text-2xl font-bold tracking-tight">
            {missionVision.vision.title}
          </h3>
        </div>

        <p className="border-l-2 border-white/15 pl-6 text-base leading-relaxed text-white md:text-lg">
          {missionVision.vision.text}
        </p>
      </article>
    </div>
  </section>
)

export default AboutMissionVisionSection
