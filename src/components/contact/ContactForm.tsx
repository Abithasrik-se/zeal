"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    span: 1,
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    required: false,
    span: 1,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    span: 1,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: true,
    span: 1,
  },
  {
    name: "country",
    label: "Country",
    type: "text",
    required: false,
    span: 1,
  },
  {
    name: "productService",
    label: "Product / Service",
    type: "text",
    required: false,
    span: 1,
  },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to send your enquiry."
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          rounded-2xl
          border
          border-z-gold/30
          bg-z-gold/5
          p-8
          text-center
          sm:p-10
        "
      >
        <CheckCircle2
          className="mx-auto text-z-gold"
          size={40}
        />

        <h3 className="mt-4 font-display text-2xl font-bold text-z-ink">
          Thank you
        </h3>

        <p className="mx-auto mt-2 max-w-sm leading-relaxed text-z-muted">
          Your enquiry has been sent successfully. Our team
          will review your requirement and get back to you
          shortly.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="
            mt-6
            text-sm
            font-semibold
            text-z-gold
            transition-colors
            hover:text-z-ink
          "
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.name}
            className={
              field.span === 2
                ? "sm:col-span-2"
                : ""
            }
          >
            <label
              htmlFor={field.name}
              className="
                mb-1.5
                block
                text-sm
                font-medium
                text-z-ink
              "
            >
              {field.label}{" "}
              {field.required && (
                <span className="text-z-gold">*</span>
              )}
            </label>

            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              autoComplete={
                field.name === "name"
                  ? "name"
                  : field.name === "email"
                    ? "email"
                    : field.name === "phone"
                      ? "tel"
                      : "off"
              }
              className="
                w-full
                rounded-lg
                border
                border-z-border
                bg-z-white
                px-4
                py-3
                text-sm
                text-z-ink
                outline-none
                transition-colors
                placeholder:text-z-muted/60
                focus:border-z-gold
                focus:ring-1
                focus:ring-z-gold/20
              "
              placeholder={field.label}
            />
          </div>
        ))}
      </div>

      {/* Requirement */}
      <div>
        <label
          htmlFor="requirement"
          className="
            mb-1.5
            block
            text-sm
            font-medium
            text-z-ink
          "
        >
          Requirement
        </label>

        <input
          id="requirement"
          name="requirement"
          type="text"
          className="
            w-full
            rounded-lg
            border
            border-z-border
            bg-z-white
            px-4
            py-3
            text-sm
            text-z-ink
            outline-none
            transition-colors
            placeholder:text-z-muted/60
            focus:border-z-gold
            focus:ring-1
            focus:ring-z-gold/20
          "
          placeholder="Briefly describe what you're looking for"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="
            mb-1.5
            block
            text-sm
            font-medium
            text-z-ink
          "
        >
          Message{" "}
          <span className="text-z-gold">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="
            w-full
            resize-none
            rounded-lg
            border
            border-z-border
            bg-z-white
            px-4
            py-3
            text-sm
            text-z-ink
            outline-none
            transition-colors
            placeholder:text-z-muted/60
            focus:border-z-gold
            focus:ring-1
            focus:ring-z-gold/20
          "
          placeholder="Tell us more about your requirement..."
        />
      </div>

      {/* Error */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            rounded-lg
            border
            border-red-200
            bg-red-50
            px-4
            py-3
            text-sm
            text-red-700
          "
        >
          {error}
        </motion.div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="
          gold-glow
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-z-black
          px-7
          py-3.5
          text-sm
          font-semibold
          text-white
          transition-all
          hover:-translate-y-0.5
          disabled:pointer-events-none
          disabled:opacity-60
        "
      >
        {submitting ? "Sending..." : "Send Enquiry"}

        <Send
          size={16}
          className={
            submitting
              ? "animate-pulse"
              : ""
          }
        />
      </button>
    </form>
  );
}
