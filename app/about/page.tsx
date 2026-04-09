import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'About Us - APTO Management',
  description: 'Learn about APTO Management Services - 25+ years of HR excellence with a human-first approach.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </main>
  )
}
