import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AnimatedRow,
  AnimatedSection,
  MotionRule,
  Reveal,
  Stagger,
} from "./motion.jsx";

const Section = ({ id, number, title, lead, children, screenLabel, railAddon }) => (
  <AnimatedSection
    id={id}
    className="ed-section"
    data-screen-label={screenLabel || `${number} ${title}`}
  >
    <MotionRule className="ed-section-rule" />
    <header className="ed-section-head">
      <AnimatedRow as="div" className="ed-section-meta">
        <span className="mono">{number}</span>
        {railAddon}
      </AnimatedRow>
      <div className="ed-section-title-wrap">
        <AnimatedRow as="h2" className="ed-section-title">{title}</AnimatedRow>
        {lead ? <AnimatedRow as="p" className="ed-section-lead">{lead}</AnimatedRow> : null}
      </div>
    </header>
    <AnimatedRow as="div" className="ed-section-body">{children}</AnimatedRow>
  </AnimatedSection>
);

// EN / ES toggle, masthead-style.
const LangToggle = ({ lang, setLang, label, options }) => (
  <div className="ed-lang" role="group" aria-label={label}>
    {options.map((option, index) => (
      <Fragment key={option.code}>
        {index > 0 ? <span className="ed-lang-sep" aria-hidden="true">·</span> : null}
        <button
          type="button"
          className={`ed-lang-btn mono ${lang === option.code ? "is-active" : ""}`}
          aria-pressed={lang === option.code}
          onClick={() => setLang(option.code)}
        >
          {option.label}
        </button>
      </Fragment>
    ))}
  </div>
);

// Masthead — fixed top, restrained, with EN/ES toggle and CTA.
export const Masthead = ({ lang, setLang, content }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Reveal as="header" className={`ed-mast ${scrolled ? "is-scrolled" : ""}`} y={0}>
      <div className="ed-mast-inner">
        <a href="#top" className="ed-mast-mark" aria-label={content.meta.homeLabel}>
          <span className="ed-mast-monogram serif">{content.meta.wordmark}</span>
          <span className="ed-mast-dot" aria-hidden="true" />
          <span className="ed-mast-issue mono">{content.meta.issue}</span>
        </a>
        <nav className="ed-mast-nav" aria-label={content.meta.navLabel}>
          {content.nav.items.map((it) => (
            <a key={it.id} href={`#${it.id}`} className="ed-mast-link">
              {it.label}
            </a>
          ))}
        </nav>
        <div className="ed-mast-right">
          <LangToggle
            lang={lang}
            setLang={setLang}
            label={content.meta.langLabel}
            options={content.meta.langOptions}
          />
          <span className="ed-mast-rule" aria-hidden="true" />
          <a className="ed-mast-cta mono" href={content.nav.ctaHref}>
            {content.nav.cta} ↓
          </a>
        </div>
      </div>
    </Reveal>
  );
};

const ServiceIndexReel = ({ activeIndex, items, label }) => {
  const reduceMotion = useReducedMotion();
  const total = items.length;
  const current = String(activeIndex + 1).padStart(2, "0");
  const count = `${current} / ${String(total).padStart(2, "0")}`;

  return (
    <div
      className="ed-service-index"
      aria-label={`Active service ${current}`}
      aria-live="polite"
      style={{ "--active-service-index": activeIndex }}
    >
      <span className="ed-service-index-label mono">{label}</span>
      <div className="ed-service-index-window">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={current}
            className="ed-service-index-number"
            aria-hidden="true"
            initial={reduceMotion ? false : { y: 28, opacity: 0, filter: "blur(1px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={reduceMotion ? undefined : { y: -28, opacity: 0, filter: "blur(1px)" }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }
          >
            {count}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.div
        key={current}
        className="ed-service-index-progress"
        aria-hidden="true"
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: reduceMotion ? 1 : 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 6.5, ease: "linear" }}
      />
      <p className="ed-service-index-mobile mono">
        {count}
      </p>
    </div>
  );
};

