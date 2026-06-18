import { CheckCircle2, Calendar, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../constants/business';

export default function Services() {
  const treatments = [
    {
      title: 'Clear Preservatives',
      desc: 'Protect your roof without changing its natural look. Our clear penetrating oils repel water and prevent rot while allowing the cedar to age gracefully.',
    },
    {
      title: 'Semi-Transparent Stains',
      desc: 'Enhance the natural color of your cedar while allowing the beautiful wood grain to show through. Adds slight UV protection alongside moisture defense.',
    },
    {
      title: 'Solid Stains',
      desc: 'Provide maximum UV protection and ultimate color retention. Best for older roofs where a uniform look and high durability are desired.',
    },
  ];

  const schedule = [
    { period: '1-2x / Year', task: 'Basic Inspection (Visual check for loose tiles or debris)' },
    { period: 'Annually', task: 'Gentle Cleaning (Debris removal, moss treatment)' },
    { period: 'Every 2-5 Years', task: 'Professional Treatment & Preservative Application' },
    { period: 'Every 3-5 Years', task: 'Comprehensive Professional Inspection & Repairs' },
  ];

  return (
    <div className="bg-white pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">Our Services</h1>
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 text-slate-300">
            Comprehensive care to keep your cedar roof performing beautifully for decades. Serving {BUSINESS.serviceArea}.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-24">
        
        {/* Treatment Options */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8 sm:mb-12 text-center">Cedar Treatment Options</h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {treatments.map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-semibold text-primary-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Maintenance Schedule */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-8 w-8 text-primary-600" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Maintenance Schedule</h2>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <ul className="divide-y divide-slate-200">
                {schedule.map((item) => (
                  <li key={item.period} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-4 sm:p-6 hover:bg-slate-50 transition-colors">
                    <span className="font-semibold text-primary-700 sm:whitespace-nowrap sm:w-32">{item.period}</span>
                    <span className="text-slate-700">{item.task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Tips */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="h-8 w-8 text-cedar-500" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Quick Homeowner Tips</h2>
            </div>
            <div className="bg-cedar-100/50 rounded-2xl p-6 sm:p-8 border border-cedar-100">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-cedar-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Keep Gutters Clean</h4>
                    <p className="mt-1 text-slate-700 text-sm">Backed-up gutters force water under the lower courses of shingles, leading to rapid rot.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-cedar-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Trim Overhanging Trees</h4>
                    <p className="mt-1 text-slate-700 text-sm">Trim branches back to improve sunlight and airflow, helping the roof dry properly and preventing moss growth.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-cedar-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Avoid Power Washing</h4>
                    <p className="mt-1 text-slate-700 text-sm">High pressure destroys cedar fibers. Always use a soft-wash or gentle brushing method.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-md bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
              >
                Schedule Your Service Today
              </Link>
            </div>
          </div>
          
        </div>

        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6 sm:mb-8 text-center">
            Cedar Maintenance at a Glance
          </h2>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <img
              src="/gallery/services-infographic.png"
              alt="Infographic explaining cedar tile maintenance steps, treatment options, and schedule"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
