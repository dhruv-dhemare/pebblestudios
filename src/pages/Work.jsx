import WorkCard from "../components/WorkCard.jsx";
import { projects } from "../data/work.js";

export default function Work() {
  return (
    <main id="main" className="section" style={{ paddingTop: "10vh" }}>
      <div className="wrap">
        <div className="page-hero" style={{ paddingTop: 0 }}>
          <p className="eyebrow">Portfolio</p>
          <h1 className="display h1">What We’ve Built</h1>
          <p className="lead mute">Every project starts with understanding the business behind it, then turning that into a website that feels clear, thoughtful, and true to the brand.</p>
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
