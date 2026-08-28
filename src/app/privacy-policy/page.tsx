import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Zeal",
  description: "Zeal's privacy policy covering how enquiry information is collected and used.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        crumbs={[{ name: "Privacy Policy", path: "/privacy-policy" }]}
      />
      <section className="py-16 md:py-20 bg-z-white">
        <div className="container-z max-w-2xl space-y-6 text-z-muted leading-relaxed">
          <p>
            This page will host Zeal&apos;s full privacy policy, describing what
            information is collected through the contact form, how it is used,
            and how it is protected. Detailed legal content is pending final
            confirmation.
          </p>
          <p>
            For any questions in the meantime, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-z-gold hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
          <p className="text-sm text-z-muted/70">[FULL PRIVACY POLICY TO BE CONFIRMED]</p>
        </div>
      </section>
    </>
  );
}
