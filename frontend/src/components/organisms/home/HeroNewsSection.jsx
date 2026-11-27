import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'lucide-react';
import { StatisticalAnnotations } from '../../atoms/data/Stats';
import { HeroSlideContent } from '../../molecules/home/HeroSlideContent';

const readStat = (statEntry) => {
  if (!statEntry) return '';
  if (typeof statEntry !== 'string') return String(statEntry);
  const parts = statEntry.split('=');
  return parts[1] ? parts[1].trim() : statEntry;
};

export const HeroNewsSection = ({ slides = [], scrollLabel = 'Últimas noticias' }) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (idx) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrent(idx);
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, slides.length]);

  if (!slides.length) return null;

  const slide = slides[current];
  const scrollToNews = () => {
    const newsSection = document.getElementById('news-section-full');
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      className="relative w-full bg-[#0a1628] overflow-hidden min-h-[560px] pb-20 md:pb-0 md:h-[clamp(600px,78vh,760px)]"
    >
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={`${s.title}-${s.imageUrl}`}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <img
              src={s.imageUrl}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[0.7] contrast-[1.2]"
              style={{ filter: 'grayscale(0.7) contrast(1.2)' }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(100deg, rgba(10,22,40,0.86) 0%, rgba(10,22,40,0.66) 55%, rgba(10,22,40,0.38) 100%)',
              }}
            />

            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.07]"
                viewBox="0 0 1400 900"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0 650C350 650 700 480 1050 220C1200 140 1320 120 1400 650"
                  stroke="white"
                  strokeWidth="2.5"
                />
                <path
                  d="M0 680C350 680 700 510 1050 250C1200 170 1320 150 1400 680"
                  stroke="white"
                  strokeWidth="1.8"
                  opacity="0.6"
                />
                <path
                  d="M0 620C350 620 700 450 1050 190C1200 110 1320 90 1400 620"
                  stroke="#ea580c"
                  strokeWidth="2.2"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10">
        <div className="w-full max-w-[1360px]">
          <HeroSlideContent key={current} slide={slide} />
        </div>
      </div>
      <div className="absolute bottom-5 sm:bottom-6 inset-x-0 z-30 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pointer-events-none">
        <div className="w-full max-w-[1360px] mx-auto flex items-center justify-between gap-4">
          <div
            className="pointer-events-auto flex items-center gap-2.5 px-3.5 py-2 rounded-full"
            style={{
              background: 'rgba(10,22,40,0.65)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            {slides.map((item, i) => (
              <button
                key={`${item.title}-${i}`}
                onClick={() => go(i)}
                className="group relative transition-all"
                aria-label={`Ir a slide ${i + 1}`}
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '28px' : '8px',
                    height: '8px',
                    background:
                      i === current
                        ? 'linear-gradient(135deg, #ea580c 0%, #fb923c 100%)'
                        : 'rgba(255,255,255,0.35)',
                    boxShadow: i === current ? '0 4px 12px rgba(234,88,12,0.5)' : 'none',
                  }}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToNews}
            className="pointer-events-auto group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#ea580c] py-2 pl-4 pr-2 sm:py-2.5 sm:pl-6 sm:pr-2.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-black/30 ring-1 ring-white/20 transition-all hover:bg-[#c2410c] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {scrollLabel}
            <span className="flex size-9 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-y-0.5">
              <ChevronDown className="size-5 motion-safe:animate-[scrollCue_2.4s_ease-in-out_infinite]" />
            </span>
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(241,245,249,0.4))' }}
      />

      <style>
        {`@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } @keyframes scrollCue { 0%, 100% { transform: translateY(-1px); } 50% { transform: translateY(2px); } } @keyframes slideInRight { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: translateX(0); } }`}
      </style>
    </section>
  );
};

HeroNewsSection.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
      buttonText: PropTypes.string,
      imageUrl: PropTypes.string,
      accent: PropTypes.string,
      tag: PropTypes.string,
      stats: PropTypes.array,
    }),
  ),
  scrollLabel: PropTypes.string,
};
