import { NextResponse } from "next/server"

const FALLBACK_RECIPIENT_EMAIL = "info@aptoservices.com"
const FALLBACK_FROM_EMAIL = "APTO Website <onboarding@resend.dev>"

type MaintenanceEnquiryPayload = {
  firstName: string
  lastName: string
  email: string
  organization: string
  role: string
  message: string
}

type SupabaseMaintenanceEnquiryRow = {
  first_name: string
  last_name: string
  email: string
  organization: string | null
  role: string | null
  message: string
  source_page: string
}

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const normalizePayload = (
  payload: Partial<MaintenanceEnquiryPayload>
): MaintenanceEnquiryPayload | null => {
  if (
    !isNonEmptyString(payload.firstName) ||
    !isNonEmptyString(payload.lastName) ||
    !isNonEmptyString(payload.email) ||
    !isNonEmptyString(payload.message)
  ) {
    return null
  }

  const normalizedEmail = payload.email.trim()

  if (!isValidEmail(normalizedEmail)) {
    return null
  }

  return {
    firstName: payload.firstName.trim(),
    lastName: payload.lastName.trim(),
    email: normalizedEmail,
    organization: payload.organization?.trim() ?? "",
    role: payload.role?.trim() ?? "",
    message: payload.message.trim(),
  }
}

const getSupabaseConfig = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()

  if (!url || !serviceRoleKey) {
    return null
  }

  return {
    url: url.replace(/\/$/, ""),
    serviceRoleKey,
  }
}

const saveMaintenanceEnquiry = async (payload: MaintenanceEnquiryPayload) => {
  const supabaseConfig = getSupabaseConfig()

  if (!supabaseConfig) {
    return {
      ok: false,
      message:
        "Database connection is not configured yet. Add Supabase environment variables.",
    }
  }

  const row: SupabaseMaintenanceEnquiryRow = {
    first_name: payload.firstName,
    last_name: payload.lastName,
    email: payload.email,
    organization: payload.organization || null,
    role: payload.role || null,
    message: payload.message,
    source_page: "/under-construction",
  }

  const response = await fetch(
    `${supabaseConfig.url}/rest/v1/maintenance_enquiries`,
    {
      method: "POST",
      headers: {
        apikey: supabaseConfig.serviceRoleKey,
        Authorization: `Bearer ${supabaseConfig.serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error("Supabase maintenance enquiry insert failed", errorText)

    return {
      ok: false,
      message:
        "We could not save your enquiry right now. Please try again shortly.",
    }
  }

  return {
    ok: true,
    message: "Enquiry saved successfully.",
  }
}

const sendViaResend = async (payload: MaintenanceEnquiryPayload) => {
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    return {
      ok: false,
      message:
        "Email delivery is not configured yet. Add RESEND_API_KEY on Vercel.",
    }
  }

  const recipient =
    process.env.MAINTENANCE_ENQUIRY_TO_EMAIL?.trim() || FALLBACK_RECIPIENT_EMAIL
  const from = process.env.RESEND_FROM_EMAIL?.trim() || FALLBACK_FROM_EMAIL
  const fullName = `${payload.firstName} ${payload.lastName}`.trim()

  const text = [
    "New website enquiry from the under-construction page",
    "",
    `Name: ${fullName}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.organization || "Not provided"}`,
    `Role: ${payload.role || "Not provided"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n")

  const html = `
    <div>
      <h2>New website enquiry from the under-construction page</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(payload.organization || "Not provided")}</p>
      <p><strong>Role:</strong> ${escapeHtml(payload.role || "Not provided")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
    </div>
  `

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: payload.email,
      subject: "Website enquiry from under-construction page",
      text,
      html,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error("Resend email failed", errorText)

    return {
      ok: false,
      message:
        "We could not deliver your enquiry email right now. Please try again shortly.",
    }
  }

  return {
    ok: true,
    message: "Enquiry sent successfully.",
  }
}

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<MaintenanceEnquiryPayload>
    const payload = normalizePayload(body)

    if (!payload) {
      return NextResponse.json(
        {
          message: "Please complete all required fields with a valid email address.",
        },
        { status: 400 }
      )
    }

    const result = await saveMaintenanceEnquiry(payload)

    if (!result.ok) {
      return NextResponse.json({ message: result.message }, { status: 500 })
    }

    if (process.env.RESEND_API_KEY) {
      const emailResult = await sendViaResend(payload)

      if (!emailResult.ok) {
        console.error("Maintenance enquiry email failed", emailResult.message)
      }
    }

    return NextResponse.json({
      message: "Your enquiry has been saved. We will get back to you soon.",
    })
  } catch (error) {
    console.error("Maintenance enquiry submission failed", error)

    return NextResponse.json(
      {
        message: "Something went wrong while sending your enquiry.",
      },
      { status: 500 }
    )
  }
}
