"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"
// Import utility function
import { scrollToSection } from "@/utils/scroll-utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ["hero", "gallery", "features", "testimonials", "contact"]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop
        const height = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Jangan tutup menu jika yang diklik adalah tombol menu itu sendiri
      const target = e.target as HTMLElement
      if (target.closest("button") && target.closest("button")?.getAttribute("aria-label") === "Toggle menu") {
        return
      }

      // Jangan tutup menu jika yang diklik adalah link navigasi
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        return
      }

      setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: "#hero", label: "Beranda" },
    { href: "#gallery", label: "Koleksi Tema" },
    { href: "#features", label: "Keunggulan" },
    { href: "#testimonials", label: "Testimoni" },
    { href: "#contact", label: "Kontak" },
  ]

  // Gunakan utility function untuk semua link navigasi
  const handleScrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    e?.preventDefault()
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-2 bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-indigo-500/10"
          : "py-4 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative w-10 h-10 mr-3"
            >
              <Image src="/icon.undangan.png" alt="ZepWed Logo" fill className="object-contain" />
            </motion.div>
            <div className="ml-1">
              <span className="font-serif text-xl font-bold text-white">ZepWed</span>
              <span className="block text-xs text-indigo-300 -mt-1">Digital Invitation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-white bg-indigo-500/20 font-medium"
                    : "text-slate-300 hover:text-white hover:bg-indigo-500/10"
                }`}
                onClick={(e) => handleScrollToSection(link.href.substring(1), e)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="#gallery">
              <Button
                variant="ghost"
                size="sm"
                className="text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/10"
              >
                Demo
              </Button>
            </Link>
            <Link href="https://wa.me/6281574627052" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-5 py-2 text-sm font-medium shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group"
              >
                <span>Konsultasi</span>
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-indigo-500/20 text-indigo-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 bg-slate-900/95 backdrop-blur-md shadow-lg border-t border-indigo-500/10">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm rounded-lg transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-white bg-indigo-500/20 font-medium"
                    : "text-slate-300 hover:text-white hover:bg-indigo-500/10"
                }`}
                onClick={(e) => handleScrollToSection(link.href.substring(1), e)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-indigo-500/10 flex flex-col space-y-3">
              <Link href="#gallery" onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/10"
                >
                  Demo
                </Button>
              </Link>
              <Link
                href="https://wa.me/6281574627052"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  <span>Konsultasi</span>
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  )
}
