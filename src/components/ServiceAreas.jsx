import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { BUSINESS } from '../constants/business';
import {
  SERVICE_AREAS_ILLINOIS,
  SERVICE_AREAS_WISCONSIN,
} from '../constants/serviceAreas';

function AreaPill({ name, variant = 'illinois' }) {
  const styles =
    variant === 'wisconsin'
      ? 'bg-cedar-50 text-cedar-900 border-cedar-200 hover:bg-cedar-100'
      : 'bg-primary-50 text-primary-900 border-primary-100 hover:bg-primary-100';

  return (
    <li>
      <span
        className={`inline-block rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${styles}`}
      >
        {name}
      </span>
    </li>
  );
}

function AreaCard({ title, subtitle, towns, variant }) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            variant === 'wisconsin' ? 'bg-cedar-100' : 'bg-primary-100'
          }`}
        >
          <MapPin
            className={`h-5 w-5 ${variant === 'wisconsin' ? 'text-cedar-700' : 'text-primary-700'}`}
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-xl text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2">
        {towns.map((town) => (
          <AreaPill key={town} name={town} variant={variant} />
        ))}
      </ul>
    </article>
  );
}

export default function ServiceAreas({ id = 'service-areas', showCta = true, className = '' }) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 bg-slate-50 border-y border-slate-100 scroll-mt-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
          <p
            className="text-base font-semibold leading-7 text-cedar-700 uppercase tracking-wide"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Service Area
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Communities We Serve</h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-slate-600">
            Based in {BUSINESS.city}, {BUSINESS.stateAbbr}, we travel throughout Chicagoland, Lake County,
            and into southeastern Wisconsin for cedar roof cleaning, repair, and maintenance.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <AreaCard
            title="Illinois"
            subtitle="Chicagoland & Lake County"
            towns={SERVICE_AREAS_ILLINOIS}
            variant="illinois"
          />
          <AreaCard
            title="Wisconsin"
            subtitle="Milwaukee & Waukesha County"
            towns={SERVICE_AREAS_WISCONSIN}
            variant="wisconsin"
          />
        </div>

        {showCta && (
          <p className="mt-8 sm:mt-10 text-center text-sm sm:text-base text-slate-500">
            Don&apos;t see your town listed?{' '}
            <Link to="/contact" className="font-semibold text-primary-700 hover:text-primary-600 transition-colors">
              Contact us
            </Link>
            {' '}— we may still be able to help.
          </p>
        )}
      </div>
    </section>
  );
}
