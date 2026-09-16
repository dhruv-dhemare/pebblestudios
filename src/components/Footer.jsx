import { Link } from "react-router-dom";
import { site, whatsappUrl } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        {/* Column 1: Company Name & Location */}
        <div className="footer-col">
          {/* <Link className="wordmark" to="/" aria-label={site.name}>
            <img src="/logo1.png" alt={site.name} className="nav-logo" />
          </Link> */}
          <p className="footer-brand-name">{site.name}</p>
          <p className="mute footer-location">{site.city}</p>
          <p className="mute footer-tagline">{site.tagline}</p>
        </div>

        {/* Column 2: Contact & Email */}
        <div className="footer-col">
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-list">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Navigation & Pages */}
        <div className="footer-col">
          <h4 className="footer-title">Pages</h4>
          <ul className="footer-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p className="mute">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
