// Section primitives — reusable editorial building blocks.

const Section = ({ id, number, title, lead, children, screenLabel }) => (
  <section
    id={id}
    className="ed-section"
    data-screen-label={screenLabel || `${number} ${title}`}
  >
    <div className="ed-section-rule" aria-hidden="true" />
    <header className="ed-section-head">
      <div className="ed-section-meta">
        <span className="mono">{number}</span>
      </div>
      <div className="ed-section-title-wrap">
        <h2 className="ed-section-title">{title}</h2>
        {lead ? <p className="ed-section-lead">{lead}</p> : null}
      </div>
    </header>
    <div className="ed-section-body">{children}</div>
  </section>
);

const Mono = ({ children, className = "" }) => (
  <span className={`mono ${className}`}>{children}</span>
);

// EN / ES toggle, masthead-style.
const LangToggle = ({ lang, setLang, label }) => (
  <div className="ed-lang" role="group" aria-label={label}>
    <button
      type="button"
      className={`ed-lang-btn mono ${lang === "en" ? "is-active" : ""}`}
      aria-pressed={lang === "en"}
      onClick={() => setLang("en")}
    >
      EN
    </button>
    <span className="ed-lang-sep" aria-hidden="true">·</span>
    <button
      type="button"
      className={`ed-lang-btn mono ${lang === "es" ? "is-active" : ""}`}
      aria-pressed={lang === "es"}
      onClick={() => setLang("es")}
    >
      ES
    </button>
  </div>
);

// Masthead — fixed top, restrained, with EN/ES toggle and CTA.
const Masthead = ({ lang, setLang, content }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`ed-mast ${scrolled ? "is-scrolled" : ""}`}>
      <div className="ed-mast-inner">
        <a href="#top" className="ed-mast-mark" aria-label="JCJVP — Jean Carlo Vallejos">
          <span className="ed-mast-monogram serif">JCJVP</span>
          <span className="ed-mast-dot" aria-hidden="true" />
          <span className="ed-mast-issue mono">{content.meta.issue}</span>
        </a>
        <nav className="ed-mast-nav" aria-label="Sections">
          {content.nav.items.map((it) => (
            <a key={it.id} href={`#${it.id}`} className="ed-mast-link">
              {it.label}
            </a>
          ))}
        </nav>
        <div className="ed-mast-right">
          <LangToggle lang={lang} setLang={setLang} label={content.meta.langLabel} />
          <span className="ed-mast-rule" aria-hidden="true" />
          <a className="ed-mast-cta mono" href="#contact">
            {content.nav.cta} ↓
          </a>
        </div>
      </div>
    </header>
  );
};

