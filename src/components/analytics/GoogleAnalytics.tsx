import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  CONSENT_UPDATED_EVENT,
  getConsentStatus,
  type ConsentStatus,
} from "@/lib/cookie-consent";
import {
  isAnalyticsConfigured,
  loadGoogleAnalytics,
  trackPageView,
} from "@/lib/analytics";

export function GoogleAnalytics() {
  const location = useLocation();
  const path = location.pathname + location.search;

  useEffect(() => {
    if (!isAnalyticsConfigured()) {
      return;
    }

    const onConsentUpdated = (event: Event) => {
      const status = (event as CustomEvent<ConsentStatus>).detail;
      if (status === "accepted") {
        loadGoogleAnalytics();
        trackPageView(path);
      }
    };

    window.addEventListener(CONSENT_UPDATED_EVENT, onConsentUpdated);
    return () => {
      window.removeEventListener(CONSENT_UPDATED_EVENT, onConsentUpdated);
    };
  }, [path]);

  useEffect(() => {
    if (!isAnalyticsConfigured() || getConsentStatus() !== "accepted") {
      return;
    }

    loadGoogleAnalytics();
    trackPageView(path);
  }, [path]);

  return null;
}
