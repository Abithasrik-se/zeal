import Image from "next/image";
import Reveal from "./Reveal";
import RouteLine from "./RouteLine";
import Breadcrumbs from "./Breadcrumbs";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: { name: string; path: string }[];
}) {
  return (
    <section className="relative bg-mesh-gold text-white pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-gold opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-32 right-0 w-[420px] h-[420px] rounded-full opacity-[0.1]"
        style={{ background: "radial-gradient(circle, #E8C85A 0%, transparent 70%)" }}
      />
      <div className="pointer-events-none absolute -right-16 -bottom-24 w-64 h-64 opacity-[0.06] hidden md:block">
        <Image src="/images/zeal-mark.png" alt="" fill className="object-contain" aria-hidden="true" />
      </div>
      <div className="container-z relative">
        <Breadcrumbs items={crumbs} />
        <Reveal>
          <p className="eyebrow mb-4 mt-6">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-tight max-w-3xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <RouteLine width={110} className="my-6" />
        </Reveal>
        {description && (
          <Reveal delay={0.18}>
            <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}