export type Placeholder = {
  slug: string;
  label: string;
  description: string;
};

export const productCategories: Placeholder[] = [
  {
    slug: "dairy-products",
    label: "Dairy Products",
    description:
      "Dairy products sourced and supplied according to specific customer and business requirements.",
  },
  {
    slug: "jaggery",
    label: "Jaggery",
    description:
      "Jaggery sourcing and supply for suitable business and commercial requirements.",
  },
  {
    slug: "salt",
    label: "Salt",
    description:
      "Salt and related essential commodity supply based on product and quantity requirements.",
  },
  {
    slug: "rice",
    label: "Rice",
    description:
      "Rice sourcing and supply across suitable varieties and requirements.",
  },
  {
    slug: "dry-fruits-nuts",
    label: "Dry Fruits & Nuts",
    description:
      "Dry fruits and nuts sourced for suitable commercial and business requirements.",
  },
  {
    slug: "pulses",
    label: "Pulses",
    description:
      "Pulses and related food commodities sourced according to requirement.",
  },
  {
    slug: "spices",
    label: "Spices",
    description:
      "Spices sourced and supplied based on product specifications and business requirements.",
  },
  {
    slug: "building-materials",
    label: "Building Materials",
    description:
      "Building and construction-related materials sourced according to project and supply requirements.",
  },
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

