import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">Cedar Shingle</span>
              <span className="text-2xl font-light text-slate-400">Maintenance</span>
            </Link>
            <p className="text-lg text-slate-400 max-w-sm italic">
              "A little care goes a long way—protect your cedar roof and enjoy its beauty for decades."
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors duration-200">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <a href="tel:5551234567" className="text-slate-400 hover:text-white transition-colors duration-200">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Serving the local area<br/>and surrounding regions</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-600 transition-colors duration-200"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-slate-500">
            &copy; {currentYear} Cedar Shingle Maintenance. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-sm text-slate-500">Fully Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
