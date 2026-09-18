import { Link } from "react-router-dom";
import { useState } from "react";
import { site, whatsappUrl } from "../data/site.js";

export default function About() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <main id="main" className="section about-page" style={{ paddingTop: "7vh" }}>
      <div className="wrap about-layout">
        <div className="about-copy">
          <div className="page-hero">
            <p className="eyebrow">About</p>
            <h1 className="display h1">{site.name}</h1>
          </div>
          <div className="legal">
            <p>
              We started Pebble Studios with a simple belief: every business deserves an online presence that feels as real and considered as the business itself.
              <br /><br />
              Too many great businesses still rely only on Instagram, WhatsApp, word of mouth, or a website that no longer represents them. At the same time, the way people discover and trust businesses has changed. We look at websites, reviews, testimonials, and the way a brand presents itself online before deciding where to go or who to trust.
              <br /><br />
              We want to help change that.
            </p>
            <p>
              We work with businesses of all sizes to build professional websites that are clear, thoughtful, and easy for people to trust. From the first conversation to launch, you stay involved — we share ideas, direction, and progress so the final website feels like your business, just presented better online.
            </p>
            <p>
              We also handle the technical side, including hosting, launch, and post-launch tweaks. Our goal is simple: make the process easy, and build something you’re proud to put your name on.
            </p>
            <p>
              Based in Pune, working with businesses across India.
            </p>
            <p className="pebble-line" style={{ marginTop: "1.5rem" }}>
              {site.name} — {site.tagline}
            </p>
            <div className="cta-row" style={{ marginTop: "2rem" }}>
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
        </div>
        <div
          className={`about-gallery${hoveredImage === null ? "" : ` is-hovered hover-${hoveredImage}`}`}
          aria-label="Pebble Studios gallery"
        >
          {[0, 1, 2, 3].map((imageIndex) => (
            <div
              className={`about-image about-image-${imageIndex}`}
              key={imageIndex}
              onMouseEnter={() => setHoveredImage(imageIndex)}
            >
              <img src="/img1.jpeg" alt="" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}