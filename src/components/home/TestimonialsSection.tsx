import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "SafeGrip levert al 8 jaar aan onze offshore platforms. De Granberg handschoenen zijn bestand tegen de zware omstandigheden op de Noordzee en de 24-uurs leverservice is cruciaal voor onze operaties.",
    auteur: "Jeroen van Dijk",
    functie: "HSE Manager",
    bedrijf: "Heerema Marine Contractors",
    industrie: "Offshore",
    logo: "HMC",
  },
  {
    quote: "Als inkoopverantwoordelijke voor 12 productielocaties waardeer ik de staffelprijzen en het brede assortiment. De snijbestendige handschoenen hebben ons letselcijfer met 40% verlaagd.",
    auteur: "Sandra Vermeer",
    functie: "Procurement Director",
    bedrijf: "VDL Groep",
    industrie: "Productie",
    logo: "VDL",
  },
  {
    quote: "Onze monteurs werken in extreme omstandigheden bij raffinaderijen. De chemisch bestendige Granberg handschoenen bieden de bescherming die we nodig hebben, gecombineerd met uitstekende grip.",
    auteur: "Mark Hendriks",
    functie: "Operations Manager",
    bedrijf: "Stork Technical Services",
    industrie: "Petrochemie",
    logo: "STS",
  },
  {
    quote: "Voor onze scheepswerf in Rotterdam is betrouwbare handbescherming essentieel. SafeGrip begrijpt de maritieme sector en levert altijd de juiste handschoen voor de klus.",
    auteur: "Willem de Boer",
    functie: "Veiligheidscoördinator",
    bedrijf: "Damen Shipyards",
    industrie: "Scheepsbouw",
    logo: "DSY",
  },
  {
    quote: "De voedselindustrie stelt hoge eisen aan hygiëne. De HACCP-conforme handschoenen van SafeGrip voldoen aan al onze certificeringseisen en zijn tegelijk snijbestendig.",
    auteur: "Lisa van Houten",
    functie: "Quality Assurance Manager",
    bedrijf: "Vion Food Group",
    industrie: "Voedsel",
    logo: "VFG",
  },
  {
    quote: "Bij het werken met kettingzagen is er geen ruimte voor compromissen. De EN 381 gecertificeerde Granberg handschoenen geven onze bosbouwteams de bescherming die ze verdienen.",
    auteur: "Pieter Jansen",
    functie: "Teamleider Groenvoorziening",
    bedrijf: "Staatsbosbeheer",
    industrie: "Bosbouw",
    logo: "SBB",
  },
];

export function TestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase">
            Klantervaring
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Vertrouwd door de{" "}
            <span className="text-gradient-blue">Nederlandse Industrie</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van offshore platforms tot productiehallen — toonaangevende bedrijven kiezen SafeGrip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 transition-all duration-500 
                ${hoveredIndex === index 
                  ? 'glass-card border-safegrip-blue/30 scale-[1.02]' 
                  : 'bg-card/50 border border-border/50 hover:border-border'
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 p-2 rounded-full bg-safegrip-blue/10 border border-safegrip-blue/20">
                <Quote className="h-4 w-4 text-safegrip-blue" />
              </div>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-safety-yellow text-safety-yellow" 
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground/90 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  {/* Company logo placeholder */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-safegrip-blue/10 border border-safegrip-blue/20">
                    <span className="text-xs font-bold text-safegrip-blue">
                      {testimonial.logo}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.auteur}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.functie}
                    </p>
                    <p className="text-xs text-safegrip-blue font-medium">
                      {testimonial.bedrijf}
                    </p>
                  </div>

                  {/* Industry tag */}
                  <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {testimonial.industrie}
                  </span>
                </div>
              </div>

              {/* Hover glow effect */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-safegrip-blue/5 transition-opacity duration-500 pointer-events-none
                  ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Zakelijke Klanten" },
            { value: "98%", label: "Klanttevredenheid" },
            { value: "< 24u", label: "Gemiddelde Levertijd" },
            { value: "NL & BE", label: "Volledige Dekking" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl glass hover-lift transition-all duration-300"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-safegrip-blue">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
