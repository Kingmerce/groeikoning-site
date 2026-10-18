"use client";

import Script from "next/script";
import { site } from "@/lib/content";

export default function CalendlyEmbed() {
  const url = `${site.calendlyUrl}?hide_gdpr_banner=1&primary_color=5590c8&text_color=0b1622`;
  return (
    <div className="calendly-wrap">
      {/* Calendly vervangt de inhoud hieronder zodra de agenda geladen is */}
      <div className="calendly-inline-widget" data-url={url} style={{ minWidth: 300, height: 700 }}>
        <div className="cal-fallback">
          <p>De agenda wordt geladen. Lukt dat niet, open hem dan in een nieuw venster.</p>
          <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-blue">
            Open de agenda
          </a>
        </div>
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  );
}
