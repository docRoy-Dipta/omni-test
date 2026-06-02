export const siteConfig = {
  name: "OmniQubits",
  tagline: "Beyond the Horizon of Innovation",
  description:
    "OmniQubits harnesses a limitless approach to business transformation — inspired by quantum computing, built for the future-forward enterprise.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  email: "hello@omniqubits.com",

  stats: [
    { number: "200+", label: "Global Clients" },
    { number: "98%",  label: "Client Retention" },
    { number: "12+",  label: "Countries Served" },
    { number: "5×",   label: "Avg. ROI Growth" },
  ],

  nav: [
    { label: "Services",     href: "#services" },
    { label: "About",        href: "#about" },
    { label: "Pricing",      href: "#pricing" },
    { label: "Clients",      href: "#testimonials" },
    { label: "Contact",      href: "#contact" },
  ],

  marqueeItems: [
    "Marketing Strategy", "Customer Experience", "Brand Identity",
    "Technology Solutions", "Growth Engineering", "Data Analytics",
    "Digital Transformation", "AI Integration",
  ],

  services: [
    { title: "Growth Marketing",         icon: "✦", description: "Full-funnel campaigns that convert. SEO, paid media, content, email automation, and performance analytics working in concert to multiply your reach.", display_order: 1 },
    { title: "Brand Strategy",           icon: "◈", description: "Identity systems, positioning frameworks, and messaging architecture that carve out an unassailable place in your market's memory.", display_order: 2 },
    { title: "Customer Support Systems", icon: "⬡", description: "Omnichannel support infrastructure — live chat, AI triage, CRM integration, and SLA management — that turns support into a loyalty engine.", display_order: 3 },
    { title: "Technology Solutions",     icon: "⊕", description: "Custom software, cloud architecture, API integrations, and AI implementation designed to automate and scale your core operations.", display_order: 4 },
    { title: "Data & Analytics",         icon: "◎", description: "Intelligence dashboards, predictive modelling, and behavioral analytics that surface the insights leaders need to make confident decisions.", display_order: 5 },
    { title: "Digital Transformation",   icon: "⟡", description: "End-to-end business transformation consulting — from process mapping to implementation — that future-proofs your organisation for the quantum age.", display_order: 6 },
  ],

  testimonials: [
    { name: "James Mercer", role: "CEO", company: "NovaTech Solutions · USA", initials: "JM", rating: 5, display_order: 1, content: "OmniQubits didn't just run our campaigns — they rebuilt how we think about growth. Within six months, our CAC dropped by 40% and pipeline tripled." },
    { name: "Soraya Patel", role: "COO", company: "Zentra Retail · UK",        initials: "SP", rating: 5, display_order: 2, content: "Their customer support overhaul transformed our CSAT scores from 3.1 to 4.8 in under four months. The systems they built are still running flawlessly today." },
    { name: "Ama Koffi",   role: "CTO", company: "PulseFinance · Ghana",       initials: "AK", rating: 5, display_order: 3, content: "A rare agency that understands technology as deeply as it understands people. The AI integration they delivered saved us 1,200 hours of manual work per quarter." },
  ],

  pricing: [
    {
      name: "Launchpad", price: "1,200", period: "per month · billed monthly",
      tagline: "Start with intention.", is_featured: false, cta_text: "Get Started", display_order: 1,
      features: [
        { text: "Growth marketing strategy",  included: true },
        { text: "Brand identity audit",       included: true },
        { text: "2 channels managed",         included: true },
        { text: "Monthly analytics report",   included: true },
        { text: "Email support (48h SLA)",    included: true },
        { text: "Customer support systems",   included: false },
        { text: "Custom tech development",    included: false },
        { text: "Dedicated account manager",  included: false },
      ],
    },
    {
      name: "Ascend", price: "3,800", period: "per month · billed monthly",
      tagline: "Built for serious growth.", is_featured: true, cta_text: "Get Started", display_order: 2,
      features: [
        { text: "Full-funnel marketing campaigns",  included: true },
        { text: "Brand strategy & positioning",     included: true },
        { text: "5 channels managed",              included: true },
        { text: "Customer support infrastructure", included: true },
        { text: "Weekly performance reports",      included: true },
        { text: "CRM integration & setup",         included: true },
        { text: "Dedicated account manager",       included: true },
        { text: "Custom tech development",         included: false },
      ],
    },
    {
      name: "Quantum", price: "Custom", period: "bespoke engagement · enterprise",
      tagline: "No limits. No ceilings.", is_featured: false, cta_text: "Book a Call", display_order: 3,
      features: [
        { text: "Everything in Ascend",            included: true },
        { text: "Custom software development",     included: true },
        { text: "AI & automation integration",     included: true },
        { text: "Data analytics & dashboards",     included: true },
        { text: "Digital transformation roadmap",  included: true },
        { text: "24/7 priority support",           included: true },
        { text: "Dedicated team of specialists",   included: true },
        { text: "Quarterly C-suite reviews",       included: true },
      ],
    },
  ],
};
