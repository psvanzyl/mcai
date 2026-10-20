import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/content/site";
import { THEME_INIT } from "@/lib/theme";

const inter = localFont({
  src: [
    { path: "../../public/fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/inter-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

const serif4 = localFont({
  src: [
    { path: "../../public/fonts/serif4-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/serif4-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/serif4-700.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/serif4-italic-400.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif4",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "AI consulting",
    "artificial intelligence strategy",
    "agentic automation",
    "data platform",
    "responsible AI",
    "McAi",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/img/hero.jpg", width: 1600, height: 900, alt: "McAi" }],
  },
  twitter: { card: "summary_large_image", title: `${SITE.name} | ${SITE.tagline}`, description: SITE.description },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif4.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-canvas">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
