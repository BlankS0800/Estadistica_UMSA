import { useState, useMemo } from 'react'
import {
  Download,
  BookOpen,
  Layers,
  Clock,
  Award,
  ChevronRight,
  CheckCircle2,
  PieChart,
  Sigma,
  Code,
  Binary,
} from 'lucide-react'

export const CICLOS_CONFIG = [
  {
    id: 'basico',
    nombre: 'Ciclo Básico',
    semestres: [1, 2],
    descripcion: 'Fundamentos de cálculo, álgebra, lógica de programación y estadística descriptiva.',
    icon: Sigma,
    color: '#00447e',
    badgeClass: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  {
    id: 'formacion',
    nombre: 'Ciclo de Formación',
    semestres: [3, 4],
    descripcion: 'Teoría de probabilidades, inferencia matemática, ecuaciones diferenciales y muestreo inicial.',
    icon: PieChart,
    color: '#0284c7',
    badgeClass: 'bg-sky-100 text-sky-800 border-sky-200',
  },
  {
    id: 'profesional',
    nombre: 'Ciclo Profesional',
    semestres: [5, 6, 7],
    descripcion: 'Modelos lineales, procesos estocásticos, estadística computacional, métodos multivariados y diseño experimental.',
    icon: Code,
    color: '#ea580c',
    badgeClass: 'bg-orange-100 text-orange-800 border-orange-200',
  },
  {
    id: 'titulacion',
    nombre: 'Ciclo de Titulación',
    semestres: [8],
    descripcion: 'Minería de datos, asignaturas optativas especializadas y desarrollo del taller de titulación profesional.',
    icon: Award,
    color: '#16a34a',
    badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
]

export default function CurriculumCiclosSection({
  materias = [],
  planes = [],
  selectedPlanId,
  onSelectPlan,
  areaLegend = [],
}) {
  const [activeCicloId, setActiveCicloId] = useState('basico')
  const [hoveredSubject, setHoveredSubject] = useState(null)

  const activeCiclo = CICLOS_CONFIG.find((c) => c.id === activeCicloId) || CICLOS_CONFIG[0]

  // Materias del ciclo activo
  const materiasDelCiclo = useMemo(() => {
    return materias.filter((m) => activeCiclo.semestres.includes(m.semestre))
  }, [materias, activeCiclo])

  // Estadísticas del ciclo activo
  const statsCiclo = useMemo(() => {
    const totalHoras = materiasDelCiclo.reduce((acc, m) => acc + (Number(m.horasMateria) || 0), 0)
    const totalMaterias = materiasDelCiclo.length
    return { totalHoras, totalMaterias }
  }, [materiasDelCiclo])

  return (
    <section className="mx-auto max-w-[1536px] px-4 md:px-12">
      {/* Selector de Plan de Estudios */}
      <div className="mb-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
            Plan Académico Oficial
          </span>
          <h3 className="mt-1 text-2xl font-black text-[#001d3d]">
            Malla Curricular por Ciclos Formativos
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Selecciona el plan de estudios para visualizar sus asignaturas organizadas pedagógicamente.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5">
          {planes.map((p) => {
            const isSelected = selectedPlanId === p.idPlanEstudio
            return (
              <button
                key={p.idPlanEstudio}
                type="button"
                onClick={() => onSelectPlan && onSelectPlan(p.idPlanEstudio)}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-[#00447e] text-white shadow-md'
                    : 'text-slate-600 hover:bg-white hover:text-[#00447e]'
                }`}
              >
                {p.nombrePlan}
              </button>
            )
          })}
        </div>
      </div>

      {/* Contenedor Principal: Ciclos y Materias */}
      <div className="relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl lg:flex-row">
        {/* Barra Lateral de Ciclos */}
        <aside className="w-full border-r border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] p-6 lg:w-80">
          <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
              Ciclos Formativos
            </h4>
            <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-600">
              4 Ciclos
            </span>
          </div>

          <div className="space-y-3">
            {CICLOS_CONFIG.map((ciclo) => {
              const isSelected = ciclo.id === activeCicloId
              const CicloIcon = ciclo.icon
              const count = materias.filter((m) => ciclo.semestres.includes(m.semestre)).length

              return (
                <button
                  key={ciclo.id}
                  type="button"
                  onClick={() => setActiveCicloId(ciclo.id)}
                  className={`group relative flex w-full flex-col rounded-2xl border-2 p-4 text-left transition-all ${
                    isSelected
                      ? 'border-[#00447e] bg-white shadow-lg'
                      : 'border-transparent bg-white/60 hover:border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: `${ciclo.color}15`,
                          color: ciclo.color,
                        }}
                      >
                        <CicloIcon size={16} />
                      </div>
                      <span className="text-sm font-bold text-[#001d3d]">{ciclo.nombre}</span>
                    </div>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                      {count} mat.
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] font-medium text-slate-500 line-clamp-2">
                    {ciclo.descripcion}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[10px] font-semibold text-slate-400">
                    <span>
                      {ciclo.semestres.length === 1
                        ? `${ciclo.semestres[0]}° Semestre`
                        : ciclo.semestres.length === 2
                        ? `${ciclo.semestres[0]}° y ${ciclo.semestres[1]}° Semestre`
                        : `${ciclo.semestres.slice(0, -1).map((s) => `${s}°`).join(', ')} y ${ciclo.semestres[ciclo.semestres.length - 1]}° Semestre`}
                    </span>
                    {isSelected && <ChevronRight size={14} className="text-[#00447e]" />}
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <a
              href="/images/pregrado/malla_curricular.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ea580c] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-orange-700"
            >
              <Download size={14} />
              <span>Descargar Malla (JPG)</span>
            </a>
          </div>
        </aside>

        {/* Panel de Materias del Ciclo */}
        <div className="flex-1 p-6 lg:p-10">
          {/* Header del Ciclo */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="flex items-center gap-2.5">
                <span className={`rounded-lg px-2.5 py-1 text-xs font-bold ${activeCiclo.badgeClass}`}>
                  {activeCiclo.semestres.map((s) => `${s}° Semestre`).join(' · ')}
                </span>
                <span className="text-xs text-slate-400">|</span>
                <span className="text-xs font-semibold text-slate-500">
                  {statsCiclo.totalMaterias} Asignaturas
                </span>
                <span className="text-xs text-slate-400">|</span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Clock size={12} /> {statsCiclo.totalHoras} Horas Académicas
                </span>
              </div>
              <h3 className="mt-2 text-2xl font-black text-[#001d3d] md:text-3xl">
                {activeCiclo.nombre}
              </h3>
              <p className="mt-1 max-w-2xl text-xs text-slate-600 leading-relaxed">
                {activeCiclo.descripcion}
              </p>
            </div>
          </div>

          {/* Grilla de Materias */}
          {materiasDelCiclo.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 p-12 text-center text-xs text-slate-400">
              No hay materias registradas para este ciclo en el plan seleccionado.
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {materiasDelCiclo.map((m) => {
                const isHovered = hoveredSubject === m.siglaMateriaAct
                const hasPrereqHover =
                  hoveredSubject && m.prerrequisitos && m.prerrequisitos.includes(hoveredSubject)

                return (
                  <div
                    key={m.idMateriaAct || m.siglaMateriaAct}
                    onMouseEnter={() => setHoveredSubject(m.siglaMateriaAct)}
                    onMouseLeave={() => setHoveredSubject(null)}
                    className={`flex flex-col justify-between rounded-2xl border p-4.5 transition-all ${
                      isHovered
                        ? 'border-[#00447e] bg-sky-50/40 shadow-md scale-[1.02]'
                        : hasPrereqHover
                        ? 'border-orange-300 bg-orange-50/50 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                    }`}
                  >
                    <div>
                      {/* Top Bar: Sigla y Semestre */}
                      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                        <span className="font-mono text-xs font-black tracking-wide text-[#00447e]">
                          {m.siglaMateriaAct}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                          {m.semestre}° Semestre
                        </span>
                      </div>

                      {/* Título de la Materia */}
                      <h5 className="mt-2.5 text-sm font-bold text-[#001d3d] leading-snug">
                        {m.nombreMateriaAct}
                      </h5>
                    </div>

                    {/* Metadata inferior: Horas y Prerrequisitos */}
                    <div className="mt-4 border-t border-slate-100 pt-3 text-[11px]">
                      <div className="flex items-center justify-between text-slate-500">
                        <span className="font-medium">Carga horaria:</span>
                        <span className="font-bold text-slate-700">{m.horasMateria} hrs</span>
                      </div>
                      <div className="mt-1.5 flex items-start justify-between gap-2">
                        <span className="font-medium text-slate-500 shrink-0">Prerreq:</span>
                        <span
                          className={`font-mono text-[10px] text-right truncate max-w-[160px] ${
                            m.prerrequisitos === 'Ninguno'
                              ? 'text-slate-400'
                              : 'text-orange-700 font-semibold'
                          }`}
                          title={m.prerrequisitos}
                        >
                          {m.prerrequisitos}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Vista Global Panorámica: Los 4 Ciclos en Columnas Progresivas */}
      <div className="mt-16 rounded-[2.5rem] bg-[#001d3d] p-8 text-white shadow-2xl md:p-12">
        <div className="mb-8 border-b border-white/10 pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
            Visión Longitudinal de la Carrera
          </span>
          <h4 className="mt-1 text-2xl font-black md:text-3xl">
            Ruta de Aprendizaje por Ciclos
          </h4>
          <p className="mt-1 text-xs text-white/60">
            Estructura curricular de 8 semestres organizada en 4 etapas formativas para el dominio de la Ciencia de Datos y Estadística.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CICLOS_CONFIG.map((ciclo, idx) => {
            const materiasCiclo = materias.filter((m) => ciclo.semestres.includes(m.semestre))
            const totalHorasCiclo = materiasCiclo.reduce((acc, m) => acc + (Number(m.horasMateria) || 0), 0)

            return (
              <div
                key={ciclo.id}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#ea580c]">
                      Etapa 0{idx + 1}
                    </span>
                    <span className="text-[10px] text-white/50">
                      {ciclo.semestres.map((s) => `${s}° Sem`).join(' - ')}
                    </span>
                  </div>

                  <h5 className="mt-2 text-lg font-black text-white">{ciclo.nombre}</h5>
                  <p className="mt-1 text-[11px] text-white/60">{ciclo.descripcion}</p>

                  <div className="mt-4 space-y-1.5">
                    {materiasCiclo.map((m) => (
                      <div
                        key={m.idMateriaAct || m.siglaMateriaAct}
                        className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5 text-[11px] transition hover:bg-white/10"
                      >
                        <span className="font-mono text-[10px] font-bold text-sky-300">
                          {m.siglaMateriaAct}
                        </span>
                        <span className="truncate max-w-[130px] text-white/80 text-[10px]" title={m.nombreMateriaAct}>
                          {m.nombreMateriaAct}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-3 text-[10px] text-white/50 flex justify-between">
                  <span>{materiasCiclo.length} asignaturas</span>
                  <span>{totalHorasCiclo} hrs acumuladas</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
