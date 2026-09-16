import WorkCard from "../components/WorkCard.jsx";
import { projects } from "../data/work.js";

export default function Work() {
  return (
    <main id="main" className="section" style={{ paddingTop: 15 }}>
      <div className="wrap">
        <div className="page-hero" style={{ paddingTop: 0 }}>
          <p className="eyebrow">Portfolio</p>
          <h1 className="display h1">Work</h1>
          <p className="lead mute">Studio concepts. Cafe, clinic, salon.</p>
        </div>
        <div className="work-grid">
          {projects.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
