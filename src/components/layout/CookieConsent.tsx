import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "safegrip-cookie-consent";

type ConsentStatus = "accepted" | "declined" | null;

export function CookieConsent() {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsentStatus(stored);
    } else {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setConsentStatus("accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setConsentStatus("declined");
    setIsVisible(false);
  };

  // Don't render if consent was already given
  if (consentStatus !== null || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container">
        <div className="glass-card rounded-lg p-6 shadow-2xl border border-border">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground">
                  Wij gebruiken cookies
                </h3>
                <p className="text-sm text-muted-foreground max-w-2xl">
                  SafeGrip gebruikt cookies om uw ervaring te verbeteren, websiteverkeer te analyseren en gepersonaliseerde content te tonen. 
                  Door op "Accepteren" te klikken, stemt u in met ons gebruik van cookies conform de{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    privacyverklaring
                  </Link>
                  .
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:shrink-0">
              <Button
                variant="outline"
                onClick={handleDecline}
                className="text-muted-foreground hover:text-foreground"
              >
                Alleen noodzakelijk
              </Button>
              <Button
                variant="shop"
                onClick={handleAccept}
                className="glow-yellow"
              >
                Accepteren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
