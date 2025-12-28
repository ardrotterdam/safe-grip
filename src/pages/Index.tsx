import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CollectionsSection } from "@/components/home/CollectionsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import heroImage from "@/assets/hero-offshore-workers.jpg";
import { SITE_URL } from "@/config/site";

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SafeGrip",
  "alternateName": "SafeGrip Benelux",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "description": "Officieel Granberg distributeur voor Nederland en België. B2B groothandel in professionele werkhandschoenen.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rotterdam",
    "addressRegion": "Zuid-Holland",
    "addressCountry": "NL"
  },
  "areaServed": [
    { "@type": "Country", "name": "Netherlands" },
    { "@type": "Country", "name": "Belgium" }
  ],
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": ["Dutch", "English"]
  }
};

// WebSite Schema for SEO
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SafeGrip",
  "url": SITE_URL,
  "description": "B2B groothandel in professionele Granberg werkhandschoenen voor de Benelux",
  "publisher": {
    "@type": "Organization",
    "name": "SafeGrip"
  }
};

// LocalBusiness Schema for SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SafeGrip",
  "@id": SITE_URL,
  "url": SITE_URL,
  "description": "Officieel Granberg distributeur - B2B werkhandschoenen groothandel",
  "telephone": "+31108005912",
  "email": "info@safe-grip.nl",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Westplein 12",
    "addressLocality": "Rotterdam",
    "addressRegion": "Zuid-Holland",
    "postalCode": "3016 BM",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.9186,
    "longitude": 4.4717
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "priceRange": "€€",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "EUR"
};

const Index = () => {
  return (
    <Layout>
      <Helmet>
        {/* Preload critical hero image for faster LCP */}
        <link rel="preload" as="image" href={heroImage} fetchPriority="high" />
        
        {/* Primary Meta Tags */}
        <title>SafeGrip | Officieel Granberg Distributeur Nederland & België | Professionele Werkhandschoenen</title>
        <meta 
          name="description" 
          content="SafeGrip is de officiële Granberg distributeur voor de Benelux. B2B groothandel in gecertificeerde werkhandschoenen: snijbestendig, chemisch bestendig, winter & impactbestendig. 60+ jaar Noorse kwaliteit. Levering binnen 24 uur."
        />
        <meta name="keywords" content="werkhandschoenen, Granberg, SafeGrip, B2B, groothandel, snijbestendige handschoenen, chemisch bestendige handschoenen, winterhandschoenen, impactbestendige handschoenen, PBM, persoonlijke beschermingsmiddelen, Nederland, België, Benelux, EN 388, EN 407, EN 511, offshore handschoenen, bouw handschoenen" />
        <meta name="author" content="SafeGrip" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="SafeGrip | Officieel Granberg Distributeur Benelux" />
        <meta property="og:description" content="B2B groothandel in professionele Granberg werkhandschoenen. Snijbestendig, chemisch bestendig, winter & impactbestendig. Levering binnen 24 uur in Nederland en België." />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="SafeGrip" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SITE_URL} />
        <meta name="twitter:title" content="SafeGrip | Officieel Granberg Distributeur Benelux" />
        <meta name="twitter:description" content="B2B groothandel in professionele Granberg werkhandschoenen voor Nederland en België." />
        <meta name="twitter:image" content={`${SITE_URL}/twitter-image.jpg`} />

        {/* Additional SEO Tags */}
        <meta name="geo.region" content="NL-ZH" />
        <meta name="geo.placename" content="Rotterdam" />
        <meta name="geo.position" content="51.9225;4.47917" />
        <meta name="ICBM" content="51.9225, 4.47917" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <main>
        <HeroSection />
        <CollectionsSection />
        <IndustriesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
    </Layout>
  );
};

export default Index;
