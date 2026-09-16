import { Link } from "react-router-dom";
import { site, whatsappUrl } from "../data/site.js";

export default function About() {
  return (
    <main id="main">
      <div className="wrap page-hero">
        <p className="eyebrow">Studio</p>
        <h1 className="display h1">{site.name}</h1>
        <p className="lead">
          A web studio in Pune. We design and launch clear websites for local businesses.
        </p>
      </div>
      <div className="wrap legal" style={{ paddingTop: 0 }}>
        <p>
          Many businesses here still run on Instagram, WhatsApp, or an old page that
          doesn’t explain anything. We make the first site that looks considered and makes
          sense.
        </p>
        <p>
          We work with you on a call, we handle hosting, and we stay for two weeks after
          go-live. India-wide — in person when it helps, remote when that’s easier.
        </p>
        <p>
          {site.name} — {site.tagline}
        </p>
        <p>
          Live on a Pebble address at no extra cost, or on your own domain. If you take a
          domain, that domain is yours.
        </p>
        <div className="cta-row">
          <Link className="btn btn-primary" to="/contact">
            Book a call
          </Link>
          <a className="btn btn-ghost" href={whatsappUrl()}>
            WhatsApp
          </a>
          <Link className="btn btn-ghost" to="/work">
            Work
          </Link>
        </div>
      </div>
    </main>
  );
}
