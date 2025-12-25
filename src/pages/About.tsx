import { Layout } from '@/components/layout/Layout';
import { TrendingUp, Target, Users, BookOpen } from 'lucide-react';

const values = [
  { icon: BookOpen, title: 'Edukasi Gratis', desc: 'Semua konten edukasi kami tersedia gratis untuk semua orang.' },
  { icon: Users, title: 'Untuk Semua', desc: 'Dari pelajar hingga profesional, semua bisa belajar di sini.' },
  { icon: Target, title: 'Praktis', desc: 'Konten yang mudah dipahami dan langsung bisa dipraktikkan.' },
];

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 glow">
              <TrendingUp className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang <span className="text-gradient">SMARTFI</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              SMARTFI adalah platform edukasi finansial yang bertujuan meningkatkan literasi keuangan masyarakat Indonesia melalui konten yang mudah dipahami dan gratis.
            </p>
          </div>

          {/* Mission */}
          <div className="glass rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold mb-4 text-gradient">Misi Kami</h2>
            <p className="text-muted-foreground text-lg">
              Menjadikan edukasi finansial dapat diakses oleh semua kalangan masyarakat Indonesia. Kami percaya bahwa dengan pemahaman keuangan yang baik, setiap orang dapat membuat keputusan finansial yang lebih bijak untuk masa depan yang lebih baik.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="glass rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;