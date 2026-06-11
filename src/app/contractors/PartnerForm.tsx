"use client";

import { useState } from "react";

const US_STATES = [
  "AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","IA","ID","IL","IN","KS","KY",
  "LA","MA","MD","MI","MO","MS","MT","NC","ND","NE","NH","NM","NV","NY","OH","OK",
  "OR","PA","RI","SC","SD","TN","TX","UT","VA","WA","WV","WY",
];

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  email: string;
  state: string;
  tradeType: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = "Required";
  if (!data.lastName.trim()) errors.lastName = "Required";
  if (!data.company.trim()) errors.company = "Required";
  if (!data.phone.trim()) errors.phone = "Required";
  else if (!/^\+?[\d\s()\-]{10,}$/.test(data.phone)) errors.phone = "Enter a valid phone number";
  if (!data.email.trim()) errors.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address";
  if (!data.state) errors.state = "Required";
  if (!data.tradeType) errors.tradeType = "Required";
  return errors;
}

export default function PartnerForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", company: "", phone: "", email: "", state: "", tradeType: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    // Simulate API call — wire to real endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center" style={{ boxShadow: "var(--shadow-warm-xl)" }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-5" style={{ background: "var(--color-mint)" }}>
          ✓
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-ocean)] mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Application Received!
        </h3>
        <p className="text-[var(--color-ink-70)] leading-relaxed">
          Thank you for your interest in partnering with Microf. A representative will reach out to <strong>{form.email}</strong> within 1 business day to complete your enrollment.
        </p>
        <p className="mt-4 text-sm text-[var(--color-smoke)]">
          Questions? Call contractor support at{" "}
          <a href="tel:8554988200" className="font-semibold text-[var(--color-ocean)]">855-498-8200</a>
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-offset-1 ${
      errors[field]
        ? "border-red-300 bg-red-50 focus:ring-red-200"
        : "border-slate-200 bg-white focus:border-[var(--color-mint)] focus:ring-[var(--color-mint)]/20"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8"
      style={{ boxShadow: "var(--shadow-warm-xl)" }}
      aria-label="Partner enrollment form"
      noValidate
    >
      <h3 className="text-lg font-semibold text-[var(--color-ocean)] mb-6">Partner Interest Form</h3>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="firstName" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
            First Name <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input id="firstName" type="text" value={form.firstName} onChange={set("firstName")} className={inputClass("firstName")} autoComplete="given-name" aria-required="true" aria-describedby={errors.firstName ? "firstName-err" : undefined} />
          {errors.firstName && <p id="firstName-err" className="text-xs text-red-500 mt-1" role="alert">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
            Last Name <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input id="lastName" type="text" value={form.lastName} onChange={set("lastName")} className={inputClass("lastName")} autoComplete="family-name" aria-required="true" aria-describedby={errors.lastName ? "lastName-err" : undefined} />
          {errors.lastName && <p id="lastName-err" className="text-xs text-red-500 mt-1" role="alert">{errors.lastName}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
          Company Name <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input id="company" type="text" value={form.company} onChange={set("company")} className={inputClass("company")} autoComplete="organization" aria-required="true" aria-describedby={errors.company ? "company-err" : undefined} />
        {errors.company && <p id="company-err" className="text-xs text-red-500 mt-1" role="alert">{errors.company}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
            Phone <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input id="phone" type="tel" value={form.phone} onChange={set("phone")} className={inputClass("phone")} autoComplete="tel" aria-required="true" aria-describedby={errors.phone ? "phone-err" : undefined} />
          {errors.phone && <p id="phone-err" className="text-xs text-red-500 mt-1" role="alert">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
            Email <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input id="email" type="email" value={form.email} onChange={set("email")} className={inputClass("email")} autoComplete="email" aria-required="true" aria-describedby={errors.email ? "email-err" : undefined} />
          {errors.email && <p id="email-err" className="text-xs text-red-500 mt-1" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="state" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
            State <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <select id="state" value={form.state} onChange={set("state")} className={inputClass("state")} aria-required="true" aria-describedby={errors.state ? "state-err" : undefined}>
            <option value="">Select state</option>
            {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.state && <p id="state-err" className="text-xs text-red-500 mt-1" role="alert">{errors.state}</p>}
        </div>
        <div>
          <label htmlFor="tradeType" className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
            Trade Type <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <select id="tradeType" value={form.tradeType} onChange={set("tradeType")} className={inputClass("tradeType")} aria-required="true" aria-describedby={errors.tradeType ? "tradeType-err" : undefined}>
            <option value="">Select trade</option>
            <option value="hvac">HVAC</option>
            <option value="plumbing">Plumbing</option>
            <option value="hvac-plumbing">HVAC & Plumbing</option>
            <option value="other">Other Home Services</option>
          </select>
          {errors.tradeType && <p id="tradeType-err" className="text-xs text-red-500 mt-1" role="alert">{errors.tradeType}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-full transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5"
        style={{ background: "var(--color-mint)" }}
      >
        {submitting ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
              <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Submitting…
          </>
        ) : (
          "Submit Partner Application"
        )}
      </button>

      <p className="text-xs text-[var(--color-smoke)] mt-4 text-center">
        Free enrollment. A Microf rep will follow up within 1 business day.
      </p>
    </form>
  );
}
