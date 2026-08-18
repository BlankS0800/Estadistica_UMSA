import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import BarcodeSVG from './BarcodeSVG';

export default function BookCover({ src, title, className = '', imgClassName = '' }) {
  const [hasError, setHasError] = useState(false);

  // Generamos un gradiente determinista basado en el título del libro para variedad visual
  const getGradientClass = (str) => {
    if (!str) return 'from-[#001d3d] to-[#003566]';
    const sum = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const options = [
      'from-[#001d3d] to-[#003566]', // Deep blue
      'from-[#0f172a] to-[#1e293b]', // Slate
      'from-[#052e16] to-[#064e3b]', // Deep green
      'from-[#311005] to-[#451a03]', // Brownish
      'from-[#1e1b4b] to-[#312e81]', // Indigo
      'from-[#1c1917] to-[#292524]', // Dark stone
    ];
    return options[sum % options.length];
  };

  const handleLoad = (e) => {
    const img = e.target;
    if (img.naturalWidth <= 1 && img.naturalHeight <= 1) {
      setHasError(true);
    }
  };

  if (!src || hasError) {
    const gradient = getGradientClass(title);
    return (
      <div
        className={`w-full h-full bg-gradient-to-br ${gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden select-none border border-white/10 ${className}`}
      >
        {/* Decoraciones de líneas matemáticas finas */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex flex-col justify-between p-2 font-mono text-[8px] leading-none">
          <div>f(x) = (1/σ√2π)e^(-(x-μ)²/2σ²)</div>
          <div className="text-right">∫ x dx = x²/2 + C</div>
        </div>

        {/* Header de la Biblioteca */}
        <div className="flex justify-between items-start border-b border-white/20 pb-3 relative z-10">
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#ea580c]">UMSA</span>
          <span className="text-[8px] font-bold text-white/50 tracking-widest">ESTADÍSTICA</span>
        </div>

        {/* Contenido Central: Icono y Título */}
        <div className="my-auto flex flex-col items-center text-center relative z-10 px-2">
          <BookOpen className="text-white/30 mb-4" size={32} strokeWidth={1.5} />
          <h5 className="text-xs sm:text-sm font-black uppercase tracking-tight leading-tight line-clamp-4 text-white/95">
            {title}
          </h5>
        </div>

        {/* Footer de la Portada: Código y Código de Barras */}
        <div className="border-t border-white/10 pt-4 flex flex-col gap-2 relative z-10 mt-auto">
          <div className="flex justify-between items-center text-white/40">
            <span className="text-[8px] font-bold tracking-wider">REF-BIB</span>
            <span className="text-[8px] font-mono">EST-2026</span>
          </div>
          <div className="bg-white/95 p-1 rounded-sm shadow-sm h-6 flex items-center justify-center">
            <BarcodeSVG className="text-slate-900 w-full h-full opacity-80" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      onLoad={handleLoad}
      onError={() => setHasError(true)}
      className={imgClassName}
    />
  );
}
