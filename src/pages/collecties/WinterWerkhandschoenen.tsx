import { CollectionLayout } from "@/components/collections/CollectionLayout";
import { ProductCard } from "@/components/collections/ProductCard";

const producten = [
  {
    naam: "Granberg 115.520 Arctic Pro",
    beschrijving: "Geïsoleerde winterhandschoen voor extreme koude. Warm tot -30°C.",
    kenmerken: ["EN 511", "Tot -30°C", "Waterdicht"],
    bundel: "Per 6 paar",
  },
  {
    naam: "Granberg 115.530 Cold Grip",
    beschrijving: "Thermische handschoen met uitstekende grip in koude omstandigheden.",
    kenmerken: ["EN 511", "Grip coating", "Ademend"],
    bundel: "Per 6 paar",
  },
  {
    naam: "Granberg 115.540 Winter Work",
    beschrijving: "Veelzijdige winterwerkhandschoen voor algemeen gebruik.",
    kenmerken: ["EN 511", "Flexibel", "Touchscreen"],
    bundel: "Per 12 paar",
  },
  {
    naam: "Granberg 115.550 Polar Extreme",
    beschrijving: "Extreme isolatie voor de koudste werkomstandigheden.",
    kenmerken: ["EN 511", "Tot -40°C", "Thinsulate"],
    bundel: "Per 6 paar",
  },
  {
    naam: "Granberg 115.560 Thermal Flex",
    beschrijving: "Lichtgewicht thermische handschoen met maximale bewegingsvrijheid.",
    kenmerken: ["EN 511", "Flexibel", "Lichtgewicht"],
    bundel: "Per 12 paar",
  },
  {
    naam: "Granberg 115.570 Cold Worker",
    beschrijving: "Stevige winterhandschoen voor koelhuizen en buitenwerk.",
    kenmerken: ["EN 511", "Verstevigd", "Waterdicht"],
    bundel: "Per 6 paar",
  },
];

export default function WinterWerkhandschoenen() {
  return (
    <CollectionLayout
      title="Winter werkhandschoenen"
      seoTitle="Winter werkhandschoenen kopen | Granberg | SafeGrip"
      metaDescription="Professionele winterwerkhandschoenen van Granberg. EN 511 gecertificeerd voor extreme koude. B2B levering per bundel in NL & BE."
      intro="Werk warm en veilig in de koudste omstandigheden met onze professionele winterwerkhandschoenen. EN 511 gecertificeerd en leverbaar per bundel voor zakelijke afnemers."
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
