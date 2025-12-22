import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ShoppingBag } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Klaar om te bestellen?
          </h2>
          <p className="text-lg text-muted-foreground">
            Bekijk ons complete assortiment werkhandschoenen met vaste prijzen. 
            Direct bestellen, snelle levering door de hele Benelux.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="shop" asChild className="glow-yellow">
              <Link to="/shop" className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Bekijk de Shop
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Vragen? Neem Contact Op
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <a href="tel:+31201234567" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +31 (0)20 123 4567
            </a>
            <a href="mailto:info@safegrip.nl" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              info@safegrip.nl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
