import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { CookieConsent } from "./CookieConsent";
import { ScrollToTop } from "./ScrollToTop";
import { MobileBottomNav } from "./MobileBottomNav";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <CookieConsent />
      <MobileBottomNav />
    </div>
  );
}
