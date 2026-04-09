import { Header } from "@/components/header"
import { Solutions } from "@/components/solutions"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Solutions - APTO Management',
  description: 'Transform your workforce with our innovative HR solutions and cutting-edge technology.',
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Solutions />
      </div>
      <Footer />
    </main>
  )
}
