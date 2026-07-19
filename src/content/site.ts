import { publicEnv } from "@/lib/env";

export const brand = {
  company: "BridgePoint AI",
  legal: "BridgePoint AI LLC",
  product: "BridgePoint DealerAI",
  shortProduct: "DealerAI",
  tagline: "FORWARD AI",
  email: publicEnv.companyEmail,
  siteUrl: publicEnv.siteUrl,
};

export const nav = [
  { label: "AI Employees", href: "/ai-employees" },
  { label: "For Sales", href: "/for-sales" },
  { label: "For Service", href: "/for-service" },
  { label: "Pricing", href: "/pricing" },
  { label: "Guarantee", href: "/guarantee" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
] as const;

export const ctas = {
  bookDemo: "Book a Demo",
  callAi: "Call Our AI Right Now",
  interview: "Interview Your Next Hire",
  talkSales: "Talk to Sales",
  roiPdf: "Get the ROI Breakdown",
  startPilot: "Start the pilot conversation",
  bookMyDemo: "Book My Demo",
  seeEmployees: "See all AI Employees",
  seePricing: "See pricing",
  guarantee: "90-day money-back guarantee",
} as const;

/** Primary trust signal: The Board Doesn't Lie Guarantee */
export const riskReversal = {
  name: "The Board Doesn't Lie Guarantee",
  headline: "The Board Doesn't Lie Guarantee",
  body: "90 days. Full refund if we do not beat your own baseline. Measured inside your CRM, not ours.",
  short:
    "90 days. If DealerAI does not set more appointments than your 90-day baseline before go-live, measured inside your own CRM, we refund every dollar you paid us.",
  ctaLabel: "See the guarantee",
  href: "/guarantee",
};

export const agents = [
  {
    id: "instant-lead-responder",
    name: "Instant Lead Responder",
    job: "Contacts every new lead in seconds by call, text, and email.",
    metric: "Speed-to-lead and first-contact rate",
    longJob: "First touch in seconds on every digital lead.",
    body: "Web leads die in queues. This agent calls, texts, and emails immediately, qualifies intent, and books the appointment or schedules the callback your process requires.",
    proof: "Same ad spend. Higher contact. More shows.",
    snippet: [
      'AI: "Hi Alex, this is Jordan from Riverside Motors. You just asked about the 2023 F-150. Still looking for something with under 40k miles?"',
      'Lead: "Yeah, is it still available?"',
      'AI: "It is. I can hold a 15-minute walk-around today at 5:30 or tomorrow at 10. Which works?"',
    ],
  },
  {
    id: "sales-bdc",
    name: "Sales BDC Agent",
    job: "Qualifies, books, confirms, and rebooks sales appointments around the clock.",
    metric: "Appointments set and show rate",
    longJob: "Outbound and inbound appointment setting without shift gaps.",
    body: "Confirmation, no-show rescue, and aged-lead passes run on a schedule you approve. Your closers walk into set appointments, not cold phone lists.",
    proof: "More shows. Same ad budget.",
    snippet: [
      'AI: "Quick confirm for your 4:00 with Mike on the Certified RAV4. Still good, or should I slide you to 5:30?"',
      'Buyer: "5:30 is better."',
      'AI: "Done. You are confirmed for 5:30. I will text the service drive pin and Mike\'s direct line."',
    ],
  },
  {
    id: "service",
    name: "Service and Customer Service Agent",
    job: "Answers service calls, books ROs, and handles status questions without burning advisors.",
    metric: "RO count and advisor phone time recovered",
    longJob: "Book ROs and clear the phone tree for advisors.",
    body: "Oil changes, tire work, status questions, and simple scheduling get handled. Complex diagnostics escalate cleanly.",
    proof: "Advisors sell work. AI books the lane.",
    snippet: [
      'Caller: "Can I get an oil change Saturday morning?"',
      'AI: "Yes. I have 8:15 or 9:40. Loaner or wait?"',
      'Caller: "Wait, 8:15."',
      'AI: "Booked. Texting your check-in link now."',
    ],
  },
  {
    id: "recall-reactivation",
    name: "Recall and Reactivation Agent",
    job: "Works recall lists, no-shows, and aged service and sales databases.",
    metric: "Recovered ROs and aged-lead appointments",
    longJob: "Turn lists into scheduled work.",
    body: "Open recalls, lapsed service customers, and dead sales leads get a disciplined outreach cadence instead of a one-time blast.",
    proof: "Database revenue without another blast campaign.",
    snippet: [
      'AI: "Hi Dana, this is the service team at Lakeside Toyota. Your 2019 Camry has an open airbag recall with no charge to you. I can get you in Tuesday at 7:30 or Wednesday at 11."',
    ],
  },
  {
    id: "enrichment",
    name: "Enrichment Agent",
    job: "Cleans, scores, and prioritizes leads so humans work the highest-gross opportunities first.",
    metric: "BDC efficiency and close rate on worked leads",
    longJob: "Prioritize who is worth a human hour.",
    body: "Scores and cleans inbound so Sales BDC and people work A and B opportunities first.",
    proof: "Human hours on A leads only.",
    snippet: [
      '"Lead scored A. In-market SUV, trade equity likely positive, last visit 11 months ago. Route to Sales BDC now."',
    ],
  },
  {
    id: "missed-call-rescue",
    name: "Missed Call Rescue",
    job: "Calls and texts every missed inbound within seconds so the conversation never dies.",
    metric: "Recovered conversations and after-hours appointments",
    longJob: "Every missed ring becomes a conversation.",
    body: "When the floor is slammed or the store is closed, the agent calls and texts back in seconds with context and a booking path.",
    proof: "After-hours demand stops walking to the store down the road.",
    snippet: [
      'AI: "Hey Sam, looks like we just missed your call at Riverside Chevy. Still need parts hours or were you calling about a vehicle?"',
    ],
  },
] as const;

export const home = {
  seo: {
    title: "BridgePoint DealerAI | AI Employees for Car Dealerships",
    description:
      "Answer every lead and call 24/7. Book more appointments without more BDC headcount. Live demo you can call today. Live in 7 days.",
  },
  hero: {
    eyebrow: "AI Employees for Dealerships",
    headline:
      "Your dealership answers every call, works every lead, and books appointments 24/7.",
    subhead:
      "Without adding headcount. Missed calls, slow lead response, and dead aged leads are costing you units and gross every month. DealerAI plugs that leak.",
    trust: "Live in 14 days. Done-for-you install. 90-day money-back guarantee.",
  },
  problem: {
    label: "The leak",
    headline: "Your ads work. Your follow-up does not.",
    closer:
      "Every minute your BDC is full, offline, or after hours, another store is talking to your buyer.",
    stats: [
      {
        number: "62%",
        label: "of inbound sales calls go unanswered at many dealerships",
        note: "Industry estimate",
      },
      {
        number: "5 min",
        label:
          "speed-to-lead is the difference between a booked appointment and a competitor",
        note: "Industry estimate",
      },
      {
        number: "78%",
        label: "of buyers purchase from the first dealer that responds",
        note: "Industry estimate",
      },
    ],
  },
  employees: {
    label: "The team",
    headline: "Meet your AI employees",
    subhead: "Six agents. One board. Paid for by recovered appointments, not headcount.",
  },
  liveDemo: {
    label: "Live interview",
    headline: "Interview your next hire",
    subhead:
      "This is not a video. This is our AI on a live line. Ask it about inventory, book a fake appointment, pressure-test the handoff. Judge the hire the way you would any BDC candidate.",
    helper: "No pitch deck required. No form wall. Talk first.",
    micro:
      "Demo agent is scripted for product Q&A and appointment booking. Not a live rooftop. Production agents use your inventory, hours, and CRM.",
  },
  howItWorks: {
    label: "Install",
    headline: "Live in 7 days. We do the work.",
    closer:
      "Done-for-you install. Your team shows up to appointments. We keep the agents sharp.",
    steps: [
      {
        title: "Connect",
        body: "Your numbers, inventory feed, hours, and CRM or ADF path. Keep your existing phone numbers via SIP trunking.",
      },
      {
        title: "Pick your AI employees",
        body: "Start with Instant Lead Responder and Missed Call Rescue, or roll out Sales and Service together.",
      },
      {
        title: "Watch the board fill",
        body: "Appointments, response times, and attributed gross land on one dashboard your GM can open Monday morning.",
      },
    ],
  },
  roi: {
    label: "The math",
    headline: "What is slow follow-up costing this month?",
    subhead: "Conservative model. Change the inputs to match your rooftop.",
    methodology:
      "This calculator is an estimate for planning, not a guarantee. It holds close rate flat and only models lift from higher contact and show rates. Your pilot dashboard reports actuals.",
    defaults: {
      monthlyLeads: 400,
      contactRate: 45,
      showRate: 40,
      avgGross: 3200,
      targetContactRate: 85,
      showRateLiftPts: 8,
      closeRate: 25,
    },
  },
  dashboard: {
    label: "Proof board",
    headline: "One screen your GM will actually open",
    subhead:
      "Appointments set, shown, sold. Median response time. Source. Attributed gross. Built for the morning meeting, not a vanity dashboard.",
    caption:
      "Product UI mockup. Replaced with live tenant screenshots after first pilot rooftops.",
  },
  comparison: {
    label: "Alternatives",
    headline: "Hire people, bolt on a chatbot, or deploy AI employees",
    foot: "Chat widgets answer FAQs. DealerAI books the appointment and puts a number on the board.",
    columns: ["DealerAI", "Generic AI chat tools", "More BDC headcount"],
    rows: [
      {
        feature: "Speed to lead",
        values: [
          "Seconds, 24/7",
          "Often form-only or business hours",
          "Variable; breaks at peaks and nights",
        ],
      },
      {
        feature: "24/7 coverage",
        values: ["Yes, voice + text + chat", "Partial", "Overtime or third shift cost"],
      },
      {
        feature: "Cost per month",
        values: [
          "Per-rooftop subscription",
          "Low software, low outcome",
          "Salary + burden + turnover",
        ],
      },
      {
        feature: "Ramp time",
        values: ["Live in 7 days", "Fast install, weak automotive fit", "Weeks to months"],
      },
      {
        feature: "Turnover risk",
        values: ["None", "None", "High in BDC roles"],
      },
      {
        feature: "ROI attribution",
        values: [
          "Appointment and gross board",
          "Rarely tied to units",
          "Manual and incomplete",
        ],
      },
      {
        feature: "Compliance",
        values: [
          "TCPA / DNC controls built in",
          "Often DIY",
          "Process-dependent",
        ],
      },
    ],
  },
  faq: [
    {
      q: "Will it hallucinate prices or promises?",
      a: "Production agents run on approved scripts, inventory rules, and handoff policies. Unknowns go to a human. We optimize for booked appointments, not creative answers.",
    },
    {
      q: "How does human handoff work?",
      a: "Hot buyers, exceptions, and manager requests route to your team by call, text, or CRM task with full transcript context.",
    },
    {
      q: "Does it work with our CRM and DMS?",
      a: "Lead and appointment data flows through standard automotive paths including ADF. We map to your process in install week.",
    },
    {
      q: "Can we keep our existing numbers?",
      a: "Yes. SIP trunking keeps your published numbers. The AI answers and recovers misses without a number swap on your website.",
    },
    {
      q: "Are you TCPA and DNC aware?",
      a: "Consent, quiet hours, and suppression rules are part of the operating design. See our TCPA and compliance page for the full statement.",
    },
    {
      q: "What languages are supported?",
      a: "English at launch. Additional languages by rooftop configuration. Ask on the demo if you need a specific language mix.",
    },
    {
      q: "What happens after hours and on Sundays?",
      a: "The agents keep working. Appointments land on the next open slots your store defines.",
    },
    {
      q: "What are the contract terms?",
      a: "Integration is $4,997 per rooftop one time, credited in full against month one. Monthly is $2,997 per rooftop. Annual saves two months. Multi-rooftop groups get custom terms. Covered by The Board Doesn't Lie Guarantee for 90 days.",
    },
  ],
  finalCta: {
    headline: "Put an AI employee on the floor this month",
    subhead:
      "Book a 20-minute demo with our team, or call the AI right now and interview the product yourself.",
  },
  pricingTeaser: {
    label: "Simple pricing",
    headline: "One integration. One monthly. Full team.",
    integration: "$4,997 one time, per rooftop",
    monthly: "$2,997 per rooftop / month",
    note: "Integration credited in full against month one. Covered by our 90-day money-back guarantee.",
  },
};

export const pages = {
  aiEmployees: {
    seo: {
      title: "AI Employees for Dealerships | BridgePoint DealerAI",
      description:
        "Six AI employees for sales and fixed ops: instant lead response, BDC, service booking, recall reactivation, enrichment, and missed call rescue.",
    },
    eyebrow: "Product",
    headline: "A full BDC and service desk that never clocks out",
    subhead:
      "Each agent has one job and one metric. Together they cover the leak from first click to RO write-up.",
    bottomHeadline: "Hire one agent or the full team",
  },
  forSales: {
    seo: {
      title: "AI Sales BDC for Dealerships | BridgePoint DealerAI",
      description:
        "Instant lead response, appointment setting, and missed call rescue for automotive sales teams. More shows from the same ad spend.",
    },
    eyebrow: "Sales",
    headline: "More appointments from the leads you already bought",
    subhead:
      "Speed-to-lead and after-hours coverage decide who gets the show. DealerAI works every lead and every missed call so your closers stay on the desk.",
    painHeadline: "Your BDC cannot be everywhere",
    pains: [
      "After-hours web leads sit until morning",
      "Lunch rush and floor traffic create miss windows",
      "Aged leads get a half-hearted pass once a quarter",
      "Managers cannot prove which outreach produced gross",
    ],
    outcomeHeadline: "Same budget. Tighter funnel.",
    outcomeBody:
      "We measure set, shown, sold, and attributed gross. If the board does not move, the pilot terms protect you.",
  },
  forService: {
    seo: {
      title: "AI Service Booking for Dealerships | BridgePoint DealerAI",
      description:
        "Book more ROs, clear advisor phones, and work recalls and reactivation lists with AI employees built for fixed ops.",
    },
    eyebrow: "Fixed ops",
    headline: "More ROs without more hold time",
    subhead:
      "Customers who cannot book leave. Advisors who live on the phone stop selling work. DealerAI takes the scheduling load and reactivates the database.",
    painHeadline: "Fixed ops revenue hides in the phone queue",
    pains: [
      "High call volume, slow answer",
      "Recall lists that never get a second pass",
      "No-shows without automated rescue",
      "Service leads from the website treated like afterthoughts",
    ],
    outcomeHeadline: "Advisors sell work. AI books the lane.",
    outcomeBody:
      "Track RO count, book rate, and recovered revenue from reactivation. Built for the fixed ops director, not a generic chatbot report.",
  },
  pricing: {
    seo: {
      title: "Pricing | BridgePoint DealerAI",
      description:
        "DealerAI Full Integration $4,997 one time per rooftop. Monthly $2,997 per rooftop for all six AI employees. 90-day money-back guarantee.",
    },
    eyebrow: "Pricing",
    headline: "One integration. One monthly. Full team on the board.",
    subhead:
      "Flat pricing per rooftop. Integration credited against month one. Covered by The Board Doesn't Lie Guarantee.",
    multiHeadline: "Multi-rooftop or dealer group?",
    multiBody:
      "Central playbooks, shared reporting, and rollout sequencing across stores. Pricing depends on rooftop count and agent mix.",
    faq: [
      {
        q: "Is there a setup fee?",
        a: "Yes. Integration is $4,997 per rooftop, one time, and it covers everything through go-live. That fee is credited in full against your first month of subscription, so if you stay past the guarantee window, integration effectively cost you nothing.",
      },
      {
        q: "What is the money back guarantee?",
        a: "90 days. If DealerAI does not set more appointments than your 90-day baseline before go-live, measured inside your own CRM, we refund every dollar you paid us. Full detail on the Guarantee page.",
      },
      {
        q: "Do you offer annual billing?",
        a: "Yes. Annual saves two months. Talk to sales during your demo.",
      },
      {
        q: "What about dealer groups running multiple rooftops?",
        a: "Custom pricing based on rooftop count. We handle central playbooks, shared reporting, and rollout sequencing across stores.",
      },
    ],
  },
  guarantee: {
    seo: {
      title: "The Board Doesn't Lie Guarantee | BridgePoint DealerAI",
      description:
        "90 days. Full refund if DealerAI does not set more appointments than your own CRM baseline before go-live.",
    },
    eyebrow: "Our Promise",
    headline: "The Board Doesn't Lie Guarantee",
    subhead: "90 days. Full refund if we do not beat your own baseline.",
    promise: [
      "Run DealerAI for 90 days. If the AI does not set more appointments than your own 90-day baseline before go-live, measured inside your CRM and not ours, we refund every dollar you paid us. The $4,997 integration fee. Every monthly payment. All of it.",
      "No partial refunds. No store credit. No exit interview required. You email us, we wire it back within 5 business days, and we unwind the integration at our expense.",
      "And you keep the assets. Every call recording, every transcript, and the rebuilt lead follow-up playbook we built for your store stay with you. If we lose, you still walk away with more than you started with.",
    ],
    whyHeader: "Why we can offer this",
    whyBody:
      "Most dealers respond to internet leads in hours. DealerAI responds in seconds, around the clock, on every channel. If we cannot beat a follow-up process that misses your after-hours leads entirely, we do not deserve your money.",
    termsHeader: "Four terms that keep this fair for both sides",
    terms: [
      {
        title: "Baseline comes from your CRM.",
        body: "The 90 days before go-live, pulled during integration and locked in writing. Objective and verifiable.",
      },
      {
        title: "Minimum volume threshold.",
        body: "Your rooftop needs at least 100 internet leads or inbound sales calls per month for the comparison to be meaningful. Below that, we will tell you before you sign.",
      },
      {
        title: "Agents stay live the full 90 days.",
        body: "Lead routing and phone forwarding stay connected. If the AI gets unplugged mid-pilot, the clock pauses until it is back on.",
      },
      {
        title: "Claim window.",
        body: "You have 30 days after day 90 to request the refund. Clean end date.",
      },
    ],
    ctaHeadline: "Ready to put us on the board?",
  },
  results: {
    seo: {
      title: "Results | BridgePoint DealerAI",
      description:
        "How DealerAI measures appointments, shows, sold units, and attributed gross. Illustrative models until pilot rooftops publish live numbers.",
    },
    eyebrow: "Results",
    headline: "The board is the proof",
    subhead:
      "We do not sell vibes. We report appointments set, shown, sold, response time, and attributed gross. Early models below are illustrative until pilot rooftops publish live numbers.",
    honesty:
      "Figures on this page are planning models and placeholders, not case studies from live DealerAI rooftops. They will be replaced the moment the first pilot produces reportable results. Do not treat them as guarantees.",
    ctaHeadline: "Be the first named result on this page",
  },
  about: {
    seo: {
      title: "About BridgePoint AI | DealerAI",
      description:
        "BridgePoint AI builds AI-powered sales infrastructure for operators. DealerAI brings AI employees to automotive retail.",
    },
    eyebrow: "BridgePoint AI",
    headline: "AI infrastructure for operators who count money, not demos",
    subhead:
      "BridgePoint AI builds AI-powered sales systems for local and multi-location operators. DealerAI is our automotive platform: AI employees that answer, book, and recover revenue across sales and fixed ops.",
    mission:
      "We bridge the gap between dealership operators and enterprise-grade AI, without enterprise bloat. Clear outcomes. Fast install. Numbers on a board.",
    values: [
      {
        title: "Forward motion",
        body: "Every release moves rooftops toward more appointments and more ROs.",
      },
      {
        title: "Clarity over complexity",
        body: "Plain language. No jargon theater.",
      },
      {
        title: "Built for builders",
        body: "GMs and directors, not technologists.",
      },
      {
        title: "Trust at the bridge",
        body: "We sit between your store and your buyers. Reliability is non-negotiable.",
      },
    ],
    why:
      "Automotive already buys leads. The failure is follow-up, coverage, and attribution. DealerAI attacks those three with voice-first AI employees and a dashboard a GM will use.",
  },
  demo: {
    seo: {
      title: "Book a Demo | BridgePoint DealerAI",
      description:
        "Book a 20-minute DealerAI demo. Or call our AI right now. Most forms take under 30 seconds.",
    },
    eyebrow: "Demo",
    headline: "Book a demo. Or interview the AI first.",
    subhead:
      "Under 30 seconds to submit. Our AI will text you within 60 seconds to confirm a time. That is the product, not a gimmick.",
    successHeadline: "You are in.",
    successBody:
      "Our AI will text you in the next 60 seconds to confirm a time. If you want to skip the wait, call the demo line and interview the product now.",
    privacy:
      "By submitting, you agree we may contact you about DealerAI by call, text, or email. Msg/data rates may apply. Reply STOP to opt out of texts. See Privacy and TCPA pages.",
  },
};

export const pricingOffer = {
  integration: {
    id: "integration",
    headline: "DealerAI Full Integration",
    priceSubtext: "one time, per rooftop",
    subhead: "Everything it takes to go live in 14 days",
    callout: "Credited in full against month one.",
    bullets: [
      "CRM and DMS connection (VinSolutions, Elead, DealerSocket, CDK, Reynolds)",
      "Phone routing and missed call capture wired into your existing numbers",
      "All agents trained on your inventory feed, service menu, and store scripts",
      "TCPA and consent compliance configured before the first outbound touch",
      "Baseline report pulled from your CRM covering the last 90 days of appointments set, shown, and sold",
    ],
  },
  monthly: {
    id: "monthly",
    headline: "DealerAI Monthly",
    priceSubtext: "per rooftop / month",
    subhead: "All six AI employees, working every lead and every call",
    bullets: [
      "Instant Lead Responder",
      "Sales BDC Agent",
      "Service Agent",
      "Missed Call Rescue",
      "Recall and Reactivation",
      "Enrichment Agent",
      "Outbound campaigns",
      "Full-funnel attribution reporting",
    ],
  },
  multiHeadline: "Multi-rooftop or dealer group?",
  multiBody:
    "Central playbooks, shared reporting, and rollout sequencing across stores. Pricing depends on rooftop count and agent mix.",
} as const;

export const roles = [
  "Dealer Principal",
  "GM",
  "GSM",
  "BDC Director",
  "Fixed Ops Director",
  "Other",
] as const;
