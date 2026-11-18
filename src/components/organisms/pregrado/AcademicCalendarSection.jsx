import { Download } from 'lucide-react'
import StatisticalSeal from '../../atoms/data/StatisticalSeal'
import PregradoSectionHeader from '../../molecules/pregrado/PregradoSectionHeader'
import AcademicCalendarExamList from '../../molecules/pregrado/AcademicCalendarExamList'
import AcademicCalendarTimelineItem from '../../molecules/pregrado/AcademicCalendarTimelineItem'

function AcademicCalendarSection({ calendarMeta, examSessionData, regularCourseData, eventTypes, specialNote }) {
  const NoticeIcon = calendarMeta.noticeIcon
  const DetailIcon = specialNote.icon

  return (
    <section id="calendario-academico" className="mx-auto max-w-[1536px] scroll-mt-32 space-y-12 px-4 md:px-12">
      <div className="relative overflow-hidden rounded-3xl border-r-4 border-[#ea580c] bg-[#001d3d] p-5 shadow-xl md:p-6">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <svg className="pointer-events-none absolute right-0 top-0 h-[320px] w-[680px] opacity-[0.22]" viewBox="0 0 680 320" fill="none" aria-hidden="true">
          <path d="M0 156 Q170 62 340 156 T680 156" stroke="#ea580c" strokeWidth="2.3" />
          <path d="M0 186 Q170 92 340 186 T680 186" stroke="#8dc7ff" strokeWidth="1.4" opacity="0.72" />
        </svg>

        <NoticeIcon className="pointer-events-none absolute -left-6 -bottom-6 text-white opacity-5" size={140} />

        <div className="relative z-10 flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="max-w-3xl">
            <h3 className="mb-2 text-xl font-bold uppercase tracking-tight text-white">{calendarMeta.noticeTitle}</h3>
            <p className="rounded-r-xl border-l-4 border-[#ea580c] bg-white/5 py-2.5 pl-4 text-sm font-normal italic leading-relaxed text-blue-200">
              {calendarMeta.noticeText}
            </p>
          </div>

          <div className="shrink-0 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-center backdrop-blur-md">
            <div className="text-2xl font-bold italic tracking-tight text-white">{calendarMeta.term}</div>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#ea580c]">{calendarMeta.termLabel}</p>
          </div>
        </div>
      </div>

      <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <aside className="space-y-8 lg:sticky lg:top-32">
          <AcademicCalendarExamList examMeta={calendarMeta.examSession} examItems={examSessionData} />

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#ea580c] p-8 text-center text-white shadow-lg transition-colors hover:bg-[#c2410c]">
            <calendarMeta.downloadCard.icon size={100} className="pointer-events-none absolute -bottom-4 -right-4 opacity-10" />
            <h4 className="relative z-10 mb-2 text-lg font-black uppercase tracking-tighter">{calendarMeta.downloadCard.title}</h4>
            <p className="relative z-10 mb-6 text-[10px] font-medium italic opacity-80">{calendarMeta.downloadCard.caption}</p>
            <button className="relative z-10 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#ea580c] shadow-md transition hover:bg-slate-100" type="button">
              <Download size={14} /> {calendarMeta.downloadCard.ctaLabel}
            </button>
          </div>
        </aside>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl md:p-6">
          <StatisticalSeal symbol={calendarMeta.seal.symbol} label={calendarMeta.seal.label} value={calendarMeta.seal.value} top="2%" right="5%" className="opacity-[0.09]" />

          <svg className="pointer-events-none absolute left-0 top-0 h-[320px] w-[680px] opacity-[0.12]" viewBox="0 0 680 320" fill="none" aria-hidden="true">
            <path d="M0 150 Q170 58 340 150 T680 150" stroke="#00447e" strokeWidth="2.1" />
            <path d="M0 182 Q170 90 340 182 T680 182" stroke="#ea580c" strokeWidth="1.35" opacity="0.74" />
          </svg>

          <div className="relative mb-4 border-b border-slate-100 pb-1 [&>div]:mb-3 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight md:[&_h2]:text-2xl [&_span]:font-bold [&_span]:tracking-[0.3em] [&_p]:text-sm [&_p]:font-normal">
            <PregradoSectionHeader tag={calendarMeta.tag} title={calendarMeta.title} sub={calendarMeta.sub} />
          </div>

          <div className="relative pl-3 md:pl-4">
            <div className="absolute bottom-4 left-[1.625rem] top-4 w-1 rounded-full bg-slate-100 md:left-[2rem]" />
            <div className="space-y-2.5">
              {regularCourseData.map((event, index) => (
                <AcademicCalendarTimelineItem key={event.event} event={event} index={index} style={eventTypes[event.type]} />
              ))}
            </div>
          </div>

          <div className="group relative mt-5 overflow-hidden rounded-2xl border-2 border-dashed border-[#00447e]/30 bg-blue-50 p-4 transition-colors hover:border-[#00447e]/60">
            <div className="pointer-events-none absolute right-0 top-0 p-6 opacity-5">
              <calendarMeta.noticeIcon size={100} />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4 md:flex-row md:items-start">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white text-[#00447e] shadow-sm">
                <DetailIcon size={20} />
              </div>
              <div>
                <h5 className="mb-1 text-xs font-bold uppercase tracking-widest text-[#001d3d]">{specialNote.title}</h5>
                <p className="text-[13px] font-normal italic leading-relaxed text-[#001d3d]/70">{specialNote.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcademicCalendarSection
