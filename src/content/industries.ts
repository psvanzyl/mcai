export type Practice = {
  slug: string;
  name: string;
  tagline: string;
  img: string;
  intro: string[];
  howWeHelp: { title: string; text: string }[];
  metrics: { value: string; label: string }[];
  related: string[];
};

export const industries: Practice[] = [
  {
    slug: "advanced-industries",
    name: "Advanced industries",
    tagline: "Automotive, aerospace, chemicals, machinery, and the plants that make everything else.",
    img: "/img/ind-advanced.jpg",
    intro: [
      "Advanced industries carry the heaviest capital intensity and the thinnest tolerance for unplanned variation of any sector we serve. A single point of yield or an hour of unplanned downtime moves the annual result.",
      "AI changes the economics here not by replacing automation, which is already deep, but by learning from the data the plant already produces: process trajectories, maintenance histories, quality outcomes, and the tacit knowledge of experienced operators.",
      "Our work typically starts with one asset class or one production line, proves the value against a measured baseline, and then scales through a standard operating pattern rather than a new project each time.",
    ],
    howWeHelp: [
      { title: "Yield and throughput", text: "Trajectory models that show operators how the current batch compares to the best historical runs, early enough to intervene." },
      { title: "Maintenance and reliability", text: "Condition models that convert calendar-based maintenance into risk-based intervention, with the cost of each decision visible." },
      { title: "Engineering productivity", text: "AI-assisted design, simulation, and documentation workflows that cut engineering hours per change." },
      { title: "Capital allocation", text: "Portfolio models that re-rank capex options as input costs, demand, and technology assumptions move." },
    ],
    metrics: [
      { value: "+4.6 pts", label: "first-pass yield, specialty chemicals client" },
      { value: "-22%", label: "unplanned downtime across 6 plants" },
      { value: "9 months", label: "from first pilot to group standard" },
    ],
    related: ["the-factory-floor-as-a-learning-system", "from-pilots-to-p-and-l"],
  },
  {
    slug: "financial-services",
    name: "Financial services",
    tagline: "Banks, insurers, asset managers, and payments — where trust is the product.",
    img: "/img/ind-financial.jpg",
    intro: [
      "Financial institutions were the first industry to industrialise analytics, which makes them simultaneously the most prepared and the most constrained. Every model change is a supervisory event.",
      "The productive path is not to move faster than the regulator, but to build the evidence infrastructure that makes speed defensible: reproducible decisions, versioned models, and an audit trail that reconstructs why any customer outcome happened.",
      "We work across underwriting, monitoring, servicing, and capital, with a consistent emphasis on shrinking the cost of judgement rather than the cost of paperwork.",
    ],
    howWeHelp: [
      { title: "Credit and underwriting", text: "Thin-file and small-business pricing that widens access while keeping loss rates inside appetite." },
      { title: "Financial crime", text: "Alert triage that reduces false positives so analysts spend their time on genuine risk." },
      { title: "Servicing and advice", text: "Assistive and agentic workflows for servicing, with a documented human accountability layer." },
      { title: "Model risk and governance", text: "Model inventories, validation standards, and reporting that hold up to internal audit and supervisors." },
    ],
    metrics: [
      { value: "-38%", label: "false-positive alerts in financial crime" },
      { value: "3x", label: "faster model validation with a standard evidence pack" },
      { value: "100%", label: "of scaled decisions reproducible from the audit trail" },
    ],
    related: ["financial-services-after-ai", "ai-governance-that-accelerates"],
  },
  {
    slug: "healthcare-and-life-sciences",
    name: "Healthcare & life sciences",
    tagline: "Providers, payers, pharma, and medtech — clinical value, operational reality.",
    img: "/img/ind-health.jpg",
    intro: [
      "Healthcare's AI conversation is dominated by diagnostics. The durable value we observe is in the operational plumbing: flow, scheduling, coding, supply, and trial operations.",
      "The binding constraint is rarely the model. It is data that crosses departmental boundaries and workflows in which disagreeing with a model is easy for the clinician who carries the responsibility.",
      "We work with clinical and operational owners jointly, because a use case with only one of them never reaches production.",
    ],
    howWeHelp: [
      { title: "Patient flow", text: "Discharge prediction and theatre scheduling that reduce cancelled electives and improve access." },
      { title: "Revenue and coding", text: "Assisted coding with clinician review, measured on accuracy and cash-cycle time, not on headcount." },
      { title: "Clinical operations", text: "Trial site selection, patient identification, and monitoring supported by models with clear governance." },
      { title: "Supply and logistics", text: "Demand and inventory models across pharmacy, consumables, and lab supply." },
    ],
    metrics: [
      { value: "+6%", label: "theatre utilisation at a 1,200-bed provider" },
      { value: "-19%", label: "coding backlog in 2 quarters" },
      { value: "2", label: "boundary-crossing decisions to start with" },
    ],
    related: ["healthcares-ai-dividend", "data-foundations-that-pay"],
  },
  {
    slug: "retail-and-consumer",
    name: "Retail & consumer",
    tagline: "Grocery, apparel, beauty, and consumer goods — margin lives in the last mile of availability.",
    img: "/img/ind-retail.jpg",
    intro: [
      "Retailers have more customer data than almost anyone and less ability to act on it than they expect. The gap between insight and shelf is where value is lost.",
      "The winners pair demand-shaping models with supply capability, so a change in what is promoted is matched by what is physically available, in the right store, at the right time.",
      "We also insist on honest measurement. Uplift reported against an unrandomised holdout does not survive a finance audit, and the credibility loss costs more than the slower experiment would have.",
    ],
    howWeHelp: [
      { title: "Assortment and space", text: "Localised assortment and planogram decisions with measurable margin and availability impact." },
      { title: "Pricing and promotion", text: "Elasticity models and promotion optimisation with clean holdout design." },
      { title: "Supply and availability", text: "Replenishment and allocation that respond to demand signals daily rather than weekly." },
      { title: "Customer experience", text: "Personalisation with explicit preference controls and legible loyalty value." },
    ],
    metrics: [
      { value: "-12%", label: "inventory with no service loss, industrial distributor" },
      { value: "+2.8 pts", label: "on-shelf availability in grocery" },
      { value: "1", label: "randomised holdout for every reported uplift" },
    ],
    related: ["retails-personalisation-paradox", "autonomous-supply-chains"],
  },
  {
    slug: "energy-and-materials",
    name: "Energy & materials",
    tagline: "Power, oil and gas, mining, and chemicals — assets measured in decades, decisions measured in minutes.",
    img: "/img/ind-energy.jpg",
    intro: [
      "Energy and materials companies are absorbing three simultaneous shifts: decarbonisation, electrification, and a demand profile that now includes large, flexible computing loads.",
      "The engineering response is necessary and slow. The faster lever is decision speed — forecasting, congestion, flexibility, maintenance, and outage response improved by models that replace static rules.",
      "Progress is usually blocked by data ownership, not data volume. Appointing one accountable owner for network or asset data products is the intervention that unlocks the rest.",
    ],
    howWeHelp: [
      { title: "Network operations", text: "Forecasting, dynamic ratings, and congestion management that release capacity from existing assets." },
      { title: "Flexibility and markets", text: "Agent-coordinated flexibility markets that pay customers to shift load." },
      { title: "Asset performance", text: "Reliability and integrity models for generation, refining, and mining fleets." },
      { title: "Capital and portfolio", text: "Transition-aware capital allocation across a portfolio with long asset lives." },
    ],
    metrics: [
      { value: "+7%", label: "released network capacity via dynamic ratings" },
      { value: "-15%", label: "planned maintenance cost on rotating equipment" },
      { value: "1", label: "accountable owner per network data product" },
    ],
    related: ["the-grid-as-a-platform", "the-ai-operating-system"],
  },
  {
    slug: "technology-and-software",
    name: "Technology & software",
    tagline: "Platforms, infrastructure, and enterprise software — where AI is both the product and the cost line.",
    img: "/img/ind-tech.jpg",
    intro: [
      "Technology companies face the AI question twice: how to build it into their products, and how to absorb it into their own cost base and engineering process.",
      "The second question is often neglected and frequently the larger prize. Engineering throughput, support economics, and cloud spend all move materially when AI is applied to the delivery system itself.",
      "We work with product and engineering leadership on the operating model for both, and on the pricing and packaging decisions that AI-native products force.",
    ],
    howWeHelp: [
      { title: "Engineering productivity", text: "Assisted development, review, and testing workflows with measured throughput and quality effects." },
      { title: "Product strategy", text: "Where AI changes the product, the pricing model, and the moat — and where it does not." },
      { title: "Support and services", text: "Tiered automation of support with clear escalation economics." },
      { title: "Cloud and infrastructure", text: "Cost and capacity models for AI workloads, including inference economics at scale." },
    ],
    metrics: [
      { value: "+18%", label: "merged pull requests per engineer after workflow redesign" },
      { value: "-27%", label: "cost per support resolution" },
      { value: "2", label: "questions: what AI does to the product, and to the cost base" },
    ],
    related: ["the-agentic-enterprise", "the-ai-operating-system"],
  },
  {
    slug: "public-and-social-sector",
    name: "Public & social sector",
    tagline: "Government, education, and non-profits — scale of impact, constraint of legitimacy.",
    img: "/img/ind-public.jpg",
    intro: [
      "Public bodies operate with a legitimacy constraint that private organisations do not: an automated decision must be explainable to the person affected, and to the body that oversees the decision-maker.",
      "That constraint is not an obstacle to progress. Institutions that design for explainability first tend to deploy more confidently, because the political and legal risk is managed up front rather than discovered in a headline.",
      "We work on service delivery, casework, education, and workforce questions, always with the citizen-facing consequence in view.",
    ],
    howWeHelp: [
      { title: "Service delivery", text: "Assisted casework and eligibility processes with documented reasoning for every outcome." },
      { title: "Education and skills", text: "Learning analytics and workforce programmes that target the real skills gap." },
      { title: "Procurement", text: "Structuring AI procurement so that evidence, audit rights, and exit terms are contractual from the start." },
      { title: "Public finance", text: "Budget and demand modelling under uncertainty, with transparent assumptions." },
    ],
    metrics: [
      { value: "-24%", label: "average case handling time with maintained appeal rates" },
      { value: "100%", label: "of automated outcomes explainable to the citizen" },
      { value: "0", label: "deployments without a named accountable official" },
    ],
    related: ["ai-governance-that-accelerates", "talent-in-the-age-of-ai"],
  },
  {
    slug: "logistics-and-mobility",
    name: "Logistics & mobility",
    tagline: "Freight, ports, rail, and urban mobility — the physical network that AI makes legible.",
    img: "/img/ind-logistics.jpg",
    intro: [
      "Logistics is a coordination business in which the assets are expensive, the schedules are interdependent, and the exceptions are the job.",
      "AI's contribution is less about autonomous vehicles than about making the network legible: predicting disruption, replanning continuously, and pricing the cost of changing a plan against the cost of keeping it.",
      "We typically start with a single corridor or terminal, prove the replanning economics, then extend across the network.",
    ],
    howWeHelp: [
      { title: "Network planning", text: "Continuous replanning that trades the cost of change against the cost of a stale plan." },
      { title: "Terminal and yard", text: "Yard, berth, and gate optimisation with measurable throughput and dwell effects." },
      { title: "Fleet and assets", text: "Utilisation, maintenance, and driver or crew rostering under regulatory constraints." },
      { title: "Customer service", text: "Proactive exception communication that reduces inbound contact volume." },
    ],
    metrics: [
      { value: "-31%", label: "expedited freight cost, industrial group" },
      { value: "+11%", label: "terminal throughput per berth-hour" },
      { value: "daily", label: "replanning cadence replacing monthly cycles" },
    ],
    related: ["autonomous-supply-chains", "from-pilots-to-p-and-l"],
  },
  {
    slug: "agriculture-and-food",
    name: "Agriculture & food",
    tagline: "Farms, processors, and food supply — thin margins, volatile inputs, growing demand.",
    img: "/img/ind-agri.jpg",
    intro: [
      "Agriculture operates on biological timescales with financial margins that leave little room for error. Input costs, weather, and yield variability dominate the result.",
      "The data now exists to manage that variability: field-level imagery, machinery telemetry, weather, and soil sensing. Turning it into decisions requires models that respect the agronomy, and interfaces that a farmer will actually use during a working day.",
      "We work on yield, input efficiency, processing, and food supply chains, with an emphasis on adoption rather than novelty.",
    ],
    howWeHelp: [
      { title: "Yield and inputs", text: "Variable-rate application and field-level forecasting that reduce input cost per tonne." },
      { title: "Processing", text: "Quality and throughput models for mills, dairies, and packing operations." },
      { title: "Traceability", text: "Supply-chain provenance systems that satisfy regulatory and retail requirements without adding paperwork." },
      { title: "Sustainability", text: "Measurement of emissions, water, and soil outcomes in a form that buyers and regulators accept." },
    ],
    metrics: [
      { value: "-14%", label: "input cost per tonne on managed hectares" },
      { value: "+8%", label: "processing yield at a food manufacturer" },
      { value: "1 season", label: "to demonstrate field-level value" },
    ],
    related: ["data-foundations-that-pay", "the-factory-floor-as-a-learning-system"],
  },
  {
    slug: "telecom-and-media",
    name: "Telecom & media",
    tagline: "Connectivity, content, and platforms — network cost meets content economics.",
    img: "/img/ind-telecom.jpg",
    intro: [
      "Telecoms face a cost curve that AI both worsens and improves: traffic and energy demand rise, while network operations, service, and marketing become more efficient.",
      "Media faces a different version of the same question, with content production economics shifting faster than distribution economics.",
      "We work on network operations, customer economics, and the content and platform strategies that AI makes possible — and on the cost of inference as a new line item in the plan.",
    ],
    howWeHelp: [
      { title: "Network operations", text: "Fault prediction, energy optimisation, and field-force scheduling across large footprints." },
      { title: "Customer economics", text: "Churn, value, and service models that respect the regulatory and brand constraints." },
      { title: "Content operations", text: "Production, localisation, and metadata workflows for media organisations." },
      { title: "Inference economics", text: "Cost and capacity planning for AI services inside the product portfolio." },
    ],
    metrics: [
      { value: "-17%", label: "network energy cost per terabyte" },
      { value: "-9%", label: "truck rolls per fault resolved" },
      { value: "3x", label: "localisation throughput at a media client" },
    ],
    related: ["the-ai-operating-system", "the-agentic-enterprise"],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
