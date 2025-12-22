import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ChevronRight, ShoppingBag } from "lucide-react";

export interface ProductData {
  naam: string;
  beschrijving: string;
  kenmerken: string[];
  bundel: string;
  sku?: string;
  prijs?: string;
}

interface CollectionLayoutProps {
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  children: ReactNode;
  canonicalUrl: string;
  keywords: string;
  producten: ProductData[];
  categoryImage?: string;
}

// Generate Product Schema for each product
const generateProductSchema = (product: ProductData, categoryUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.naam,
  "description": product.beschrijving,
  "sku": product.sku || product.naam.replace(/\s+/g, '-').toLowerCase(),
  "brand": {
    "@type": "Brand",
    "name": "Granberg"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Granberg AS",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NO"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": `https://safegrip.nl${categoryUrl}`,
    "priceCurrency": "EUR",
    "price": product.prijs || "Op aanvraag",
    "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "SafeGrip"
    },
    "itemCondition": "https://schema.org/NewCondition",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingDestination": [
        { "@type": "DefinedRegion", "addressCountry": "NL" },
        { "@type": "DefinedRegion", "addressCountry": "BE" }
      ],
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 1,
          "unitCode": "d"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 2,
          "unitCode": "d"
        }
      }
    }
  },
  "category": "Werkhandschoenen",
  "additionalProperty": product.kenmerken.map(kenmerk => ({
    "@type": "PropertyValue",
    "name": "Kenmerk",
    "value": kenmerk
  }))
});

// Generate ItemList Schema for the collection
const generateItemListSchema = (producten: ProductData[], title: string, categoryUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": title,
  "url": `https://safegrip.nl${categoryUrl}`,
  "numberOfItems": producten.length,
  "itemListElement": producten.map((product, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": generateProductSchema(product, categoryUrl)
  }))
});

// Generate BreadcrumbList Schema
const generateBreadcrumbSchema = (title: string, categoryUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://safegrip.nl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Shop",
      "item": "https://safegrip.nl/shop"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": title,
      "item": `https://safegrip.nl${categoryUrl}`
    }
  ]
});

// Generate CollectionPage Schema
const generateCollectionPageSchema = (title: string, description: string, categoryUrl: string, producten: ProductData[]) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": title,
  "description": description,
  "url": `https://safegrip.nl${categoryUrl}`,
  "isPartOf": {
    "@type": "WebSite",
    "name": "SafeGrip",
    "url": "https://safegrip.nl"
  },
  "about": {
    "@type": "Thing",
    "name": "Werkhandschoenen",
    "description": "Professionele werkhandschoenen van Granberg"
  },
  "numberOfItems": producten.length,
  "provider": {
    "@type": "Organization",
    "name": "SafeGrip",
    "url": "https://safegrip.nl"
  }
});

export function CollectionLayout({ 
  title, 
  seoTitle, 
  metaDescription, 
  intro, 
  children,
  canonicalUrl,
  keywords,
  producten,
}: CollectionLayoutProps) {
  const itemListSchema = generateItemListSchema(producten, title, canonicalUrl);
  const breadcrumbSchema = generateBreadcrumbSchema(title, canonicalUrl);
  const collectionPageSchema = generateCollectionPageSchema(title, metaDescription, canonicalUrl, producten);

  return (
    <Layout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://safegrip.nl${canonicalUrl}`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://safegrip.nl${canonicalUrl}`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="SafeGrip" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={metaDescription} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(collectionPageSchema)}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <nav className="border-b border-border bg-card" aria-label="Breadcrumb">
        <div className="container py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" className="hover:text-foreground transition-colors" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/shop" className="hover:text-foreground transition-colors" itemProp="item">
                <span itemProp="name">Shop</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-primary" itemProp="name">{title}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="shop">
                <Link to="/shop" className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Bekijk alle collecties
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Vragen? Neem contact op</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              {producten.length} producten • Alle producten met vaste prijzen per bundel
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {children}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-card">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Interesse in deze collectie?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Bekijk alle producten in onze shop of neem contact op voor persoonlijk advies en een offerte op maat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="shop" asChild className="glow-yellow">
              <Link to="/shop" className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Naar de Shop
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Offerte Aanvragen</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
