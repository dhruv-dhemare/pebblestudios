import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/work.js";
import SitePreview from "../components/SitePreview.jsx";
import { whatsappUrl } from "../data/site.js";

export default function Project() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <main id="main" className="not-found">
        <h1 className="display h2">That piece isn’t here.</h1>
        <Link className="text-link" to="/work">
          Back to work
        </Link>
      </main>
    );
  }

  return (
    <main id="main">
      <div className="wrap project-layout">
        <header className="page-hero">
          <p className="eyebrow">{project.label}</p>
          <h1 className="display h1">{project.name}</h1>
          <p className="lead">{project.summary}</p>
        </header>
        <div className="project-stills">
          <div className="still still-wide">
            <SitePreview project={project} />
          </div>
          <div className="still" style={{ background: project.palette.bg, padding: 24 }}>
            <p className="eyebrow">First screen</p>
            <h2 className="h3" style={{ marginTop: 12 }}>
              What you are, where you are, how to contact you.
            </h2>
            <p style={{ marginTop: 12 }}>{project.need}</p>
          </div>
          <div
            className="still"
            style={{
              background: project.palette.ink,
              color: project.palette.bg,
              padding: 24,
              display: "grid",
              alignContent: "end",
            }}
          >
            <p className="eyebrow" style={{ color: "inherit", opacity: 0.7 }}>
              Contact
            </p>
            <p className="h3" style={{ color: "inherit", marginTop: 8 }}>
              Call, WhatsApp, or walk in — not buried in a menu.
            </p>
          </div>
        </div>
        <p>
          Want something in this world?{" "}
          <Link className="text-link" to="/contact">
            Book a call
          </Link>
          {" · "}
          <a className="text-link" href={whatsappUrl()}>
            WhatsApp
          </a>
        </p>
      </div>
    </main>
  );
}
