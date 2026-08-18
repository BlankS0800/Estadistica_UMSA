import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Botones institucionales (Átomos 2, 3 y 4)
 * @param {'primary' | 'orange' | 'outline' | 'sia'} variant 
 */
export const Button = ({ variant = 'primary', children, onClick, className = '', to, href }) => {
  const isExternal = href && href.startsWith('http');

  const renderContent = () => children;

  if (variant === 'sia') {
    const siaClass = `hidden sm:flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[11px] md:text-[12px] font-bold text-[#00447e] transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap shadow-md ${className}`;
    const siaStyle = { background: 'linear-gradient(135deg, #ffffff 0%, #e8f4f8 100%)' };

    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={siaClass} style={siaStyle}>
          {renderContent()}
        </a>
      );
    }
    if (to) {
      return (
        <Link to={to} className={siaClass} style={siaStyle}>
          {renderContent()}
        </Link>
      );
    }
    return (
      <button type="button" onClick={onClick} className={siaClass} style={siaStyle}>
        {renderContent()}
      </button>
    );
  }

  const baseStyle = "px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-semibold text-[13px] sm:text-[15px] text-white transition-all flex items-center gap-2 justify-center";
  
  if (variant === 'outline') {
    const outlineClass = `${baseStyle} border-2 border-white/40 backdrop-blur-sm hover:bg-white/15 ${className}`;
    if (href) {
      return (
        <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className={outlineClass}>
          {renderContent()}
        </a>
      );
    }
    if (to) {
      return (
        <Link to={to} className={outlineClass}>
          {renderContent()}
        </Link>
      );
    }
    return (
      <button type="button" onClick={onClick} className={outlineClass}>
        {renderContent()}
      </button>
    );
  }

  const bgGradient = variant === 'orange' 
    ? 'linear-gradient(135deg, #ea580c 0%, #ea580ccc 100%)'
    : 'linear-gradient(135deg, #00447e 0%, #00447ecc 100%)';
  const normalClass = `${baseStyle} shadow-xl hover:scale-105 hover:shadow-2xl ${className}`;

  if (href) {
    return (
      <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className={normalClass} style={{ background: bgGradient }}>
        {renderContent()}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={normalClass} style={{ background: bgGradient }}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={normalClass} style={{ background: bgGradient }}>
      {renderContent()}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'orange', 'outline', 'sia']),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};