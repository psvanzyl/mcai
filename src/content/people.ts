export type Person = {
  name: string;
  role: string;
  location: string;
  focus: string;
  img: string;
  bio: string;
};

export const people: Person[] = [
  {
    name: "Dr. Amara Okafor",
    role: "Global managing partner",
    location: "London",
    focus: "AI strategy, operating model",
    img: "/img/p-1.jpg",
    bio: "Leads McAi's global practice on AI operating models. Twenty years advising boards on technology-driven change; previously led enterprise data at a European universal bank.",
  },
  {
    name: "Jonas Lindqvist",
    role: "Senior partner, financial services",
    location: "Stockholm",
    focus: "Risk, governance, credit",
    img: "/img/p-2.jpg",
    bio: "Works with banks and insurers on model risk, underwriting economics, and the evidence infrastructure that makes supervisory speed defensible.",
  },
  {
    name: "Priya Raghavan",
    role: "Senior partner, operations",
    location: "Singapore",
    focus: "Supply chain, planning, manufacturing",
    img: "/img/p-3.jpg",
    bio: "Rebuilds planning and operations for industrial and consumer clients. Specialises in turning monthly cycles into continuous, agent-assisted replanning.",
  },
  {
    name: "Sofia Almeida",
    role: "Partner, energy & retail",
    location: "Madrid",
    focus: "Data products, demand, grid",
    img: "/img/p-4.jpg",
    bio: "Leads decision-led data programmes across energy and retail. Her work on flexibility markets and assortment models is used by operators in six countries.",
  },
  {
    name: "Hannah Berger",
    role: "Partner, healthcare & public sector",
    location: "Berlin",
    focus: "Clinical operations, responsible AI",
    img: "/img/p-5.jpg",
    bio: "Advises provider systems and public bodies on operational AI with a clinical or citizen-facing consequence. Chairs McAi's responsible-AI review board.",
  },
  {
    name: "Marcus Feldman",
    role: "Partner, advanced industries",
    location: "Chicago",
    focus: "Industrial AI, plant operations",
    img: "/img/p-6.jpg",
    bio: "Spent nine years on plant floors before consulting. Leads the firm's work on yield, reliability, and operator-in-the-loop systems.",
  },
  {
    name: "Daniel Mbeki",
    role: "Partner, people & organisation",
    location: "Johannesburg",
    focus: "Workforce, reskilling, change",
    img: "/img/p-7.jpg",
    bio: "Designs workforce transitions for organisations absorbing AI into their operating model. Publishes the firm's work on capability building at scale.",
  },
  {
    name: "Yuki Tanaka",
    role: "Partner, technology & software",
    location: "Tokyo",
    focus: "Engineering productivity, products",
    img: "/img/p-8.jpg",
    bio: "Works with software and platform companies on AI-native product strategy and on applying AI to their own engineering and support economics.",
  },
  {
    name: "Nadia Haddad",
    role: "Partner, cybersecurity & resilience",
    location: "Dubai",
    focus: "Security operations, AI estate",
    img: "/img/p-9.jpg",
    bio: "Leads security and resilience work, including the emerging discipline of protecting model endpoints, pipelines, and agent permissions.",
  },
];

export const VALUES = [
  {
    title: "Truth over comfort",
    text: "We tell clients what the evidence shows, including when it contradicts the programme they have already funded. Our baselines are written down before the work starts.",
  },
  {
    title: "Operating reality over pilot theatre",
    text: "A use case is real when it runs in production, has a named owner, and moves a number someone is accountable for. Everything else is a pilot and is resourced as one.",
  },
  {
    title: "Judgement stays human",
    text: "We design systems in which accountability is held by a person who can disagree with the model easily, and we say clearly which decisions we would never delegate.",
  },
  {
    title: "Own the outcome",
    text: "We stay until the capability is running without us. That usually means teaching, documenting, and handing over decision rights rather than defending them.",
  },
];

export type Job = {
  title: string;
  practice: string;
  location: string;
  type: "Full-time" | "Contract" | "Internship";
  level: string;
  summary: string;
};

export const jobs: Job[] = [
  { title: "Engagement manager, AI strategy", practice: "AI strategy & transformation", location: "Amsterdam", type: "Full-time", level: "Manager", summary: "Lead 2-4 person teams on AI value mapping and operating-model design for European clients." },
  { title: "Data platform engineer", practice: "Data & platform engineering", location: "Berlin", type: "Full-time", level: "Senior", summary: "Build decision-led data products and the pipelines and quality observability around them." },
  { title: "Applied AI engineer, agents", practice: "Agentic automation & operations", location: "London", type: "Full-time", level: "Senior", summary: "Design agent architectures with bounded action spaces, evaluation harnesses, and human escalation." },
  { title: "Responsible AI specialist", practice: "Responsible AI & governance", location: "Brussels", type: "Full-time", level: "Consultant", summary: "Translate EU AI Act and sector obligations into workflow controls clients can operate." },
  { title: "Industrial AI consultant", practice: "Advanced industries", location: "Chicago", type: "Full-time", level: "Consultant", summary: "Work on yield, reliability, and operator-in-the-loop systems with plant teams." },
  { title: "Healthcare operations analyst", practice: "Healthcare & life sciences", location: "Stockholm", type: "Full-time", level: "Analyst", summary: "Model patient flow, theatre scheduling, and coding backlog for provider clients." },
  { title: "Product designer, AI experiences", practice: "AI-native product & experience", location: "Remote (EU)", type: "Full-time", level: "Senior", summary: "Design interfaces for uncertainty, correction, and control in AI-assisted journeys." },
  { title: "Security engineer, AI estate", practice: "Cybersecurity & resilience", location: "Dubai", type: "Full-time", level: "Senior", summary: "Harden model endpoints, training pipelines, and agent tool permissions for clients." },
  { title: "Change and capability lead", practice: "Talent, change & capability", location: "Johannesburg", type: "Full-time", level: "Manager", summary: "Run workforce transitions and in-workflow learning programmes alongside process redesign." },
  { title: "Research analyst, emerging technology", practice: "Quantum & emerging technology", location: "Tokyo", type: "Full-time", level: "Analyst", summary: "Horizon scanning with kill criteria: build options for clients rather than trend reports." },
  { title: "Consulting intern, AI practice", practice: "AI strategy & transformation", location: "Milan", type: "Internship", level: "Intern", summary: "Ten-week internship supporting value mapping and client research across sectors." },
  { title: "Data engineer, grid analytics", practice: "Energy & materials", location: "Madrid", type: "Contract", level: "Senior", summary: "Six-month engagement building network data products for a European grid operator." },
];
