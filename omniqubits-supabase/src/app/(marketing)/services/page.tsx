import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, FadeUpGroup, FadeUpItem } from "@/components/shared/FadeUp";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore OmniQubits' full suite of services — growth marketing, brand strategy, technology solutions, AI automation, data analytics, and digital transformation.",
};

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const services = [
  {
    icon: "✦", number: "01", name: "Growth Marketing",
    description: "Full-funnel campaigns that convert. SEO, paid media, content, email automation, and performance analytics working in concert to multiply your reach.",
    features: ["Search Engine Optimisation (SEO)", "Pay-Per-Click Advertising (PPC)", "Content Marketing Strategy", "Email Marketing & Automation", "Social Media Marketing", "Conversion Rate Optimisation"],
  },
  {
    icon: "◈", number: "02", name: "Brand Strategy",
    description: "Identity systems, positioning frameworks, and messaging architecture that carve out an unassailable place in your market's memory.",
    features: ["Brand Identity Development", "Brand Positioning & Messaging", "Visual Identity Systems", "Brand Guidelines Creation", "Competitive Analysis", "Brand Storytelling"],
  },
  {
    icon: "◎", number: "03", name: "Data & Analytics",
    description: "Intelligence dashboards, predictive modelling, and behavioral analytics that surface the insights leaders need to make confident decisions.",
    features: ["Business Intelligence Dashboards", "Predictive Analytics", "Data Pipeline Architecture", "Customer Behaviour Analytics", "Performance Reporting", "Data Governance"],
  },
  {
    icon: "⟡", number: "04", name: "Machine Learning",
    description: "Advanced AI and ML solutions that automate decision-making, personalise experiences, and uncover hidden patterns in your data.",
    features: ["Predictive Modelling", "Natural Language Processing", "Recommendation Systems", "Computer Vision Solutions", "ML Model Training & Deployment", "AI Consulting & Strategy"],
  },
  {
    icon: "◉", number: "05", name: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies. From progressive web apps to complex enterprise platforms.",
    features: ["Full-Stack Web Applications", "Progressive Web Apps (PWA)", "E-Commerce Solutions", "CMS Development", "API Development & Integration", "Web Performance Optimisation"],
  },
  {
    icon: "⊕", number: "06", name: "Technology Solutions",
    description: "Custom software, cloud architecture, API integrations, and AI implementation designed to automate and scale your core operations.",
    features: ["Custom Software Development", "Cloud Architecture & Migration", "API Development & Integration", "AI & Machine Learning", "Automation Workflows", "Technical Consulting"],
  },
  {
    icon: "⚡", number: "07", name: "Automation",
    description: "Streamline operations and eliminate repetitive tasks with intelligent automation solutions that free your team to focus on high-value work.",
    features: ["Workflow Automation", "Robotic Process Automation (RPA)", "Integration & Webhooks", "Business Process Optimisation", "Automated Reporting", "Custom Automation Scripts"],
  },
  {
    icon: "⬡", number: "08", name: "Customer Support Systems",
    description: "Omnichannel support infrastructure — live chat, AI triage, CRM integration, and SLA management — that turns support into a loyalty engine.",
    features: ["Multi-channel Support Setup", "AI-Powered Chatbots", "CRM Integration", "Help Desk Implementation", "SLA Management", "Support Team Training"],
  },
  {
    icon: "✓", number: "09", name: "SQA (Software Quality Assurance)",
    description: "Comprehensive testing and quality assurance services that ensure your software delivers exceptional performance, security, and reliability.",
    features: ["Functional Testing", "Performance & Load Testing", "Security & Penetration Testing", "Automated Testing Frameworks", "Quality Audits & Assessments", "DevOps & CI/CD Testing"],
  },
  {
    icon: "⟡", number: "10", name: "Digital Transformation",
    description: "End-to-end business transformation consulting — from process mapping to implementation — that future-proofs your organisation for the quantum age.",
    features: ["Digital Strategy Consulting", "Process Automation", "Workflow Optimisation", "Change Management", "Technology Roadmap", "Innovation Workshops"],
  },
];

const process = [
  { step: "01", title: "Discovery",    description: "We dive deep into your business, audience, and goals to understand the full landscape." },
  { step: "02", title: "Strategy",     description: "We craft a tailored roadmap aligned with your objectives and market opportunities." },
  { step: "03", title: "Execution",    description: "Our interdisciplinary teams implement with precision, agility, and attention to detail." },
  { step: "04", title: "Optimisation", description: "We continuously measure, analyse, and refine to maximise your results and ROI." },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "12+",  label: "Countries Served" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "5×",   label: "Average ROI" },
];

