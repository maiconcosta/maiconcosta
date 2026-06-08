import Link from "next/link"

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
              className="text-sm font-semibold text-sky-700 transition-colors hover:text-sky-600 dark:text-[#8BE9FD] dark:hover:text-[#C7F3FF]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
