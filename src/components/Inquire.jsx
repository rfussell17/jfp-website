import { useState } from "react";

const encode = (form) => new URLSearchParams(new FormData(form)).toString();

const Inquire = () => {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(e.target),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="inquire" id="inquire">
        <h2 className="section__title">Thank you</h2>
        <p className="section__lead">
          Your message is in. I'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="inquire" id="inquire">
      <h2 className="section__title">Inquire</h2>
      <p className="section__lead">
        Tell me about your day and I'll get back to you.
      </p>
      <form
        name="inquiry"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={onSubmit}
        className="form"
      >
        <input type="hidden" name="form-name" value="inquiry" />
        <p className="form__trap" aria-hidden="true">
          <label>
            Don't fill this out <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <label>
          Name
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <div className="form__row">
          <label>
            Wedding date
            <input name="wedding-date" type="date" />
          </label>
          <label>
            Venue
            <input name="venue" type="text" />
          </label>
        </div>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <button className="button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send inquiry"}
        </button>
        {status === "error" && (
          <p className="form__error" role="alert">
            Something went wrong. Please email{" "}
            <a href="mailto:jonnyfussell@gmail.com">jonnyfussell@gmail.com</a> instead.
          </p>
        )}
      </form>
    </div>
  );
};

export default Inquire;
