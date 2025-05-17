"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {invitationTemplates.map((template) => (
        <motion.div
          key={template.id}
          variants={item}
          onMouseEnter={() => setHoveredCard(template.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Card className="overflow-hidden border border-[#F8C3B9]/20 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <Link href={template.url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="secondary" className="w-full bg-white/90 hover:bg-white text-gray-800 font-medium">
                    Lihat Undangan
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="font-serif text-xl text-gray-800">{template.title}</CardTitle>
              <CardDescription className="text-gray-600">{template.description}</CardDescription>
            </CardHeader>
            <CardFooter className="pt-0 mt-auto">
              <Link href={template.url} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:text-[#C9A633] hover:border-[#D4AF37]"
                >
                  Lihat Undangan
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
