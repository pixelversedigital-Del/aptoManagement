import Link from "next/link"

export function Careers() {
  return (
    <section id="careers" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-border">
          {/* Left side - Image/Content */}
          <div className="relative min-h-[400px] lg:min-h-[600px] bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative h-full flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance">
                  Want to transform your HR operations?
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  We are the HR artisans of APTO Management Services - a leading HR consultancy helping countless 
                  organisations succeed in their most important and strategic transformations.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                In our collective, there is always room for more people with that delicious combination 
                of expertise and infectious energy.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-foreground bg-transparent px-6 py-3 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors w-fit"
              >
                Join the collective
              </Link>
            </div>
          </div>
          
          {/* Right side - Stats and Features */}
          <div className="bg-background p-8 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-6">
              Join us
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-balance">
              Delivering the right workforce solutions, right on time
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Speed & Efficiency</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our streamlined processes and extensive talent pool enable rapid deployment of qualified candidates.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Compliance Assured</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Stay protected with our comprehensive compliance management across all labor laws and regulations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Scalable Growth</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Flexible solutions that grow with your organization, from startups to enterprise-level operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
