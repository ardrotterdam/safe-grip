import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, HardHat, Anchor, Factory, Droplets, Flame, TreeDeciduous } from "lucide-react";
import forestryChainsaw from "@/assets/industries/forestry-chainsaw.jpg";

const industrieen = [
  {
    id: "bouw",
    naam: "Bouw & Infrastructuur",
    beschrijving: "Robuuste bescherming voor de bouwplaats. Van funderingswerk tot hoogbouw.",
    icon: HardHat,
    features: ["Snijbestendig", "Impactbescherming", "Grip op nat oppervlak"],
    cta: "Bekijk bouwhandschoenen",
    bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    altText: "Bouwvakker met beschermende werkhandschoenen op bouwplaats - SafeGrip Granberg",
  },
  {
    id: "offshore",
    naam: "Olie & Gas",
    beschrijving: "Gecertificeerd voor de petrochemische sector. Bestand tegen olie, chemicaliën en extreme omstandigheden.",
    icon: Droplets,
    features: ["Oliebestendig", "Chemische bescherming", "Antistatisch"],
    cta: "Bekijk offshore handschoenen",
    bgImage: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80",
    altText: "Offshore platform medewerker met oliebestendige werkhandschoenen - SafeGrip Granberg",
  },
  {
    id: "voedsel",
    naam: "Voedselindustrie",
    beschrijving: "Voedselveilige handschoenen voor verwerking en productie. HACCP compliant.",
    icon: Factory,
    features: ["Voedselveilig", "Snijbestendig", "Wasbaar"],
    cta: "Bekijk voedselhandschoenen",
    bgImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1920&q=80",
    altText: "Voedselindustrie medewerker met voedselveilige handschoenen - SafeGrip Granberg",
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
    bgImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
    altText: "Lasser met hittebestendige lashandschoenen - SafeGrip Granberg",
  },
  {
    id: "maritiem",
    naam: "Maritiem & Offshore",
    beschrijving: "Bestand tegen extreme omstandigheden op zee. Waterbestendig met optimale grip.",
    icon: Anchor,
    features: ["Waterbestendig", "Zoutbestendig", "Drijfvermogen"],
    cta: "Bekijk maritieme handschoenen",
    bgImage: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1920&q=80",
    altText: "Maritieme werker met waterbestendige handschoenen - SafeGrip Granberg",
  },
];

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
        <div className="relative rounded-2xl overflow-hidden min-h-[500px]" role="img" aria-label={activeIndustrie.altText}>
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${activeIndustrie.bgImage})` }}
          />
          
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
        </div>
      </div>
    </section>
  );
}