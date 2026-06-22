import { CodeXml } from "lucide-react"

import { RevealOnScroll } from "./reveal-on-scroll"

type ExperienceTimelineItemProps = {
  period: string
  role: string
  company: string
  description: string
  delay?: number
}

export function ExperienceTimelineItem({
  period,
  role,
  company,
  description,
  delay = 0,
}: ExperienceTimelineItemProps) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="relative flex items-start gap-[18px]">
        <div className="relative flex w-[22px] shrink-0 justify-center pt-2">
          <span className="relative z-10 size-3 rounded-full bg-[var(--brand-accent)] dark:bg-[#8BE9FD]" />
        </div>

        <article className="group/card flex-1 rounded-[18px] border border-slate-200 bg-white/80 p-5 shadow-[0_6px_18px_rgba(15,23,42,0.04)] transform-gpu transition-[transform,box-shadow,border-color,background-color] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-[1.5px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] dark:border-[#1E293B] dark:bg-[#09111F] dark:shadow-[0_8px_20px_rgba(2,6,23,0.12)] dark:hover:shadow-[0_14px_30px_rgba(2,6,23,0.24)]">
          <div className="flex items-start gap-4">
            <div className="relative flex size-[38px] shrink-0 items-center justify-center rounded-[12px] border border-border bg-[var(--brand-icon-surface)] text-[var(--brand-accent)] transition-[transform,color] duration-300 group-hover/card:scale-105 group-hover/card:text-[var(--brand-accent-strong)] dark:border-transparent dark:bg-[#111827] dark:text-[#8BE9FD] dark:group-hover/card:text-[#C7F3FF]">
              <span className="pointer-events-none absolute inset-[-6px] rounded-[16px] bg-[var(--brand-glow)] opacity-0 blur-md transition-opacity duration-300 group-hover/card:opacity-100" />
              <CodeXml className="size-5" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <p className="text-[13px] font-semibold text-[var(--brand-accent)] transition-colors duration-300 group-hover/card:text-[var(--brand-accent-strong)] dark:text-[#8BE9FD] dark:group-hover/card:text-[#C7F3FF]">
                {period}
              </p>
              <h3 className="text-[22px] font-bold leading-tight text-[var(--secondary-foreground)] transition-colors duration-300 group-hover/card:text-[var(--brand-accent-strong)] dark:text-[#F8FAFC] dark:group-hover/card:text-white">
                {role}
              </h3>
              <p className="text-[15px] font-medium text-[var(--secondary-foreground)] transition-colors duration-300 group-hover/card:text-[var(--secondary-foreground)] dark:text-[#F8FAFC] dark:group-hover/card:text-white">
                {company}
              </p>
              <p className="text-[15px] leading-6 text-slate-600 transition-colors duration-300 group-hover/card:text-slate-700 dark:text-[#94A3B8] dark:group-hover/card:text-slate-300">
                {description}
              </p>
            </div>
          </div>
        </article>
      </div>
    </RevealOnScroll>
  )
}
