import { Header } from "@/components/header"
import { Industries } from "@/components/industries"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Industries - APTO Management",
  description: "Explore the industries APTO serves with domain-specific HR and talent solutions.",
}

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Industries />
      </div>
      <Footer />
    </main>
  )
}
