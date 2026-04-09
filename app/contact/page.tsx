import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Contact Us - APTO Management',
  description: 'Get in touch with APTO Management Services for all your HR needs.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
