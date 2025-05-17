import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ZepWed - Undangan Pernikahan Digital Premium",
    short_name: "ZepWed",
    description: "Layanan pembuatan undangan pernikahan digital premium dengan desain eksklusif dan fitur lengkap",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
