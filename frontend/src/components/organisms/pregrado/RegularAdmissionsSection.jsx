import { ExternalLink } from 'lucide-react'
import PregradoSectionHeader from '../../molecules/pregrado/PregradoSectionHeader'

function RegularAdmissionsSection({ section, visuals }) {
  const RegularAIcon = visuals?.regularA
  const RegularBIcon = visuals?.regularB

  return (
    <section className="mx-auto mb-20 max-w-[1536px] px-4 md:px-12">
      <PregradoSectionHeader tag={section.tag} title={section.title} sub={section.sub} />

      <div className="grid gap-8 lg:grid-cols-2">
        {section.cards.map((card, index) => (
          <article key={card.id} className="group relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-10 shadow-xl transition-all hover:shadow-2xl md:p-14">
            <div className="absolute right-0 top-0 p-10 opacity-[0.03] transition-transform duration-700 group-hover:scale-110">
              {index === 0
                ? (RegularAIcon && <RegularAIcon size={200} className="text-[#001d3d]" />)
                : (RegularBIcon && <RegularBIcon size={200} className="text-[#ea580c]" />)}
            </div>

            <div className="relative z-10 mb-8 flex items-center gap-5">
              <div className={`flex size-16 items-center justify-center rounded-2xl shadow-inner ${card.style === 'blue' ? 'border border-blue-100 bg-blue-50 text-[#001d3d]' : 'border border-orange-100 bg-orange-50 text-[#ea580c]'}`}>
                <card.icon size={32} />
              </div>
              <div>
                <p className={`mb-1 text-base sm:text-base md:text-lg font-black uppercase tracking-widest ${card.style === 'blue' ? 'text-[#ea580c]' : 'text-[#001d3d]'}`}>{card.badge}</p>
                <h3 className="text-3xl font-black uppercase leading-none tracking-tighter text-[#001d3d]">{card.title}</h3>
              </div>
            </div>

            <p className="relative z-10 mb-8 text-slate-500 font-medium leading-relaxed italic">{card.description}</p>

            <a href={card.cta.href} target="_blank" rel="noreferrer" className={`relative z-10 inline-flex items-center gap-3 rounded-xl px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest transition-all ${card.style === 'blue' ? 'bg-[#001d3d] text-white shadow-lg hover:bg-[#ea580c]' : 'border-2 border-slate-200 bg-white text-[#001d3d] shadow-sm hover:border-[#001d3d]'}`}>
              {card.cta.label} <ExternalLink size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RegularAdmissionsSection
