import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import LegalSection from "@/components/legal/LegalSection";
import LegalDisclaimerBanner from "@/components/legal/LegalDisclaimerBanner";
import { siteConfig, emailHref, whatsappHref } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Zeal",
  description: "Zeal's privacy policy covering how enquiry information is collected and used.",
  path: "/privacy-policy",
  noIndex: true,
});

const LAST_UPDATED = "13 September 2026";

const sections = [
  { number: "1", title: "Information We Collect" },
  { number: "2", title: "How We Use Your Information" },
  { number: "3", title: "WhatsApp & Email Enquiries" },
  { number: "4", title: "Cookies & Analytics" },
  { number: "5", title: "Sharing of Information" },
  { number: "6", title: "Data Retention" },
  { number: "7", title: "Data Security" },
  { number: "8", title: "Your Rights" },
  { number: "9", title: "International Visitors" },
  { number: "10", title: "Children's Privacy" },
  { number: "11", title: "Changes to This Policy" },
  { number: "12", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        crumbs={[{ name: "Privacy Policy", path: "/privacy-policy" }]}
      />
      <LegalDisclaimerBanner />

      <section className="py-16 md:py-20 bg-z-white">
        <div className="container-z grid lg:grid-cols-12 gap-14">
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 rounded-xl border border-z-border p-6">
              <p className="eyebrow mb-4">On This Page</p>
              <nav className="space-y-2 text-sm">
                {sections.map((s) => (
                  <Link
                    key={s.number}
                    href={`#section-${s.number}`}
                    className="block text-z-muted hover:text-z-gold transition-colors"
                  >
                    {s.number}. {s.title}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-9 max-w-2xl space-y-14">
            <p className="text-sm text-z-muted/70">Last updated: {LAST_UPDATED}</p>

            <p className="text-z-muted leading-relaxed">
              This Privacy Policy explains how{" "}
              <strong className="text-z-ink">{siteConfig.legalName}</strong>{" "}
              ("Zeal", "we", "us", or "our") collects, uses and protects
              information when you visit this Website or contact us through
              it. We collect only what is needed to respond to your enquiry,
              and do not sell your information to third parties.
            </p>

            <LegalSection number="1" title="Information We Collect">
              <p>When you submit our contact form, we may collect:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Your name and, where provided, company name</li>
                <li>Your email address and phone number</li>
                <li>Your country</li>
                <li>The product or service you are enquiring about</li>
                <li>Details of your requirement and any message you include</li>
              </ul>
              <p>
                We do not require an account to use this Website, and we do
                not knowingly collect sensitive personal information (such as
                financial account numbers, government ID numbers, or health
                information) through the contact form.
              </p>
            </LegalSection>

            <LegalSection number="2" title="How We Use Your Information">
              <p>We use the information you provide to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Respond to your enquiry and understand your requirement</li>
                <li>Identify suitable products, sources, or business opportunities relevant to your request</li>
                <li>Communicate with you about your enquiry via email, phone or WhatsApp</li>
                <li>Maintain records of business communications for our internal reference</li>
                <li>Comply with applicable legal or regulatory obligations</li>
              </ul>
              <p>
                We do not use the information you submit for unrelated
                marketing purposes without your consent.
              </p>
            </LegalSection>

            <LegalSection number="3" title="WhatsApp & Email Enquiries">
              <p>
                If you contact us via{" "}
                <a href={whatsappHref()} className="text-z-gold hover:underline">
                  WhatsApp
                </a>{" "}
                or{" "}
                <a href={emailHref()} className="text-z-gold hover:underline">
                  email
                </a>
                , your message and contact details are received and stored
                within those respective platforms (WhatsApp Inc. / Meta
                Platforms, and our email provider), subject to their own
                privacy practices, in addition to being used by Zeal as
                described above. Pre-filled message templates on this Website
                are provided only as a convenience and can be edited by you
                before sending.
              </p>
            </LegalSection>

            <LegalSection number="4" title="Cookies & Analytics">
              <p>
                This Website may use cookies or similar technologies to
                understand how visitors use the site and to improve its
                performance, for example through Google Analytics where
                enabled. Analytics data is generally aggregated and does not
                by itself identify you personally. You can control or delete
                cookies through your browser settings; disabling cookies may
                affect some functionality of the Website.
              </p>
            </LegalSection>

            <LegalSection number="5" title="Sharing of Information">
              <p>
                We do not sell or rent your personal information. We may
                share information you provide with:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Relevant suppliers, service providers, or business
                  connections, but only where necessary to progress a
                  specific enquiry you have raised, and only to the extent
                  needed to do so
                </li>
                <li>
                  Service providers who support our operations (for example,
                  email or hosting providers), under obligations of
                  confidentiality
                </li>
                <li>
                  Authorities where required by law, regulation, or a valid
                  legal process
                </li>
              </ul>
            </LegalSection>

            <LegalSection number="6" title="Data Retention">
              <p>
                We retain enquiry information for as long as reasonably
                necessary to respond to your request, maintain business
                records, and comply with our legal obligations, after which it
                is deleted or anonymised.
              </p>
            </LegalSection>

            <LegalSection number="7" title="Data Security">
              <p>
                We take reasonable technical and organisational measures to
                protect the information you share with us against
                unauthorised access, loss, or misuse. However, no method of
                transmission over the internet is completely secure, and we
                cannot guarantee absolute security.
              </p>
            </LegalSection>

            <LegalSection number="8" title="Your Rights">
              <p>
                Depending on your location, you may have the right to request
                access to, correction of, or deletion of the personal
                information we hold about you, or to object to certain
                processing. To make such a request, please contact us using
                the details below and we will respond within a reasonable
                timeframe.
              </p>
            </LegalSection>

            <LegalSection number="9" title="International Visitors">
              <p>
                Zeal is a diversified trading and business services enterprise
                serving customers across India and international markets. If
                you are visiting from outside India, please note that
                information you submit may be processed in India. Where
                applicable data protection law grants you additional rights,
                we will honour those rights on request.
              </p>
            </LegalSection>

            <LegalSection number="10" title="Children's Privacy">
              <p>
                This Website is intended for business use and is not directed
                at children. We do not knowingly collect personal information
                from children.
              </p>
            </LegalSection>

            <LegalSection number="11" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Any
                changes will be posted on this page with an updated "Last
                updated" date. We encourage you to review this page
                periodically.
              </p>
            </LegalSection>

            <LegalSection number="12" title="Contact Us">
              <p>
                For any questions about this Privacy Policy, or to make a
                request regarding your information, please contact us at{" "}
                <a href={emailHref()} className="text-z-gold hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
              <p>{siteConfig.address.full}</p>
            </LegalSection>
          </div>
        </div>
      </section>
    </>
  );
}