import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Our Clients - APTO Management",
  description: "See the kinds of organizations APTO supports with strategic HR and workforce solutions.",
}

const clientTypes = [
  "High-growth startups scaling core teams",
  "Mid-size firms optimizing workforce operations",
  "Large enterprises with multi-location hiring needs",
  "Sector-specific organizations with compliance-heavy hiring",
]

export default function OurClientsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Our Clients</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Trusted by organizations that value people, performance, and progress.
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
            We partner with businesses at different growth stages and tailor delivery to their hiring model,
            internal maturity, and industry context.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clientTypes.map((item) => (
              <li key={item} className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
