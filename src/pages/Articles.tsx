import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ArticleCard } from '@/components/shared/ArticleCard';
import { SearchBar } from '@/components/shared/SearchBar';
import { CategoryFilter } from '@/components/shared/CategoryFilter';
import { articles, categories } from '@/data/articles';

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const categoryFromUrl = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Artikel <span className="text-gradient">Edukasi</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pelajari berbagai topik keuangan melalui artikel-artikel yang mudah dipahami
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Cari artikel..."
              className="md:w-80"
            />
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onChange={handleCategoryChange}
              className="flex-1"
            />
          </div>

          {/* Results */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Tidak ada artikel yang ditemukan.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Articles;