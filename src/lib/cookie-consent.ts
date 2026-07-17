export const COOKIE_CONSENT_KEY = "safegrip-cookie-consent";

export type ConsentStatus = "accepted" | "declined" | null;

export const CONSENT_UPDATED_EVENT = "safegrip-consent-updated";

export function getConsentStatus(): ConsentStatus {
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (stored === "accepted" || stored === "declined") {
    return stored;
  }
  return null;
}

export function dispatchConsentUpdated(status: ConsentStatus) {
  window.dispatchEvent(
    new CustomEvent<ConsentStatus>(CONSENT_UPDATED_EVENT, { detail: status }),
  );
}
