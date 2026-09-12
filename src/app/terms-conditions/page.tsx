import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import LegalSection from "@/components/legal/LegalSection";
import LegalDisclaimerBanner from "@/components/legal/LegalDisclaimerBanner";
import { siteConfig, emailHref, whatsappHref } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions | Zeal",
  description: "Terms and conditions governing the use of the Zeal website and engagement with Zeal.",
  path: "/terms-conditions",
  noIndex: true,
});

const LAST_UPDATED = "13 September 2026";

const sections = [
  { number: "1", title: "Acceptance of Terms" },
  { number: "2", title: "About Zeal" },
  { number: "3", title: "Use of This Website" },
  { number: "4", title: "Enquiries & Business Engagement" },
  { number: "5", title: "Intellectual Property" },
  { number: "6", title: "Accuracy of Information" },
  { number: "7", title: "Third-Party Links & Services" },
  { number: "8", title: "Limitation of Liability" },
  { number: "9", title: "Indemnity" },
  { number: "10", title: "Governing Law & Jurisdiction" },
  { number: "11", title: "Changes to These Terms" },
  { number: "12", title: "Contact" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        crumbs={[{ name: "Terms & Conditions", path: "/terms-conditions" }]}
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
              These Terms &amp; Conditions ("Terms") govern your access to and
              use of the website located at {siteConfig.url} (the "Website"),
              operated by{" "}
              <strong className="text-z-ink">{siteConfig.legalName}</strong>{" "}
              ("Zeal", "we", "us", or "our"). By accessing or using the
              Website, you agree to be bound by these Terms. If you do not
              agree with any part of these Terms, please do not use the
              Website.
            </p>

            <LegalSection number="1" title="Acceptance of Terms">
              <p>
                By browsing, submitting an enquiry through, or otherwise
                interacting with this Website, you confirm that you have read,
                understood and agree to be bound by these Terms, as well as
                our{" "}
                <Link href="/privacy-policy" className="text-z-gold hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
            </LegalSection>

            <LegalSection number="2" title="About Zeal">
              <p>{siteConfig.description}</p>
              <p>
                Nothing on this Website constitutes a binding offer to
                contract; it is provided for general informational purposes,
                and specific commercial terms are agreed separately and
                directly with a customer or business partner.
              </p>
            </LegalSection>

            <LegalSection number="3" title="Use of This Website">
              <p>You agree that you will not use the Website to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Violate any applicable local, national or international law or regulation.</li>
                <li>Transmit any material that is unlawful, defamatory, fraudulent or infringing of any third party's rights.</li>
                <li>Attempt to gain unauthorised access to any part of the Website, its servers, or any systems or networks connected to it.</li>
                <li>Introduce viruses, malware or any other material that is technologically harmful.</li>
                <li>Use any automated system, including "bots" or "scrapers", to access the Website for any purpose without our prior written consent.</li>
              </ul>
            </LegalSection>

            <LegalSection number="4" title="Enquiries & Business Engagement">
              <p>
                Submitting an enquiry through the contact form,{" "}
                <a href={whatsappHref()} className="text-z-gold hover:underline">
                  WhatsApp
                </a>
                , or{" "}
                <a href={emailHref()} className="text-z-gold hover:underline">
                  email
                </a>{" "}
                does not, by itself, create any business, agency, partnership
                or contractual relationship between you and Zeal. Any
                engagement — including trading, sourcing, procurement,
                distribution, business facilitation or agency and commission
                arrangements — will be subject to separate terms agreed in
                writing between the parties before proceeding.
              </p>
              <p>
                You are responsible for ensuring that any information you
                submit through the Website (including product, service or
                sourcing requirements) is accurate and not misleading.
              </p>
            </LegalSection>

            <LegalSection number="5" title="Intellectual Property">
              <p>
                Unless otherwise stated, all content on this Website —
                including text, graphics, logos, the Zeal name and mark, and
                the compass device — is the property of Zeal or its licensors
                and is protected by applicable intellectual property laws. You
                may view and print pages from the Website for your own
                personal, non-commercial use, but may not reproduce,
                republish, distribute or otherwise exploit any content without
                our prior written permission.
              </p>
            </LegalSection>

            <LegalSection number="6" title="Accuracy of Information">
              <p>
                We aim to keep the information on this Website accurate and
                up to date. However, certain details — including product
                categories, industries, markets, and specific business
                facts — may be presented as placeholders pending
                confirmation, and are marked accordingly where this is the
                case. Zeal does not warrant that any content on the Website is
                complete, accurate, or free of errors, and reserves the right
                to correct or update information at any time without notice.
              </p>
            </LegalSection>

            <LegalSection number="7" title="Third-Party Links & Services">
              <p>
                This Website may link to third-party websites or services
                (for example, WhatsApp) for your convenience. Zeal does not
                control and is not responsible for the content, accuracy, or
                practices of any third-party website or service, and inclusion
                of any link does not imply endorsement.
              </p>
            </LegalSection>

            <LegalSection number="8" title="Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable law, Zeal shall
                not be liable for any indirect, incidental, special,
                consequential or punitive damages, or any loss of profits or
                revenues, arising out of or in connection with your access to
                or use of, or inability to access or use, the Website.
              </p>
              <p>
                Nothing in these Terms excludes or limits liability that
                cannot lawfully be excluded or limited under applicable law.
              </p>
            </LegalSection>

            <LegalSection number="9" title="Indemnity">
              <p>
                You agree to indemnify and hold harmless Zeal, its officers,
                employees and agents from any claim, liability, loss or
                expense (including reasonable legal fees) arising out of your
                breach of these Terms or your misuse of the Website.
              </p>
            </LegalSection>

            <LegalSection number="10" title="Governing Law & Jurisdiction">
              <p>
                These Terms are governed by and construed in accordance with
                the laws of India. Any dispute arising out of or in connection
                with these Terms, or your use of the Website, shall be subject
                to the exclusive jurisdiction of the competent courts having
                jurisdiction over {siteConfig.address.full}.
              </p>
            </LegalSection>

            <LegalSection number="11" title="Changes to These Terms">
              <p>
                We may update these Terms from time to time to reflect
                changes to our business, legal requirements, or the Website
                itself. Any changes will be posted on this page with an
                updated "Last updated" date. Continued use of the Website
                after changes are posted constitutes your acceptance of the
                revised Terms.
              </p>
            </LegalSection>

            <LegalSection number="12" title="Contact">
              <p>
                Questions about these Terms can be sent to us at{" "}
                <a href={emailHref()} className="text-z-gold hover:underline">
                  {siteConfig.email}
                </a>{" "}
                or via{" "}
                <a href={whatsappHref()} className="text-z-gold hover:underline">
                  WhatsApp at {siteConfig.whatsappDisplay}
                </a>
                .
              </p>
              <p>
                Registered address: {siteConfig.address.full}
                <br />
                GSTIN: {siteConfig.gstin}
              </p>
            </LegalSection>
          </div>
        </div>
      </section>
    </>
  );
}