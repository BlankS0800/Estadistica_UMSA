import React from 'react';
import PropTypes from 'prop-types';
import { 
  GraduationCap, 
  Calendar, 
  Library, 
  FolderOpen, 
  Megaphone, 
  ClipboardList, 
  BookOpen, 
  FlaskConical,
  ArrowUpRight 
} from 'lucide-react';

const iconMap = {
  GraduationCap,
  Calendar,
  Library,
  FolderOpen,
  Megaphone,
  ClipboardList,
  BookOpen,
  FlaskConical,
};

export const PortalServicesGrid = ({ items = [] }) => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="none" fill="none">
          <circle cx="150" cy="150" r="120" stroke="#00447e" strokeWidth="2" />
          <circle cx="1200" cy="450" r="180" stroke="#ea580c" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-[2px] w-6 bg-[#00447e] rounded-full" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#00447e]">Portal Estadístico</span>
            <div className="h-[2px] w-6 bg-[#00447e] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Servicios y Recursos del Portal Web
          </h2>
          <p className="text-lg text-slate-600 max-w-[600px] mx-auto leading-relaxed">
            Accede rápidamente a las secciones más importantes, herramientas académicas y repositorios oficiales de nuestra carrera.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;
            return (
              <a
                key={item.title}
                href={item.href}
                className="group relative rounded-3xl p-6 bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-slate-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 uppercase tracking-wide group-hover:bg-orange-50 group-hover:text-[#ea580c] transition-colors">
                      {item.tag}
                    </span>
                    <ArrowUpRight className="size-5 text-slate-400 group-hover:text-[#00447e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div 
                    className="size-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform" 
                    style={{ background: `${item.color}15` }}
                  >
                    <IconComponent className="size-6" style={{ color: item.color }} />
                  </div>

                  <h3 className="font-extrabold text-xl text-slate-900 mb-2 leading-snug group-hover:text-[#00447e] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#00447e] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Ir a la sección</span>
                  <span>→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

PortalServicesGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      color: PropTypes.string,
      tag: PropTypes.string,
    })
  ),
};
