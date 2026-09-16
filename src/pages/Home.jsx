import { Link } from "react-router-dom";
import PebbleStack from "../components/PebbleStack.jsx";
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

export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="wrap-hero hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{site.name}</p>
            <h1 className="display h1">
              Building websites that make businesses sta<span className="accent-underline">nd out</span>
            </h1>
            <p className="lead">
              A well-made website can be the first step toward being noticed, remembered, and chosen. We build that first impression for you.
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
          <div className="hero-visual">
            <PebbleStack />
          </div>
        </div>
        <div className="proof" aria-label="Studio facts">
          <ul className="wrap proof-list">
            <li>Pune-based</li>
            <li>Available across India</li>
            <li>Custom Websites</li>
            <li>Built with intent</li>
            {/* <li>Two weeks of support after launch</li> */}
          </ul>
        </div>
      </section>


      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Work</p>
            <h2 className="display h2">Built by Pebble</h2>
            <p className="lead mute">
              A look at what we can build for your business, designed around what you actually need.
            </p>
          </div>
          <div className="work-grid">
            {projects.map((project, i) => (
              <WorkCard key={project.slug} project={project} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">The work</p>
            <h2 className="display h2">A website, launched.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              We design and launch a clear website for your business — hosting handled,
              with support after go-live. The details we settle on a call.
            </p>
            <div className="facts">
              <p>Design and build for how you actually get customers: call, WhatsApp, walk-in, book.</p>
              <p>
                Live on a Pebble address at no extra cost, or on your own domain — that
                domain is yours.
              </p>
              <p>
                Launch setup: mobile, titles for search, contact, map / WhatsApp. Not ads.
                Not “we’ll rank you.”
              </p>
              <p>Two weeks of tweaks after launch.</p>
            </div>
            <p className="not-line">We are a web studio, not a marketing agency.</p>
            <p style={{ marginTop: 24 }}>
              <Link className="text-link" to="/contact">
                Tell us what you need on a call
              </Link>
            </p>
          </div>
          <div className="layer-panel" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

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
