import { Server } from "lucide-react"
import type { IconType } from "react-icons"
import { BiLogoJava } from "react-icons/bi"
import {
  SiAngular,
  SiDocker,
  SiExpress,
  SiFastify,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSass,
  SiSpringboot,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si"
import { TbBrandAws, TbBrandAzure } from "react-icons/tb"

const iconMap: Record<string, IconType | typeof Server> = {
  angular: SiAngular,
  aws: TbBrandAws,
  azure: TbBrandAzure,
  docker: SiDocker,
  express: SiExpress,
  fastify: SiFastify,
  git: SiGit,
  githubactions: SiGithubactions,
  graphql: SiGraphql,
  java: BiLogoJava,
  linux: SiLinux,
  mysql: SiMysql,
  nextjs: SiNextdotjs,
  nginx: SiNginx,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  react: SiReact,
  reactnative: SiReact,
  redis: SiRedis,
  sass: SiSass,
  springboot: SiSpringboot,
  styledcomponents: SiStyledcomponents,
  supabase: SiSupabase,
  tailwind: SiTailwindcss,
  vps: Server,
}

type StackChipProps = {
  label: string
  icon: string
  color: string
}

export function StackChip({ label, icon, color }: StackChipProps) {
  const Icon = iconMap[icon] ?? Server

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--brand-icon-surface)] px-[10px] py-1.5 transition-colors duration-300 group-hover/card:border-[var(--border)] group-hover/card:bg-[var(--brand-panel)] dark:border-[#1E293B] dark:bg-[#111827] dark:group-hover/card:border-[#24314B] dark:group-hover/card:bg-[#162033]">
      <span
        className="relative inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-0.5 text-[10px] font-bold text-white transition-transform duration-300 group-hover/card:scale-110"
        style={{ backgroundColor: color }}
      >
        <span className="pointer-events-none absolute inset-[-4px] rounded-full bg-[var(--brand-glow)] opacity-0 blur-sm transition-opacity duration-300 group-hover/card:opacity-100" />
        <Icon className="h-[10px] w-[10px]" />
      </span>
      <span className="text-xs font-semibold leading-none text-[var(--secondary-foreground)] transition-colors duration-300 group-hover/card:text-[var(--brand-accent-strong)] dark:text-slate-50 dark:group-hover/card:text-white">
        {label}
      </span>
    </div>
  )
}
