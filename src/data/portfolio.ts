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

export const portfolioNavItemsEn = [
  { href: "#sobre", label: "About" },
  { href: "#experiencia", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#portfolio", label: "Portfolio" },
] as const

export const portfolioHeroEn = {
  badge: "Available for projects",
  title: "Maicon Costa",
  eyebrow: "FullStack Developer",
  description:
    "Architecture, performance, and product coexisting in every delivery. Web and mobile projects with visual clarity, solid technical foundation, and operations ready to scale.",
  primaryCta: {
    href: "#sobre",
    label: "Learn more",
  },
  secondaryCta: {
    href: "#portfolio",
    label: "Explore cases",
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
  codeSnippets: portfolioHero.codeSnippets,
} as const

export const portfolioMetricsEn = [
  {
    value: "9+",
    label: "years of XP in web and mobile",
    icon: "briefcase",
  },
  {
    value: "20+",
    label: "projects delivered",
    icon: "layers",
  },
  {
    value: "15000+",
    label: "hours coding",
    icon: "clock",
  },
  {
    value: "2000+",
    label: "cups of coffee",
    icon: "coffee",
  },
] as const

export const portfolioAboutEn = {
  eyebrow: "About me",
  title:
    "Full Stack Developer with over 9 years building web and mobile applications focused on scalability, architecture, and value delivery.",
  paragraphs: [
    "Front-end specialist with Next.js, React, React Native, and Angular, crafting fast, modern, and optimized interfaces with attention to performance, SEO, and user experience.",
    "On the back-end, I work with Node.js, Java, and Spring Boot, along with Docker, GitHub Actions, Nginx, PostgreSQL, and Prisma — always focused on sustainable code, automation, and product evolution.",
  ],
  badges: ["React", "Node.js", "Spring Boot", "Docker", "Prisma"],
  image: {
    src: "/perfil.png",
    alt: "Photo of Maicon Costa",
  },
} as const

export const portfolioExperienceEn = {
  eyebrow: "Experience",
  title: "Professional timeline",
  items: [
    {
      period: "August 2022 - present | Vitória, ES",
      role: "Full Stack Developer",
      company: "Grupo Agoraa",
      description:
        "Developed and deployed internal applications using a full Node.js, React.js, and React Native stack with Fastify and Prisma architecture. Implemented scalable full-stack solutions integrating PostgreSQL with REST APIs, ensuring performance and system reliability.",
    },
    {
      period: "December 2020 - August 2022 | Vitória, ES",
      role: "Front End Developer",
      company: "Code n' App",
      description:
        "Built front-end interfaces for scalable financial products using Next.js and React.js within a Scrum methodology. Optimized performance of financial applications by implementing reusable components and efficient state management.",
    },
    {
      period: "October 2017 - December 2019 | Vitória, ES",
      role: "Front End Developer",
      company: "ISH Tecnologia",
      description:
        "Developed responsive web applications with Angular and TypeScript, implementing advanced styling with SASS. Collaborated in an agile team using Git for versioning and Scrum methodology for continuous delivery.",
    },
    {
      period: "November 2016 - October 2017 | Vitória, ES",
      role: "Intern",
      company: "ISH Tecnologia",
      description:
        "Created technological solutions for internal products, contributing to process optimization. Applied programming skills in developing internal tools, accelerating operational workflows.",
    },
    {
      period: "September 2013 - October 2015 | Vila Velha, ES",
      role: "Web Designer",
      company: "Loja de Internet",
      description:
        "Designed and coded responsive templates using HTML, CSS, JavaScript, and PHP, transforming prototypes into functional and appealing interfaces. Provided multichannel technical support (phone, email, chat), ensuring customer satisfaction and effective problem resolution.",
    },
  ],
  education: {
    title: "Academic background",
    course: "Information Systems",
    school: "FAESA - Centro Universitário",
    period: "2014 to 2018",
    description:
      "Education focused on software development fundamentals, databases, networking, systems analysis, and architecture — serving as a foundation for full-stack practice and technical growth throughout my career.",
  },
} as const

export const portfolioStackEn = {
  eyebrow: "Technologies & stacks",
  title: "Tools I use to build, integrate, and scale products",
  categories: portfolioStack.categories,
} as const

export const portfolioProjectsEn = {
  eyebrow: "Portfolio",
  title: "Projects that connect product, operations, and user experience",
  items: [
    {
      title: "Cognitus Sales",
      description:
        "App developed for the Cognitus ERP sales force, focused on mobility, commercial productivity, and quick access to operational information.",
      imageSrc: "/cognitus-sales.jpg",
      imageAlt: "Cognitus Sales project screen with sales flows and mobile app",
      tags: ["Java", "Spring Boot", "React Native"],
      projectLabel: "View Project",
    },
  ],
} as const

export const portfolioCtaEn = {
  title: "Ready to turn an idea into a product?",
  description:
    "I can help with new projects, platform evolution, solution architecture, and digital product development.",
  primaryHref: "https://wa.me/5527997227489",
  primaryLabel: "Talk to me",
} as const

export const portfolioFooterEn = {
  text: "Maicon Costa - FullStack Developer | 2026",
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

export const portfolioContentEn = {
  navItems: portfolioNavItemsEn,
  hero: portfolioHeroEn,
  metrics: portfolioMetricsEn,
  about: portfolioAboutEn,
  experience: portfolioExperienceEn,
  stack: portfolioStackEn,
  projects: portfolioProjectsEn,
  cta: portfolioCtaEn,
  footer: portfolioFooterEn,
} as const

export type PortfolioContent = typeof portfolioContent
