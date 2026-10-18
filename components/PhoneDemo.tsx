"use client";

import { useEffect, useState } from "react";
import { demoNotifications } from "@/lib/content";

// Illustratie: een telefoon waar steeds nieuwe aanvragen binnenkomen.
export default function PhoneDemo() {
  const [count, setCount] = useState(2);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCount((c) => c + 1), 2600);
    return () => clearInterval(id);
  }, []);

  // laatste 3 meldingen, nieuwste bovenaan
  const visible = [0, 1, 2]
    .map((k) => count - k)
    .filter((n) => n >= 0)
    .map((n) => ({ n, ...demoNotifications[n % demoNotifications.length] }));

  return (
    <div className="phone" aria-hidden>
      <div className="phone-screen">
        <div className="phone-notch" />
        <div className="phone-clock">
          <span className="phone-time">9:41</span>
          <span className="phone-date">Nieuwe aanvragen vandaag</span>
          <span className="phone-count">{count + 1}</span>
        </div>
        <ul className="phone-stack">
          {visible.map((m, i) => (
            <li key={m.n} className="notif" style={{ ["--i" as string]: i }}>
              <span className="notif-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 6h16v12H4z M4 7l8 6 8-6" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="notif-body">
                <span className="notif-head">
                  <b>{m.title}</b>
                  <small>{i === 0 ? "nu" : `${i * 3} min`}</small>
                </span>
                <span className="notif-text">{m.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
