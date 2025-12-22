import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ChevronRight, ShoppingBag } from "lucide-react";

interface CollectionLayoutProps {
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  children: ReactNode;
}

export function CollectionLayout({ 
  title, 
  seoTitle, 
  metaDescription, 
  intro, 
  children 
}: CollectionLayoutProps) {
  return (
    <Layout>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Collecties</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary">{title}</span>
          </nav>
        </div>
      </div>

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
              Alle producten met vaste prijzen per bundel. Direct te bestellen.
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
            Bekijk alle producten in onze shop of neem contact op voor persoonlijk advies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="shop" asChild className="glow-yellow">
              <Link to="/shop" className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Naar de Shop
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Opnemen</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
