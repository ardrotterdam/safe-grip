import { CollectionLayout } from "@/components/collections/CollectionLayout";
import { ProductCard } from "@/components/collections/ProductCard";

const producten = [
  {
    naam: "Granberg 114.420 Chemical Pro",
    beschrijving: "Brede chemische bescherming voor industriële toepassingen.",
    kenmerken: ["EN 374", "Type A", "Nitril"],
    bundel: "Per 6 paar",
  },
  {
    naam: "Granberg 114.430 Acid Resist",
    beschrijving: "Bestand tegen zuren en basen. Ideaal voor laboratoria.",
    kenmerken: ["EN 374", "Zuurbestendig", "Lang manchet"],
    bundel: "Per 6 paar",
  },
  {
    naam: "Granberg 114.440 Solvent Shield",
    beschrijving: "Bescherming tegen oplosmiddelen en chemicaliën.",
    kenmerken: ["EN 374", "Oplosmiddelen", "Gevoerd"],
    bundel: "Per 12 paar",
  },
  {
    naam: "Granberg 114.450 Lab Safety",
    beschrijving: "Lichtgewicht chemische handschoen voor laboratoriumwerk.",
    kenmerken: ["EN 374", "Precisie", "Latex vrij"],
    bundel: "Per 6 paar",
  },
  {
    naam: "Granberg 114.460 Industrial Chem",
    beschrijving: "Robuuste handschoen voor chemische industrie.",
    kenmerken: ["EN 374", "Type B", "Verstevigd"],
    bundel: "Per 6 paar",
  },
  {
    naam: "Granberg 114.470 Multi Chem",
    beschrijving: "Breed spectrum chemische bescherming.",
    kenmerken: ["EN 374", "Type A", "Dubbellaags"],
    bundel: "Per 6 paar",
  },
];

export default function ChemischBestendigeHandschoenen() {
  return (
    <CollectionLayout
      title="Chemisch bestendige handschoenen"
      seoTitle="Chemisch bestendige handschoenen | Granberg | SafeGrip"
      metaDescription="Professionele chemisch bestendige handschoenen van Granberg. EN 374 gecertificeerd voor industriële en laboratoriumtoepassingen. B2B levering in NL & BE."
      intro="Optimale bescherming tegen chemicaliën met onze EN 374 gecertificeerde handschoenen. Geschikt voor industrie, laboratoria en chemische omgevingen. Leverbaar per bundel."
    >
      {producten.map((product) => (
        <ProductCard
          key={product.naam}
          naam={product.naam}
          beschrijving={product.beschrijving}
          kenmerken={product.kenmerken}
          bundel={product.bundel}
        />
      ))}
    </CollectionLayout>
  );
}
