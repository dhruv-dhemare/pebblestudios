import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <h1 className="display h2">This page isn’t here.</h1>
      <Link className="text-link" to="/">
        Back home
      </Link>
    </main>
  );
}
