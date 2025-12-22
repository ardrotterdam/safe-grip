import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Snowflake, FlaskConical, Hammer, ArrowRight } from "lucide-react";

const collecties = [
  {
    titel: "Snijbestendige werkhandschoenen",
    beschrijving: "Maximale bescherming tegen snijgevaar. EN 388 gecertificeerd met hoge snijweerstandsniveaus voor glasverwerking, metaalbewerking en automotive.",
    url: "/collecties/snijbestendige-werkhandschoenen",
    icon: Shield,
    kenmerken: ["EN 388", "Snijbestendig", "Grip coating"],
  },
  {
    titel: "Winter werkhandschoenen",
    beschrijving: "Warme, geïsoleerde werkhandschoenen voor koude omstandigheden. EN 511 gecertificeerd voor koude isolatie met behoud van vingergevoeligheid.",
    url: "/collecties/winter-werkhandschoenen",
    icon: Snowflake,
    kenmerken: ["EN 511", "Thermo isolatie", "Waterbestendig"],
  },
  {
    titel: "Chemisch bestendige handschoenen",
    beschrijving: "Bescherming tegen chemicaliën en gevaarlijke stoffen. EN 374 gecertificeerd voor gebruik in petrochemie, laboratoria en industrie.",
    url: "/collecties/chemisch-bestendige-handschoenen",
    icon: FlaskConical,
    kenmerken: ["EN 374", "Chemiebestendig", "Olie/vet bestendig"],
  },
  {
    titel: "Impactbestendige werkhandschoenen",
    beschrijving: "Bescherming tegen mechanische stoten en impact. Ideaal voor offshore, bouw en zware industrie waar handletsel risico loopt.",
    url: "/collecties/impactbestendige-werkhandschoenen",
    icon: Hammer,
    kenmerken: ["EN 388", "TPR bescherming", "Schokabsorberend"],
  },
];

export default function Shop() {
  return (
    <Layout>
      <Helmet>
        <title>Shop | SafeGrip Werkhandschoenen</title>
        <meta 
          name="description" 
          content="Bekijk ons complete assortiment professionele werkhandschoenen. Snijbestendige, winter, chemisch bestendige en impactbestendige handschoenen. Direct bestellen met vaste prijzen."
        />
        <meta property="og:title" content="Shop | SafeGrip Werkhandschoenen" />
        <meta property="og:description" content="Bekijk ons complete assortiment professionele werkhandschoenen voor industrie en offshore." />
      </Helmet>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Onze <span className="text-primary">Werkhandschoenen</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Bekijk ons complete assortiment Granberg werkhandschoenen. 
              Alle producten met vaste prijzen per bundel, direct te bestellen.
            </p>
          </div>
        </div>
      </section>

      {/* Collecties Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collecties.map((collectie) => {
              const Icon = collectie.icon;
              return (
                <Link key={collectie.url} to={collectie.url} className="group">
                  <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Icon header */}
                      <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {collectie.titel}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {collectie.beschrijving}
                        </p>
                        
                        {/* Kenmerken */}
                        <div className="flex flex-wrap gap-2">
                          {collectie.kenmerken.map((kenmerk) => (
                            <span 
                              key={kenmerk}
                              className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                            >
                              {kenmerk}
                            </span>
                          ))}
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center gap-2 text-primary font-medium pt-2">
                          <span>Bekijk collectie</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Vragen over onze producten?
            </h2>
            <p className="text-muted-foreground">
              Neem contact op voor persoonlijk advies over de beste handschoen voor uw toepassing.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Opnemen</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
