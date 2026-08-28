import type { Metadata } from "next";
import { MapPin, Mail, MessageCircle, Clock, FileBadge } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig, whatsappHref, emailHref } from "@/content/site";
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
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Do Business"
        description="Tell us what you need — a product, a supplier, or the right connection. We will point you in the right direction."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="py-16 md:py-24 bg-z-white">
        <div className="container-z grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-z-border p-7 md:p-10">
              <h2 className="font-display font-bold text-2xl text-z-ink mb-1">Send an Enquiry</h2>
              <p className="text-sm text-z-muted mb-8">
                Fields marked with <span className="text-z-gold">*</span> are required.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-z-black text-white p-8">
                <p className="eyebrow mb-6">Contact Details</p>
                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <MapPin className="text-z-gold shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-white/70 leading-relaxed">{siteConfig.address.full}</span>
                  </li>
                  <li className="flex gap-3">
                    <FileBadge className="text-z-gold shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-white/70">GSTIN: {siteConfig.gstin}</span>
                  </li>
                  <li>
                    <a href={emailHref()} className="flex gap-3 text-sm text-white/70 hover:text-z-gold transition-colors break-all">
                      <Mail className="text-z-gold shrink-0 mt-0.5" size={18} />
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3 text-sm text-white/70 hover:text-z-gold transition-colors"
                    >
                      <MessageCircle className="text-z-gold shrink-0 mt-0.5" size={18} />
                      {siteConfig.whatsappDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="text-z-gold shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-white/70">Mon – Sat, 9:30 AM – 6:30 PM IST</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-glow inline-flex items-center gap-2 bg-z-gold text-z-black font-semibold text-sm px-5 py-3 rounded-full hover:-translate-y-0.5 transition-transform"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <a
                    href={emailHref()}
                    className="inline-flex items-center gap-2 border border-white/25 font-semibold text-sm px-5 py-3 rounded-full hover:border-z-gold hover:text-z-gold transition-colors"
                  >
                    <Mail size={16} /> Email Us
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="relative rounded-2xl overflow-hidden border border-z-border aspect-[4/3] bg-z-cream flex items-center justify-center">
                <div className="text-center px-6">
                  <MapPin className="mx-auto text-z-gold" size={28} />
                  <p className="mt-3 text-sm text-z-muted">
                    Sattur, Tamil Nadu — interactive map available on request.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
