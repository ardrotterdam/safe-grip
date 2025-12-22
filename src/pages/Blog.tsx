import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Hoe kies je de juiste snijbestendige handschoen?",
    excerpt: "Een uitgebreide gids over snijbestendigheidsniveaus, materialen en toepassingen. Ontdek welke handschoen het beste past bij jouw werkzaamheden.",
    date: "15 december 2024",
    readTime: "5 min",
    slug: "juiste-snijbestendige-handschoen-kiezen",
    category: "Gidsen",
  },
  {
    id: 2,
    title: "EN 388 uitgelegd: wat betekenen de cijfers?",
    excerpt: "De Europese norm EN 388 kan verwarrend zijn. We leggen uit wat elk cijfer betekent en hoe je deze informatie kunt gebruiken bij het selecteren van werkhandschoenen.",
    date: "8 december 2024",
    readTime: "4 min",
    slug: "en-388-uitgelegd",
    category: "Normen",
  },
  {
    id: 3,
    title: "5 tips voor handbescherming in de offshore industrie",
    excerpt: "De offshore sector stelt hoge eisen aan handbescherming. Van impact- tot snijbestendigheid: deze tips helpen je de juiste keuze te maken.",
    date: "1 december 2024",
    readTime: "6 min",
    slug: "handbescherming-offshore-industrie",
    category: "Tips",
  },
];

export default function Blog() {
  return (
    <Layout>
      <Helmet>
        <title>Blog | SafeGrip - Professionele Werkhandschoenen</title>
        <meta 
          name="description" 
          content="Nieuws, tips en inzichten over professionele handbescherming. Lees onze artikelen over werkhandschoenen, normen en industriespecifieke oplossingen." 
        />
        <link rel="canonical" href="https://safegrip.nl/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full uppercase">
              Kenniscentrum
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              SafeGrip Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Nieuws, tips en inzichten over professionele handbescherming
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl">📝</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Afbeelding binnenkort</span>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Link */}
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
                  >
                    Lees meer
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Note */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Meer artikelen komen binnenkort. Blijf op de hoogte via onze nieuwsbrief.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
