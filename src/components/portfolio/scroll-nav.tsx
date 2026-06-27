"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

import { LanguageToggle } from "./language-toggle"
import { ThemeToggle } from "./theme-toggle"

type ScrollNavProps = {
  items: ReadonlyArray<{
    href: string
    label: string
  }>
}

export function ScrollNav({ items }: ScrollNavProps) {
  const [visible, setVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const [snap, setSnap] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const clickedRef = useRef(false)

  useEffect(() => {
    const hero = document.querySelector("#hero")
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry?.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(hero)

    return () => observer.disconnect()
  }, [])

  const findActiveSection = useCallback(() => {
    const navHeight = navRef.current?.getBoundingClientRect().height ?? 56

    let detectionOffset = navHeight

    const firstSection = document.querySelector(items[0]?.href ?? "")
    if (firstSection) {
      const scrollMargin = parseFloat(getComputedStyle(firstSection).scrollMarginTop) || 96
      detectionOffset = Math.max(navHeight, scrollMargin) + 8
    }

    const scrollPosition = window.scrollY + detectionOffset

    let active: string | null = null

    for (const item of items) {
      const section = document.querySelector(item.href)
      if (!section) continue

      const top = section.getBoundingClientRect().top + window.scrollY
      const bottom = top + section.getBoundingClientRect().height

      if (scrollPosition >= top && scrollPosition < bottom) {
        active = item.href
        break
      }
    }

    if (!active) {
      let closestSection: string | null = null
      let closestDistance = Infinity

      for (const item of items) {
        const section = document.querySelector(item.href)
        if (!section) continue

        const top = section.getBoundingClientRect().top + window.scrollY
        const distance = Math.abs(scrollPosition - top)

        if (distance < closestDistance) {
          closestDistance = distance
          closestSection = item.href
        }
      }

      active = closestSection
    }

    return active
  }, [items])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (clickedRef.current) return
          const active = findActiveSection()
          if (active) setActiveSection(active)
          ticking = false
        })
        ticking = true
      }
    }

    const handleScrollEnd = () => {
      clickedRef.current = false
      setSnap(false)
      const active = findActiveSection()
      if (active) setActiveSection(active)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("scrollend", handleScrollEnd)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scrollend", handleScrollEnd)
    }
  }, [findActiveSection])

  useEffect(() => {
    if (!activeSection || !navRef.current) return

    const activeLink = navRef.current.querySelector<HTMLElement>(
      `[data-section="${activeSection}"]`
    )
    if (!activeLink) {
      setIndicatorStyle({ left: 0, width: 0 })
      return
    }

    const navRect = navRef.current.getBoundingClientRect()
    const linkRect = activeLink.getBoundingClientRect()

    setIndicatorStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
    })
  }, [activeSection])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-end gap-[18px] px-6 py-4 sm:px-8 lg:px-[72px]">
          <nav ref={navRef} className="relative flex items-center gap-7">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                scroll={false}
                data-section={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.querySelector(item.href)
                  if (el) {
                    clickedRef.current = true
                    setSnap(true)
                    setActiveSection(item.href)
                    el.scrollIntoView({ behavior: "smooth" })
                    window.history.pushState(null, "", item.href)
                  }
                }}
                className={`text-sm font-semibold transition-colors duration-300 ${
                  activeSection === item.href
                    ? "text-[var(--brand-accent)]"
                    : "text-[var(--brand-accent-muted)] hover:text-[var(--brand-accent)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div
              className="absolute bottom-[-12px] h-[2px] rounded-full bg-[var(--brand-accent)]"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.width > 0 ? 1 : 0,
                transition: snap
                  ? "none"
                  : "left 300ms ease-out, width 300ms ease-out, opacity 300ms ease-out",
              }}
            />
          </nav>

          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
