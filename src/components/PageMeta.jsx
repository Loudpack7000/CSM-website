import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BUSINESS } from '../constants/business';

const SITE_URL = 'https://cedarshinglemaintenance.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/hero-cedar-roof.jpg`;

const PAGE_META = {
  '/': {
    title: 'Cedar Shingle Maintenance | Free Roof Inspection',
    description: `Cedar roof cleaning, repair & maintenance in ${BUSINESS.city}, ${BUSINESS.stateAbbr}. Licensed specialists serving ${BUSINESS.serviceArea}. Free quote — call or request online.`,
  },
  '/services': {
    title: 'Cedar Roof Services | Cleaning, Repair & Treatment',
    description: `Professional cedar shingle cleaning, soft-wash restoration, repairs, and preservative treatments in ${BUSINESS.city}, ${BUSINESS.stateAbbr}.`,
  },
  '/about': {
    title: 'About Us | Cedar Shingle Maintenance',
    description: `Local cedar roof experts based in ${BUSINESS.city}, ${BUSINESS.stateAbbr}. Gentle cleaning methods and premium preservatives that protect your investment.`,
  },
  '/gallery': {
    title: 'Our Work | Cedar Roof Projects',
    description: `See real cedar shingle cleaning and repair projects across ${BUSINESS.serviceArea}. Before-and-after photos from our team.`,
  },
  '/contact': {
    title: 'Get a Free Quote | Cedar Shingle Maintenance',
    description: `Request a free cedar roof inspection in ${BUSINESS.city}, ${BUSINESS.stateAbbr}. We respond within 24 hours — no obligation.`,
  },
};

function setMetaTag(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function PageMeta() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] ?? {
    title: BUSINESS.name,
    description: `Cedar shingle maintenance in ${BUSINESS.city}, ${BUSINESS.stateAbbr}.`,
  };
  const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    document.title = meta.title;

    setMetaTag('name', 'description', meta.description);
    setLinkTag('canonical', canonical);

    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:image', DEFAULT_OG_IMAGE);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', DEFAULT_OG_IMAGE);
  }, [pathname, meta.title, meta.description, canonical]);

  return null;
}
