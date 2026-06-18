import { Link } from 'react-router-dom';
import { Shield, Sparkles, Droplets, Home as HomeIcon, TrendingUp, Award, ShieldCheck, Users } from 'lucide-react';

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
      title: 'Inspect (1-2x/year)',
      desc: 'Check shingles, flashings, and trim. Look for signs of rot, loose tiles, or damage from severe weather.',
    },
    {
      num: '02',
      title: 'Keep it Clean (1-2 years)',
      desc: 'Remove dirt, mildew, and moss with a soft brush and approved cleaner. We never use high-pressure washing that damages wood.',
    },
    {
      num: '03',
      title: 'Repair Promptly (As needed)',
      desc: 'Replace damaged shingles, secure loose tiles, and check all caulking to ensure the roof remains watertight.',
    },
    {
      num: '04',
      title: 'Treat & Protect (3-5 years)',
      desc: 'Apply premium penetrating cedar preservative or oil-based stain to guard against UV rays, moisture, and decay.',
    },
    {
      num: '05',
      title: 'Professional Maintenance',
      desc: 'Schedule expert inspections to catch what the untrained eye might miss. Peace of mind is just a phone call away.',
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
            alt="Beautiful cedar shingle home"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/65 to-slate-900/85" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-44 lg:px-8 lg:py-52">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full bg-cedar-600/90 px-4 py-1.5 text-sm font-semibold text-white mb-6 tracking-wide uppercase">
              Cedar Shingle Specialists
            </p>
            <h1 className="text-4xl sm:text-6xl text-white drop-shadow-md leading-tight">
              Simple care keeps your home beautiful and protected for decades.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200 font-medium max-w-xl mx-auto">
              Specialized Cedar Shingle & Tile Maintenance, Cleaning, and Treatments.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-500 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:5551234567"
                className="hidden sm:inline-flex text-base font-semibold text-white/90 hover:text-white transition-colors"
              >
                Or call (555) 123-4567 →
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
                  className={`flex flex-col bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 ${
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
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-cedar-700 uppercase tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>Our Proven Method</h2>
            <p className="mt-2 text-3xl sm:text-4xl">
              5 Steps to a Perfect Cedar Roof
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We follow a strict, gentle, and effective process to ensure your roof lasts a lifetime without sustaining damage from harsh chemicals or high pressure.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.num} className="relative flex gap-x-8 items-start">
                  {index !== steps.length - 1 && (
                    <div className="absolute left-6 top-14 -bottom-12 w-0.5 bg-cedar-200" />
                  )}
                  <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full bg-cedar-100 ring-8 ring-white">
                    <span className="text-lg font-bold text-cedar-800" style={{ fontFamily: 'var(--font-sans)' }}>{step.num}</span>
                  </div>
                  <div className="flex-auto py-2">
                    <h3 className="text-xl leading-8 text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="px-6 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl text-white sm:text-4xl">
              Ready to protect your home?
              <br />
              Don't wait until it's too late.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Contact us today for a thorough inspection and a free, no-obligation quote.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-primary-900 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
              >
                Request Free Quote
              </Link>
              <a
                href="mailto:cedarshinglellc@gmail.com"
                className="text-base font-semibold text-primary-100 hover:text-white transition-colors"
              >
                cedarshinglellc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
