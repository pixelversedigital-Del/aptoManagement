import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Apto Advantage - APTO Management",
  description: "Learn what makes APTO different: domain expertise, agile delivery, and measurable outcomes.",
}

const advantages = [
  "Domain-aware recruiters and HR consultants",
  "Faster turnaround with quality-focused shortlists",
  "Scalable support across hiring cycles and growth stages",
  "Transparent communication and measurable outcomes",
]

export default function AptoAdvantagePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Apto Advantage</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
            The advantage is not just finding talent. It is building dependable capability.
          </h1>
          <ul className="space-y-4">
            {advantages.map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
