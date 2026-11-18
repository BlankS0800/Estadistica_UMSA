import StatisticalSeal from '../../atoms/data/StatisticalSeal'

const AuthoritiesStructureSection = ({ structure }) => (
  <section className="relative overflow-hidden border-b border-slate-200 bg-white px-6 py-24 md:px-10">
    <div className="mx-auto max-w-[1200px]">
      <div className="mb-12 text-center">
        <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.6em] text-[#c2410c]">{structure.subtitle}</span>
        <h2 className="mt-4 text-4xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">{structure.title}</h2>
      </div>

      {structure.imageUrl ? (
        <a
          href={structure.imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Abrir en tamaño completo"
          className="block rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl md:p-6"
        >
          <img
            src={structure.imageUrl}
            alt={`${structure.subtitle}: ${structure.title}`}
            loading="lazy"
            className="mx-auto h-auto w-full rounded-xl"
          />
        </a>
      ) : (
        <p className="rounded-[2rem] border-2 border-dashed border-slate-200 px-6 py-16 text-center text-sm font-bold uppercase tracking-widest text-slate-400">
          El organigrama estará disponible próximamente.
        </p>
      )}
    </div>
  </section>
)

export default AuthoritiesStructureSection