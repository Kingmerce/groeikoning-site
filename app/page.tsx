import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { audiences, faqs, projects, reviews, services, site, steps } from "@/lib/content";

const isProd = process.env.NODE_ENV === "production";

const serviceIcons = [
  // monitor
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>,
  // pin
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>,
  // megaphone
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10v4h3l7 4V6L7 10H4z" /><path d="M18 9a4 4 0 0 1 0 6" /></svg>,
  // wrench
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8V20h3.2l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z" /></svg>,
];

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
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="hero section-dark">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="tag tag-dark">Webdesign & marketing voor bouw en installatie</span>
              <h1 className="t1">
                Een website die <span className="accent">klussen oplevert</span>, niet alleen mooi staat.
              </h1>
              <p className="lead">
                GroeiKoning bouwt websites en online marketing op maat voor loodgieters, dakdekkers, installateurs en
                aannemers. Zodat klanten uit jouw regio jou vinden en direct een aanvraag doen.
              </p>
              <div className="hero-ctas">
                <a href="#contact" className="btn btn-primary btn-lg">
                  Plan een kennismaking
                </a>
                <a href="#portfolio" className="btn btn-ghost btn-lg">
                  Bekijk ons werk
                </a>
              </div>
              <ul className="hero-points">
                <li>Altijd op maat</li>
                <li>Teksten worden voor je geschreven</li>
                <li>Persoonlijk contact</li>
              </ul>
            </div>

            <div className="hero-visual" aria-hidden>
              <div className="mock">
                <div className="mock-bar">
                  <i /><i /><i />
                  <span>jouwbedrijf.nl</span>
                </div>
                <div className="mock-body">
                  <div className="mock-nav">
                    <b />
                    <span /><span /><span />
                  </div>
                  <div className="mock-hero">
                    <div className="mock-lines">
                      <em className="w80" />
                      <em className="w60" />
                      <small className="w90" />
                      <small className="w70" />
                      <div className="mock-btn">Offerte aanvragen</div>
                    </div>
                    <div className="mock-img" />
                  </div>
                  <div className="mock-cards">
                    <div /><div /><div />
                  </div>
                </div>
              </div>
              <div className="float-card">
                <span className="dot" />
                <div>
                  <strong>Nieuwe aanvraag</strong>
                  <small>Via het offerteformulier</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOELGROEP */}
        <section className="audience section-light-2">
          <div className="container audience-inner">
            <p className="overline">Gespecialiseerd in</p>
            <ul className="audience-list">
              {audiences.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* DIENSTEN */}
        <section id="diensten" className="section section-dark-2">
          <div className="container">
            <div className="section-head">
              <p className="overline">Wat we doen</p>
              <h2 className="t2">Alles om online aan nieuwe klussen te komen</h2>
              <p className="lead">
                Jij bent goed in je vak. Wij zorgen dat mensen dat online ook zien, en contact met je opnemen.
              </p>
            </div>
            <div className="cards-4">
              {services.map((s, i) => (
                <article key={s.title} className="card card-dark">
                  <div className="icon">{serviceIcons[i]}</div>
                  <h3 className="t6">{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WERKWIJZE */}
        <section id="werkwijze" className="section section-light">
          <div className="container">
            <div className="section-head">
              <p className="overline">Werkwijze</p>
              <h2 className="t2">Van eerste gesprek tot nieuwe aanvragen</h2>
              <p className="lead">Helder, persoonlijk en zonder gedoe. Jij weet altijd waar je aan toe bent.</p>
            </div>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title} className="step">
                  <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="t6">{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="section section-dark">
          <div className="container">
            <div className="section-head">
              <p className="overline">Portfolio</p>
              <h2 className="t2">Vakmensen die we online sterker maakten</h2>
            </div>
            <div className="cards-3">
              {projects.map((p) => {
                const Wrapper = p.url ? "a" : "div";
                return (
                  <Wrapper
                    key={p.name}
                    className="project"
                    {...(p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <div className="project-shot">
                      <div className="mock-bar small">
                        <i /><i /><i />
                      </div>
                      {p.image ? (
                        <img src={p.image} alt={`Website ${p.name}`} loading="lazy" />
                      ) : (
                        <div className="project-placeholder">
                          <span>{p.name}</span>
                        </div>
                      )}
                    </div>
                    <div className="project-body">
                      <div className="project-tags">
                        {p.tags.map((t) => (
                          <span key={t} className="tag tag-dark">
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="t6">{p.name}</h3>
                      <p className="project-meta">
                        {p.sector}
                        {p.location ? ` · ${p.location}` : ""}
                      </p>
                      <p>{p.text}</p>
                      {p.url && <span className="link-arrow">Bekijk website →</span>}
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="section section-light-2">
          <div className="container">
            <div className="section-head">
              <p className="overline">Reviews</p>
              <h2 className="t2">Wat klanten over ons zeggen</h2>
            </div>
            {visibleReviews.length > 0 && (
              <div className="cards-3">
                {visibleReviews.map((r, i) => (
                  <figure key={i} className={`review ${r.placeholder ? "is-placeholder" : ""}`}>
                    <Stars n={r.stars} />
                    <blockquote>“{r.text}”</blockquote>
                    <figcaption>
                      <strong>{r.name}</strong>
                      {r.company && <span>{r.company}</span>}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
            <div className="google-cta">
              <svg viewBox="0 0 48 48" width="28" height="28" aria-hidden>
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
              </svg>
              <span>Lees al onze reviews op Google</span>
              <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                Bekijk reviews
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section-dark-2">
          <div className="container faq-grid">
            <div className="section-head left">
              <p className="overline">Veelgestelde vragen</p>
              <h2 className="t2">Goed om te weten</h2>
              <p className="lead">Staat je vraag er niet tussen? Stel hem gerust tijdens de kennismaking.</p>
              <a href="#contact" className="btn btn-primary">
                Plan een kennismaking
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q} className="faq">
                  <summary>
                    <span>{f.q}</span>
                    <i aria-hidden />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-light">
          <div className="container">
            <div className="section-head">
              <p className="overline">Kennismaken</p>
              <h2 className="t2">Laten we kijken wat we voor jou kunnen doen</h2>
              <p className="lead">
                Beantwoord een paar korte vragen, dan bellen we je terug. Of plan meteen zelf een moment in de agenda.
              </p>
            </div>
            <div className="contact-grid">
              <div>
                <h3 className="t6 col-title">1. Stel je aanvraag samen</h3>
                <LeadForm />
              </div>
              <div>
                <h3 className="t6 col-title">2. Of plan direct een kennismaking</h3>
                <CalendlyEmbed />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-dark">
        <div className="container footer-grid">
          <div>
            <img src="/logo-light.png" alt="GroeiKoning" width={184} height={24} />
            <p>Webdesign en online marketing voor bouw- en installatiebedrijven.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer">
              Plan een kennismaking
            </a>
          </div>
          <div>
            <h4>Gegevens</h4>
            <span>{site.address}</span>
            <span>KvK {site.kvk}</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} GroeiKoning</span>
        </div>
      </footer>
    </>
  );
}
