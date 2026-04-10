import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { INDUSTRIES } from "@/components/industry-data"

type IndustryPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }))
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params
  const industry = INDUSTRIES.find((item) => item.slug === slug)

  if (!industry) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Industry Focus</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {industry.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            {industry.description}
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
