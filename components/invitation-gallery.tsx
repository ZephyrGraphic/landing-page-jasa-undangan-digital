"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Search, Filter } from "lucide-react"

// Definisikan tipe untuk template undangan
type InvitationTemplate = {
  id: number
  title: string
  description: string
  image: string
  url: string
  category: "1 Frame" | "2 Frame" | string
}

// Data template undangan
const invitationTemplates: InvitationTemplate[] = [
  // Kategori 1 Frame (10 tema original)
  {
    id: 1,
    title: "Art Deco Elegance",
    description: "Kemewahan era 1920-an dengan sentuhan modern",
    image: "/images/art-deco.png",
    url: "https://art-deco-template.vercel.app",
    category: "1 Frame",
  },
  {
    id: 2,
    title: "Bali Traditional",
    description: "Keindahan budaya Bali dalam undangan digital",
    image: "/images/bali-traditional.png",
    url: "https://balinese-traditional-template.vercel.app",
    category: "1 Frame",
  },
  {
    id: 3,
    title: "Coastal Minimalism",
    description: "Kesederhanaan pantai dengan nuansa biru lembut",
    image: "/images/coastal-minimalism.png",
    url: "https://coastal-minimalism-template.vercel.app",
    category: "1 Frame",
  },
  {
    id: 4,
    title: "Christian Cathedral",
    description: "Keanggunan katedral dengan sentuhan klasik",
    image: "/images/christian-cathedral.png",
    url: "https://christian-cathedral-template.vercel.app",
    category: "1 Frame",
  },
  {
    id: 5,
    title: "Starlit Galaxy",
    description: "Keajaiban langit malam dan bintang-bintang",
    image: "/images/starlit-galaxy.png",
    url: "https://starlit-galaxy-template.vercel.app",
    category: "1 Frame",
  },
  {
    id: 6,
    title: "Interactive Journey",
    description: "Cerita cinta yang interaktif dengan timeline",
    image: "/images/interactive-journey.png",
    url: "https://interactive-journey-timeline-template.vercel.app",
    category: "1 Frame",
  },
  {
    id: 7,
    title: "Zen Garden Minimalist",
    description: "Ketenangan dan kesederhanaan zen Jepang",
    image: "/images/zen-garden-minimalist.png",
    url: "https://zen-garden-minimalist-template.vercel.app",
    category: "1 Frame",
  },
  {
    id: 8,
    title: "Vintage Theater",
    description: "Nostalgia teater klasik dengan sentuhan vintage",
    image: "/images/vintage-theater.png",
    url: "https://vintage-theater-template.vercel.app",
    category: "1 Frame",
  },
  {
    id: 9,
    title: "Islamic Geometric",
    description: "Keindahan pola geometris Islami yang elegan",
    image: "/images/islamic-geometric.png",
    url: "https://islamic-geometric-elegance.vercel.app",
    category: "1 Frame",
  },
  {
    id: 10,
    title: "Scandinavian Woodland",
    description: "Kesederhanaan alam dengan sentuhan Skandinavia",
    image: "/images/scandinavian-woodland.png",
    url: "https://scandinavian-woodland-template.vercel.app",
    category: "1 Frame",
  },

  // Kategori 2 Frame (3 tema baru dengan gambar asli)
  {
    id: 11,
    title: "Pastel Bloom",
    description: "Keanggunan bunga pastel dengan layout dua frame",
    image: "/images/pastel-bloom.png",
    url: "https://pastel-bloom-template.vercel.app/",
    category: "2 Frame",
  },
  {
    id: 12,
    title: "Ethereal Dust",
    description: "Nuansa mistis dengan efek debu yang eteral",
    image: "/images/ethereal-dust.png",
    url: "https://ethereal-dust-template.vercel.app/",
    category: "2 Frame",
  },
  {
    id: 13,
    title: "Coastal Dream",
    description: "Keindahan pantai dengan layout dua frame yang elegan",
    image: "/images/coastal-dream.png",
    url: "https://coastal-template.vercel.app/",
    category: "2 Frame",
  },
]

export function InvitationGallery() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [filteredTemplates, setFilteredTemplates] = useState<InvitationTemplate[]>(invitationTemplates)
  const [isLoaded, setIsLoaded] = useState(false)

  // Update filtered templates when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredTemplates(invitationTemplates)
    } else {
      setFilteredTemplates(invitationTemplates.filter((template) => template.category === activeCategory))
    }
  }, [activeCategory])

  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Kategori unik untuk filter
  const categories = ["all", ...Array.from(new Set(invitationTemplates.map((template) => template.category)))]

  return (
    <>
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-indigo-400" />
          <h3 className="text-lg font-medium text-white">Filter Kategori</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                  : "border-indigo-500/20 bg-indigo-500/10 text-indigo-100 hover:bg-indigo-500/20 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "all" ? "Semua Tema" : category}
              <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                {category === "all"
                  ? invitationTemplates.length
                  : invitationTemplates.filter((t) => t.category === category).length}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {isLoaded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredTemplates.map((template) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredCard(template.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden border border-indigo-500/20 bg-slate-900/60 backdrop-blur-sm shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <div className="w-full h-full bg-slate-800/50 absolute z-0"></div>
                  <Image
                    src={template.image || "/placeholder.svg"}
                    alt={template.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out z-10"
                    style={{
                      transform: hoveredCard === template.id ? "scale(1.05)" : "scale(1)",
                    }}
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=600&width=400"
                    }}
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                        template.category === "1 Frame" ? "bg-emerald-600/80 text-white" : "bg-purple-600/80 text-white"
                      }`}
                    >
                      {template.category}
                    </span>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex items-end justify-center p-4 z-20 transition-opacity duration-300 ${
                      hoveredCard === template.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Link href={template.url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="secondary"
                          className="w-full bg-indigo-600/90 hover:bg-indigo-700 text-white font-medium"
                        >
                          Lihat Undangan
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </Link>
                  </div>

                  {/* Preview button */}
                  <div
                    className={`absolute top-4 right-4 z-20 transition-opacity duration-300 ${
                      hoveredCard === template.id ? "opacity-100" : "opacity-0"
                    }`}
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
                  </div>
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
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Tampilkan pesan jika tidak ada hasil filter */}
      {isLoaded && filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">Tidak ada tema yang ditemukan untuk kategori ini.</p>
        </div>
      )}

      {/* Loading state */}
      {!isLoaded && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">Memuat tema undangan...</p>
        </div>
      )}
    </>
  )
}
