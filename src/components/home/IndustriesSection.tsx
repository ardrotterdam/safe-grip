import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, HardHat, Anchor, Factory, Droplets, Flame, TreeDeciduous } from "lucide-react";
// @ts-ignore - vite-imagetools
import forestryChainsaw from "@/assets/industries/forestry-chainsaw.jpg?format=webp&quality=85";
// @ts-ignore - vite-imagetools
import maritimeOffshore from "@/assets/industries/maritime-offshore.jpg?format=webp&quality=85";
// @ts-ignore - vite-imagetools
import constructionSite from "@/assets/industries/construction-site.jpg?format=webp&quality=85";
// @ts-ignore - vite-imagetools
import oilGasRefinery from "@/assets/industries/oil-gas-refinery.jpg?format=webp&quality=85";
// @ts-ignore - vite-imagetools
import foodProcessing from "@/assets/industries/food-processing.jpg?format=webp&quality=85";
// @ts-ignore - vite-imagetools
import weldingMetalwork from "@/assets/industries/welding-metalwork.jpg?format=webp&quality=85";

const industrieen = [
  {
    id: "bouw",
    naam: "Bouw & Infrastructuur",
    beschrijving: "Robuuste bescherming voor de bouwplaats. Van funderingswerk tot hoogbouw.",
    icon: HardHat,
    features: ["Snijbestendig", "Impactbescherming", "Grip op nat oppervlak"],
    cta: "Bekijk bouwhandschoenen",
    bgImage: constructionSite,
    altText: "Bouwvakkers met beschermende werkhandschoenen op bouwplaats - SafeGrip Granberg",
  },
  {
    id: "offshore",
    naam: "Olie & Gas",
    beschrijving: "Gecertificeerd voor de petrochemische sector. Bestand tegen olie, chemicaliën en extreme omstandigheden.",
    icon: Droplets,
    features: ["Oliebestendig", "Chemische bescherming", "Antistatisch"],
    cta: "Bekijk offshore handschoenen",
    bgImage: oilGasRefinery,
    altText: "Petrochemie medewerkers met oliebestendige werkhandschoenen - SafeGrip Granberg",
  },
  {
    id: "voedsel",
    naam: "Voedselindustrie",
    beschrijving: "Voedselveilige handschoenen voor verwerking en productie. HACCP compliant.",
    icon: Factory,
    features: ["Voedselveilig", "Snijbestendig", "Wasbaar"],
    cta: "Bekijk voedselhandschoenen",
    bgImage: foodProcessing,
    altText: "Voedselindustrie medewerkers met voedselveilige handschoenen - SafeGrip Granberg",
  },
  {
    id: "bosbouw",
    naam: "Bosbouw & Groenvoorziening",
    beschrijving: "Bescherming bij kettingzaagwerk en groenonderhoud. EN 381 gecertificeerd.",
    icon: TreeDeciduous,
    features: ["Kettingzaagbestendig", "Waterafstotend", "Ademend"],
    cta: "Bekijk bosbouw handschoenen",
    bgImage: forestryChainsaw,
    altText: "Professionele bosbouwer met kettingzaagbestendige werkhandschoenen - SafeGrip Granberg",
  },
  {
    id: "lassen",
    naam: "Lassen & Metaalbewerking",
    beschrijving: "Hittebestendige bescherming voor las- en slijpwerkzaamheden.",
    icon: Flame,
    features: ["Hittebestendig", "Spatbescherming", "Duurzaam leer"],
    cta: "Bekijk lashandschoenen",
    bgImage: weldingMetalwork,
    altText: "Lasser met hittebestendige lashandschoenen - SafeGrip Granberg",
  },
  {
    id: "maritiem",
    naam: "Maritiem & Offshore",
    beschrijving: "Ontwikkeld voor de veeleisende Noordzee offshore industrie. Bewezen handbescherming voor maritieme professionals wereldwijd.",
    icon: Anchor,
    features: ["Oliebestendig", "Impactbestendig", "Zoutwater-proof", "EN 388 Gecertificeerd"],
    cta: "Bekijk maritieme handschoenen",
    bgImage: maritimeOffshore,
    altText: "Offshore werkhandschoenen voor maritieme industrie - SafeGrip Granberg",
  },
];

// Lazy loading background component
function LazyBackgroundPanel({ 
  bgImage, 
  altText, 
  children 
}: { 
  bgImage: string; 
  altText: string; 
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && bgImage) {
      const img = new Image();
      img.src = bgImage;
      img.onload = () => setIsLoaded(true);
    }
  }, [isInView, bgImage]);

  // Reset loaded state when image changes
  useEffect(() => {
    if (isInView) {
      setIsLoaded(false);
      const img = new Image();
      img.src = bgImage;
      img.onload = () => setIsLoaded(true);
    }
  }, [bgImage, isInView]);

  return (
    <div 
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden min-h-[500px]" 
      role="img" 
      aria-label={altText}
    >
      {/* Background Image with lazy loading */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={isInView ? { backgroundImage: `url(${bgImage})` } : undefined}
      />
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      {children}
    </div>
  );
}

export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(industrieen[0].id);
  const activeIndustrie = industrieen.find(i => i.id === activeTab) || industrieen[0];
  const Icon = activeIndustrie.icon;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase">
            Sectoren
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Industrieën die wij bedienen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van offshore platforms tot productiehallen — wij leveren aan de meest veeleisende sectoren.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industrieen.map((industrie) => {
            const TabIcon = industrie.icon;
            const isActive = activeTab === industrie.id;
            return (
              <button
                key={industrie.id}
                onClick={() => setActiveTab(industrie.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300
                  ${isActive 
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25" 
                    : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
              >
                <TabIcon className="h-4 w-4" />
                <span className="hidden sm:inline">{industrie.naam.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <LazyBackgroundPanel bgImage={activeIndustrie.bgImage} altText={activeIndustrie.altText}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-2xl">
            <div className="space-y-6">
              {/* Icon */}
              <div className="inline-flex p-4 rounded-xl glass-card">
                <Icon className="h-10 w-10 text-accent" />
              </div>
              
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
                {activeIndustrie.naam}
              </h3>
              
              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {activeIndustrie.beschrijving}
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {activeIndustrie.features.map((feature) => (
                  <span 
                    key={feature}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </span>
                ))}
              </div>
              
              {/* CTA */}
              <Button 
                size="lg" 
                variant="shop" 
                asChild 
                className="mt-4"
              >
                <Link to="/shop" className="flex items-center gap-2">
                  {activeIndustrie.cta}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </LazyBackgroundPanel>
      </div>
    </section>
  );
}