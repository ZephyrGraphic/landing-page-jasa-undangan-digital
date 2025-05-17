import { Sparkles, Heart, Smartphone, Map, Music, Globe, MessageSquare, Zap, Shield } from "lucide-react"
import { InvitationGallery } from "@/components/invitation-gallery"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { HeroSection } from "@/components/hero-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <HeroSection />

      <section id="gallery" className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
                Koleksi Tema Eksklusif
              </span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Pilih dari berbagai tema premium yang dirancang dengan detail sempurna untuk momen spesial Anda
            </p>
          </div>
          <InvitationGallery />
        </div>
      </section>

      <section id="features" className="py-20 px-4 md:px-8 lg:px-12 bg-slate-900 relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6TTYgNHY2aDZ2LTZINnptMCAzMHY2aDZ2LTZINnptMCAxNXY2aDZ2LTZINnptMTUgMHY2aDZ2LTZoLTZ6bTE1IDB2Nmg2di02aC02em0xNSAwdjZoNnYtNmgtNnptMC0xNXY2aDZ2LTZoLTZ6bTAtMTV2Nmg2di02aC02em0tMzAgMHY2aDZ2LTZoLTZ6bTE1LTE1djZoNnYtNmgtNnptLTE1IDB2Nmg2di02aC02em0zMCAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
                Keunggulan Layanan Kami
              </span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Mengapa pasangan memilih undangan digital premium kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-indigo-400" />}
              title="Full Custom Desain"
              description="Desain eksklusif yang dapat disesuaikan dengan tema pernikahan Anda"
              index={0}
            />
            <FeatureCard
              icon={<Smartphone className="h-8 w-8 text-indigo-400" />}
              title="Mobile & Desktop Friendly"
              description="Tampilan responsif sempurna di semua perangkat"
              index={1}
            />
            <FeatureCard
              icon={<Heart className="h-8 w-8 text-indigo-400" />}
              title="RSVP Digital"
              description="Konfirmasi kehadiran tamu secara online dengan mudah"
              index={2}
            />
            <FeatureCard
              icon={<Map className="h-8 w-8 text-indigo-400" />}
              title="Peta Lokasi Interaktif"
              description="Petunjuk arah yang jelas untuk memudahkan tamu Anda"
              index={3}
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-indigo-400" />}
              title="Performa Tinggi"
              description="Teknologi terkini untuk pengalaman undangan yang cepat dan lancar"
              index={4}
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-indigo-400" />}
              title="Keamanan Data"
              description="Perlindungan data tamu dan informasi pribadi Anda"
              index={5}
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-indigo-400" />}
              title="Domain Kustom"
              description="Dapatkan URL undangan yang personal dan mudah diingat"
              index={6}
            />
            <FeatureCard
              icon={<Music className="h-8 w-8 text-indigo-400" />}
              title="Background Musik"
              description="Pilih lagu spesial yang mengiringi undangan digital Anda"
              index={7}
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-indigo-400" />}
              title="Integrasi WhatsApp"
              description="Kirim undangan langsung ke WhatsApp tamu Anda"
              index={8}
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
                Testimoni Pasangan Bahagia
              </span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Apa kata mereka yang telah menggunakan layanan undangan digital kami
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  )
}
