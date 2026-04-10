"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import aptoLogo from "@/assets/images/Apto_Logo_DarkBG.svg"
import { INDUSTRIES } from "@/components/industry-data"
import { SERVICE_PAGES } from "@/components/service-data"

export function Footer() {
  const [email, setEmail] = useState("")
  const year = new Date().getFullYear()

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12 rounded-3xl border border-border bg-card p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center">
                <Image src={aptoLogo} alt="APTO Management" className="h-10 w-auto" />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                APTO Management Services helps organizations build high-performing teams with practical HR and talent solutions.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="mt-6">
                <label htmlFor="newsletter" className="mb-2 block text-sm font-medium text-foreground">
                  Subscribe to APTO Newsletter
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    id="newsletter"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-border bg-muted px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    <li><Link href="/" className="text-sm text-foreground transition-colors hover:text-primary">Home</Link></li>
                    <li><Link href="/about/about-apto" className="text-sm text-foreground transition-colors hover:text-primary">About Apto</Link></li>
                    <li><Link href="/about/apto-advantage" className="text-sm text-foreground transition-colors hover:text-primary">Apto Advantage</Link></li>
                    <li><Link href="/about/our-clients" className="text-sm text-foreground transition-colors hover:text-primary">Our Clients</Link></li>
                    <li><Link href="/about/our-methodology" className="text-sm text-foreground transition-colors hover:text-primary">Our Methodology</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Services
                  </h4>
                  <ul className="space-y-3">
                    {SERVICE_PAGES.map((service) => (
                      <li key={service.slug}>
                        <Link href={`/services/${service.slug}`} className="text-sm text-foreground transition-colors hover:text-primary">
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Industries
                  </h4>
                  <ul className="space-y-3">
                    {INDUSTRIES.slice(0, 5).map((industry) => (
                      <li key={industry.slug}>
                        <Link href={`/industries/${industry.slug}`} className="text-sm text-foreground transition-colors hover:text-primary">
                          {industry.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/industries" className="text-sm font-medium text-primary transition-colors hover:underline">
                        View all industries
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{year} APTO Management Services. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/careers" className="transition-colors hover:text-primary">Careers</Link>
            <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
            <a href="mailto:info@aptoservices.com" className="transition-colors hover:text-primary">info@aptoservices.com</a>
            <a href="tel:+911206970897" className="transition-colors hover:text-primary">+91 120 6870897</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
