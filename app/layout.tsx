import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"]
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
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
