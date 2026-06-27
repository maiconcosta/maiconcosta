"use client"

import type { PortfolioContent } from "@/data/portfolio"

import { AboutSection } from "./about-section"
import { CtaSection } from "./cta-section"
import { ExperienceSection } from "./experience-section"
import { FooterSection } from "./footer-section"
import { HeroSection } from "./hero-section"
import { Locale, useLanguage } from "./language-provider"
import { MetricsSection } from "./metrics-section"
import { ProjectsSection } from "./projects-section"
import { StackSection } from "./stack-section"

type PortfolioContentWrapperProps = {
  content: Record<Locale, PortfolioContent>
}

export function PortfolioContentWrapper({ content }: PortfolioContentWrapperProps) {
  const { locale } = useLanguage()
  const c = content[locale]

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection hero={c.hero} navItems={c.navItems} />
      <MetricsSection metrics={c.metrics} />
      <AboutSection about={c.about} />
      <ExperienceSection experience={c.experience} />
      <StackSection stack={c.stack} />
      <ProjectsSection projects={c.projects} />
      <CtaSection cta={c.cta} />
      <FooterSection footer={c.footer} />
    </main>
  )
}
