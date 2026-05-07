export const MAINTENANCE_ROUTE = "/under-construction"
export const PREVIEW_ROUTE = "/preview-access"
export const PREVIEW_API_ROUTE = "/api/preview-access"

export const PREVIEW_ACCESS_COOKIE = "apto_preview_access"
export const PREVIEW_ACCESS_COOKIE_VALUE = "granted"

export const PREVIEW_ACCESS_TOKEN =
  process.env.SITE_PREVIEW_TOKEN || "apto-private-preview"
