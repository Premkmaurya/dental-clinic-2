import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  schemas?: object[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  ogImage,
  schemas = []
}) => {
  const location = useLocation();
  const canonicalUrl = `https://smilecare-dental.com${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Update OG Tags
    const updateOrCreateMeta = (propertyType: 'property' | 'name', propertyValue: string, contentValue: string) => {
      let meta = document.querySelector(`meta[${propertyType}="${propertyValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(propertyType, propertyValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', contentValue);
    };

    updateOrCreateMeta('property', 'og:title', title);
    updateOrCreateMeta('property', 'og:description', description);
    updateOrCreateMeta('property', 'og:url', canonicalUrl);
    
    if (ogImage) {
      updateOrCreateMeta('property', 'og:image', ogImage);
    }

    // 5. Update JSON-LD Schemas
    // Remove existing dynamic schemas
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-schema');
    existingScripts.forEach(script => script.remove());

    // Add new schemas
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'dynamic-schema';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [title, description, canonicalUrl, ogImage, schemas]);

  return null;
};
export default SEO;