// Hero — asymmetric editorial split, full-bleed photo on the right.
const Hero = ({ content }) => {
  const h = content.hero;
  return (
    <section className="ed-hero" id="top" data-screen-label="01 Hero">
      <div className="ed-hero-strip">
        <span className="mono">{h.kicker}</span>
        <span className="ed-strip-sep" aria-hidden="true">/</span>
        <span className="mono">{h.location}</span>
        <span className="ed-strip-sep" aria-hidden="true">/</span>
        <span className="mono">{content.meta.date}</span>
      </div>

      <div className="ed-hero-grid">
        <div className="ed-hero-text">
          <p className="ed-hero-eyebrow mono">{content.meta.kicker}</p>
          <div className="ed-hero-identity">
            <h1 className="ed-hero-name">{h.name}</h1>
            <p className="ed-hero-role serif-italic">{h.role}</p>
          </div>
          <p className="ed-hero-headline serif">{h.headline}</p>
          <p className="ed-hero-standfirst">{h.standfirst}</p>
          <p className="ed-hero-credibility mono">{h.credibility}</p>
          <div className="ed-hero-meta">
            {h.meta.map((m) => (
              <div key={m.k} className="ed-hero-meta-row">
                <span className="ed-hero-meta-k mono">{m.k}</span>
                <span className="ed-hero-meta-v">{m.v}</span>
              </div>
            ))}
          </div>
        </div>

        <figure className="ed-hero-figure">
          <div className="ed-hero-photo">
            <img
              src="assets/portrait-seated.jpg"
              alt="Jean Carlo Vallejos, photographed seated outdoors in Barcelona."
              loading="eager"
            />
            <div className="ed-hero-photo-overlay" aria-hidden="true" />
          </div>
          <figcaption className="ed-hero-caption mono">
            {content.meta.photoCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

const ProfileSection = ({ content }) => {
  const p = content.profile;
  return (
    <Section id="profile" number={p.number} title={p.title} lead={p.lead} screenLabel="02 Profile">
      <div className="ed-profile-body">
        {p.body.map((para, i) => (
          <p key={i} className={i === 0 ? "ed-profile-lead" : "ed-profile-para"}>
            {para}
          </p>
        ))}
      </div>
    </Section>
  );
};

// The single dual-track borrow from Direction B.
const TracksSection = ({ content }) => {
  const t = content.tracks;
  return (
    <Section id="tracks" number={t.number} title={t.title} lead={t.lead} screenLabel="03 Two Tracks">
      <div className="ed-tracks">
        <div className="ed-track ed-track-pro">
          <div className="ed-track-eyebrow mono">{t.pro.eyebrow}</div>
          <h3 className="ed-track-title serif">{t.pro.title}</h3>
          <div className="ed-track-body">
            {t.pro.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="ed-track-bullets">
            {t.pro.bullets.map((b) => (
              <li key={b}>
                <span className="ed-track-bullet-mark" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ed-track-divider" aria-hidden="true" />

        <div className="ed-track ed-track-aca">
          <div className="ed-track-eyebrow mono">{t.aca.eyebrow}</div>
          <h3 className="ed-track-title serif">{t.aca.title}</h3>
          <div className="ed-track-body">
            {t.aca.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="ed-track-bullets">
            {t.aca.bullets.map((b) => (
              <li key={b}>
                <span className="ed-track-bullet-mark" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="ed-tracks-convergence serif-italic">{t.convergence}</p>
    </Section>
  );
};

const RoleSection = ({ content }) => {
  const r = content.role;
  return (
    <Section id="role" number={r.number} title={r.title} lead={r.lead} screenLabel="04 Current Role">
      <div className="ed-role">
        <div className="ed-role-head">
          <p className="ed-role-org">{r.org}</p>
          <p className="ed-role-title serif-italic">{r.title2}</p>
          <p className="ed-role-period mono">{r.period}</p>
        </div>
        <p className="ed-role-summary">{r.summary}</p>
        <ul className="ed-role-points">
          {r.points.map((p, i) => (
            <li key={i}>
              <span className="ed-role-point-num mono">{String(i + 1).padStart(2, "0")}</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

const ExperienceSection = ({ content }) => {
  const e = content.experience;
  return (
    <Section id="experience" number={e.number} title={e.title} lead={e.lead} screenLabel="05 Experience">
      <ol className="ed-exp">
        {e.items.map((it, i) => (
          <li key={i} className="ed-exp-row">
            <div className="ed-exp-year mono">{it.year}</div>
            <div className="ed-exp-body">
              <p className="ed-exp-org">{it.org}</p>
              <p className="ed-exp-role serif-italic">{it.role}</p>
              <p className="ed-exp-note">{it.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

const DomainsSection = ({ content }) => {
  const d = content.domains;
  return (
    <Section id="domains" number={d.number} title={d.title} lead={d.lead} screenLabel="06 Domains">
      <dl className="ed-domains">
        {d.items.map((it, i) => (
          <div key={i} className="ed-domain-row">
            <dt className="ed-domain-k">
              <span className="ed-domain-num mono">{String(i + 1).padStart(2, "0")}</span>
              <span className="serif">{it.k}</span>
            </dt>
            <dd className="ed-domain-v">{it.v}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

const StoriesSection = ({ content }) => {
  const s = content.stories;
  return (
    <Section id="stories" number={s.number} title={s.title} lead={s.lead} screenLabel="07 Selected Work">
      <div className="ed-stories">
        {s.items.map((it, i) => (
          <article key={i} className="ed-story">
            <p className="ed-story-tag mono">{it.tag}</p>
            <h3 className="ed-story-title serif">{it.title}</h3>
            <p className="ed-story-body">{it.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

const AcademicSection = ({ content }) => {
  const a = content.academic;
  return (
    <Section id="academic" number={a.number} title={a.title} lead={a.lead} screenLabel="08 Academic">
      <div className="ed-academic">
        <div className="ed-academic-prose">
          {a.body.map((p, i) => (
            <p key={i} className={i === 0 ? "ed-academic-lead" : ""}>
              {p}
            </p>
          ))}
        </div>
        <aside className="ed-academic-list" aria-label="Selected courses">
          <p className="ed-academic-list-title mono">Selected Courses</p>
          <ul>
            {a.reading.map((r, i) => (
              <li key={i}>
                <span className="mono ed-academic-y">{r.y}</span>
                <span className="ed-academic-t">{r.t}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
};

const EducationSection = ({ content }) => {
  const e = content.education;
  return (
    <Section id="education" number={e.number} title={e.title} lead={e.lead} screenLabel="09 Education">
      <ul className="ed-edu">
        {e.items.map((it, i) => (
          <li key={i} className="ed-edu-row">
            <span className="ed-edu-y mono">{it.y}</span>
            <span className="ed-edu-t serif">{it.t}</span>
            <span className="ed-edu-o">{it.o}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

const StackSection = ({ content }) => {
  const s = content.stack;
  return (
    <Section id="stack" number={s.number} title={s.title} lead={s.lead} screenLabel="10 Stack">
      <dl className="ed-stack">
        {s.groups.map((g, i) => (
          <div key={i} className="ed-stack-row">
            <dt className="ed-stack-k mono">{g.k}</dt>
            <dd className="ed-stack-v">{g.v}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

const ContactSection = ({ content }) => {
  const c = content.contact;
  return (
    <Section id="contact" number={c.number} title={c.title} lead={c.lead} screenLabel="11 Contact">
      <div className="ed-contact">
        <div className="ed-contact-card">
          <img
            className="ed-contact-avatar"
            src="assets/portrait-headshot.jpg"
            alt="Jean Carlo Vallejos — close-up portrait."
          />
          <div className="ed-contact-id">
            <p className="ed-contact-name serif">Jean Carlo Vallejos</p>
            <p className="ed-contact-role serif-italic">Chief AI & Data Architect</p>
            <p className="ed-contact-loc mono">Barcelona · ES</p>
          </div>
        </div>
        <ul className="ed-contact-lines">
          {c.lines.map((l, i) => (
            <li key={i} className="ed-contact-line">
              <span className="ed-contact-k mono">{l.k}</span>
              <a className="ed-contact-v" href={l.href}>
                {l.v}
                <span className="ed-contact-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="ed-contact-note serif-italic">{c.note}</p>
      </div>
    </Section>
  );
};

const Footer = ({ content }) => (
  <footer className="ed-foot">
    <div className="ed-foot-rule" aria-hidden="true" />
    <div className="ed-foot-inner">
      <p className="ed-foot-colophon mono">{content.footer.colophon}</p>
      <p className="ed-foot-rights mono">{content.footer.rights}</p>
    </div>
  </footer>
);

Object.assign(window, {
  Masthead,
  Hero,
  ProfileSection,
  TracksSection,
  RoleSection,
  ExperienceSection,
  DomainsSection,
  StoriesSection,
  AcademicSection,
  EducationSection,
  StackSection,
  ContactSection,
  Footer,
});
