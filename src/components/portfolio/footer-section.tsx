import type { PortfolioContent } from "@/data/portfolio"

import { HeroSocialLinks } from "./hero-social-links"

export function FooterSection({ footer }: { footer: PortfolioContent["footer"] }) {
  return (
    <footer id="rodape" className="px-6 pb-12 sm:px-8 lg:px-[72px] lg:pb-12">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 border-t border-slate-200 pt-5 dark:border-[#1E293B] lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:pt-6">
        <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
          {footer.text}
        </p>
        <HeroSocialLinks items={footer.socialItems} />
      </div>
    </footer>
  )
}
