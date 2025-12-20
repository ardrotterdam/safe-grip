import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "SafeGrip levert consistent hoogwaardige werkhandschoenen. De staffelprijzen en snelle levering maken hen tot onze vaste leverancier.",
    auteur: "Johan van den Berg",
    functie: "Inkoopmanager",
    bedrijf: "Offshore Solutions BV",
  },
  {
    quote: "Uitstekende kwaliteit Granberg handschoenen en een betrouwbare partner voor onze productielocaties in de Benelux.",
    auteur: "Marie Janssen",
    functie: "HSE Coördinator",
    bedrijf: "Industrial Works NV",
  },
  {
    quote: "Professioneel advies over de juiste handschoen voor elke toepassing. De bundelleveringen passen perfect in ons voorraadbeheer.",
    auteur: "Peter de Groot",
    functie: "Operations Director",
    bedrijf: "Construction Group",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bedrijven in de Benelux vertrouwen op SafeGrip voor hun PBM-behoeften.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.auteur}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.functie}, {testimonial.bedrijf}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
