import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, Anchor, Factory, Ship, HardHat, Cog, Truck, Utensils, TreeDeciduous, MapPin } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import kantoorImage from "@/assets/kantoor-rotterdam.webp";
import { SITE_URL } from "@/config/site";

const industrieTags = [
  { label: "Offshore", icon: Anchor },
  { label: "Petrochemie", icon: Factory },
  { label: "Scheepvaart", icon: Ship },
  { label: "Bouw", icon: HardHat },
  { label: "Staal", icon: Cog },
  { label: "Logistiek", icon: Truck },
  { label: "Voedsel", icon: Utensils },
  { label: "Bosbouw", icon: TreeDeciduous },
];

const stats = [
  { value: 60, suffix: "+", label: "Jaar Expertise" },
  { value: 250, suffix: "+", label: "Modellen" },
  { value: 53, suffix: "", label: "Landen" },
  { value: 24, suffix: "u", label: "Reactietijd" },
];

const trustBadges = [
  { emoji: "🇳🇴", label: "Noorse Kwaliteit", sublabel: "Sinds 1961" },
  { emoji: "🏆", label: "Red Dot Award Winnaar", sublabel: "Design Excellence" },
  { emoji: "🧪", label: "EU Gecertificeerd", sublabel: "EN 388 / EN 407" },
  { emoji: "⚓", label: "Westplein Rotterdam", sublabel: "Onderdeel van ABshops.nl" },
];

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-safegrip-blue">
      {count}{suffix}
    </span>
  );
}

// About Page Schema
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Over SafeGrip",
  "description": "SafeGrip is de officiële Granberg distributeur voor Nederland en België. 60+ jaar Noorse kwaliteit.",
  "url": `${SITE_URL}/over-ons`,
  "mainEntity": {
    "@type": "Organization",
    "name": "SafeGrip",
    "foundingDate": "1961",
    "description": "Officieel Granberg distributeur voor de Benelux",
    "areaServed": ["Netherlands", "Belgium"],
    "brand": {
      "@type": "Brand",
      "name": "Granberg"
    }
  }
};

export default function OverOns() {
  return (
    <Layout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Over SafeGrip | Officieel Granberg Distributeur | 60+ Jaar Noorse Kwaliteit</title>
        <meta 
          name="description" 
          content="SafeGrip is de officiële Granberg distributeur voor Nederland en België. 60+ jaar Noorse kwaliteit in professionele werkhandschoenen. B2B groothandel vanuit Rotterdam."
        />
        <meta name="keywords" content="SafeGrip, Granberg distributeur, werkhandschoenen groothandel, Noorse kwaliteit, B2B handschoenen, Rotterdam, Benelux, officieel distributeur" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/over-ons`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/over-ons`} />
        <meta property="og:title" content="Over SafeGrip | Officieel Granberg Distributeur Benelux" />
        <meta property="og:description" content="60+ jaar Noorse kwaliteit. Officieel Granberg distributeur voor Nederland en België." />
        <meta property="og:locale" content="nl_NL" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        </script>
      </Helmet>

      {/* Office Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${kantoorImage})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        
        {/* Content */}
        <div className="container relative z-10 h-full flex flex-col justify-end pb-12 md:pb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safegrip-blue/20 backdrop-blur-sm border border-safegrip-blue/30">
              <MapPin className="h-4 w-4 text-safegrip-blue" />
              <span className="text-sm font-medium text-foreground">Westplein 12, Rotterdam</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Ons Kantoor in het Hart van Rotterdam
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Vanuit dit monumentale pand bedienen wij de Benelux met persoonlijk advies en snelle levering.
            </p>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-12 bg-card/50 border-y border-border/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Bezoek Ons</h2>
              <p className="text-muted-foreground">
                Westplein 12, 3016 BM Rotterdam<br />
                Onderdeel van ABshops.nl
              </p>
              <p className="text-sm text-muted-foreground">
                KVK: 72037628
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.7!2d4.4717!3d51.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4335d4e44a2d3%3A0x1!2sWestplein%2012%2C%203016%20BM%20Rotterdam!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SafeGrip kantoor locatie - Westplein 12, Rotterdam"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-background">
        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Story */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-safegrip-blue font-semibold tracking-wide uppercase text-sm">
                  Officieel Granberg distributeur voor Nederland en België
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                  Waar Noorse Kwaliteit de{" "}
                  <span className="text-gradient-blue">Rotterdamse Haven</span>{" "}
                  Ontmoet
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  SafeGrip is de exclusieve distributeur van Granberg werkhandschoenen voor 
                  Nederland en België. Granberg is een Noorse fabrikant die sinds 1961 
                  hoogwaardige beschermende werkhandschoenen produceert voor de meest 
                  veeleisende industrieën.
                </p>
                <p>
                  Vanuit Rotterdam bedienen wij bedrijven in de 
                  Benelux met persoonlijk advies en snelle levering. Onze focus ligt op het 
                  leveren van de juiste handschoen voor elke toepassing, ondersteund door 
                  60+ jaar Noorse expertise.
                </p>
              </div>

              {/* Industry Tags */}
              <div className="flex flex-wrap gap-2">
                {industrieTags.map((tag) => {
                  const Icon = tag.icon;
                  return (
                    <span 
                      key={tag.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground hover:border-safegrip-blue/50 hover:text-foreground transition-all duration-300"
                    >
                      <Icon className="h-3.5 w-3.5 text-safegrip-blue" />
                      {tag.label}
                    </span>
                  );
                })}
              </div>

              <Button asChild variant="shop" size="lg" className="glow-yellow">
                <Link to="/shop" className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Bekijk de Shop
                </Link>
              </Button>
            </div>

            {/* Right Column - Stats Card with Glassmorphism */}
            <div className="relative">
              {/* Blue glow behind card */}
              <div className="absolute inset-0 bg-safegrip-blue/20 blur-[100px] rounded-full scale-75" />
              
              <div className="relative glass-card rounded-2xl p-8 md:p-10 border border-safegrip-blue/20">
                {/* Subtle blue gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-safegrip-blue/5 to-transparent rounded-2xl pointer-events-none" />
                
                <div className="relative grid grid-cols-2 gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center space-y-2">
                      <CountUpNumber target={stat.value} suffix={stat.suffix} />
                      <p className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-safegrip-blue/30 rounded-tr-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-safegrip-blue/30 rounded-bl-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-card/50 border-y border-border/50">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div 
                key={badge.label}
                className="group flex items-center gap-4 p-6 rounded-xl bg-background/50 border border-border/50 hover:border-safegrip-blue/30 hover-lift transition-all duration-300"
              >
                <span className="text-4xl">{badge.emoji}</span>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-safegrip-blue transition-colors">
                    {badge.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {badge.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Klaar om samen te werken?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bekijk ons assortiment of neem contact op om onze collectie te bespreken.
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
