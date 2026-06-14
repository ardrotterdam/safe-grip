import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Shield, Mail, Phone } from "lucide-react";
import { SITE_URL } from "@/config/site";
import { CONTACT_INFO } from "@/config/contact";

const Privacy = () => {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacyverklaring - SafeGrip",
    "description": "Privacyverklaring van SafeGrip B.V. conform de AVG/GDPR wetgeving.",
    "url": `${SITE_URL}/privacy`,
    "inLanguage": "nl-NL"
  };

  return (
    <Layout>
      <Helmet>
        <title>Privacyverklaring | SafeGrip - AVG Conforme Privacy Policy</title>
        <meta name="description" content="Lees onze privacyverklaring. SafeGrip respecteert uw privacy en verwerkt persoonsgegevens conform de AVG/GDPR wetgeving." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/privacy`} />
        <meta property="og:url" content={`${SITE_URL}/privacy`} />
        <script type="application/ld+json">
          {JSON.stringify(privacySchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Privacyverklaring
            </h1>
            <p className="text-lg text-muted-foreground">
              SafeGrip B.V. respecteert uw privacy en verwerkt persoonsgegevens conform de Algemene Verordening Gegevensbescherming (AVG).
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Laatst bijgewerkt: januari 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-invert">
            
            {/* Section 1 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Wie zijn wij?
              </h2>
              <p className="text-muted-foreground mb-4">
                SafeGrip B.V. is een Nederlandse groothandel gespecialiseerd in professionele werkhandschoenen voor de B2B-markt. Wij zijn de officiële Granberg distributeur voor de Benelux.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Bedrijfsnaam:</strong> SafeGrip B.V.</li>
                <li><strong className="text-foreground">Vestigingsland:</strong> Nederland</li>
                <li><strong className="text-foreground">E-mail:</strong> {CONTACT_INFO.email}</li>
                <li><strong className="text-foreground">Telefoon:</strong> {CONTACT_INFO.phoneDisplay}</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Welke persoonsgegevens verzamelen wij?
              </h2>
              <p className="text-muted-foreground mb-4">
                Wij verzamelen en verwerken de volgende categorieën persoonsgegevens:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Contactgegevens:</strong> naam, e-mailadres, telefoonnummer, bedrijfsnaam</li>
                <li><strong className="text-foreground">Communicatiegegevens:</strong> inhoud van berichten via contactformulieren</li>
                <li><strong className="text-foreground">Technische gegevens:</strong> IP-adres, browsertype, apparaatinformatie</li>
                <li><strong className="text-foreground">Gebruiksgegevens:</strong> websitebezoekgedrag via cookies (met uw toestemming)</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Waarom verwerken wij uw gegevens?
              </h2>
              <p className="text-muted-foreground mb-4">
                Wij verwerken uw persoonsgegevens voor de volgende doeleinden:
              </p>
              <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                <li><strong className="text-foreground">Communicatie:</strong> Om uw vragen en offerteaanvragen te beantwoorden</li>
                <li><strong className="text-foreground">Dienstverlening:</strong> Om onze producten en diensten aan u te kunnen leveren</li>
                <li><strong className="text-foreground">Nieuwsbrief:</strong> Om u op de hoogte te houden van aanbiedingen en nieuws (alleen met uw toestemming)</li>
                <li><strong className="text-foreground">Website-optimalisatie:</strong> Om onze website te verbeteren en uw ervaring te personaliseren</li>
                <li><strong className="text-foreground">Wettelijke verplichtingen:</strong> Om te voldoen aan wettelijke verplichtingen</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Rechtsgrond voor verwerking
              </h2>
              <p className="text-muted-foreground mb-4">
                Wij verwerken uw persoonsgegevens op basis van de volgende rechtsgronden conform artikel 6 AVG:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Toestemming:</strong> Voor het verzenden van nieuwsbrieven en marketingcommunicatie</li>
                <li><strong className="text-foreground">Uitvoering van een overeenkomst:</strong> Voor het afhandelen van bestellingen en offertes</li>
                <li><strong className="text-foreground">Gerechtvaardigd belang:</strong> Voor website-analyse en fraudepreventie</li>
                <li><strong className="text-foreground">Wettelijke verplichting:</strong> Voor belasting- en boekhoudkundige doeleinden</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Cookies
              </h2>
              <p className="text-muted-foreground mb-4">
                Onze website maakt gebruik van cookies. Wij onderscheiden de volgende categorieën:
              </p>
              <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                <li><strong className="text-foreground">Noodzakelijke cookies:</strong> Essentieel voor het functioneren van de website</li>
                <li><strong className="text-foreground">Analytische cookies:</strong> Voor het analyseren van websitegebruik (alleen met toestemming)</li>
                <li><strong className="text-foreground">Marketing cookies:</strong> Voor gepersonaliseerde advertenties (alleen met toestemming)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Bij uw eerste bezoek vragen wij uw toestemming voor het plaatsen van niet-noodzakelijke cookies. U kunt uw cookievoorkeuren te allen tijde wijzigen via uw browserinstellingen.
              </p>
            </div>

            {/* Section 6 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Bewaartermijnen
              </h2>
              <p className="text-muted-foreground mb-4">
                Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Contactgegevens:</strong> Tot 2 jaar na laatste contact</li>
                <li><strong className="text-foreground">Klantgegevens:</strong> Tot 7 jaar na beëindiging relatie (wettelijke bewaarplicht)</li>
                <li><strong className="text-foreground">Nieuwsbriefabonnees:</strong> Tot uitschrijving plus 30 dagen</li>
                <li><strong className="text-foreground">Website-analytics:</strong> Maximaal 26 maanden</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Uw rechten
              </h2>
              <p className="text-muted-foreground mb-4">
                Op grond van de AVG heeft u de volgende rechten:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Recht op inzage:</strong> U kunt opvragen welke gegevens wij van u verwerken</li>
                <li><strong className="text-foreground">Recht op rectificatie:</strong> U kunt onjuiste gegevens laten corrigeren</li>
                <li><strong className="text-foreground">Recht op verwijdering:</strong> U kunt verzoeken uw gegevens te wissen</li>
                <li><strong className="text-foreground">Recht op beperking:</strong> U kunt de verwerking laten beperken</li>
                <li><strong className="text-foreground">Recht op dataportabiliteit:</strong> U kunt uw gegevens in een standaardformaat ontvangen</li>
                <li><strong className="text-foreground">Recht van bezwaar:</strong> U kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang</li>
                <li><strong className="text-foreground">Recht om toestemming in te trekken:</strong> Zonder opgaaf van redenen</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Om uw rechten uit te oefenen, neem contact op via {CONTACT_INFO.email}. Wij reageren binnen 30 dagen op uw verzoek.
              </p>
            </div>

            {/* Section 8 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                8. Beveiliging
              </h2>
              <p className="text-muted-foreground">
                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, ongeautoriseerde toegang, wijziging of openbaarmaking. Onze website maakt gebruik van SSL-encryptie en wij werken uitsluitend met betrouwbare verwerkers die voldoen aan de AVG.
              </p>
            </div>

            {/* Section 9 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                9. Delen met derden
              </h2>
              <p className="text-muted-foreground mb-4">
                Wij delen uw persoonsgegevens alleen met derden wanneer dit noodzakelijk is voor onze dienstverlening of wettelijk verplicht is. Wij maken gebruik van:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Hostingproviders (servers in de EU)</li>
                <li>E-mailserviceproviders</li>
                <li>Analyticsdiensten (met verwerkersovereenkomst)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Wij verkopen uw gegevens nooit aan derden.
              </p>
            </div>

            {/* Section 10 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                10. Klachten
              </h2>
              <p className="text-muted-foreground">
                Indien u een klacht heeft over de verwerking van uw persoonsgegevens, neem dan eerst contact met ons op. Komen wij er samen niet uit, dan heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (www.autoriteitpersoonsgegevens.nl).
              </p>
            </div>

            {/* Contact Section */}
            <div className="glass-card rounded-lg p-6 md:p-8 border-primary/20">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Contact opnemen
              </h2>
              <p className="text-muted-foreground mb-4">
                Heeft u vragen over deze privacyverklaring of over de verwerking van uw persoonsgegevens? Neem gerust contact met ons op:
              </p>
              <div className="flex flex-col gap-3">
                <a href={`mailto:${CONTACT_INFO.email}`} className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Mail className="h-4 w-4" />
                  {CONTACT_INFO.email}
                </a>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Phone className="h-4 w-4" />
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
