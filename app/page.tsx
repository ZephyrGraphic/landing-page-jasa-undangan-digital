import { Sparkles, Heart, Smartphone, Map, Music, Globe, MessageSquare } from "lucide-react"
import { InvitationGallery } from "@/components/invitation-gallery"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { HeroSection } from "@/components/hero-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />

      <section id="gallery" className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-white to-[#FFF9F9]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Koleksi Tema Eksklusif
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih dari berbagai tema premium yang dirancang dengan detail sempurna untuk momen spesial Anda
            </p>
          </div>
          <InvitationGallery />
        </div>
      </section>

      <section id="features" className="py-20 px-4 md:px-8 lg:px-12 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Keunggulan Layanan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Mengapa pasangan memilih undangan digital premium kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-[#D4AF37]" />}
              title="Full Custom Desain"
              description="Desain eksklusif yang dapat disesuaikan dengan tema pernikahan Anda"
            />
            <FeatureCard
              icon={<Smartphone className="h-8 w-8 text-[#D4AF37]" />}
              title="Mobile & Desktop Friendly"
              description="Tampilan responsif sempurna di semua perangkat"
            />
            <FeatureCard
              icon={<Heart className="h-8 w-8 text-[#D4AF37]" />}
              title="RSVP Digital"
              description="Konfirmasi kehadiran tamu secara online dengan mudah"
            />
            <FeatureCard
              icon={<Map className="h-8 w-8 text-[#D4AF37]" />}
              title="Peta Lokasi Interaktif"
              description="Petunjuk arah yang jelas untuk memudahkan tamu Anda"
            />
            <FeatureCard
              icon={<Music className="h-8 w-8 text-[#D4AF37]" />}
              title="Background Musik"
              description="Pilih lagu spesial yang mengiringi undangan digital Anda"
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-[#D4AF37]" />}
              title="Domain Kustom"
              description="Dapatkan URL undangan yang personal dan mudah diingat"
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-[#D4AF37]" />}
              title="Integrasi WhatsApp"
              description="Kirim undangan langsung ke WhatsApp tamu Anda"
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-12 bg-[#FFF9F9]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Testimoni Pasangan Bahagia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
