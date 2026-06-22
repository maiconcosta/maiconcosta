import type { PortfolioContent } from "@/data/portfolio"

import { MetricCard } from "./metric-card"

export function MetricsSection({ metrics }: { metrics: PortfolioContent["metrics"] }) {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-[72px] lg:py-[72px]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item, index) => (
          <MetricCard
            key={item.label}
            value={item.value}
            label={item.label}
            icon={item.icon}
            delay={index * 80}
          />
        ))}
      </div>
    </section>
  )
}
