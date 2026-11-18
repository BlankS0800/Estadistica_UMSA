import React from 'react';
import PropTypes from 'prop-types';
import { SocialLink } from '../../molecules/feedback/Interactive';
import { 
  footerAbout, 
  mockSocialLinks, 
  mockDirectAccessLinks 
} from '../../../services/mockData';
import { MapPin, Phone, Mail, Send as Twitter, Play, Camera as Instagram, Clock, ExternalLink } from 'lucide-react';

const FacebookIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const iconMap = {
  Facebook: FacebookIcon,
  Twitter,
  Play,
  Instagram
};

/**
 * Pie de página completo y profesional de la Carrera de Estadística UMSA.
 */
export const Footer = () => {
  const parsedSocialLinks = mockSocialLinks.map(link => ({
    ...link,
    icon: iconMap[link.icon] || Play
  }));

  return (
    <footer className="text-white relative overflow-hidden" style={{ background: 'linear-gradient(170deg, #001d3d 0%, #003d6e 50%, #00447e 100%)' }}>
      {/* Decorative Top Line */}
      <div className="h-[4px] w-full" style={{ background: 'linear-gradient(90deg, #ea580c 0%, #00447e 50%, #ea580c 100%)' }} />

      {/* Background decoration elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 400" preserveAspectRatio="none" fill="none">
          <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="2" />
          <circle cx="1100" cy="100" r="100" stroke="#ea580c" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 relative z-10">
        
        {/* Main Grid: Identidad + Contacto y horario + Ubicación y enlaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 pb-10 border-b border-slate-800">

          {/* Columna 1: Identidad */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/iconos/blancopeq.png"
                alt="Logo Carrera de Estadística"
                className="h-[80px] w-[80px] object-contain shrink-0"
                onError={(e) => {
                  e.target.style.display = 'none'; // Fallback if logo is missing
                }}
              />
              <div>
                <h3 className="font-extrabold text-xl text-white leading-tight">
                  {footerAbout.title}
                </h3>
                <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">
                  {footerAbout.institution}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-medium max-w-md">
              {footerAbout.description}
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {parsedSocialLinks.map((socialItem, idx) => (
                <SocialLink
                  key={`${socialItem.label}-${idx}`}
                  href={socialItem.href}
                  label={socialItem.label}
                  icon={socialItem.icon}
                  className="size-[36px] rounded-xl flex items-center justify-center bg-slate-800/80 hover:bg-orange-500 border border-slate-700/60 hover:border-orange-400 transition-all duration-300"
                  iconClassName="size-4 text-white"
                />
              ))}
            </div>
          </div>

          {/* Columna 2: Contacto y horario */}
          <div className="space-y-6">
            <div>
              <h3 className="font-extrabold text-xs text-white uppercase tracking-widest mb-4">
                Contacto
              </h3>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 leading-snug">{footerAbout.address}</p>
                </div>
                {footerAbout.phones.map((phoneItem, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Phone className="size-4 text-[#2563eb] shrink-0" />
                    <a href={`tel:${phoneItem.clean}`} className="text-sm text-slate-300 hover:text-white transition-colors font-medium">
                      {phoneItem.display}
                    </a>
                  </div>
                ))}
                <div className="flex items-center gap-3">
                  <Mail className="size-4 text-orange-400 shrink-0" />
                  <a href={`mailto:${footerAbout.email}`} className="text-sm text-slate-300 hover:text-white transition-colors font-medium">
                    {footerAbout.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Schedule Info */}
            <div className="rounded-2xl p-4 bg-slate-900/65 border border-slate-800/80">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="size-3.5 text-orange-400 shrink-0" />
                <span className="text-xs font-extrabold text-white">Horario de Atención</span>
              </div>
              {footerAbout.schedule.map((line, idx) => (
                <p key={idx} className="text-xs text-slate-400 leading-snug">{line}</p>
              ))}
            </div>
          </div>

          {/* Columna 3: Ubicación y enlaces */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div>
              <h3 className="font-extrabold text-xs text-white uppercase tracking-widest mb-4">
                Ubicación Facultativa
              </h3>
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
                <iframe
                  title="Monoblock UMSA"
                  src={footerAbout.mapUrl}
                  width="100%"
                  height="150"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(40%) contrast(1.1) brightness(0.95)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Systems Access (SIA / Moodle) */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Enlaces UMSA</h4>
              <div className="flex flex-col gap-2">
                {mockDirectAccessLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-all font-medium"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="size-3 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Copyright) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-bold">
          <p className="text-center sm:text-left leading-relaxed">
            © {new Date().getFullYear()} {footerAbout.copyright}
          </p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Facultad de Ciencias Puras</span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer font-serif italic">UMSA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};
