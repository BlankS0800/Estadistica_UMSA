import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'

const PAGE_SIZE = 6

const normalize = (value = '') =>
  String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

// El naranja de la marca se oscurece un poco para que el texto pequeño se lea bien sobre fondo claro
const readableAccent = (accent) => {
  if (!accent || accent.toLowerCase() === '#ea580c') return accent ? '#c2410c' : '#00447e'
  return accent
}

const formatDate = (iso, fallback = '') => {
  if (!iso) return fallback
  const date = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(date.getTime())) return fallback || iso
  return date.toLocaleDateString('es-BO', { day: 'numeric', month: 'long', year: 'numeric' })
}

const isInternal = (href) => typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')
const isExternal = (href) => typeof href === 'string' && /^https?:\/\//i.test(href)

function NewsLink({ href, className, children }) {
  if (isInternal(href)) return <Link to={href} className={className}>{children}</Link>
  if (isExternal(href)) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
  }
  return <div className={className}>{children}</div>
}

function NewsMedia({ item, className = '', showLabel = true }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden rounded-lg bg-[#001d3d] ${className}`}>
      {item.imageUrl && !failed ? (
        <img
          src={item.imageUrl}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale-[0.35] transition duration-500 group-hover:grayscale-0 motion-safe:group-hover:scale-[1.03]"
        />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#001d3d] via-[#003d6e] to-[#00447e]">
          <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
            <line x1="20" y1="90" x2="180" y2="90" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 20 90 Q 70 90 100 20 T 180 90" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
            <circle cx="60" cy="80" r="2.5" fill="white" />
            <circle cx="140" cy="85" r="2.5" fill="white" />
          </svg>
          {showLabel && (
            <span className="relative z-10 rounded-md border border-white/15 bg-black/35 px-3 py-1 text-sm font-medium text-white/90 backdrop-blur-sm">
              {item.category}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

function Meta({ item, ui }) {
  const date = formatDate(item.dateIso, item.date)
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span className="font-semibold" style={{ color: readableAccent(item.accent) }}>{item.category}</span>
      <time dateTime={item.dateIso} className="text-slate-500">{date}</time>
      {item.readTime && <span className="text-slate-400">{item.readTime} {ui.readLabel}</span>}
      {item.expired && (
        <span className="rounded bg-slate-200 px-1.5 py-0.5 text-xs font-medium text-slate-600">{ui.expiredLabel}</span>
      )}
    </p>
  )
}

function LeadStory({ item, ui }) {
  return (
    <article className="group rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 hover:shadow-xl hover:ring-slate-300 transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1">
      <NewsLink href={item.href} className="block">
        <NewsMedia item={item} className="aspect-[16/10] w-full" />
        <div className="mt-5 px-1 pb-1">
          <Meta item={item} ui={ui} />
          <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#001d3d] transition-colors group-hover:text-[#00447e] md:text-[1.75rem]">
            {item.title}
          </h3>
          {item.excerpt && (
            <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-slate-600 line-clamp-3">{item.excerpt}</p>
          )}
        </div>
      </NewsLink>
    </article>
  )
}

function SideStory({ item, ui }) {
  return (
    <article className="group -mx-3 rounded-xl border-t border-slate-200 px-3 py-4 first:border-t-0 hover:border-transparent hover:bg-white hover:shadow-lg transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1">
      <NewsLink href={item.href} className="flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <Meta item={item} ui={ui} />
          <h3 className="mt-1.5 text-base font-semibold leading-snug text-[#1e293b] transition-colors group-hover:text-[#00447e] line-clamp-3">
            {item.title}
          </h3>
        </div>
        <NewsMedia item={item} showLabel={false} className="aspect-[4/3] w-28 shrink-0 sm:w-36" />
      </NewsLink>
    </article>
  )
}

function GridStory({ item, ui }) {
  return (
    <article className="group rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200/70 hover:shadow-xl hover:ring-slate-300 transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1">
      <NewsLink href={item.href} className="block">
        <NewsMedia item={item} className="aspect-[16/10] w-full" />
        <div className="mt-4 px-1 pb-1">
          <Meta item={item} ui={ui} />
          <h3 className="mt-1.5 text-lg font-semibold leading-snug text-[#1e293b] transition-colors group-hover:text-[#00447e] line-clamp-3">
            {item.title}
          </h3>
          {item.excerpt && <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-2">{item.excerpt}</p>}
        </div>
      </NewsLink>
    </article>
  )
}

export const NewsSection = ({ news = [], ui }) => {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const searching = query.trim().length > 0

  // Las noticias caducadas no se muestran en el listado normal; solo aparecen al buscar.
  const activeNews = useMemo(() => news.filter((item) => !item.expired), [news])

  const categories = useMemo(
    () => [...new Set(activeNews.map((item) => item.category).filter(Boolean))],
    [activeNews],
  )

  const filtered = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean)
    const pool = terms.length > 0 ? news : activeNews
    return pool.filter((item) => {
      if (category && item.category !== category) return false
      if (terms.length === 0) return true
      const haystack = normalize(
        [item.title, item.excerpt, item.category, formatDate(item.dateIso, item.date)].join(' '),
      )
      return terms.every((term) => haystack.includes(term))
    })
  }, [news, activeNews, query, category])

  const lead = searching ? null : filtered[0]
  const side = searching ? [] : filtered.slice(1, 4)
  const rest = searching ? filtered : filtered.slice(4)
  const gridItems = rest.slice(0, visible)
  const hasMore = rest.length > visible

  const changeQuery = (value) => {
    setQuery(value)
    setVisible(PAGE_SIZE)
  }
  const changeCategory = (value) => {
    setCategory(value)
    setVisible(PAGE_SIZE)
  }

  return (
    <section className="bg-[#f1f5f9] px-6 py-16 sm:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#001d3d] md:text-4xl">{ui.title}</h2>
            <p className="mt-2 max-w-xl text-base text-slate-600">{ui.description}</p>
          </div>

          <div className="relative w-full md:w-96">
            <label htmlFor="news-search" className="sr-only">{ui.searchPlaceholder}</label>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              id="news-search"
              type="text"
              inputMode="search"
              enterKeyHint="search"
              autoComplete="off"
              value={query}
              onChange={(event) => changeQuery(event.target.value)}
              placeholder={ui.searchPlaceholder}
              className="w-full rounded-full border border-slate-300 bg-white py-3 pl-11 pr-11 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#00447e] focus:ring-2 focus:ring-[#00447e]/20"
            />
            {query && (
              <button
                type="button"
                onClick={() => changeQuery('')}
                aria-label={ui.clearLabel}
                className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </header>

        {categories.length > 1 && (
          <div className="mt-8 flex gap-6 overflow-x-auto border-b border-slate-200">
            {['', ...categories].map((name) => {
              const active = category === name
              return (
                <button
                  key={name || 'all'}
                  type="button"
                  aria-pressed={active}
                  onClick={() => changeCategory(name)}
                  className={`-mb-px whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition-colors ${
                    active ? 'border-[#ea580c] text-[#001d3d]' : 'border-transparent text-slate-500 hover:text-[#001d3d]'
                  }`}
                >
                  {name || ui.allLabel}
                </button>
              )
            })}
          </div>
        )}

        <p className="mt-6 min-h-5 text-sm text-slate-500" aria-live="polite">
          {searching ? ui.resultsText.replace('{n}', String(filtered.length)) : ''}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white/60 px-6 py-16 text-center">
            <p className="text-lg font-semibold text-[#001d3d]">{ui.emptyTitle}</p>
            <p className="mt-1 text-sm text-slate-500">{ui.emptyText}</p>
          </div>
        ) : (
          <div className="mt-6">
            {lead && (
              <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
                <LeadStory item={lead} ui={ui} />
                {side.length > 0 && (
                  <div className="flex flex-col justify-start">
                    {side.map((item) => <SideStory key={item.id} item={item} ui={ui} />)}
                  </div>
                )}
              </div>
            )}

            {gridItems.length > 0 && (
              <div className={`grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ${lead ? 'mt-14 border-t border-slate-200 pt-12' : ''}`}>
                {gridItems.map((item) => <GridStory key={item.id} item={item} ui={ui} />)}
              </div>
            )}

            {hasMore && (
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisible((count) => count + PAGE_SIZE)}
                  className="rounded-full border border-[#001d3d]/30 px-7 py-2.5 text-sm font-semibold text-[#001d3d] transition-colors hover:border-[#001d3d] hover:bg-[#001d3d] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00447e]"
                >
                  {ui.moreLabel}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
