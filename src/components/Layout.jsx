import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyMobileCTA from './StickyMobileCTA';
import PageMeta from './PageMeta';
import {
  BUSINESS,
  BUSINESS_MAPS_URL,
} from '../constants/business';

const SITE_URL = 'https://cedarshinglemaintenance.com';

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: BUSINESS.name,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  url: SITE_URL,
  image: `${SITE_URL}/hero-cedar-roof.jpg`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.stateAbbr,
    postalCode: BUSINESS.zip,
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 42.0998,
      longitude: -87.7809,
    },
    geoRadius: '40233',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  hasMap: BUSINESS_MAPS_URL,
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <PageMeta />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pb-24 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
