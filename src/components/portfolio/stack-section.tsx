import type { PortfolioContent } from "@/data/portfolio"

import { StackCategoryCard } from "./stack-category-card"

export function StackSection({ stack }: { stack: PortfolioContent["stack"] }) {
  return (
    <section id="stack" className="scroll-mt-24 px-6 pb-20 sm:px-8 lg:px-[72px] lg:pb-[120px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 lg:gap-5">
        <div className="flex flex-col gap-1.5">
          <p className="text-sm font-semibold text-[var(--brand-accent)] dark:text-[#8BE9FD]">
            {stack.eyebrow}
          </p>
          <h2 className="text-[30px] font-bold tracking-[-0.03em] text-slate-950 dark:text-[#F8FAFC]">
            {stack.title}
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {stack.categories.map((category, index) => (
            <StackCategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              rows={category.rows}
              delay={index * 90}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
