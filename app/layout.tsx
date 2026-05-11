import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { LanguageProvider } from "@/context/LanguageContext"
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  title: {
    default: "Brayan Pineda DEV | Full Stack Developer",
    template: "%s | Brayan Pineda DEV",
  },
  description:
    "Portafolio de Brayan Pineda, especialista en desarrollo web y aplicaciones de software.",
  keywords: [
    "Brayan Pineda Méndez",
    "Full Stack Developer",
    "Portafolio",
    "Tecnología",
    "Desarrollo Web",
    "Desarrollo de Aplicaciones",
    "Desarrollo de Sistemas",
    "Desarrollo de Software",
    "Mérida México",
    "Ingeniero en Sistemas Computacionales",
  ],
  authors: [{ name: "Brayan Pineda Méndez" }],
  creator: "Brayan Pineda Méndez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pinedamb.github.io"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "Brayan Pineda DEV",
    title: "Brayan Pineda DEV | Ingeniero en Sistemas Computacionales",
    description:
      "Portafolio de Brayan Pineda, ingeniero en sistemas computacionales, con amplia experiencia en el desarrollo de soluciones tecnológicas.",
    images: [
      {
        url: "/meta_cover.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Brayan Pineda, especialista en desarrollo web y aplicaciones de software.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brayan Pineda DEV | Ingeniero en Sistemas Computacionales",
    description:
      "Portafolio de Brayan Pineda, ingeniero en sistemas computacionales, con amplia experiencia en el desarrollo de soluciones tecnológicas.",
    images: [
      {
        url: "/meta_cover.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Brayan Pineda, especialista en desarrollo web y aplicaciones de software.",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="flex min-h-screen items-center justify-center bg-black p-4">
        <ThemeProvider>
          <TooltipProvider>
            <LanguageProvider>{children}</LanguageProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
