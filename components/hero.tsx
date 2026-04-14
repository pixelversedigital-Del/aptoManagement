import Link from "next/link"
import Image from "next/image"
import heroTeamVisual from "@/assets/images/hero-team-visual.svg"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-6">
              HR Management Solutions
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
              Where deep HR
              <span className="text-muted-foreground"> meets</span>
              <br />
              a human mindset.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              We are a collective of curious and passionate HR professionals bound together by our deep expertise, 
              our human-centric mindset and a passion for using technology to drive workforce transformation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#services"
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-accent transition-all hover:scale-105 glow-on-hover"
              >
                Explore Services
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-border bg-transparent px-8 py-4 text-sm font-semibold text-foreground hover:bg-muted transition-colors glow-on-hover"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className="flex-1 mt-16 lg:mt-0 animate-fade-up">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <Image
                  src={heroTeamVisual}
                  alt="APTO recruitment team visual"
                  className="absolute inset-0 h-full w-full object-cover opacity-45 animate-float-soft"
                  priority
                />
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="bg-muted rounded-xl p-6 border border-border hover-lift">
                      <div className="text-3xl font-bold text-primary">25+</div>
                      <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                    </div>
                    <div className="bg-muted rounded-xl p-6 border border-border hover-lift">
                      <div className="text-3xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground mt-1">Clients Served</div>
                    </div>
                    <div className="bg-muted rounded-xl p-6 border border-border hover-lift">
                      <div className="text-3xl font-bold text-primary">10K+</div>
                      <div className="text-sm text-muted-foreground mt-1">Placements Made</div>
                    </div>
                    <div className="bg-muted rounded-xl p-6 border border-border hover-lift">
                      <div className="text-3xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground mt-1">Client Retention</div>
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
