"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,255,255,0.9)] to-[rgba(255,245,245,0.85)] backdrop-blur-sm"></div>

        {/* Gold sparkle effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#F8C3B9] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Undangan Pernikahan Digital Premium untuk Momen Sekali Seumur Hidup
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pilih dari berbagai tema eksklusif yang siap pakai dan dapat dikostumisasi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="#gallery">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#D4AF37] to-[#E6C770] hover:from-[#C9A633] hover:to-[#D4AF37] text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span>Lihat Koleksi Undangan</span>
                <Sparkles className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
