import BookingForm from "../components/BookingForm.jsx";
import { site, whatsappUrl } from "../data/site.js";

export default function Contact() {
  return (
    <main id="main">
      <section className="section"><div className="wrap close-grid" style={{ padding: "6vh" }}>
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="display h1">Book a call</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Name, phone, a slot that works. Or WhatsApp if that’s faster.
          </p>
          <p className="reassurance">
            {site.city}
            <br />
            <a className="text-link" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <a className="text-link" href={`tel:${site.phoneTel}`}>
              +91 75071 79098
            </a>
            <br />
            <a className="text-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <div className="cta-row">
            <a className="btn btn-ghost" href={whatsappUrl()}>
              WhatsApp
            </a>
          </div>
        </div>
        <BookingForm />
      </div>
      </section>
    </main>
  );
}
