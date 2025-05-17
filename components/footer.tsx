"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, MessageSquare, Music } from "lucide-react"
import { motion } from "framer-motion"

// Import utility function
import { scrollToSection } from "@/utils/scroll-utils"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-indigo-500/20 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative w-10 h-10 mr-2"
              >
                <Image src="/icon.undangan.png" alt="ZepWed Logo" fill className="object-contain" />
              </motion.div>
              <div>
                <span className="ml-1 font-serif text-xl font-bold text-white">ZepWed</span>
                <span className="block text-xs text-indigo-300 -mt-1">Digital Invitation</span>
              </div>
            </Link>
            <p className="mt-2 text-sm text-slate-400">Undangan Pernikahan Digital Premium</p>
          </motion.div>

          <motion.nav
            className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="#hero"
              className="text-sm text-slate-300 hover:text-indigo-300 transition-colors relative group"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("hero")
              }}
            >
              Beranda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#gallery"
              className="text-sm text-slate-300 hover:text-indigo-300 transition-colors relative group"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("gallery")
              }}
            >
              Koleksi Tema
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#features"
              className="text-sm text-slate-300 hover:text-indigo-300 transition-colors relative group"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("features")
              }}
            >
              Keunggulan
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-slate-300 hover:text-indigo-300 transition-colors relative group"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("testimonials")
              }}
            >
              Testimoni
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm text-slate-300 hover:text-indigo-300 transition-colors relative group"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              Kontak
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.nav>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://www.instagram.com/zephyrax.zero"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-indigo-500/30 text-indigo-300 hover:text-indigo-200 hover:border-indigo-400 hover:bg-indigo-500/10 transition-all"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://wa.me/6281574627052"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-indigo-500/30 text-indigo-300 hover:text-indigo-200 hover:border-indigo-400 hover:bg-indigo-500/10 transition-all"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://www.tiktok.com/@zephyr.7k"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-indigo-500/30 text-indigo-300 hover:text-indigo-200 hover:border-indigo-400 hover:bg-indigo-500/10 transition-all"
              >
                <Music className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-indigo-500/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} ZepWed. Semua hak dilindungi.</p>
        </motion.div>
      </div>
    </footer>
  )
}
