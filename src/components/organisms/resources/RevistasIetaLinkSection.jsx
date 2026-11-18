import { Button } from '../../atoms/buttons/Button'

const isExternal = (url) => /^https?:\/\//i.test(url)

function RevistasIetaLinkSection({ section }) {
  const url = section.url || '/investigacion/acerca-ieta'
  const linkProps = isExternal(url) ? { href: url } : { to: url }

  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-12">
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center md:px-6">
        <div className="border-l-4 border-[#ea580c] pl-4">
          <h3 className="text-base font-bold tracking-tight text-[#001d3d] md:text-lg">{section.title}</h3>
          <p className="mt-0.5 text-sm text-slate-500">{section.text}</p>
        </div>
        <Button variant="orange" className="shrink-0 whitespace-nowrap" {...linkProps}>
          {section.buttonText}
        </Button>
      </div>
    </section>
  )
}

export default RevistasIetaLinkSection
