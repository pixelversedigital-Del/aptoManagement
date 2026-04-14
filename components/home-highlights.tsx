import Link from "next/link"
import Image from "next/image"
import talentWorkflowVisual from "@/assets/images/talent-workflow-visual.svg"

const focusAreas = [
  {
    title: "Permanent Recruitment",
    description: "Build stable, high-performing teams with long-term hiring support tailored to your organization.",
  },
  {
    title: "Staffing Solutions",
    description: "Scale teams quickly with flexible staffing models aligned to your project and business needs.",
  },
  {
    title: "Resume ATS Solutions",
    description: "Filter high-volume applications faster and surface the right talent with ATS-enabled screening workflows.",
  },
]

export function HomeHighlights() {
  return (
    <section className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Our Secret</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Find the right talent, every single time.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed text-pretty">
              Our sourcing methodology is built to identify relevant profiles quickly while staying aligned with your culture, role expectations, and business goals.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors glow-on-hover"
            >
              Speak to an Expert
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 hover-lift animate-fade-up">
            <div className="mb-6 overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={talentWorkflowVisual}
                alt="Talent sourcing workflow illustration"
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Find Talent Effortlessly</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Backed by over 25 years of combined expertise, we help you move from resume overload to confident hiring decisions with speed and precision.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Faster shortlisting with role-specific screening
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Better candidate quality through focused sourcing
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Workforce support aligned to growth strategy
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Core Focus Areas</p>
          <h3 className="max-w-3xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Hire top talent with practical, technology-enabled recruitment support.
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.title} className="rounded-2xl border border-border bg-background p-6 hover-lift animate-fade-up">
                <h4 className="text-lg font-semibold text-foreground">{area.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
