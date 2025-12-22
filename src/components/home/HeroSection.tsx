import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Truck, Building2, ShoppingBag } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Officieel Granberg Distributeur Benelux</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Professionele Werkhandschoenen voor{" "}
            <span className="text-primary">Industrie & Offshore</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            B2B groothandel in hoogwaardige beschermende werkhandschoenen. 
            Direct bestellen met vaste prijzen per bundel.
          </p>
          
          {/* CTAs */}
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
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border mt-12">
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">PBM Gecertificeerd</p>
                <p className="text-xs text-muted-foreground">EN 388, EN 511, EN 374</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Truck className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Snelle Levering</p>
                <p className="text-xs text-muted-foreground">NL & BE dekking</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Building2 className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">B2B Specialist</p>
                <p className="text-xs text-muted-foreground">Staffelprijzen beschikbaar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
