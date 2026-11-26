// ALL CONTENT LIVES HERE. Filled from Ansar's Upwork profile.
// Things still to confirm are marked TODO.

export const profile = {
  name: "Ansar S.",
  short: "Ansar",
  initials: "AS",
  role: "GoHighLevel (GHL) Expert",
  intro:
    "GoHighLevel and HubSpot systems that capture every lead, follow up by email and SMS, book the call and move the deal forward, without anyone doing it by hand.",
  availability: "Open for work",
  location: "Rawalpindi, Pakistan",
  timeZone: "Asia/Karachi",
  rate: "$15/hr",
  hours: "30+ hrs/week · open to contract-to-hire",
  response: "Replies in 4–8 hours",
  languages: "English (native or bilingual)",
  consult: { label: "Book a consultation", note: "$10 per 30-min video meeting" },
  email: "hello@example.com", // TODO: Ansar's real email (or remove the email lines)
  // Transparent-background cut-out saved at public/ansar.webp.
  photo: "/ansar.webp" as string | null,
  hire: "https://www.upwork.com/freelancers/ansars9", // Ansar's Upwork profile (used by every Hire / Book button)
  video: "https://youtu.be/dWjuRLEQOlI",
  agency: {
    name: "Red Star Technologies",
    href: "https://redstartechs.com/",
    note: "Trusted by 150+ startups with 350+ successful launches",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 5, suffix: "+", label: "Years in GoHighLevel & CRM" },
  { value: 261, suffix: "", label: "Hours worked on Upwork" },
  { value: 3, prefix: "$", suffix: "K+", label: "Earned on Upwork" },
  { value: 30, suffix: "+", label: "Hours per week available" },
];

// The four columns under the hero.
export const features = [
  { title: "GoHighLevel CRM", text: "Pipelines, calendars, funnels and snapshots built around your sales process." },
  { title: "HubSpot workflows", text: "Deal pipelines, lead rotation and automated follow-up." },
  { title: "AI chatbots", text: "Bots that answer questions, qualify leads and book appointments." },
  { title: "Integrations", text: "Zapier, Make, n8n and APIs that connect the tools you already use." },
];

// Monograms instead of brand logos.
export const tools = [
  { mark: "Gh", name: "GoHighLevel" },
  { mark: "Hs", name: "HubSpot" },
  { mark: "Zp", name: "Zapier" },
  { mark: "Mk", name: "Make" },
  { mark: "n8", name: "n8n" },
  { mark: "Ai", name: "OpenAI" },
  { mark: "Tw", name: "Twilio" },
  { mark: "St", name: "Stripe" },
];

export const about = {
  lead: "I'm Ansar, a GoHighLevel and CRM automation expert who builds systems that follow up, so your team doesn't have to.",
  body: [
    "Most CRMs store leads. Few actually turn them into booked calls and closed deals. I build GoHighLevel systems that capture every lead, follow up automatically by email and SMS, book the appointment, move the deal through your pipeline, and alert your team, without anyone doing it by hand.",
    "I also build HubSpot workflows and connect your tools with Zapier, Make, n8n and APIs. Every build is tested trigger by trigger and handed over with a walkthrough video and documentation.",
  ],
  points: [
    "GoHighLevel CRM setup: pipelines, fields, tags and calendars",
    "Workflow automation with if/else logic, nurturing and reactivation",
    "Email and SMS automation, missed-call text-back and reminders",
    "Funnels, landing pages, forms and surveys",
    "SaaS mode, white-label setup, sub-accounts and snapshots",
    "GoHighLevel audits and fixing broken workflows",
    "HubSpot CRM setup, deal pipelines and lifecycle stages",
    "CRM migration from HubSpot, ClickFunnels or spreadsheets",
    "AI chatbots that qualify leads and book appointments",
    "Zapier, Make and n8n multi-step automations",
    "API and webhook integrations",
    "Dashboards and sales reporting",
  ],
};

// Skills from the Upwork profile (platforms also appear in the completed jobs).
export const skillGroups = [
  {
    title: "CRM & sales",
    items: ["CRM Automation", "CRM Software", "CRM Development", "Sales Funnel", "Sales Funnel Implementation", "Sales Funnel Builder", "Email Marketing", "A/B Testing"],
  },
  {
    title: "Platforms",
    items: ["HighLevel", "HubSpot", "Zapier", "Make.com", "n8n", "ClickUp", "Jira", "Odoo"],
  },
  {
    title: "Automation & AI",
    items: ["Automated Workflow", "Automation", "AI Automation", "AI Chatbot", "Chatbot", "API Integration", "Marketing Automation", "Lead Management"],
  },
];

