import { connection } from "next/server"

import { AboutSection } from "@/components/portfolio/about-section"
import { CtaSection } from "@/components/portfolio/cta-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { FooterSection } from "@/components/portfolio/footer-section"
import { HeroSection } from "@/components/portfolio/hero-section"
import { MetricsSection } from "@/components/portfolio/metrics-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { StackSection } from "@/components/portfolio/stack-section"
import { getPortfolioContent } from "@/lib/portfolio-api"

export default async function Home() {
  await connection()
  const content = await getPortfolioContent()

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection hero={content.hero} navItems={content.navItems} />
      <MetricsSection metrics={content.metrics} />
      <AboutSection about={content.about} />
      <ExperienceSection experience={content.experience} />
      <StackSection stack={content.stack} />
      <ProjectsSection projects={content.projects} />
      <CtaSection cta={content.cta} />
      <FooterSection footer={content.footer} />
    </main>
  )
}
