import Link from "next/link"

import { LanguageToggle } from "./language-toggle"
import { ThemeToggle } from "./theme-toggle"

type HeroNavProps = {
  items: ReadonlyArray<{
    href: string
    label: string
  }>
}

export function HeroNav({ items }: HeroNavProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-end gap-[18px] px-6 py-7 sm:px-8 lg:px-[72px]">
        <nav className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--brand-accent)] transition-colors hover:text-[var(--brand-accent-strong)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}
