"use client"

import { useLanguage } from "./language-provider"

export function LanguageToggle() {
  const { locale, setLocale, mounted } = useLanguage()

  return (
    <button
      type="button"
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para Português"}
      onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
      className="inline-flex size-[42px] cursor-pointer items-center justify-center rounded-full border border-border bg-card/90 text-[var(--brand-accent)] transition-colors hover:bg-[var(--brand-panel)] hover:text-[var(--brand-accent-strong)]"
    >
      {mounted ? (
        <span className="text-xs font-bold">
          {locale === "pt" ? "EN" : "PT"}
        </span>
      ) : (
        <span className="text-xs font-bold">EN</span>
      )}
    </button>
  )
}
