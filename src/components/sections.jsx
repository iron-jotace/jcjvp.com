import { Fragment, useEffect, useRef, useState } from "react";
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

const EditorialCaption = ({ caption, videoHref, videoLabel }) => {
  if (!caption && !videoHref) return null;

  return (
    <figcaption className="ed-editorial-caption mono">
      {caption ? <span>{caption}</span> : null}
      {videoHref ? (
        <a href={videoHref} target="_blank" rel="noopener noreferrer">
          {videoLabel}
        </a>
      ) : null}
    </figcaption>
  );
};

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

        <Reveal as="figure" className="ed-hero-figure" delay={0.12} y={10} scale={0.985}>
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

export const ArchitectureSignatureSection = ({ content }) => {
  const s = content.architectureSignature;
  return (
    <Section id="architecture-signature" number={s.number} title={s.title} lead={s.lead} screenLabel="03 Architecture Signature">
      <Stagger as="ol" className="ed-signature" stagger={0.065}>
        {s.items.map((it) => (
          <AnimatedRow key={it.number} className="ed-signature-row">
            <span className="ed-signature-num mono">{it.number}</span>
            <div className="ed-signature-body">
              <h3 className="ed-signature-title serif">{it.title}</h3>
              <p className="ed-signature-thesis">{it.thesis}</p>
            </div>
          </AnimatedRow>
        ))}
      </Stagger>
    </Section>
  );
};

export const ArchitectureConversationSection = ({ content }) => {
  const c = content.architectureConversation;
  if (!c) return null;

  return (
    <Section id="architecture-conversation" number={c.number} title={c.title} lead={c.lead} screenLabel="04 Architecture Conversation">
      <div className="ed-conversation">
        <Stagger className="ed-conversation-copy" stagger={0.065}>
          {c.quote ? <AnimatedRow as="p" className="ed-conversation-quote serif">“{c.quote}”</AnimatedRow> : null}
          <AnimatedRow as="p" className="ed-conversation-body">{c.body}</AnimatedRow>
        </Stagger>
        {c.image ? (
          <Reveal as="figure" className="ed-conversation-figure" y={10} scale={0.99}>
            <div className="ed-editorial-photo">
              <img src={c.image} alt="" loading="lazy" />
            </div>
            <EditorialCaption caption={c.caption} videoHref={c.videoHref} videoLabel={c.videoLabel} />
          </Reveal>
        ) : null}
      </div>
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
                  : { duration: 0.62, ease: [0.16, 1, 0.3, 1] }
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
    <Section id="tracks" number={t.number} title={t.title} lead={t.lead} screenLabel="06 Two Tracks">
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
    <Section id="role" number={r.number} title={r.title} lead={r.lead} screenLabel="07 Current Role">
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
    <Section id="experience" number={e.number} title={e.title} lead={e.lead} screenLabel="08 Experience">
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
      {e.leadershipEvidence ? (
        <Reveal as="aside" className="ed-exp-evidence">
          <div className="ed-exp-evidence-copy">
            <h3 className="serif">{e.leadershipEvidence.title}</h3>
            <p>{e.leadershipEvidence.body}</p>
          </div>
          {e.leadershipEvidence.image ? (
            <figure>
              <div className="ed-editorial-photo">
                <img src={e.leadershipEvidence.image} alt="" loading="lazy" />
              </div>
              {e.leadershipEvidence.caption ? (
                <figcaption className="ed-editorial-caption mono">{e.leadershipEvidence.caption}</figcaption>
              ) : null}
            </figure>
          ) : null}
        </Reveal>
      ) : null}
    </Section>
  );
};

export const DomainsSection = ({ content }) => {
  const d = content.domains;
  return (
    <Section id="domains" number={d.number} title={d.title} lead={d.lead} screenLabel="09 Domains">
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
    <Section id="stories" number={s.number} title={s.title} lead={s.lead} screenLabel="10 Selected Work">
      <Stagger className="ed-stories" stagger={0.08}>
        {s.items.map((it, i) => (
          <AnimatedRow as="article" key={i} className="ed-story">
            <p className="ed-story-tag mono">{it.tag}</p>
            <h3 className="ed-story-title serif">{it.title}</h3>
            <p className="ed-story-body">{it.body}</p>
          </AnimatedRow>
        ))}
      </Stagger>
      {s.featured ? (
        <Reveal as="article" className="ed-featured-story">
          <div className="ed-featured-story-copy">
            <p className="ed-story-tag mono">{s.featured.tag}</p>
            <h3 className="ed-featured-story-title serif">{s.featured.title}</h3>
            <p className="ed-featured-story-body">{s.featured.body}</p>
          </div>
          {s.featured.image ? (
            <figure className="ed-featured-story-figure">
              <div className="ed-editorial-photo">
                <img src={s.featured.image} alt="" loading="lazy" />
              </div>
              {s.featured.caption ? <figcaption className="ed-editorial-caption mono">{s.featured.caption}</figcaption> : null}
            </figure>
          ) : null}
        </Reveal>
      ) : null}
    </Section>
  );
};