// Hero — asymmetric editorial split, full-bleed photo on the right.
export const Hero = ({ content }) => {
  const h = content.hero;
  return (
    <section className="ed-hero" id="top" data-screen-label="01 Hero">
      <Reveal className="ed-hero-strip" y={6}>
        <span className="mono">{h.kicker}</span>
        <span className="ed-strip-sep" aria-hidden="true">/</span>
        <span className="mono">{h.location}</span>
        <span className="ed-strip-sep" aria-hidden="true">/</span>
        <span className="mono">{content.meta.date}</span>
      </Reveal>

      <div className="ed-hero-grid">
        <Stagger className="ed-hero-text" stagger={0.07} delay={0.04}>
          <AnimatedRow as="p" className="ed-hero-eyebrow mono">{content.meta.kicker}</AnimatedRow>
          <AnimatedRow as="div" className="ed-hero-identity">
            <h1 className="ed-hero-name">{h.name}</h1>
            <p className="ed-hero-role serif-italic">{h.role}</p>
          </AnimatedRow>
          <AnimatedRow as="p" className="ed-hero-headline serif">{h.headline}</AnimatedRow>
          <AnimatedRow as="p" className="ed-hero-standfirst">{h.standfirst}</AnimatedRow>
          <AnimatedRow as="p" className="ed-hero-credibility mono">{h.credibility}</AnimatedRow>
          <AnimatedRow as="div" className="ed-hero-meta">
            {h.meta.map((m) => (
              <div key={m.k} className="ed-hero-meta-row">
                <span className="ed-hero-meta-k mono">{m.k}</span>
                <span className="ed-hero-meta-v">{m.v}</span>
              </div>
            ))}
          </AnimatedRow>
        </Stagger>

        <Reveal as="figure" className="ed-hero-figure" delay={0.12} duration={0.8} y={10} scale={0.985}>
          <div className="ed-hero-photo">
            <img
              src="/assets/portrait-seated.jpg"
              alt={h.imageAlt}
              loading="eager"
            />
            <div className="ed-hero-photo-overlay" aria-hidden="true" />
          </div>
          <figcaption className="ed-hero-caption mono">
            {content.meta.photoCaption}
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
};

export const ProfileSection = ({ content }) => {
  const p = content.profile;
  return (
    <Section id="profile" number={p.number} title={p.title} lead={p.lead} screenLabel="02 Profile">
      <Stagger className="ed-profile-body" stagger={0.075}>
        {p.body.map((para, i) => (
          <AnimatedRow as="p" key={i} className={i === 0 ? "ed-profile-lead" : "ed-profile-para"}>
            {para}
          </AnimatedRow>
        ))}
      </Stagger>
    </Section>
  );
};

export const HelpSection = ({ content }) => {
  const h = content.help;
  const reduceMotion = useReducedMotion();
  const [activeHelpIndex, setActiveHelpIndex] = useState(0);
  const [isHelpPaused, setIsHelpPaused] = useState(false);
  const capabilityLabel = h.title.toLowerCase().includes("dónde") ? "Capacidad" : "Capability";

  useEffect(() => {
    if (reduceMotion || isHelpPaused || h.items.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveHelpIndex((current) => (current + 1) % h.items.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [h.items.length, isHelpPaused, reduceMotion]);

  return (
    <Section
      id="help"
      number={h.number}
      title={h.title}
      lead={h.lead}
      screenLabel="Where I can help"
      railAddon={
        <ServiceIndexReel
          activeIndex={activeHelpIndex}
          items={h.items}
          label={capabilityLabel}
        />
      }
    >
      <Stagger className="ed-help" stagger={0.065}>
        <AnimatedRow
          as="div"
          className="ed-help-stage"
          onMouseEnter={() => setIsHelpPaused(true)}
          onMouseLeave={() => setIsHelpPaused(false)}
          onFocus={() => setIsHelpPaused(true)}
          onBlur={() => setIsHelpPaused(false)}
          onClick={() => {
            if (!reduceMotion) {
              setActiveHelpIndex((current) => (current + 1) % h.items.length);
            }
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={h.items[activeHelpIndex].title}
              className="ed-help-item is-active"
              tabIndex={0}
              aria-live="polite"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.78, ease: [0.16, 1, 0.3, 1] }
              }
            >
              <h3 className="ed-help-title serif">{h.items[activeHelpIndex].title}</h3>
              <p className="ed-help-body">{h.items[activeHelpIndex].body}</p>
              <ul className="ed-help-tags" aria-label={h.items[activeHelpIndex].title}>
                {h.items[activeHelpIndex].tags.map((tag) => (
                  <li key={tag} className="mono">{tag}</li>
                ))}
              </ul>
            </motion.article>
          </AnimatePresence>
        </AnimatedRow>
        <AnimatedRow as="p" className="ed-help-closing serif-italic">{h.closing}</AnimatedRow>
      </Stagger>
    </Section>
  );
};

// The single dual-track borrow from Direction B.
export const TracksSection = ({ content }) => {
  const t = content.tracks;
  return (
    <Section id="tracks" number={t.number} title={t.title} lead={t.lead} screenLabel="03 Two Tracks">
      <div className="ed-tracks">
        <Reveal className="ed-track ed-track-pro">
        <Stagger stagger={0.065}>
          <div className="ed-track-eyebrow mono">{t.pro.eyebrow}</div>
          <h3 className="ed-track-title serif">{t.pro.title}</h3>
          <div className="ed-track-body">
            {t.pro.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="ed-track-bullets">
            {t.pro.bullets.map((b) => (
              <AnimatedRow key={b}>
                <span className="ed-track-bullet-mark" aria-hidden="true" />
                <span>{b}</span>
              </AnimatedRow>
            ))}
          </ul>
        </Stagger>
        </Reveal>

        <MotionRule className="ed-track-divider" direction="y" delay={0.08} />

        <Reveal className="ed-track ed-track-aca">
        <Stagger stagger={0.065}>
          <div className="ed-track-eyebrow mono">{t.aca.eyebrow}</div>
          <h3 className="ed-track-title serif">{t.aca.title}</h3>
          <div className="ed-track-body">
            {t.aca.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="ed-track-bullets">
            {t.aca.bullets.map((b) => (
              <AnimatedRow key={b}>
                <span className="ed-track-bullet-mark" aria-hidden="true" />
                <span>{b}</span>
              </AnimatedRow>
            ))}
          </ul>
        </Stagger>
        </Reveal>
      </div>

      <Reveal as="p" className="ed-tracks-convergence serif-italic">{t.convergence}</Reveal>
    </Section>
  );
};

export const RoleSection = ({ content }) => {
  const r = content.role;
  return (
    <Section id="role" number={r.number} title={r.title} lead={r.lead} screenLabel="04 Current Role">
      <Stagger className="ed-role" stagger={0.07}>
        <AnimatedRow as="div" className="ed-role-head">
          <p className="ed-role-org">{r.org}</p>
          <p className="ed-role-title serif-italic">{r.title2}</p>
          <p className="ed-role-period mono">{r.period}</p>
        </AnimatedRow>
        <AnimatedRow as="p" className="ed-role-summary">{r.summary}</AnimatedRow>
        <ul className="ed-role-points">
          {r.points.map((p, i) => (
            <AnimatedRow key={i}>
              <span className="ed-role-point-num mono">{String(i + 1).padStart(2, "0")}</span>
              <span>{p}</span>
            </AnimatedRow>
          ))}
        </ul>
      </Stagger>
    </Section>
  );
};

export const ExperienceSection = ({ content }) => {
  const e = content.experience;
  return (
    <Section id="experience" number={e.number} title={e.title} lead={e.lead} screenLabel="05 Experience">
      <Stagger as="ol" className="ed-exp" stagger={0.065}>
        {e.items.map((it, i) => (
          <AnimatedRow key={i} className="ed-exp-row">
            <div className="ed-exp-year mono">{it.year}</div>
            <div className="ed-exp-body">
              <p className="ed-exp-org">{it.org}</p>
              <p className="ed-exp-role serif-italic">{it.role}</p>
              <p className="ed-exp-note">{it.note}</p>
            </div>
          </AnimatedRow>
        ))}
      </Stagger>
    </Section>
  );
};

export const DomainsSection = ({ content }) => {
  const d = content.domains;
  return (
    <Section id="domains" number={d.number} title={d.title} lead={d.lead} screenLabel="06 Domains">
      <Stagger as="dl" className="ed-domains" stagger={0.065}>
        {d.items.map((it, i) => (
          <AnimatedRow as="div" key={i} className="ed-domain-row">
            <dt className="ed-domain-k">
              <span className="ed-domain-num mono">{String(i + 1).padStart(2, "0")}</span>
              <span className="serif">{it.k}</span>
            </dt>
            <dd className="ed-domain-v">{it.v}</dd>
          </AnimatedRow>
        ))}
      </Stagger>
    </Section>
  );
};

export const StoriesSection = ({ content }) => {
  const s = content.stories;
  return (
    <Section id="stories" number={s.number} title={s.title} lead={s.lead} screenLabel="07 Selected Work">
      <Stagger className="ed-stories" stagger={0.08}>
        {s.items.map((it, i) => (
          <AnimatedRow as="article" key={i} className="ed-story">
            <p className="ed-story-tag mono">{it.tag}</p>
            <h3 className="ed-story-title serif">{it.title}</h3>
            <p className="ed-story-body">{it.body}</p>
          </AnimatedRow>
        ))}
      </Stagger>
    </Section>
  );
};

export const AcademicSection = ({ content }) => {
  const a = content.academic;
  return (
    <Section id="academic" number={a.number} title={a.title} lead={a.lead} screenLabel="08 Academic">
      <div className="ed-academic">
        <Stagger className="ed-academic-prose" stagger={0.07}>
          {a.body.map((p, i) => (
            <AnimatedRow as="p" key={i} className={i === 0 ? "ed-academic-lead" : ""}>
              {p}
            </AnimatedRow>
          ))}
        </Stagger>
        <Reveal as="aside" className="ed-academic-list" aria-label={a.listTitle}>
          <p className="ed-academic-list-title mono">{a.listTitle}</p>
          <Stagger as="ul" stagger={0.055}>
            {a.reading.map((r, i) => (
              <AnimatedRow key={i}>
                <span className="mono ed-academic-y">{r.y}</span>
                <span className="ed-academic-t">{r.t}</span>
              </AnimatedRow>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </Section>
  );
};

export const EducationSection = ({ content }) => {
  const e = content.education;
  return (
    <Section id="education" number={e.number} title={e.title} lead={e.lead} screenLabel="09 Education">
      <Stagger as="ul" className="ed-edu" stagger={0.065}>
        {e.items.map((it, i) => (
          <AnimatedRow key={i} className="ed-edu-row">
            <span className="ed-edu-y mono">{it.y}</span>
            <span className="ed-edu-t serif">{it.t}</span>
            <span className="ed-edu-o">{it.o}</span>
          </AnimatedRow>
        ))}
      </Stagger>
    </Section>
  );
};

export const StackSection = ({ content }) => {
  const s = content.stack;
  return (
    <Section id="stack" number={s.number} title={s.title} lead={s.lead} screenLabel="10 Stack">
      <Stagger as="dl" className="ed-stack" stagger={0.055}>
        {s.groups.map((g, i) => (
          <AnimatedRow as="div" key={i} className="ed-stack-row">
            <dt className="ed-stack-k mono">{g.k}</dt>
            <dd className="ed-stack-v">{g.v}</dd>
          </AnimatedRow>
        ))}
      </Stagger>
    </Section>
  );
};

export const ContactSection = ({ content }) => {
  const c = content.contact;
  return (
    <Section id="contact" number={c.number} title={c.title} lead={c.lead} screenLabel="11 Contact">
      <Stagger className="ed-contact" stagger={0.075}>
        <AnimatedRow as="div" className="ed-contact-identity">
          <div className="ed-contact-id">
            <p className="ed-contact-name serif">{c.card.name}</p>
            <p className="ed-contact-role serif-italic">{c.card.role}</p>
            <p className="ed-contact-loc mono">{c.card.location}</p>
          </div>
        </AnimatedRow>
        <Stagger as="ul" className="ed-contact-lines" stagger={0.055}>
          {c.lines.map((l, i) => (
            <AnimatedRow key={i} className="ed-contact-line">
              <span className="ed-contact-k mono">{l.k}</span>
              <a className="ed-contact-v" href={l.href}>
                {l.v}
                <span className="ed-contact-arrow" aria-hidden="true">↗</span>
              </a>
            </AnimatedRow>
          ))}
        </Stagger>
        <AnimatedRow as="p" className="ed-contact-note serif-italic">{c.note}</AnimatedRow>
      </Stagger>
    </Section>
  );
};

export const Footer = ({ content }) => (
  <footer className="ed-foot">
    <div className="ed-foot-rule" aria-hidden="true" />
    <div className="ed-foot-inner">
      <p className="ed-foot-colophon mono">{content.footer.colophon}</p>
      <p className="ed-foot-rights mono">{content.footer.rights}</p>
    </div>
  </footer>
);
