export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: 'dasar' | 'budgeting' | 'investasi' | 'tabungan' | 'tips';
  categoryLabel: string;
  duration: string;
  thumbnail: string;
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Pengantar Literasi Keuangan',
    description: 'Video pengantar tentang pentingnya literasi keuangan untuk kehidupan sehari-hari. Pelajari konsep dasar keuangan yang akan membantu Anda membuat keputusan finansial yang lebih baik.',
    youtubeId: 'lNYcviXK4rg',
    category: 'dasar',
    categoryLabel: 'Dasar Keuangan',
    duration: '10:25',
    thumbnail: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '2',
    title: 'Cara Membuat Anggaran Bulanan',
    description: 'Langkah demi langkah membuat anggaran bulanan yang efektif. Pelajari metode 50/30/20 dan cara tracking pengeluaran Anda dengan mudah.',
    youtubeId: 'HQzoZfc3GwQ',
    category: 'budgeting',
    categoryLabel: 'Budgeting',
    duration: '15:30',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '3',
    title: 'Investasi Saham untuk Pemula',
    description: 'Panduan lengkap memulai investasi saham dari nol. Pahami cara kerja pasar saham, analisis dasar, dan tips memilih saham yang tepat.',
    youtubeId: 'ZCFkWDdmXG8',
    category: 'investasi',
    categoryLabel: 'Investasi',
    duration: '20:15',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '4',
    title: 'Strategi Menabung yang Efektif',
    description: 'Berbagai strategi dan tips menabung yang terbukti efektif. Dari metode pay yourself first hingga tantangan menabung 52 minggu.',
    youtubeId: 'kZ5K6FvRQxQ',
    category: 'tabungan',
    categoryLabel: 'Tabungan',
    duration: '12:45',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '5',
    title: 'Kesalahan Keuangan yang Harus Dihindari',
    description: 'Kenali kesalahan-kesalahan finansial yang sering dilakukan dan bagaimana cara menghindarinya untuk kesehatan keuangan yang lebih baik.',
    youtubeId: 'Ql7XxwL58rM',
    category: 'tips',
    categoryLabel: 'Tips & Trik',
    duration: '18:00',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60'
  }
];

export const videoCategories = [
  { id: 'all', label: 'Semua' },
  { id: 'dasar', label: 'Dasar Keuangan' },
  { id: 'budgeting', label: 'Budgeting' },
  { id: 'investasi', label: 'Investasi' },
  { id: 'tabungan', label: 'Tabungan' },
  { id: 'tips', label: 'Tips & Trik' }
];

export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};
