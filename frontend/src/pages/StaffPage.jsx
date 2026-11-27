import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Briefcase, GraduationCap, Mail, SearchIcon, ShieldAlert, Sigma, Users } from 'lucide-react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StatisticalSeal from '../components/atoms/data/StatisticalSeal'
import {
  getStaffData,
  staffHero,
} from '../services/staffData'

// Quita tildes, puntos y mayúsculas: "lopez" encuentra "López" y "msc" encuentra "M.Sc.".
const normalizeText = (value) =>
  String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\./g, '')
    .toLowerCase()

// Todas las palabras escritas deben aparecer (en cualquier orden) en alguno de los campos.
const matchesSearch = (term, ...fields) => {
  const tokens = normalizeText(term).split(/\s+/).filter(Boolean)
  if (tokens.length === 0) return true
  const haystack = normalizeText(fields.join(' '))
  return tokens.every((token) => haystack.includes(token))
}

function StaffPage() {
  const [activeTab, setActiveTab] = useState('docentes')
  const [searchTerm, setSearchTerm] = useState('')
  const [staffData, setStaffData] = useState(null)
  const [apiError, setApiError] = useState(false)
  const resultsRef = useRef(null)

  useEffect(() => {
    let isCurrent = true

    getStaffData()
      .then((data) => {
        if (!isCurrent) return
        setStaffData(data)
        setApiError(data.hasApiError)
      })
      .catch(() => {
        if (isCurrent) {
          setStaffData({ teachers: [], admins: [], assistants: [], hasApiError: true })
          setApiError(true)
        }
      })

    return () => {
      isCurrent = false
    }
  }, [])

  const filteredTeachers = useMemo(
    () =>
      (staffData?.teachers ?? []).filter((t) =>
        matchesSearch(searchTerm, t.degree, t.name, t.role, t.summary, t.email),
      ),
    [searchTerm, staffData?.teachers],
  )
  const filteredAdmins = useMemo(
    () =>
      (staffData?.admins ?? []).filter((a) =>
        matchesSearch(searchTerm, a.name, a.role, a.email),
      ),
    [searchTerm, staffData?.admins],
  )
  const filteredAux = useMemo(
    () =>
      (staffData?.assistants ?? []).filter((x) =>
        matchesSearch(searchTerm, x.name, x.role, x.course),
      ),
    [searchTerm, staffData?.assistants],
  )

  const tabs = [
    { id: 'docentes', label: 'Docentes', icon: Users, count: filteredTeachers.length },
    { id: 'administrativos', label: 'Administrativos', icon: Briefcase, count: filteredAdmins.length },
    { id: 'auxiliares', label: 'Auxiliares', icon: GraduationCap, count: filteredAux.length },
  ]
  const isSearching = searchTerm.trim().length > 0

  // Enter: lleva a los resultados y cambia a la pestaña que tenga coincidencias.
  const goToResults = () => {
    const current = tabs.find((tab) => tab.id === activeTab)
    if (current?.count === 0) {
      const next = tabs.find((tab) => tab.count > 0)
      if (next) setActiveTab(next.id)
    }
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const emptyState =
    (activeTab === 'docentes' && filteredTeachers.length === 0) ||
    (activeTab === 'administrativos' && filteredAdmins.length === 0) ||
    (activeTab === 'auxiliares' && filteredAux.length === 0)

  const hero = staffData?.hero || staffHero
  const getStaffImage = (image) => (image && image !== '/' ? image : hero.imageUrl)

  if (!staffData) {
    return (
      <div className="institutional-page flex min-h-screen items-center justify-center bg-[#f1f5f9] text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
        Cargando personal...
      </div>
    )
  }

  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] selection:bg-[#00447e] selection:text-white text-slate-800">
      <InstitutionalBackdrop />

      <section className="relative overflow-hidden px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
        {apiError && (
          <div className="relative z-20 mx-auto mb-6 max-w-[1440px] rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Algunos datos del plantel no pudieron cargarse desde la API. Se muestran datos de respaldo para esos grupos.
          </div>
        )}
        <StatisticalSeal symbol="psi" label="PERSONAL" value="0.94" top="15%" right="5%" className="opacity-[0.12]" />

        <svg className="pointer-events-none absolute left-0 top-0 h-[340px] w-[720px] opacity-[0.12]" viewBox="0 0 720 340" fill="none" aria-hidden="true">
          <path d="M0 190 Q180 80 360 190 T720 190" stroke="#00447e" strokeWidth="2.6" />
          <path d="M0 222 Q180 112 360 222 T720 222" stroke="#c2410c" strokeWidth="1.7" opacity="0.7" />
        </svg>

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-10 rounded-full bg-[#c2410c]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{hero.eyebrow}</span>
            </div>

            <h2 className="mb-8 text-5xl font-black uppercase leading-[0.95] tracking-tighter text-[#002a52] md:text-7xl">
              {hero.title[0]} <br />
              <span className="font-serif italic lowercase tracking-tight text-slate-400">{hero.title[1]}</span>
            </h2>

            <div className="max-w-lg">
              <p className="mb-10 rounded-r-2xl border-l-4 border-[#c2410c] bg-white/30 py-4 pl-6 text-sm font-medium leading-relaxed text-slate-500 shadow-sm md:text-base">
                {hero.description}
              </p>

              <div className="relative group">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-hover:text-[#c2410c]" size={18} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && goToResults()}
                  placeholder="Buscar por nombre o especialidad..."
                  aria-label="Buscar en el plantel"
                  className="w-full rounded-full border border-slate-200 bg-white py-4 pl-12 pr-6 text-xs font-bold uppercase tracking-widest outline-none transition-all focus:ring-2 focus:ring-[#00447e] shadow-xl"
                />
              </div>

              {isSearching && (
                <p className="mt-4 pl-6 text-[10px] font-black uppercase tracking-widest text-slate-500" role="status" aria-live="polite">
                  Docentes: {filteredTeachers.length} · Administrativos: {filteredAdmins.length} · Auxiliares: {filteredAux.length}
                  <span className="mt-1 block font-bold normal-case tracking-normal text-slate-400">
                    Presiona Enter para ver los resultados.
                  </span>
                </p>
              )}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img src={hero.imageUrl} className="h-[450px] w-full object-cover" alt="Personal UMSA" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-10 right-10 flex flex-col items-end text-white drop-shadow-2xl">
              <span className="text-4xl font-black italic tracking-tighter">{hero.badgeSymbol || 'omega'}</span>
              <p className="mt-1 border-t border-white/40 pt-1 text-[10px] font-bold uppercase tracking-[0.3em]">{hero.badgeText || 'Talento Humano'}</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={resultsRef} className="mb-12 scroll-mt-28 px-6 md:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap justify-center gap-4 md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 rounded-full border-b-4 px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab.id
                  ? 'scale-105 border-[#c2410c] bg-[#00447e] text-white shadow-2xl'
                  : 'border-transparent bg-white text-slate-400 hover:bg-slate-50'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
              {isSearching && <span className="opacity-70">({tab.count})</span>}
            </button>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[4rem] border-y border-slate-100 bg-white px-6 py-12 shadow-inner md:rounded-[6rem] md:px-10 md:py-24">
        <StatisticalSeal symbol="theta" label="RATIO" value="0.92" bottom="5%" left="5%" className="opacity-[0.12]" />

        <svg className="pointer-events-none absolute -right-16 top-8 h-[260px] w-[700px] opacity-[0.12]" viewBox="0 0 700 260" fill="none" aria-hidden="true">
          <path d="M0 140 Q175 48 350 140 T700 140" stroke="#00447e" strokeWidth="2.4" />
          <path d="M0 172 Q175 80 350 172 T700 172" stroke="#c2410c" strokeWidth="1.6" opacity="0.75" />
        </svg>

        <div className="mx-auto max-w-[1440px]">
          {activeTab === 'docentes' && (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {filteredTeachers.map((doc) => (
                <article key={doc.id || doc.email} className="group relative overflow-hidden rounded-[3.5rem] border border-slate-100 bg-[#f8fafc] p-10 transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-2xl">
                  <div className="absolute right-8 top-6 font-mono text-[9px] font-black uppercase tracking-widest text-slate-200 transition-colors group-hover:text-[#c2410c]">r = 0.92</div>
                  <div className="mb-8 size-14 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-colors group-hover:ring-2 group-hover:ring-[#c2410c]">
                    <img
                      src={getStaffImage(doc.photo)}
                      alt={`Foto de ${doc.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-xl font-black uppercase leading-tight tracking-tighter text-[#002a52]">{doc.degree} {doc.name}</h3>
                  <p className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-[#c2410c]">{doc.role}</p>
                  {doc.summary && (
                    <div className="mb-10 space-y-3">
                      <p className="border-b border-slate-100 pb-2 text-[9px] font-black uppercase tracking-widest text-slate-400">Resumen profesional:</p>
                      <div className="flex flex-wrap gap-2">
                        <p className="text-xs leading-relaxed text-slate-500">{doc.summary}</p>
                      </div>
                    </div>
                  )}
                  <a href={doc.email ? `mailto:${doc.email}` : undefined} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00447e]/5 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-[#00447e] transition-all hover:bg-[#00447e] hover:text-white">
                    <Mail size={14} /> Enviar Correo
                  </a>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'administrativos' && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {filteredAdmins.map((adm, i) => (
                <article key={`${adm.name}-${i}`} className="group relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-8 text-center transition-[box-shadow,border-color] duration-300 hover:shadow-xl">
                  <div className="absolute left-1/2 top-2 -translate-x-1/2 text-4xl font-black text-[#00447e] opacity-[0.04] transition-opacity group-hover:opacity-[0.12]">{adm.symbol}</div>
                  <div className="mx-auto mb-6 size-16 overflow-hidden rounded-full border border-slate-100 bg-[#f8fafc] shadow-inner transition-colors group-hover:ring-2 group-hover:ring-[#c2410c]">
                    <img
                      src={getStaffImage(adm.photo)}
                      alt={`Foto de ${adm.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="mb-2 text-sm font-black uppercase leading-tight text-[#002a52]">{adm.name}</h4>
                  <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">{adm.role}</p>
                  <button type="button" className="mx-auto flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#c2410c] transition-[gap] duration-300 hover:gap-4">
                    Contactar <ArrowRight size={12} />
                  </button>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'auxiliares' && (
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
              {filteredAux.map((aux, i) => (
                <article key={`${aux.name}-${i}`} className="group relative flex flex-col sm:flex-row gap-5 sm:gap-8 overflow-hidden rounded-[4rem] border border-slate-100 bg-white p-10 shadow-xl">
                  <div className="size-20 shrink-0 overflow-hidden rounded-[2rem] border border-[#c2410c]/10 bg-[#c2410c]/5 transition-colors duration-300 group-hover:ring-2 group-hover:ring-[#c2410c]">
                    <img
                      src={getStaffImage(aux.photo)}
                      alt={`Foto de ${aux.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="mb-2 text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">{aux.stats}</p>
                    <h3 className="mb-1 text-xl font-black uppercase tracking-tighter text-[#002a52]">{aux.name}</h3>
                    <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#c2410c]">{aux.role}</p>
                    {aux.type === 'academico' && (
                      <>
                        <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                          <Sigma size={14} className="text-slate-400" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{aux.course}</span>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-2 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                          <span>Paralelo: {aux.parallel}</span>
                          <span>Días: {aux.days}</span>
                          <span>Horario: {aux.schedule}</span>
                          <span>Aula: {aux.classroom}</span>
                        </div>
                      </>
                    )}
                    {aux.type !== 'academico' && (
                      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Área de {aux.type}
                      </div>
                    )}
                  </div>
                  <div className="absolute right-8 top-4 font-mono text-[8px] font-black italic text-slate-50">INT f(x) dx</div>
                </article>
              ))}
            </div>
          )}

          {emptyState && (
            <div className="py-20 text-center">
              <ShieldAlert className="mx-auto mb-6 text-slate-200" size={60} />
              <p className="text-xl font-black uppercase tracking-widest text-slate-300">No se encontraron resultados</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default StaffPage