// Completed and recent jobs from the Upwork work history. Ratings and periods are as shown there.
export const engagements = [
  {
    title: "GHL CRM Specialist",
    period: "Nov 2026",
    rating: 5 as number | null,
    tags: ["HighLevel", "CRM Automation", "CRM Software"],
    quote: "Great experience working with Ansar! He has excellent knowledge of GoHighLevel CRM, workflow automation, and business process optimization.",
  },
  {
    title: "GoHighLevel Automation",
    period: "Jul – Aug 2026",
    rating: 5 as number | null,
    tags: ["HighLevel", "Zapier", "Marketing Automation"],
    quote: "Ansar came in, mapped everything out, and rebuilt the key…",
  },
  {
    title: "Jira Workflow & Automation Implementation",
    period: "Apr – Jun 2026",
    rating: 4 as number | null,
    tags: ["Jira", "Confluence", "Scrum"],
    quote: null as string | null,
  },
  {
    title: "Odoo · ClickUp · Zapier Integration",
    period: "Feb – Jun 2026",
    rating: 5 as number | null,
    tags: ["Odoo", "ClickUp", "Zapier"],
    quote: null as string | null,
  },
  {
    title: "ClickUp Board Setup and Automation",
    period: "Dec 2025",
    rating: 5 as number | null,
    tags: ["ClickUp", "Automated Workflow"],
    quote: "Efficient, detail-oriented, and maintained clear communication throughout.",
  },
];

// Roles and engagements from the Upwork profile. Person names are left out on purpose.
export const experience = [
  {
    role: "Agency team member",
    org: "Red Star Technologies",
    period: "Top Rated Team",
    detail: "Part of an agency trusted by 150+ startups with 350+ successful launches.",
  },
  {
    role: "Odoo · ClickUp · Zapier Integration",
    org: "Client engagement",
    period: "Feb 2026 – Present",
    detail: "Set up organizational workflows in Odoo and integrated them with Trello for streamlined operations.",
  },
  {
    role: "ClickUp & Operations System Consultant",
    org: "Button Amsterdam",
    period: "Jan 2026 – Present",
    detail: "Designed a clean, scalable ClickUp setup for product development, sampling and operations, integrated with Shopify and spreadsheets for end-to-end visibility from sample to live product.",
  },
  {
    role: "Expert ClickUp Developer",
    org: "Inspirio Enterprises Inc",
    period: "Nov 2025 – Present",
    detail: "Worked on ClickUp setup and automation requirements for a full operations space, aligning on the documented requirements and planning the implementation.",
  },
  {
    role: "WordPress Intern",
    org: "WPWeb Infotech",
    period: "Sep 2018 – Oct 2019",
    detail: "Built and customized WordPress sites, fixed plugin issues, kept pages fast and made sites easy for non-technical teams to update.",
  },
  {
    role: "UI/UX Design Intern",
    org: "Design internship",
    period: "Earlier",
    detail: "Worked on interface improvements, wireframing and interactive prototypes for real client projects, using Figma and Adobe XD.",
  },
];

export const education = [
  { title: "Master's, Project Management", org: "SZABIST Pakistan Campus", period: "2017 – 2019" },
  { title: "B.Sc. Computer Science", org: "Bahria University", period: "2013 – 2017" },
];

export const certifications = [
  { title: "Certification in Customer Relationship Management (CRM)", org: "Coursera", date: "Jun 2025" },
  { title: "HubSpot Marketing Automation Certification", org: "Udemy", date: "Jan 2025" },
  { title: "HubSpot CRM Certification", org: "Coursera", date: "Dec 2024" },
  { title: "Zapier Expert Certified", org: "Udemy", date: "Sep 2024" },
];

