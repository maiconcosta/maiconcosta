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
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/maiconcostawd/",
    },
    {
      label: "GitHub",
      icon: "github",
      href: "https://github.com/maiconcosta",
    },
    {
      label: "E-mail",
      icon: "mail",
      href: "mailto:maiconcostawd@hotmail.com",
    },
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

export const portfolioMetrics = [
  {
    value: "9+",
    label: "anos de xp em web e mobile",
    icon: "briefcase",
  },
  {
    value: "20+",
    label: "atuações em projetos",
    icon: "layers",
  },
  {
    value: "15000+",
    label: "horas codando",
    icon: "clock",
  },
  {
    value: "2000+",
    label: "copos de café",
    icon: "coffee",
  },
] as const

export const portfolioAbout = {
  eyebrow: "Sobre mim",
  title:
    "Desenvolvedor Full Stack com mais de 9 anos construindo aplicações web e mobile com foco em escalabilidade, arquitetura e entrega de valor.",
  paragraphs: [
    "Especialista em front-end com Next.js, React, React Native e Angular, criando interfaces rápidas, modernas e otimizadas, com atenção a performance, SEO e experiência do usuário.",
    "No back-end, atuo com Node.js, Java e Spring Boot, além de Docker, GitHub Actions, Nginx, PostgreSQL e Prisma, sempre com foco em código sustentável, automação e evolução de produto.",
  ],
  badges: ["React", "Node.js", "Spring Boot", "Docker", "Prisma"],
  image: {
    src: "/perfil.png",
    alt: "Foto de Maicon Costa",
  },
} as const

export const portfolioExperience = {
  eyebrow: "Experiência",
  title: "Linha do tempo profissional",
  items: [
    {
      period: "agosto de 2022 - atual | Vitória, ES",
      role: "Desenvolvedor Full Stack",
      company: "Grupo Agoraa",
      description:
        "Desenvolvi e realizei deploy de aplicativos internos utilizando stack completa NodeJS, ReactJS e React Native com arquitetura Fastify e Prisma. Implementei soluções full stack escaláveis integrando PostgreSQL com APIs REST, garantindo performance e confiabilidade dos sistemas.",
    },
    {
      period: "dezembro de 2020 - agosto de 2022 | Vitória, ES",
      role: "Desenvolvedor Front End",
      company: "Code n' App",
      description:
        "Construí interfaces front-end para produtos financeiros escaláveis utilizando Next.js e ReactJS em metodologia Scrum. Otimizei performance de aplicações financeiras implementando componentes reutilizáveis e gerenciamento eficiente de estado.",
    },
    {
      period: "outubro de 2017 - dezembro de 2019 | Vitória, ES",
      role: "Desenvolvedor Front End",
      company: "ISH Tecnologia",
      description:
        "Desenvolvi aplicações web responsivas com Angular e TypeScript, implementando estilos avançados com SASS. Colaborei em equipe ágil utilizando Git para versionamento e metodologia Scrum para entrega contínua.",
    },
    {
      period: "novembro de 2016 - outubro de 2017 | Vitória, ES",
      role: "Estagiário",
      company: "ISH Tecnologia",
      description:
        "Criei soluções tecnológicas para produtos internos, contribuindo para otimização de processos da empresa. Apliquei conhecimentos de programação no desenvolvimento de ferramentas internas, acelerando workflows operacionais.",
    },
    {
      period: "setembro de 2013 - outubro de 2015 | Vila Velha, ES",
      role: "Web Designer",
      company: "Loja de Internet",
      description:
        "Projetei e codifiquei templates responsivos, utilizando HTML, CSS, Javascript e PHP, transformando protótipos em interfaces funcionais e atrativas. Prestei suporte técnico multicanal (telefone, e-mail, chat) garantindo satisfação do cliente e resolução eficaz de problemas.",
    },
  ],
  education: {
    title: "Formação acadêmica",
    course: "Sistemas de Informação",
    school: "FAESA - Centro Universitário",
    period: "2014 a 2018",
    description:
      "Formação voltada para fundamentos de desenvolvimento de software, banco de dados, redes, análise de sistemas e arquitetura, servindo como base para a atuação full stack e evolução técnica ao longo da carreira.",
  },
} as const

