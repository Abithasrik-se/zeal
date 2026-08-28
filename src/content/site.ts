export const siteConfig = {
  name: "Zeal",
  legalName: "Zeal Enterprises",
  tagline: "Guiding Business. Creating Opportunities.",
  description:
    "Zeal is a diversified trading and business services enterprise focused on sourcing, procurement, distribution and reliable supply across India, the United Kingdom and international markets.",
  url: "https://www.zealenterprises.example",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.zealenterprises.example",
  ogImage: "/images/og-image.jpg",
  address: {
    line1: "Flat No.: NO:3/571/38,",
    line2: "Thiruppathi Nagar,",
    line3: "Padanthal, Sattur,",
    line4: "Tamil Nadu - 626203",
    full: "Flat No.: NO:3/571/38, Thiruppathi Nagar, Padanthal, Sattur, Tamil Nadu - 626203",
  },
  gstin: "33EYQPR3086H1ZU",
  email: "admin.zealenterprises@gmail.com",
  whatsapp: "918110807884",
  whatsappDisplay: "+91 81108 07884",
  whatsappDefaultMessage:
    "Hello Zeal, I would like to discuss a trading, sourcing or supply requirement.",
  emailDefaultSubject: "Business Enquiry — via Zeal Website",
  emailDefaultBody:
    "Hello Zeal team,\n\nI would like to discuss the following requirement:\n\n[Please describe your product / service / sourcing requirement here]\n\nCompany:\nCountry:\nPhone:\n\nRegards,",
};

export const whatsappHref = (message?: string) => {
  const text = encodeURIComponent(message || siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
};

export const emailHref = (subject?: string, body?: string) => {
  const s = encodeURIComponent(subject || siteConfig.emailDefaultSubject);
  const b = encodeURIComponent(body || siteConfig.emailDefaultBody);
  return `mailto:${siteConfig.email}?subject=${s}&body=${b}`;
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Business", href: "/trading-supply" },
  { label: "Services", href: "/why-zeal" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About Zeal", href: "/about" },
    { label: "Why Zeal", href: "/why-zeal" },
    { label: "Markets", href: "/markets" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Trading & Supply", href: "/trading-supply" },
    { label: "Procurement & Sourcing", href: "/procurement-sourcing" },
    { label: "Distribution", href: "/distribution" },
    { label: "Business Facilitation", href: "/business-facilitation" },
    { label: "Agency & Commission Services", href: "/agency-commission-services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
  ],
};
