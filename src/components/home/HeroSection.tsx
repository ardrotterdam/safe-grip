import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronRight, Award, Package, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import heroDesktop from "@/assets/hero-offshore-workers.jpg";
import heroMobile from "@/assets/hero-granberg-9001-mobile.png";

const trustBadges = [
  { icon: Clock, label: "60+ jaar expertise", sublabel: "Granberg sinds 1960" },
  { icon: Package, label: "250+ modellen", sublabel: "Compleet assortiment" },
  { icon: Award, label: "Red Dot Award", sublabel: "Bekroond design" },
];

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  const heroImage = isMobile ? heroMobile : heroDesktop;
  const heroAlt = isMobile 
    ? "GRANBERG 9001 Red Dot Award winnende snijbestendige werkhandschoen met Level F bescherming, Kozane technologie en Hi-Viz geel-groene kleur voor offshore en industrie"
    : "Offshore werknemers met Granberg professionele werkhandschoenen in industriële omgeving";

  useEffect(() => {
    // Preload both images for fast switching
    const preloadDesktop = new Image();
    const preloadMobile = new Image();
    preloadDesktop.src = heroDesktop;
    preloadMobile.src = heroMobile;
    
    const currentImg = new Image();
    currentImg.src = heroImage;
    currentImg.onload = () => setIsLoaded(true);
  }, [heroImage]);

  return (
    <section 
      className={`hero-spotlight relative min-h-screen flex items-center overflow-hidden ${isMobile ? 'hero-spotlight-mobile' : 'hero-spotlight-desktop'}`}
      aria-label={heroAlt}
    >
      {/* Background Image with Ken Burns effect */}
      <div 
        className={`absolute inset-0 bg-no-repeat transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${isMobile 
          ? "bg-contain bg-center bg-background animate-[kenburns-mobile_25s_ease-in-out_infinite_alternate]" 
          : "bg-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]"
        }`}
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: isMobile ? "center 40%" : "center 30%",
        }}
        role="img"
        aria-label={heroAlt}
      />
      
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-background animate-pulse" />
      )}
      
      {/* Cinematic gradient overlays for depth - rechterkant lichter voor Red Dot Award zichtbaarheid */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_50%,hsl(var(--background)/0.6)_100%)]" />
      
      {/* Red Dot Award spotlight - extra helderheid rechtsboven op handschoen */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_40%_at_80%_25%,rgba(255,250,230,0.15)_0%,transparent_70%)]" />
      
      {/* Zee/Ocean wave animation overlay - subtiele beweging op het water */}
      {!isMobile && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, transparent 45%, rgba(100,180,220,0.03) 50%, rgba(80,160,200,0.05) 55%, transparent 65%)',
            animation: 'oceanWave 5s ease-in-out infinite',
          }}
        />
      )}
      {!isMobile && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, transparent 48%, rgba(150,200,230,0.04) 52%, rgba(120,180,210,0.03) 56%, transparent 62%)',
            animation: 'oceanWave 6s ease-in-out infinite 1.5s',
          }}
        />
      )}
      {/* Shimmer effect op water */}
      {!isMobile && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 20% 8% at 55% 52%, rgba(255,255,255,0.06) 0%, transparent 100%)',
            animation: 'oceanShimmer 4s ease-in-out infinite',
          }}
        />
      )}
      
      <div className="container relative z-20 py-24 lg:py-32">
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
            <span className="text-foreground">Gemaakt voor</span>
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
          className="mt-48 pt-10 border-t border-foreground/10 animate-fade-in-up"
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