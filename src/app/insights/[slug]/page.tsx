import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import InlineCTA from "@/components/ui/InlineCTA";
import { insights, getInsight } from "@/content/insights";
import { getService } from "@/content/services";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article)
    return pageMetadata({ title: "Insight | Zeal", description: "Zeal insight article.", path: `/insights/${slug}` });
  return pageMetadata({
    title: `${article.title} | Zeal Insights`,
    description: article.description,
    path: `/insights/${slug}`,
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return notFound();

  const related = getService(article.relatedService || "");
  const otherArticles = insights.filter((a) => a.slug !== slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    author: { "@type": "Organization", name: article.author },
    datePublished: article.date,
    dateModified: article.updated || article.date,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: { "@type": "ImageObject", url: `${siteConfig.siteUrl}/images/zeal-mark.png` },
    },
    mainEntityOfPage: `${siteConfig.siteUrl}/insights/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PageHero
        eyebrow={`${new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · ${article.readTime}`}
        title={article.title}
        description={article.description}
        crumbs={[{ name: "Insights", path: "/insights" }, { name: article.title, path: `/insights/${slug}` }]}
      />

      <article className="py-16 md:py-24 bg-z-white">
        <div className="container-z grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10">
                <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 60vw" />
              </div>
            </Reveal>
            <div className="prose-zeal space-y-6 max-w-2xl">
              {article.content.map((p, i) => (
                <Reveal key={i} delay={0.04 * i}>
                  <p className="text-z-ink/85 text-base md:text-lg leading-relaxed">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-10 text-sm text-z-muted">
                Written by <span className="text-z-ink font-medium">{article.author}</span>
              </p>
            </Reveal>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            {related && (
              <Reveal delay={0.1}>
                <div className="rounded-2xl bg-z-black text-white p-7">
                  <p className="eyebrow mb-3">Related Service</p>
                  <p className="font-display font-bold text-lg">{related.name}</p>
                  <p className="text-sm text-white/55 mt-2 leading-relaxed">{related.short}</p>
                  <Link
                    href={`/${related.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-z-gold hover:text-z-gold-light"
                  >
                    Explore service <ArrowUpRight size={14} />
                  </Link>
                </div>
              </Reveal>
            )}
            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-z-border p-6">
                <p className="text-sm font-semibold text-z-ink mb-4">More Insights</p>
                <ul className="space-y-4">
                  {otherArticles.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/insights/${a.slug}`} className="group flex items-start justify-between gap-3">
                        <span className="text-sm text-z-muted group-hover:text-z-gold transition-colors leading-snug">
                          {a.title}
                        </span>
                        <ArrowUpRight size={14} className="text-z-gold shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </article>

      <InlineCTA />
    </>
  );
}
