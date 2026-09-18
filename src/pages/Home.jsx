import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import WorkCard from "../components/WorkCard.jsx";
import BookingForm from "../components/BookingForm.jsx";
import { projects } from "../data/work.js";
import { site, whatsappUrl } from "../data/site.js";

const steps = [
  {
    n: "01",
    title: "Call",
    body: "Tell us what you need. We'll take it from there.",
  },
  {
    n: "02",
    title: "Shape",
    body: "We build the direction with you, not behind the scenes.",
  },
  {
    n: "03",
    title: "Build & launch",
    body: "We build the site and take care of hosting, too.",
  },
  {
    n: "04",
    title: "After",
    body: "Two weeks of support after launch, whenever you need us.",
  },
];

function WorkTransition() {
  const transitionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      const transition = transitionRef.current;
      if (!transition) return;

      const distance = transition.offsetHeight - window.innerHeight;
      const nextProgress =
        distance > 0 ? (window.scrollY - transition.offsetTop) / distance : 0;

      setProgress(Math.min(1, Math.max(0, nextProgress)));
    };

    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const cardProgress = Math.min(1, progress / 0.72);
  const headingProgress = Math.min(1, Math.max(0, (progress - 0.72) / 0.18));

  const hero = (
    <section
      className="hero"
      style={{
        opacity: Math.max(0, 1 - progress * 1.6),
        transform: `translate3d(0, ${-progress * 110}%, 0)`,
      }}
    >
      <div className="wrap-hero">
        <div className="hero-copy">
          <h1 className="display h1 hero-title">
            Building websites that make businesses{" "}
            <span className="accent-underline">stand out</span>
          </h1>
          <p className="lead">
            A well-made website can be the first step toward being
            <br /> noticed, remembered, and chosen. We build that first
            impression for you.
          </p>
          <p className="pebble-line">
            {site.name} — {site.tagline}
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/contact">
              Book a call
            </Link>
            <a className="btn btn-ghost" href={whatsappUrl()}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="proof" aria-label="Studio facts">
        <ul className="wrap proof-list">
          <li>Pune-based</li>
          <li>Available across India</li>
          <li>Custom Websites</li>
          <li>Built with intent</li>
          <li>Support after launch</li>
        </ul>
      </div>
    </section>
  );

  return (
    <>
      <div className="work-transition" ref={transitionRef}>
        <div className="work-transition-sticky">
          {hero}
          <div className="work-transition-content">
            <div
              className="section-head work-transition-heading"
              style={{
                "--heading-progress": headingProgress,
                transform: `translateY(${(1 - headingProgress) * 24}px)`,
              }}
            >
              <p className="eyebrow">Work</p>
              <h2 className="display h2">Built by Pebble</h2>
              <p className="lead mute">
                A look at what we can build for your business, designed around
                what you actually need.
              </p>
            </div>
            <div className="work-transition-cards">
              {projects.map((project, index) => {
                const targetOffset =
                  index === 0 ? -34.3 : index === 1 ? 0 : 34.3;
                const cardOffset = (1 - cardProgress) * (32 + index * 2);
                return (
                  <div
                    className={`work-transition-card work-transition-card-${index + 1}`}
                    key={project.slug}
                    style={{
                      "--card-x": `${targetOffset}%`,
                      "--card-y": `${cardOffset}vh`,
                      "--card-scale": 0.9 + cardProgress * 0.1,
                    }}
                  >
                    <WorkCard project={project} featured={index === 0} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-home-content">
        {hero}
        <section className="section mobile-work-section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Work</p>
              <h2 className="display h2">Built by Pebble</h2>
              <p className="lead mute">
                A look at what we can build for your business, designed around
                what you actually need.
              </p>
            </div>
            <div className="work-grid">
              {projects.map((project, index) => (
                <WorkCard
                  project={project}
                  featured={index === 0}
                  key={project.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function WhyPebbleSection() {
  return (
    <section className="why-pebble section" style={{ minHeight: "100vh" }}>
      <div className="wrap">
        <div className="section-head why-pebble-head">
          <p className="eyebrow">Why Pebble</p>
          <h2 className="display h2">Built with purpose.</h2>
          {/* <p className="lead mute">Clear thinking, thoughtful design, and a launch that helps your business move forward.</p> */}
        </div>
        <div className="why-pebble-grid">
          <article className="why-pebble-card">
            <p className="why-pebble-kicker">A clear first step</p>
            <h2 className="display h2">Websites that explain themselves.</h2>
            {/* <p className="lead mute">We make it obvious what you do, who it is for, and how someone can take the next step.</p> */}
          </article>
          <div className="why-pebble-image">
            <img src="/img1.jpeg" alt="Pebble Studios" />
          </div>
          <article className="why-pebble-card">
            <p className="why-pebble-kicker">Made for real businesses</p>
            <h2 className="display h2">Useful before it is impressive.</h2>
            {/* <p className="lead mute">Your site gives people the details they need: location, contact, services, hours, and trust.</p> */}
          </article>
          <article className="why-pebble-card">
            <p className="why-pebble-kicker">Built with care</p>
            <h2 className="display h2">A thoughtful launch.</h2>
            {/* <p className="lead mute">We shape the structure, write the essentials, and make sure the experience feels considered on every screen.</p> */}
          </article>
          <article className="why-pebble-card">
            <p className="why-pebble-kicker">Room to grow</p>
            <h2 className="display h2">Small now. Ready for next.</h2>
            {/* <p className="lead mute">Start with what your business needs today, then build on a clear foundation as you grow.</p> */}
          </article>
          <article className="why-pebble-card why-pebble-cta">
            <h2 className="display h2">Sounds good?</h2>
            <p className="lead mute">
              Tell us what you are building and we will take it from there.
            </p>
            <Link className="btn btn-primary" to="/contact">
              Reach out to us
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const processRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      const process = processRef.current;
      if (!process) return;

      const distance = process.offsetHeight - window.innerHeight;
      const nextProgress =
        distance > 0 ? (window.scrollY - process.offsetTop) / distance : 0;

      setProgress(Math.min(1, Math.max(0, nextProgress)));
    };

    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const activeStep = progress * (steps.length - 1);

  return (
    <div className="process-scroll" ref={processRef}>
      <section className="process-section">
        <div className="wrap process-layout">
          <div className="process-intro">
            <p className="eyebrow">Process</p>
            <h2 className="display h1">
              How it <br className="process-title-break" />
              works
            </h2>
            <p className="process-tagline">
              A clear path from first conversation to launch.
            </p>
          </div>
          <div className="process-stage" aria-label="How the process works">
            {steps.map((step, index) => {
              const distance = index - activeStep;
              const distanceFromCenter = Math.abs(distance);
              const visible = distanceFromCenter <= 1.05;

              return (
                <article
                  className="process-step"
                  key={step.n}
                  aria-hidden={!visible}
                  style={{
                    "--step-position": distance,
                    "--step-opacity": visible
                      ? Math.max(0, 1 - distanceFromCenter * 0.42)
                      : 0,
                    "--step-scale": 1 - Math.min(distanceFromCenter, 1) * 0.06,
                    zIndex: Math.round(10 - distanceFromCenter * 5),
                  }}
                >
                  <span className="step-num">{step.n}</span>
                  <h3 className="h3">{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function StudioSection() {
  const studioScrollRef = useRef(null);
  const [paragraphProgress, setParagraphProgress] = useState([]);
  const [studioProgress, setStudioProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateFocus = () => {
      frameId = 0;
      const studioScroll = studioScrollRef.current;
      if (!studioScroll) return;

      const distance = studioScroll.offsetHeight - window.innerHeight;
      const scrollProgress =
        distance > 0 ? (window.scrollY - studioScroll.offsetTop) / distance : 0;
      const progress = Math.max(0, Math.min(1, scrollProgress));
      const revealProgress = Math.max(0, Math.min(1, (progress - 0.12) / 0.82));

      setStudioProgress(progress);
      setParagraphProgress([revealProgress]);
    };

    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateFocus);
    };

    updateFocus();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateFocus);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateFocus);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const renderStudioParagraph = (text, index) => {
    const words = text.split(" ");
    const progress = paragraphProgress[index] || 0;
    const revealedWords = Math.floor(progress * words.length);

    return (
      <p className="lead studio-copy-text">
        {words.map((word, wordIndex) => (
          <span
            className="studio-word"
            key={`${index}-${wordIndex}`}
            style={{ opacity: wordIndex < revealedWords ? 1 : 0.22 }}
          >
            {word}
            {wordIndex < words.length - 1 ? " " : ""}
          </span>
        ))}
      </p>
    );
  };

  return (
    <div className="studio-scroll" ref={studioScrollRef}>
      <section className="studio-band studio-section">
        <div
          className="wrap studio-copy"
          style={{
            transform: `translateY(${Math.max(0, (1 - Math.min(1, studioProgress / 0.26)) * 18)}vh)`,
          }}
        >
          {/* <p className="eyebrow">Studio</p> */}
          <h2 className="display h1" style={{ marginTop: "1rem" }}>A small studio in Pune</h2>
          {renderStudioParagraph(
            "Pebble Studios builds thoughtful websites for businesses that want to look clear, credible, and easy to trust online. We work with businesses across India, creating websites that feel true to what they do and where they want to go. A well-made website can do more than look good — it can explain, build trust, and help your business grow. That’s the idea behind Pebble.",
            0,
          )}
          <p className="pebble-line">{site.tagline}</p>
          <p className="studio-link">
            <Link className="text-link" to="/about">
              About the studio
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ question, children, open, onOpen }) {
  const isDesktop = () => window.matchMedia("(min-width: 64rem)").matches;

  return (
    <div
      className={`faq-item${open ? " is-open" : ""}`}
      onMouseEnter={() => {
        if (isDesktop()) onOpen(true);
      }}
      onMouseLeave={() => {
        if (isDesktop()) onOpen(false);
      }}
    >
      <button
        className="faq-summary"
        type="button"
        aria-expanded={open}
        onClick={() => {
          if (!isDesktop()) onOpen(!open);
        }}
      >
        {question}
      </button>
      <div className="faq-answer">
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main id="main" className="home">
      <WorkTransition />

      <WhyPebbleSection />

      <ProcessSection />

      <StudioSection />

      <section className="section faq-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="display h2">Before you book</h2>
          </div>
          <div className="faq">
            <FaqItem
              question="How much will my website cost?"
              open={openFaq === 0}
              onOpen={(isOpen) => setOpenFaq(isOpen ? 0 : null)}
            >
              It depends on what you need. We first understand your business,
              then give you a clear quote before we begin.
            </FaqItem>

            <FaqItem
              question="Will a website help my business grow?"
              open={openFaq === 1}
              onOpen={(isOpen) => setOpenFaq(isOpen ? 1 : null)}
            >
              It gives customers a clear, trustworthy place to understand your
              business and take the next step.
            </FaqItem>

            <FaqItem
              question="How soon can my website be ready?"
              open={openFaq === 2}
              onOpen={(isOpen) => setOpenFaq(isOpen ? 2 : null)}
            >
              Timelines depend on the project, but you’ll know the expected
              launch date before we start.
            </FaqItem>

            <FaqItem
              question="Do I need to know anything about websites?"
              open={openFaq === 3}
              onOpen={(isOpen) => setOpenFaq(isOpen ? 3 : null)}
            >
              Not at all. You tell us about your business, and we handle the
              design, development, hosting, and technical side.
            </FaqItem>

            <FaqItem
              question="What happens after launch?"
              open={openFaq === 4}
              onOpen={(isOpen) => setOpenFaq(isOpen ? 4 : null)}
            >
              You get two weeks of support and tweaks after launch, and you can
              still reach us directly if something goes wrong.
            </FaqItem>
          </div>
        </div>
      </section>

      <section className="section close" id="book">
        <div className="wrap close-grid">
          <div>
            <p className="eyebrow">Next</p>
            <h2 className="display h2">Tell us about the business.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Pick a time. We’ll use the call to talk through the site — pages,
              domain, and timing.
            </p>
            <div className="cta-row">
              <a className="btn btn-ghost" href={whatsappUrl()}>
                WhatsApp
              </a>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </main>
  );
}
