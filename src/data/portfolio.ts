export const portfolioNavItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#stack", label: "Stack" },
  { href: "#portfolio", label: "Portfólio" },
] as const

export const portfolioHero = {
  badge: "Disponível para projetos",
  title: "Maicon Costa",
  eyebrow: "FullStack Developer",
  description:
    "Arquitetura, performance e produto convivendo na mesma entrega. Projetos web e mobile com clareza visual, base técnica sólida e operação pronta para crescer.",
  primaryCta: {
    href: "#sobre",
    label: "Saiba mais",
  },
  secondaryCta: {
    href: "#portfolio",
    label: "Explorar cases",
  },
  socialItems: [
    { label: "GitHub", icon: "github" },
    { label: "LinkedIn", icon: "linkedin" },
    { label: "E-mail", icon: "mail" },
  ],
  codeSnippets: [
    {
      content: `const profile = {
  name: 'Maicon Costa',
  stack: ['Next.js', 'Node.js', 'Spring Boot'],
  focus: ['performance', 'architecture', 'product']
}

async function ship(value) {
  return deploy({ cleanCode: true, scale: true, value })
}`,
      className:
        "left-6 top-24 w-[min(32rem,calc(100%-3rem))] -rotate-1 text-[12px] sm:left-12 sm:text-[13px] lg:left-[56px] lg:top-[104px] lg:w-[520px] lg:text-[14px]",
    },
    {
      content: `app.use(metrics())
app.use(security())

const data = await prisma.project.findMany({
  include: { stack: true }
})

queue.process('deploy')`,
      className:
        "right-6 top-24 hidden w-[330px] rotate-2 lg:block lg:right-[96px] lg:top-[86px] lg:text-[13px]",
    },
    {
      content: `docker compose up -d
nginx -s reload
git push origin main`,
      className:
        "bottom-24 right-10 hidden w-[260px] lg:block lg:right-[120px] lg:text-[12px]",
    },
  ],
} as const
