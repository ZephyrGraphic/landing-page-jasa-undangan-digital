"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1, threshold: 0.1 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!autoplay || !isInView) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, isInView])

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
    <motion.div
      className="relative max-w-4xl mx-auto"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.5,
          }}
          className="relative"
        >
          <Card className="border border-indigo-500/20 bg-slate-900/60 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Quote className="h-12 w-12 text-indigo-500/40 mb-6" />
              </motion.div>
              <motion.p
                className="text-lg md:text-xl text-slate-200 italic mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                "{testimonials[current].quote}"
              </motion.p>
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div
                  className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-indigo-500/30"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-white">{testimonials[current].name}</h4>
                  <p className="text-sm text-slate-400">{testimonials[current].date}</p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-8 gap-2">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="rounded-full border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:text-indigo-200 hover:border-indigo-400"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
        </motion.div>

        {testimonials.map((_, index) => (
          <motion.div key={index} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
              className={`w-3 h-3 p-0 rounded-full ${
                current === index
                  ? "bg-indigo-500 border-indigo-500"
                  : "bg-transparent border-indigo-500/30 hover:border-indigo-400"
              }`}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          </motion.div>
        ))}

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="rounded-full border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:text-indigo-200 hover:border-indigo-400"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
