import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { VideoCardCompact } from '@/components/shared/VideoCard';
import { SearchBar } from '@/components/shared/SearchBar';
import { CategoryFilter } from '@/components/shared/CategoryFilter';
import { Button } from '@/components/ui/button';
import { videos, videoCategories, getVideoById } from '@/data/videos';
import { ExternalLink } from 'lucide-react';

const Videos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const videoIdFromUrl = searchParams.get('v') || videos[0]?.id;
  const [activeVideoId, setActiveVideoId] = useState(videoIdFromUrl);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const activeVideo = getVideoById(activeVideoId) || videos[0];

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesSearch = video.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'all' || video.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const handleVideoSelect = (id: string) => {
    setActiveVideoId(id);
    searchParams.set('v', id);
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Video <span className="text-gradient">Edukasi</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tonton video-video edukasi finansial yang mudah dipahami
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="aspect-video rounded-xl overflow-hidden bg-card mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{activeVideo.title}</h2>
              <p className="text-muted-foreground mb-4">{activeVideo.description}</p>
              <Button asChild variant="outline">
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Tonton di YouTube
                </a>
              </Button>
            </div>

            {/* Playlist */}
            <div className="glass rounded-xl p-4">
              <h3 className="font-semibold mb-4">Playlist Video</h3>
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Cari video..."
                className="mb-4"
              />
              <CategoryFilter
                categories={videoCategories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
                className="mb-4"
              />
              <div className="space-y-2 max-h-[400px] overflow-y-auto">
                {filteredVideos.map((video) => (
                  <VideoCardCompact
                    key={video.id}
                    video={video}
                    isActive={video.id === activeVideoId}
                    onClick={() => handleVideoSelect(video.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;