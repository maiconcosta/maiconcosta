import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { portfolioHero, portfolioNavItems } from "@/data/portfolio"

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
      className={`pointer-events-none absolute whitespace-pre-wrap font-mono leading-[1.55] text-[#8BE9FD]/[0.10] ${className}`}
    >
      {content}
    </pre>
  )
}

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#EFF6FF_0%,#F8FAFC_100%)] dark:bg-[linear-gradient(180deg,#050816_0%,#071225_100%)]">
      <HeroNav items={portfolioNavItems} />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute right-[96px] top-10 hidden size-[360px] rounded-full bg-sky-400/12 lg:block dark:bg-[#38BDF8]/[0.13]" />
        <div className="absolute right-[120px] top-[310px] hidden size-[140px] rounded-full bg-cyan-300/12 lg:block dark:bg-[#8BE9FD]/[0.11]" />
        <div className="absolute left-6 top-36 text-[72px] font-bold tracking-[-0.08em] text-sky-600/8 sm:left-10 sm:text-[124px] lg:left-[62px] lg:top-40 lg:text-[184px] dark:text-[#8BE9FD]/[0.06]">
          FULL STACK
        </div>

        {portfolioHero.codeSnippets.map((snippet) => (
          <HeroCodeSnippet
            key={snippet.content}
            className={snippet.className}
            content={snippet.content}
          />
        ))}
      </div>

      <div className="mx-auto min-h-[980px] w-full max-w-[1440px] px-6 pb-16 pt-28 sm:px-8 lg:px-[72px] lg:pb-[72px] lg:pt-[148px]">
        <div className="flex max-w-[760px] flex-col gap-[22px] pt-16 sm:pt-20 lg:pt-[138px]">
          <Badge className="h-auto w-fit rounded-2xl border-0 bg-slate-900 px-2 py-0.5 text-xs font-semibold text-sky-300 shadow-none dark:bg-[#111827] dark:text-[#8BE9FD]">
            {portfolioHero.badge}
          </Badge>

          <div className="space-y-3">
            <h1 className="max-w-[620px] text-[52px] font-bold leading-[0.94] tracking-[-0.06em] text-slate-950 sm:text-7xl lg:text-[58px] xl:text-[92px] dark:text-[#F8FAFC]">
              {portfolioHero.title}
            </h1>
            <p className="text-[26px] font-semibold text-sky-700 sm:text-[30px] lg:text-[32px] dark:text-[#8BE9FD]">
              {portfolioHero.eyebrow}
            </p>
          </div>

          <p className="max-w-[760px] text-[15px] leading-[1.6] text-slate-600 sm:max-w-[640px] sm:text-[17px] lg:text-[19px] dark:text-[#94A3B8]">
            {portfolioHero.description}
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:gap-3">
            <Button
              asChild
              size="lg"
              className="h-10 rounded-md border-0 bg-[#8BE9FD] px-6 text-sm font-semibold text-[#050816] hover:bg-[#BCEFFF] sm:w-auto"
            >
              <Link href={portfolioHero.primaryCta.href}>{portfolioHero.primaryCta.label}</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-10 rounded-md border border-sky-700 bg-white/70 px-6 text-sm font-semibold text-sky-700 shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-slate-100 hover:text-sky-800 dark:border-[#8BE9FD] dark:bg-[#09111F] dark:text-[#8BE9FD] dark:hover:bg-[#0D1528] dark:hover:text-[#C7F3FF] sm:w-auto"
            >
              <Link href={portfolioHero.secondaryCta.href}>{portfolioHero.secondaryCta.label}</Link>
            </Button>
          </div>

          <HeroSocialLinks items={portfolioHero.socialItems} />
        </div>
      </div>
    </section>
  )
}