export const AcademicSection = ({ content }) => {
  const a = content.academic;
  return (
    <Section id="academic" number={a.number} title={a.title} lead={a.lead} screenLabel="11 Academic">
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
        {a.signal ? (
          <Reveal as="aside" className="ed-academic-signal">
            <div className="ed-academic-signal-copy">
              <h3 className="serif">{a.signal.title}</h3>
              <p>{a.signal.body}</p>
            </div>
            {a.signal.image ? (
              <figure>
              <div className="ed-editorial-photo">
                <img src={a.signal.image} alt="" loading="lazy" />
              </div>
                <EditorialCaption caption={a.signal.caption} videoHref={a.signal.videoHref} videoLabel={a.signal.videoLabel} />
              </figure>
            ) : null}
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
};

export const EducationSection = ({ content }) => {
  const e = content.education;
  const reduceMotion = useReducedMotion();
  const cities = e.cities || [];
  const [activeCity, setActiveCity] = useState(cities[0]?.key);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimer = useRef(null);
  const activeCityData = cities.find((city) => city.key === activeCity) || cities[0];
  const projectCity = (city) => ({
    x: ((city.lon + 180) / 360) * 100,
    y: ((90 - city.lat) / 180) * 50,
  });
  const activePoint = activeCityData ? projectCity(activeCityData) : null;
  const activateCity = (key, pause = true) => {
    setActiveCity(key);
    if (!pause) return;
    setIsPaused(true);
    if (pauseTimer.current) window.clearTimeout(pauseTimer.current);
    pauseTimer.current = window.setTimeout(() => setIsPaused(false), 9000);
  };

  useEffect(() => {
    if (cities.length && !cities.some((city) => city.key === activeCity)) {
      setActiveCity(cities[0].key);
    }
  }, [activeCity, cities]);

  useEffect(() => () => {
    if (pauseTimer.current) window.clearTimeout(pauseTimer.current);
  }, []);

  useEffect(() => {
    if (reduceMotion || isPaused || cities.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveCity((current) => {
        const currentIndex = Math.max(0, cities.findIndex((city) => city.key === current));
        return cities[(currentIndex + 1) % cities.length].key;
      });
    }, 4200);

    return () => window.clearInterval(timer);
  }, [cities, isPaused, reduceMotion]);

  return (
    <Section id="education" number={e.number} title={e.title} lead={e.lead} screenLabel="12 Education">
      <div className="ed-education">
        <Stagger className="ed-edu-panel" stagger={0.065}>
          <AnimatedRow as="p" className="ed-edu-intro">{e.intro}</AnimatedRow>
          <AnimatedRow as="div" className="ed-edu-switcher" aria-label={e.mapLabel}>
            {cities.map((city) => (
              <button
                key={city.key}
                type="button"
                className={`ed-edu-chip mono ${activeCityData?.key === city.key ? "is-active" : ""}`}
                aria-pressed={activeCityData?.key === city.key}
                onClick={() => activateCity(city.key)}
                onFocus={() => activateCity(city.key)}
                onMouseEnter={() => activateCity(city.key)}
              >
                {city.city}
              </button>
            ))}
          </AnimatedRow>
          {activeCityData ? (
            <AnimatedRow as="div" className="ed-edu-active-panel">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={activeCityData.key}
                  className="ed-edu-active"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="ed-edu-active-country mono">
                    {activeCityData.countryFlag ? <span aria-hidden="true">{activeCityData.countryFlag}</span> : null}
                    <span>{activeCityData.country}</span>
                  </p>
                  <h3 className="ed-edu-active-desc serif">{activeCityData.descriptor}</h3>
                  <ul className="ed-edu-milestones">
                    {activeCityData.milestones.map((milestone) => (
                      <li key={milestone}>{milestone}</li>
                    ))}
                  </ul>
                </motion.article>
              </AnimatePresence>
            </AnimatedRow>
          ) : null}
        </Stagger>
        <Reveal
          as="aside"
          className="ed-edu-map"
          aria-label={e.mapLabel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="ed-edu-map-head">
            <p className="mono">{e.mapLabel}</p>
          </div>
          <svg className="ed-edu-world" viewBox="0 0 100 50" role="img" aria-label={e.mapLabel}>
            <g className="ed-edu-graticule" aria-hidden="true">
              <path d="M8 12.5H92M6 25H94M8 37.5H92" />
              <path d="M20 5V45M40 4V46M60 4V46M80 5V45" />
            </g>
            <image
              className="ed-edu-map-base"
              href="/assets/world-map-simplified-cc0.svg"
              x="0"
              y="0"
              width="100"
              height="50"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            />
            {activePoint ? (
              <path
                className="ed-edu-focus-line"
                d={`M${activePoint.x} ${activePoint.y} L50 25`}
                aria-hidden="true"
              />
            ) : null}
            <g className="ed-edu-cities">
              {cities.map((city) => {
                const point = projectCity(city);
                const isActive = activeCityData?.key === city.key;
                return (
                  <g
                    key={city.key}
                    className={`ed-edu-city ${isActive ? "is-active" : ""}`}
                    role="button"
                    tabIndex={0}
                    aria-label={city.city}
                    aria-pressed={isActive}
                    onClick={() => activateCity(city.key)}
                    onFocus={() => activateCity(city.key)}
                    onMouseEnter={() => activateCity(city.key)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        activateCity(city.key);
                      }
                    }}
                  >
                    <circle className="ed-edu-city-halo" cx={point.x} cy={point.y} r="3.8" />
                    <circle className="ed-edu-city-point" cx={point.x} cy={point.y} r={city.milestones.length > 1 ? "1.45" : "1.15"} />
                    <text className="ed-edu-city-label" x={point.x + 1.8} y={point.y - 1.8}>{city.city}</text>
                  </g>
                );
              })}
            </g>
          </svg>
        </Reveal>
      </div>
    </Section>
  );
};

export const StackSection = ({ content }) => {
  const s = content.stack;
  return (
    <Section id="stack" number={s.number} title={s.title} lead={s.lead} screenLabel="13 Stack">
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
    <Section id="contact" number={c.number} title={c.title} lead={c.lead} screenLabel="14 Contact">
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
