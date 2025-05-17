"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    quote:
      "Undangan digital kami mendapat banyak pujian dari tamu. Desainnya elegan dan fitur RSVP sangat membantu kami mendata kehadiran.",
    name: "Anindya & Rama",
    image: "/placeholder.svg?height=100&width=100",
    date: "Mei 2023",
  },
  {
    id: 2,
    quote:
      "Proses pembuatan sangat mudah dan hasilnya melebihi ekspektasi kami. Terima kasih telah membuat undangan pernikahan kami begitu spesial!",
    name: "Diana & Bima",
    image: "/placeholder.svg?height=100&width=100",
    date: "Agustus 2023",
  },
  {
    id: 3,
    quote:
      "Kami sangat puas dengan layanan yang diberikan. Undangan digital kami terlihat premium dan mendapat respon positif dari semua tamu.",
    name: "Putri & Arya",
    image: "/placeholder.svg?height=100&width=100",
    date: "Oktober 2023",
  },
  {
    id: 4,
    quote:
      "Desain yang sangat indah dan fitur yang lengkap. Proses pembuatan juga cepat dan tim sangat responsif terhadap revisi kami.",
    name: "Laras & Dimas",
    image: "/placeholder.svg?height=100&width=100",
    date: "Januari 2024",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (!mounted) return null

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Card className="border border-[#F8C3B9]/20 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-[#D4AF37]/30 mb-6" />
              <p className="text-lg md:text-xl text-gray-700 italic mb-8">"{testimonials[current].quote}"</p>
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#F8C3B9]/30">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-gray-800">{testimonials[current].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[current].date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:text-[#C9A633] hover:border-[#D4AF37]"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`w-3 h-3 p-0 rounded-full ${
              current === index
                ? "bg-[#D4AF37] border-[#D4AF37]"
                : "bg-transparent border-[#D4AF37]/30 hover:border-[#D4AF37]"
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:text-[#C9A633] hover:border-[#D4AF37]"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
