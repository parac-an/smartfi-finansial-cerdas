import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ArticleCard } from '@/components/shared/ArticleCard';
import { VideoCard } from '@/components/shared/VideoCard';
import { Button } from '@/components/ui/button';
import { articles } from '@/data/articles';
import { videos } from '@/data/videos';
import { TrendingUp, BookOpen, PlayCircle, Target, PiggyBank, ArrowRight, Wallet, BarChart3 } from 'lucide-react';

const stats = [
  { label: 'Artikel', value: '5+', icon: BookOpen },
  { label: 'Video', value: '5+', icon: PlayCircle },
  { label: 'Kategori', value: '4', icon: Target },
];

const categories = [
  { icon: Wallet, label: 'Budgeting', desc: 'Kelola anggaran dengan bijak', href: '/artikel?category=budgeting' },
  { icon: BarChart3, label: 'Investasi', desc: 'Kembangkan aset Anda', href: '/artikel?category=investasi' },
  { icon: PiggyBank, label: 'Tabungan', desc: 'Tips menabung efektif', href: '/artikel?category=tabungan' },
  { icon: Target, label: 'Finansial Pribadi', desc: 'Kelola keuangan pribadi', href: '/artikel?category=finansial-pribadi' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in-up">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm">Edukasi Finansial Gratis</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up delay-100">
              Bangun <span className="text-gradient">Finansialmu</span>, Mulai Sekarang
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
              SMARTFI hadir untuk memberikan edukasi finansial dalam Bahasa Indonesia. 
              Pelajari budgeting, investasi, tabungan, dan pengelolaan keuangan pribadi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 glow text-lg px-8">
                <Link to="/artikel">Mulai Belajar</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/video">Tonton Video</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-16 animate-fade-in-up delay-400">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kategori Edukasi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pilih topik yang ingin Anda pelajari dan tingkatkan literasi keuangan Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                to={cat.href}
                className="group glass rounded-xl p-6 glass-hover text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:glow transition-all">
                  <cat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{cat.label}</h3>
                <p className="text-sm text-muted-foreground">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Artikel Terbaru</h2>
              <p className="text-muted-foreground">Baca artikel edukasi terbaru kami</p>
            </div>
            <Button asChild variant="outline" className="hidden sm:flex">
              <Link to="/artikel">
                Lihat Semua <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Button asChild variant="outline">
              <Link to="/artikel">Lihat Semua Artikel</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Video Unggulan</h2>
              <p className="text-muted-foreground">Tonton video edukasi finansial</p>
            </div>
            <Button asChild variant="outline" className="hidden sm:flex">
              <Link to="/video">
                Lihat Semua <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.slice(0, 3).map((video) => (
              <VideoCard key={video.id} video={video} onClick={() => window.location.href = `/video?v=${video.id}`} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Button asChild variant="outline">
              <Link to="/video">Lihat Semua Video</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Meningkatkan Literasi Keuangan?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Mulai perjalanan edukasi finansial Anda sekarang. Gratis, mudah dipahami, dan dalam Bahasa Indonesia.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 glow">
                <Link to="/artikel">Mulai Belajar Sekarang</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;