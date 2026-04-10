import { Header } from "@/components/header"
import { Careers } from "@/components/careers"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Careers - APTO Management",
  description: "Join APTO Management and help shape impactful HR solutions for growing organizations.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Careers />
      </div>
      <Footer />
    </main>
  )
}
