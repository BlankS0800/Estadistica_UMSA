import { ArrowRight, Handshake } from 'lucide-react'
import { Link } from 'react-router-dom'

const isInternal = (href) => href.startsWith('/') && !href.startsWith('//')

const linkClass =
  'group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#ea580c] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-[#c2410c]'

function StudentsInternshipsConveniosSection({ section }) {
  const { tag, title, sub, label, href } = section

  return (
    <section className="mx-auto max-w-[1536px] px-6 pb-24 md:px-12">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl md:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-start gap-5">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#001d3d] text-white">
              <Handshake size={26} />
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.3em] text-[#ea580c]">{tag}</p>
              <h3 className="text-2xl font-bold tracking-tight text-[#001d3d] md:text-3xl">{title}</h3>
              <p className="mt-2 max-w-2xl text-base text-slate-500">{sub}</p>
            </div>
          </div>

          {isInternal(href) ? (
            <Link to={href} className={linkClass}>
              {label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default StudentsInternshipsConveniosSection
