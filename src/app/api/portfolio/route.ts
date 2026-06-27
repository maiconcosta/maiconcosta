import { portfolioContent, portfolioContentEn } from "@/data/portfolio"

export async function GET() {
  return Response.json({ pt: portfolioContent, en: portfolioContentEn })
}
