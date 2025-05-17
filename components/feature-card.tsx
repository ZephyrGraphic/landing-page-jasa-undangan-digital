"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index: number
}

export function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Card className="border border-indigo-500/20 bg-slate-900/60 backdrop-blur-sm shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 h-full">
        <CardHeader className="pb-2 flex flex-row items-center gap-4">
          <motion.div
            className="p-2 rounded-full bg-indigo-500/10 border border-indigo-500/20"
            whileHover={{
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.5 },
            }}
          >
            {icon}
          </motion.div>
          <h3 className="font-serif text-xl font-semibold text-white">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
