export default function SitePreview({ project }) {
  const { palette, name, type } = project;
  return (
    <div
      className="preview"
      style={{ color: palette.ink, background: palette.bg }}
    >
      <div className="browser" style={{ background: palette.bg }}>
        <div className="browser-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="mini" style={{ color: palette.ink }}>
          <div className="mini-nav">
            <span>{name}</span>
            <span>Visit · Contact</span>
          </div>
          <p className="mini-hero">
            {type === "Cafe" && "Coffee, slow mornings, a table by the window."}
            {type === "Clinic" && "Care that feels calm from the first visit."}
            {type === "Salon" && "Hair, skin, and quiet studio time."}
          </p>
          <div className="mini-row">
            <div className="mini-block" style={{ color: palette.accent }} />
            <div className="mini-block" style={{ color: palette.ink }} />
          </div>
          <div className="mini-cta" style={{ background: palette.accent }} />
        </div>
      </div>
    </div>
  );
}
