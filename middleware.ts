import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import {
  MAINTENANCE_API_ROUTE,
  MAINTENANCE_ROUTE,
  PREVIEW_ACCESS_COOKIE,
  PREVIEW_ACCESS_COOKIE_VALUE,
  PREVIEW_API_ROUTE,
  PREVIEW_ROUTE,
} from "./lib/site-access"

const PUBLIC_FILE = /\.[^/]+$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/assets") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  if (
    pathname === MAINTENANCE_ROUTE ||
    pathname === MAINTENANCE_API_ROUTE ||
    pathname === PREVIEW_ROUTE ||
    pathname === PREVIEW_API_ROUTE
  ) {
    return NextResponse.next()
  }

  const hasPreviewAccess =
    request.cookies.get(PREVIEW_ACCESS_COOKIE)?.value ===
    PREVIEW_ACCESS_COOKIE_VALUE

  if (hasPreviewAccess) {
    return NextResponse.next()
  }

  const maintenanceUrl = new URL(MAINTENANCE_ROUTE, request.url)

  return NextResponse.redirect(maintenanceUrl)
}

export const config = {
  matcher: "/:path*",
}
