import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/components/portfolio/language-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Maicon Costa | Desenvolvedor Full Stack",
    template: "%s | Maicon Costa",
  },
  description:
    "Portfolio de Maicon Costa com foco em Next.js, Node.js, Spring Boot, performance e arquitetura de produto.",
  applicationName: "Maicon Costa Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`(() => {
            const storedTheme = window.localStorage.getItem('theme');
            const theme = storedTheme === 'light' ? 'light' : 'dark';
            document.documentElement.classList.toggle('dark', theme === 'dark');
          })();`}
        </Script>
        <Script id="locale-script" strategy="beforeInteractive">
          {`(() => {
            const storedLocale = window.localStorage.getItem('locale');
            if (storedLocale === 'en') {
              document.documentElement.setAttribute('data-locale', 'en');
            }
          })();`}
        </Script>
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
