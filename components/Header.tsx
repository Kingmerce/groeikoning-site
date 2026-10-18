"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#diensten", label: "Diensten" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <div className="container header-inner">
        <a href="#top" className="logo" aria-label="GroeiKoning – naar boven">
          <img src="/logo-light.png" alt="GroeiKoning webdesign & marketing" width={184} height={24} />
        </a>
        <nav className="nav" aria-label="Hoofdmenu">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm nav-cta" onClick={() => setOpen(false)}>
            Plan een kennismaking
          </a>
        </nav>
        <button
          className="menu-toggle"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
