"use client";

import { useState } from "react";
import { formOptions, site } from "@/lib/content";

type State = {
  businessType: string;
  hasWebsite: string;
  websiteUrl: string;
  goals: string[];
  timing: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  message: string;
  website_hp: string;
};

const initial: State = {
  businessType: "",
  hasWebsite: "",
  websiteUrl: "",
  goals: [],
  timing: "",
  name: "",
  company: "",
  phone: "",
  email: "",
  city: "",
  message: "",
  website_hp: "",
};

const TOTAL = 5;

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [d, setD] = useState<State>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const set = <K extends keyof State>(k: K, v: State[K]) => setD((p) => ({ ...p, [k]: v }));
  const toggleGoal = (g: string) =>
    set("goals", d.goals.includes(g) ? d.goals.filter((x) => x !== g) : [...d.goals, g]);

  const canNext =
    (step === 1 && d.businessType) ||
    (step === 2 && d.hasWebsite) ||
    (step === 3 && d.goals.length > 0) ||
    (step === 4 && d.timing) ||
    step === 5;

  const pick = (k: "businessType" | "hasWebsite" | "timing", v: string, autoNext = true) => {
    set(k, v);
    if (autoNext && !(k === "hasWebsite" && v === "Ja")) setTimeout(() => setStep((s) => Math.min(s + 1, TOTAL)), 180);
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
      <div className="form-card form-done">
        <div className="done-icon" aria-hidden>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="t5">Bedankt, {d.name.split(" ")[0]}!</h3>
        <p>We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op.</p>
        <p className="muted">Liever meteen een moment kiezen? Plan hiernaast direct een kennismaking.</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <div className="progress" aria-hidden>
        <div className="progress-bar" style={{ width: `${(step / TOTAL) * 100}%` }} />
      </div>
      <p className="step-label">
        Stap {step} van {TOTAL}
      </p>

      {/* honeypot */}
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

      {step === 1 && (
        <fieldset>
          <legend className="t5">Wat voor bedrijf heb je?</legend>
          <div className="options grid-2">
            {formOptions.businessTypes.map((o) => (
              <button
                type="button"
                key={o}
                className={`option ${d.businessType === o ? "active" : ""}`}
                onClick={() => pick("businessType", o)}
              >
                {o}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend className="t5">Heb je al een website?</legend>
          <div className="options grid-2">
            {["Ja", "Nee"].map((o) => (
              <button
                type="button"
                key={o}
                className={`option ${d.hasWebsite === o ? "active" : ""}`}
                onClick={() => pick("hasWebsite", o)}
              >
                {o}
              </button>
            ))}
          </div>
          {d.hasWebsite === "Ja" && (
            <label className="field">
              <span>Wat is het adres? (optioneel)</span>
              <input
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
          <legend className="t5">Wat wil je bereiken?</legend>
          <p className="hint">Kies er één of meer.</p>
          <div className="options">
            {formOptions.goals.map((o) => (
              <button
                type="button"
                key={o}
                aria-pressed={d.goals.includes(o)}
                className={`option check ${d.goals.includes(o) ? "active" : ""}`}
                onClick={() => toggleGoal(o)}
              >
                <span className="box" aria-hidden />
                {o}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 4 && (
        <fieldset>
          <legend className="t5">Wanneer wil je starten?</legend>
          <div className="options">
            {formOptions.timing.map((o) => (
              <button
                type="button"
                key={o}
                className={`option ${d.timing === o ? "active" : ""}`}
                onClick={() => pick("timing", o)}
              >
                {o}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 5 && (
        <fieldset>
          <legend className="t5">Hoe kunnen we je bereiken?</legend>
          <div className="fields">
            <label className="field">
              <span>Naam *</span>
              <input required autoComplete="name" value={d.name} onChange={(e) => set("name", e.target.value)} />
            </label>
            <label className="field">
              <span>Bedrijfsnaam</span>
              <input autoComplete="organization" value={d.company} onChange={(e) => set("company", e.target.value)} />
            </label>
            <label className="field">
              <span>Telefoon *</span>
              <input
                required
                type="tel"
                autoComplete="tel"
                value={d.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
            </label>
            <label className="field">
              <span>E-mail *</span>
              <input
                required
                type="email"
                autoComplete="email"
                value={d.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </label>
            <label className="field full">
              <span>Plaats</span>
              <input autoComplete="address-level2" value={d.city} onChange={(e) => set("city", e.target.value)} />
            </label>
            <label className="field full">
              <span>Nog iets dat we moeten weten?</span>
              <textarea rows={3} value={d.message} onChange={(e) => set("message", e.target.value)} />
            </label>
          </div>
          {status === "error" && (
            <p className="form-error" role="alert">
              {error} <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          )}
        </fieldset>
      )}

      <div className="form-nav">
        {step > 1 ? (
          <button type="button" className="btn btn-ghost-dark" onClick={() => setStep(step - 1)}>
            Vorige
          </button>
        ) : (
          <span />
        )}
        {step < TOTAL ? (
          <button type="button" className="btn btn-primary" disabled={!canNext} onClick={() => setStep(step + 1)}>
            Volgende
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending" || !d.name || !d.email || !d.phone}
          >
            {status === "sending" ? "Versturen…" : "Verstuur aanvraag"}
          </button>
        )}
      </div>
      <p className="privacy">We gebruiken je gegevens alleen om contact met je op te nemen.</p>
    </form>
  );
}
