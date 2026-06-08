"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const STORAGE_KEY = "theme"

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark")
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY)
    const nextTheme = storedTheme === "light" ? "light" : "dark"

    applyTheme(nextTheme)

    const frame = window.requestAnimationFrame(() => {
      setTheme(nextTheme)
      setMounted(true)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  function handleToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark"

    applyTheme(nextTheme)
    window.localStorage.setItem(STORAGE_KEY, nextTheme)
    setTheme(nextTheme)
  }

  return (
    <button
      type="button"
      aria-label={mounted && theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
      aria-pressed={mounted ? theme === "dark" : true}
      onClick={handleToggle}
      className="inline-flex size-[42px] cursor-pointer items-center justify-center rounded-full border border-[#CBD5E1] bg-white/90 text-sky-700 transition-colors hover:bg-slate-100 dark:border-[#1E293B] dark:bg-[#09111F] dark:text-[#8BE9FD] dark:hover:bg-[#0D1528]"
    >
      {mounted && theme === "light" ? (
        <Moon className="size-[18px]" />
      ) : (
        <Sun className="size-[18px]" />
      )}
    </button>
  )
}
