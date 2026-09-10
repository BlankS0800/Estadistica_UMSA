import { useMemo, useState } from 'react'
import { FileText, Image, RotateCcw, Save, Search } from 'lucide-react'
import { Button } from '../components/atoms/buttons/Button.jsx'

const textEditorTableSchema = {
  primaryKey: 'clave_campo',
  fields: ['clave_campo', 'pagina_slug', 'valor', 'tipo'],
}

const editableGeneralPages = [
  { value: '/inicio', label: 'Inicio' },
  { value: '/institucional/acerca', label: 'Institucional / Acerca' },
  { value: '/institucional/acreditacion', label: 'Institucional / Acreditacion' },
  { value: '/institucional/convenios', label: 'Institucional / Convenios' },
  { value: '/institucional/reglamentos', label: 'Institucional / Reglamentos' },
  { value: '/contacto', label: 'Contacto' },
  { value: '/recursos/biblioteca', label: 'Recursos / Biblioteca' },
  { value: '/recursos/revistas', label: 'Recursos / Revistas' },
  { value: '/recursos/documentos', label: 'Recursos / Documentos' },
]

const textEditorTable = [
  {
    clave_campo: 'inicio_badge',
    pagina_slug: '/inicio',
    valor: 'FACULTAD DE ESTADÍSTICA',
    tipo: 'texto',
    etiqueta: 'Insignia del encabezado',
  },
  {
    clave_campo: 'inicio_titulo',
    pagina_slug: '/inicio',
    valor: 'Formamos líderes para la innovación y la estadística.',
    tipo: 'texto',
    etiqueta: 'Título principal',
  },
  {
    clave_campo: 'inicio_descripcion',
    pagina_slug: '/inicio',
    valor:
      'Impulsamos la investigación, la educación superior y la transformación digital con un enfoque analítico, ético y cercano a la comunidad.',
    tipo: 'texto',
    etiqueta: 'Descripción principal',
  },
  {
    clave_campo: 'inicio_hero_imagen',
    pagina_slug: '/inicio',
    valor: '/images/inicio/imagen1.jpeg',
    tipo: 'imagen',
    etiqueta: 'Imagen principal',
  },
  {
    clave_campo: 'acerca_titulo',
    pagina_slug: '/institucional/acerca',
    valor: 'Somos la facultad de estadística',
    tipo: 'texto',
    etiqueta: 'Título principal',
  },
  {
    clave_campo: 'acerca_descripcion',
    pagina_slug: '/institucional/acerca',
    valor:
      'Nuestra misión es fortalecer la formación, la investigación y la proyección social mediante la estadística, la ciencia de datos y la innovación.',
    tipo: 'texto',
    etiqueta: 'Descripción principal',
  },
  {
    clave_campo: 'acerca_hero_imagen',
    pagina_slug: '/institucional/acerca',
    valor: '/images/institucional/acerca_hero.jpeg',
    tipo: 'imagen',
    etiqueta: 'Imagen principal',
  },
  {
    clave_campo: 'contacto_titulo',
    pagina_slug: '/contacto',
    valor: 'Contáctanos',
    tipo: 'texto',
    etiqueta: 'Título principal',
  },
  {
    clave_campo: 'contacto_descripcion',
    pagina_slug: '/contacto',
    valor:
      'Estamos para responder tus consultas sobre admisiones, investigación, servicios y coordinación académica.',
    tipo: 'texto',
    etiqueta: 'Descripción principal',
  },
]

const hasUniqueTextEditorKeys = (records) => {
  const keys = records.map((record) => record.clave_campo)
  return new Set(keys).size === keys.length
}

