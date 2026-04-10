import Link from "next/link"
import { INDUSTRIES } from "@/components/industry-data"

export function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            Industries
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl max-w-3xl text-balance">
            Domain-focused hiring and HR support for teams that need outcomes, not just resumes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <article
              key={industry.title}
              className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
              <Link
                href={`/industries/${industry.slug}`}
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
