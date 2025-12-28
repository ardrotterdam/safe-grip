import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_URL } from "@/config/site";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (exclude current)
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  // Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeGrip",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/safegrip-logo.svg`
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`
    },
    "articleSection": post.category,
    "wordCount": post.content.split(/\s+/).length
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${SITE_URL}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${SITE_URL}/blog/${post.slug}`
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | SafeGrip Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`${SITE_URL}/blog/${post.slug}`} />
        <meta property="og:url" content={`${SITE_URL}/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {post.imageOverlayText && (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="rounded-2xl bg-background/85 backdrop-blur-sm border border-border px-8 py-5 shadow-xl">
              <span className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                {post.imageOverlayText}
              </span>
            </div>
          </div>
        )}
      </section>


      {/* Content Header */}
      <section className="relative py-12 md:py-16 bg-background -mt-20 md:-mt-32 z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
            {/* Back Link */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Terug naar blog
            </Link>

            {/* Category */}
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime} leestijd
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Prose content */}
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none
              prose-headings:font-semibold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-table:border-collapse prose-table:w-full
              prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-border
              prose-td:p-3 prose-td:border prose-td:border-border
            ">
              {/* Render markdown-like content as HTML */}
              {post.content.split('\n').map((line, index) => {
                // Handle headers
                if (line.startsWith('## ')) {
                  return <h2 key={index}>{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={index}>{line.replace('### ', '')}</h3>;
                }
                // Handle list items
                if (line.startsWith('- **')) {
                  const match = line.match(/- \*\*(.+?)\*\*(.*)$/);
                  if (match) {
                    return (
                      <li key={index}>
                        <strong>{match[1]}</strong>{match[2]}
                      </li>
                    );
                  }
                }
                if (line.startsWith('- ')) {
                  return <li key={index}>{line.replace('- ', '')}</li>;
                }
                // Handle numbered lists
                if (/^\d+\. \*\*/.test(line)) {
                  const match = line.match(/^\d+\. \*\*(.+?)\*\*(.*)$/);
                  if (match) {
                    return (
                      <li key={index}>
                        <strong>{match[1]}</strong>{match[2]}
                      </li>
                    );
                  }
                }
                if (/^\d+\. /.test(line)) {
                  return <li key={index}>{line.replace(/^\d+\. /, '')}</li>;
                }
                // Handle table rows
                if (line.startsWith('| ') && !line.includes('---')) {
                  const cells = line.split('|').filter(c => c.trim());
                  const isHeader = index < 3; // Simple heuristic
                  return (
                    <tr key={index}>
                      {cells.map((cell, cellIndex) => 
                        isHeader ? (
                          <th key={cellIndex}>{cell.trim()}</th>
                        ) : (
                          <td key={cellIndex}>{cell.trim()}</td>
                        )
                      )}
                    </tr>
                  );
                }
                // Handle paragraphs
                if (line.trim() && !line.startsWith('|')) {
                  // Bold text
                  const formattedLine = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                  return (
                    <p 
                      key={index} 
                      dangerouslySetInnerHTML={{ __html: formattedLine }}
                    />
                  );
                }
                return null;
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-muted/50 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Advies nodig?
              </h3>
              <p className="text-muted-foreground mb-4">
                Onze specialisten helpen u graag bij het kiezen van de juiste werkhandschoenen voor uw situatie.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Neem contact op
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30 border-t border-border">
          <div className="container">
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              Gerelateerde artikelen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card 
                  key={relatedPost.id}
                  className="group overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <span className="inline-block px-2 py-0.5 mb-3 text-xs font-medium bg-primary/10 text-primary rounded">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
                    >
                      Lees meer
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
