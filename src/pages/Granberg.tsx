import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Hammer, 
  Lightbulb, 
  Target, 
  Leaf, 
  Award,
  Anchor,
  Building2,
  Flame,
  TreePine,
  Quote,
  CheckCircle2,
  Droplets,
  ShoppingBag,
  Star
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import heroImage from "@/assets/granberg/hero-norway-fjord.jpg";
import historicHouse from "@/assets/granberg/granberg-house-historic.jpg";
import gloveCutPro from "@/assets/granberg/glove-cut-pro.jpg";
import gloveImpactPro from "@/assets/granberg/glove-impact-pro.jpg";
import gloveArcticPro from "@/assets/granberg/glove-arctic-pro.jpg";
import gloveChemicalPro from "@/assets/granberg/glove-chemical-pro.jpg";

const noorseWaarden = [
  {
    icon: Hammer,
    title: "Onvermoeibaar",
    description: "Geen shortcuts, geen compromissen. Elk product wordt ontwikkeld alsof het voor eigen familie is."
  },
  {
    icon: Lightbulb,
    title: "Innovatief",
    description: "Van Typhoon® snijbestendige vezels tot Kozane® beschermende kleding — altijd voorop in technologie."
  },
  {
    icon: Target,
    title: "Precies",
    description: "In-house testfaciliteit waar elk product wordt getest tot ver voorbij de EU-normen."
  },
  {
    icon: Leaf,
    title: "Duurzaam",
    description: "Respect voor mens en natuur. Committed aan een duurzame handschoenenindustrie."
  }
];

const stats = [
  { value: "60+", label: "Jaar Expertise" },
  { value: "250+", label: "Handschoenmodellen" },
  { value: "53", label: "Landen Wereldwijd" },
  { value: "1M+", label: "Beschermde Handen" }
];

const industries = [
  { icon: Flame, title: "Offshore & Olie/Gas", description: "Van de Noordzee tot wereldwijde platforms" },
  { icon: Anchor, title: "Maritiem & Scheepvaart", description: "Havens, scheepswerven, containeroverslag" },
  { icon: Building2, title: "Bouw & Constructie", description: "Van fundering tot hoogbouw" },
  { icon: Droplets, title: "Chemie & Petrochemie", description: "Bescherming tegen gevaarlijke stoffen" },
  { icon: Target, title: "Voedselindustrie", description: "Voedselveilig en snijbestendig" },
  { icon: TreePine, title: "Bosbouw & Groen", description: "Kettingzaagbestendig en waterafstotend" }
];

const trustBadges = [
  "Officieel Distributeur",
  "Directe Levering",
  "Persoonlijk Advies",
  "Rotterdam, NL"
];

const granbergProducts = [
  {
    id: 1,
    name: "Granberg 116.560",
    subtitle: "Cut Pro",
    description: "Snijbestendige handschoen met niveau F bescherming. HPPE vezel met nitril coating voor optimale grip.",
    image: gloveCutPro,
    badge: "Bestseller",
    rating: 4.9,
    certifications: ["EN 388: 4X44F", "Snijniveau F"],
    link: "/collecties/snijbestendige-werkhandschoenen"
  },
  {
    id: 2,
    name: "Granberg 117.660",
    subtitle: "Impact Pro",
    description: "360° impactbescherming met TPR knokkelbeschermers. Ideaal voor offshore en zware industrie.",
    image: gloveImpactPro,
    badge: "Offshore Favoriet",
    rating: 4.8,
    certifications: ["EN 388: 4544FP", "Impact Level 2"],
    link: "/collecties/impactbestendige-werkhandschoenen"
  },
  {
    id: 3,
    name: "Granberg 115.520",
    subtitle: "Arctic Pro",
    description: "Thermische winterhandschoen met waterdicht membraan. Bescherming tot -30°C.",
    image: gloveArcticPro,
    badge: "Winter Essential",
    rating: 4.7,
    certifications: ["EN 511: 231", "EN 388: 4131X"],
    link: "/collecties/winter-werkhandschoenen"
  },
  {
    id: 4,
    name: "Granberg 114.690",
    subtitle: "Chemical Pro",
    description: "Chemisch bestendige nitrile handschoen met lange manchet. Beschermt tegen oplosmiddelen en chemicaliën.",
    image: gloveChemicalPro,
    badge: "Chemie Specialist",
    rating: 4.8,
    certifications: ["EN ISO 374-1", "EN 388: 4101X"],
    link: "/collecties/chemisch-bestendige-handschoenen"
  }
];

