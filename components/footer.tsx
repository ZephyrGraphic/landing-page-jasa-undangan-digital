import Link from "next/link"
import { Heart, Instagram, MessageSquare, Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#F8C3B9]/20 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Heart className="h-6 w-6 text-[#D4AF37]" />
              <span className="ml-2 font-serif text-xl font-bold text-gray-800">ZepWed</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">Undangan Pernikahan Digital Premium</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <Link href="#hero" className="text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">
              Beranda
            </Link>
            <Link href="#gallery" className="text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">
              Koleksi Tema
            </Link>
            <Link href="#features" className="text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">
              Keunggulan
            </Link>
            <Link href="#testimonials" className="text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">
              Testimoni
            </Link>
            <Link href="#contact" className="text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">
              Kontak
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/zephyrax.zero"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#F8C3B9]/20 text-gray-600 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://wa.me/6281574627052"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#F8C3B9]/20 text-gray-600 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">WhatsApp</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@zephyr.7k"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#F8C3B9]/20 text-gray-600 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all"
            >
              <Music className="h-5 w-5" />
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#F8C3B9]/10 text-center">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} ZepWed. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
