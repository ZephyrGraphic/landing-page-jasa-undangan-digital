"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="border border-[#F8C3B9]/20 shadow-sm hover:shadow-md transition-all duration-300 h-full">
        <CardHeader className="pb-2 flex flex-row items-center gap-4">
          <div className="p-2 rounded-full bg-[#FFF9F9] border border-[#F8C3B9]/20">{icon}</div>
          <h3 className="font-serif text-xl font-semibold text-gray-800">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