export const portfolioStack = {
  eyebrow: "Tecnologias e stacks",
  title: "Ferramentas que uso para construir, integrar e escalar produtos",
  categories: [
    {
      title: "Back-end & APIs",
      icon: "server",
      rows: [
        [
          { label: "Node.js", icon: "nodejs", color: "#16A34A" },
          { label: "Java", icon: "java", color: "#F97316" },
        ],
        [
          { label: "Spring Boot", icon: "springboot", color: "#65A30D" },
          { label: "Express", icon: "express", color: "#6B7280" },
        ],
        [
          { label: "Fastify", icon: "fastify", color: "#111827" },
          { label: "GraphQL", icon: "graphql", color: "#EC4899" },
        ],
      ],
    },
    {
      title: "Infra & Dados",
      icon: "database",
      rows: [
        [
          { label: "PostgreSQL", icon: "postgresql", color: "#2563EB" },
          { label: "Prisma", icon: "prisma", color: "#06B6D4" },
        ],
        [
          { label: "MySQL", icon: "mysql", color: "#0EA5E9" },
          { label: "Redis", icon: "redis", color: "#EF4444" },
        ],
        [{ label: "Supabase", icon: "supabase", color: "#22C55E" }],
      ],
    },
    {
      title: "Frontend & Mobile",
      icon: "monitor",
      rows: [
        [
          { label: "React", icon: "react", color: "#22D3EE" },
          { label: "Next.js", icon: "nextjs", color: "#111827" },
        ],
        [
          { label: "Angular", icon: "angular", color: "#DC2626" },
          { label: "Tailwind", icon: "tailwind", color: "#38BDF8" },
        ],
        [
          { label: "SCSS", icon: "sass", color: "#EC4899" },
          { label: "Styled Components", icon: "styledcomponents", color: "#F59E0B" },
        ],
        [{ label: "React Native", icon: "reactnative", color: "#22D3EE" }],
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "wrench",
      rows: [
        [
          { label: "AWS", icon: "aws", color: "#F59E0B" },
          { label: "Azure", icon: "azure", color: "#2563EB" },
        ],
        [
          { label: "VPS / Cloud", icon: "vps", color: "#475569" },
          { label: "Docker", icon: "docker", color: "#0EA5E9" },
        ],
        [
          { label: "Nginx", icon: "nginx", color: "#16A34A" },
          { label: "Git", icon: "git", color: "#EF4444" },
        ],
        [
          { label: "Linux", icon: "linux", color: "#111827" },
          { label: "GitHub Actions", icon: "githubactions", color: "#8B5CF6" },
        ],
      ],
    },
  ],
} as const

export const portfolioProjects = {
  eyebrow: "Portfólio",
  title: "Projetos que conectam produto, operação e experiência de uso",
  items: [
    {
      title: "Cognitus Sales",
      description:
        "Aplicativo desenvolvido para a força de vendas do ERP Cognitus, com foco em mobilidade, produtividade comercial e acesso rápido às informações da operação.",
      imageSrc: "/cognitus-sales.jpg",
      imageAlt: "Tela do projeto Cognitus Sales com fluxos de vendas e app mobile",
      tags: ["Java", "Spring Boot", "React Native"],
      projectLabel: "Ver Projeto",
    },
  ],
} as const

export const portfolioCta = {
  title: "Pronto para transformar uma ideia em produto?",
  description:
    "Posso ajudar em novos projetos, evolução de plataformas, arquitetura de soluções e desenvolvimento de produtos digitais.",
  primaryHref: "https://wa.me/5527997227489",
  primaryLabel: "Fale comigo",
} as const

export const portfolioFooter = {
  text: "Maicon Costa - Desenvolvedor FullStack | 2026",
  socialItems: [
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/maiconcostawd/",
    },
    {
      label: "GitHub",
      icon: "github",
      href: "https://github.com/maiconcosta",
    },
    {
      label: "E-mail",
      icon: "mail",
      href: "mailto:maiconcostawd@hotmail.com",
    },
  ],
} as const

export const portfolioContent = {
  navItems: portfolioNavItems,
  hero: portfolioHero,
  metrics: portfolioMetrics,
  about: portfolioAbout,
  experience: portfolioExperience,
  stack: portfolioStack,
  projects: portfolioProjects,
  cta: portfolioCta,
  footer: portfolioFooter,
} as const

export type PortfolioContent = typeof portfolioContent
