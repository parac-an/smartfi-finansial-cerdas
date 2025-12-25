export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'budgeting' | 'investasi' | 'tabungan' | 'finansial-pribadi';
  categoryLabel: string;
  publishedAt: string;
  readTime: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Dasar-Dasar Budgeting untuk Pemula',
    slug: 'dasar-dasar-budgeting-untuk-pemula',
    excerpt: 'Pelajari cara membuat anggaran yang efektif dan mudah diikuti untuk mengelola keuangan Anda dengan lebih baik.',
    content: `
## Apa Itu Budgeting?

Budgeting atau penganggaran adalah proses membuat rencana pengeluaran uang Anda. Rencana pengeluaran ini disebut anggaran. Membuat anggaran membantu Anda menentukan terlebih dahulu apakah uang yang Anda miliki cukup untuk melakukan hal-hal yang perlu atau ingin Anda lakukan.

## Mengapa Budgeting Penting?

Budgeting adalah langkah pertama yang paling penting dalam mengelola keuangan pribadi. Dengan anggaran yang baik, Anda dapat:

- **Mengontrol pengeluaran** - Tahu kemana uang Anda pergi
- **Mencapai tujuan finansial** - Menabung untuk hal-hal penting
- **Mengurangi stres keuangan** - Memiliki rencana yang jelas
- **Membangun kebiasaan baik** - Disiplin dalam pengelolaan uang

## Metode 50/30/20

Salah satu metode budgeting yang populer adalah aturan 50/30/20:

### 50% untuk Kebutuhan
Alokasikan 50% dari pendapatan untuk kebutuhan pokok seperti:
- Tempat tinggal (sewa/cicilan rumah)
- Makanan dan kebutuhan rumah tangga
- Transportasi
- Utilitas (listrik, air, internet)
- Asuransi kesehatan

### 30% untuk Keinginan
Sisihkan 30% untuk hal-hal yang Anda inginkan:
- Hiburan dan rekreasi
- Makan di luar
- Hobi dan kegiatan leisure
- Belanja non-esensial

### 20% untuk Tabungan & Investasi
Minimal 20% untuk masa depan:
- Dana darurat
- Tabungan pensiun
- Investasi
- Pelunasan hutang

## Tips Memulai Budgeting

1. **Catat semua pengeluaran** selama sebulan
2. **Kategorikan pengeluaran** Anda
3. **Tetapkan tujuan** yang realistis
4. **Review secara berkala** dan sesuaikan
5. **Gunakan aplikasi** untuk memudahkan tracking

Mulailah dengan langkah kecil dan konsisten. Seiring waktu, budgeting akan menjadi kebiasaan yang membantu Anda mencapai kebebasan finansial.
    `,
    category: 'budgeting',
    categoryLabel: 'Budgeting',
    publishedAt: '2024-12-20',
    readTime: '5 menit',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '2',
    title: 'Cara Memulai Investasi dengan Modal Kecil',
    slug: 'cara-memulai-investasi-dengan-modal-kecil',
    excerpt: 'Investasi tidak harus dimulai dengan modal besar. Pelajari cara memulai investasi meski dengan modal terbatas.',
    content: `
## Investasi Bukan Hanya untuk Orang Kaya

Banyak orang berpikir bahwa investasi hanya untuk mereka yang memiliki uang banyak. Padahal, dengan perkembangan teknologi, siapa pun bisa mulai berinvestasi dengan modal yang sangat terjangkau.

## Jenis Investasi untuk Pemula

### 1. Reksa Dana
Reksa dana adalah pilihan tepat untuk pemula karena:
- Modal awal sangat terjangkau (mulai Rp10.000)
- Dikelola oleh manajer investasi profesional
- Diversifikasi otomatis
- Mudah dibeli melalui aplikasi

### 2. Saham
Investasi saham sekarang bisa dimulai dengan:
- Modal mulai dari Rp100.000
- Beli saham-saham blue chip yang stabil
- Pelajari analisis fundamental dasar

### 3. Obligasi Ritel
Surat utang yang diterbitkan pemerintah:
- Aman karena dijamin negara
- Return yang kompetitif
- Tenor yang fleksibel

### 4. Emas Digital
Investasi emas modern:
- Beli mulai 0.01 gram
- Tidak perlu menyimpan fisik
- Mudah dijual kapan saja

## Langkah Memulai Investasi

1. **Siapkan dana darurat** terlebih dahulu
2. **Tentukan tujuan investasi** Anda
3. **Pahami profil risiko** Anda
4. **Mulai dengan nominal kecil** secara konsisten
5. **Diversifikasi** portfolio Anda
6. **Investasi jangka panjang** untuk hasil optimal

## Tips Penting

- Jangan investasi uang yang Anda butuhkan dalam waktu dekat
- Pelajari instrumen investasi sebelum membeli
- Konsisten lebih penting daripada nominal besar
- Pantau investasi Anda secara berkala

Ingat, investasi terbaik adalah investasi yang dimulai sekarang!
    `,
    category: 'investasi',
    categoryLabel: 'Investasi',
    publishedAt: '2024-12-18',
    readTime: '6 menit',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '3',
    title: 'Tips Menabung Efektif di Era Digital',
    slug: 'tips-menabung-efektif-di-era-digital',
    excerpt: 'Manfaatkan teknologi untuk membuat kebiasaan menabung menjadi lebih mudah dan konsisten.',
    content: `
## Tantangan Menabung di Era Modern

Di era digital, godaan untuk belanja semakin besar. Dengan sekali klik, kita bisa membeli apa saja. Namun, teknologi yang sama juga bisa membantu kita menabung lebih efektif.

## Strategi Menabung Digital

### 1. Otomatisasi Tabungan
- Atur auto-debet ke rekening tabungan
- Transfer otomatis setiap gajian
- "Pay yourself first" - tabung sebelum dibelanjakan

### 2. Gunakan Aplikasi Keuangan
Manfaatkan aplikasi untuk:
- Tracking pengeluaran otomatis
- Set reminder menabung
- Visualisasi progress tabungan
- Gamifikasi proses menabung

### 3. Pisahkan Rekening
- Rekening operasional sehari-hari
- Rekening tabungan goals
- Rekening dana darurat
- Rekening investasi

## Metode Menabung yang Efektif

### Metode 52 Minggu
- Minggu 1: Tabung Rp10.000
- Minggu 2: Tabung Rp20.000
- Dan seterusnya...
- Akhir tahun: Terkumpul Rp13.780.000

### Metode Tantangan Tanpa Belanja
- Pilih kategori: no eating out week
- Challenge: no online shopping month
- Tabung uang yang tidak dibelanjakan

### Metode Pembulatan
- Belanja Rp47.500
- Bulatkan ke Rp50.000
- Tabung selisih Rp2.500

## Tips Sukses Menabung

1. **Set tujuan spesifik** (liburan, DP rumah, dana darurat)
2. **Buat visual reminder** di tempat yang terlihat
3. **Celebrate small wins** untuk motivasi
4. **Review progress** setiap bulan
5. **Ajak teman/keluarga** untuk accountability

Menabung adalah marathon, bukan sprint. Konsistensi adalah kuncinya!
    `,
    category: 'tabungan',
    categoryLabel: 'Tabungan',
    publishedAt: '2024-12-15',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '4',
    title: 'Mengelola Keuangan Pribadi dengan Bijak',
    slug: 'mengelola-keuangan-pribadi-dengan-bijak',
    excerpt: 'Panduan lengkap untuk mengatur keuangan pribadi dari pendapatan, pengeluaran, hingga investasi.',
    content: `
## Fondasi Keuangan yang Kuat

Mengelola keuangan pribadi bukan hanya tentang menabung atau investasi, tapi tentang membangun fondasi finansial yang kokoh untuk masa depan.

## Pilar Keuangan Sehat

### 1. Cashflow Positif
Pastikan pendapatan lebih besar dari pengeluaran:
- Track semua pemasukan
- Catat semua pengeluaran
- Identifikasi kebocoran finansial
- Optimalkan pendapatan

### 2. Dana Darurat
Siapkan dana darurat yang cukup:
- Idealnya 6-12 bulan pengeluaran
- Simpan di rekening yang mudah diakses
- Jangan dipakai untuk hal lain
- Top up jika terpakai

### 3. Perlindungan Asuransi
Lindungi diri dan keluarga:
- Asuransi kesehatan (prioritas utama)
- Asuransi jiwa (jika ada tanggungan)
- Asuransi kendaraan/properti

### 4. Investasi untuk Masa Depan
Kembangkan aset Anda:
- Mulai sedini mungkin
- Diversifikasi portfolio
- Sesuaikan dengan profil risiko
- Konsisten dalam jangka panjang

## Kesalahan yang Harus Dihindari

1. **Lifestyle inflation** - gaya hidup naik seiring pendapatan
2. **Tidak punya tujuan finansial** yang jelas
3. **Hutang konsumtif** yang berlebihan
4. **Tidak ada dana darurat**
5. **Menunda investasi** karena merasa belum siap

## Action Plan Keuangan

### Bulan 1-3: Foundation
- Catat semua pengeluaran
- Buat anggaran bulanan
- Mulai dana darurat

### Bulan 4-6: Optimization
- Kurangi pengeluaran tidak perlu
- Lunasi hutang konsumtif
- Tingkatkan pendapatan

### Bulan 7-12: Growth
- Mulai investasi rutin
- Review asuransi
- Set tujuan jangka panjang

Keuangan yang sehat adalah hasil dari keputusan-keputusan kecil yang konsisten setiap hari.
    `,
    category: 'finansial-pribadi',
    categoryLabel: 'Finansial Pribadi',
    publishedAt: '2024-12-12',
    readTime: '7 menit',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '5',
    title: 'Mengenal Reksa Dana untuk Investor Pemula',
    slug: 'mengenal-reksa-dana-untuk-investor-pemula',
    excerpt: 'Pahami apa itu reksa dana, jenis-jenisnya, dan bagaimana cara memilih reksa dana yang tepat untuk Anda.',
    content: `
## Apa Itu Reksa Dana?

Reksa Dana adalah wadah untuk menghimpun dana dari masyarakat pemodal yang kemudian diinvestasikan ke dalam portfolio efek oleh Manajer Investasi profesional.

## Mengapa Reksa Dana Cocok untuk Pemula?

1. **Modal terjangkau** - Mulai dari Rp10.000
2. **Dikelola profesional** - Tidak perlu analisis sendiri
3. **Diversifikasi** - Risiko tersebar
4. **Likuid** - Mudah dicairkan
5. **Transparan** - Laporan berkala tersedia

## Jenis-Jenis Reksa Dana

### 1. Reksa Dana Pasar Uang
- **Risiko**: Rendah
- **Return**: 4-6% per tahun
- **Cocok untuk**: Dana darurat, tabungan jangka pendek

### 2. Reksa Dana Pendapatan Tetap
- **Risiko**: Rendah-Menengah
- **Return**: 6-8% per tahun
- **Cocok untuk**: Tujuan 1-3 tahun

### 3. Reksa Dana Campuran
- **Risiko**: Menengah
- **Return**: 8-12% per tahun
- **Cocok untuk**: Tujuan 3-5 tahun

### 4. Reksa Dana Saham
- **Risiko**: Tinggi
- **Return**: 10-15% per tahun (potensi)
- **Cocok untuk**: Tujuan >5 tahun

## Cara Memilih Reksa Dana

1. **Tentukan tujuan dan jangka waktu** investasi
2. **Pahami profil risiko** Anda
3. **Cek track record** manajer investasi
4. **Perhatikan expense ratio** (biaya pengelolaan)
5. **Baca fund fact sheet** dengan teliti

## Istilah Penting

- **NAB (Nilai Aktiva Bersih)**: Harga per unit reksa dana
- **AUM (Asset Under Management)**: Total dana kelolaan
- **Expense Ratio**: Biaya pengelolaan tahunan
- **Subscription Fee**: Biaya pembelian
- **Redemption Fee**: Biaya penjualan

## Tips Investasi Reksa Dana

- Investasi secara rutin (DCA - Dollar Cost Averaging)
- Jangan panik saat pasar turun
- Review portfolio secara berkala
- Jangan taruh semua telur di satu keranjang

Reksa dana adalah pintu masuk yang ideal untuk memulai perjalanan investasi Anda!
    `,
    category: 'investasi',
    categoryLabel: 'Investasi',
    publishedAt: '2024-12-10',
    readTime: '6 menit',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format&fit=crop&q=60'
  }
];

export const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'budgeting', label: 'Budgeting' },
  { id: 'investasi', label: 'Investasi' },
  { id: 'tabungan', label: 'Tabungan' },
  { id: 'finansial-pribadi', label: 'Finansial Pribadi' }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentId: string, category: string): Article[] => {
  return articles
    .filter(article => article.id !== currentId && article.category === category)
    .slice(0, 3);
};
