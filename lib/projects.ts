// Projects. The first three are the items in Ansar's Upwork portfolio (titles are real).
// TODO: the descriptions are DRAFTS written from the titles and the services; edit them with the
// real problem / what was built / result for each project.
// `mock` picks the drawn preview: dashboard | pipeline | booking | board | integration.

export type Project = {
  slug: string;
  title: string;
  category: string;
  year?: string;
  role?: string;
  /** Full project description, shown on the case-study page. */
  description?: string;
  /** Cover picture in public/portfolio/. When set it replaces the drawn preview. */
  image?: string;
  /** Background behind the cover so it blends into the card (match the picture edges). */
  imageBg?: string;
  /** CSS aspect ratio of the card/cover for this image, e.g. "16 / 9". Default is "16 / 10". */
  imageRatio?: string;
  /** Slides or screenshots shown on the case-study page, in order. */
  gallery?: { src: string; label: string }[];
  /** A short honest note shown under the description, e.g. that the build uses sample data. */
  note?: string;
  blurb: string;
  challenge: string;
  built: string[];
  result: string;
  tools: string[];
  flow: string[]; // steps of the animated workflow diagram
  mock: "dashboard" | "pipeline" | "booking" | "board" | "integration";
  color: string; // accent colour of this project's preview
};

export const projects: Project[] = [
  {
    slug: "ghl-crm-pipeline",
    title: "GoHighLevel CRM Setup & Lead Pipeline Management",
    category: "GoHighLevel",
    role: "GoHighLevel CRM Specialist and Administrator",
    blurb: "A GoHighLevel CRM organized so lead records and sales activity are easy to track.",
    description:
      "I organized a GoHighLevel CRM to keep lead records and sales activity easy to track. I configured a lead pipeline with stages including New Lead, In Queue, Calling, Connected, and Voicemail. I organized contact views using Smart Lists and website-lead tags, with business details and recent activity visible alongside each record. This gave the team a central workspace to review contacts, track outreach progress, and identify leads needing attention.",
    challenge: "Lead records and sales activity needed to be easy to track in one place.",
    built: [
      "A lead pipeline with the stages New Lead, In Queue, Calling, Connected and Voicemail",
      "Contact views organized with Smart Lists and website-lead tags",
      "Business details and recent activity visible alongside each record",
      "A central workspace to review contacts and track outreach progress",
    ],
    result: "A central workspace where the team can review contacts, track outreach progress and identify leads needing attention.",
    tools: ["HighLevel", "CRM Development", "CRM Automation", "Lead Management", "Lead Generation"],
    flow: ["New Lead", "In Queue", "Calling", "Connected", "Voicemail"],
    mock: "pipeline",
    color: "#d4a574",
    image: "/portfolio/crm-pipeline.png",
    imageRatio: "16 / 9",
    imageBg: "#03342f", // dark green-teal, close to the cover's edges
  },
  {
    slug: "ghl-demo-booking",
    title: "GoHighLevel Demo Form & Appointment Booking Automation",
    category: "Automation",
    role: "GoHighLevel Forms and Workflow Automation Specialist",
    blurb: "A demo request form and an appointment-triggered workflow that updates the CRM and confirms bookings by SMS and email.",
    description:
      "I created a demo request form in GoHighLevel to capture contact details, trade, and business information before a walkthrough. I also configured an appointment-triggered workflow that creates or updates an opportunity, updates a contact field, and sends booking confirmations through SMS and email. The setup brought lead capture and booking administration into GoHighLevel, with a defined sequence for updating CRM records and confirming appointments.",
    challenge: "Lead capture and booking administration needed to live in one place, with a clear order for updating CRM records and confirming appointments.",
    built: [
      "A demo request form capturing contact details, trade and business information",
      "An appointment-triggered workflow that creates or updates an opportunity",
      "A contact field updated automatically after booking",
      "Booking confirmations sent by SMS and email",
    ],
    result: "Lead capture and booking administration brought into GoHighLevel, with a defined sequence for updating CRM records and confirming appointments.",
    tools: ["HighLevel", "Form Development", "Automated Workflow", "Appointment Scheduling", "Email Automation"],
    flow: ["Demo form", "Appointment booked", "Opportunity updated", "Contact field updated", "SMS + email confirmation"],
    mock: "booking",
    color: "#5fd0ff",
    image: "/portfolio/demo-booking.png",
    imageBg: "linear-gradient(90deg, #000d26, #00204c 50%, #002451)", // matches the edges of the cover
  },
  {
    slug: "ghl-ceo-dashboard",
    title: "GoHighLevel CEO Dashboard & Sales Reporting",
    category: "Reporting",
    role: "GoHighLevel Dashboard and CRM Reporting Specialist",
    blurb: "A CEO dashboard in GoHighLevel that brings the key sales information into one view.",
    description:
      "I built a CEO dashboard in GoHighLevel to bring key sales information into one view. I configured widgets for new leads, active pipeline, top-priority deals, deals won, follow-up backlog, and revenue won. I added charts showing lead flow over time and opportunity counts across sales stages. This gave management a clear way to review pipeline activity, spot outstanding follow-ups, and monitor sales performance without opening individual opportunity records.",
    challenge: "Management had to open individual opportunity records to see pipeline activity, outstanding follow-ups and sales performance.",
    built: [
      "Widgets for new leads, active pipeline and top-priority deals",
      "Widgets for deals won, follow-up backlog and revenue won",
      "A chart of lead flow over time",
      "A chart of opportunity counts across sales stages",
    ],
    result: "A clear way for management to review pipeline activity, spot outstanding follow-ups and monitor sales performance, without opening individual opportunity records.",
    tools: ["HighLevel", "Dashboard", "Sales Call", "CRM Software", "Email Marketing"],
    flow: ["Key sales data", "KPI widgets", "Lead flow chart", "Opportunity chart", "CEO review"],
    mock: "dashboard",
    color: "#a99bff",
    image: "/portfolio/ceo-dashboard.png",
    imageBg: "#f5f9fe", // matches the edges of the cover
  },
  {
    slug: "hubspot-crm-setup",
    title: "HubSpot CRM Setup: Lead Form, Contacts and Sales Pipeline",
    category: "HubSpot",
    role: "CRM Setup and Automation",
    blurb: "A complete HubSpot CRM that captures leads, organizes customers and tracks sales in one place.",
    description:
      "I set up a complete HubSpot CRM to show how a business can capture leads, organize customers and track sales in one place. The build includes a lead capture form connected to contact properties, 24 contacts grouped by lifecycle stage with custom views, 24 companies linked to their contacts, a 5-stage deals pipeline, and a dashboard for leads, deals, activity and tickets. Every form sign-up lands in the CRM automatically, with no manual entry. Message me and I will set up HubSpot around your sales process.",
    note: "Demo build with sample data, created to show the setup.",
    challenge: "Businesses need a clear way to organize customer information, monitor potential clients and manage follow-ups, with every deal visible in a structured workflow.",
    built: [
      "A lead capture form with every field connected to a HubSpot contact property",
      "24 contacts grouped by lifecycle stage, with custom views for new leads, follow-ups and high priority",
      "24 companies linked to their contacts",
      "A 5-stage deals pipeline and a dashboard for leads, deals, activity and tickets",
    ],
    result: "Every lead, company and deal tracked in one organized CRM. Form sign-ups land in HubSpot automatically, with no manual entry, and the dashboard shows leads, deals, activity and tickets at a glance.",
    tools: ["HubSpot", "CRM Software", "Lead Generation", "Automated Deployment Pipeline", "CRM Development"],
    flow: ["Lead form", "Contacts", "Companies", "Deals pipeline", "Dashboard"],
    mock: "pipeline",
    color: "#ff8a5c",
    image: "/portfolio/hubspot/slide-07.webp",
    imageRatio: "16 / 9",
    imageBg: "#f4ecda", // the cream of the deck's cover slide
    gallery: [
      { src: "/portfolio/hubspot/slide-03.webp", label: "Lead capture form" },
      { src: "/portfolio/hubspot/slide-04.webp", label: "Contacts and lifecycle stages" },
      { src: "/portfolio/hubspot/slide-05.webp", label: "Company database" },
      { src: "/portfolio/hubspot/slide-06.webp", label: "Sales pipeline" },
    ],
  },
  {
    slug: "crm-automation-revenue-workflow",
    title: "CRM Automation & Revenue Workflow System",
    category: "Automation",
    role: "CRM & Automation Systems Specialist",
    blurb: "Scalable CRM and automation systems that cut manual work and give businesses clear pipelines and reliable follow-up.",
    description:
      "Designed and optimized scalable CRM and automation systems to help businesses manage leads, follow-ups, pipelines, client onboarding, reporting, and daily operations more efficiently. The project focused on reducing manual work, improving pipeline visibility, automating email/SMS follow-ups, organizing CRM data, and creating reliable workflows across tools like HubSpot, Zoho, GoHighLevel, Zapier, Make.com, and dashboards. The result was a cleaner, more reliable CRM structure that improved team adoption, reduced founder dependency, and supported long-term business growth.",
    challenge: "Businesses needed to manage leads, follow-ups, pipelines, client onboarding, reporting and daily operations with less manual work.",
    built: [
      "Scalable CRM and automation systems covering leads, follow-ups, pipelines, onboarding and reporting",
      "Automated email and SMS follow-ups",
      "Reliable workflows across HubSpot, Zoho, GoHighLevel, Zapier, Make.com and dashboards",
      "Industry-specific email sequences (Construction, Med Spa, HVAC, Plumbing), each with Day 3 follow-up and Day 7 last-chance versions",
    ],
    result: "A cleaner, more reliable CRM structure that improved team adoption, reduced founder dependency and supported long-term business growth.",
    tools: ["CRM Automation", "Zapier", "API Integration", "Marketing Automation", "Revenue Management"],
    flow: ["Leads & follow-ups", "Pipelines", "Onboarding", "Reporting", "Automated workflows"],
    mock: "integration",
    color: "#7fd1b9",
    image: "/portfolio/crm-automation.png",
    imageBg: "#ffffff",
  },
  {
    slug: "hubspot-pipeline-followup",
    title: "HubSpot Sales Pipeline & Lead Follow-Up Automation",
    category: "HubSpot",
    role: "HubSpot CRM Specialist",
    blurb: "A structured HubSpot setup with lead stages, deal pipelines, follow-up reminders, email workflows and reporting dashboards.",
    description:
      "Eliminated repetitive manual setup across departments.\n\nEnsured consistent structure and standard operating procedures.\n\nCreated a structured HubSpot CRM setup with lead stages, deal pipelines, automated follow-up reminders, email workflows, and reporting dashboards. The goal was to help the sales team respond faster, track every lead properly, and reduce missed opportunities through organized automation.",
    challenge: "The sales team needed to respond faster, track every lead properly and reduce missed opportunities.",
    built: [
      "Lead stages and deal pipelines in HubSpot",
      "Automated follow-up reminders",
      "Email workflows",
      "Reporting dashboards",
    ],
    result: "A consistent, organized setup that eliminated repetitive manual work across departments and helped the sales team respond faster and miss fewer opportunities.",
    tools: ["PipelineDeals", "HubSpot", "Email Automation", "CRM Development", "Lead Management"],
    flow: ["Lead stages", "Deal pipelines", "Follow-up reminders", "Email workflows", "Reporting dashboards"],
    mock: "pipeline",
    color: "#ff9d6e",
    image: "/portfolio/hubspot-followup.png",
    imageBg: "#181818", // the cover's flat dark background
  },
  {
    slug: "ghl-lead-management-automation",
    title: "GoHighLevel CRM Automation System for Lead Management",
    category: "GoHighLevel",
    role: "GoHighLevel CRM Automation Expert",
    blurb: "A complete GoHighLevel automation system for lead capture, routing, pipeline management, scheduling and follow-up.",
    description:
      "Built a complete GoHighLevel CRM automation system for lead capture, lead routing, pipeline management, appointment scheduling, and automated follow-up sequences. Created workflows that streamlined lead management, improved conversion tracking, and reduced manual effort through scalable automation processes.",
    challenge: "Lead capture, routing, pipeline management, scheduling and follow-up needed to run with less manual effort.",
    built: [
      "Lead capture and lead routing",
      "Pipeline management and appointment scheduling",
      "Automated follow-up sequences",
      "Workflows that streamline lead management and improve conversion tracking",
    ],
    result: "Streamlined lead management, better conversion tracking and less manual effort, through scalable automation processes.",
    tools: ["Automated Workflow", "Sales Analytics", "Lead Management Automation", "Lead Management", "CRM Automation"],
    flow: ["Lead capture", "Lead routing", "Pipeline management", "Appointment scheduling", "Follow-up sequences"],
    mock: "board",
    color: "#7fb8ff",
    image: "/portfolio/ghl-lead-automation.png",
    imageBg: "#ffffff",
  },
  {
    slug: "zapier-make-crm-integrations",
    title: "Zapier & Make Automation for CRM Integration Workflows",
    category: "Automation",
    role: "Automation & Integration Specialist",
    blurb: "Zapier and Make workflows that connect CRM platforms, forms, calendars, spreadsheets, email tools and other apps.",
    description:
      "Created advanced automation workflows using Zapier and Make to connect CRM platforms, forms, calendars, spreadsheets, email tools, and third-party applications. Implemented API and webhook integrations that eliminated repetitive tasks, synchronized data across systems, and improved workflow reliability.",
    challenge: "CRM platforms, forms, calendars, spreadsheets, email tools and other applications needed to share data without repetitive manual work.",
    built: [
      "Advanced Zapier and Make workflows connecting CRMs, forms, calendars, spreadsheets and email tools",
      "API and webhook integrations with third-party applications",
      "Automation that eliminated repetitive tasks",
      "Data synchronized across systems, with more reliable workflows",
    ],
    result: "Repetitive tasks eliminated, data synchronized across systems and more reliable workflows.",
    tools: ["Zapier", "API Integration", "Make.com", "Web API", "Software Integration"],
    flow: ["Trigger", "Zapier / Make workflow", "API & webhook call", "Data synced", "CRM updated"],
    mock: "integration",
    color: "#a66bff",
    image: "/portfolio/zapier-make.png",
    imageRatio: "16 / 9",
    imageBg: "#000000",
  },
  {
    slug: "sales-funnel-lead-nurturing",
    title: "Sales Funnel Automation & Lead Nurturing System",
    category: "Automation",
    role: "Sales Funnel Automation & Lead Nurturing System",
    blurb: "A fully automated sales funnel with lead nurturing, email and SMS follow-ups, appointment reminders and conversion tracking.",
    description:
      "Designed a fully automated sales funnel with lead nurturing workflows, email automation, SMS follow-ups, appointment reminders, and conversion tracking. Built automated customer journeys that improved engagement, increased lead qualification efficiency, and supported consistent pipeline growth.",
    challenge: "Leads needed to be nurtured, followed up and qualified consistently, without relying on manual work.",
    built: [
      "A fully automated sales funnel with lead nurturing workflows",
      "Email automation and SMS follow-ups",
      "Appointment reminders and conversion tracking",
      "Automated customer journeys",
    ],
    result: "Better engagement, more efficient lead qualification and consistent pipeline growth.",
    tools: ["Marketing Automation", "Email Automation", "Lead Management", "Sales Funnel", "CRM Automation"],
    flow: ["Lead enters funnel", "Nurturing workflow", "Email & SMS follow-ups", "Appointment reminders", "Conversion tracking"],
    mock: "integration",
    color: "#b79bff",
    image: "/portfolio/sales-funnel.png",
    imageBg: "#eeeeee", // the light grey of the cover's striped background
  },
  {
    slug: "end-to-end-crm-setup",
    title: "End-to-End CRM Setup & Workflow Optimization",
    category: "CRM",
    role: "CRM Implementation & Automation Expert",
    blurb: "CRM systems implemented and optimized from initial setup through automation, pipelines, contacts and reporting.",
    description:
      "Implemented and optimized CRM systems from initial setup through workflow automation, pipeline configuration, contact organization, and reporting dashboards. Structured CRM processes to improve data quality, team adoption, sales visibility, and operational efficiency across the customer lifecycle.",
    challenge: "CRM processes needed a clear structure, from first setup to reporting, to improve data quality, adoption and sales visibility.",
    built: [
      "CRM implementation from initial setup",
      "Workflow automation and pipeline configuration",
      "Contact organization",
      "Reporting dashboards",
    ],
    result: "Better data quality, team adoption, sales visibility and operational efficiency across the customer lifecycle.",
    tools: ["Project Workflows", "Customer Relationship Management", "Lead Management", "Sales Funnel", "CRM Automation"],
    flow: ["Initial setup", "Workflow automation", "Pipeline configuration", "Contact organization", "Reporting dashboards"],
    mock: "dashboard",
    color: "#ffc61a",
    image: "/portfolio/crm-end-to-end.png",
    imageBg: "#010409", // the cover's flat near-black background
  },
];

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
