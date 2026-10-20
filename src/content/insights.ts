export type Insight = {
  slug: string;
  title: string;
  category: "Article" | "Report" | "Case study" | "Interview" | "Podcast";
  themes: string[];
  excerpt: string;
  date: string;
  readMinutes: number;
  authors: string[];
  img: string;
  body: string[];
  pullQuote?: string;
  stats?: { value: string; label: string }[];
};

export const insights: Insight[] = [
  {
    slug: "the-ai-operating-system",
    title: "The AI operating system: a new way for CEOs to run the enterprise",
    category: "Article",
    themes: ["AI & technology", "Strategy"],
    excerpt:
      "The companies pulling away from the pack are not the ones with the most models. They are the ones that rebuilt how decisions, capital, and talent flow around AI.",
    date: "2026-10-14",
    readMinutes: 11,
    authors: ["Dr. Amara Okafor", "Jonas Lindqvist"],
    img: "/img/insight-ai-os.jpg",
    body: [
      "Every technology wave produces a management question before it produces a technology answer. Electricity asked companies to rethink the factory floor. The internet asked them to rethink distribution. AI is now asking a harder question than either: who, or what, makes the decisions inside the enterprise?",
      "In our work with more than 300 large organisations over the past three years, a pattern has become difficult to ignore. The firms that report material earnings impact from AI are not the ones with the largest model budgets. They are the ones that rewired four things at once: where decisions are made, how capital is allocated, how data is governed, and what they expect of their people. We call that bundle the AI operating system.",
      "The first layer is decision architecture. Most large organisations still route decisions through layers built for a slower information cycle. AI compresses the cycle to hours. When a model can recommend a price, a staffing plan, or a maintenance window in seconds, the human layer must shift from producing the decision to owning its boundaries — the guardrails, the escalation rules, and the accountability when the recommendation is wrong.",
      "The second layer is capital. Traditional annual planning cannot fund a portfolio that changes shape every quarter. Leading firms now run a two-speed model: a protected core budget for data foundations and platform, and a fast-moving venture budget for use cases with a 90-day evidence gate. The gate is not a business case document; it is production usage, measured against a baseline agreed before the build started.",
      "The third layer is data governance with teeth. Every organisation we studied that scaled AI past a pilot had a named owner for the quality of the ten to twenty data products that carry the majority of its decisions. Governance without an owner is documentation. Governance with an owner is an operating discipline.",
      "The fourth layer is the hardest: expectations. When AI absorbs the routine, the value of a manager shifts from throughput to judgement. Firms that say this out loud — in promotion criteria, in training hours, in what they stop measuring — move faster than firms that leave it implied.",
      "None of this requires a new organisation chart. It requires a decision to treat AI as an operating model change rather than an IT programme. That decision is still, in most boardrooms, unmade.",
    ],
    pullQuote:
      "AI programmes fail at the operating-model layer far more often than at the model layer.",
    stats: [
      { value: "3.2x", label: "earnings impact reported by firms that rewired decision rights alongside their AI stack" },
      { value: "68%", label: "of scaled AI use cases are funded outside the annual planning cycle" },
      { value: "10-20", label: "data products that carry most enterprise decisions" },
    ],
  },
  {
    slug: "from-pilots-to-p-and-l",
    title: "From pilots to P&L: why 70 per cent of AI use cases stall, and what unsticks them",
    category: "Report",
    themes: ["AI & technology", "Operations"],
    excerpt:
      "Pilot purgatory is rarely a modelling problem. It is a measurement, ownership, and integration problem — and all three are fixable inside a quarter.",
    date: "2026-09-30",
    readMinutes: 9,
    authors: ["Priya Raghavan"],
    img: "/img/insight-pilots.jpg",
    body: [
      "Ask a leadership team how many AI pilots it is running and the number is usually impressive. Ask how many are in production, with a named P&L owner and a measured baseline, and the number usually collapses to one or two.",
      "We audited 180 stalled use cases across banking, retail, manufacturing, and the public sector. Three failure modes account for four out of five stalls, and none of them is about model quality.",
      "The first is an unmeasured baseline. If nobody wrote down the cost per claim, the cycle time per order, or the conversion rate before the pilot started, the pilot cannot prove anything, and the sponsor who must fund scale-up has no number to defend. Fixing this costs a week and is the single highest-return intervention we have found.",
      "The second is orphan ownership. Pilots are typically owned by a centre of excellence that has enthusiasm but no operational authority. Scale-up requires a business owner who is measured on the outcome after go-live. Handing over means transferring the model, the monitoring, and the failure playbook — and accepting that the business owner may change the use case to fit reality.",
      "The third is integration debt. A model that works on a laptop often depends on data that arrives nightly, in a format nobody maintains, through a pipeline nobody owns. Productionising means building the boring middle: identity, access, logging, drift detection, and a rollback path. Teams that budget this as a first-class workstream finish. Teams that treat it as overhead do not.",
      "The practical test we give clients is blunt. For any use case, name the baseline, name the P&L owner, and name the system the output lands in. If any of the three is missing, the use case is a pilot, not a product — and it should be resourced accordingly.",
    ],
    pullQuote: "Name the baseline, the owner, and the destination system. Missing any one means it is still a pilot.",
    stats: [
      { value: "180", label: "stalled use cases audited across four sectors" },
      { value: "4 of 5", label: "stalls traced to baseline, ownership, or integration" },
      { value: "90 days", label: "typical time to production once all three are fixed" },
    ],
  },
  {
    slug: "the-agentic-enterprise",
    title: "The agentic enterprise: redesigning work around autonomous agents",
    category: "Article",
    themes: ["AI & technology", "Operations"],
    excerpt:
      "Agents do not slot into today's processes; they dissolve them. The design question is which parts of the process you want to keep — and why.",
    date: "2026-09-18",
    readMinutes: 12,
    authors: ["Marcus Feldman", "Yuki Tanaka"],
    img: "/img/insight-agents.jpg",
    body: [
      "The first generation of enterprise AI answered questions. The second generation executes tasks. That shift — from assistant to agent — is the point at which process design stops being an IT concern and becomes a management one.",
      "Most enterprise processes encode a compromise: a sequence of handoffs designed around human attention spans, working hours, and error rates. Agents have none of those constraints. When you give an agent the ability to plan, call tools, and act, you inherit the option to delete the handoffs rather than automate them.",
      "In practice we see three postures. Automators bolt agents onto existing steps and measure cycle-time savings. Redesigners re-derive the process from the outcome and keep only the human checkpoints that carry accountability. Reinventers go further and change the product itself — a claims process becomes a real-time settlement service; a maintenance schedule becomes a continuously re-optimised contract with the machine.",
      "Automators capture 10 to 20 per cent. Redesigners routinely capture 40 per cent or more. Reinventers occasionally create revenue lines that did not exist, but they also carry the highest change-management load, because reinvention invalidates job definitions rather than merely resizing them.",
      "Whichever posture you choose, four controls must exist before agents touch production: a bounded action space, an audit trail that reconstructs why an action was taken, a human escalation path with a service level, and a kill switch that a business owner — not an engineer — can pull.",
      "The organisations moving fastest are not the most permissive. They are the most precise about which decisions they are willing to delegate and which they never will.",
    ],
    pullQuote: "Automating a step saves a percentage. Deleting a handoff saves a role.",
    stats: [
      { value: "40%+", label: "process cost reduction typical for redesign, not automation" },
      { value: "4", label: "controls required before agents touch production" },
    ],
  },
  {
    slug: "data-foundations-that-pay",
    title: "Data foundations: the unglamorous work that makes AI pay",
    category: "Article",
    themes: ["AI & technology", "Data"],
    excerpt:
      "You do not need a perfect data estate. You need the twenty data products that carry your decisions to be trustworthy, owned, and fast.",
    date: "2026-09-04",
    readMinutes: 8,
    authors: ["Sofia Almeida"],
    img: "/img/insight-data.jpg",
    body: [
      "Data programmes have a reputation problem because they are usually scoped as estate-wide clean-ups. That framing guarantees a multi-year programme with a benefit that arrives after the current leadership team has moved on.",
      "The alternative is decision-led data. Start from the twenty or thirty decisions that carry the most value in the next four quarters — credit approval, assortment, crew rostering, claims triage, supplier risk — and treat the data each one needs as a product with an owner, a contract, a freshness guarantee, and a published quality score.",
      "This reframing changes the economics. Instead of a two-year platform build, you get a sequence of data products that each unlock measurable value within a quarter, and a platform that grows underneath them because it is being pulled rather than pushed.",
      "Three disciplines make it stick. First, publish quality scores where the decision makers can see them, because a data product with no visible score is a data product nobody trusts. Second, give every data product a single accountable owner with the authority to refuse requests that would degrade it. Third, retire data products aggressively; estates grow by accretion and shrink only by decision.",
      "The payoff is not elegance. It is speed: teams that have decision-led data products ship AI use cases roughly three times faster, because the first six weeks of every project stop being an archaeological dig.",
    ],
    pullQuote: "Twenty owned data products beat a pristine estate you will finish building in 2029.",
    stats: [
      { value: "3x", label: "faster use-case delivery with decision-led data products" },
      { value: "1 quarter", label: "time to first measurable value from this approach" },
    ],
  },
  {
    slug: "ai-governance-that-accelerates",
    title: "AI in the boardroom: governance that accelerates rather than blocks",
    category: "Article",
    themes: ["Risk & governance", "AI & technology"],
    excerpt:
      "Boards that understand AI well enough to set boundaries move faster than boards that outsource the question to a committee.",
    date: "2026-08-21",
    readMinutes: 7,
    authors: ["Hannah Berger"],
    img: "/img/insight-governance.jpg",
    body: [
      "Governance is usually framed as the price of using AI. We would frame it the other way round: clarity is what makes speed possible, because it removes the need to re-litigate the same question for every use case.",
      "Boards we work with that deploy AI confidently tend to have settled five questions once, at the top, and encoded the answers: which decisions may never be delegated to a model; what evidence is required before a model influences a customer outcome; who signs when a model causes harm; how model risk is reported alongside financial and operational risk; and how the board itself stays literate as the technology changes under it.",
      "Answering those five questions takes a board perhaps three sessions. The return is that the organisation stops treating every use case as a novel ethical question and starts treating most of them as engineering.",
      "The failure mode is delegation without authority. An ethics committee that can only advise becomes a bottleneck that everyone routes around, and the routing around is invisible until something goes wrong. Give the committee a decision right — the power to halt a deployment — and it becomes both faster and safer, because it no longer needs to be consulted on everything to be effective.",
      "The board's real job is not to understand transformer architectures. It is to know which of its decisions are now partly made by software, and to be comfortable with the answer.",
    ],
    pullQuote: "A committee that can only advise is a committee everyone eventually routes around.",
  },
  {
    slug: "talent-in-the-age-of-ai",
    title: "Talent in the age of AI: reskilling at scale without the theatre",
    category: "Report",
    themes: ["People & organisation", "AI & technology"],
    excerpt:
      "Training hours are a vanity metric. What changes behaviour is redesigning the work first and then teaching into the new shape.",
    date: "2026-08-07",
    readMinutes: 10,
    authors: ["Daniel Mbeki"],
    img: "/img/insight-talent.jpg",
    body: [
      "Reskilling programmes fail predictably when they run in parallel with unchanged work. People attend, they enjoy the course, they return to the same queue with the same targets, and within a month the new skill has no place to land.",
      "The sequence that works is the reverse of the intuitive one. Redesign the process with AI in it, define the new roles and the decisions those roles own, and only then build the learning path — targeted at the delta between what people do today and what the redesigned role requires.",
      "Three design choices matter more than curriculum quality. First, teach in the workflow: short interventions attached to real tasks outperform day-long workshops. Second, make the new behaviour observable — if managers cannot see the new behaviour, they will manage the old one. Third, protect the transition: people moving into AI-augmented roles need a period where their old throughput targets are formally relaxed, or they will quietly revert.",
      "There is also a harder truth about composition. Most organisations will need fewer people in roles defined by routine processing and more in roles defined by judgement, verification, and exception handling. Being honest about that in workforce planning is uncomfortable and necessary; discovering it through attrition is worse.",
      "The organisations that do this well treat reskilling as an operating change with a training component, not a training programme with an operating excuse.",
    ],
    pullQuote: "If the work does not change shape, the training does not change behaviour.",
    stats: [
      { value: "1 month", label: "typical half-life of a skill learned in a programme that leaves the work unchanged" },
      { value: "3", label: "design choices that matter more than curriculum quality" },
    ],
  },
  {
    slug: "autonomous-supply-chains",
    title: "Reinventing the supply chain with autonomous planning",
    category: "Case study",
    themes: ["Operations", "AI & technology"],
    excerpt:
      "A European industrial group replaced monthly planning cycles with continuous, agent-assisted replanning — and cut expedited freight by a third.",
    date: "2026-07-24",
    readMinutes: 8,
    authors: ["Priya Raghavan", "Jonas Lindqvist"],
    img: "/img/insight-supply.jpg",
    body: [
      "The client — a €9 billion industrial group with 14 plants and 4,000 SKUs — ran planning the way most manufacturers do: a monthly cycle, a weekly exception meeting, and a monthly scramble when demand moved faster than the plan.",
      "The diagnosis was not that forecasts were bad. It was that the plan was a snapshot in a world that had become a stream. By the time the monthly plan was approved, the assumptions underneath it had moved.",
      "Over seven months we rebuilt planning as a continuous loop: a demand signal refreshed daily, a constraint model that understood plant changeover economics, and an agent layer that proposed replans whenever the cost of the current plan exceeded the cost of changing it. Planners moved from producing the plan to approving, amending, and owning the exceptions.",
      "The results after four quarters: expedited freight down 31 per cent, inventory down 12 per cent without service loss, and planner time on plan production down by roughly two-thirds — most of which was reinvested in supplier collaboration.",
      "Two things made the difference. The change was scoped as a planning redesign, not an AI deployment, so the operating cadence changed with the tool. And the team kept a human approval gate on any replan above a defined cost threshold for the first two quarters, which bought the credibility needed to widen the autonomy later.",
    ],
    stats: [
      { value: "-31%", label: "expedited freight cost" },
      { value: "-12%", label: "inventory, with no service-level loss" },
      { value: "7 months", label: "from design to full production" },
    ],
  },
  {
    slug: "the-grid-as-a-platform",
    title: "Energy transition meets AI: the grid as a platform",
    category: "Article",
    themes: ["Energy & materials", "AI & technology"],
    excerpt:
      "Electrification, intermittent generation, and AI-driven demand are converging on an asset built for a different century. The bottleneck is not generation capacity — it is decision speed.",
    date: "2026-07-10",
    readMinutes: 9,
    authors: ["Sofia Almeida", "Marcus Feldman"],
    img: "/img/insight-energy.jpg",
    body: [
      "Grid operators are being asked to absorb a structural change in a system designed for predictability: variable generation, electrified heat and transport, and now data centres whose demand can move in minutes.",
      "The engineering answer — more copper, more storage, more interconnection — is necessary but slow. The faster lever is decision speed: forecasting, congestion management, flexibility markets, and outage response all improve materially when models replace static rules.",
      "We see three tiers of value. Operational: better forecasts and dynamic ratings that release existing capacity. Commercial: flexibility markets that pay customers to shift, coordinated by agents rather than spreadsheets. Strategic: capital allocation that treats the network as a platform with published interfaces, so third parties can build on it.",
      "The blocker is rarely technology. It is that data about the network is spread across asset registers, SCADA, market systems, and field notes, and nobody owns the composite. The operators making progress appoint a single owner for network data products, and treat data quality as an operational KPI with the same standing as safety.",
      "Done well, this is not only a cost story. It is the difference between a grid that constrains the transition and one that quietly enables it.",
    ],
    pullQuote: "The network's constraint is not copper. It is decision latency.",
  },
  {
    slug: "healthcares-ai-dividend",
    title: "Healthcare's AI dividend: from diagnostics to operations",
    category: "Report",
    themes: ["Healthcare", "AI & technology"],
    excerpt:
      "The clinical wins get the headlines. The durable value is accumulating in scheduling, coding, supply, and patient flow — the operational plumbing of care.",
    date: "2026-06-26",
    readMinutes: 10,
    authors: ["Hannah Berger", "Daniel Mbeki"],
    img: "/img/insight-health.jpg",
    body: [
      "Clinical AI attracts attention because the stakes are legible. But in the provider systems we work with, the largest verified financial impact is coming from operational use cases: theatre scheduling, discharge prediction, clinical coding, and supply chain.",
      "The pattern is consistent. A model that predicts discharge date within a day improves bed flow, which reduces cancelled elective procedures, which improves both margin and access. The chain is unglamorous and the benefit is real.",
      "What separates the systems that capture this from those that do not is data plumbing across departmental boundaries. Most hospitals have excellent data inside a department and poor data between departments. The operational use cases are precisely the ones that need the boundary crossings.",
      "We advise a deliberate sequence: pick two boundary-crossing decisions, build the data products they need, and run them with a clinical owner and an operational owner jointly accountable. Do not attempt an enterprise-wide data platform first; it will consume the budget and produce a report.",
      "The governance question is also sharper here than in most sectors. Patients are entitled to know when a model influences their care, and clinicians are entitled to a workflow in which disagreeing with the model is easy. Both are design requirements, not afterthoughts.",
    ],
    stats: [
      { value: "1 day", label: "discharge-prediction accuracy that materially improves bed flow" },
      { value: "2", label: "boundary-crossing decisions to start with" },
    ],
  },
  {
    slug: "financial-services-after-ai",
    title: "Financial services after AI: the new economics of trust",
    category: "Article",
    themes: ["Financial services", "Risk & governance"],
    excerpt:
      "When underwriting, advice, and monitoring are partly automated, the differentiator stops being the model and becomes the evidence trail around it.",
    date: "2026-06-12",
    readMinutes: 11,
    authors: ["Jonas Lindqvist", "Dr. Amara Okafor"],
    img: "/img/insight-finserv.jpg",
    body: [
      "Banks have used statistical models for decades, so the AI question in financial services is not whether to model, but what changes when the models become general, generative, and agentic.",
      "Three things change. Models move from narrow scoring to open-ended interpretation, which makes their failure modes less predictable. They begin to act, not just advise, which shifts risk from advice to execution. And they generate their own evidence, which means the audit trail is itself a system that must be designed.",
      "The institutions we see pulling ahead have invested in that third point first. They can reconstruct, for any customer outcome, which inputs were used, which model version produced which recommendation, which human reviewed it, and what policy applied. That capability is unglamorous and it is what regulators, boards, and internal audit actually ask for.",
      "Commercially, the winners are using AI to compress the cost of judgement rather than the cost of paperwork. Underwriting that prices thin-file customers accurately, monitoring that reduces false positives so analysts spend time on real risk, and advice that reaches segments the economics previously excluded.",
      "Trust, in this environment, is an engineering output. Institutions that treat it that way are finding that it compounds: faster approvals, lower loss rates, and a supervisory relationship that is easier to manage.",
    ],
    pullQuote: "In an automated institution, the audit trail is a product, not a by-product.",
  },
  {
    slug: "retails-personalisation-paradox",
    title: "Retail's next chapter: hyper-personalisation without the creep factor",
    category: "Article",
    themes: ["Retail & consumer", "AI & technology"],
    excerpt:
      "Personalisation works when customers can see the trade. The retailers winning with AI are the ones that made the exchange explicit.",
    date: "2026-05-29",
    readMinutes: 7,
    authors: ["Sofia Almeida"],
    img: "/img/insight-retail.jpg",
    body: [
      "Personalisation has an uncomfortable asymmetry: the retailer captures the benefit immediately, while the customer experiences the cost — in surveillance, in price opacity, in the nagging sense that the shop knows too much.",
      "The retailers growing share with AI have closed that loop by making the trade visible. Explicit preference controls that genuinely change what is shown. Loyalty value that is legible in currency, not points. Clear statements of what data is used for, and a real option to withhold it without losing service quality.",
      "Underneath, the operating change is assortment and supply. Personalisation at the shelf is only as good as the ability to have the right item in the right place; models that shape demand without touching availability simply move disappointment around.",
      "The measurement discipline matters too. Most retail AI programmes report uplift against a holdout that was never truly randomised, which inflates the number and destroys trust when the finance team audits it. Running clean experiments is slower and it is the only way the benefit survives scrutiny.",
      "Personalisation is not a technology problem any more. It is a permission problem, and permission is earned in the interface.",
    ],
  },
  {
    slug: "the-factory-floor-as-a-learning-system",
    title: "Industrial AI: the factory floor as a learning system",
    category: "Case study",
    themes: ["Advanced industries", "Operations"],
    excerpt:
      "A specialty chemicals producer lifted first-pass yield by 4.6 points by treating every batch as a training example — with operators in the loop, not out of it.",
    date: "2026-05-15",
    readMinutes: 8,
    authors: ["Marcus Feldman"],
    img: "/img/insight-industrial.jpg",
    body: [
      "The plant had 30 years of batch records, a modern DCS, and a persistent yield gap between its best and average operators. The knowledge existed; it was not transferable.",
      "The approach was not to replace operator judgement with a model. It was to make the plant legible: instrument the variables that mattered, model the relationship between trajectory and yield, and give operators a live view of where the current batch sat relative to the best historical trajectories.",
      "Operators used the view to intervene earlier. Within two quarters, first-pass yield improved 4.6 points and batch-to-batch variance narrowed by a third. The model did not make the decisions; it made the consequences of decisions visible while there was still time to change them.",
      "The critical design decision was ownership. The tool was built with the shift teams, launched as a recommendation rather than an instruction, and tuned weekly against their feedback. Attempts elsewhere in the group to launch the same capability as a centrally mandated optimiser stalled within months.",
      "Industrial AI succeeds when it augments the judgement of the people closest to the process, and fails when it tries to relocate that judgement to a dashboard nobody trusts.",
    ],
    stats: [
      { value: "+4.6 pts", label: "first-pass yield" },
      { value: "-33%", label: "batch-to-batch variance" },
      { value: "2 quarters", label: "to full shift-team adoption" },
    ],
  },
];

export const insightBySlug = (slug: string) => insights.find((i) => i.slug === slug);
export const themes = Array.from(new Set(insights.flatMap((i) => i.themes))).sort();
export const allAuthors = Array.from(new Set(insights.flatMap((i) => i.authors))).sort();
