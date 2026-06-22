import { Database, Monitor, Server, Wrench } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

import { StackChip } from "./stack-chip"
import { RevealOnScroll } from "./reveal-on-scroll"

const iconMap = {
  server: Server,
  database: Database,
  monitor: Monitor,
  wrench: Wrench,
} as const

type StackCategoryCardProps = {
  title: string
  icon: keyof typeof iconMap
  delay?: number
  rows: ReadonlyArray<
    ReadonlyArray<{
      label: string
      icon: string
      color: string
    }>
  >
}

export function StackCategoryCard({ title, icon, rows, delay = 0 }: StackCategoryCardProps) {
  const Icon = iconMap[icon]

  return (
    <RevealOnScroll delay={delay}>
      <Card className="h-full rounded-[18px] border border-slate-200 bg-white/80 py-0 shadow-none dark:border-[#1E293B] dark:bg-[#0B1020]">
        <CardContent className="flex h-full flex-col gap-4 p-[18px]">
          <div className="flex items-center gap-3">
            <div className="relative flex size-[30px] shrink-0 items-center justify-center rounded-[10px] border border-border bg-[var(--brand-icon-surface)] text-[var(--brand-accent)] transition-[transform,color] duration-300 group-hover/card:scale-105 group-hover/card:text-[var(--brand-accent-strong)] dark:border-transparent dark:bg-[#111827] dark:text-[#8BE9FD] dark:group-hover/card:text-[#C7F3FF]">
              <span className="pointer-events-none absolute inset-[-6px] rounded-[14px] bg-[var(--brand-glow)] opacity-0 blur-md transition-opacity duration-300 group-hover/card:opacity-100" />
              <Icon className="size-4" />
            </div>
            <h3 className="text-base font-bold text-[var(--secondary-foreground)] transition-colors duration-300 group-hover/card:text-[var(--brand-accent-strong)] dark:text-[#F8FAFC] dark:group-hover/card:text-white">
              {title}
            </h3>
          </div>

          <div className="flex flex-col gap-2">
            {rows.map((row, index) => (
              <div key={`${title}-${index}`} className="flex flex-wrap gap-2">
                {row.map((item) => (
                  <StackChip
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    color={item.color}
                  />
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </RevealOnScroll>
  )
}
