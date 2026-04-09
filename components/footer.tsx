"use client"

import { useState } from "react"
import Link from "next/link"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-semibold text-foreground">
              .apto
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Transforming the world of talent management with 25+ years of expertise.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="mt-6">
              <label htmlFor="newsletter" className="text-sm font-medium text-foreground mb-2 block">
                APTO Newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="flex-1 bg-muted border border-border rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-sm text-foreground hover:text-primary transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
                  Talent Acquisition
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
                  Payroll Management
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
                  Staffing Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
                  RPO Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
                  HR Consulting
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:info@aptoservices.com" className="text-sm text-foreground hover:text-primary transition-colors">
                  info@aptoservices.com
                </a>
              </li>
              <li>
                <a href="tel:+911204296319" className="text-sm text-foreground hover:text-primary transition-colors">
                  +91 120 4296319
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Large Brand Mark */}
        <div className="flex justify-center py-12 mb-8">
          <div className="text-8xl lg:text-[12rem] font-bold text-primary/10 tracking-tighter select-none">
            APTO
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            2024 All Right Reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            APTO Management Services. Dedicated to People, Culture & Growth.
          </p>
        </div>
      </div>
    </footer>
  )
}
