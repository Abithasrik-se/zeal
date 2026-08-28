import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass } from "lucide-react";
import RouteLine from "@/components/ui/RouteLine";

export default function NotFound() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-z-black text-white overflow-hidden py-20">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #E8C85A 0%, transparent 70%)" }}
      />
      <div className="container-z text-center relative">
        <div className="relative w-28 h-28 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border border-z-gold/25 animate-spin-slow" />
          <div className="absolute inset-3 rounded-full border border-dashed border-z-gold/20 animate-spin-slow-rev" />
          <Image
            src="/images/zeal-mark.png"
            alt="Zeal"
            fill
            className="object-contain p-8"
          />
        </div>

        <p className="eyebrow mb-4">Off Course</p>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl">404</h1>
        <div className="flex justify-center"><RouteLine width={110} className="my-6" /></div>
        <p className="text-white/60 max-w-md mx-auto leading-relaxed">
          This page isn&apos;t part of Zeal&apos;s current route. It may have moved,
          or the link may be out of date — let&apos;s point you in the right
          direction.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="gold-glow inline-flex items-center gap-2 bg-z-gold text-z-black font-semibold text-sm px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform"
          >
            <Compass size={16} /> Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:border-z-gold hover:text-z-gold transition-colors"
          >
            Contact Zeal <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
