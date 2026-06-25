import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "José Cicero Da Silva Neto | Desenvolvedor Full Stack",
  description:
    "Portfólio de José Cicero Da Silva Neto — Desenvolvedor Full Stack com experiência em Django, React, Next.js e APIs REST.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "react",
    "next.js",
    "django",
    "python",
    "portfolio",
  ],
  authors: [{ name: "José Cicero Da Silva Neto" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}
