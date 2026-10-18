import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import PhoneDemo from "@/components/PhoneDemo";
import Motion from "@/components/Motion";
import { faqs, projects, reviews, services, site, steps, usps } from "@/lib/content";

const isProd = process.env.NODE_ENV === "production";

// Splitst tekst in woorden voor animaties
function W({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          <span className={`w ${className ?? ""}`}>
            <span>{w}</span>
          </span>{" "}
        </span>
      ))}
    </>
  );
}

const statement =
  "De meeste websites zien er prima uit. En toch belt er niemand. Ik bouw websites met één doel: dat jouw ideale klant contact met je opneemt.";

const marquee = ["Websites", "SEO", "Google Ads", "Meta Ads", "Onderhoud", "Hosting"];

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 19L19 5M9 5h10v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="stars" aria-label={`${n} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={i < n ? "on" : ""}>
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const visibleReviews = reviews.filter((r) => !(isProd && r.placeholder));

  return (
    <>
      <Motion />
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-grid-bg" aria-hidden />
          <div className="wrap hero-in">
            <div className="hero-copy">
              <p className="eyebrow" data-intro>
                <span className="live" /> Webdesign voor MKB &amp; lokale bedrijven
              </p>
              <h1 className="hero-title">
                <W text="Websites die" />
                <span className="w hl">
                  <span>aanvragen</span>
                </span>{" "}
                <W text="opleveren." />
              </h1>
              <p className="hero-lead" data-intro>
                Ik ben {site.owner}. Ik bouw websites voor ondernemers die niet alleen mooi willen ogen, maar meer klanten
                willen. Snel live, en je kunt me altijd bereiken.
              </p>
              <div className="hero-ctas" data-intro>
                <a href="#contact" className="btn btn-blue btn-lg" data-magnetic>
                  Plan een gratis gesprek
                  <Arrow />
                </a>
                <a href="#werk" className="btn btn-ghost btn-lg">
                  Bekijk mijn werk
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <PhoneDemo />
            </div>
          </div>
          <ul className="wrap hero-usps" data-intro>
            {usps.map((u) => (
              <li key={u.title}>
                <span className="mono">0{usps.indexOf(u) + 1}</span> {u.title}
              </li>
            ))}
          </ul>
        </section>

        {/* MARQUEE */}
        <div className="mq-clip">
        <section className="mq" aria-label="Diensten">
          {[0, 1].map((row) => (
            <div key={row} className={`mq-row ${row ? "alt" : ""}`}>
              <div className="mq-track">
                {[0, 1].map((dup) =>
                  marquee.map((m) => (
                    <span key={`${dup}-${m}`} aria-hidden={dup === 1}>
                      {m}
                      <i aria-hidden>✦</i>
                    </span>
                  ))
                )}
              </div>
            </div>
          ))}
        </section>
        </div>

        {/* STATEMENT */}
        <section className="statement">
          <div className="wrap">
            <p className="mono label" data-reveal>
              Mooi is niet genoeg
            </p>
            <p className="statement-text">
              {statement.split(" ").map((w, i) => (
                <span key={i} className="sw">
                  {w}{" "}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* USP STACK */}
        <section className="usps" aria-label="Waarom GroeiKoning">
          <div className="wrap">
            {usps.map((u, i) => (
              <article key={u.title} className={`usp-card usp-${i + 1}`}>
                <div className="usp-top">
                  <span className="mono">0{i + 1} / 0{usps.length}</span>
                  <span className="mono">{u.kicker}</span>
                </div>
                <h2>{u.title}</h2>
                <p>{u.text}</p>
                <div className="usp-art" aria-hidden>
                  {i === 0 && (
                    <div className="art-speed">
                      <i /><i /><i /><i /><i />
                    </div>
                  )}
                  {i === 1 && (
                    <div className="art-chat">
                      <span className="bubble in">Kun je de openingstijden aanpassen?</span>
                      <span className="bubble out">Staat erop 👍</span>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="art-funnel">
                      <span style={{ ["--w" as string]: "100%" }}>Bezoekers</span>
                      <span style={{ ["--w" as string]: "72%" }}>Bekijken diensten</span>
                      <span style={{ ["--w" as string]: "44%" }}>Klikken op contact</span>
                      <span style={{ ["--w" as string]: "26%" }} className="hot">Aanvraag</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DIENSTEN */}
        <section id="diensten" className="svc">
          <div className="wrap">
            <div className="sec-head">
              <p className="mono label" data-reveal>
                Diensten
              </p>
              <h2 className="h2" data-split>
                <W text="Alles om online klanten binnen te halen." />
              </h2>
            </div>
            <ul className="svc-list">
              {services.map((s, i) => (
                <li key={s.title} className={`svc-row ${s.main ? "main" : ""}`}>
                  <a href="#contact" data-cursor="Bespreken">
                    <span className="svc-num mono">0{i + 1}</span>
                    <span className="svc-title">{s.title}</span>
                    <span className="svc-text">
                      {s.text}
                      <span className="svc-tags">
                        {s.tags.map((t) => (
                          <em key={t}>{t}</em>
                        ))}
                      </span>
                    </span>
                    <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WERK */}
        <section id="werk" className="work">
          <div className="work-track">
            <div className="work-intro">
              <p className="mono label">Werk</p>
              <h2 className="h2" data-split>
                <W text="Ondernemers die ik online sterker maakte." />
              </h2>
              <p>Scroll verder voor een paar projecten.</p>
            </div>
            {projects.map((p, i) => {
              const Tag = p.url ? "a" : "div";
              return (
                <Tag
                  key={p.name}
                  className="case"
                  {...(p.url
                    ? { href: p.url, target: "_blank", rel: "noopener noreferrer", "data-cursor": "Bekijk" }
                    : {})}
                >
                  <div className="case-shot" style={{ ["--tone" as string]: p.tone }}>
                    <div className="case-browser">
                      <div className="case-bar">
                        <i /><i /><i />
                      </div>
                      {p.image ? (
                        <img src={p.image} alt={`Website ${p.name}`} loading="lazy" />
                      ) : (
                        <div className="case-ph">
                          <span className="case-ph-logo">{p.name}</span>
                          <span className="case-ph-line" />
                          <span className="case-ph-line short" />
                          <span className="case-ph-btn" />
                        </div>
                      )}
                    </div>
                    <span className="case-idx mono">0{i + 1}</span>
                  </div>
                  <div className="case-meta">
                    <div>
                      <h3>{p.name}</h3>
                      <p className="mono">
                        {p.sector}
                        {p.location ? ` · ${p.location}` : ""}
                      </p>
                    </div>
                    <div className="case-tags">
                      {p.tags.map((t) => (
                        <em key={t}>{t}</em>
                      ))}
                    </div>
                  </div>
                  <p className="case-text">{p.text}</p>
                </Tag>
              );
            })}
            <a href="#contact" className="case case-cta" data-cursor="Contact">
              <span className="mono label">Jouw bedrijf?</span>
              <span className="case-cta-title">Jij bent de volgende.</span>
              <Arrow />
            </a>
          </div>
        </section>

        {/* WERKWIJZE */}
        <section id="werkwijze" className="process">
          <div className="wrap process-in">
            <div className="sec-head sticky">
              <p className="mono label" data-reveal>
                Werkwijze
              </p>
              <h2 className="h2" data-split>
                <W text="Van eerste gesprek naar meer aanvragen." />
              </h2>
              <p data-reveal>Helder en persoonlijk. Je weet altijd waar je aan toe bent, en je hebt altijd mij aan de lijn.</p>
            </div>
            <ol className="steps">
              <span className="steps-line" aria-hidden>
                <i />
              </span>
              {steps.map((s, i) => (
                <li key={s.title} className="step">
                  <span className="step-dot mono">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* OVER MIJ */}
        <section id="over" className="about">
          <div className="wrap about-in">
            <div className="about-photo" data-reveal>
              {site.photo ? (
                <img src={site.photo} alt={`${site.owner}, oprichter van GroeiKoning`} />
              ) : (
                <div className="about-ph">
                  <span>{site.owner[0]}</span>
                </div>
              )}
              <span className="about-badge mono">
                <span className="live" /> Bereikbaar
              </span>
            </div>
            <div className="about-copy">
              <p className="mono label" data-reveal>
                Over mij
              </p>
              <h2 className="h2" data-split>
                <W text={`Hoi, ik ben ${site.owner}.`} />
              </h2>
              <div data-reveal>
                <p>
                  Ik heb GroeiKoning opgericht omdat ik te vaak websites zag die er netjes uitzien, maar niets opleveren.
                  Ondernemers betalen veel geld, wachten maanden, en daarna blijft het stil.
                </p>
                <p>
                  Ik doe het anders. Ik werk snel, je spreekt altijd mij en niet een accountmanager, en alles wat ik maak
                  is erop gericht dat jouw telefoon gaat.
                </p>
              </div>
              <a href="#contact" className="btn btn-blue" data-magnetic data-reveal>
                Maak kennis
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="reviews">
          <div className="wrap">
            <div className="sec-head">
              <p className="mono label" data-reveal>
                Reviews
              </p>
              <h2 className="h2" data-split>
                <W text="Wat klanten over mij zeggen." />
              </h2>
            </div>
            {visibleReviews.length > 0 && (
              <div className="rev-grid">
                {visibleReviews.map((r, i) => (
                  <figure key={i} className={`rev ${r.placeholder ? "is-ph" : ""}`} data-reveal>
                    <Stars n={r.stars} />
                    <blockquote>{r.text}</blockquote>
                    <figcaption>
                      <b>{r.name}</b>
                      {r.company && <span>{r.company}</span>}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
            <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="g-cta" data-reveal>
              <svg viewBox="0 0 48 48" width="30" height="30" aria-hidden>
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
              </svg>
              <span>Lees alle reviews op Google</span>
              <Arrow />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq">
          <div className="wrap faq-in">
            <div className="sec-head">
              <p className="mono label" data-reveal>
                FAQ
              </p>
              <h2 className="h2" data-split>
                <W text="Goed om te weten." />
              </h2>
              <p data-reveal>Staat je vraag er niet bij? Stel hem gewoon, ik reageer snel.</p>
            </div>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item" data-reveal>
                  <summary>
                    <span>{f.q}</span>
                    <i aria-hidden />
                  </summary>
                  <div className="faq-a">
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="wrap">
            <div className="contact-head">
              <p className="mono label" data-reveal>
                Contact
              </p>
              <h2 className="contact-title" data-split>
                <W text="Klaar voor meer" />
                <span className="w hl">
                  <span>aanvragen?</span>
                </span>
              </h2>
              <div className="contact-direct" data-reveal>
                <span className="mono">Direct contact</span>
                <span className="sel">{site.email}</span>
                {site.phone && <span className="sel">{site.phone}</span>}
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-col" data-reveal>
                <h3>
                  <span className="mono">A</span> Vertel me wat je zoekt
                </h3>
                <LeadForm />
              </div>
              <div className="contact-col" data-reveal>
                <h3>
                  <span className="mono">B</span> Of plan direct een gesprek
                </h3>
                <CalendlyEmbed />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="ftr">
        <div className="wrap">
          <div className="ftr-grid">
            <div>
              <img src="/logo-light.png" alt="GroeiKoning" width={215} height={28} />
              <p>Websites, SEO en advertenties voor MKB en lokale bedrijven.</p>
            </div>
            <div>
              <p className="mono label">Contact</p>
              <span className="sel">{site.email}</span>
              {site.phone && <span className="sel">{site.phone}</span>}
              <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer">
                Plan een gesprek
              </a>
            </div>
            <div>
              <p className="mono label">Gegevens</p>
              <span>{site.address}</span>
              <span>KvK {site.kvk}</span>
            </div>
          </div>
          <p className="big-word" aria-hidden>
            {"GROEIKONING".split("").map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </p>
          <div className="ftr-bottom">
            <span>© {new Date().getFullYear()} GroeiKoning</span>
            <a href="#top">Terug naar boven ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
