declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID =
  import.meta.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  import.meta.env.VITE_GA_MEASUREMENT_ID;

let gtagLoaded = false;

export function isAnalyticsConfigured(): boolean {
  return Boolean(GA_MEASUREMENT_ID);
}

export function loadGoogleAnalytics(): void {
  if (!GA_MEASUREMENT_ID || gtagLoaded) {
    return;
  }

  gtagLoaded = true;

  window.dataLayer = window.dataLayer || [];
  // Must push `arguments` (not a rest-array). gtag.js only processes Arguments objects.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
  });
}

export function trackPageView(path: string): void {
  if (!GA_MEASUREMENT_ID || !window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
}
