import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">SMARTFI</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              Bangun Finansialmu, Mulai Sekarang. SMARTFI hadir untuk memberikan edukasi finansial gratis dalam Bahasa Indonesia agar semua orang lebih melek keuangan.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/artikel" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Artikel
                </Link>
              </li>
              <li>
                <Link to="/video" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Video Edukasi
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/artikel?category=budgeting" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Budgeting
                </Link>
              </li>
              <li>
                <Link to="/artikel?category=investasi" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Investasi
                </Link>
              </li>
              <li>
                <Link to="/artikel?category=tabungan" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Tabungan
                </Link>
              </li>
              <li>
                <Link to="/artikel?category=finansial-pribadi" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Finansial Pribadi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SMARTFI. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};
