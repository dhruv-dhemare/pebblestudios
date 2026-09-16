import { Link } from "react-router-dom";
import SitePreview from "./SitePreview.jsx";

export default function WorkCard({ project, featured = false }) {
  return (
    <Link className={`work-card${featured ? " featured" : ""}`} to={`/work/${project.slug}`}>
      <div className="work-frame">
        <SitePreview project={project} />
        <span className="work-ring" />
      </div>
      <div className="work-meta">
        <h3 className="h3">{project.name}</h3>
        <p className="mute">{project.label}</p>
      </div>
    </Link>
  );
}
