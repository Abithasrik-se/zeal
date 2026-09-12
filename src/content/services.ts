export type Service = {
  slug: string;
  icon: "Boxes" | "PackageSearch" | "Truck" | "Handshake" | "Percent";
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  whatItMeans: string;
  approach: string[];
  whoFor: string[];
  benefits: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  featured?: boolean;
  image: string;
};

export const services: Service[] = [
  {
    slug: "trading-supply",
    icon: "Boxes",
    name: "Trading & Supply",
    short: "Sourcing and supplying products to customers, businesses and institutions.",
    metaTitle: "Trading & Supply Services | Zeal",
    metaDescription:
      "Zeal's Trading & Supply service sources and supplies products to customers, businesses and institutions with a focus on reliability and quality.",
    eyebrow: "Principal Business",
    intro:
      "Trading & Supply sits at the heart of what Zeal does — connecting sourcing with reliable delivery for customers, businesses and institutions.",
    whatItMeans:
      "Trading & Supply covers the movement of products from suitable sources to the businesses and institutions that need them, backed by clear communication and consistent follow-through at every stage.",
    approach: [
      "Understand the customer's product and volume requirement.",
      "Identify suitable sources aligned to quality and pricing expectations.",
      "Coordinate logistics, documentation and delivery timelines.",
      "Maintain communication through to fulfilment.",
    ],
    whoFor: [
      "Businesses seeking a dependable trading partner.",
      "Institutions with recurring supply requirements.",
      "Organisations exploring new product categories or sources.",
    ],
    benefits: [
      { title: "Reliability", description: "Dependable follow-through on every trading commitment." },
      { title: "Quality Focus", description: "Sources are evaluated with quality as a priority, not an afterthought." },
      { title: "Clear Communication", description: "Transparent updates from enquiry to delivery." },
    ],
    faqs: [
      { q: "What does Zeal's trading and supply service include?", a: "It includes identifying suitable products and sources, and coordinating supply to customers, businesses and institutions based on the specific requirement discussed." },
      { q: "Who can work with Zeal on trading and supply?", a: "Businesses, institutions and organisations with a genuine sourcing or supply requirement are welcome to reach out and discuss their needs." },
      { q: "Which markets does Zeal serve?", a: "Zeal is oriented toward India, the United Kingdom and other international markets. Specific market coverage is confirmed on a case-by-case basis — see our Markets page." },
    ],
    image: "/images/services/trading-supply.jpg",
    featured: true,
  },
  {
    slug: "procurement-sourcing",
    icon: "PackageSearch",
    name: "Procurement & Sourcing",
    short: "Identifying suitable products and reliable sources with a focus on quality and competitive pricing.",
    metaTitle: "Procurement & Sourcing Services | Zeal",
    metaDescription:
      "Zeal's Procurement & Sourcing service identifies suitable products and reliable sources, balancing quality and competitive pricing for every requirement.",
    eyebrow: "Core Service",
    intro:
      "Procurement & Sourcing is about finding the right product from the right source, at a price that makes business sense.",
    whatItMeans:
      "This service focuses on the front end of the supply journey: understanding requirements precisely, then identifying and evaluating sources that can meet them reliably.",
    approach: [
      "Capture the specific product or category requirement.",
      "Research and shortlist suitable sources.",
      "Evaluate options against quality, pricing and reliability.",
      "Recommend and coordinate the preferred sourcing route.",
    ],
    image: "/images/services/procurement-sourcing.jpg",
    whoFor: [
      "Businesses looking to diversify or improve their sourcing.",
      "Organisations evaluating new suppliers or categories.",
      "Buyers who value a structured sourcing process.",
    ],
    benefits: [
      { title: "Smart Sourcing", description: "A considered approach to identifying the right source, not just the fastest one." },
      { title: "Competitive Pricing", description: "Sourcing decisions weigh cost alongside quality and reliability." },
      { title: "Structured Evaluation", description: "Options are assessed methodically before a recommendation is made." },
    ],
    faqs: [
      { q: "How does Zeal approach sourcing?", a: "By first understanding the requirement in detail, then researching and evaluating suitable sources against quality, pricing and reliability." },
      { q: "Can businesses submit specific sourcing requirements?", a: "Yes. Requirements can be shared through the contact page, and Zeal will explore suitable sourcing options accordingly." },
    ],
  },
  {
    slug: "distribution",
    icon: "Truck",
    name: "Distribution",
    short: "Efficient product distribution and supply with a focus on timely delivery.",
    metaTitle: "Distribution Services | Zeal",
    metaDescription:
      "Zeal's Distribution service focuses on efficient product movement and timely delivery for businesses and institutions.",
    eyebrow: "Core Service",
    intro:
      "Distribution is where sourcing decisions translate into products reaching the businesses that need them, on time.",
    whatItMeans:
      "This service focuses on the efficient movement of products, coordinating the steps between confirmed supply and final delivery.",
    approach: [
      "Confirm delivery requirements, timelines and destinations.",
      "Coordinate the relevant distribution and logistics steps.",
      "Track progress toward agreed delivery timelines.",
      "Confirm completion with the customer.",
    ],
    whoFor: [
      "Businesses that need dependable delivery timelines.",
      "Institutions coordinating recurring distribution needs.",
    ],
    benefits: [
      { title: "Timely Delivery", description: "Distribution is coordinated with delivery timelines front of mind." },
      { title: "Coordinated Process", description: "Clear coordination between sourcing and final delivery." },
    ],
    faqs: [
      { q: "How does Zeal manage delivery timelines?", a: "By confirming requirements upfront and coordinating each step of the distribution process toward the agreed timeline." },
    ],
    image: "/images/services/distribution.jpg",
  },
  {
    slug: "business-facilitation",
    icon: "Handshake",
    name: "Business Facilitation",
    short: "Helping customers connect with suitable service providers and business opportunities.",
    metaTitle: "Business Facilitation Services | Zeal",
    metaDescription:
      "Zeal's Business Facilitation service helps customers connect with suitable service providers and relevant business opportunities.",
    eyebrow: "Core Service",
    intro:
      "Business Facilitation is about opening the right doors — connecting customers with suitable service providers and opportunities.",
    whatItMeans:
      "Beyond trading, Zeal helps customers navigate toward the right business connections, whether that means a service provider, a partner or a relevant opportunity.",
    approach: [
      "Understand the nature of the business requirement.",
      "Identify suitable and relevant connections.",
      "Facilitate an introduction or coordination process.",
      "Remain available to support next steps.",
    ],
    whoFor: [
      "Businesses exploring new opportunities or partnerships.",
      "Customers who need help finding the right service provider.",
    ],
    benefits: [
      { title: "Business Connectivity", description: "Access to relevant connections beyond a single transaction." },
      { title: "Practical Guidance", description: "Support that is grounded in the specific requirement discussed." },
    ],
    faqs: [
      { q: "What kind of connections does Zeal facilitate?", a: "Connections relevant to the customer's specific business requirement — this is discussed and confirmed directly with each enquiry." },
    ],
    image: "/images/services/business-facilitation.jpg",
  },
  {
    slug: "agency-commission-services",
    icon: "Percent",
    name: "Agency & Commission Services",
    short: "Commission-based facilitation and agency activities across suitable business and service opportunities.",
    metaTitle: "Agency & Commission Services | Zeal",
    metaDescription:
      "Zeal offers commission-based agency and facilitation services across suitable business and service opportunities.",
    eyebrow: "Core Service",
    intro:
      "Agency & Commission Services covers commission-based facilitation across suitable business and service opportunities.",
    whatItMeans:
      "Zeal acts as an agent in select engagements, facilitating outcomes on a commission basis where it can add genuine value.",
    approach: [
      "Understand the opportunity and the parties involved.",
      "Assess suitability for agency-based facilitation.",
      "Agree terms for the engagement.",
      "Facilitate the agreed activity through to completion.",
    ],
    whoFor: [
      "Businesses seeking agency-based facilitation for a specific opportunity.",
      "Parties who value a commission-based, outcome-oriented engagement.",
    ],
    benefits: [
      { title: "Transparent Terms", description: "Commission-based engagements are agreed clearly upfront." },
      { title: "Focused Facilitation", description: "Effort is directed at suitable, well-matched opportunities." },
    ],
    faqs: [
      { q: "How are commission terms decided?", a: "Terms are discussed and agreed directly with each party based on the specific engagement." },
    ],
    image: "/images/services/agency-commission-services.jpg",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