const whyUs = [
  { title: "Fast Execution",  desc: "Agile delivery cycles" },
  { title: "Result-Driven",   desc: "Focused on ROI" },
  { title: "Expert Team",     desc: "Cross-functional specialists" },
  { title: "Reliable",        desc: "98% client retention" },
];

// ─────────────────────────────────────────────────────────────
// Page (Server Component — no "use client" needed)
// ─────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,140,0,0.06)_0%,transparent_70%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-orange-500/60" />
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Our Expertise</span>
              <span className="h-px w-12 bg-orange-500/60" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Precision-Built<br />
              <em className="text-orange-500 font-light">Services</em>
            </h1>
            <p className="text-muted-oq text-lg max-w-2xl mx-auto leading-relaxed">
              Every service is engineered to compound growth — from acquiring new customers to
              retaining them with world-class support and cutting-edge technology.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="py-12 bg-white-2 border-y border-orange-500/15">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUpGroup className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <FadeUpItem key={stat.label}>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl text-orange-500 mb-1">{stat.value}</div>
                  <div className="text-muted-oq text-xs tracking-[0.15em] uppercase">{stat.label}</div>
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeUpGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.05}>
            {services.map((svc) => (
              <FadeUpItem key={svc.number}>
                <div className="bg-white-2 border border-orange-500/15 p-8 hover:border-orange-500/35 transition-all group relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 border border-orange-500/35 flex items-center justify-center text-orange-500 text-xl mb-6 group-hover:bg-orange-500 group-hover:text-obsidian transition-all">
                    {svc.icon}
                  </div>
                  <div className="font-display text-xs tracking-[0.2em] text-orange-500 opacity-50 mb-2">{svc.number}</div>
                  <h3 className="font-display text-2xl text-black mb-3">{svc.name}</h3>
                  <p className="text-muted-oq text-sm leading-relaxed mb-6">{svc.description}</p>
                  <ul className="space-y-2">
                    {svc.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-muted-oq text-sm">
                        <span className="text-orange-500 text-xs mt-1 shrink-0">◆</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <section className="py-24 bg-white-2 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-orange-500/60" />
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Our Process</span>
              <span className="h-px w-12 bg-orange-500/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              How We <em className="text-orange-500 font-light">Work</em>
            </h2>
          </FadeUp>

          <FadeUpGroup className="grid md:grid-cols-4 gap-6" stagger={0.12}>
            {process.map((p, i) => (
              <FadeUpItem key={p.step}>
                <div className="text-center relative">
                  <div className="font-display text-5xl text-orange-500/20 mb-4">{p.step}</div>
                  <h3 className="font-display text-xl text-black mb-2">{p.title}</h3>
                  <p className="text-muted-oq text-sm">{p.description}</p>
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-3 text-orange-500/20">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── Why OmniQubits ────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-12 bg-orange-500/60" />
                <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Why OmniQubits</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                A Different<br />
                <em className="text-orange-500 font-light">Approach</em>
              </h2>
              <p className="text-muted-oq text-sm leading-relaxed mb-8">
                We don't believe in cookie-cutter solutions. Every business is unique, and we build
                tailored strategies that align with your specific goals, market position, and growth trajectory.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 border border-orange-500/15 flex items-center justify-center text-orange-500 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-black text-sm font-medium">{item.title}</div>
                      <div className="text-muted-oq text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="aspect-square border border-orange-500/15 bg-white-2 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="font-display text-6xl text-orange-500 mb-2">∞</div>
                  <div className="text-muted-oq text-xs tracking-[0.2em] uppercase">Possibilities</div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white-4 border border-orange-500/35 p-6">
                  <div className="font-display text-3xl text-orange-500">200+</div>
                  <div className="text-muted-oq text-xs">Global Clients</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-white-2 px-4">
        <FadeUp className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to <em className="text-orange-500 font-light">Transform</em>?
          </h2>
          <p className="text-muted-oq text-sm mb-10">
            Let's discuss how we can help your business grow. Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-500 text-obsidian px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-orange-500-light hover:-translate-y-0.5 transition-all">
              Get Started
            </Link>
            <Link href="/pricing" className="border border-orange-500/35 text-black px-8 py-4 text-sm tracking-[0.15em] uppercase hover:border-orange-500 hover:text-orange-500 hover:-translate-y-0.5 transition-all">
              View Pricing
            </Link>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}
