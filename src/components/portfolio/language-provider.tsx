"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"

export type Locale = "pt" | "en"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "locale"

function readStoredLocale(): Locale {
  if (typeof document === "undefined") return "pt"
  const attr = document.documentElement.getAttribute("data-locale")
  if (attr === "en") return "en"
  return "pt"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.setAttribute("data-locale", next)
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en-US"
    setLocaleState(next)
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return ctx
}
