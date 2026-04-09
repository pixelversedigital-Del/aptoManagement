import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Services - APTO Management',
  description: 'Comprehensive HR services including talent acquisition, payroll management, staffing solutions, RPO, HR consulting, and compliance.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Services />
      </div>
      <Footer />
    </main>
  )
}