export const services = [
  {
    n: "01",
    title: "GoHighLevel CRM & automation",
    tags: ["GoHighLevel", "Workflows", "SMS & Email"],
    points: [
      "CRM setup: pipelines, custom fields, tags and calendars",
      "Workflows with triggers, if/else logic, nurturing and reactivation",
      "Email and SMS, missed-call text-back and appointment reminders",
      "Funnels, forms, SaaS mode, white-label setup and snapshots",
    ],
  },
  {
    n: "02",
    title: "HubSpot CRM & sales automation",
    tags: ["HubSpot", "Pipelines", "Reporting"],
    points: [
      "HubSpot CRM setup, deal pipelines and lifecycle stages",
      "Lead assignment, rotation and automated follow-up",
      "Lead management automation and sales reporting",
      "CRM migration from HubSpot, ClickFunnels or spreadsheets",
    ],
  },
  {
    n: "03",
    title: "AI chatbots & integrations",
    tags: ["AI", "Zapier · Make · n8n", "APIs"],
    points: [
      "AI chatbots that answer questions, qualify leads and book appointments",
      "OpenAI / ChatGPT steps inside GoHighLevel, Make and n8n",
      "Zapier, Make and n8n multi-step automations",
      "API and webhook integrations: Stripe, Twilio, Calendly, Sheets, Slack",
    ],
  },
];

// Problems from the profile, each paired with the fix the services above describe.
export const problems = [
  { bad: "Leads come in, but nobody follows up fast enough", good: "Instant email and SMS follow-up the moment a lead arrives" },
  { bad: "Workflows firing twice, not firing, or sending the wrong messages", good: "Audited triggers, tested end to end before handover" },
  { bad: "Pipelines that don't match how the sales team works", good: "Stages mapped to your real sales process" },
  { bad: "Zapier or Make scenarios that break silently", good: "Rebuilt with error handling and alerts" },
  { bad: "Agencies rebuilding the same client setup every time", good: "Snapshots and white-label setups you reuse" },
];

export const audience = ["Marketing agencies", "Coaches & consultants", "Real estate teams", "Home services", "Healthcare clinics", "SaaS businesses"];

export const process = [
  { title: "Review", text: "Your current lead, booking and sales process." },
  { title: "Map", text: "The automation logic, before anything is built." },
  { title: "Build", text: "In GoHighLevel, HubSpot, Zapier, Make or n8n." },
  { title: "Test", text: "Every trigger, message and pipeline update." },
  { title: "Hand over", text: "A walkthrough video and documentation." },
];

// Reviews from completed Upwork jobs, cut where the profile truncates them.
// Client names are not shown on the profile, so they are labelled as Upwork clients.
export const testimonials = [
  {
    quote:
      "Great experience working with Ansar! He has excellent knowledge of GoHighLevel CRM, workflow automation, and business process optimization. He understood our requirements quickly and delivered quality work.",
    who: "Upwork client",
    job: "GHL CRM Specialist project",
  },
  {
    quote:
      "We needed someone to rework our marketing automations in GHL: things were getting complicated and nothing was firing correctly. Ansar came in, mapped everything out, and rebuilt the key…",
    who: "Upwork client",
    job: "GoHighLevel Automation project",
  },
  {
    quote:
      "Ansar did an excellent job setting up our ClickUp board with smooth automation workflows. He was efficient, detail-oriented, and maintained clear communication throughout.",
    who: "Upwork client",
    job: "ClickUp Board Setup project",
  },
];

export const contactUs = {
  heading: "Let's look at your workflow.",
  text: "Tell me which process eats your team's time. In a 30-minute call we map it together and I tell you what can be automated, with which tools, and roughly how long it takes.",
  actions: [
    { title: "Book a consultation", sub: "$10 per 30-min video meeting", href: profile.hire, primary: true },
    { title: "Hire me on Upwork", sub: "Open for work · 30+ hrs/week", href: profile.hire, primary: false },
    { title: "Watch my intro video", sub: "YouTube · who I am and how I work", href: profile.video, primary: false },
  ],
  facts: [
    { label: "Based in", value: "Rawalpindi, Pakistan" },
    { label: "Time zone", value: "UTC+05:00" },
    { label: "Availability", value: "30+ hrs/week · open to contract-to-hire" },
    { label: "Languages", value: "English (native or bilingual)" },
    { label: "Agency", value: "Red Star Technologies", href: profile.agency.href as string | undefined },
    { label: "Profile", value: "Ansar S. on Upwork", href: profile.hire as string | undefined },
  ],
};

export { projects, categories } from "./projects";
export type { Project } from "./projects";
