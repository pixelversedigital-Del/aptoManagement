import type { Metadata } from "next"
import { MaintenancePage } from "@/components/maintenance-page"

export const metadata: Metadata = {
  title: "Website Under Construction | APTO Management Services",
  description:
    "APTO Management Services is currently redeveloping its website. Please check back soon or contact our team directly.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function UnderConstructionPage() {
  return <MaintenancePage />
}
