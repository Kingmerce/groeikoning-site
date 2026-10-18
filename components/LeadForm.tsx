"use client";

import { useState } from "react";
import { formOptions, site } from "@/lib/content";

type State = {
  needs: string[];
  hasWebsite: string;
  websiteUrl: string;
  timing: string;
  name: string;
  company: string;
  businessType: string;
  phone: string;
  email: string;
  message: string;
  website_hp: string;
};

const initial: State = {
  needs: [],
  hasWebsite: "",
  websiteUrl: "",
  timing: "",
  name: "",
  company: "",
  businessType: "",
  phone: "",
  email: "",
  message: "",
  website_hp: "",
};

const TOTAL = 4;

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [d, setD] = useState<State>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const set = <K extends keyof State>(k: K, v: State[K]) => setD((p) => ({ ...p, [k]: v }));
  const toggleNeed = (g: string) =>
    set("needs", d.needs.includes(g) ? d.needs.filter((x) => x !== g) : [...d.needs, g]);

  const canNext = (step === 1 && d.needs.length > 0) || (step === 2 && d.hasWebsite) || (step === 3 && d.timing);

  const pick = (k: "hasWebsite" | "timing", v: string) => {
    set(k, v);
    if (!(k === "hasWebsite" && v === "Ja")) setTimeout(() => setStep((s) => Math.min(s + 1, TOTAL)), 200);
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(d),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Er ging iets mis.");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Er ging iets mis.");
    }
  }

  if (status === "done") {
    return (
      <div className="lf lf-done">
        <div className="lf-check" aria-hidden>
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Top, {d.name.split(" ")[0]}!</h3>
        <p>Ik heb je aanvraag binnen en neem zo snel mogelijk contact met je op.</p>
      </div>
    );
  }

  return (
    <form className="lf" onSubmit={submit} noValidate>
      <div className="lf-top">
        <span className="mono">
          Stap {step}/{TOTAL}
        </span>
        <div className="lf-progress" aria-hidden>
          {Array.from({ length: TOTAL }).map((_, i) => (
            <i key={i} className={i < step ? "on" : ""} />
          ))}
        </div>
      </div>

      <input
        type="text"
        name="website_hp"
        tabIndex={-1}
        autoComplete="off"
        className="hp"
        value={d.website_hp}
        onChange={(e) => set("website_hp", e.target.value)}
        aria-hidden
      />

      <div className="lf-step" key={step}>
        {step === 1 && (
          <fieldset>
            <legend>Waar kan ik je mee helpen?</legend>
            <p className="lf-hint">Kies er één of meer.</p>
            <div className="lf-options">
              {formOptions.needs.map((o) => (
                <button
                  type="button"
                  key={o}
                  aria-pressed={d.needs.includes(o)}
                  className={`lf-opt check ${d.needs.includes(o) ? "on" : ""}`}
                  onClick={() => toggleNeed(o)}
                >
                  <span className="box" aria-hidden />
                  {o}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend>Heb je al een website?</legend>
            <div className="lf-options two">
              {formOptions.hasWebsite.map((o) => (
                <button
                  type="button"
                  key={o}
                  className={`lf-opt ${d.hasWebsite === o ? "on" : ""}`}
                  onClick={() => pick("hasWebsite", o)}
                >
                  {o}
                </button>
              ))}
            </div>
            {d.hasWebsite === "Ja" && (
              <label className="lf-field" htmlFor="lf-url">
                <span>Wat is het adres? (optioneel)</span>
                <input
                  id="lf-url"
                  type="text"
                  inputMode="url"
                  placeholder="www.jouwbedrijf.nl"
                  value={d.websiteUrl}
                  onChange={(e) => set("websiteUrl", e.target.value)}
                />
              </label>
            )}
          </fieldset>
        )}

        {step === 3 && (
          <fieldset>
            <legend>Wanneer wil je starten?</legend>
            <div className="lf-options">
              {formOptions.timing.map((o) => (
                <button
                  type="button"
                  key={o}
                  className={`lf-opt ${d.timing === o ? "on" : ""}`}
                  onClick={() => pick("timing", o)}
                >
                  {o}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 4 && (
          <fieldset>
            <legend>Hoe kan ik je bereiken?</legend>
            <div className="lf-fields">
              <label className="lf-field" htmlFor="lf-name">
                <span>Naam *</span>
                <input id="lf-name" required autoComplete="name" value={d.name} onChange={(e) => set("name", e.target.value)} />
              </label>
              <label className="lf-field" htmlFor="lf-company">
                <span>Bedrijfsnaam</span>
                <input
                  id="lf-company"
                  autoComplete="organization"
                  value={d.company}
                  onChange={(e) => set("company", e.target.value)}
                />
              </label>
              <label className="lf-field" htmlFor="lf-phone">
                <span>Telefoon *</span>
                <input
                  id="lf-phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  value={d.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
              </label>
              <label className="lf-field" htmlFor="lf-email">
                <span>E-mail *</span>
                <input
                  id="lf-email"
                  required
                  type="email"
                  autoComplete="email"
                  value={d.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </label>
              <label className="lf-field full" htmlFor="lf-type">
                <span>Wat voor bedrijf heb je?</span>
                <input
                  id="lf-type"
                  placeholder="Bijv. installateur, kapsalon, fysiotherapie"
                  value={d.businessType}
                  onChange={(e) => set("businessType", e.target.value)}
                />
              </label>
              <label className="lf-field full" htmlFor="lf-msg">
                <span>Nog iets dat ik moet weten?</span>
                <textarea id="lf-msg" rows={3} value={d.message} onChange={(e) => set("message", e.target.value)} />
              </label>
            </div>
            {status === "error" && (
              <p className="lf-error" role="alert">
                {error} Mail naar {site.email}
              </p>
            )}
          </fieldset>
        )}
      </div>

      <div className="lf-nav">
        {step > 1 ? (
          <button type="button" className="btn btn-line" onClick={() => setStep(step - 1)}>
            Vorige
          </button>
        ) : (
          <span />
        )}
        {step < TOTAL ? (
          <button type="button" className="btn btn-blue" disabled={!canNext} onClick={() => setStep(step + 1)}>
            Volgende
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-blue"
            disabled={status === "sending" || !d.name || !d.email || !d.phone}
          >
            {status === "sending" ? "Versturen…" : "Verstuur aanvraag"}
          </button>
        )}
      </div>
    </form>
  );
}
