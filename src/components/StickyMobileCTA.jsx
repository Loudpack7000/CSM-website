import { Link, useLocation } from 'react-router-dom';
import { Phone, FileText } from 'lucide-react';
import { BUSINESS } from '../constants/business';

export default function StickyMobileCTA() {
  const { pathname } = useLocation();

  if (pathname === '/contact') return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40">
      <div className="h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />

      <div className="bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-700 bg-white px-4 py-3.5 min-h-[48px] text-sm font-semibold text-primary-800 shadow-sm active:scale-[0.98] transition-transform"
          >
            <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            Call
          </a>
          <Link
            to="/contact"
            className="flex-[1.4] inline-flex items-center justify-center gap-2 rounded-xl bg-primary-700 px-4 py-3.5 min-h-[48px] text-sm font-semibold text-white shadow-lg shadow-primary-900/25 active:scale-[0.98] transition-transform"
          >
            <FileText className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            Free Quote
          </Link>
        </div>
        <p className="text-center text-[11px] text-slate-500 mt-2 font-medium">
          Free inspection · No obligation · {BUSINESS.city}, {BUSINESS.stateAbbr}
        </p>
      </div>
    </div>
  );
}
