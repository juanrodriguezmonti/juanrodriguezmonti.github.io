import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Juan Rodriguez Monti - Engineering Leader",
  description:
    "Software Engineering Manager with 20+ years leading high-impact teams, cloud architecture, and scalable systems. Currently at RELP leading 10 engineers.",
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://juanrodriguezmonti.github.io' : 'http://localhost:3000'),
  icons: {
    icon: process.env.NODE_ENV === 'production' ? '/juanrodriguezmonti.github.io/favicon.ico' : '/favicon.ico',
  },
  keywords: [
    "Engineering Leadership",
    "Cloud Architecture",
    "AWS",
    "FastAPI",
    "Python",
    "Team Management",
    "Software Engineering Manager",
  ],
  authors: [{ name: "Juan Rodriguez Monti" }],
  openGraph: {
    title: "Juan Rodriguez Monti - Engineering Leader",
    description: "Software Engineering Manager with 20+ years leading high-impact teams and cloud architecture",
    url: process.env.NODE_ENV === 'production' ? 'https://juanrodriguezmonti.github.io' : 'http://localhost:3000',
    siteName: "Juan Rodriguez Monti",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Rodriguez Monti - Engineering Leader",
    description: "Software Engineering Manager with 20+ years leading high-impact teams and cloud architecture",
    images: ["/og-image.png"],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
