import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { PortfolioContent } from "@/data/portfolio"

import { RevealOnScroll } from "./reveal-on-scroll"

export function CtaSection({ cta }: { cta: PortfolioContent["cta"] }) {
  return (
    <section className="px-6 pb-20 sm:px-8 lg:px-[72px] lg:pb-[120px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <RevealOnScroll delay={140}>
          <Card className="rounded-[22px] border border-slate-200 bg-white/80 py-0 shadow-none dark:border-[#1E293B] dark:bg-[#0B1020]">
            <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between lg:gap-6 lg:p-8">
              <div className="flex max-w-[680px] flex-1 flex-col gap-2.5">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] text-slate-950 transition-colors duration-300 group-hover/card:text-[var(--brand-accent-strong)] dark:text-[#F8FAFC] dark:group-hover/card:text-white">
                  {cta.title}
                </h2>
                <p className="text-base leading-[1.6] text-slate-600 transition-colors duration-300 group-hover/card:text-slate-700 dark:text-[#94A3B8] dark:group-hover/card:text-slate-300">
                  {cta.description}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3 lg:flex-nowrap">
                <Button
                  asChild
                  size="lg"
                  className="h-10 rounded-md border-0 bg-[var(--brand-accent)] px-6 text-sm font-semibold text-primary-foreground hover:brightness-110"
                >
                  <Link href={cta.primaryHref}>{cta.primaryLabel}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </RevealOnScroll>
      </div>
    </section>
  )
}
