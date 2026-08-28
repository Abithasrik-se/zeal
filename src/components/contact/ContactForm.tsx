"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const fields = [
  { name: "name", label: "Name", type: "text", required: true, span: 1 },
  { name: "company", label: "Company", type: "text", required: false, span: 1 },
  { name: "email", label: "Email", type: "email", required: true, span: 1 },
  { name: "phone", label: "Phone", type: "tel", required: true, span: 1 },
  { name: "country", label: "Country", type: "text", required: false, span: 1 },
  { name: "productService", label: "Product / Service", type: "text", required: false, span: 1 },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Frontend-ready: wire this up to an email provider / API route later.
    // e.g. await fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) })
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-z-gold/30 bg-z-gold/5 p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-z-gold" size={40} />
        <h3 className="mt-4 font-display font-bold text-2xl text-z-ink">Thank you</h3>
        <p className="mt-2 text-z-muted max-w-sm mx-auto leading-relaxed">
          Your enquiry has been noted. Our team will review your requirement and get
          back to you shortly — you're welcome to reach us on WhatsApp in the
          meantime for a quicker response.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        {fields.map((f) => (
          <div key={f.name} className={f.span === 2 ? "sm:col-span-2" : ""}>
            <label htmlFor={f.name} className="block text-sm font-medium text-z-ink mb-1.5">
              {f.label} {f.required && <span className="text-z-gold">*</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.required}
              className="w-full rounded-lg border border-z-border bg-z-white px-4 py-3 text-sm text-z-ink placeholder:text-z-muted/60 focus:border-z-gold outline-none transition-colors"
              placeholder={f.label}
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="requirement" className="block text-sm font-medium text-z-ink mb-1.5">
          Requirement
        </label>
        <input
          id="requirement"
          name="requirement"
          type="text"
          className="w-full rounded-lg border border-z-border bg-z-white px-4 py-3 text-sm text-z-ink placeholder:text-z-muted/60 focus:border-z-gold outline-none transition-colors"
          placeholder="Briefly describe what you're looking for"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-z-ink mb-1.5">
          Message <span className="text-z-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-z-border bg-z-white px-4 py-3 text-sm text-z-ink placeholder:text-z-muted/60 focus:border-z-gold outline-none transition-colors resize-none"
          placeholder="Tell us more about your requirement..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="gold-glow inline-flex items-center gap-2 bg-z-black text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:pointer-events-none"
      >
        {submitting ? "Sending..." : "Send Enquiry"}
        <Send size={16} />
      </button>
    </form>
  );
}
