import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-800 tracking-tight">Cedar Shingle</span>
              <span className="text-2xl font-light text-slate-600 hidden sm:block">Maintenance</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-700 border-b-2 border-primary-600'
                    : 'text-slate-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-200 border-b-2 border-transparent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <a 
              href="tel:5551234567" 
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary-600 rounded-md text-sm font-semibold text-primary-700 bg-white hover:bg-primary-50 transition-colors duration-200 shadow-sm"
            >
              <Phone size={16} />
              <span>Call Now: (555) 123-4567</span>
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full">
          <div className="pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block pl-3 pr-4 py-3 border-l-4 text-base font-medium ${
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
                href="tel:5551234567" 
                className="flex items-center justify-center w-full gap-2 px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-700 hover:bg-primary-800"
              >
                <Phone size={18} />
                <span>Call Now: (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
