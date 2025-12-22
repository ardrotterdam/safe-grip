import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CollectionsSection } from "@/components/home/CollectionsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import heroImage from "@/assets/hero-offshore-workers.jpg";

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SafeGrip",
  "alternateName": "SafeGrip Benelux",
  "url": "https://safegrip.nl",
  "logo": "https://safegrip.nl/logo.png",
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
  "url": "https://safegrip.nl",
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
  "@id": "https://safegrip.nl",
  "url": "https://safegrip.nl",
  "description": "Officieel Granberg distributeur - B2B werkhandschoenen groothandel",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Scheepvaartkwartier",
    "addressLocality": "Rotterdam",
    "addressRegion": "Zuid-Holland",
    "postalCode": "3000",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.9225,
    "longitude": 4.47917
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "priceRange": "€€"
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
        <link rel="canonical" href="https://safegrip.nl" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safegrip.nl" />
        <meta property="og:title" content="SafeGrip | Officieel Granberg Distributeur Benelux" />
        <meta property="og:description" content="B2B groothandel in professionele Granberg werkhandschoenen. Snijbestendig, chemisch bestendig, winter & impactbestendig. Levering binnen 24 uur in Nederland en België." />
        <meta property="og:image" content="https://safegrip.nl/og-image.jpg" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="SafeGrip" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://safegrip.nl" />
        <meta name="twitter:title" content="SafeGrip | Officieel Granberg Distributeur Benelux" />
        <meta name="twitter:description" content="B2B groothandel in professionele Granberg werkhandschoenen voor Nederland en België." />
        <meta name="twitter:image" content="https://safegrip.nl/twitter-image.jpg" />

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
