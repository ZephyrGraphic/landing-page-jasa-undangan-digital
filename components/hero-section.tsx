"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const { scrollY } = useScroll()

  // Parallax effect values
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <motion.div
        className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-950/90 to-purple-900/85 backdrop-blur-sm"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6TTYgNHY2aDZ2LTZINnptMCAzMHY2aDZ2LTZINnptMCAxNXY2aDZ2LTZINnptMTUgMHY2aDZ2LTZoLTZ6bTE1IDB2Nmg2di02aC02em0xNSAwdjZoNnYtNmgtNnptMC0xNXY2aDZ2LTZoLTZ6bTAtMTV2Nmg2di02aC02em0tMzAgMHY2aDZ2LTZoLTZ6bTE1LTE1djZoNnYtNmgtNnptLTE1IDB2Nmg2di02aC02em0zMCAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-500/30"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div className="container mx-auto px-4 md:px-8 relative z-10" style={{ opacity, scale }} ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <div className="inline-flex items-center justify-center p-1 px-3 text-sm rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 text-indigo-200 backdrop-blur-md border border-indigo-500/10">
              <Sparkles className="h-3.5 w-3.5 mr-2 text-indigo-300" />
              <span>Undangan Digital Premium</span>
            </div>
          </motion.div>

          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
              Undangan Pernikahan Digital
            </span>{" "}
            <span className="text-white">untuk Momen Sekali Seumur Hidup</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-indigo-100/80 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Pilih dari berbagai tema eksklusif yang siap pakai dan dapat dikostumisasi dengan teknologi terkini.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#gallery">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10">Lihat Koleksi Undangan</span>
                <motion.span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></motion.span>
                <motion.div
                  className="absolute right-4 z-10"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  <Sparkles className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </Link>

            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-400/30 text-indigo-200 hover:bg-indigo-500/10 hover:text-indigo-100 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
              >
                <span>Keunggulan Kami</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
          }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-indigo-200 text-sm mb-2">Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="h-6 w-6 text-indigo-300" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