function TextEditorPage() {
  const [selectedPage, setSelectedPage] = useState('/inicio')
  const [items, setItems] = useState(textEditorTable)
  const [query, setQuery] = useState('')
  const [savedMessage, setSavedMessage] = useState('')
  const [isDirty, setIsDirty] = useState(false)

  const pageFields = useMemo(
    () =>
      items.filter(
        (item) =>
          item.pagina_slug === selectedPage &&
          `${item.clave_campo} ${item.etiqueta} ${item.valor}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [items, query, selectedPage],
  )

  const handleValueChange = (clave_campo, nextValue) => {
    setItems((current) =>
      current.map((item) =>
        item.clave_campo === clave_campo ? { ...item, valor: nextValue } : item,
      ),
    )
    setIsDirty(true)
    setSavedMessage('')
  }

  const handleSave = () => {
    if (!hasUniqueTextEditorKeys(items)) {
      setSavedMessage(`No se puede guardar: ${textEditorTableSchema.primaryKey} duplicada.`)
      return
    }

    const payload = items.filter((item) => item.pagina_slug === selectedPage)
    setSavedMessage(
      `Listos ${payload.length} registro(s) para actualizar por ${textEditorTableSchema.primaryKey}.`,
    )
    setIsDirty(false)
  }

  const handleReset = () => {
    setItems(textEditorTable)
    setIsDirty(false)
    setSavedMessage('Cambios descartados.')
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] bg-white/90 p-6 shadow-card ring-1 ring-slate-200 backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-umsa-700">
              Administración de contenido
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Textos e imágenes del portal
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Edita registros generales de contenido. Los apartados con datos estructurados tienen su propio gestor.
            </p>
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
              {editableGeneralPages.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <label className="sr-only" htmlFor="field-search">Buscar campo</label>
            <input
              id="field-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar campo o contenido"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-umsa-500 focus:bg-white focus:ring-2 focus:ring-umsa-100"
            />
          </div>
          <p className="text-sm text-slate-500">{pageFields.length} registro(s) visible(s)</p>
        </div>

        <div className="mt-5 grid gap-5">
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
                    <p className="text-sm font-bold text-slate-800">{field.etiqueta}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      {field.clave_campo} · {field.tipo}
                    </p>
                  </div>
                  {field.tipo === 'imagen' ? (
                    <Image className="h-5 w-5 text-umsa-700" aria-hidden="true" />
                  ) : (
                    <FileText className="h-5 w-5 text-umsa-700" aria-hidden="true" />
                  )}
                </div>

                <label className="sr-only" htmlFor={field.clave_campo}>
                  Editar {field.clave_campo}
                </label>
                {field.tipo === 'imagen' ? (
                  <div className="grid gap-4 md:grid-cols-[1fr_13rem]">
                    <input
                      id={field.clave_campo}
                      type="url"
                      value={field.valor}
                      onChange={(event) => handleValueChange(field.clave_campo, event.target.value)}
                      placeholder="/images/ruta-de-la-imagen.jpg"
                      className="h-fit w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 shadow-sm transition focus:border-umsa-500 focus:outline-none focus:ring-2 focus:ring-umsa-100"
                    />
                    <div className="aspect-video overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-200">
                      <img src={field.valor} alt="Vista previa del contenido" className="h-full w-full object-cover" />
                    </div>
                  </div>
                ) : (
                  <textarea
                    id={field.clave_campo}
                    value={field.valor}
                    onChange={(event) => handleValueChange(field.clave_campo, event.target.value)}
                    rows={field.valor.length > 140 ? 5 : 3}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base leading-7 text-slate-700 shadow-sm transition focus:border-umsa-500 focus:outline-none focus:ring-2 focus:ring-umsa-100"
                  />
                )}
              </div>
            ))
          )}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-h-[24px] text-sm text-emerald-700">
            {isDirty ? 'Hay cambios sin guardar.' : savedMessage}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Descartar
            </button>
            <Button onClick={handleSave}>
              <Save className="h-4 w-4" aria-hidden="true" />
              Guardar cambios
            </Button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
          La pantalla prepara registros para la tabla <strong>seccion_pagina</strong>. La persistencia real requiere un endpoint del backend para leer y actualizar por <strong>clave_campo</strong>.
        </div>
      </section>
    </div>
  )
}

export default TextEditorPage
