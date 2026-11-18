import { CalendarDays } from 'lucide-react'

function AcademicCalendarTimelineItem({ event, style, index }) {
  const EventIcon = event.icon

  return (
    <article
      className="group relative flex items-start gap-3 md:gap-4"
      style={{ animationDelay: `${index * 55}ms` }}
    >
      <div className={`relative z-10 flex size-8 shrink-0 items-center justify-center rounded-lg border-2 border-white text-white shadow-md transition-transform duration-300 group-hover:scale-110 md:size-9 ${style.color}`}>
        <EventIcon size={14} />
      </div>

      <div className={`flex-1 rounded-xl border border-slate-100 bg-[#f8fafc] px-3 py-2 transition-all duration-300 hover:border-l-[5px] hover:bg-white hover:shadow-lg md:px-4 md:py-2.5 ${style.border}`}>
        <div className="mb-0.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <span className={`inline-block rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white ${style.color}`}>
            {style.label}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-500">
            <CalendarDays size={12} className="text-slate-400" /> {event.date}
          </span>
        </div>
        <h4 className={`text-[13px] font-semibold uppercase leading-snug tracking-normal ${style.text}`}>
          {event.event}
        </h4>
      </div>
    </article>
  )
}

export default AcademicCalendarTimelineItem
