"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Alle animaties van de site. Werkt op data-attributen en classes in page.tsx.
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("js");

    // Soepel scrollen
    let lenis: Lenis | null = null;
    const raf = (t: number) => lenis?.raf(t * 1000);
    if (!reduce) {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    // Ankerlinks via Lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!;
      const el = id === "#top" ? document.body : document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el as HTMLElement, { offset: id === "#top" ? 0 : -80 });
      else (el as HTMLElement).scrollIntoView();
    };
    document.addEventListener("click", onClick);

    const ctx = gsap.context(() => {
      if (reduce) return;
      const mm = gsap.matchMedia();

      // HERO: woorden schuiven omhoog in beeld
      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
      intro
        .from(".hero .w > span", { yPercent: 110, rotate: 4, duration: 1.2, stagger: 0.06 })
        .from(".hero [data-intro]", { y: 24, opacity: 0, duration: 1, stagger: 0.08 }, "-=0.9")
        .from(".hero .phone", { y: 80, rotate: 6, opacity: 0, duration: 1.4 }, "-=1.1");

      // HERO: kopregel wordt breder bij scrollen
      gsap.to(".hero-title", {
        fontStretch: "125%",
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero .phone", {
        yPercent: -18,
        rotate: -4,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      // MARQUEE: oneindig, sneller en scheef bij scrollsnelheid
      document.querySelectorAll<HTMLElement>(".mq-track").forEach((track, i) => {
        const dir = i % 2 ? 1 : -1;
        const tween = gsap.fromTo(
          track,
          { xPercent: dir < 0 ? 0 : -50 },
          { xPercent: dir < 0 ? -50 : 0, duration: 28, ease: "none", repeat: -1 }
        );
        ScrollTrigger.create({
          trigger: track,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const v = self.getVelocity();
            gsap.to(tween, { timeScale: 1 + Math.min(Math.abs(v) / 250, 5), duration: 0.2, overwrite: true });
            gsap.to(track, { skewX: gsap.utils.clamp(-8, 8, v / -300), duration: 0.4, overwrite: "auto" });
          },
        });
        ScrollTrigger.addEventListener("scrollEnd", () => {
          gsap.to(tween, { timeScale: 1, duration: 0.8 });
          gsap.to(track, { skewX: 0, duration: 0.6 });
        });
      });

      // STATEMENT: woorden lichten op tijdens het scrollen
      gsap.fromTo(
        ".statement .sw",
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: ".statement p", start: "top 80%", end: "bottom 45%", scrub: true },
        }
      );

      // USP-kaarten: stapelen, vorige kaart zakt weg
      const cards = gsap.utils.toArray<HTMLElement>(".usp-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.92,
          yPercent: -4,
          ease: "none",
          scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top 25%", scrub: true },
        });
      });

      // Algemene reveal
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // Koppen: woorden schuiven omhoog
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        gsap.from(el.querySelectorAll(".w > span"), {
          yPercent: 110,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // Diensten: rijen schuiven in
      gsap.from(".svc-row", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".svc-list", start: "top 80%" },
      });

      // WERK: horizontaal scrollen op desktop
      mm.add("(min-width: 1000px)", () => {
        const track = document.querySelector<HTMLElement>(".work-track");
        const sec = document.querySelector<HTMLElement>(".work");
        if (!track || !sec) return;
        const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);
        gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top top",
            end: () => `+=${dist()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
      mm.add("(max-width: 999px)", () => {
        gsap.utils.toArray<HTMLElement>(".case").forEach((c) =>
          gsap.from(c, { y: 60, opacity: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: c, start: "top 88%" } })
        );
      });

      // WERKWIJZE: lijn tekent mee
      gsap.fromTo(
        ".steps-line i",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: ".steps", start: "top 70%", end: "bottom 60%", scrub: true },
        }
      );
      gsap.utils.toArray<HTMLElement>(".step").forEach((s) => {
        ScrollTrigger.create({
          trigger: s,
          start: "top 65%",
          onEnter: () => s.classList.add("is-on"),
          onLeaveBack: () => s.classList.remove("is-on"),
        });
      });

      // FOOTER: grote letters komen omhoog
      gsap.from(".big-word span", {
        yPercent: 100,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.04,
        scrollTrigger: { trigger: ".big-word", start: "top 95%" },
      });

      // Magnetische knoppen + cursor (alleen met muis)
      mm.add("(hover: hover) and (pointer: fine)", () => {
        const mags = gsap.utils.toArray<HTMLElement>("[data-magnetic]");
        const handlers: [HTMLElement, (e: MouseEvent) => void, () => void][] = [];
        mags.forEach((el) => {
          const move = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            gsap.to(el, {
              x: (e.clientX - r.left - r.width / 2) * 0.3,
              y: (e.clientY - r.top - r.height / 2) * 0.4,
              duration: 0.4,
              ease: "power3.out",
            });
          };
          const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
          el.addEventListener("mousemove", move);
          el.addEventListener("mouseleave", leave);
          handlers.push([el, move, leave]);
        });

        const dot = document.querySelector<HTMLElement>(".cursor");
        if (dot) {
          dot.style.display = "block";
          const xTo = gsap.quickTo(dot, "x", { duration: 0.35, ease: "power3" });
          const yTo = gsap.quickTo(dot, "y", { duration: 0.35, ease: "power3" });
          const move = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
            const t = e.target as HTMLElement;
            dot.classList.toggle("is-link", !!t.closest("a, button, summary, [data-cursor]"));
            const label = (t.closest("[data-cursor]") as HTMLElement | null)?.dataset.cursor;
            dot.dataset.label = label ?? "";
          };
          window.addEventListener("mousemove", move);
          return () => {
            window.removeEventListener("mousemove", move);
            handlers.forEach(([el, m, l]) => {
              el.removeEventListener("mousemove", m);
              el.removeEventListener("mouseleave", l);
            });
          };
        }
      });
    });

    // FAQ: soepel open en dicht
    const faqs = document.querySelectorAll<HTMLDetailsElement>(".faq-item");
    const faqHandlers: [HTMLElement, (e: Event) => void][] = [];
    faqs.forEach((d) => {
      const summary = d.querySelector("summary")!;
      const body = d.querySelector<HTMLElement>(".faq-a")!;
      const h = (e: Event) => {
        if (reduce) return;
        e.preventDefault();
        if (d.open) {
          gsap.to(body, { height: 0, duration: 0.45, ease: "power3.inOut", onComplete: () => (d.open = false) });
          d.classList.remove("is-open");
        } else {
          d.open = true;
          d.classList.add("is-open");
          gsap.fromTo(body, { height: 0 }, { height: "auto", duration: 0.55, ease: "power3.out" });
        }
      };
      summary.addEventListener("click", h);
      faqHandlers.push([summary, h]);
    });

    // Na het laden van fonts/afbeeldingen posities herberekenen
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      ctx.revert();
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      faqHandlers.forEach(([s, h]) => s.removeEventListener("click", h));
      gsap.ticker.remove(raf);
      lenis?.destroy();
    };
  }, []);

  return <div className="cursor" aria-hidden />;
}
