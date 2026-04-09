import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "APTO Management Services | HR & Talent Solutions",
  description: "Transform your workforce with APTO's comprehensive HR management, staffing solutions, payroll services, and executive search. 25+ years of expertise in talent acquisition.",
  keywords: ["HR management", "staffing solutions", "talent acquisition", "payroll services", "executive search", "recruitment"],
  openGraph: {
    title: "APTO Management Services | HR & Talent Solutions",
    description: "Transform your workforce with APTO's comprehensive HR management solutions.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
