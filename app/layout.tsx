import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://groeikoning.nl"),
  title: "GroeiKoning | Online marketing & websites voor MKB",
  description:
    "Websites, Google & Meta Ads, SEO, e-mailmarketing en branding voor MKB en lokale bedrijven. Alles onder één dak, snel geregeld en altijd bereikbaar.",
  openGraph: {
    title: "GroeiKoning | Online marketing & websites voor MKB",
    description: "Websites, advertenties en online marketing voor MKB en lokale bedrijven. Alles onder één dak.",
    url: "https://groeikoning.nl",
    siteName: "GroeiKoning",
    locale: "nl_NL",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0B1622" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
