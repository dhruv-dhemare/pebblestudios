import { useState } from "react";
import { whatsappUrl } from "../data/site.js";

const minSlot = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - (d.getMinutes() % 15) + 15);
  return d.toISOString().slice(0, 16);
};

export default function BookingForm() {
  const [error, setError] = useState("");
  const [done, setDone] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const slot = String(data.get("slot") || "").trim();

    if (!name || !phone || !slot) {
      setError("Please add your name, phone, and a time.");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1cbd70d8-5974-48ac-b9e7-721955956884",
          subject: "New Pebble Studios booking request",
          from_name: "Pebble Studios website",
          name,
          phone,
          slot,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send the booking request.");
      }

      setDone({ name, phone, slot });
      form.reset();
    } catch (submitError) {
      setError(submitError.message || "Unable to send the booking request. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
          {done.name}, your request for {when} has been sent. We’ll contact you at {done.phone}.
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
      <button className="btn btn-primary btn-full" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Book a call"}
      </button>
    </form>
  );
}
