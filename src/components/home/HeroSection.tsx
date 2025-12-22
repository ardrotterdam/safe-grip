import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronRight, Award, Package, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-industrial-bg.jpg";

const trustBadges = [
  { icon: Clock, label: "60+ jaar expertise", sublabel: "Granberg sinds 1960" },
  { icon: Package, label: "250+ modellen", sublabel: "Compleet assortiment" },
  { icon: Award, label: "Red Dot Award", sublabel: "Bekroond design" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      
      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl space-y-8">
          {/* Official Badge */}
          <div 
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded glass-card animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-foreground">
              Officieel Granberg Distributeur Benelux
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">Professionele</span>
            <br />
            <span className="text-gradient-blue">Werkhandschoenen</span>
            <br />
            <span className="text-foreground">voor de Industrie</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            B2B groothandel met directe levering. Vaste prijzen per bundel, 
            geen offerteaanvragen nodig.
          </p>
          
          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              size="lg" 
              variant="shop" 
              asChild 
              className="glow-yellow text-lg px-8 py-6 font-bold"
            >
              <Link to="/shop" className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Shop Nu
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-accent/50 hover:bg-accent/10 text-lg px-8 py-6"
            >
              <Link to="/shop" className="flex items-center gap-2">
                Bekijk Collecties
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div 
          className="mt-16 pt-8 border-t border-border/50 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={badge.label}
                  className="flex items-center gap-4 p-4 rounded-lg glass-card hover-lift"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{badge.label}</p>
                    <p className="text-sm text-muted-foreground">{badge.sublabel}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}