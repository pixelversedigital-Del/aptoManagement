import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {
  PREVIEW_ACCESS_COOKIE,
  PREVIEW_ACCESS_COOKIE_VALUE,
  PREVIEW_ACCESS_TOKEN,
  PREVIEW_ROUTE,
} from "@/lib/site-access"

export async function POST(request: Request) {
  const formData = await request.formData()
  const submittedToken = String(formData.get("token") || "").trim()

  if (submittedToken !== PREVIEW_ACCESS_TOKEN) {
    redirect(`${PREVIEW_ROUTE}?error=invalid`)
  }

  const cookieStore = await cookies()

  cookieStore.set(PREVIEW_ACCESS_COOKIE, PREVIEW_ACCESS_COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  })

  redirect("/")
}
