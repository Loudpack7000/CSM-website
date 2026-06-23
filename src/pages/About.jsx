import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Users } from 'lucide-react';
import { BUSINESS, BUSINESS_ADDRESS_LINE1, BUSINESS_ADDRESS_LINE2 } from '../constants/business';
import ServiceAreas from '../components/ServiceAreas';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Roofs Restored', value: '500+' },
    { label: 'Satisfied Clients', value: '100%' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32">
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary-800 to-primary-600 opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">About Us</h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-slate-300">
              We are local experts based in {BUSINESS.city}, {BUSINESS.stateAbbr}, dedicated to preserving the life, beauty, and structural integrity of your cedar roof. Trust, durability, and unmatched expertise are at the core of everything we do.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Passionate about preservation.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Replacing a cedar roof is a massive, often unnecessary expense. We founded Cedar Shingle Maintenance on a simple principle: with the right care, a cedar roof can last a lifetime.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team consists of highly trained professionals who understand the unique properties of natural wood. We don't believe in harsh chemicals or high-pressure washing that damages wood fibers. Instead, we use proven, gentle restoration techniques and premium preservatives that nourish and protect your roof from the elements.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-8 border-t border-slate-200 pt-8 mt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary-700">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary-100 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="/gallery/maintenance-1.jpg" 
              alt="Large brick home with cedar shake roof in Chicagoland" 
              className="rounded-2xl sm:rounded-3xl shadow-xl w-full object-cover h-64 sm:h-[400px] lg:h-[500px]"
            />
          </div>

        </div>

        <ServiceAreas className="mt-32" />

        {/* Core Values */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Integrity First</h3>
              <p className="text-slate-600">We only recommend services you actually need. If your roof just needs a simple clean, we won't sell you a full treatment.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Unmatched Expertise</h3>
              <p className="text-slate-600">Cedar is specialized. We know exactly what cleaners and preservatives to use to ensure long-lasting results without damage.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Local Dedication</h3>
              <p className="text-slate-600">As members of the {BUSINESS.city} community, we treat every client's home with the same respect and care as we would our own.</p>
            </div>

          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-32 bg-primary-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center border border-primary-100">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6">Ready to work with the experts?</h2>
          <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get in touch with us today to schedule a free inspection and discover how we can preserve your roof.
          </p>
          <p className="text-sm text-slate-500 mb-6">
            {BUSINESS_ADDRESS_LINE1}, {BUSINESS_ADDRESS_LINE2}
          </p>
          <Link
            to="/contact"
            className="inline-flex justify-center rounded-md bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>

      </div>
    </div>
  );
}
