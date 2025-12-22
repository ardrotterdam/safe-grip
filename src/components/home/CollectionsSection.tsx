import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Snowflake, FlaskConical, Shield, Flame, Wrench } from "lucide-react";
import { useState } from "react";

const collecties = [
  {
    naam: "Snijbestendige werkhandschoenen",
    beschrijving: "Maximale bescherming tegen snijgevaar. Ideaal voor glas, metaal en scherpe materialen.",
    shortDesc: "Snijweerstand tot niveau F",
    url: "/collecties/snijbestendige-werkhandschoenen",
    icon: Scissors,
    live: true,
    accentColor: "from-red-500/20 to-orange-500/20",
  },
  {
    naam: "Winter werkhandschoenen",
    beschrijving: "Warm en flexibel werken in koude omstandigheden. Geïsoleerd met behoud van grip.",
    shortDesc: "Thermisch tot -30°C",
    url: "/collecties/winter-werkhandschoenen",
    icon: Snowflake,
    live: true,
    accentColor: "from-blue-500/20 to-cyan-500/20",
  },
  {
    naam: "Chemisch bestendige handschoenen",
    beschrijving: "Bescherming tegen chemicaliën en vloeistoffen. Voor industrie en laboratoria.",
    shortDesc: "EN 374 gecertificeerd",
    url: "/collecties/chemisch-bestendige-handschoenen",
    icon: FlaskConical,
    live: true,
    accentColor: "from-green-500/20 to-emerald-500/20",
  },
  {
    naam: "Impactbestendige werkhandschoenen",
    beschrijving: "Extra bescherming tegen stoten en impact. Ideaal voor offshore, bouw en zware industrie.",
    shortDesc: "TPR knokkel bescherming",
    url: "/collecties/impactbestendige-werkhandschoenen",
    icon: Shield,
    live: true,
    accentColor: "from-purple-500/20 to-violet-500/20",
  },
  {
    naam: "Las- en hittebestendige handschoenen",
    beschrijving: "Bescherming bij hoge temperaturen en laswerkzaamheden.",
    shortDesc: "Tot 500°C hittebestendig",
    url: "#",
    icon: Flame,
    live: false,
    accentColor: "from-orange-500/20 to-red-500/20",
  },
  {
    naam: "Montagehandschoenen",
    beschrijving: "Precisie en bescherming voor montage- en assemblagewerk.",
    shortDesc: "Maximale tastzin",
    url: "#",
    icon: Wrench,
    live: false,
    accentColor: "from-slate-500/20 to-zinc-500/20",
  },
];

interface CollectionCardProps {
  collectie: typeof collecties[0];
  index: number;
}

function CollectionCard({ collectie, index }: CollectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = collectie.icon;

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-500 cursor-pointer
        ${collectie.live 
          ? "hover:border-accent/50" 
          : "opacity-60 cursor-not-allowed"
        }
        ${isHovered && collectie.live ? "scale-[1.02] shadow-2xl shadow-accent/20" : ""}
      `}
      onMouseEnter={() => collectie.live && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Gradient background on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${collectie.accentColor} opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`} 
      />
      
      <CardContent className="relative p-6 space-y-4 h-full flex flex-col">
        {/* Icon with animation */}
        <div className="flex items-start justify-between">
          <div 
            className={`p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 
              transition-all duration-500 ${isHovered ? "scale-110 rotate-3" : ""}`}
          >
            <Icon className={`h-7 w-7 text-accent transition-transform duration-500 ${isHovered ? "scale-110" : ""}`} />
          </div>
          {!collectie.live && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
              Binnenkort
            </span>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-grow space-y-2">
          <h3 className="text-lg font-bold text-foreground leading-tight">
            {collectie.naam}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {collectie.beschrijving}
          </p>
        </div>

        {/* Feature tag */}
        <div className={`inline-flex items-center gap-2 text-xs font-semibold text-accent transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {collectie.shortDesc}
        </div>

        {/* CTA */}
        {collectie.live ? (
          <div 
            className={`pt-2 transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-70"}`}
          >
            <Button 
              variant="ghost" 
              asChild 
              className="p-0 h-auto font-bold text-accent hover:text-accent/80 group/btn"
            >
              <Link to={collectie.url} className="flex items-center gap-2">
                Bekijk collectie
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-2" : ""}`} />
              </Link>
            </Button>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground italic pt-2">
            Binnenkort beschikbaar
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function CollectionsSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container relative">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase">
            Ons Assortiment
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Onze Collecties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professionele werkhandschoenen voor elke toepassing. 
            Leverbaar per bundel met staffelprijzen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collecties.map((collectie, index) => (
            <CollectionCard 
              key={collectie.naam} 
              collectie={collectie} 
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="border-accent/50 hover:bg-accent/10 px-8"
          >
            <Link to="/shop" className="flex items-center gap-2">
              Bekijk alle producten
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}