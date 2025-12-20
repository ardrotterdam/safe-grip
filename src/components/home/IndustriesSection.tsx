import { Anchor, HardHat, Factory, Droplets } from "lucide-react";

const industrieen = [
  {
    naam: "Offshore & Maritiem",
    beschrijving: "Bestand tegen extreme omstandigheden op zee",
    icon: Anchor,
  },
  {
    naam: "Bouw & Infrastructuur",
    beschrijving: "Robuuste bescherming voor de bouwplaats",
    icon: HardHat,
  },
  {
    naam: "Industrie & Productie",
    beschrijving: "Veilig werken in productieomgevingen",
    icon: Factory,
  },
  {
    naam: "Olie & Gas",
    beschrijving: "Gecertificeerd voor de petrochemische sector",
    icon: Droplets,
  },
];

export function IndustriesSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industrieën die wij bedienen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van offshore platforms tot productiehallen — wij leveren aan de meest veeleisende sectoren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industrieen.map((industrie) => {
            const Icon = industrie.icon;
            return (
              <div key={industrie.naam} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {industrie.naam}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industrie.beschrijving}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
