import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Our Methodology - APTO Management",
  description: "Explore APTO's practical methodology for planning, hiring, and scaling workforce outcomes.",
}

const steps = [
  {
    title: "Discover",
    description: "We assess hiring goals, team structure, role context, and business timelines.",
  },
  {
    title: "Design",
    description: "We define the hiring plan, sourcing strategy, and process checkpoints.",
  },
  {
    title: "Deliver",
    description: "We execute with speed, quality calibration, and stakeholder alignment.",
  },
  {
    title: "Develop",
    description: "We optimize continuously using insights, feedback, and performance data.",
  },
]

export default function OurMethodologyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Our Methodology</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
            A structured approach that balances business urgency with hiring quality.
          </h1>
          <div className="space-y-4">
            {steps.map((step) => (
              <article key={step.title} className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-foreground mb-2">{step.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
