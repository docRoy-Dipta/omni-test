"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Services Page - Deep-dive into all 10 OmniQubits services
 * Design matches omniqubits.html luxury theme with exact color tokens.
 */

const services = [
  {
    icon: "✦",
    number: "01",
    name: "Growth Marketing",
    description: "Full-funnel campaigns that convert. SEO, paid media, content, email automation, and performance analytics working in concert to multiply your reach.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Content Marketing Strategy",
      "Email Marketing & Automation",
      "Social Media Marketing",
      "Conversion Rate Optimization"
    ]
  },
  {
    icon: "◈",
    number: "02",
    name: "Brand Strategy",
    description: "Identity systems, positioning frameworks, and messaging architecture that carve out an unassailable place in your market's memory.",
    features: [
      "Brand Identity Development",
      "Brand Positioning & Messaging",
      "Visual Identity Systems",
      "Brand Guidelines Creation",
      "Competitive Analysis",
      "Brand Storytelling"
    ]
  },
  {
    icon: "◎",
    number: "03",
    name: "Data & Analytics",
    description: "Intelligence dashboards, predictive modelling, and behavioral analytics that surface the insights leaders need to make confident decisions.",
    features: [
      "Business Intelligence Dashboards",
      "Predictive Analytics",
      "Data Pipeline Architecture",
      "Customer Behavior Analytics",
      "Performance Reporting",
      "Data Governance"
    ]
  },
  {
    icon: "⟡",
    number: "04",
    name: "Machine Learning",
    description: "Advanced AI and ML solutions that automate decision-making, personalize experiences, and uncover hidden patterns in your data.",
    features: [
      "Predictive Modeling",
      "Natural Language Processing",
      "Recommendation Systems",
      "Computer Vision Solutions",
      "ML Model Training & Deployment",
      "AI Consulting & Strategy"
    ]
  },
  {
    icon: "◉",
    number: "05",
    name: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies. From progressive web apps to complex enterprise platforms.",
    features: [
      "Full-Stack Web Applications",
      "Progressive Web Apps (PWA)",
      "E-Commerce Solutions",
      "CMS Development",
      "API Development & Integration",
      "Web Performance Optimization"
    ]
  },
  {
    icon: "⊕",
    number: "06",
    name: "Technology Solutions",
    description: "Custom software, cloud architecture, API integrations, and AI implementation designed to automate and scale your core operations.",
    features: [
      "Custom Software Development",
      "Cloud Architecture & Migration",
      "API Development & Integration",
      "AI & Machine Learning",
      "Automation Workflows",
      "Technical Consulting"
    ]
  },
  {
    icon: "⚡",
    number: "07",
    name: "Automation",
    description: "Streamline operations and eliminate repetitive tasks with intelligent automation solutions that free your team to focus on high-value work.",
    features: [
      "Workflow Automation",
      "Robotic Process Automation (RPA)",
      "Integration & Webhooks",
      "Business Process Optimization",
      "Automated Reporting",
      "Custom Automation Scripts"
    ]
  },
  {
    icon: "⬡",
    number: "08",
    name: "Customer Support Systems",
    description: "Omnichannel support infrastructure — live chat, AI triage, CRM integration, and SLA management — that turns support into a loyalty engine.",
    features: [
      "Multi-channel Support Setup",
      "AI-Powered Chatbots",
      "CRM Integration",
      "Help Desk Implementation",
      "SLA Management",
      "Support Team Training"
    ]
  },
  {
    icon: "✓",
    number: "09",
    name: "SQA (Software Quality Assurance)",
    description: "Comprehensive testing and quality assurance services that ensure your software delivers exceptional performance, security, and reliability.",
    features: [
      "Functional Testing",
      "Performance & Load Testing",
      "Security & Penetration Testing",
      "Automated Testing Frameworks",
      "Quality Audits & Assessments",
      "DevOps & CI/CD Testing"
    ]
  },
  {
    icon: "⟡",
    number: "10",
    name: "Digital Transformation",
    description: "End-to-end business transformation consulting — from process mapping to implementation — that future-proofs your organisation for the quantum age.",
    features: [
      "Digital Strategy Consulting",
      "Process Automation",
      "Workflow Optimization",
      "Change Management",
      "Technology Roadmap",
      "Innovation Workshops"
    ]
  }
];

