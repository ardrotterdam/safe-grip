import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "@/config/site";

/**
 * SEO helper hook that updates canonical and Open Graph URLs on route change
 * This ensures proper SEO behavior in the SPA by updating meta tags dynamically
 */
export function useSEO() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const fullUrl = `${SITE_URL}${currentPath === "/" ? "" : currentPath}`;

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullUrl;

    // Update og:url meta tag
    let ogUrlMeta = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement("meta");
      ogUrlMeta.setAttribute("property", "og:url");
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.content = fullUrl;

    // Update twitter:url meta tag if present
    let twitterUrlMeta = document.querySelector('meta[name="twitter:url"]') as HTMLMetaElement;
    if (twitterUrlMeta) {
      twitterUrlMeta.content = fullUrl;
    }
  }, [location.pathname]);
}

