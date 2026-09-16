export default function RippleMark() {
  return (
    <div className="ripple-mark" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <circle className="ring" cx="100" cy="100" r="78" />
        <circle className="ring" cx="100" cy="100" r="52" />
        <circle className="ring" cx="100" cy="100" r="28" />
        <circle className="pebble-core" cx="100" cy="100" r="7" />
      </svg>
    </div>
  );
}
