"use client";

import Script from "next/script";
import { site } from "@/lib/content";

export default function CalendlyEmbed() {
  const url = `${site.calendlyUrl}?hide_gdpr_banner=1&primary_color=5590c8&text_color=1f272f`;
  return (
    <div className="calendly-wrap">
      <div className="calendly-inline-widget" data-url={url} style={{ minWidth: 300, height: 700 }} />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <noscript>
        <a href={site.calendlyUrl}>Plan een kennismaking</a>
      </noscript>
    </div>
  );
}
