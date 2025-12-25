import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { FileText, Mail, Phone } from "lucide-react";
import { SITE_URL } from "@/config/site";

const AlgemeneVoorwaarden = () => {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Algemene Voorwaarden - SafeGrip",
    "description": "Algemene verkoop- en leveringsvoorwaarden van SafeGrip B.V. voor B2B klanten.",
    "url": `${SITE_URL}/algemene-voorwaarden`,
    "inLanguage": "nl-NL"
  };

  return (
    <Layout>
      <Helmet>
        <title>Algemene Voorwaarden | SafeGrip - B2B Verkoop & Levering</title>
        <meta name="description" content="Lees onze algemene verkoop- en leveringsvoorwaarden voor B2B klanten. SafeGrip is uw betrouwbare partner voor professionele werkhandschoenen." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/algemene-voorwaarden`} />
        <meta property="og:url" content={`${SITE_URL}/algemene-voorwaarden`} />
        <script type="application/ld+json">
          {JSON.stringify(termsSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Algemene Voorwaarden
            </h1>
            <p className="text-lg text-muted-foreground">
              Verkoop- en leveringsvoorwaarden van SafeGrip B.V. voor zakelijke klanten in de Benelux.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Versie: januari 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* Article 1 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 1 - Definities
              </h2>
              <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                <li><strong className="text-foreground">SafeGrip:</strong> SafeGrip B.V., gevestigd in Nederland, ingeschreven bij de Kamer van Koophandel.</li>
                <li><strong className="text-foreground">Afnemer:</strong> Iedere rechtspersoon of natuurlijk persoon handelend in de uitoefening van beroep of bedrijf die met SafeGrip een overeenkomst aangaat.</li>
                <li><strong className="text-foreground">Producten:</strong> Alle door SafeGrip aangeboden werkhandschoenen en aanverwante persoonlijke beschermingsmiddelen.</li>
                <li><strong className="text-foreground">Overeenkomst:</strong> Elke afspraak tussen SafeGrip en Afnemer tot levering van Producten.</li>
                <li><strong className="text-foreground">Schriftelijk:</strong> Per brief, e-mail of enig ander elektronisch communicatiemiddel.</li>
              </ul>
            </div>

            {/* Article 2 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 2 - Toepasselijkheid
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen SafeGrip en Afnemer.</li>
                <li>Afwijkingen van deze voorwaarden zijn slechts geldig indien uitdrukkelijk schriftelijk overeengekomen.</li>
                <li>De toepasselijkheid van eventuele inkoop- of andere voorwaarden van Afnemer wordt uitdrukkelijk van de hand gewezen.</li>
                <li>Indien een of meerdere bepalingen nietig zijn, blijven de overige bepalingen onverminderd van kracht.</li>
              </ul>
            </div>

            {/* Article 3 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 3 - Aanbiedingen en offertes
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>Alle aanbiedingen en offertes zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld.</li>
                <li>Offertes hebben een geldigheidsduur van 30 dagen, tenzij anders aangegeven.</li>
                <li>SafeGrip kan niet aan een offerte worden gehouden indien Afnemer redelijkerwijs had kunnen begrijpen dat de offerte een kennelijke vergissing of verschrijving bevat.</li>
                <li>Prijzen in offertes zijn exclusief BTW en eventuele verzend- of verpakkingskosten, tenzij anders vermeld.</li>
              </ul>
            </div>

            {/* Article 4 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 4 - Overeenkomst
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>Een overeenkomst komt tot stand door schriftelijke aanvaarding van een bestelling door SafeGrip of door feitelijke uitvoering van de bestelling.</li>
                <li>SafeGrip behoudt zich het recht voor om bestellingen zonder opgave van redenen te weigeren of aanvullende voorwaarden te stellen.</li>
                <li>Wijzigingen in de overeenkomst zijn slechts geldig indien schriftelijk overeengekomen.</li>
                <li>Bij grootschalige of maatwerk bestellingen kan SafeGrip een aanbetaling verlangen tot maximaal 50% van het orderbedrag.</li>
              </ul>
            </div>

            {/* Article 5 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 5 - Prijzen en betaling
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>Alle prijzen zijn in euro's, exclusief BTW en exclusief verzendkosten, tenzij anders vermeld.</li>
                <li>SafeGrip is gerechtigd prijzen aan te passen bij wijzigingen in kostprijsbepalende factoren zoals grondstoffen, valutakoersen of overheidsmaatregelen.</li>
                <li>Betaling dient te geschieden binnen 30 dagen na factuurdatum, tenzij schriftelijk anders overeengekomen.</li>
                <li>Bij overschrijding van de betalingstermijn is Afnemer van rechtswege in verzuim en is wettelijke handelsrente verschuldigd.</li>
                <li>Alle gerechtelijke en buitengerechtelijke incassokosten komen voor rekening van Afnemer.</li>
                <li>SafeGrip is gerechtigd vooruitbetaling te verlangen bij nieuwe klantrelaties of bestellingen boven €5.000,-.</li>
              </ul>
            </div>

            {/* Article 6 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 6 - Levering
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>Levering geschiedt af magazijn (Ex Works) conform Incoterms 2020, tenzij anders overeengekomen.</li>
                <li>Opgegeven levertijden zijn indicatief en gelden nimmer als fatale termijn.</li>
                <li>Overschrijding van de levertijd geeft Afnemer geen recht op schadevergoeding of ontbinding, tenzij de overschrijding meer dan 60 dagen bedraagt.</li>
                <li>SafeGrip is gerechtigd in gedeelten te leveren en deze afzonderlijk te factureren.</li>
                <li>Het risico van de Producten gaat over op Afnemer op het moment van levering.</li>
                <li>Gratis verzending binnen Nederland en België bij bestellingen vanaf €500,- exclusief BTW.</li>
              </ul>
            </div>

            {/* Article 7 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 7 - Eigendomsvoorbehoud
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>Alle geleverde Producten blijven eigendom van SafeGrip totdat Afnemer volledig aan al zijn betalingsverplichtingen heeft voldaan.</li>
                <li>Afnemer is niet gerechtigd de Producten te verpanden of anderszins te bezwaren zolang het eigendomsvoorbehoud rust.</li>
                <li>Bij beslag, surseance of faillissement dient Afnemer SafeGrip onmiddellijk te informeren.</li>
                <li>SafeGrip is gerechtigd de Producten terug te nemen indien Afnemer in verzuim is met betaling.</li>
              </ul>
            </div>

            {/* Article 8 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 8 - Garantie en klachten
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>SafeGrip garandeert dat de Producten voldoen aan de opgegeven specificaties en van goede kwaliteit zijn.</li>
                <li>De garantietermijn bedraagt 12 maanden na levering, tenzij anders vermeld bij het Product.</li>
                <li>Garantie vervalt bij onjuist gebruik, onoordeelkundige behandeling of wijzigingen aan het Product.</li>
                <li>Klachten over zichtbare gebreken dienen binnen 7 werkdagen na levering schriftelijk te worden gemeld.</li>
                <li>Klachten over niet-zichtbare gebreken dienen binnen 7 werkdagen na ontdekking te worden gemeld.</li>
                <li>Retourzendingen zijn alleen toegestaan na voorafgaande schriftelijke toestemming van SafeGrip.</li>
                <li>Bij gegronde klachten heeft SafeGrip de keuze tussen vervanging, reparatie of creditering.</li>
              </ul>
            </div>

            {/* Article 9 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 9 - Aansprakelijkheid
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>De aansprakelijkheid van SafeGrip is beperkt tot het bedrag dat in het desbetreffende geval door de aansprakelijkheidsverzekering wordt uitgekeerd.</li>
                <li>Indien geen uitkering plaatsvindt, is de aansprakelijkheid beperkt tot maximaal de factuurwaarde van de betreffende bestelling.</li>
                <li>SafeGrip is nimmer aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of bedrijfsschade.</li>
                <li>De in dit artikel opgenomen beperkingen gelden niet indien de schade te wijten is aan opzet of grove schuld van SafeGrip.</li>
                <li>Afnemer vrijwaart SafeGrip tegen alle aanspraken van derden die verband houden met de geleverde Producten.</li>
              </ul>
            </div>

            {/* Article 10 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 10 - Overmacht
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>SafeGrip is niet gehouden tot nakoming van enige verplichting indien dit wordt verhinderd door overmacht.</li>
                <li>Onder overmacht wordt verstaan: oorlog, terrorisme, natuurrampen, pandemieën, stakingen, transportproblemen, overheidsmaatregelen, en tekortkomingen van toeleveranciers.</li>
                <li>Bij overmacht langer dan 90 dagen zijn beide partijen gerechtigd de overeenkomst te ontbinden zonder schadevergoeding.</li>
              </ul>
            </div>

            {/* Article 11 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 11 - Intellectueel eigendom
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>Alle intellectuele eigendomsrechten op door SafeGrip verstrekte documentatie, afbeeldingen en specificaties blijven eigendom van SafeGrip of haar licentiegevers.</li>
                <li>Het is Afnemer niet toegestaan merken, logo's of andere onderscheidingstekens van SafeGrip of Granberg te gebruiken zonder voorafgaande schriftelijke toestemming.</li>
              </ul>
            </div>

            {/* Article 12 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 12 - Toepasselijk recht en geschillen
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>Op alle overeenkomsten tussen SafeGrip en Afnemer is uitsluitend Nederlands recht van toepassing.</li>
                <li>De toepasselijkheid van het Weens Koopverdrag (CISG) wordt uitdrukkelijk uitgesloten.</li>
                <li>Geschillen worden uitsluitend voorgelegd aan de bevoegde rechter in het arrondissement waar SafeGrip is gevestigd.</li>
                <li>Partijen zullen pas een beroep op de rechter doen nadat zij zich hebben ingespannen het geschil in onderling overleg op te lossen.</li>
              </ul>
            </div>

            {/* Article 13 */}
            <div className="glass-card rounded-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Artikel 13 - Slotbepalingen
              </h2>
              <ul className="text-muted-foreground space-y-3 list-decimal list-inside">
                <li>SafeGrip is gerechtigd deze algemene voorwaarden te wijzigen. Gewijzigde voorwaarden gelden voor nieuwe overeenkomsten.</li>
                <li>De Nederlandse tekst van deze voorwaarden is bindend.</li>
                <li>Deze voorwaarden zijn gedeponeerd bij de Kamer van Koophandel.</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="glass-card rounded-lg p-6 md:p-8 border-primary/20">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Vragen over onze voorwaarden?
              </h2>
              <p className="text-muted-foreground mb-4">
                Heeft u vragen over deze algemene voorwaarden of wilt u een overeenkomst bespreken? Neem gerust contact met ons op:
              </p>
              <div className="flex flex-col gap-3">
                <a href="mailto:info@safegrip.nl" className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Mail className="h-4 w-4" />
                  info@safegrip.nl
                </a>
                <a href="tel:+31201234567" className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Phone className="h-4 w-4" />
                  +31 (0)20 123 4567
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlgemeneVoorwaarden;
