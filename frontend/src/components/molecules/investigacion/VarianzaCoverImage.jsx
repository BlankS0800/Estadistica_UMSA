import { Sigma } from 'lucide-react'

const VarianzaCoverImage = ({ edition, year, isLarge = false }) => (
  <div
    className={[
      'group relative flex w-full items-center justify-center overflow-hidden border border-slate-200 bg-slate-50 shadow-sm transition-all duration-500 group-hover:shadow-lg',
      isLarge ? 'h-[400px] rounded-[1.5rem]' : 'h-64 rounded-2xl',
    ].join(' ')}
  >
    <img 
      src={`/images/investigacion/revista-varianza/varianza_${edition}.jpg`} 
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
      alt={`Portada Varianza N ${edition}`}
    />
  </div>
)

export default VarianzaCoverImage