export default function Granberg() {
  return (
    <Layout>
      <Helmet>
        <title>Granberg Handschoenen | 60+ Jaar Noorse Kwaliteit | SafeGrip</title>
        <meta 
          name="description" 
          content="Ontdek Granberg: sinds 1961 de Noorse standaard in professionele handbescherming. Red Dot Award winnaar, 250+ modellen. SafeGrip is officieel distributeur voor Nederland en België." 
        />
        <link rel="canonical" href="https://safegrip.nl/granberg" />
        <meta property="og:title" content="Granberg Handschoenen | 60+ Jaar Noorse Kwaliteit" />
        <meta property="og:description" content="Ontdek Granberg: sinds 1961 de Noorse standaard in professionele handbescherming." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Norwegian fjord with offshore platform" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Norwegian Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full text-sm font-medium text-foreground">
              <span>🇳🇴</span>
              <span>Since 1961 • Bjoa, Norway</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground mb-4">
              Granberg
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary mb-8">
              Handbescherming Zonder Compromissen
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Van een kelder in West-Noorwegen tot wereldleider in professionele handbescherming. 
              Dit is het verhaal van 60 jaar innovatie, Noorse kwaliteit en onwrikbare toewijding aan veiligheid.
            </p>

            {/* CTA Button */}
            <Button asChild size="lg" className="text-lg px-8 py-6 shadow-xl shadow-primary/30">
              <Link to="/shop" className="flex items-center gap-2">
                Bekijk Granberg Collectie
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: HET VERHAAL */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase mb-4">
                Het Verhaal
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
                Het Begon met Twee Handen en Een Missie
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  In 1961 zag Paul Granberg iets dat hem niet losliet. In de havens en fabrieken van West-Noorwegen 
                  werkten mannen met hun blote handen — lassers, staalwerkers, vissers. Vaders en echtgenoten die 
                  dagelijks gevaar trotseerden zonder adequate bescherming.
                </p>
                <p>
                  In de kelder van zijn gele bakstenen huis, samen met zijn vrouw en vier kinderen, begon Paul 
                  met een stuk Amerikaans leer en een visie: <span className="text-foreground font-medium">elke werkende hand verdient bescherming</span>.
                </p>
                <p>
                  Wat begon als een familiebedrijf groeide uit tot een wereldwijde missie. Het gele bakstenen huis 
                  staat er nog steeds — een symbool van waar Granberg voor staat: vasthoudendheid, vakmanschap, 
                  en de overtuiging dat bescherming geen luxe is maar een recht.
                </p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={historicHouse} 
                  alt="Het originele Granberg huis in Bjoa, Noorwegen" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4 italic">
                Het originele Granberg huis in Bjoa, Noorwegen
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NOORSE WAARDEN */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase mb-4">
              Waarom Noors?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Gebouwd op Viking-Mentaliteit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vier principes die elk Granberg product definiëren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {noorseWaarden.map((waarde, index) => (
              <motion.div
                key={waarde.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card rounded-2xl p-8 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <waarde.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {waarde.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {waarde.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PRESTATIES */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Stats */}
            <div>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 glass-card rounded-2xl"
                  >
                    <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base font-medium text-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Award Highlight */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-10 text-center lg:text-left"
            >
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Award className="h-10 w-10 text-destructive" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Red Dot Award Winnaar
              </h3>
              <p className="text-xl font-bold text-primary mb-4">
                2015 & 2016
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Internationaal erkend voor uitzonderlijk productdesign. De Granberg 9000-serie won twee jaar 
                op rij deze prestigieuze designprijs — een bevestiging van onze toewijding aan functionaliteit én esthetiek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRIEËN */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase mb-4">
              Vertrouwd Door
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Waar Granberg Beschermt
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <industry.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5.5: PRODUCT CAROUSEL */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-secondary/30 via-background to-background overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase mb-4">
              Bestsellers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Granberg Topmodellen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ontdek onze meest populaire Granberg werkhandschoenen, gekozen door professionals wereldwijd
            </p>
          </motion.div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {granbergProducts.map((product, index) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card h-full">
                      {/* Product Image */}
                      <div className="aspect-square relative overflow-hidden bg-background">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground font-medium">
                            {product.badge}
                          </Badge>
                        </div>
                        {/* Rating */}
                        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 glass rounded-full">
                          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                          <span className="text-xs font-medium text-foreground">{product.rating}</span>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        {/* Product Name */}
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm font-medium text-primary">
                            {product.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        {/* Certifications */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {product.certifications.map((cert) => (
                            <span 
                              key={cert}
                              className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                          <Link to={product.link} className="flex items-center justify-center gap-2">
                            <ShoppingBag className="h-4 w-4" />
                            Bekijk Product
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
              <CarouselNext className="static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            </div>
          </Carousel>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
              <Link to="/shop" className="flex items-center gap-2">
                Bekijk Alle Granberg Producten
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIAL */}
      <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="h-16 w-16 text-primary/30 mx-auto mb-8" />
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground italic leading-relaxed mb-8">
              "De GRANBERG 6050 nitrile handschoenen bieden zowel chemische als impactbescherming 
              terwijl ze flexibel en gebruiksvriendelijk blijven. Een game-changer voor onze offshore operaties."
            </blockquote>
            <div>
              <p className="text-lg font-bold text-primary">Health & Safety Manager</p>
              <p className="text-muted-foreground">Archer — Oil & Gas Services</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: SAFEGRIP CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase mb-4">
              Officieel Distributeur
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              SafeGrip Brengt Granberg naar de Benelux
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Vanuit het historische Scheepvaartkwartier in Rotterdam zijn wij de officiële Granberg distributeur 
              voor Nederland en België. Wij combineren 60 jaar Noorse expertise met lokale service: persoonlijk advies, 
              snelle levering en een team dat de industrie kent.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-xl shadow-primary/30">
                <Link to="/shop" className="flex items-center gap-2">
                  Bekijk Alle Producten
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-foreground/20 hover:bg-foreground/5">
                <Link to="/contact">
                  Neem Contact Op
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {trustBadges.map((badge) => (
                <div 
                  key={badge}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: FOOTER CTA */}
      <section className="py-12 bg-primary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xl md:text-2xl font-bold text-primary-foreground text-center md:text-left">
              Klaar om uw team te beschermen met Granberg kwaliteit?
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Start Uw Aanvraag
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
