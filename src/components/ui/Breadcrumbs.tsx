import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import { breadcrumbJsonLd } from "@/lib/seo";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({
  items,
}: BreadcrumbsProps) {
  /*
   * Always begin with Home.
   *
   * Filter duplicate paths so a breadcrumb cannot accidentally
   * generate duplicate React keys or duplicate breadcrumb entries.
   */
  const full = [
    { name: "Home", path: "/" },
    ...items.filter(
      (item, index, array) =>
        array.findIndex((entry) => entry.path === item.path) === index
    ),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full"
    >
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(full)),
        }}
      />

      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] font-medium tracking-wide sm:text-xs">
        {full.map((item, index) => {
          const isCurrent = index === full.length - 1;
          const isHome = index === 0;

          return (
            <li
              key={`${item.path}-${index}`}
              className="flex items-center"
            >
              {/* Separator */}
              {index > 0 && (
                <ChevronRight
                  size={13}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="mx-1 shrink-0 text-white/25"
                />
              )}

              {isCurrent ? (
                <span
                  aria-current="page"
                  className="
                    max-w-[220px]
                    truncate
                    text-z-gold-light
                    sm:max-w-[320px]
                  "
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    whitespace-nowrap
                    text-white/45
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  {isHome && (
                    <Home
                      size={12}
                      strokeWidth={1.7}
                      aria-hidden="true"
                      className="
                        text-white/35
                        transition-colors
                        duration-200
                        group-hover:text-z-gold
                      "
                    />
                  )}

                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
