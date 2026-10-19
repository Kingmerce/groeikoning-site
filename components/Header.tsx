"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";

const links = [
  { href: "#werk", label: "Werk" },
  { href: "#diensten", label: "Diensten" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#over", label: "Over mij" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 400 && y > last + 2);
      if (y < last - 2) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <header className={`hdr ${scrolled ? "is-scrolled" : ""} ${hidden && !open ? "is-hidden" : ""} ${open ? "is-open" : ""}`}>
      <div className="wrap hdr-in">
        <a href="#top" className="hdr-logo" aria-label="GroeiKoning, naar boven" onClick={() => setOpen(false)}>
          <img src="/logo-light.png" alt="GroeiKoning webdesign & marketing" width={215} height={28} />
        </a>
        <nav className="hdr-nav" aria-label="Hoofdmenu">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ ["--i" as string]: i }}>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>
        <div className="hdr-right">
          {site.phone && (
            <a className="hdr-phone mono ico-link" href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <PhoneIcon />
              {site.phone}
            </a>
          )}
          <a href="#contact" className="btn btn-blue btn-sm" data-magnetic onClick={() => setOpen(false)}>
            Plan een gesprek
            <ArrowIcon />
          </a>
          <button
            className="hdr-toggle"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
