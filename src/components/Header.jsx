import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { nav, site, whatsappUrl } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const mobileNavLinks = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link className="wordmark" to="/" aria-label={site.name}>
          <img src="/logo1.png" alt={site.name} className="nav-logo" />
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn-ghost header-cta header-whatsapp" href={whatsappUrl()}>
            WhatsApp
          </a>
          <Link className="btn btn-primary header-cta" to="/contact">
            Book a call
          </Link>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className={`wrap nav-panel${open ? " open" : ""}`} aria-label="Mobile">
        {mobileNavLinks.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
