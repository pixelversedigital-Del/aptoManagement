import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { HomeHighlights } from "@/components/home-highlights"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HomeHighlights />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
