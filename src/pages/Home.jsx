import { Link } from 'react-router-dom';
import {
  Shield,
  Sparkles,
  Droplets,
  Home as HomeIcon,
  TrendingUp,
  Award,
  ShieldCheck,
  Users,
  ClipboardCheck,
  Brush,
  Wrench,
  ShieldPlus,
  BadgeCheck,
  ArrowRight,
} from 'lucide-react';
import { BUSINESS } from '../constants/business';
import { FEATURED_PHOTOS } from '../constants/gallery';

export default function Home() {
  const benefits = [
    {
      title: 'Extends Roof Lifespan',
      description: 'A well-maintained cedar roof can last 30-50 years or more, saving you from premature replacement.',
      icon: Shield,
    },
    {
      title: 'Maintains Natural Beauty',
      description: 'Keep the rich, warm tones of natural cedar instead of letting it rot, warp, or turn black from mold.',
      icon: Sparkles,
    },
    {
      title: 'Prevents Costly Leaks',
      description: 'Early detection of loose shingles or damaged flashings stops water damage before it enters your home.',
      icon: Droplets,
    },
    {
      title: 'Protects Your Investment',
      description: "Your home's first line of defense. Proper maintenance is a fraction of the cost of replacement.",
      icon: HomeIcon,
    },
    {
      title: 'Increases Property Value',
      description: 'A pristine, well-cared-for cedar roof adds immense curb appeal and value to your real estate.',
      icon: TrendingUp,
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Inspect',
      frequency: '1–2× per year',
      desc: 'Check shingles, flashings, and trim. Look for signs of rot, loose tiles, or damage from severe weather.',
      icon: ClipboardCheck,
    },
    {
      num: '02',
      title: 'Keep it Clean',
      frequency: 'Every 1–2 years',
      desc: 'Remove dirt, mildew, and moss with a soft brush and approved cleaner. We never use high-pressure washing that damages wood.',
      icon: Brush,
    },
    {
      num: '03',
      title: 'Repair Promptly',
      frequency: 'As needed',
      desc: 'Replace damaged shingles, secure loose tiles, and check all caulking to ensure the roof remains watertight.',
      icon: Wrench,
    },
    {
      num: '04',
      title: 'Treat & Protect',
      frequency: 'Every 3–5 years',
      desc: 'Apply premium penetrating cedar preservative or oil-based stain to guard against UV rays, moisture, and decay.',
      icon: ShieldPlus,
    },
    {
      num: '05',
      title: 'Professional Maintenance',
      frequency: 'Ongoing',
      desc: 'Schedule expert inspections to catch what the untrained eye might miss. Peace of mind is just a phone call away.',
      icon: BadgeCheck,
    },
  ];

  const trustItems = [
    { icon: Award, label: '15+ Years Experience' },
    { icon: ShieldCheck, label: 'Licensed & Insured' },
    { icon: Users, label: '500+ Roofs Serviced' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate -mt-20 pt-20">
        <div className="absolute inset-0 -z-10">
          <img
            src="/hero-cedar-roof.jpg"
            alt="Cedar shake roof restoration in progress on a Northfield home"
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/65 to-slate-900/85" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-36 lg:px-8 lg:py-52">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full bg-cedar-600/90 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 tracking-wide uppercase">
              Cedar Shingle Specialists · {BUSINESS.city}, {BUSINESS.stateAbbr}
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white drop-shadow-md leading-tight">
              Cedar Roof Experts in {BUSINESS.city}, {BUSINESS.stateAbbr}
            </h1>
            <p className="mt-4 sm:mt-5 text-lg sm:text-2xl text-white/95 leading-snug max-w-2xl mx-auto px-2" style={{ fontFamily: 'var(--font-display)' }}>
              Simple care keeps your home beautiful and protected for decades.
            </p>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-8 text-slate-200 font-medium max-w-xl mx-auto px-2">
              Specialized Cedar Shingle & Tile Maintenance, Cleaning, and Treatments.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-lg bg-primary-600 px-8 py-4 min-h-[48px] text-base sm:text-lg font-semibold text-white shadow-lg shadow-primary-900/25 hover:bg-primary-500 hover:shadow-xl hover:shadow-primary-900/30 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 flex items-center justify-center"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="text-base font-semibold text-white/90 hover:text-white transition-colors min-h-[44px] flex items-center"
              >
                Or call {BUSINESS.phone} →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-primary-900 border-b border-primary-800">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
            {trustItems.map((item) => (
              <li key={item.label} className="flex items-center gap-3 text-primary-100">
                <item.icon className="h-5 w-5 text-cedar-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-cedar-700 uppercase tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>Why Maintenance Matters</h2>
            <p className="mt-2 text-3xl sm:text-4xl">
              The Benefits of Proper Maintenance
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-6xl lg:mt-20">
            <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`flex flex-col bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 ${
                    index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
                  }`}
                >
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-slate-900 mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-cedar-100">
                      <benefit.icon className="h-6 w-6 text-cedar-700" aria-hidden="true" />
                    </div>
                    {benefit.title}
                  </dt>
                  <dd className="flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* 5-Step Process Section */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-primary-50/30" aria-hidden="true" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-cedar-100/50 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary-100/40 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-cedar-700 uppercase tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>
              Our Proven Method
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl">5 Steps to a Perfect Cedar Roof</p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We follow a strict, gentle, and effective process to ensure your roof lasts a lifetime without sustaining damage from harsh chemicals or high pressure.
            </p>
          </div>

          {/* Desktop progress stepper */}
          <div className="hidden lg:flex items-center max-w-5xl mx-auto mt-16 mb-4">
            {steps.map((step, index) => (
              <div key={step.num} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white shadow-md ring-4 ring-white">
                    {step.num}
                  </div>
                  <span className="mt-3 text-xs font-semibold text-slate-700 text-center max-w-[7rem] leading-tight">
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-3 h-0.5 bg-gradient-to-r from-primary-300 via-cedar-300 to-primary-300 rounded-full" />
                )}
              </div>
            ))}
          </div>

          {/* Step cards */}
          <div className="mx-auto mt-12 lg:mt-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.num}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cedar-200 hover:shadow-lg ${
                    index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
                  }`}
                >
                  <span
                    className="pointer-events-none absolute -right-1 -top-3 text-5xl sm:text-7xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-cedar-50"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>

                  <div className="relative">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cedar-100 to-primary-100 shadow-sm">
                        <step.icon className="h-6 w-6 text-primary-700" aria-hidden="true" />
                      </div>
                      <span className="shrink-0 rounded-full border border-cedar-200 bg-cedar-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cedar-800">
                        {step.frequency}
                      </span>
                    </div>

                    <h3 className="text-xl text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{step.desc}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-600 to-cedar-500 transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col items-stretch sm:items-center justify-center gap-4 px-4 sm:px-0">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-600 transition-colors min-h-[44px]"
            >
              View our full maintenance schedule
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-700 px-6 py-3 min-h-[48px] text-sm font-semibold text-white shadow-sm hover:bg-primary-600 transition-colors w-full sm:w-auto"
            >
              Schedule Your First Inspection
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Work */}
      <div className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <h2 className="text-base font-semibold leading-7 text-cedar-700 uppercase tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>
                Real Projects
              </h2>
              <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl">See Our Cedar Roof Work</p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-600 transition-colors min-h-[44px]"
            >
              View full gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {FEATURED_PHOTOS.map((photo) => (
              <Link
                key={photo.src}
                to="/gallery"
                className="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="p-4 text-sm font-medium text-slate-700">{photo.caption}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="px-6 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-4xl text-white">
              Ready to protect your home?
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>
              Don't wait until it's too late.
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-8 text-primary-100 px-2">
              Contact us today for a thorough inspection and a free, no-obligation quote.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col items-stretch sm:items-center justify-center gap-4 px-4 sm:px-0">
              <Link
                to="/contact"
                className="rounded-lg bg-white px-8 py-3.5 min-h-[48px] text-base font-semibold text-primary-900 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200 flex items-center justify-center"
              >
                Request Free Quote
              </Link>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-base font-semibold text-primary-100 hover:text-white transition-colors break-all text-center min-h-[44px] flex items-center justify-center"
              >
                {BUSINESS.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
