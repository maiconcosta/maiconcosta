import { GraduationCap } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import type { PortfolioContent } from "@/data/portfolio"

import { ExperienceTimelineItem } from "./experience-timeline-item"
import { RevealOnScroll } from "./reveal-on-scroll"

export function ExperienceSection({
  experience,
}: {
  experience: PortfolioContent["experience"]
}) {
  return (
    <section
      id="experiencia"
      className="scroll-mt-24 px-6 pb-20 sm:px-8 lg:px-[72px] lg:pb-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_464px] lg:gap-x-6 lg:gap-y-[18px]">
        <div className="flex flex-col gap-1.5 lg:col-start-1 lg:row-start-1">
          <p className="text-sm font-semibold text-[var(--brand-accent)] dark:text-[#8BE9FD]">
            {experience.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--secondary-foreground)] sm:text-[34px] dark:text-[#F8FAFC]">
            {experience.title}
          </h2>
        </div>

        <div className="relative flex flex-col gap-[18px] lg:col-start-1 lg:row-start-2">
          <div className="absolute bottom-[14px] left-[10px] top-[14px] w-px bg-slate-300 dark:bg-[#1F2937]" />

          {experience.items.map((item, index) => (
            <ExperienceTimelineItem
              key={`${item.company}-${item.period}`}
              period={item.period}
              role={item.role}
              company={item.company}
              description={item.description}
              delay={index * 80}
            />
          ))}
        </div>

        <div className="w-full lg:col-start-2 lg:row-start-2 lg:w-[464px]">
          <RevealOnScroll delay={120}>
            <Card className="rounded-[18px] border border-slate-200 bg-white/80 py-0 shadow-none dark:border-[#1E293B] dark:bg-[#09111F]">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="relative flex size-[38px] shrink-0 items-center justify-center rounded-[12px] border border-border bg-[var(--brand-icon-surface)] text-[var(--brand-accent)] transition-[transform,color] duration-300 group-hover/card:scale-105 group-hover/card:text-[var(--brand-accent-strong)] dark:border-transparent dark:bg-[#111827] dark:text-[#8BE9FD] dark:group-hover/card:text-[#C7F3FF]">
                    <span className="pointer-events-none absolute inset-[-6px] rounded-[16px] bg-[var(--brand-glow)] opacity-0 blur-md transition-opacity duration-300 group-hover/card:opacity-100" />
                    <GraduationCap className="size-5" />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <h3 className="text-[22px] font-bold leading-tight text-[var(--secondary-foreground)] transition-colors duration-300 group-hover/card:text-[var(--brand-accent-strong)] dark:text-[#F8FAFC] dark:group-hover/card:text-white">
                      {experience.education.title}
                    </h3>
                    <h4 className="pt-2 text-[18px] font-semibold text-[var(--secondary-foreground)] transition-colors duration-300 group-hover/card:text-[var(--secondary-foreground)] dark:text-[#F8FAFC] dark:group-hover/card:text-white">
                      {experience.education.course}
                    </h4>
                    <p className="text-[15px] text-slate-600 transition-colors duration-300 group-hover/card:text-slate-700 dark:text-[#94A3B8] dark:group-hover/card:text-slate-300">
                      {experience.education.school}
                    </p>
                    <p className="text-sm text-slate-600 transition-colors duration-300 group-hover/card:text-slate-700 dark:text-[#94A3B8] dark:group-hover/card:text-slate-300">
                      {experience.education.period}
                    </p>
                    <p className="pt-3 text-sm leading-[1.55] text-slate-600 transition-colors duration-300 group-hover/card:text-slate-700 dark:text-[#94A3B8] dark:group-hover/card:text-slate-300">
                      {experience.education.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
