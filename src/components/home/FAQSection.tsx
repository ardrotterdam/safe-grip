import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    vraag: "Wat maakt Granberg handschoenen anders dan andere merken?",
    antwoord: "Granberg is een Noorse fabrikant met meer dan 60 jaar ervaring in professionele handbescherming. Alle handschoenen worden ontwikkeld voor de zware Scandinavische omstandigheden en voldoen aan de hoogste Europese certificeringsnormen. De combinatie van innovatieve materialen, ergonomisch ontwerp en uitgebreide tests maakt Granberg tot de keuze van professionals in offshore, bouw en industrie.",
  },
  {
    vraag: "Welke certificeringen hebben de SafeGrip handschoenen?",
    antwoord: "Onze handschoenen zijn gecertificeerd volgens diverse Europese normen: EN 388 voor mechanische risico's (snij-, scheur- en slijtvastheid), EN 407 voor thermische risico's, EN 511 voor koudebestendigheid, EN 374 voor chemische bescherming, en EN 381 voor kettingzaagbestendigheid. Elk product vermeldt de specifieke certificeringen op de productpagina.",
  },
  {
    vraag: "Wat is de minimale bestelgrootte?",
    antwoord: "SafeGrip levert uitsluitend aan zakelijke klanten (B2B). Alle producten worden geleverd per bundel, waarbij de bundelgrootte per product varieert (meestal 6, 10 of 12 paar per bundel). Er is geen minimum aantal bundels vereist voor een eerste bestelling.",
  },
  {
    vraag: "Hoe snel worden bestellingen geleverd?",
    antwoord: "Bestellingen geplaatst vóór 14:00 uur worden dezelfde dag verzonden. Standaard levering in Nederland is binnen 24 uur, in België binnen 24-48 uur. Voor spoedleveringen bieden wij expresopties aan. Neem contact op voor maatwerk logistieke oplossingen bij grote volumes.",
  },
  {
    vraag: "Bieden jullie staffelkortingen aan?",
    antwoord: "Ja, wij hanteren aantrekkelijke staffelprijzen voor grotere bestellingen. De kortingspercentages zijn afhankelijk van het ordervolume en kunnen oplopen tot 25% bij jaarcontracten. Neem contact op met ons verkoopteam voor een offerte op maat voor uw organisatie.",
  },
  {
    vraag: "Kan ik monsters aanvragen voordat ik een grote bestelling plaats?",
    antwoord: "Absoluut. Wij bieden de mogelijkheid om monsters aan te vragen zodat u de kwaliteit en pasvorm kunt beoordelen voordat u een grotere bestelling plaatst. Neem contact op via het contactformulier voor een monsteraanvraag.",
  },
  {
    vraag: "Hoe kies ik de juiste handschoen voor mijn toepassing?",
    antwoord: "De keuze hangt af van de risico's in uw werkomgeving. Voor snijrisico's adviseren wij onze snijbestendige collectie (EN 388 niveau A-F). Voor chemische omgevingen onze chemisch bestendige lijn. Bij koudewerkzaamheden onze winterhandschoenen. Neem contact op voor persoonlijk advies van onze PBM-specialisten.",
  },
  {
    vraag: "Leveren jullie ook aan particulieren?",
    antwoord: "SafeGrip is een B2B groothandel en levert uitsluitend aan bedrijven met een geldig KvK-nummer. Voor particuliere aankopen verwijzen wij u naar onze retail partners. Neem contact op voor een verwijzing naar een verkooppunt bij u in de buurt.",
  },
  {
    vraag: "Wat is jullie retourbeleid?",
    antwoord: "Ongebruikte producten in originele verpakking kunnen binnen 14 dagen worden geretourneerd. Bij defecten of kwaliteitsproblemen hanteren wij een coulante omruilregeling. Maatwerk bestellingen en producten die in contact zijn geweest met gevaarlijke stoffen kunnen niet worden geretourneerd.",
  },
  {
    vraag: "Bieden jullie ook handschoenen met bedrijfslogo aan?",
    antwoord: "Ja, bij grotere volumes bieden wij de mogelijkheid om handschoenen te voorzien van uw bedrijfslogo. Dit versterkt de corporate identity en verhoogt de naleving van PBM-voorschriften. Minimum afname en levertijden zijn afhankelijk van het product. Vraag een offerte aan voor meer informatie.",
  },
];

// Generate JSON-LD structured data for FAQ
const generateFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.vraag,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.antwoord,
      },
    })),
  };
};

export function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-safegrip-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-safety-yellow/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-wider uppercase">
            <HelpCircle className="h-4 w-4" />
            Veelgestelde Vragen
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Alles over{" "}
            <span className="text-gradient-blue">Granberg & SafeGrip</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze werkhandschoenen, certificeringen en levering.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm px-6 data-[state=open]:border-safegrip-blue/30 data-[state=open]:bg-card/80 transition-all duration-300"
              >
                <AccordionTrigger className="text-left py-5 hover:no-underline">
                  <span className="text-foreground font-semibold pr-4 group-data-[state=open]:text-safegrip-blue transition-colors">
                    {item.vraag}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {item.antwoord}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA below FAQ */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Staat uw vraag er niet bij?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-safegrip-blue hover:text-safegrip-blue/80 font-semibold transition-colors"
          >
            Neem contact op met ons team
            <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
}
