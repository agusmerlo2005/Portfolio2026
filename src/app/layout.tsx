import "./globals.css";
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { CustomCursor } from "@/components/shared/CustomCursor";

const SITE = {
  url: "https://agustinmerlo.dev",
  name: "Agustín Merlo",
  title: "Agustín Merlo — Full Stack Developer",
  description:
    "Portfolio de Agustín Merlo. Desarrollador Full Stack especializado en Next.js, React y Supabase. Construyo productos digitales rápidos, escalables y con diseño cuidado.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s · Agustín Merlo",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    "Agustín Merlo",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Supabase",
    "TypeScript",
    "Tailwind CSS",
    "Desarrollador Argentina",
    "Web Developer Rosario",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: "@agusmerlo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#08080b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Agustín Merlo",
  url: SITE.url,
  jobTitle: "Full Stack Developer",
  email: "mailto:agusmerlo2005@icloud.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Armstrong",
    addressRegion: "Santa Fe",
    addressCountry: "AR",
  },
  sameAs: [
    "https://www.linkedin.com/in/agustinmerlolinkdin/",
    "https://github.com/agusmerlo2005",
    "https://www.instagram.com/digitall_forge",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Tailwind CSS",
    "Node.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans bg-[var(--color-bg)] text-[var(--color-fg)] antialiased overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-white focus:rounded-lg"
        >
          Saltar al contenido
        </a>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
