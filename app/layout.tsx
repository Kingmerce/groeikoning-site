import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://groeikoning.nl"),
  title: "GroeiKoning | Webdesign & marketing voor bouw en installatie",
  description:
    "Websites en online marketing op maat voor loodgieters, dakdekkers, installateurs en aannemers. Meer aanvragen uit jouw regio.",
  openGraph: {
    title: "GroeiKoning | Webdesign & marketing voor bouw en installatie",
    description: "Websites en online marketing op maat voor bouw- en installatiebedrijven.",
    url: "https://groeikoning.nl",
    siteName: "GroeiKoning",
    locale: "nl_NL",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#1F272F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Work+Sans:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
