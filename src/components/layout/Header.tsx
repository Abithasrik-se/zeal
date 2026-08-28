"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { mainNav } from "@/content/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-z-cream/90 backdrop-blur-md border-b border-z-border shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)]"
            : "bg-z-cream/70 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="container-z flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <Image
              src="/images/zeal-mark.png"
              alt="Zeal logo"
              width={40}
              height={40}
              priority
              className="w-9 h-9 md:w-10 md:h-10 object-contain transition-transform duration-500 group-hover:rotate-[18deg]"
            />
            <span className="font-display font-extrabold text-xl md:text-2xl tracking-[0.15em] text-z-ink">
              ZE<span className="text-z-gold">A</span>L
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {mainNav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`link-underline text-sm font-medium tracking-wide pb-1 transition-colors ${
                    active ? "text-z-gold" : "text-z-ink/80 hover:text-z-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="gold-glow inline-flex items-center gap-1.5 bg-z-black text-z-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-z-ink transition-colors"
            >
              Contact Us
              <ArrowUpRight size={15} className="opacity-80" />
            </Link>
          </div>

          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-z-border text-z-ink"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
