import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Users, Award, Truck } from "lucide-react";

const kernwaarden = [
  {
    icon: Shield,
    titel: "Kwaliteit",
    beschrijving: "Alleen gecertificeerde werkhandschoenen die voldoen aan de hoogste Europese normen.",
  },
  {
    icon: Users,
    titel: "Partnerschap",
    beschrijving: "Langdurige relaties met onze klanten door persoonlijk advies en betrouwbare service.",
  },
  {
    icon: Award,
    titel: "Expertise",
    beschrijving: "Jarenlange ervaring in PBM en diepgaande kennis van handschoennormeringen.",
  },
  {
    icon: Truck,
    titel: "Leverbetrouwbaarheid",
    beschrijving: "Snelle levering door de hele Benelux met een uitgebreid voorraadprogramma.",
  },
];

export default function OverOns() {
  return (
    <Layout>
      <Helmet>
        <title>Over SafeGrip | Granberg Distributeur Benelux</title>
        <meta 
          name="description" 
          content="SafeGrip is de officiële Granberg distributeur voor de Benelux. B2B groothandel in professionele werkhandschoenen voor industrie, bouw en offshore."
        />
        <meta property="og:title" content="Over SafeGrip | Granberg Distributeur Benelux" />
        <meta property="og:description" content="SafeGrip is de officiële Granberg distributeur voor de Benelux." />
      </Helmet>

      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Over SafeGrip
            </h1>
            <p className="text-lg text-muted-foreground">
              Uw betrouwbare B2B partner voor professionele werkhandschoenen in de Benelux.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                Officieel Granberg Distributeur
              </h2>
              <p className="text-muted-foreground">
                SafeGrip is de exclusieve distributeur van Granberg werkhandschoenen voor 
                Nederland en België. Granberg is een Zweedse fabrikant die sinds 1993 
                hoogwaardige beschermende werkhandschoenen produceert voor de meest 
                veeleisende industrieën.
              </p>
              <p className="text-muted-foreground">
                Als B2B groothandel leveren wij aan bedrijven in sectoren zoals offshore, 
                bouw, industrie, logistiek en petrochemie. Onze focus ligt op het leveren 
                van de juiste handschoen voor elke toepassing, ondersteund door deskundig 
                advies over normeringen en maatvoering.
              </p>
              <p className="text-muted-foreground">
                Alle producten worden geleverd per bundel met aantrekkelijke staffelprijzen. 
                Neem contact op voor een offerte op maat.
              </p>
              <Button asChild>
                <Link to="/contact">Neem Contact Op</Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary">
                    <span className="text-2xl font-bold text-primary-foreground">SG</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">SafeGrip</h3>
                    <p className="text-muted-foreground">Benelux B2B Specialist</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-2xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Zakelijke klanten</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">30+</p>
                    <p className="text-sm text-muted-foreground">Jaar ervaring</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">NL & BE</p>
                    <p className="text-sm text-muted-foreground">Dekking</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">24u</p>
                    <p className="text-sm text-muted-foreground">Reactietijd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-12 bg-card">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            Onze Kernwaarden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kernwaarden.map((waarde) => {
              const Icon = waarde.icon;
              return (
                <div key={waarde.titel} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {waarde.titel}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {waarde.beschrijving}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Klaar om samen te werken?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Neem contact op voor een offerte op maat of om onze collectie te bespreken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="glow-yellow">
              <Link to="/contact">Offerte Aanvragen</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/collecties/snijbestendige-werkhandschoenen">Bekijk Collecties</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
