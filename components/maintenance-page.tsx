"use client"

import { useState } from "react"

const CONTACT_EMAIL = "info@aptoservices.com"
const CONTACT_PHONE = "+91 120 687 0897"
const CONTACT_PHONE_LINK = "+911206870897"
const CONTACT_LOCATION =
  "401, 402, 4th Floor, Ithum Heights, Sector 62, Noida, UP - 201309"

type EnquiryFormData = {
  firstName: string
  lastName: string
  email: string
  organization: string
  role: string
  message: string
}

const initialFormData: EnquiryFormData = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  role: "",
  message: "",
}

export function MaintenancePage() {
  const [formData, setFormData] = useState<EnquiryFormData>(initialFormData)

  const updateField = (field: keyof EnquiryFormData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleSubmit: NonNullable<React.ComponentProps<"form">["onSubmit"]> = (
    event
  ) => {
    event.preventDefault()

    const fullName = `${formData.firstName} ${formData.lastName}`.trim()
    const body = [
      `Name: ${fullName}`,
      `Email: ${formData.email}`,
      `Organization: ${formData.organization || "Not provided"}`,
      `Role: ${formData.role || "Not provided"}`,
      "",
      "Message:",
      formData.message,
    ].join("\n")

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Website enquiry from under-construction page"
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_32%),linear-gradient(160deg,_#07111c_0%,_#0f1b2a_45%,_#13263a_100%)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-sm font-medium tracking-[0.2em] text-sky-200 uppercase">
            Website Redevelopment in Progress
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            We are rebuilding the APTO experience.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Our website is currently under construction while we refresh the
            experience, improve navigation, and prepare the next version of our
            services platform.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="animate-fade-up space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-200/70">
                    Status
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    Active redevelopment
                  </h2>
                </div>
                <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" />
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">
                    What is changing
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Cleaner service journeys, stronger storytelling, and a more
                    modern presentation of APTO&apos;s talent and workforce
                    solutions.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">
                    Need immediate support?
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Reach us directly using the contact details below or send an
                    enquiry using the form on this page.
                  </p>
                </div>
              </div>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300" />
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/35 p-6 backdrop-blur-sm sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-200/75">
                Contact Information
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Phone</p>
                  <a
                    href={`tel:${CONTACT_PHONE_LINK}`}
                    className="mt-1 block text-lg font-semibold text-white"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 block text-lg font-semibold text-white"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="mt-1 text-base font-medium leading-7 text-white">
                    {CONTACT_LOCATION}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-bold text-white">
              Send us an enquiry
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              When a visitor submits this form, their email app opens with the
              enquiry details prefilled and addressed to our team.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                    First Name
                  </span>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(event) =>
                      updateField("firstName", event.target.value)
                    }
                    className="w-full rounded-2xl border border-white/12 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/60"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                    Last Name
                  </span>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(event) =>
                      updateField("lastName", event.target.value)
                    }
                    className="w-full rounded-2xl border border-white/12 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/60"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                  Email
                </span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full rounded-2xl border border-white/12 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/60"
                  required
                />
              </label>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                    Organization
                  </span>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(event) =>
                      updateField("organization", event.target.value)
                    }
                    className="w-full rounded-2xl border border-white/12 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/60"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                    Role
                  </span>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(event) => updateField("role", event.target.value)}
                    className="w-full rounded-2xl border border-white/12 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/60"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                  Message
                </span>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="w-full rounded-3xl border border-white/12 bg-slate-950/45 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/60"
                  required
                />
              </label>

              <button
                type="submit"
                className="glow-on-hover w-full rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 sm:w-auto"
              >
                Send enquiry via email
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