const process = [
  { step: "01", title: "Discovery", description: "We dive deep into your business, audience, and goals to understand the full landscape." },
  { step: "02", title: "Strategy", description: "We craft a tailored roadmap aligned with your objectives and market opportunities." },
  { step: "03", title: "Execution", description: "Our interdisciplinary teams implement with precision, agility, and attention to detail." },
  { step: "04", title: "Optimization", description: "We continuously measure, analyze, and refine to maximize your results and ROI." }
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "12+", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5×", label: "Average ROI" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-obsidian text-cream">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,169,110,0.06)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(201,169,110,0.04)_0%,transparent_60%),radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(201,169,110,0.04)_0%,transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Expertise</span>
              <span className="h-px w-12 bg-gold/60" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Precision-Built<br />
              <em className="text-gold font-light">Services</em>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted-oq text-lg max-w-2xl mx-auto leading-relaxed">
              Every service is engineered to compound growth — from acquiring new customers to retaining them with world-class support and cutting-edge technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-obsidian-2 border-y border-gold/15">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl text-gold mb-1">{stat.value}</div>
                <div className="text-muted-oq text-xs tracking-[0.15em] uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - 10 Services */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-obsidian-2 border border-gold/15 p-8 hover:border-gold/35 transition-all group relative overflow-hidden"
              >
                {/* Hover line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 border border-gold/35 flex items-center justify-center text-gold text-xl mb-6 group-hover:bg-gold group-hover:text-obsidian transition-all">
                  {service.icon}
                </div>
                <div className="font-display text-xs tracking-[0.2em] text-gold opacity-50 mb-2">{service.number}</div>
                <h3 className="font-display text-2xl text-cream mb-3">{service.name}</h3>
                <p className="text-muted-oq text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-oq text-sm">
                      <span className="text-gold text-xs mt-1">◆</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-obsidian-2 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Process</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              How We <em className="text-gold font-light">Work</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="font-display text-5xl text-gold/20 mb-4">{p.step}</div>
                <h3 className="font-display text-xl text-cream mb-2">{p.title}</h3>
                <p className="text-muted-oq text-sm">{p.description}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-gold/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-12 bg-gold/60" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Why OmniQubits</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                A Different<br />
                <em className="text-gold font-light">Approach</em>
              </h2>
              <p className="text-muted-oq text-sm leading-relaxed mb-8">
                We don't believe in cookie-cutter solutions. Every business is unique, and we build tailored strategies that align with your specific goals, market position, and growth trajectory.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Fast Execution", desc: "Agile delivery cycles" },
                  { title: "Result-Driven", desc: "Focused on ROI" },
                  { title: "Expert Team", desc: "Cross-functional specialists" },
                  { title: "Reliable", desc: "98% client retention" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-10 h-10 border border-gold/15 flex items-center justify-center text-gold shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-cream text-sm font-medium">{item.title}</div>
                      <div className="text-muted-oq text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square border border-gold/15 bg-obsidian-2 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-6xl text-gold mb-2">∞</div>
                  <div className="text-muted-oq text-xs tracking-[0.2em] uppercase">Possibilities</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-obsidian-4 border border-gold/35 p-6">
                <div className="font-display text-3xl text-gold">200+</div>
                <div className="text-muted-oq text-xs">Global Clients</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-obsidian-2 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to <em className="text-gold font-light">Transform</em>?
          </h2>
          <p className="text-muted-oq text-sm mb-10">
            Let's discuss how we can help your business grow. Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-obsidian px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="border border-gold/35 text-cream px-8 py-4 text-sm font-normal tracking-[0.15em] uppercase hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}