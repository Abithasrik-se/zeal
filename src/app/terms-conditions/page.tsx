import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions | Zeal",
  description: "Terms and conditions governing the use of the Zeal website and engagement with Zeal.",
  path: "/terms-conditions",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        crumbs={[{ name: "Terms & Conditions", path: "/terms-conditions" }]}
      />
      <section className="py-16 md:py-20 bg-z-white">
        <div className="container-z max-w-2xl space-y-6 text-z-muted leading-relaxed">
          <p>
            This page will host Zeal&apos;s full terms and conditions governing
            the use of this website and business engagement with{" "}
            {siteConfig.legalName}. Detailed legal content is pending final
            confirmation.
          </p>
          <p className="text-sm text-z-muted/70">[FULL TERMS & CONDITIONS TO BE CONFIRMED]</p>
        </div>
      </section>
    </>
  );
}
