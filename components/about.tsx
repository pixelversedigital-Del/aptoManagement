import Link from "next/link"

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              About Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
              Dedicated to People, Culture & Growth.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              APTO Management Services is a premier HR solutions provider where businesses and people come to define who they are, 
              sharpen their vision, and carve out what&apos;s next.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              We help organizations find their voice through strategic talent management and people consulting. 
              And we help professionals own their careers - because when life and work move in sync, 
              the best outcomes don&apos;t just happen, they flow. That&apos;s why we created our integrated 
              approach to HR - a new way to pause, reset, and spark the thinking that fuels not just 
              careers, but whole ways of being.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="font-medium text-foreground">Our Services</span>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="font-medium text-foreground">Meet the Team</span>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="font-medium text-foreground">Our Approach</span>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="font-medium text-foreground">Case Studies</span>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="h-full flex flex-col justify-end p-8">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Quick Turnaround</h4>
                      <p className="text-sm text-muted-foreground">Average time-to-fill of 21 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Quality Assured</h4>
                      <p className="text-sm text-muted-foreground">98% client satisfaction rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
