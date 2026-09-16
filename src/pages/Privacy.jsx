import { site } from "../data/site.js";

export default function Privacy() {
  return (
    <main id="main">
      <div className="wrap page-hero">
        <p className="eyebrow">Legal</p>
        <h1 className="display h1">Privacy</h1>
      </div>
      <div className="wrap legal">
        <p>
          When you book a call, we collect your name, phone number, and a preferred time
          so we can talk about a website for your business.
        </p>
        <p>We use that only to contact you about the enquiry. We do not sell the list.</p>
        <p>
          Questions: <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </main>
  );
}
