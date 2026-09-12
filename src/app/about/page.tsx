import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Zeal | Trading & Business Services Enterprise",
  description:
    "Learn about Zeal, a trading enterprise focused on sourcing, procurement, distribution and business facilitation across India, the UK and international markets.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutContent />
    </>
  );
}
