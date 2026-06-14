import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "./CookieConsent";
import { ScrollToTop } from "./ScrollToTop";
import { MobileBottomNav } from "./MobileBottomNav";
import { useSEO } from "@/hooks/use-seo";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  // Update canonical and og:url on route change for SPA SEO
  useSEO();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
      <MobileBottomNav />
    </div>
  );
}
