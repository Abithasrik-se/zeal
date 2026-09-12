export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  readTime: string;
  image: string;
  relatedService?: string;
  content: string[];
};

export const insights: Insight[] = [
  {
    slug: "understanding-international-trading-and-supply",
    title: "Understanding International Trading and Supply",
    description:
      "A practical look at what international trading and supply involves, and what businesses should consider before engaging a partner.",
    date: "2026-06-01",
    author: "Zeal Editorial Team",
    readTime: "5 min read",
    image:"/images/insights/international-trading-supply.jpg",
    relatedService: "trading-supply",
    content: [
      "International trading and supply is, at its core, about moving the right products from a reliable source to the business or institution that needs them — reliably, and at a fair price.",
      "For businesses new to cross-border sourcing, the process typically starts with a clear understanding of the requirement: what is needed, in what quantity, to what quality standard, and by when.",
      "From there, a trading partner's role is to identify suitable sources, evaluate them against those requirements, and coordinate the practical steps of supply — documentation, logistics and delivery — so the business can focus on its own operations.",
      "Working with an established trading and supply partner can reduce the operational burden of managing multiple supplier relationships directly, particularly when entering new categories or markets.",
    ],
  },
  {
    slug: "how-businesses-can-approach-strategic-sourcing",
    title: "How Businesses Can Approach Strategic Sourcing",
    description:
      "Strategic sourcing goes beyond price comparison. Here is a structured way to think about identifying the right suppliers.",
    date: "2026-06-10",
    author: "Zeal Editorial Team",
    readTime: "4 min read",
    image:"/images/insights/strategic-sourcing.jpg",
    relatedService: "procurement-sourcing",
    content: [
      "Strategic sourcing is the practice of evaluating suppliers not only on price, but on reliability, quality consistency and their ability to scale with a growing requirement.",
      "A structured approach typically involves defining requirements precisely, researching a shortlist of credible sources, and weighing trade-offs between cost, quality and lead time.",
      "Businesses that treat sourcing as an ongoing relationship — rather than a one-off transaction — tend to build more resilient supply chains over time.",
    ],
  },
  {
    slug: "choosing-a-trading-and-supply-partner",
    title: "What to Consider When Choosing a Trading & Supply Partner",
    description:
      "Reliability, communication and transparency matter as much as price. A short guide to evaluating a trading partner.",
    date: "2026-06-18",
    author: "Zeal Editorial Team",
    readTime: "4 min read",
    image:
      "/images/insights/choosing-a-trading-and-supply-partner.jpg",
    relatedService: "business-facilitation",
    content: [
      "Choosing a trading and supply partner is a decision that affects timelines, quality and, ultimately, customer satisfaction — so it is worth approaching deliberately.",
      "Beyond competitive pricing, look for clear and consistent communication, a transparent approach to sourcing decisions, and a willingness to explain how requirements will be met.",
      "A good trading partner should also be able to support you as your requirements evolve, rather than being limited to a single transaction or category.",
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
