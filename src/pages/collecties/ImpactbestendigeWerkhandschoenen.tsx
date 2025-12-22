import { CollectionLayout, ProductData } from "@/components/collections/CollectionLayout";
import { ProductCard } from "@/components/collections/ProductCard";
import gloveImpact from "@/assets/products/glove-impact.jpg";

const producten: ProductData[] = [
  {
    naam: "Granberg 117.660 Impact Pro",
    beschrijving: "Maximale impactbescherming voor offshore en bouw. TPR beschermers op rug en vingers.",
    kenmerken: ["EN 388", "TPR Impact", "Offshore"],
    bundel: "Per 6 paar",
    sku: "GRB-117660",
  },
  {
    naam: "Granberg 117.670 Heavy Duty Impact",
    beschrijving: "Robuuste impacthandschoen voor zware industrie en constructie.",
    kenmerken: ["EN 388", "Versterkt", "Oliebestendig"],
    bundel: "Per 6 paar",
    sku: "GRB-117670",
  },
  {
    naam: "Granberg 117.680 Rig Worker",
    beschrijving: "Speciaal ontwikkeld voor offshore platforms en booreilanden.",
    kenmerken: ["EN 388", "Waterdicht", "Hi-Vis"],
    bundel: "Per 6 paar",
    sku: "GRB-117680",
  },
  {
    naam: "Granberg 117.690 Construction Pro",
    beschrijving: "Impactbescherming voor bouwplaatsen en infrastructuurwerk.",
    kenmerken: ["EN 388", "Slijtvast", "Grip"],
    bundel: "Per 12 paar",
    sku: "GRB-117690",
  },
  {
    naam: "Granberg 117.700 Mining Impact",
    beschrijving: "Extreme bescherming voor mijnbouw en zware extractie.",
    kenmerken: ["EN 388", "Extra TPR", "Verstevigd"],
    bundel: "Per 6 paar",
    sku: "GRB-117700",
  },
  {
    naam: "Granberg 117.710 Mechanic Pro",
    beschrijving: "Impactbescherming met behoud van fijne motoriek.",
    kenmerken: ["EN 388", "Flexibel", "Touchscreen"],
    bundel: "Per 12 paar",
    sku: "GRB-117710",
  },
];

export default function ImpactbestendigeWerkhandschoenen() {
  return (
    <CollectionLayout
      title="Impactbestendige werkhandschoenen"
      seoTitle="Impactbestendige Werkhandschoenen Kopen | TPR Bescherming | Granberg SafeGrip"
      metaDescription="Professionele impactbestendige werkhandschoenen van Granberg met TPR beschermers. Ideaal voor offshore, bouw en zware industrie. EN 388 gecertificeerd. B2B levering binnen 24u."
      intro="Extra bescherming tegen stoten en impact met onze professionele impactbestendige werkhandschoenen. Ideaal voor offshore, bouw en zware industrie. TPR beschermers op rug en vingers. Leverbaar per bundel."
      canonicalUrl="/collecties/impactbestendige-werkhandschoenen"
      keywords="impactbestendige handschoenen, TPR handschoenen, offshore handschoenen, bouw werkhandschoenen, anti-impact handschoenen, stootbestendige handschoenen, Granberg impact, EN 388 impact, B2B impacthandschoenen"
      producten={producten}
    >
      {producten.map((product) => (
        <ProductCard
          key={product.naam}
          naam={product.naam}
          beschrijving={product.beschrijving}
          kenmerken={product.kenmerken}
          bundel={product.bundel}
          afbeelding={gloveImpact}
        />
      ))}
    </CollectionLayout>
  );
}
