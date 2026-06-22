import type { PortfolioContent } from "@/data/portfolio"

import { ProjectCard } from "./project-card"

export function ProjectsSection({ projects }: { projects: PortfolioContent["projects"] }) {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 px-6 pb-20 sm:px-8 lg:px-[72px] lg:pb-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <p className="text-sm font-semibold text-[var(--brand-accent)] dark:text-[#8BE9FD]">
            {projects.eyebrow}
          </p>
          <h2 className="text-[30px] font-bold tracking-[-0.03em] text-slate-950 sm:text-[34px] dark:text-[#F8FAFC]">
            {projects.title}
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {projects.items.map((item, index) => (
            <ProjectCard key={item.title} {...item} delay={index * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
