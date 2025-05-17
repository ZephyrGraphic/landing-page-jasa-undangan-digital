import type React from "react"
import "@/app/globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ZepWed - Undangan Pernikahan Digital Premium",
  description: "Layanan pembuatan undangan pernikahan digital premium dengan desain eksklusif dan fitur lengkap",
  metadataBase: new URL("https://zepwed-diginvitation.vercel.app"),
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/favicon.png",
        sizes: "192x192",
      },
    ],
    apple: {
      url: "/favicon.png",
      sizes: "180x180",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://zepwed-diginvitation.vercel.app/",
    title: "ZepWed - Undangan Pernikahan Digital Premium",
    description: "Layanan pembuatan undangan pernikahan digital premium dengan desain eksklusif dan fitur lengkap",
    siteName: "ZepWed",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZepWed - Undangan Pernikahan Digital Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZepWed - Undangan Pernikahan Digital Premium",
    description: "Layanan pembuatan undangan pernikahan digital premium dengan desain eksklusif dan fitur lengkap",
    images: ["/og-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
