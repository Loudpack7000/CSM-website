import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS } from '../constants/business';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const navLinkClass = (path) => {
    if (transparent) {
      return isActive(path)
        ? 'text-white border-b-2 border-cedar-400'
        : 'text-white/90 hover:text-white border-b-2 border-transparent hover:border-white/40';
    }
    return isActive(path)
      ? 'text-primary-700 border-b-2 border-primary-600'
      : 'text-slate-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-200 border-b-2 border-transparent';
  };

  const phoneBtnClass = transparent
    ? 'border border-white/60 text-white hover:bg-white/10'
    : 'border border-primary-600 text-primary-700 bg-white hover:bg-primary-50';

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        transparent
          ? 'bg-transparent border-b border-white/10'
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center min-w-0">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-3 min-w-0">
              <img src="/favicon.svg" alt="" className="h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0" aria-hidden="true" />
              <div className="flex items-baseline gap-1 min-w-0">
                <span className={`text-lg sm:text-xl font-semibold tracking-tight truncate ${transparent ? 'text-white' : 'text-primary-800'}`} style={{ fontFamily: 'var(--font-display)' }}>
                  Cedar Shingle
                </span>
                <span className={`text-lg sm:text-xl hidden min-[400px]:inline truncate ${transparent ? 'text-white/75' : 'text-slate-500'}`} style={{ fontFamily: 'var(--font-sans)' }}>
                  Maintenance
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-semibold transition-colors duration-200 ${navLinkClass(item.href)}`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className={`inline-flex items-center gap-2 px-3 lg:px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 shadow-sm whitespace-nowrap ${phoneBtnClass}`}
            >
              <Phone size={16} aria-hidden="true" />
              <span className="hidden lg:inline">Call Now: </span>
              <span>{BUSINESS.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              aria-label={`Call ${BUSINESS.phone}`}
              className={`inline-flex items-center justify-center p-2.5 rounded-md min-h-[44px] min-w-[44px] ${
                transparent ? 'text-white hover:bg-white/10' : 'text-primary-700 hover:bg-primary-50'
              }`}
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2.5 rounded-md min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 ${
                transparent ? 'text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block pl-3 pr-4 py-3.5 border-l-4 text-base font-medium min-h-[44px] ${
                  isActive(item.href)
                    ? 'bg-primary-50 border-primary-600 text-primary-800'
                    : 'border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-4">
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="flex items-center justify-center w-full gap-2 px-4 py-3.5 min-h-[48px] border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-700 hover:bg-primary-800"
              >
                <Phone size={18} aria-hidden="true" />
                <span>Call {BUSINESS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
