import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronRight, Award, Package, Clock, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-offshore-workers.jpg";

const trustBadges = [
  { icon: Clock, label: "60+ jaar expertise", sublabel: "Granberg sinds 1960" },
  { icon: Package, label: "250+ modellen", sublabel: "Compleet assortiment" },
  { icon: Award, label: "Red Dot Award", sublabel: "Bekroond design" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: "center 30%",
        }}
      />
      
      {/* Cinematic gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_40%,hsl(var(--background)/0.8)_100%)]" />
      
      <div className="container relative z-10 py-24 lg:py-32">
        <div className="max-w-2xl space-y-8">
          {/* Official Badge with subtle animation */}
          <div 
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/30 bg-background/40 backdrop-blur-md animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold tracking-wide text-foreground/90">
              Officieel Granberg Distributeur Benelux
            </span>
          </div>
          
          {/* Main Headline - Bold typography */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">Gebouwd voor</span>
            <br />
            <span className="text-gradient-yellow">Extreme</span>
            <br />
            <span className="text-foreground">Omstandigheden</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed animate-fade-in-up font-medium"
            style={{ animationDelay: "0.3s" }}
          >
            Professionele werkhandschoenen voor offshore, maritiem en zware industrie. 
            B2B groothandel met directe levering.
          </p>
          
          {/* CTAs with enhanced styling */}
          <div 
            className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              size="lg" 
              variant="shop" 
              asChild 
              className="glow-yellow text-lg px-8 py-6 font-bold shadow-2xl"
            >
              <Link to="/shop" className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Bekijk Collecties
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-foreground/20 bg-background/20 backdrop-blur-sm hover:bg-foreground/10 text-lg px-8 py-6"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Neem Contact Op
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Trust Badges - More refined */}
        <div 
          className="mt-20 pt-10 border-t border-foreground/10 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={badge.label}
                  className="flex items-center gap-4 p-5 rounded-xl bg-background/30 backdrop-blur-sm border border-foreground/10 hover:border-primary/30 hover:bg-background/40 transition-all duration-300"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{badge.label}</p>
                    <p className="text-sm text-foreground/60">{badge.sublabel}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom fade for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}