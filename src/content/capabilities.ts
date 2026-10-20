import type { Practice } from "./industries";

export const capabilities: Practice[] = [
  {
    slug: "ai-strategy-and-transformation",
    name: "AI strategy & transformation",
    tagline: "Deciding where AI changes the economics of your business — and proving it within a quarter.",
    img: "/img/cap-strategy.jpg",
    intro: [
      "Most AI strategies are portfolios of use cases with an optimistic timeline attached. We build the other kind: a small number of decisions, each with a baseline, an owner, and an evidence gate at 90 days.",
      "The work starts with economics rather than technology. Which cost lines, revenue lines, or risk exposures are large enough to matter, and which of them can be moved by a model that the organisation can actually operate?",
      "From there we design the operating model that has to change alongside the technology: decision rights, funding cadence, data ownership, and the expectations placed on managers.",
    ],
    howWeHelp: [
      { title: "Value mapping", text: "Quantified opportunity map anchored to the P&L, not to a technology taxonomy." },
      { title: "Portfolio design", text: "A two-speed portfolio with protected foundations and a fast venture budget with 90-day gates." },
      { title: "Operating model", text: "Decision rights, funding, data ownership, and talent implications designed together." },
      { title: "Board and executive alignment", text: "The five questions a board should settle once so the organisation can move without re-litigating." },
    ],
    metrics: [
      { value: "90 days", label: "to first measured evidence, not to a slide deck" },
      { value: "3.2x", label: "earnings impact where the operating model changed too" },
      { value: "1", label: "P&L owner per scaled use case" },
    ],
    related: ["the-ai-operating-system", "from-pilots-to-p-and-l"],
  },
  {
    slug: "data-and-platform-engineering",
    name: "Data & platform engineering",
    tagline: "The twenty data products that carry your decisions — built, owned, and measured.",
    img: "/img/cap-data.jpg",
    intro: [
      "We do not start with a platform. We start with the decisions that matter in the next four quarters and build the data products they require, each with an owner, a contract, and a published quality score.",
      "The platform then grows underneath them, pulled by real demand rather than pushed by an architecture ambition, which is the difference between a programme that ships quarterly and one that reports progress annually.",
      "Engineering standards matter, but the discipline that makes data trustworthy is ownership: somebody must be accountable for freshness, quality, and refusal of degrading requests.",
    ],
    howWeHelp: [
      { title: "Decision-led data products", text: "Twenty to thirty products tied to named decisions, each with an accountable owner." },
      { title: "Platform and pipelines", text: "Batch, streaming, and feature infrastructure sized to actual workload." },
      { title: "Quality and observability", text: "Published quality scores, freshness SLAs, and automated anomaly detection." },
      { title: "Cost and performance", text: "Storage, compute, and inference cost engineering as a first-class discipline." },
    ],
    metrics: [
      { value: "3x", label: "faster use-case delivery with decision-led products" },
      { value: "1 quarter", label: "to first measurable value" },
      { value: "100%", label: "of critical data products with a named owner" },
    ],
    related: ["data-foundations-that-pay", "from-pilots-to-p-and-l"],
  },
  {
    slug: "agentic-automation-and-operations",
    name: "Agentic automation & operations",
    tagline: "From automating steps to deleting handoffs — with controls that hold.",
    img: "/img/cap-agentic.jpg",
    intro: [
      "Agents change the unit of redesign. Instead of automating a step inside a process designed around human constraints, you can re-derive the process from the outcome and keep only the checkpoints that carry accountability.",
      "We help clients choose a posture deliberately — automate, redesign, or reinvent — and then build the four controls that make autonomy safe: bounded action space, reconstructable audit trail, human escalation with a service level, and a kill switch owned by the business.",
      "The organisations that move fastest are not the most permissive; they are the most precise about which decisions they will never delegate.",
    ],
    howWeHelp: [
      { title: "Process re-derivation", text: "Rebuilding the process around the outcome and retaining only accountability checkpoints." },
      { title: "Agent architecture", text: "Tool design, memory, guardrails, and evaluation harnesses for production agents." },
      { title: "Human-in-the-loop design", text: "Escalation paths, review queues, and interfaces that make disagreeing with the model easy." },
      { title: "Assurance", text: "Adversarial testing, drift monitoring, and rollback playbooks before scale." },
    ],
    metrics: [
      { value: "40%+", label: "process cost reduction from redesign rather than automation" },
      { value: "4", label: "controls required before agents touch production" },
      { value: "1", label: "business-owned kill switch per agent" },
    ],
    related: ["the-agentic-enterprise", "the-factory-floor-as-a-learning-system"],
  },
  {
    slug: "responsible-ai-and-governance",
    name: "Responsible AI & governance",
    tagline: "Clarity at the top is what makes speed possible further down.",
    img: "/img/cap-responsible.jpg",
    intro: [
      "Governance is usually positioned as the cost of using AI. We position it as the enabler: once the boundaries are settled, teams stop re-litigating the same question for every use case.",
      "The practical core is a decision-rights model with teeth. Which decisions may never be delegated; what evidence is required before a model influences a customer outcome; who signs when harm occurs; how model risk is reported alongside financial and operational risk; how the board stays literate.",
      "Regulation is a design input, not an afterthought. We map obligations to controls early so that compliance is built into the workflow rather than audited onto it afterwards.",
    ],
    howWeHelp: [
      { title: "Governance design", text: "Decision rights, escalation, and sign-off that a committee can actually enforce." },
      { title: "Risk frameworks", text: "Model inventories, tiering, validation standards, and reporting to board and regulator." },
      { title: "Regulatory mapping", text: "EU AI Act, sector rules, and jurisdictional obligations translated into workflow controls." },
      { title: "Assurance and audit", text: "Evidence packs and reproducibility standards that survive internal and external audit." },
    ],
    metrics: [
      { value: "3", label: "board sessions to settle the five questions that matter" },
      { value: "100%", label: "of scaled decisions reproducible from evidence" },
      { value: "0", label: "advisory-only committees that everyone routes around" },
    ],
    related: ["ai-governance-that-accelerates", "financial-services-after-ai"],
  },
  {
    slug: "ai-native-product-and-experience",
    name: "AI-native product & experience design",
    tagline: "Products that assume a model is present — and interfaces that make it trustworthy.",
    img: "/img/cap-product.jpg",
    intro: [
      "Adding a chat box to an existing product is not an AI-native product. The native version changes what the product is for, how it is priced, and what the customer has to do.",
      "We work with product and design leadership on the questions that follow: where the model's judgement replaces the user's, how uncertainty is communicated, what the failure experience looks like, and how the interface makes the exchange of data legible.",
      "Permission is an interface property. Customers accept personalisation and automation when the trade is visible and reversible, and resist it when it is neither.",
    ],
    howWeHelp: [
      { title: "Product strategy", text: "Where AI changes the product, the pricing model, and the moat — and where it does not." },
      { title: "Experience design", text: "Interfaces for uncertainty, correction, and control in AI-assisted journeys." },
      { title: "Pricing and packaging", text: "Unit economics for inference-heavy products, including usage-based and outcome-based models." },
      { title: "Trust design", text: "Explicit preference controls, disclosure, and reversible consent." },
    ],
    metrics: [
      { value: "2.8x", label: "feature adoption where control and disclosure shipped with the model" },
      { value: "1", label: "legible exchange of value per AI feature" },
      { value: "0", label: "personalisation features without preference controls" },
    ],
    related: ["retails-personalisation-paradox", "the-agentic-enterprise"],
  },
  {
    slug: "talent-change-and-capability-building",
    name: "Talent, change & capability building",
    tagline: "Redesign the work first, then teach into its new shape.",
    img: "/img/cap-talent.jpg",
    intro: [
      "Reskilling fails predictably when it runs in parallel with unchanged work. The course is attended, the queue is unchanged, and within a month the new skill has nowhere to land.",
      "We reverse the sequence: redesign the process with AI in it, define the roles and decisions that remain, and build learning paths against the delta. Interventions are short, attached to real tasks, and observable by managers.",
      "We are also direct about composition. Most organisations will need fewer routine-processing roles and more judgement, verification, and exception-handling roles, and workforce planning should say so out loud.",
    ],
    howWeHelp: [
      { title: "Workforce planning", text: "Honest role-level modelling of what changes, what grows, and what reduces." },
      { title: "Capability architecture", text: "Skills taxonomies tied to redesigned roles rather than generic AI literacy." },
      { title: "Learning in the workflow", text: "Short, task-attached interventions with manager-observable behaviour change." },
      { title: "Change and adoption", text: "Adoption measurement, champion networks, and removal of the incentives that pull people back." },
    ],
    metrics: [
      { value: "1 month", label: "half-life of training that leaves the work unchanged" },
      { value: "3", label: "design choices that matter more than curriculum" },
      { value: "80%", label: "of scaled programmes that relax old targets during transition" },
    ],
    related: ["talent-in-the-age-of-ai", "the-ai-operating-system"],
  },
  {
    slug: "cybersecurity-and-resilience",
    name: "Cybersecurity & resilience",
    tagline: "AI widens the attack surface and shortens the response window. Both directions are workable.",
    img: "/img/cap-security.jpg",
    intro: [
      "AI changes security in two directions. It gives defenders pattern detection and response speed that human teams cannot match, and it gives attackers cheaper reconnaissance, better social engineering, and faster exploit development.",
      "The net effect depends on the operating discipline around the tools: identity, least privilege, segmentation, and a rehearsed response that does not depend on one expert being awake.",
      "We also treat the AI estate itself as attack surface — model endpoints, training pipelines, agent tool access, and the data that flows through them.",
    ],
    howWeHelp: [
      { title: "AI-assisted defence", text: "Detection, triage, and response workflows with measured time-to-contain." },
      { title: "AI estate security", text: "Endpoint, pipeline, and agent-permission hardening for the models you run." },
      { title: "Resilience engineering", text: "Scenario testing, recovery playbooks, and dependency mapping for critical services." },
      { title: "Third-party and model supply chain", text: "Assurance of vendors, weights, and data sources feeding your systems." },
    ],
    metrics: [
      { value: "-45%", label: "mean time to contain with AI-assisted triage" },
      { value: "4", label: "layers of the AI estate treated as attack surface" },
      { value: "quarterly", label: "rehearsed response, not a documented plan" },
    ],
    related: ["the-ai-operating-system", "ai-governance-that-accelerates"],
  },
  {
    slug: "quantum-and-emerging-technology",
    name: "Quantum & emerging technology",
    tagline: "Separating the durable bets from the noise, and building the options that matter.",
    img: "/img/cap-quantum.jpg",
    intro: [
      "Every cycle produces technologies that will matter and technologies that will not, and the two look identical at the start. Our job is to help clients hold options rather than positions.",
      "For quantum, that means understanding which of your problems are genuinely classically intractable, which cryptographic assumptions have a shelf life, and what a post-quantum migration would cost if started now rather than under duress.",
      "More broadly, we run horizon-scanning that produces decisions — pilots with kill criteria, supplier relationships, and skills seeded — rather than trend reports.",
    ],
    howWeHelp: [
      { title: "Technology horizons", text: "Structured scanning with explicit kill criteria and capital-light option building." },
      { title: "Post-quantum readiness", text: "Cryptographic inventory, migration sequencing, and supplier requirements." },
      { title: "Applied research partnerships", text: "Structuring relationships with universities and labs around real problems." },
      { title: "Emerging tech diligence", text: "Investment and acquisition diligence for AI and frontier technology assets." },
    ],
    metrics: [
      { value: "5", label: "questions that separate a durable bet from a trend" },
      { value: "18 months", label: "typical lead time to build a credible option" },
      { value: "0", label: "reports delivered without a decision attached" },
    ],
    related: ["the-ai-operating-system", "data-foundations-that-pay"],
  },
];

export const capabilityBySlug = (slug: string) => capabilities.find((c) => c.slug === slug);
