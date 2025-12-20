import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Snowflake, FlaskConical, Shield, Flame, Wrench } from "lucide-react";

const collecties = [
  {
    naam: "Snijbestendige werkhandschoenen",
    beschrijving: "Maximale bescherming tegen snijgevaar. Ideaal voor glas, metaal en scherpe materialen.",
    url: "/collecties/snijbestendige-werkhandschoenen",
    icon: Scissors,
    live: true,
  },
  {
    naam: "Winter werkhandschoenen",
    beschrijving: "Warm en flexibel werken in koude omstandigheden. Geïsoleerd met behoud van grip.",
    url: "/collecties/winter-werkhandschoenen",
    icon: Snowflake,
    live: true,
  },
  {
    naam: "Chemisch bestendige handschoenen",
    beschrijving: "Bescherming tegen chemicaliën en vloeistoffen. Voor industrie en laboratoria.",
    url: "/collecties/chemisch-bestendige-handschoenen",
    icon: FlaskConical,
    live: true,
  },
  {
    naam: "Impactbestendige werkhandschoenen",
    beschrijving: "Extra bescherming tegen stoten en impact. Ideaal voor offshore, bouw en zware industrie.",
    url: "/collecties/impactbestendige-werkhandschoenen",
    icon: Shield,
    live: true,
  },
  {
    naam: "Las- en hittebestendige handschoenen",
    beschrijving: "Bescherming bij hoge temperaturen en laswerkzaamheden.",
    url: "#",
    icon: Flame,
    live: false,
  },
  {
    naam: "Montagehandschoenen",
    beschrijving: "Precisie en bescherming voor montage- en assemblagewerk.",
    url: "#",
    icon: Wrench,
    live: false,
  },
];

export function CollectionsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onze Collecties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professionele werkhandschoenen voor elke toepassing. Leverbaar per bundel met staffelprijzen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collecties.map((collectie) => {
            const Icon = collectie.icon;
            return (
              <Card 
                key={collectie.naam} 
                className={`group relative overflow-hidden transition-all duration-300 ${
                  collectie.live 
                    ? "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10" 
                    : "opacity-60"
                }`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {!collectie.live && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        Binnenkort
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {collectie.naam}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {collectie.beschrijving}
                    </p>
                  </div>

                  {collectie.live ? (
                    <Button variant="ghost" asChild className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                      <Link to={collectie.url} className="flex items-center gap-2">
                        Bekijk collectie
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">
                      Binnenkort beschikbaar
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
