import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { CONTACT_INFO, SERVICE_REGIONS } from "@/config/contact";
import { SITE_URL } from "@/config/site";

const onderwerpen = [
  "Vraag over bestelling",
  "Dealer worden",
  "Vraag over maatvoering / normering",
  "Productadvies",
  "Levering / betaling",
  "Overig",
];

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    bedrijfsnaam: "",
    onderwerp: "",
    bericht: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        naam: formData.naam,
        email: formData.email,
        telefoon: formData.telefoon || null,
        bedrijfsnaam: formData.bedrijfsnaam || null,
        onderwerp: formData.onderwerp,
        bericht: formData.bericht,
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Bericht verzonden!",
        description: "We nemen zo snel mogelijk contact met u op.",
      });
    } catch (error) {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <Helmet>
          <title>Bedankt | SafeGrip Benelux</title>
        </Helmet>
        <div className="container py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <Mail className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              Bedankt voor uw bericht!
            </h1>
            <p className="text-lg text-muted-foreground">
              We hebben uw aanvraag ontvangen en nemen binnen 24 uur contact met u op.
            </p>
            <Button asChild>
              <a href="/">Terug naar home</a>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Contact Page Schema
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": `Contact ${CONTACT_INFO.company.name}`,
    "description": "Neem contact op met SafeGrip voor productadvies, offertes of zakelijke samenwerkingen.",
    "url": `${SITE_URL}/contact`,
    "mainEntity": {
      "@type": "Organization",
      "name": CONTACT_INFO.company.name,
      "telephone": CONTACT_INFO.phone.replace(/\s/g, ''),
      "email": CONTACT_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT_INFO.address.street,
        "postalCode": CONTACT_INFO.address.postalCode,
        "addressLocality": CONTACT_INFO.address.city,
        "addressCountry": "NL"
      }
    }
  };

  return (
    <Layout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact SafeGrip | Werkhandschoenen Advies & Offertes | Benelux</title>
        <meta 
          name="description" 
          content="Neem contact op met SafeGrip voor productadvies, offertes of zakelijke samenwerkingen. B2B groothandel in Granberg werkhandschoenen. Reactie binnen 24 uur."
        />
        <meta name="keywords" content="contact SafeGrip, werkhandschoenen advies, offerte aanvragen, B2B handschoenen, Granberg dealer worden, PBM leverancier contact" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/contact`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact SafeGrip | Werkhandschoenen Advies & Offertes" />
        <meta property="og:description" content="Neem contact op voor productadvies of zakelijke samenwerkingen. Reactie binnen 24 uur." />
        <meta property="og:locale" content="nl_NL" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
      </Helmet>

      <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact
            </h1>
            <p className="text-lg text-muted-foreground">
              Stel uw vragen aan ons team of word dealer. 
              We reageren binnen 24 uur op werkdagen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="naam">Naam *</Label>
                    <Input
                      id="naam"
                      required
                      value={formData.naam}
                      onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="uw@email.nl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telefoon">Telefoonnummer</Label>
                    <Input
                      id="telefoon"
                      type="tel"
                      value={formData.telefoon}
                      onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
                      placeholder="+31 6 12345678"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bedrijfsnaam">Bedrijfsnaam</Label>
                    <Input
                      id="bedrijfsnaam"
                      value={formData.bedrijfsnaam}
                      onChange={(e) => setFormData({ ...formData, bedrijfsnaam: e.target.value })}
                      placeholder="Naam van uw bedrijf"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="onderwerp">Onderwerp *</Label>
                  <Select
                    required
                    value={formData.onderwerp}
                    onValueChange={(value) => setFormData({ ...formData, onderwerp: value })}
                  >
                    <SelectTrigger className="bg-input">
                      <SelectValue placeholder="Selecteer een onderwerp" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {onderwerpen.map((onderwerp) => (
                        <SelectItem key={onderwerp} value={onderwerp}>
                          {onderwerp}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bericht">Bericht *</Label>
                  <Textarea
                    id="bericht"
                    required
                    rows={6}
                    value={formData.bericht}
                    onChange={(e) => setFormData({ ...formData, bericht: e.target.value })}
                    placeholder="Beschrijf uw vraag of aanvraag..."
                  />
                </div>

                <Button type="submit" size="lg" disabled={loading} className="glow-yellow">
                  {loading ? "Verzenden..." : "Verstuur Bericht"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-6 rounded-lg bg-card border border-border space-y-6">
                <h2 className="text-lg font-semibold text-foreground">Contactgegevens</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">E-mail</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-muted-foreground hover:text-primary">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Telefoon</p>
                      <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-sm text-muted-foreground hover:text-primary">
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Adres</p>
                      <p className="text-sm text-muted-foreground">
                        {CONTACT_INFO.address.street}<br />
                        {CONTACT_INFO.address.postalCode} {CONTACT_INFO.address.city}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Reactietijd</p>
                      <p className="text-sm text-muted-foreground">{CONTACT_INFO.support.responseTime} op werkdagen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.7!2d4.4717!3d51.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4335d4e44a2d3%3A0x1!2sWestplein%2012%2C%203016%20BM%20Rotterdam!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SafeGrip kantoor locatie in Rotterdam"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="p-6 rounded-lg bg-primary/10 border border-primary/20 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Direct bestellen?</h3>
                <p className="text-sm text-muted-foreground">
                  Bekijk ons assortiment met vaste prijzen per bundel in de shop.
                </p>
                <Button asChild variant="shop" size="sm">
                  <Link to="/shop">Naar de Shop</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
