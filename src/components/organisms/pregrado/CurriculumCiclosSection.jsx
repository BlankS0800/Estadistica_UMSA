import { Download } from 'lucide-react'

const CICLOS_CONFIG = [
  {
    id: 'basico',
    nombre: 'Ciclo Básico',
    semestres: [1, 2],
    descripcion: 'Fundamentos de cálculo, álgebra, lógica de programación y estadística descriptiva.',
  },
  {
    id: 'formacion',
    nombre: 'Ciclo de Formación',
    semestres: [3, 4],
    descripcion: 'Teoría de probabilidades, inferencia matemática, ecuaciones diferenciales y muestreo inicial.',
  },
  {
    id: 'profesional',
    nombre: 'Ciclo Profesional y de Titulación',
    semestres: [5, 6, 7, 8],
    descripcion: 'Modelos lineales, procesos estocásticos, estadística computacional, métodos multivariados, diseño experimental, minería de datos y taller de titulación profesional.',
  },
]

// 1 o 2 semestres: "1° Sem - 2° Sem". Tres o más: "5° a 8° Sem".
const formatSemestres = (semestres) =>
  semestres.length > 2
    ? `${semestres[0]}° a ${semestres[semestres.length - 1]}° Sem`
    : semestres.map((s) => `${s}° Sem`).join(' - ')

export default function CurriculumCiclosSection({
  materias = [],
  electivesAreas = [],
  electivesMeta = { title: ['Materias Optativas', 'Especialización de Perfil'] },
}) {
  const totalOptativas = electivesAreas.reduce((acc, area) => acc + area.items.length, 0)
  const totalHorasOptativas = electivesAreas.reduce(
    (acc, area) => acc + area.items.reduce((sum, item) => sum + (Number(item.ht) || 0), 0),
    0,
  )

  return (
    <section className="mx-auto max-w-[1536px] px-4 md:px-12">
      {/* Único elemento que se conserva de la parte superior: el botón de descarga */}
      <div className="mb-10 flex justify-center md:justify-end">
        <a
          href="/images/pregrado/malla_curricular.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ea580c] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-orange-700"
        >
          <Download size={14} />
          <span>Descargar Malla (JPG)</span>
        </a>
      </div>

      {/* Vista Global Panorámica: 3 ciclos + optativas en columnas progresivas */}
      <div className="rounded-[2.5rem] bg-[#001d3d] p-8 text-white shadow-2xl md:p-12">
        <div className="mb-8 border-b border-white/10 pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
            Visión Longitudinal de la Carrera
          </span>
          <h4 className="mt-1 text-2xl font-black md:text-3xl">
            Ruta de Aprendizaje por Ciclos
          </h4>
          <p className="mt-1 text-xs text-white/60">
            Estructura curricular de 8 semestres organizada en 3 ciclos formativos, complementada con materias optativas de especialización para el dominio de la Ciencia de Datos y Estadística.
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
                      {formatSemestres(ciclo.semestres)}
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

          {/* Etapa 04: todas las materias optativas, agrupadas por área */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ea580c]">
                  Etapa 04
                </span>
              </div>

              <h5 className="mt-2 text-lg font-black text-white">{electivesMeta.title[0]}</h5>
              <p className="mt-1 text-[11px] text-white/60">{electivesMeta.title[1]}</p>

              <div className="mt-4 space-y-4">
                {electivesAreas.map((area) => (
                  <div key={area.title}>
                    <p className="mb-1.5 text-[10px] font-black uppercase tracking-widest text-[#ea580c]">
                      {area.title}
                    </p>
                    <div className="space-y-1.5">
                      {area.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start justify-between gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 text-[11px] transition hover:bg-white/10"
                        >
                          <span className="shrink-0 font-mono text-[10px] font-bold text-sky-300">
                            {item.id}
                          </span>
                          <span className="text-right text-[10px] leading-snug text-white/80">
                            {item.n}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-between border-t border-white/10 pt-3 text-[10px] text-white/50">
              <span>{totalOptativas} optativas</span>
              <span>{totalHorasOptativas} hrs en total</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
