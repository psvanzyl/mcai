export const SITE = {
  name: "McAi",
  legalName: "McAi & Company",
  tagline: "Global AI consulting",
  description:
    "McAi is a global AI consulting firm. We help leaders turn artificial intelligence into operating reality — strategy, data foundations, agentic operations, and the governance that makes speed defensible.",
  url: "https://mcflimsey.wegoai.duckdns.org",
  email: "hello@mcai.example",
  phone: "+31 70 000 0000",
  founded: 2019,
  colleagues: "3,400",
  officesCount: 24,
  languages: ["English", "Deutsch", "Nederlands", "Français"],
};

export type NavColumn = {
  title: string;
  links: { label: string; href: string; desc?: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  columns?: NavColumn[];
  feature?: { label: string; href: string; text: string; img: string };
};

export const NAV: NavItem[] = [
  {
    label: "Industries",
    href: "/industries",
    columns: [
      {
        title: "Sectors",
        links: [
          { label: "Advanced industries", href: "/industries/advanced-industries" },
          { label: "Financial services", href: "/industries/financial-services" },
          { label: "Healthcare & life sciences", href: "/industries/healthcare-and-life-sciences" },
          { label: "Retail & consumer", href: "/industries/retail-and-consumer" },
          { label: "Energy & materials", href: "/industries/energy-and-materials" },
        ],
      },
      {
        title: "More sectors",
        links: [
          { label: "Technology & software", href: "/industries/technology-and-software" },
          { label: "Public & social sector", href: "/industries/public-and-social-sector" },
          { label: "Logistics & mobility", href: "/industries/logistics-and-mobility" },
          { label: "Agriculture & food", href: "/industries/agriculture-and-food" },
          { label: "Telecom & media", href: "/industries/telecom-and-media" },
        ],
      },
    ],
    feature: {
      label: "Industry expertise",
      href: "/industries",
      text: "Deep sector knowledge from a decade of CEO counselling — now applied to AI.",
      img: "/img/tile-industries.jpg",
    },
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    columns: [
      {
        title: "Build",
        links: [
          { label: "AI strategy & transformation", href: "/capabilities/ai-strategy-and-transformation" },
          { label: "Data & platform engineering", href: "/capabilities/data-and-platform-engineering" },
          { label: "Agentic automation & operations", href: "/capabilities/agentic-automation-and-operations" },
          { label: "AI-native product & experience", href: "/capabilities/ai-native-product-and-experience" },
        ],
      },
      {
        title: "Assure and enable",
        links: [
          { label: "Responsible AI & governance", href: "/capabilities/responsible-ai-and-governance" },
          { label: "Cybersecurity & resilience", href: "/capabilities/cybersecurity-and-resilience" },
          { label: "Talent, change & capability", href: "/capabilities/talent-change-and-capability-building" },
          { label: "Quantum & emerging technology", href: "/capabilities/quantum-and-emerging-technology" },
        ],
      },
    ],
    feature: {
      label: "Tech & AI",
      href: "/capabilities",
      text: "We help clients unlock AI at scale, modernise delivery, and build new businesses.",
      img: "/img/tile-tech.jpg",
    },
  },
  {
    label: "Insights",
    href: "/insights",
    columns: [
      {
        title: "Latest thinking",
        links: [
          { label: "All insights", href: "/insights" },
          { label: "The AI operating system", href: "/insights/the-ai-operating-system" },
          { label: "From pilots to P&L", href: "/insights/from-pilots-to-p-and-l" },
          { label: "The agentic enterprise", href: "/insights/the-agentic-enterprise" },
        ],
      },
      {
        title: "By theme",
        links: [
          { label: "AI & technology", href: "/insights?theme=AI%20%26%20technology" },
          { label: "Operations", href: "/insights?theme=Operations" },
          { label: "Risk & governance", href: "/insights?theme=Risk%20%26%20governance" },
          { label: "People & organisation", href: "/insights?theme=People%20%26%20organisation" },
        ],
      },
    ],
    feature: {
      label: "The McAi Quarterly",
      href: "/insights",
      text: "Four times a year, our best thinking on where AI is actually creating value.",
      img: "/img/band-podcast.jpg",
    },
  },
  {
    label: "Our people",
    href: "/our-people",
    columns: [
      {
        title: "About McAi",
        links: [
          { label: "Our people", href: "/our-people" },
          { label: "About us", href: "/about" },
          { label: "Offices", href: "/about#offices" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        title: "Work with us",
        links: [
          { label: "Contact", href: "/contact" },
          { label: "Open roles", href: "/careers#roles" },
          { label: "Alumni network", href: "/about#alumni" },
        ],
      },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "About us", href: "/about" },
];

export type Office = { city: string; country: string; region: string; address: string; phone: string };

export const OFFICES: Office[] = [
  { city: "Amsterdam", country: "Netherlands", region: "Europe", address: "Gustav Mahlerlaan 10, 1082 PP Amsterdam", phone: "+31 20 000 0000" },
  { city: "Berlin", country: "Germany", region: "Europe", address: "Kurfürstendamm 194, 10707 Berlin", phone: "+49 30 000 0000" },
  { city: "Brussels", country: "Belgium", region: "Europe", address: "Avenue Louise 143, 1050 Brussels", phone: "+32 2 000 0000" },
  { city: "Copenhagen", country: "Denmark", region: "Europe", address: "Dampfærgevej 27, 2100 Copenhagen", phone: "+45 33 000 000" },
  { city: "Dublin", country: "Ireland", region: "Europe", address: "1 Grand Canal Square, Dublin 2", phone: "+353 1 000 0000" },
  { city: "Frankfurt", country: "Germany", region: "Europe", address: "Taunusanlage 18, 60325 Frankfurt", phone: "+49 69 000 0000" },
  { city: "London", country: "United Kingdom", region: "Europe", address: "1 Ropemaker Street, London EC2Y 9HD", phone: "+44 20 0000 0000" },
  { city: "Madrid", country: "Spain", region: "Europe", address: "Paseo de la Castellana 95, 28046 Madrid", phone: "+34 91 000 0000" },
  { city: "Milan", country: "Italy", region: "Europe", address: "Via Brera 21, 20121 Milan", phone: "+39 02 0000 0000" },
  { city: "Paris", country: "France", region: "Europe", address: "14 Avenue de Wagram, 75017 Paris", phone: "+33 1 00 00 00 00" },
  { city: "Stockholm", country: "Sweden", region: "Europe", address: "Klarabergsviadukten 70, 111 64 Stockholm", phone: "+46 8 000 000" },
  { city: "Zurich", country: "Switzerland", region: "Europe", address: "Bahnhofstrasse 52, 8001 Zurich", phone: "+41 44 000 0000" },
  { city: "Dubai", country: "United Arab Emirates", region: "Middle East", address: "Gate Village 7, DIFC, Dubai", phone: "+971 4 000 0000" },
  { city: "Riyadh", country: "Saudi Arabia", region: "Middle East", address: "King Fahd Road, Riyadh 12333", phone: "+966 11 000 0000" },
  { city: "Bengaluru", country: "India", region: "Asia", address: "UB City, Vittal Mallya Road, Bengaluru 560001", phone: "+91 80 0000 0000" },
  { city: "Mumbai", country: "India", region: "Asia", address: "Bandra Kurla Complex, Mumbai 400051", phone: "+91 22 0000 0000" },
  { city: "Shanghai", country: "China", region: "Asia", address: "Plaza 66, 1266 Nanjing West Road, Shanghai", phone: "+86 21 0000 0000" },
  { city: "Singapore", country: "Singapore", region: "Asia", address: "1 Raffles Place, Singapore 048616", phone: "+65 6000 0000" },
  { city: "Tokyo", country: "Japan", region: "Asia", address: "Marunouchi Building, Chiyoda-ku, Tokyo", phone: "+81 3 0000 0000" },
  { city: "Sydney", country: "Australia", region: "Pacific", address: "1 Farrer Place, Sydney NSW 2000", phone: "+61 2 0000 0000" },
  { city: "Chicago", country: "United States", region: "Americas", address: "110 North Wacker Drive, Chicago, IL", phone: "+1 312 000 0000" },
  { city: "New York", country: "United States", region: "Americas", address: "3 World Trade Center, New York, NY", phone: "+1 212 000 0000" },
  { city: "São Paulo", country: "Brazil", region: "Americas", address: "Av. Brigadeiro Faria Lima 3477, São Paulo", phone: "+55 11 0000 0000" },
  { city: "Johannesburg", country: "South Africa", region: "Africa", address: "Sandton City Office Towers, Johannesburg", phone: "+27 11 000 0000" },
];

export const FOOTER_COLUMNS: NavColumn[] = [
  {
    title: "About McAi",
    links: [
      { label: "Our purpose", href: "/about" },
      { label: "Our people", href: "/our-people" },
      { label: "Offices", href: "/about#offices" },
      { label: "Alumni network", href: "/about#alumni" },
      { label: "Newsroom", href: "/insights" },
    ],
  },
  {
    title: "Work with us",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Open roles", href: "/careers#roles" },
      { label: "Client service", href: "/contact#clients" },
      { label: "Vendor enquiries", href: "/contact" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "All insights", href: "/insights" },
      { label: "AI & technology", href: "/insights?theme=AI%20%26%20technology" },
      { label: "Operations", href: "/insights?theme=Operations" },
      { label: "Risk & governance", href: "/insights?theme=Risk%20%26%20governance" },
      { label: "The McAi Quarterly", href: "/insights" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "AI strategy", href: "/capabilities/ai-strategy-and-transformation" },
      { label: "Data & platform", href: "/capabilities/data-and-platform-engineering" },
      { label: "Agentic operations", href: "/capabilities/agentic-automation-and-operations" },
      { label: "Responsible AI", href: "/capabilities/responsible-ai-and-governance" },
      { label: "All capabilities", href: "/capabilities" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy notice", href: "/about#legal" },
      { label: "Cookie policy", href: "/about#legal" },
      { label: "Terms of use", href: "/about#legal" },
      { label: "Accessibility", href: "/about#legal" },
      { label: "Responsible disclosure", href: "/about#legal" },
    ],
  },
];

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C20.3 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.02-3.3-2.02 0-2.33 1.57-2.33 3.2V21H9z" },
  { label: "X", href: "https://x.com/", d: "M17.5 3h3.2l-7 8 7.3 10h-5.6l-4.4-6.1L5.9 21H2.7l7.3-8.4L3 3h5.7l4.1 5.7zm-1.1 16h1.7L7.4 4.8H5.6z" },
  { label: "YouTube", href: "https://youtube.com/", d: "M21.6 7.2s-.2-1.5-.8-2.1c-.7-.8-1.6-.8-2-.9C16.9 4 12 4 12 4h-.01s-4.9 0-6.8.2c-.4 0-1.3.1-2 .9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.7.8 1.7.8 2.1.9 1.9.2 6.7.2 6.7.2s4.9 0 6.8-.2c.4-.1 1.3-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM9.9 14.6V8.9l6 2.9z" },
];

export const HOME_STATS = [
  { value: "24", label: "offices worldwide" },
  { value: "3,400", label: "colleagues" },
  { value: "600+", label: "AI use cases in production" },
  { value: "9", label: "sectors served" },
];
