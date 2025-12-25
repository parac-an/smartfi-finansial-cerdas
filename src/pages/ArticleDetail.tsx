import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { ArticleCard } from '@/components/shared/ArticleCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getArticleBySlug, getRelatedArticles } from '@/data/articles';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Artikel tidak ditemukan</h1>
          <Button asChild>
            <Link to="/artikel">Kembali ke Artikel</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedArticles = getRelatedArticles(article.id, article.category);

  return (
    <Layout>
      <article className="py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/artikel">
              <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
            </Link>
          </Button>

          {/* Hero Image */}
          <div className="aspect-video max-h-[400px] rounded-2xl overflow-hidden mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge className="bg-primary/90 text-primary-foreground">
                {article.categoryLabel}
              </Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>

            {/* Share */}
            <div className="mb-8">
              <ShareButtons url={`/artikel/${article.slug}`} title={article.title} />
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            {/* Share Bottom */}
            <div className="border-t border-border mt-12 pt-8">
              <p className="text-muted-foreground mb-4">Suka artikel ini? Bagikan ke teman-temanmu!</p>
              <ShareButtons url={`/artikel/${article.slug}`} title={article.title} />
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Artikel Terkait</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default ArticleDetail;