import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, Clock } from 'lucide-react';

export const TopNewsCard = ({ item, idx = 0, mode = 'section' }) => {
  const [imageError, setImageError] = useState(false);
  if (!item) return null;

  const isHero = mode === 'hero';

  return (
    <article
      className={isHero
        ? 'group rounded-[1.25rem] p-3.5 transition-all hover:shadow-2xl cursor-pointer animate-[slideInRight_500ms_ease-out]'
        : 'group rounded-[1.35rem] sm:rounded-[1.5rem] p-4 transition-all hover:shadow-2xl cursor-pointer animate-[slideInRight_500ms_ease-out]'}
      style={{
        animationDelay: `${180 + idx * 90}ms`,
        animationFillMode: 'both',
        background: isHero
          ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 100%)',
        border: isHero ? '1px solid rgba(255,255,255,0.45)' : '1px solid rgba(203,213,225,0.75)',
        backdropFilter: isHero ? 'blur(16px)' : 'none',
      }}
    >
      <div className="flex gap-3.5">
        {item.imageUrl && !imageError ? (
          <div className={isHero ? 'relative shrink-0 w-[66px] h-[66px] rounded-xl overflow-hidden border border-white/50 shadow-lg' : 'relative shrink-0 w-[68px] h-[68px] sm:w-[72px] sm:h-[72px] rounded-xl overflow-hidden border border-white/50 shadow-lg'}>
            <img
              src={item.imageUrl}
              alt={item.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover grayscale-[0.3] contrast-[1.15] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
            />
            <div
              className="absolute top-1.5 left-1.5 size-2 rounded-full shadow-lg"
              style={{ background: item.categoryColor }}
            />
          </div>
        ) : (
          <div className={isHero ? 'relative shrink-0 w-[66px] h-[66px] rounded-xl overflow-hidden border border-white/50 shadow-lg bg-gradient-to-br from-[#001d3d] via-[#003d6e] to-[#00447e] flex items-center justify-center' : 'relative shrink-0 w-[68px] h-[68px] sm:w-[72px] sm:h-[72px] rounded-xl overflow-hidden border border-white/50 shadow-lg bg-gradient-to-br from-[#001d3d] via-[#003d6e] to-[#00447e] flex items-center justify-center'}>
            <div
              className="absolute top-1.5 left-1.5 size-2 rounded-full shadow-lg z-10"
              style={{ background: item.categoryColor }}
            />
            {/* Statistical line chart decoration */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.22] pointer-events-none" viewBox="0 0 100 100" fill="none">
              <path d="M 10 90 L 90 90" stroke="white" strokeWidth="2" />
              <path d="M 10 10 L 10 90" stroke="white" strokeWidth="2" />
              <path d="M 10 70 L 30 50 L 50 60 L 70 30 L 90 40" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="30" cy="50" r="3.5" fill="white" />
              <circle cx="50" cy="60" r="3.5" fill="white" />
              <circle cx="70" cy="30" r="3.5" fill="white" />
            </svg>
            <span className="relative z-10 text-white/90 text-[9px] font-black tracking-widest bg-black/35 px-1.5 py-0.5 rounded backdrop-blur-[1px] uppercase select-none">INFO</span>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span
              className="text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{
                background: `${item.categoryColor}22`,
                color: item.categoryColor,
              }}
            >
              {item.category}
            </span>
            <span className={isHero ? 'text-xs text-slate-500 font-bold uppercase tracking-wider' : 'text-xs text-slate-500 font-bold uppercase tracking-wider'}>
              {item.date}
            </span>
          </div>

          <h4 className={isHero
            ? 'text-sm font-semibold text-[#1e293b] leading-tight mb-2 line-clamp-2 group-hover:text-[#00447e] transition-colors'
            : 'text-sm md:text-base font-semibold text-[#1e293b] leading-tight mb-2 line-clamp-2 group-hover:text-[#00447e] transition-colors'}>
            {item.title}
          </h4>

          <div className={isHero ? 'flex items-center gap-3 text-[10px]' : 'flex items-center gap-3 text-xs'}>
            <div className="flex items-center gap-1 text-slate-400 font-bold">
              <Clock className="size-2.5" />
              {item.readTime}
            </div>
            <a
              href={item.href}
              className="flex items-center gap-1 font-bold uppercase tracking-wider transition-all hover:gap-2"
              style={{ color: item.categoryColor }}
            >
              Leer mas
              <ArrowRight className="size-2.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

TopNewsCard.propTypes = {
  idx: PropTypes.number,
  mode: PropTypes.oneOf(['section', 'hero']),
  item: PropTypes.shape({
    category: PropTypes.string,
    categoryColor: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    readTime: PropTypes.string,
    href: PropTypes.string,
  }),
};
