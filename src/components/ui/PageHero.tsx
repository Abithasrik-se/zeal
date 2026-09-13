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
    <section className="relative overflow-hidden bg-z-black text-white">
      {/* Background image texture */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[url('/images/ui/breadcrumb-bg.jpg')]
          bg-cover
          bg-center
          opacity-[0.20]
        "
      />

      {/* Main dark gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-z-black
          via-z-black/90
          to-[#241f10]/80
        "
      />

      {/* Gold atmospheric glow — top right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[radial-gradient(circle,rgba(232,200,90,0.14)_0%,transparent_68%)]
          blur-2xl
        "
      />

      {/* Counter-glow — bottom left, for compositional balance */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          bottom-[-120px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[radial-gradient(circle,rgba(232,200,90,0.07)_0%,transparent_70%)]
          blur-2xl
        "
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-grid-gold
          opacity-[0.10]
          [mask-image:linear-gradient(to_bottom,black,transparent_75%)]
        "
      />

      {/* Fine grain texture, for a tactile / premium finish */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay"
      >
        <filter id="page-hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#page-hero-grain)" />
      </svg>

      {/* Corner vignette, to seat the content and hide hard edges */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          [box-shadow:inset_0_0_120px_40px_rgba(0,0,0,0.35)]
        "
      />

      {/* Decorative compass mark — slow ambient drift */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-8
          bottom-[-70px]
          hidden
          h-64
          w-64
          opacity-[0.055]
          md:block
          motion-safe:animate-[spin_140s_linear_infinite]
        "
      >
        <Image
          src="/images/zeal-mark.png"
          alt=""
          fill
          sizes="256px"
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="container-z relative">
        {/* Breadcrumb */}
        <div className="border-b border-white/[0.08] pt-3 sm:pt-4">
          <Breadcrumbs items={crumbs} />
        </div>

        <div className="pb-9 pt-12 sm:pb-10 sm:pt-16 md:pb-12 md:pt-20">
          {/* Eyebrow */}
          <Reveal>
            <p className="eyebrow mb-3 text-z-gold-light">
              {eyebrow}
            </p>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.06}>
            <h1
              className="
                max-w-4xl
                font-display
                text-[2.35rem]
                font-extrabold
                leading-[1.05]
                tracking-[-0.025em]
                text-white
                [text-wrap:balance]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.25rem]
              "
            >
              {title}
            </h1>
          </Reveal>

          {/* Gold divider */}
          <Reveal delay={0.11}>
            <RouteLine
              width={80}
              className="my-4 sm:my-5"
            />
          </Reveal>

          {/* Description */}
          {description && (
            <Reveal delay={0.16}>
              <p
                className="
                  max-w-2xl
                  text-sm
                  leading-relaxed
                  text-white/55
                  sm:text-base
                  md:text-lg
                "
              >
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-10
          bg-gradient-to-t
          from-z-black/30
          to-transparent
        "
      />
    </section>
  );
}