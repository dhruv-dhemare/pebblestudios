import { Link } from "react-router-dom";
import { site, whatsappUrl } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <Link className="wordmark" to="/">
          {site.name}
        </Link>
        <p className="mute">{site.city}</p>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          <a href={whatsappUrl()}>WhatsApp</a>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
