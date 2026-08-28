import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/seo";

export default function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const full = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(full)) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/40">
        {full.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={12} />}
            {i === full.length - 1 ? (
              <span className="text-z-gold-light">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
