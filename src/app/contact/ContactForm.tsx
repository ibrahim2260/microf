"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Required";
  if (!data.email.trim()) errors.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address";
  if (!data.subject) errors.subject = "Required";
  if (!data.message.trim()) errors.message = "Required";
  else if (data.message.trim().length < 20) errors.message = "Please provide a bit more detail";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-offset-1 ${
      errors[field]
        ? "border-red-300 bg-red-50 focus:ring-red-200"
        : "border-slate-200 bg-white focus:border-[var(--color-ember)] focus:ring-[var(--color-ember)]/20"
    }`;

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center border border-slate-100" style={{ boxShadow: "var(--shadow-warm-md)" }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-5" style={{ background: "var(--color-mint)" }}>
          ✓
        </div>
        <h3 className="text-xl font-bold text-[var(--color-ocean)] mb-2" style={{ fontFamily: "var(--font-display)" }}>Message sent!</h3>
        <p className="text-[var(--color-ink-70)] text-sm leading-relaxed">
          We&apos;ll get back to you at <strong>{form.email}</strong> within 1 business day. If this is urgent, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label="Contact form"
      noValidate
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
            Name <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={set("name")}
            className={inputClass("name")}
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? "name-err" : undefined}
          />
          {errors.name && <p id="name-err" className="text-xs text-red-500 mt-1" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass("phone")}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
          Email <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={set("email")}
          className={inputClass("email")}
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? "email-err" : undefined}
        />
        {errors.email && <p id="email-err" className="text-xs text-red-500 mt-1" role="alert">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
          I am a… <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <select
          id="contact-subject"
          value={form.subject}
          onChange={set("subject")}
          className={inputClass("subject")}
          aria-required="true"
          aria-describedby={errors.subject ? "subject-err" : undefined}
        >
          <option value="">Select one</option>
          <option value="homeowner-general">Homeowner — general inquiry</option>
          <option value="homeowner-lease">Homeowner — question about my lease</option>
          <option value="homeowner-payment">Homeowner — payment question</option>
          <option value="contractor-enroll">Contractor — interested in enrolling</option>
          <option value="contractor-support">Contractor — dealer portal support</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && <p id="subject-err" className="text-xs text-red-500 mt-1" role="alert">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
          Message <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          value={form.message}
          onChange={set("message")}
          rows={5}
          className={`${inputClass("message")} resize-none`}
          aria-required="true"
          aria-describedby={errors.message ? "message-err" : undefined}
          placeholder="How can we help you today?"
        />
        {errors.message && <p id="message-err" className="text-xs text-red-500 mt-1" role="alert">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-full transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5"
        style={{ background: "var(--color-ember)" }}
      >
        {submitting ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
              <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
