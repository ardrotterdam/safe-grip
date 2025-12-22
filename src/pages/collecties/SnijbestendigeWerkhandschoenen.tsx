import { CollectionLayout, ProductData } from "@/components/collections/CollectionLayout";
import { ProductCard } from "@/components/collections/ProductCard";
// @ts-ignore - vite-imagetools
import gloveCut from "@/assets/products/glove-cut.jpg?format=webp&quality=85";

const producten: ProductData[] = [
  {
    naam: "Granberg 116.560 Snijbestendige Handschoen",
    beschrijving: "Hoogwaardige snijbestendige handschoen met HPPE vezel. Snijniveau D volgens EN 388.",
    kenmerken: ["Snijniveau D", "EN 388:2016", "Nitril coating"],
    bundel: "Per 6 paar",
    sku: "GRB-116560",
  },
  {
    naam: "Granberg 116.570 Cut Protect Pro",
    beschrijving: "Premium snijbescherming voor glasindustrie en metaalbewerking.",
    kenmerken: ["Snijniveau E", "EN 388:2016", "PU palm"],
    bundel: "Per 6 paar",
    sku: "GRB-116570",
  },
  {
    naam: "Granberg 116.580 Industrial Cut",
    beschrijving: "Industriële snijbestendige handschoen met verstevigde duim.",
    kenmerken: ["Snijniveau C", "Verstevigd", "Ademend"],
    bundel: "Per 12 paar",
    sku: "GRB-116580",
  },
  {
    naam: "Granberg 116.590 Glass Handler",
    beschrijving: "Speciaal ontwikkeld voor glasverwerking met maximale grip.",
    kenmerken: ["Snijniveau D", "Anti-slip", "Latex vrij"],
    bundel: "Per 6 paar",
    sku: "GRB-116590",
  },
  {
    naam: "Granberg 116.600 Metal Work",
    beschrijving: "Robuuste handschoen voor metaalbewerking en plaatwerk.",
    kenmerken: ["Snijniveau E", "Slijtvast", "Oliebestendig"],
    bundel: "Per 6 paar",
    sku: "GRB-116600",
  },
  {
    naam: "Granberg 116.610 Assembly Cut",
    beschrijving: "Lichtgewicht snijbestendige handschoen voor precisiewerk.",
    kenmerken: ["Snijniveau B", "Touchscreen", "Flexibel"],
    bundel: "Per 12 paar",
    sku: "GRB-116610",
  },
];

export default function SnijbestendigeWerkhandschoenen() {
  return (
    <CollectionLayout
      title="Snijbestendige werkhandschoenen"
      seoTitle="Snijbestendige Werkhandschoenen Kopen | EN 388 Gecertificeerd | Granberg SafeGrip"
      metaDescription="Professionele snijbestendige werkhandschoenen van Granberg. EN 388 gecertificeerd met snijniveau B t/m E. Ideaal voor glas, metaal en automotive. B2B levering binnen 24u in NL & BE."
      intro="Maximale bescherming tegen snijgevaar met onze professionele snijbestendige werkhandschoenen. Alle handschoenen zijn EN 388 gecertificeerd en leverbaar per bundel voor zakelijke afnemers."
      canonicalUrl="/collecties/snijbestendige-werkhandschoenen"
      keywords="snijbestendige handschoenen, EN 388 handschoenen, snijwerende werkhandschoenen, glashandschoenen, metaalbewerking handschoenen, snijniveau D, snijniveau E, Granberg snijbestendig, HPPE handschoenen, B2B werkhandschoenen"
      producten={producten}
    >
      {producten.map((product) => (
        <ProductCard
          key={product.naam}
          naam={product.naam}
          beschrijving={product.beschrijving}
          kenmerken={product.kenmerken}
          bundel={product.bundel}
          afbeelding={gloveCut}
        />
      ))}
    </CollectionLayout>
  );
}
