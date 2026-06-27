import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { PortfolioContent } from "@/data/portfolio"

import { HeroNav } from "./hero-nav"
import { HeroSocialLinks } from "./hero-social-links"

function HeroCodeSnippet({
  className,
  content,
}: {
  className: string
  content: string
}) {
  return (
    <pre
      aria-hidden="true"
      className={`pointer-events-none absolute whitespace-pre-wrap font-mono leading-[1.55] text-sky-700/10 dark:text-[#8BE9FD]/[0.10] ${className}`}
    >
      {content}
    </pre>
  )
}

export function HeroSection({
  hero,
  navItems,
}: {
  hero: PortfolioContent["hero"]
  navItems: PortfolioContent["navItems"]
}) {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[linear-gradient(180deg,var(--hero-gradient-start)_0%,var(--hero-gradient-end)_100%)]">
      <HeroNav items={navItems} />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute right-[96px] top-10 hidden size-[360px] rounded-full bg-[var(--brand-glow)] lg:block" />
        <div className="absolute right-[120px] top-[310px] hidden size-[140px] rounded-full bg-[var(--brand-glow)] lg:block" />
        <div className="absolute left-6 top-36 text-[72px] font-bold tracking-[-0.08em] text-sky-600/8 sm:left-10 sm:text-[124px] lg:left-[62px] lg:top-40 lg:text-[184px] dark:text-[#8BE9FD]/[0.06]">
          FULL STACK
        </div>

        {hero.codeSnippets.map((snippet) => (
          <HeroCodeSnippet
            key={snippet.content}
            className={snippet.className}
            content={snippet.content}
          />
        ))}
      </div>

      <div className="mx-auto min-h-[980px] w-full max-w-[1440px] px-6 pb-16 pt-28 sm:px-8 lg:px-[72px] lg:pb-[72px] lg:pt-[148px]">
        <div className="flex max-w-[760px] flex-col gap-[22px] pt-16 sm:pt-20 lg:pt-[138px]">
          <Badge className="h-auto w-fit rounded-2xl border border-border bg-[var(--brand-icon-surface)] px-2 py-0.5 text-xs font-semibold text-[var(--brand-accent)] shadow-none dark:border-transparent dark:bg-[#111827] dark:text-[#8BE9FD]">
            {hero.badge}
          </Badge>

          <div className="space-y-3">
            <h1 className="max-w-[620px] text-[52px] font-bold leading-[0.94] tracking-[-0.06em] text-[var(--secondary-foreground)] sm:text-7xl lg:text-[58px] xl:text-[92px] dark:text-[#F8FAFC]">
              {hero.title}
            </h1>
            <p className="text-[26px] font-semibold text-[var(--brand-accent)] sm:text-[30px] lg:text-[32px]">
              {hero.eyebrow}
            </p>
          </div>

          <p className="max-w-[760px] text-[15px] leading-[1.6] text-slate-600 sm:max-w-[640px] sm:text-[17px] lg:text-[19px] dark:text-[#94A3B8]">
            {hero.description}
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:gap-3">
            <Button
              asChild
              size="lg"
              className="h-10 rounded-md border-0 bg-[var(--brand-accent)] px-6 text-sm font-semibold text-primary-foreground hover:brightness-110 sm:w-auto"
            >
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
          </div>

          <HeroSocialLinks items={hero.socialItems} />
        </div>
      </div>
    </section>
  )
}
