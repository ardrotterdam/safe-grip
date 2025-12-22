export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Hoe kies je de juiste snijbestendige handschoen?",
    excerpt: "Een uitgebreide gids over snijbestendigheidsniveaus, materialen en toepassingen. Ontdek welke handschoen het beste past bij jouw werkzaamheden.",
    content: `
## Inleiding

Het kiezen van de juiste snijbestendige handschoen is cruciaal voor de veiligheid van uw medewerkers. Met de juiste bescherming vermindert u het risico op snijwonden aanzienlijk, terwijl u tegelijkertijd het comfort en de productiviteit behoudt.

## Snijbestendigheidsniveaus volgens EN 388

De Europese norm EN 388 classificeert snijbestendigheid in niveaus van A tot F, waarbij F de hoogste bescherming biedt:

- **Niveau A**: Basisbestendigheid (2-5 Newton)
- **Niveau B**: Lichte bescherming (5-10 Newton)
- **Niveau C**: Gemiddelde bescherming (10-15 Newton)
- **Niveau D**: Hoge bescherming (15-22 Newton)
- **Niveau E**: Zeer hoge bescherming (22-30 Newton)
- **Niveau F**: Maximale bescherming (>30 Newton)

## Materialen en hun eigenschappen

### HPPE (High Performance Polyethylene)
HPPE vezels bieden uitstekende snijbestendigheid met behoud van flexibiliteit. Dit materiaal is lichtgewicht en comfortabel voor langdurig gebruik.

### Aramide (Kevlar®)
Bekend om zijn sterkte en hittebestendigheid. Ideaal voor omgevingen waar zowel snij- als hittebestendigheid vereist is.

### Staalvezel
Biedt maximale snijbestendigheid maar kan minder comfortabel zijn. Vaak gebruikt in combinatie met andere materialen.

## Toepassingen per industrie

### Glasindustrie
Kies voor niveau D of hoger met een goede grip coating voor het hanteren van glasplaten.

### Metaalbewerking
Niveau E of F is aanbevolen, vooral bij het werken met scherpe metalen randen en plaatmateriaal.

### Voedselindustrie
Hygiënische handschoenen met snijbestendigheid niveau C of hoger, geschikt voor contact met voedsel.

## Tips voor de juiste keuze

1. **Analyseer de risico's** - Identificeer de specifieke gevaren in uw werkomgeving
2. **Test verschillende modellen** - Laat medewerkers proefhandschoenen testen
3. **Controleer de pasvorm** - Een goede pasvorm is essentieel voor zowel bescherming als comfort
4. **Overweeg de grip** - Kies de juiste coating voor uw toepassing (nitril, PU, latex)
5. **Let op de levensduur** - Kwaliteitshandschoenen zijn op de lange termijn voordeliger

## Conclusie

De juiste snijbestendige handschoen combineert optimale bescherming met comfort en functionaliteit. Neem de tijd om de risico's te analyseren en kies een handschoen die past bij uw specifieke werkzaamheden.

Heeft u vragen over welke handschoen het beste bij uw situatie past? Neem gerust contact met ons op voor persoonlijk advies.
    `,
    date: "15 december 2024",
    readTime: "5 min",
    slug: "juiste-snijbestendige-handschoen-kiezen",
    category: "Gidsen",
    author: "SafeGrip Team",
  },
  {
    id: 2,
    title: "EN 388 uitgelegd: wat betekenen de cijfers?",
    excerpt: "De Europese norm EN 388 kan verwarrend zijn. We leggen uit wat elk cijfer betekent en hoe je deze informatie kunt gebruiken bij het selecteren van werkhandschoenen.",
    content: `
## Wat is EN 388?

EN 388 is de Europese norm voor beschermende handschoenen tegen mechanische risico's. Deze norm definieert testmethoden en prestatieniveaus voor slijtvastheid, snijbestendigheid, scheurweerstand en perforatiebestendigheid.

## Het pictogram uitgelegd

Op elke EN 388 gecertificeerde handschoen vindt u een pictogram met een reeks cijfers en letters. Dit is hoe u ze leest:

### De zes karakters

De norm toont zes karakters die de volgende eigenschappen weergeven:

1. **Slijtvastheid (0-4)** - Hoe goed de handschoen bestand is tegen schuren
2. **Snijbestendigheid coupe test (0-5)** - Oude testmethode voor snijbestendigheid
3. **Scheurweerstand (0-4)** - Weerstand tegen scheuren
4. **Perforatiebestendigheid (0-4)** - Bescherming tegen doorprikken
5. **Snijbestendigheid TDM (A-F)** - Nieuwe, nauwkeurigere snijtest
6. **Impactbestendigheid (P)** - Optionele test voor stootbestendigheid

## Slijtvastheid in detail

| Niveau | Aantal cycli |
|--------|-------------|
| 1 | 100 cycli |
| 2 | 500 cycli |
| 3 | 2000 cycli |
| 4 | 8000 cycli |

Hoe hoger het niveau, hoe langer de handschoen meegaat bij schurend werk.

## De nieuwe snijtest (TDM)

De TDM (ISO 13997) test is nauwkeuriger dan de oude coupe test en meet de kracht in Newton die nodig is om door het materiaal te snijden:

| Niveau | Newton |
|--------|--------|
| A | 2-5 N |
| B | 5-10 N |
| C | 10-15 N |
| D | 15-22 N |
| E | 22-30 N |
| F | >30 N |

## Praktische voorbeelden

### Voorbeeld 1: 4X43C
- Slijtvastheid: 4 (uitstekend)
- Snijbestendigheid (oud): X (niet getest)
- Scheurweerstand: 4 (uitstekend)
- Perforatie: 3 (goed)
- Snijbestendigheid (nieuw): C (gemiddeld)

### Voorbeeld 2: 4544FP
- Slijtvastheid: 4 (uitstekend)
- Snijbestendigheid (oud): 5 (maximaal)
- Scheurweerstand: 4 (uitstekend)
- Perforatie: 4 (uitstekend)
- Snijbestendigheid (nieuw): F (maximaal)
- Impactbestendigheid: P (getest en goedgekeurd)

## Tips voor het vergelijken

1. Let vooral op de **TDM snijtest (A-F)** - deze is nauwkeuriger
2. Kies **niveau 4 slijtvastheid** voor intensief gebruik
3. **Impactbestendigheid (P)** is alleen relevant als stootrisico's aanwezig zijn
4. Een **X** betekent dat de test niet is uitgevoerd

## Conclusie

EN 388 biedt een gestandaardiseerde manier om handschoenen te vergelijken. Door de cijfers en letters te begrijpen, kunt u een weloverwogen keuze maken die past bij uw specifieke werkzaamheden.
    `,
    date: "8 december 2024",
    readTime: "4 min",
    slug: "en-388-uitgelegd",
    category: "Normen",
    author: "SafeGrip Team",
  },
  {
    id: 3,
    title: "5 tips voor handbescherming in de offshore industrie",
    excerpt: "De offshore sector stelt hoge eisen aan handbescherming. Van impact- tot snijbestendigheid: deze tips helpen je de juiste keuze te maken.",
    content: `
## De uitdagingen van offshore werk

De offshore industrie is een van de meest veeleisende omgevingen voor handbescherming. Medewerkers worden blootgesteld aan extreme weersomstandigheden, zware apparatuur en gevaarlijke materialen. De juiste handschoenkeuze is letterlijk van levensbelang.

## Tip 1: Kies voor impactbestendigheid

Offshore werk brengt constant risico's op stoot- en kneuzingsletsels met zich mee. Kies handschoenen met:

- **TPR (Thermoplastic Rubber) beschermers** op de rug en vingers
- **EN 388 P-markering** voor geteste impactbestendigheid
- **Volledige vingerbescherming** - ook de duim!

Onze aanbeveling: Granberg 117.660 Impact Pro met 360° impactbescherming.

## Tip 2: Combineer snijbestendigheid

In de offshore industrie werkt u regelmatig met kabels, kettingen en scherpe metalen onderdelen. Zorg voor:

- **Minimaal snijniveau D** volgens EN 388
- **HPPE of aramide vezels** voor duurzame bescherming
- **Verstevigde naden** op kritieke punten

## Tip 3: Denk aan grip in alle omstandigheden

Offshore platforms zijn vaak nat en olieachtig. Goede grip voorkomt ongelukken:

- **Sandy nitril coating** voor optimale grip op natte oppervlakken
- **Dubbele coating** op palm en vingertoppen
- **Oliebestendige materialen** die niet gladder worden bij contact met olie

## Tip 4: Bescherm tegen kou en water

De offshore omgeving kan extreem koud en nat zijn:

- **Thermische voering** voor isolatie tot -30°C
- **Waterdichte membranen** die toch ademend zijn
- **Lange manchetten** om water buiten te houden
- **Sneldrogende materialen** voor wanneer handschoenen toch nat worden

## Tip 5: Prioriteer zichtbaarheid

Op een druk platform is zichtbaarheid cruciaal:

- **Hi-vis kleuren** (oranje, geel, lime groen)
- **Reflecterende elementen** voor werk bij weinig licht
- **Contrasterende accenten** voor betere herkenning

## Certificeringen om op te letten

Voor offshore werk zijn de volgende certificeringen relevant:

| Norm | Beschrijving |
|------|-------------|
| EN 388 | Mechanische bescherming |
| EN 511 | Koudebescherming |
| EN 407 | Hittebescherming |
| EN ISO 374 | Chemische bescherming |

## Onderhoud en vervanging

Offshore handschoenen worden zwaar belast. Let op:

1. **Inspecteer dagelijks** op scheuren en slijtage
2. **Vervang direct** bij beschadiging aan beschermende elementen
3. **Was regelmatig** volgens de instructies van de fabrikant
4. **Bewaar droog** om schimmel en geuren te voorkomen

## Conclusie

De offshore industrie vereist handschoenen die bestand zijn tegen extreme omstandigheden én maximale bescherming bieden. Investeer in kwaliteit - het gaat om de veiligheid van uw medewerkers.

Wilt u advies op maat voor uw offshore operatie? Neem contact met ons op voor een vrijblijvend gesprek.
    `,
    date: "1 december 2024",
    readTime: "6 min",
    slug: "handbescherming-offshore-industrie",
    category: "Tips",
    author: "SafeGrip Team",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
