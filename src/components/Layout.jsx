import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PAGE_TITLES = {
  '/': 'Cedar Shingle Maintenance | Free Roof Inspection',
  '/services': 'Services | Cedar Shingle Maintenance',
  '/about': 'About Us | Cedar Shingle Maintenance',
  '/contact': 'Contact | Cedar Shingle Maintenance',
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = PAGE_TITLES[pathname] ?? 'Cedar Shingle Maintenance';
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
