import { headers } from "next/headers"

import type { PortfolioContent } from "@/data/portfolio"

async function getBaseUrl() {
  const headerStore = await headers()
  const protocol = headerStore.get("x-forwarded-proto") ?? "http"
  const host = headerStore.get("host")

  if (!host) {
    throw new Error("Missing host header for portfolio API request")
  }

  return `${protocol}://${host}`
}

export async function getPortfolioContent(): Promise<PortfolioContent> {
  const baseUrl = await getBaseUrl()
  const response = await fetch(`${baseUrl}/api/portfolio`, {
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("Failed to load portfolio content")
  }

  return response.json() as Promise<PortfolioContent>
}
