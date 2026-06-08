import { HeroSection } from "@/components/portfolio/hero-section"

const futureSectionAnchors = ["sobre", "experiencia", "stack", "portfolio"]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {futureSectionAnchors.map((anchor) => (
        <section key={anchor} id={anchor} className="scroll-mt-24" />
      ))}
    </main>
  )
}
