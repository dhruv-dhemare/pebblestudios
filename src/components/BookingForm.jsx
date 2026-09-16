import { useState } from "react";
import { site, whatsappUrl } from "../data/site.js";

const minSlot = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - (d.getMinutes() % 15) + 15);
  return d.toISOString().slice(0, 16);
};

export default function BookingForm() {
  const [error, setError] = useState("");
  const [done, setDone] = useState(null);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const slot = String(data.get("slot") || "").trim();

    if (!name || !phone || !slot) {
      setError("Please add your name, phone, and a time.");
      return;
    }

    setError("");
    setDone({ name, phone, slot });
  }

  if (done) {
    const when = new Date(done.slot).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    const message = `Hello Pebble Studios — this is ${done.name}. I’d like a call at ${when}. Phone: ${done.phone}.`;

    return (
      <div className="form-success">
        <h3 className="h3">We’ve got the slot.</h3>
        <p style={{ marginTop: 12 }}>
          {done.name}, we’ll call {done.phone} at {when}. Until the number on this
          site is yours, send the same note on WhatsApp so it isn’t lost.
        </p>
        <p className="cta-row">
          <a className="btn btn-primary" href={whatsappUrl(message)}>
            Send on WhatsApp
          </a>
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
      </div>
      <div className="field">
        <label htmlFor="slot">Time slot</label>
        <input id="slot" name="slot" type="datetime-local" min={minSlot()} required />
      </div>
      {error ? <p className="form-error">{error}</p> : null}
      <button className="btn btn-primary btn-full" type="submit">
        Book a call
      </button>
      <p className="reassurance">
        {site.city} · {site.phoneDisplay} · {site.email}
      </p>
    </form>
  );
}
