import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  BUSINESS,
  BUSINESS_MAPS_URL,
} from '../constants/business';

const PAGE_TITLES = {
  '/': 'Cedar Shingle Maintenance | Free Roof Inspection',
  '/services': 'Services | Cedar Shingle Maintenance',
  '/about': 'About Us | Cedar Shingle Maintenance',
  '/gallery': 'Our Work | Cedar Shingle Maintenance',
  '/contact': 'Contact | Cedar Shingle Maintenance',
};

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: BUSINESS.name,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  url: 'https://cedarshinglemaintenance.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.stateAbbr,
    postalCode: BUSINESS.zip,
    addressCountry: 'US',
  },
  areaServed: BUSINESS.serviceArea,
  hasMap: BUSINESS_MAPS_URL,
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = PAGE_TITLES[pathname] ?? BUSINESS.name;
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
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
