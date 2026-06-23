import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { GALLERY_SECTIONS } from '../constants/gallery';

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white">Our Work</h1>
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 text-slate-300">
            Real cedar shingle projects across Chicagoland, Lake County & southeastern Wisconsin — cleaning, restoration, and repair.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {GALLERY_SECTIONS.map((section) => (
          <section key={section.id} id={section.id}>
            <div className="max-w-3xl mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900">{section.title}</h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {section.photos.map((photo) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActivePhoto(photo)}
                  className="group text-left rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="p-4 text-sm sm:text-base font-medium text-slate-700">{photo.caption}</p>
                </button>
              ))}
            </div>
          </section>
        ))}

        <div className="rounded-2xl sm:rounded-3xl bg-primary-50 border border-primary-100 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl text-slate-900">Ready for results like these?</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Schedule a free inspection and we will assess your cedar roof on site.
          </p>
          <Link
            to="/contact"
            className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 min-h-[48px] text-base font-semibold text-white hover:bg-primary-600 transition-colors w-full sm:w-auto"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-900/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            onClick={() => setActivePhoto(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close photo"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="w-full max-w-5xl max-h-[85dvh] overflow-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activePhoto.src} alt={activePhoto.alt} className="w-full h-auto object-contain" />
            <p className="p-4 sm:p-6 text-sm sm:text-base text-slate-700">{activePhoto.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
