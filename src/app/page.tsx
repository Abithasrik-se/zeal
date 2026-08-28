import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import BusinessOverview from "@/components/home/BusinessOverview";
import InternationalSection from "@/components/home/InternationalSection";
import WhyZealHome from "@/components/home/WhyZealHome";
import Process from "@/components/home/Process";
import InsightsPreview from "@/components/home/InsightsPreview";
import CTA from "@/components/home/CTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Zeal | International Trading, Sourcing & Supply Services",
  description:
    "Zeal is a diversified trading and business services enterprise focused on sourcing, procurement, distribution and reliable supply across India, the United Kingdom and international markets.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <BusinessOverview />
      <InternationalSection />
      <WhyZealHome />
      <Process />
      <InsightsPreview />
      <CTA />
    </>
  );
}
