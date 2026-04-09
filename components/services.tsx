"use client"

import { useState } from "react"

const services = [
  {
    id: "talent",
    title: "Talent Acquisition",
    description: "Our team of professional consultants are adept at bridging the gap in the talent employment market. We leverage cutting-edge AI-powered tools and our extensive network to find the perfect candidates for your organization.",
    features: ["Executive Search", "Campus Recruitment", "Lateral Hiring", "Diversity Hiring"],
  },
  {
    id: "payroll",
    title: "Payroll Management",
    description: "We are one of the leading payroll management organizations with years of extensive experience. Our comprehensive solutions ensure accuracy, compliance, and timely processing for organizations of all sizes.",
    features: ["Salary Processing", "Tax Compliance", "Benefits Administration", "Statutory Compliance"],
  },
  {
    id: "staffing",
    title: "Staffing Solutions",
    description: "APTO ensures an array of job opportunities are filled with skilled professionals across different sectors including banking, pharmaceutical, digital marketing, sales, research, and education.",
    features: ["Contract Staffing", "Permanent Staffing", "Temp-to-Hire", "Project-Based Hiring"],
  },
  {
    id: "rpo",
    title: "RPO Solutions",
    description: "Customisable, scalable and flexible Recruitment Process Outsourcing solutions that optimise candidate quality and improve business performance with significantly lower costs.",
    features: ["End-to-End RPO", "Project RPO", "On-Demand RPO", "Hybrid Solutions"],
  },
  {
    id: "consulting",
    title: "HR Consulting",
    description: "Strategic HR consulting services to help organizations build robust people practices, optimize workforce planning, and create a culture of excellence.",
    features: ["HR Strategy", "Organization Design", "Change Management", "HR Technology"],
  },
  {
    id: "compliance",
    title: "Compliance & Legal",
    description: "Navigate the complex landscape of employment laws and regulations with our expert compliance services ensuring your organization stays protected.",
    features: ["Labor Law Compliance", "Policy Framework", "Audit Support", "Risk Management"],
  },
]

export function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            What we do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl max-w-3xl text-balance">
            Our collection of HR services spans various needs at every stage of 
            <span className="text-muted-foreground"> your transformation process.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-md bg-primary/30" />
                </div>
                <button
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors"
                  aria-label={expandedService === service.id ? "Collapse" : "Expand"}
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${expandedService === service.id ? "rotate-45" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedService === service.id ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-4 border-t border-border">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <p className="mt-4 text-sm font-medium text-primary group-hover:underline">
                .read more
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
