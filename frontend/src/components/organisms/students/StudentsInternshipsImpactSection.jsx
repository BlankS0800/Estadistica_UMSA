import StudentsCenterSectionHeader from '../../molecules/students/StudentsCenterSectionHeader'

function StudentsInternshipsImpactSection({ nodes }) {
  return (
    <section className="relative overflow-hidden bg-[#001d3d] px-6 py-24 text-white md:px-12">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '38px 38px' }} />

      <div className="relative mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-[3.2rem] border-4 border-white bg-[#f8fafc] p-10 text-[#001d3d] shadow-2xl md:p-14">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#001d3d 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative z-10 mb-10 text-center">
            <h3 className="mb-2 text-3xl font-black uppercase tracking-tighter">Red institucional</h3>
            <p className="text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-500">Aliados que potencian la practica profesional</p>
          </div>

          <div className="relative z-10 flex h-[300px] items-center justify-center overflow-hidden rounded-3xl border-2 border-blue-100 bg-blue-50">
            <div className="absolute size-52 rounded-full border border-blue-200/70" aria-hidden="true" />
            {nodes.map((node) => (
              <div
                key={node.label}
                className="absolute flex cursor-pointer flex-col items-center"
                style={{ left: node.x, top: node.y }}
              >
                <div className="size-3 rounded-full shadow-[0_0_14px_currentColor]" style={{ background: node.color, color: node.color }} />
                <div className="mt-2 rounded border border-slate-200 bg-white px-3 py-1 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest shadow-md">
                  {node.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsInternshipsImpactSection
