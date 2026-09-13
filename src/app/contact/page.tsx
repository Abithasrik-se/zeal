
import type { Metadata } from "next";
import {
  MapPin,
  Mail,
  MessageCircle,
  Clock,
  FileBadge,
} from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import {
  siteConfig,
  whatsappHref,
  emailHref,
} from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Zeal | Trading & Business Services",
  description:
    "Get in touch with Zeal to discuss a trading, sourcing, procurement or business facilitation requirement. Reach us by form, email or WhatsApp.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Do Business"
        description="Tell us what you need — a product, a supplier, or the right connection. We will point you in the right direction."
        crumbs={[
          {
            name: "Contact",
            path: "/contact",
          },
        ]}
      />

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}
      <section className="bg-z-white py-16 sm:py-20 md:py-24">
        <div className="container-z grid gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* =================================================
              CONTACT FORM
          ================================================= */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-z-border bg-white p-6 sm:p-8 md:p-10">
              <div className="mb-8">
                <p className="eyebrow mb-3">
                  Start a Conversation
                </p>

                <h2 className="font-display text-2xl font-bold leading-tight text-z-ink sm:text-3xl">
                  Send an Enquiry
                </h2>

                <p className="mt-2 max-w-lg text-sm leading-relaxed text-z-muted">
                  Tell us about your requirement and we will review
                  it and get back to you with the appropriate next
                  step.
                </p>

                <p className="mt-4 text-xs text-z-muted">
                  Fields marked with{" "}
                  <span className="text-z-gold">*</span> are required.
                </p>
              </div>

              <ContactForm />
            </div>
          </Reveal>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}
          <div className="space-y-6 lg:col-span-5">
            {/* =================================================
                CONTACT DETAILS
            ================================================= */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-z-black p-7 text-white sm:p-8">
                <p className="eyebrow mb-6">
                  Contact Details
                </p>

                <ul className="space-y-5">
                  {/* Address */}
                  <li className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 shrink-0 text-z-gold"
                      size={18}
                      strokeWidth={1.7}
                    />

                    <span className="text-sm leading-relaxed text-white/65">
                      {siteConfig.address.full}
                    </span>
                  </li>

                  {/* GST */}
                  <li className="flex items-start gap-3">
                    <FileBadge
                      className="mt-0.5 shrink-0 text-z-gold"
                      size={18}
                      strokeWidth={1.7}
                    />

                    <span className="text-sm text-white/65">
                      GSTIN: {siteConfig.gstin}
                    </span>
                  </li>

                  {/* Email */}
                  <li>
                    <a
                      href={emailHref()}
                      className="flex items-start gap-3 break-all text-sm text-white/65 transition-colors duration-200 hover:text-z-gold"
                    >
                      <Mail
                        className="mt-0.5 shrink-0 text-z-gold"
                        size={18}
                        strokeWidth={1.7}
                      />

                      <span>{siteConfig.email}</span>
                    </a>
                  </li>

                  {/* WhatsApp */}
                  <li>
                    <a
                      href={whatsappHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-sm text-white/65 transition-colors duration-200 hover:text-z-gold"
                    >
                      <MessageCircle
                        className="mt-0.5 shrink-0 text-z-gold"
                        size={18}
                        strokeWidth={1.7}
                      />

                      <span>
                        {siteConfig.whatsappDisplay}
                      </span>
                    </a>
                  </li>

                  {/* Business hours */}
                  <li className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 shrink-0 text-z-gold"
                      size={18}
                      strokeWidth={1.7}
                    />

                    <span className="text-sm leading-relaxed text-white/65">
                      Mon – Sat, 9:30 AM – 6:30 PM IST
                    </span>
                  </li>
                </ul>

                {/* Contact buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      gold-glow
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-z-gold
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-z-black
                      transition-transform
                      duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us
                  </a>

                  <a
                    href={emailHref()}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      border-white/20
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition-colors
                      duration-300
                      hover:border-z-gold
                      hover:text-z-gold
                    "
                  >
                    <Mail size={16} />
                    Email Us
                  </a>
                </div>
              </div>
            </Reveal>

            {/* =================================================
                IMAGE + GRADIENT EDITORIAL PANEL
            ================================================= */}
            <Reveal delay={0.18}>
              <div className="group relative min-h-[380px] overflow-hidden rounded-2xl bg-z-black sm:min-h-[420px]">
                {/* Background image */}
                <img
                  src="/images/contact/business-contact.jpg"
                  alt="Business and trading operations at Zeal"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                  "
                />

                {/* Dark cinematic gradient */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/70
                    to-black/10
                  "
                />

                {/* Additional side gradient */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/40
                    via-transparent
                    to-transparent
                  "
                />

                {/* Gold atmospheric glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-56
                    w-56
                    rounded-full
                    bg-z-gold/15
                    blur-3xl
                  "
                />

                {/* Content */}
                <div className="relative flex min-h-[380px] flex-col justify-between p-7 sm:min-h-[420px] sm:p-8">
                  {/* Top icon */}
                  <div>
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/20
                        backdrop-blur-sm
                      "
                    >
                      <MapPin
                        size={18}
                        className="text-z-gold"
                        strokeWidth={1.6}
                      />
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="max-w-md">
                    <p className="eyebrow mb-3 text-z-gold-light">
                      India · International
                    </p>

                    <h3
                      className="
                        font-display
                        text-3xl
                        font-bold
                        leading-[1.08]
                        text-white
                        sm:text-4xl
                      "
                    >
                      Business begins with the{" "}
                      <span className="text-z-gold-light">
                        right connection.
                      </span>
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
                      From product sourcing and supply to business
                      facilitation, Zeal connects requirements with
                      suitable opportunities across India and
                      international markets.
                    </p>

                    {/* Location line */}
                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-px w-10 bg-z-gold" />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                        Sattur, Tamil Nadu
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>         
            
    </>
  );
}
