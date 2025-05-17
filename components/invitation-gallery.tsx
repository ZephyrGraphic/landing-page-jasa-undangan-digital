"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Search } from "lucide-react"

const invitationTemplates = [
  {
    id: 1,
    title: "Art Deco Elegance",
    description: "Kemewahan era 1920-an dengan sentuhan modern",
    image: "/images/art-deco.png",
    url: "https://art-deco-template.vercel.app",
  },
  {
    id: 2,
    title: "Bali Traditional",
    description: "Keindahan budaya Bali dalam undangan digital",
    image: "/images/bali-traditional.png",
    url: "https://balinese-traditional-template.vercel.app",
  },
  {
    id: 3,
    title: "Coastal Minimalism",
    description: "Kesederhanaan pantai dengan nuansa biru lembut",
    image: "/images/coastal-minimalism.png",
    url: "https://coastal-minimalism-template.vercel.app",
  },
  {
    id: 4,
    title: "Christian Cathedral",
    description: "Keanggunan katedral dengan sentuhan klasik",
    image: "/images/christian-cathedral.png",
    url: "https://christian-cathedral-template.vercel.app",
  },
  {
    id: 5,
    title: "Starlit Galaxy",
    description: "Keajaiban langit malam dan bintang-bintang",
    image: "/images/starlit-galaxy.png",
    url: "https://starlit-galaxy-template.vercel.app",
  },
  {
    id: 6,
    title: "Interactive Journey",
    description: "Cerita cinta yang interaktif dengan timeline",
    image: "/images/interactive-journey.png",
    url: "https://interactive-journey-timeline-template.vercel.app",
  },
  {
    id: 7,
    title: "Zen Garden Minimalist",
    description: "Ketenangan dan kesederhanaan zen Jepang",
    image: "/images/zen-garden-minimalist.png",
    url: "https://zen-garden-minimalist-template.vercel.app",
  },
  {
    id: 8,
    title: "Vintage Theater",
    description: "Nostalgia teater klasik dengan sentuhan vintage",
    image: "/images/vintage-theater.png",
    url: "https://vintage-theater-template.vercel.app",
  },
  {
    id: 9,
    title: "Islamic Geometric",
    description: "Keindahan pola geometris Islami yang elegan",
    image: "/images/islamic-geometric.png",
    url: "https://islamic-geometric-elegance.vercel.app",
  },
  {
    id: 10,
    title: "Scandinavian Woodland",
    description: "Kesederhanaan alam dengan sentuhan Skandinavia",
    image: "/images/scandinavian-woodland.png",
    url: "https://scandinavian-woodland-template.vercel.app",
  },
]

export function InvitationGallery() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        <Button
          variant="outline"
          className="rounded-full border-indigo-500/20 bg-indigo-500/10 text-indigo-100 hover:bg-indigo-500/20 hover:text-white"
        >
          Semua Tema
        </Button>
        <Button variant="ghost" className="rounded-full text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-100">
          Minimalis
        </Button>
        <Button variant="ghost" className="rounded-full text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-100">
          Tradisional
        </Button>
        <Button variant="ghost" className="rounded-full text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-100">
          Modern
        </Button>
        <Button variant="ghost" className="rounded-full text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-100">
          Religius
        </Button>
      </motion.div>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {invitationTemplates.map((template) => (
          <motion.div
            key={template.id}
            variants={item}
            onMouseEnter={() => setHoveredCard(template.id)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -10 }}
          >
            <Card className="overflow-hidden border border-indigo-500/20 bg-slate-900/60 backdrop-blur-sm shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col">
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src={template.image || "/placeholder.svg"}
                  alt={template.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoveredCard === template.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredCard === template.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={template.url} target="_blank" rel="noopener noreferrer" className="w-full">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="secondary"
                        className="w-full bg-indigo-600/90 hover:bg-indigo-700 text-white font-medium"
                      >
                        Lihat Undangan
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                        >
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Preview button */}
                <motion.div
                  className="absolute top-4 right-4 z-10"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredCard === template.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white"
                    >
                      <Search className="h-5 w-5" />
                      <span className="sr-only">Preview</span>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="font-serif text-xl text-white">{template.title}</CardTitle>
                <CardDescription className="text-slate-300">{template.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-0 mt-auto">
                <Link href={template.url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      variant="outline"
                      className="w-full border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:text-indigo-200 hover:border-indigo-400 transition-all duration-300"
                    >
                      Lihat Undangan
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      >
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
