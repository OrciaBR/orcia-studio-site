import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
}

export function Seo({ title, description, image, canonical }: SeoProps) {
  useEffect(() => {
    if (title) document.title = title;

    // Helper to set or update meta tag
    function setMeta(name: string, content: string, property = false) {
      const selector = property ? `meta[property='${name}']` : `meta[name='${name}']`;
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        if (property) tag.setAttribute('property', name);
        else tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    }

    if (description) setMeta('description', description);
    setMeta('og:title', title, true);
    if (description) setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    if (image) setMeta('og:image', image, true);
    setMeta('og:site_name', 'Orcia', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    if (description) setMeta('twitter:description', description);
    if (image) setMeta('twitter:image', image);

    // Canonical link
    if (canonical) {
      let link = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, image, canonical]);

  return null;
}