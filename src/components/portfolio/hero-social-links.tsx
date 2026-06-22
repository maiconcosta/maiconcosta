import type { ComponentType, SVGProps } from "react"

type SocialIconProps = SVGProps<SVGSVGElement>

function GithubIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M9 19c-4 1.2-4-2-6-2" />
      <path d="M15 22v-3.1a3.4 3.4 0 0 0-.9-2.6c3 0 6-1.4 6-6.3A4.9 4.9 0 0 0 19 6.8 4.5 4.5 0 0 0 18.9 3S17.7 2.7 15 4.6a10.2 10.2 0 0 0-6 0C6.3 2.7 5.1 3 5.1 3A4.5 4.5 0 0 0 5 6.8 4.9 4.9 0 0 0 3.9 10c0 4.9 3 6.3 6 6.3a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  )
}

function LinkedinIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MailIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
} as const

type HeroSocialLinksProps = {
  items: ReadonlyArray<{
    label: string
    icon: keyof typeof iconMap
    href: string
  }>
}

export function HeroSocialLinks({ items }: HeroSocialLinksProps) {
  return (
    <div className="flex items-center gap-2.5">
      {items.map((item) => {
        const Icon: ComponentType<SocialIconProps> = iconMap[item.icon]

        return (
          <a
            key={item.label}
            aria-label={item.label}
            title={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex size-[42px] cursor-pointer items-center justify-center rounded-full border border-border bg-card/90 text-[var(--brand-accent)] transition-colors hover:bg-[var(--brand-panel)] hover:text-[var(--brand-accent-strong)]"
          >
            <Icon className="size-[18px]" />
          </a>
        )
      })}
    </div>
  )
}
