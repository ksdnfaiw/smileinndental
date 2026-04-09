import { useEffect } from 'react';
import { doctorsData } from '../data/doctorsData';

/**
 * SEO Component for Smile Inn Dental Clinics
 * Manages Title, Meta Description, Keywords, OpenGraph, Twitter Cards,
 * Canonical URL, Robots, Theme Color, and JSON-LD Schema Markup
 */

const SITE_URL = 'https://www.smileinndentalclinics.com';
const BRAND_NAME = 'Smile Inn Dental Clinics';
const DEFAULT_DESC = `Smile Inn Dental Clinics — specialist dental care by ${doctorsData.length} MDS doctors in Nagole & Balapur, Hyderabad. Painless treatments, advanced technology, transparent pricing. Book today.`;
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/home.jpg`;
const THEME_COLOR = '#312b80';

// Dentist Schema Markup — injected on every page
const DENTIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Smile Inn Dental Clinics",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo-full.png`,
  "description": `Specialist dental clinic in Hyderabad with ${doctorsData.length} MDS doctors. Advanced dental treatments including implants, cosmetic dentistry, orthodontics and oral surgery.`,
  "telephone": "+919177317253",
  "email": "smileinndentalclinics@gmail.com",
  "priceRange": "₹₹",
  "openingHours": ["Mo-Su 10:00-20:30"],
  "hasMap": "https://maps.google.com/?q=Smile+Inn+Dental+Nagole",
  "location": [
    {
      "@type": "Dentist",
      "name": "Smile Inn Dental Clinics — Nagole",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gurukrupa Building, 1st Floor, Alkapuri X Road",
        "addressLocality": "Nagole",
        "addressRegion": "Telangana",
        "postalCode": "500068",
        "addressCountry": "IN"
      },
      "telephone": "+919177317253",
      "openingHours": "Mo-Su 10:00-20:30",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.3850",
        "longitude": "78.5740"
      }
    },
    {
      "@type": "Dentist",
      "name": "Sri Amrutha Laxmi Dental Hospital — Balapur",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Basupalli Gowra Reddy Complex, RCI Road",
        "addressLocality": "Balapur",
        "addressRegion": "Telangana",
        "postalCode": "500097",
        "addressCountry": "IN"
      },
      "telephone": "+919177317253",
      "openingHours": "Mo-Sa 10:30-21:00"
    }
  ],
  "medicalSpecialty": [
    "Dentistry",
    "Oral Surgery",
    "Prosthodontics",
    "Cosmetic Dentistry",
    "Orthodontics"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "120"
  }
};

function setMetaTag(attribute, key, content) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setLinkTag(rel, href, extras = {}) {
  const selector = extras.sizes
    ? `link[rel="${rel}"][sizes="${extras.sizes}"]`
    : `link[rel="${rel}"]`;
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    if (extras.sizes) element.setAttribute('sizes', extras.sizes);
    if (extras.type) element.setAttribute('type', extras.type);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function setJsonLd(id, data) {
  let script = document.querySelector(`script[data-schema-id="${id}"]`);
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-schema-id', id);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
  const script = document.querySelector(`script[data-schema-id="${id}"]`);
  if (script) script.remove();
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  canonicalPath,
  schemaMarkup,  // additional schema (e.g. FAQPage)
}) {
  const fullTitle = title || `Best Dental Clinic in Nagole, Hyderabad | ${BRAND_NAME}`;
  const metaDesc = description || DEFAULT_DESC;
  const ogImg = ogImage || DEFAULT_OG_IMAGE;
  const canonicalUrl = canonicalPath ? `${SITE_URL}${canonicalPath}` : SITE_URL;

  useEffect(() => {
    // 1. Title
    document.title = fullTitle;

    // 2. Primary Meta Tags
    setMetaTag('name', 'description', metaDesc);
    setMetaTag('name', 'robots', 'index, follow');
    setMetaTag('name', 'theme-color', THEME_COLOR);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 3. Open Graph Tags
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', BRAND_NAME);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDesc);
    setMetaTag('property', 'og:image', ogImg);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDesc);
    setMetaTag('name', 'twitter:image', ogImg);

    // 5. Canonical Link
    setLinkTag('canonical', canonicalUrl);

    // 6. JSON-LD Schema — Dentist (always present)
    setJsonLd('dentist', DENTIST_SCHEMA);

    // 7. Additional Schema (e.g. FAQPage) — only when provided
    if (schemaMarkup) {
      setJsonLd('page-schema', schemaMarkup);
    }

    return () => {
      // Clean up page-specific schema on unmount
      removeJsonLd('page-schema');
    };
  }, [fullTitle, metaDesc, ogImg, canonicalUrl, keywords, schemaMarkup]);

  return null;
}
