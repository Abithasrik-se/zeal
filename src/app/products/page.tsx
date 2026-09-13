import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Search,
  Truck,
} from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";
import InlineCTA from "@/components/ui/InlineCTA";
import { productCategories } from "@/content/placeholders";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Products & Supply Categories | Food, Agriculture & Building Materials | Zeal",
  description:
    "Explore Zeal's product and supply categories including dairy products, jaggery, salt, rice, dry fruits and nuts, pulses, spices and building materials.",
  path: "/products",
});

const productImages: Record<string, string> = {
  "dairy-products": "/images/products/dairy.jpg",
  jaggery: "/images/products/jaggery.jpg",
  salt: "/images/products/salt.jpg",
  rice: "/images/products/rice.jpg",
  "dry-fruits-nuts": "/images/products/dry-fruits.jpg",
  pulses: "/images/products/pulses.jpg",
  spices: "/images/products/spices.jpg",
  "building-materials": "/images/products/building-materials.jpg",
};

const approach = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    text: "We begin with the product, quantity, quality and delivery requirement.",
  },
  {
    number: "02",
    icon: Search,
    title: "Source",
    text: "Suitable products and potential sources are explored around the requirement.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Evaluate",
    text: "Available options are considered for suitability, quality and commercial expectations.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Coordinate",
    text: "The relevant supply and delivery process is coordinated through completion.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow="Products & Supply"
        title="Products We Source & Supply"
        description="Explore selected food, agricultural, commodity and building-material categories supported through Zeal's sourcing and supply network."
        crumbs={[{ name: "Products", path: "/products" }]}
      />

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="bg-z-white py-12 md:py-16">
        <div className="container-z">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-2">Our Product Range</p>
              </Reveal>

              <Reveal delay={0.06}>
                <h2 className="font-display text-3xl font-bold leading-tight text-z-ink md:text-4xl">
                  From everyday commodities to{" "}
                  <span className="text-gradient-gold">
                    construction materials.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <RouteLine width={80} className="my-4" />
              </Reveal>

              <Reveal delay={0.16}>
                <p className="max-w-2xl text-base leading-relaxed text-z-muted md:text-lg">
                  Zeal works across selected product categories, helping
                  customers and businesses identify suitable products and
                  sourcing options according to their requirements.
                </p>
              </Reveal>
            </div>

            <Reveal
              className="lg:col-span-5"
              delay={0.1}
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-z-black p-5 text-white">
                  <p className="font-display text-3xl font-bold text-z-gold">
                    08
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/50">
                    Product Categories
                  </p>
                </div>

                <div className="rounded-xl border border-z-border bg-z-cream p-5">
                  <p className="font-display text-3xl font-bold text-z-ink">
                    B2B
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-z-muted">
                    Supply Focus
                  </p>
                </div>

                <div className="col-span-2 flex items-start gap-3 rounded-xl border border-z-border p-4">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-z-gold"
                  />

                  <p className="text-sm leading-relaxed text-z-muted">
                    Product specifications, quantities and availability are
                    discussed according to each requirement.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT CATEGORIES
      ====================================================== */}

      <section className="bg-z-cream py-12 md:py-16">
        <div className="container-z">

          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <p className="eyebrow mb-2">Categories</p>
              </Reveal>

              <Reveal delay={0.06}>
                <h2 className="font-display text-3xl font-bold text-z-ink md:text-4xl">
                  Explore Our Products
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <p className="max-w-md text-sm leading-relaxed text-z-muted">
                Explore our key product categories and contact us with a
                specific sourcing or supply requirement.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category, index) => {
              const image =
                productImages[category.slug] ??
                "/images/products/placeholder.jpg";

              return (
                <Reveal
                  key={category.slug}
                  delay={0.04 * index}
                  className="h-full"
                >
                  <Link
                    href={`/products/${category.slug}`}
                    className="
                      group
                      relative
                      block
                      h-full
                      min-h-[290px]
                      overflow-hidden
                      rounded-2xl
                      bg-z-black
                      transform-gpu
                      transition-transform
                      duration-500
                      hover:-translate-y-1
                    "
                  >
                    {/* IMAGE */}

                    <div className="absolute inset-0 overflow-hidden bg-z-black">
                      <Image
                        src={image}
                        alt={`${category.label} products supplied by Zeal`}
                        fill
                        priority={index == 0}
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          25vw
                        "
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.04]
                        "
                      />
                    </div>

                    {/* IMAGE OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/55
                        to-black/10
                      "
                    />

                    {/* SUBTLE GOLD LIGHT */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-48
                        w-48
                        rounded-full
                        bg-z-gold/20
                        opacity-0
                        blur-3xl
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* NUMBER */}

                    <span
                      className="
                        absolute
                        right-5
                        top-5
                        font-display
                        text-sm
                        font-bold
                        tracking-wide
                        text-white/50
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* CONTENT */}

                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">

                      <div
                        className="
                          mb-3
                          h-px
                          w-7
                          bg-z-gold
                          transition-all
                          duration-500
                          group-hover:w-12
                        "
                      />

                      <h3 className="font-display text-xl font-bold text-white">
                        {category.label}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/65">
                        {category.description}
                      </p>

                      {/* <span
                        className="
                          mt-4
                          inline-flex
                          items-center
                          gap-1.5
                          text-sm
                          font-semibold
                          text-z-gold-light
                        "
                      >
                        Explore
                        <ArrowUpRight
                          size={15}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                        />
                      </span> */}

                    </div>

                    {/* BOTTOM LINE */}

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-0
                        bg-z-gold
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />
                  </Link>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          SOURCING APPROACH
      ====================================================== */}

      <section className="bg-z-black py-14 text-white md:py-16">
        <div className="container-z">

          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-3">How We Work</p>
              </Reveal>

              <Reveal delay={0.06}>
                <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                  A clear path from requirement to supply.
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <RouteLine width={80} className="my-5" />
              </Reveal>

              <Reveal delay={0.16}>
                <p className="max-w-md text-sm leading-relaxed text-white/55">
                  We keep the sourcing process practical — understanding the
                  requirement first, then working through suitable options and
                  coordination.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div
                className="
                  grid
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  sm:grid-cols-2
                "
              >
                {approach.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal
                      key={item.number}
                      delay={0.05 * index}
                    >
                      <div
                        className="
                          group
                          h-full
                          bg-z-black
                          p-5
                          transition-colors
                          duration-300
                          hover:bg-white/[0.035]
                          md:p-6
                        "
                      >
                        <div className="flex items-start justify-between">
                          <span
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-lg
                              border
                              border-z-gold/25
                              bg-z-gold/10
                              text-z-gold
                            "
                          >
                            <Icon size={18} />
                          </span>

                          <span
                            className="
                              font-display
                              text-sm
                              font-bold
                              text-white/20
                              transition-colors
                              group-hover:text-z-gold
                            "
                          >
                            {item.number}
                          </span>
                        </div>

                        <h3 className="mt-5 font-display text-lg font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-white/50">
                          {item.text}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          SEO CONTEXT
      ====================================================== */}

      <section className="bg-z-white py-12 md:py-14">
        <div className="container-z">

          <div className="grid gap-7 md:grid-cols-2 md:items-center">

            <Reveal>
              <div>
                <p className="eyebrow mb-3">
                  Product Supply
                </p>

                <h2 className="font-display text-2xl font-bold leading-tight text-z-ink md:text-3xl">
                  Product sourcing for changing business requirements.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border-l-2 border-z-gold pl-5">
                <p className="text-sm leading-relaxed text-z-muted md:text-base">
                  Zeal's product and supply categories include dairy products,
                  jaggery, salt, rice, dry fruits and nuts, pulses, spices and
                  building materials. Requirements can vary by specification,
                  quantity, location, pricing and delivery expectations, so
                  each enquiry is assessed individually.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <InlineCTA
        title="Looking for a specific product?"
        description="Share your product, quantity and requirement with us. We'll explore suitable sourcing and supply options."
      />
    </>
  );
}
