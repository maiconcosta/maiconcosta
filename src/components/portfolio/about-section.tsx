import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { PortfolioContent } from "@/data/portfolio"

import { RevealOnScroll } from "./reveal-on-scroll"

export function AboutSection({ about }: { about: PortfolioContent["about"] }) {
  return (
    <section id="sobre" className="scroll-mt-24 px-6 pb-20 sm:px-8 lg:px-[72px] lg:pb-[120px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <RevealOnScroll delay={60}>
          <Card className="rounded-[22px] border border-slate-200 bg-white/80 py-0 shadow-none dark:border-[#1E293B] dark:bg-[#0B1020]">
            <CardContent className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-6 lg:p-6">
              <div className="flex flex-1 flex-col gap-[18px]">
                <div className="flex flex-col gap-1.5">
                  <p className="text-sm font-semibold text-[var(--brand-accent)] transition-colors duration-300 group-hover/card:text-[var(--brand-accent-strong)] dark:text-[#8BE9FD] dark:group-hover/card:text-[#C7F3FF]">
                    {about.eyebrow}
                  </p>

                  <h2 className="max-w-none text-3xl font-bold leading-[1.14] tracking-[-0.03em] text-[var(--secondary-foreground)] transition-colors duration-300 group-hover/card:text-[var(--brand-accent-strong)] sm:text-[34px] dark:text-[#F8FAFC] dark:group-hover/card:text-white">
                    {about.title}
                  </h2>
                </div>

                {about.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-none text-base leading-[1.65] text-slate-600 transition-colors duration-300 group-hover/card:text-slate-700 dark:text-[#94A3B8] dark:group-hover/card:text-slate-300 lg:text-[17px]"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="flex flex-wrap gap-2">
                  {about.badges.map((item) => (
                    <Badge
                      key={item}
                      className="h-auto rounded-2xl border border-border bg-[var(--brand-icon-surface)] px-2 py-0.5 text-xs font-semibold text-[var(--brand-accent)] shadow-none transition-colors duration-300 group-hover/card:bg-[var(--brand-panel)] group-hover/card:text-[var(--brand-accent-strong)] dark:border-transparent dark:bg-[#111827] dark:text-[#8BE9FD] dark:group-hover/card:bg-[#162033] dark:group-hover/card:text-[#C7F3FF]"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="relative h-[280px] overflow-hidden rounded-[18px] border border-border transition-[transform,box-shadow] duration-300 group-hover/card:scale-[1.02] group-hover/card:shadow-[0_24px_60px_var(--brand-glow)] dark:border-transparent sm:h-[320px] lg:h-[338px] lg:w-[280px] lg:shrink-0">
                <Image
                  src={about.image.src}
                  alt={about.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="object-cover transition-transform duration-500 group-hover/card:scale-[1.04]"
                  priority
                />
              </div>
            </CardContent>
          </Card>
        </RevealOnScroll>
      </div>
    </section>
  )
}
