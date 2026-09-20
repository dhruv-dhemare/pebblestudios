export default function SitePreview({ project }) {
  return (
    <div className="preview" style={{ background: project.palette.bg }}>
      <div className="browser">
        <div className="browser-bar" aria-hidden="true">
          <span className="browser-dots"><i /><i /><i /></span>
          <span className="browser-address">{project.domain}</span>
        </div>
        <div className="live-preview">
          <img
            src={project.previewImage}
            alt={`Homepage preview of ${project.name}`}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
