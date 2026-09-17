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
      const nextProgress = distance > 0
        ? (window.scrollY - transition.offsetTop) / distance
        : 0;

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
            Building websites that<br />make businesses <span className="accent-underline">stand out</span>
          </h1>
          <p className="lead">
            A well-made website can be the first step toward being<br /> noticed, remembered, and chosen. We build that first impression for you.
          </p>
          <p className="pebble-line">{site.name} — {site.tagline}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/contact">Book a call</Link>
            <a className="btn btn-ghost" href={whatsappUrl()}>WhatsApp</a>
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
              <p className="lead mute">A look at what we can build for your business, designed around what you actually need.</p>
            </div>
            <div className="work-transition-cards">
              {projects.map((project, index) => {
                const targetOffset = index === 0 ? -34.3 : index === 1 ? 0 : 34.3;
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
      <div className="mobile-home-content">{hero}</div>
    </>
  );
}

function WhyPebbleSection() {
  return (
    <section className="why-pebble section" style={{ height: "100vh" }}>
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
        <div className="why-pebble-image" aria-label="Image placeholder" />
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
          <p className="lead mute">Tell us what you are building and we will take it from there.</p>
          <Link className="btn btn-primary" to="/contact">Reach out to us</Link>
        </article>
      </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="main" className="home">
      <WorkTransition />

      <WhyPebbleSection />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Process</p>
            <h2 className="display h2">How it works</h2>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article className="step" key={step.n}>
                <span className="step-num">{step.n}</span>
                <h3 className="h3">{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/contact">
              Book a call
            </Link>
          </div>
        </div>
      </section>

      <section className="section studio-band">
        <div className="wrap">
          <p className="eyebrow">Studio</p>
          <h2 className="display h2">A small studio in Pune</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Pebble Studios builds websites for businesses that need to look clear and
            trustworthy online. We work in Pune in person, and with clients across India
            remotely.
          </p>
          <p className="lead" style={{ marginTop: 16 }}>
            A small, well-made site can do more than it looks — more understanding, more
            contact, more room to grow. That’s the idea in the name.
          </p>
          <p className="pebble-line">{site.tagline}</p>
          <p style={{ marginTop: 24 }}>
            <Link className="text-link" to="/about">
              About the studio
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="display h2">Before you book</h2>
          </div>
          <div className="faq">
            <details>
              <summary>Will this be expensive?</summary>
              <p>
                There’s no price list on the site. A call is how we see what you need and
                whether it’s a fit — before anyone commits.
              </p>
            </details>
            <details>
              <summary>Will a website actually bring customers?</summary>
              <p>
                Not on its own. It will make it obvious what you do, where you are, and how
                to reach you. We set up the basics so people can find you and get in touch.
                We don’t sell Google rankings.
              </p>
            </details>
            <details>
              <summary>What happens after you launch?</summary>
              <p>
                Two weeks of tweaks are included. Hosting is handled. If something’s wrong,
                you can call or email a real person.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="section close" id="book">
        <div className="wrap close-grid">
          <div>
            <p className="eyebrow">Next</p>
            <h2 className="display h2">Tell us about the business.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Pick a time. We’ll use the call to talk through the site — pages, domain, and
              timing.
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
