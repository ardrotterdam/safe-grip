import { CollectionLayout, ProductData } from "@/components/collections/CollectionLayout";
import { ProductCard } from "@/components/collections/ProductCard";
import gloveWinter from "@/assets/products/glove-winter.jpg";

const producten: ProductData[] = [
  {
    naam: "Granberg 115.520 Arctic Pro",
    beschrijving: "Geïsoleerde winterhandschoen voor extreme koude. Warm tot -30°C.",
    kenmerken: ["EN 511", "Tot -30°C", "Waterdicht"],
    bundel: "Per 6 paar",
    sku: "GRB-115520",
  },
  {
    naam: "Granberg 115.530 Cold Grip",
    beschrijving: "Thermische handschoen met uitstekende grip in koude omstandigheden.",
    kenmerken: ["EN 511", "Grip coating", "Ademend"],
    bundel: "Per 6 paar",
    sku: "GRB-115530",
  },
  {
    naam: "Granberg 115.540 Winter Work",
    beschrijving: "Veelzijdige winterwerkhandschoen voor algemeen gebruik.",
    kenmerken: ["EN 511", "Flexibel", "Touchscreen"],
    bundel: "Per 12 paar",
    sku: "GRB-115540",
  },
  {
    naam: "Granberg 115.550 Polar Extreme",
    beschrijving: "Extreme isolatie voor de koudste werkomstandigheden.",
    kenmerken: ["EN 511", "Tot -40°C", "Thinsulate"],
    bundel: "Per 6 paar",
    sku: "GRB-115550",
  },
  {
    naam: "Granberg 115.560 Thermal Flex",
    beschrijving: "Lichtgewicht thermische handschoen met maximale bewegingsvrijheid.",
    kenmerken: ["EN 511", "Flexibel", "Lichtgewicht"],
    bundel: "Per 12 paar",
    sku: "GRB-115560",
  },
  {
    naam: "Granberg 115.570 Cold Worker",
    beschrijving: "Stevige winterhandschoen voor koelhuizen en buitenwerk.",
    kenmerken: ["EN 511", "Verstevigd", "Waterdicht"],
    bundel: "Per 6 paar",
    sku: "GRB-115570",
  },
];

export default function WinterWerkhandschoenen() {
  return (
    <CollectionLayout
      title="Winter werkhandschoenen"
      seoTitle="Winter Werkhandschoenen Kopen | EN 511 Gecertificeerd | Granberg SafeGrip"
      metaDescription="Professionele winterwerkhandschoenen van Granberg. EN 511 gecertificeerd voor extreme koude tot -40°C. Waterdicht en geïsoleerd. B2B levering binnen 24u in NL & BE."
      intro="Werk warm en veilig in de koudste omstandigheden met onze professionele winterwerkhandschoenen. EN 511 gecertificeerd en leverbaar per bundel voor zakelijke afnemers."
      canonicalUrl="/collecties/winter-werkhandschoenen"
      keywords="winter werkhandschoenen, EN 511 handschoenen, koude handschoenen, thermo werkhandschoenen, waterdichte werkhandschoenen, Thinsulate handschoenen, koelhuis handschoenen, Granberg winter, B2B winterhandschoenen"
      producten={producten}
    >
      {producten.map((product) => (
        <ProductCard
          key={product.naam}
          naam={product.naam}
          beschrijving={product.beschrijving}
          kenmerken={product.kenmerken}
          bundel={product.bundel}
          afbeelding={gloveWinter}
        />
      ))}
    </CollectionLayout>
  );
}
