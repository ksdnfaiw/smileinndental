import { useEffect } from 'react';

/**
 * SEO Component for Smile Inn Dental Clinics
 * Manages Title, Meta Description, and OpenGraph Tags
 */
export default function SEO({ title, description, ogImage, canonicalUrl }) {
  const brandName = "Smile Inn Dental Clinics";
  const defaultDesc = "Specialist-Led Dental Studio in Hyderabad with 5 MDS Experts. Expert care for Orthodontics, Cosmetic Dentistry, Implants, and more.";
  const defaultOgImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDKsv_FKV8m3ISGM1cmGKeYZqYfcZouSvgnCKiIZg8a4RHZwWE1NxkVljWmJ7quxfHdB-ixa1XsFUrnV0lmxcprM6VNaum7kI9LwUgA4AxmMGgI_HaTLJ3aPLJ6W9fZiSX-63fkt2hTL8EqedXI2YFEeWO74-J2mPGi1R6609ijxeLHSq85Aq6oxt1FbibSH8NtBZIJbfjaFXnxkoW-mMJcLN00uVkyZG-om1GwYLMlQJ_-bdMU9qIrLH-o7u3DhiC6y0jxwLlQVlo";

  useEffect(() => {
    // 1. Update Title
    document.title = title ? `${title} | ${brandName}` : brandName;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description || defaultDesc);

    // 3. Update OpenGraph Tags
    const ogTags = [
      { property: 'og:title', content: title || brandName },
      { property: 'og:description', content: description || defaultDesc },
      { property: 'og:image', content: ogImage || defaultOgImage },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl || window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
    ];

    ogTags.forEach((tag) => {
      const attribute = tag.property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${tag[attribute]}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, tag[attribute]);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // 4. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl || window.location.href);

  }, [title, description, ogImage, canonicalUrl]);

  return null; // This component doesn't render anything visually
}
