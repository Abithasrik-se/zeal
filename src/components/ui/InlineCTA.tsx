import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/content/site";
import Reveal from "./Reveal";

export default function InlineCTA({
  title = "Discuss Your Requirement",
  description = "Tell us what you're looking for and our team will explore the right approach with you.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-16 md:py-20 bg-z-black text-white">
      <div className="container-z">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-10 md:px-14 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl">{title}</h3>
              <p className="mt-2 text-white/55 max-w-md">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/contact"
                className="gold-glow inline-flex items-center gap-2 bg-z-gold text-z-black font-semibold text-sm px-6 py-3 rounded-full hover:-translate-y-0.5 transition-transform"
              >
                Talk to Zeal <ArrowUpRight size={15} />
              </Link>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/25 font-semibold text-sm px-6 py-3 rounded-full hover:border-z-gold hover:text-z-gold transition-colors"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
