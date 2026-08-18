import { useMemo, useState } from 'react'
import { Button } from '../components/atoms/buttons/Button.jsx'
import { textEditorPageOptions, textEditorTable } from '../services/textEditorData.js'

function TextEditorPage() {
  const [selectedPage, setSelectedPage] = useState('/inicio')
  const [items, setItems] = useState(textEditorTable)
  const [savedMessage, setSavedMessage] = useState('')

  const pageFields = useMemo(
    () => items.filter((item) => item.pagina_slug === selectedPage),
    [items, selectedPage],
  )

  const handleValueChange = (clave_campo, nextValue) => {
    setItems((current) =>
      current.map((item) =>
        item.clave_campo === clave_campo ? { ...item, valor: nextValue } : item,
      ),
    )
  }

  const handleSave = () => {
    const payload = items.filter((item) => item.pagina_slug === selectedPage)
    setSavedMessage(
      `Se guardaron ${payload.length} texto(s) para ${selectedPage}.`,
    )
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] bg-white/90 p-6 shadow-card ring-1 ring-slate-200 backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-umsa-700">
              Editor de contenido
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Editor de texto institucional
            </h1>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-sm font-medium text-slate-600" htmlFor="page-filter">
              Página
            </label>
            <select
              id="page-filter"
              value={selectedPage}
              onChange={(event) => setSelectedPage(event.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 outline-none ring-0 transition focus:border-umsa-500 focus:bg-white"
            >
              {textEditorPageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 grid gap-5">
          {pageFields.length === 0 ? (
            <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
              No hay textos configurados para esta página.
            </div>
          ) : (
            pageFields.map((field) => (
              <div
                key={field.clave_campo}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-5 shadow-sm"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                      {field.clave_campo}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">Tipo: {field.tipo}</p>
                  </div>
                </div>

                <label className="sr-only" htmlFor={field.clave_campo}>
                  Editar {field.clave_campo}
                </label>
                <textarea
                  id={field.clave_campo}
                  value={field.valor}
                  onChange={(event) => handleValueChange(field.clave_campo, event.target.value)}
                  rows={6}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base leading-7 text-slate-700 shadow-sm transition focus:border-umsa-500 focus:outline-none focus:ring-2 focus:ring-umsa-100"
                />
              </div>
            ))
          )}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-h-[24px] text-sm text-emerald-700">
            {savedMessage}
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
              Cancelar
            </Button>
            <Button onClick={handleSave}>Guardar cambios</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TextEditorPage
