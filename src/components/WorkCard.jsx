import { Link } from "react-router-dom";
import SitePreview from "./SitePreview.jsx";

export default function WorkCard({ project, featured = false }) {
  return (
    <article className={`work-card${featured ? " featured" : ""}`}>
      <Link className="work-preview-link" to={`/work/${project.slug}`} aria-label={`View the ${project.name} project`}>
        <div className="work-frame">
          <SitePreview project={project} />
          <span className="work-ring" />
        </div>
      </Link>
      <div className="work-meta">
        <div>
          <h3 className="h3"><Link to={`/work/${project.slug}`}>{project.name}</Link></h3>
          <p className="mute">{project.label}</p>
        </div>
        <a className="work-live-link" href={project.url} target="_blank" rel="noreferrer">
          Visit site <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
