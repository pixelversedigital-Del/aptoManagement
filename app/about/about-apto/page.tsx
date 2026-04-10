import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Apto - APTO Management",
  description: "Discover APTO Management's mission, values, and commitment to people-first HR transformation.",
}

export default function AboutAptoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">About Apto</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            We help organizations build stronger teams with clarity, speed, and care.
          </h1>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            APTO Management delivers end-to-end HR and talent solutions backed by practical expertise and a
            human-first approach. From strategic hiring to workforce transformation, our focus is to create
            long-term value for both companies and professionals.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
