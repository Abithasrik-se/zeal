export type Placeholder = {
  slug: string;
  label: string;
  description: string;
};

export const productCategories: Placeholder[] = [
  { slug: "category-01", label: "Product Category 01", description: "Description to be provided by client." },
  { slug: "category-02", label: "Product Category 02", description: "Description to be provided by client." },
  { slug: "category-03", label: "Product Category 03", description: "Description to be provided by client." },
];

export const industryCategories: Placeholder[] = [
  { slug: "industry-01", label: "Industry Category 01", description: "Description to be provided by client." },
  { slug: "industry-02", label: "Industry Category 02", description: "Description to be provided by client." },
  { slug: "industry-03", label: "Industry Category 03", description: "Description to be provided by client." },
];

export type Market = {
  slug: string;
  label: string;
  status: "confirmed" | "tbc";
  description: string;
};

export const markets: Market[] = [
  { slug: "india", label: "India", status: "confirmed", description: "A core market for Zeal's trading, sourcing and supply activities." },
  { slug: "united-kingdom", label: "United Kingdom", status: "confirmed", description: "An international market Zeal is oriented toward for trading and business services." },
  { slug: "other-international-markets", label: "Other International Markets", status: "tbc", description: "Specific additional markets to be confirmed." },
];
