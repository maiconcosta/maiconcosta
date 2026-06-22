import { BriefcaseBusiness, Clock, Coffee, Layers } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

import { RevealOnScroll } from "./reveal-on-scroll"

const iconMap = {
  briefcase: BriefcaseBusiness,
  layers: Layers,
  clock: Clock,
  coffee: Coffee,
} as const

type MetricCardProps = {
  value: string
  label: string
  icon: keyof typeof iconMap
  delay?: number
}

export function MetricCard({ value, label, icon, delay = 0 }: MetricCardProps) {
  const Icon = iconMap[icon]

  return (
    <RevealOnScroll delay={delay}>
      <Card className="rounded-[16px] border border-slate-200 bg-white/80 py-0 shadow-none dark:border-[#1E293B] dark:bg-[#09111F]">
        <CardContent className="flex items-start gap-4 p-[22px]">
          <div className="flex size-[44px] shrink-0 items-center justify-center rounded-[12px] border border-border bg-[var(--brand-icon-surface)] text-[var(--brand-accent)] transition-[transform,color] duration-300 group-hover/card:scale-105 group-hover/card:text-[var(--brand-accent-strong)] dark:border-transparent dark:bg-[#111827] dark:text-[#8BE9FD] dark:group-hover/card:text-[#C7F3FF]">
            <Icon className="size-[22px]" />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <p className="text-[34px] font-bold leading-none text-[var(--brand-accent)] transition-colors duration-300 group-hover/card:text-[var(--brand-accent-strong)] dark:text-[#8BE9FD] dark:group-hover/card:text-[#C7F3FF]">
              {value}
            </p>
            <p className="text-sm leading-[1.45] text-slate-600 transition-colors duration-300 group-hover/card:text-slate-700 dark:text-[#94A3B8] dark:group-hover/card:text-slate-300">
              {label}
            </p>
          </div>
        </CardContent>
      </Card>
    </RevealOnScroll>
  )
}
