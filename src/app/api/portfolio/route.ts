import { portfolioContent } from "@/data/portfolio"

export async function GET() {
  return Response.json(portfolioContent)
}
