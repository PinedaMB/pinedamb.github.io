import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { TooltipProvider } from "@/components/ui/tooltip"
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: {
    default: "Brayan Pineda DEV | Full Stack Developer",
    template: "%s | Brayan Pineda DEV",
  },
  description:
    "Portafolio de Brayan Pineda, desarrollador web y entusiasta de la tecnología.",
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
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://pinedamb.github.io/",
    siteName: "Brayan Pineda DEV",
    title: "Brayan Pineda DEV | Full Stack Developer",
    description:
      "Portafolio de Brayan Pineda, ingeniero en sistemas computacionales y desarrollador web full stack.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/74937204?v=4&size=100",
        width: 100,
        height: 100,
        alt: "Brayan Pineda Méndez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brayan Pineda DEV | Full Stack Developer",
    description:
      "Portafolio de Brayan Pineda, ingeniero en sistemas computacionales y desarrollador web full stack.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/74937204?v=4&size=100",
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
      lang="en"
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
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
