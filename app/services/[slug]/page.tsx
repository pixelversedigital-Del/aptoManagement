import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SERVICE_PAGES } from "@/components/service-data"

type ServicePageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return SERVICE_PAGES.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = SERVICE_PAGES.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Service Focus</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {service.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            {service.description}
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
