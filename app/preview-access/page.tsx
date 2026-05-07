import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Private Preview Access | APTO Management Services",
  robots: {
    index: false,
    follow: false,
  },
}

type PreviewAccessPageProps = {
  searchParams: Promise<{
    error?: string
  }>
}

export default async function PreviewAccessPage({
  searchParams,
}: PreviewAccessPageProps) {
  const params = await searchParams
  const hasError = params.error === "invalid"

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%),linear-gradient(180deg,_#09131f_0%,_#0f1b2a_50%,_#13263a_100%)] px-6 py-16 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[6%] p-8 shadow-2xl shadow-sky-950/30 backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[.28em] text-sky-200/75">
          Private Site Access
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
          Preview the full website
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Enter your private access token to bypass the public redevelopment
          page on this browser.
        </p>

        <form action="/api/preview-access" method="post" className="mt-8 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-200">
              Access token
            </span>
            <input
              type="password"
              name="token"
              className="w-full rounded-2xl border border-white/[12%] bg-slate-950/50 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-sky-300/60"
              placeholder="Enter token"
              required
            />
          </label>

          {hasError ? (
            <p className="rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
              The access token was not recognized. Please try again.
            </p>
          ) : null}

          <button
            type="submit"
            className="glow-on-hover w-full rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950"
          >
            Unlock preview
          </button>
        </form>

        <Link
          href="/under-construction"
          className="mt-5 inline-flex text-sm text-sky-200/80 transition hover:text-sky-100"
        >
          Return to public page
        </Link>
      </div>
    </main>
  )
}
