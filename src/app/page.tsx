import { connection } from "next/server"

import { PortfolioContentWrapper } from "@/components/portfolio/language-content"
import { getPortfolioContent } from "@/lib/portfolio-api"

export default async function Home() {
  await connection()
  const content = await getPortfolioContent()

  return <PortfolioContentWrapper content={content} />
}
