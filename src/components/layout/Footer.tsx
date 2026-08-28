import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { footerNav, siteConfig, whatsappHref, emailHref } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-z-black text-white/70 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[520px] h-[520px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E8C85A 0%, transparent 70%)" }}
      />
      <div className="container-z pt-16 md:pt-20 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-14 border-b border-white/10">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/zeal-mark.png"
                alt="Zeal logo"
                width={38}
                height={38}
                className="w-9 h-9 object-contain"
              />
              <span className="font-display font-extrabold text-xl tracking-[0.15em] text-white">
                ZE<span className="text-z-gold">A</span>L
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed max-w-xs text-white/55">
              {siteConfig.description}
            </p>
            <p className="mt-6 eyebrow text-[10px]">Direction · Trust · Growth</p>
          </div>

          <div className="md:col-span-2">
            <p className="text-white text-sm font-semibold mb-4">Company</p>
            <ul className="space-y-2.5">
              {footerNav.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-z-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-white text-sm font-semibold mb-4">Services</p>
            <ul className="space-y-2.5">
              {footerNav.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-z-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-white text-sm font-semibold mb-4">Get in touch</p>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-2.5 text-white/55">
                <MapPin size={16} className="shrink-0 mt-0.5 text-z-gold" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li>
                <a
                  href={emailHref()}
                  className="flex gap-2.5 text-white/55 hover:text-z-gold transition-colors break-all"
                >
                  <Mail size={16} className="shrink-0 mt-0.5 text-z-gold" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2.5 text-white/55 hover:text-z-gold transition-colors"
                >
                  <MessageCircle size={16} className="shrink-0 mt-0.5 text-z-gold" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-z-gold hover:text-z-gold-light"
            >
              Start a conversation <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. GSTIN: {siteConfig.gstin}
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/70 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
