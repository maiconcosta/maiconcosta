"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { RevealOnScroll } from "./reveal-on-scroll"

type ProjectCardProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  tags: readonly string[]
  projectLabel: string
  delay?: number
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  tags,
  projectLabel,
  delay = 0,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  return (
    <RevealOnScroll delay={delay}>
      <>
        <Card className="h-full rounded-[18px] border border-slate-200 bg-white/80 py-0 shadow-none dark:border-[#1E293B] dark:bg-[#0B1020]">
          <div className="relative h-[198px] overflow-hidden rounded-t-[18px] bg-slate-100 transition-colors duration-300 group-hover/card:bg-slate-200 dark:bg-[#09111F] dark:group-hover/card:bg-[#0D1528]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-500 group-hover/card:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover/card:opacity-100" />
          </div>

          <CardContent className="flex flex-col gap-5 p-[22px]">
            <div className="flex flex-col gap-[14px]">
              <h3 className="text-[21px] font-bold text-[var(--secondary-foreground)] transition-colors duration-300 group-hover/card:text-[var(--brand-accent-strong)] dark:text-[#F8FAFC] dark:group-hover/card:text-white">
                {title}
              </h3>
              <p className="text-sm leading-[1.5] text-slate-600 transition-colors duration-300 group-hover/card:text-slate-700 dark:text-[#94A3B8] dark:group-hover/card:text-slate-300">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center justify-center rounded-2xl border border-border bg-[var(--brand-icon-surface)] px-2 py-0.5 text-xs font-semibold text-[var(--brand-accent)] transition-colors duration-300 group-hover/card:bg-[var(--brand-panel)] group-hover/card:text-[var(--brand-accent-strong)] dark:border-transparent dark:bg-[#111827] dark:text-[#8BE9FD] dark:group-hover/card:bg-[#162033] dark:group-hover/card:text-[#C7F3FF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <Button
                type="button"
                size="lg"
                onClick={() => setOpen(true)}
                className="h-10 cursor-pointer rounded-md border-0 bg-[var(--brand-accent)] px-6 text-sm font-semibold text-primary-foreground hover:brightness-110"
              >
                {projectLabel}
              </Button>
            </div>
          </CardContent>
        </Card>

        {open
          ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            >
              <div
                className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-[#D7E5EC] bg-[#F3F8FB]/98 shadow-[0_40px_120px_rgba(15,23,42,0.18)] ring-1 ring-white/40 dark:border-[#1E293B] dark:bg-[#0B1020]/98 dark:ring-[#162033] dark:shadow-[0_40px_120px_rgba(2,6,23,0.58)] lg:max-h-[86vh]"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-100/50 to-transparent dark:from-sky-400/10" />

                <button
                  type="button"
                  aria-label="Fechar modal do projeto"
                  onClick={() => setOpen(false)}
                  className="absolute right-5 top-5 z-20 inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#D7E5EC] bg-[#F8FBFD]/92 text-[var(--brand-accent)] shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition-all duration-300 hover:scale-105 hover:bg-[var(--brand-panel)] hover:text-[var(--brand-accent-strong)] dark:border-[#24314B] dark:bg-[#0F172A]/92 dark:shadow-[0_12px_30px_rgba(2,6,23,0.36)]"
                >
                  <X className="size-[18px]" />
                </button>

                <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.75fr)]">
                  <div className="relative min-h-[260px] bg-[var(--brand-panel)] p-3 dark:bg-[#09111F] sm:min-h-[380px] sm:p-4 lg:min-h-0 lg:p-5">
                    <div className="relative h-full min-h-[236px] overflow-hidden rounded-[22px] border border-[#D7E5EC] bg-[var(--brand-panel)] dark:border-[#1E293B] dark:bg-[#0B1020]">
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 68vw"
                        className="object-contain p-2 sm:p-3"
                      />
                    </div>
                  </div>

                  <div className="flex min-h-0 flex-col justify-center gap-6 p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col gap-3">
                      <span className="inline-flex w-fit items-center rounded-full border border-border bg-[var(--brand-icon-surface)] px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[var(--brand-accent)] uppercase dark:border-transparent dark:bg-[#111827] dark:text-[#8BE9FD]">
                        Projeto em destaque
                      </span>
                      <h3 className="text-[30px] font-bold tracking-[-0.04em] text-[var(--secondary-foreground)] dark:text-[#F8FAFC] sm:text-[34px]">
                        {title}
                      </h3>
                      <p className="max-w-[44ch] text-base leading-[1.75] text-slate-600 dark:text-[#94A3B8]">
                        {description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center justify-center rounded-2xl border border-border bg-[var(--brand-icon-surface)] px-3 py-1 text-sm font-semibold text-[var(--brand-accent)] dark:border-transparent dark:bg-[#111827] dark:text-[#8BE9FD]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
          : null}
      </>
    </RevealOnScroll>
  )
}
