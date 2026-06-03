"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Users, Shield } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: "✦",
    title: "Growth Marketing",
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
    title: "Brand Strategy",
    description: "Identity systems, positioning frameworks, and messaging architecture that carve out an unassailable place in your market&apos;s memory.",
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
    icon: "⬡",
    title: "Customer Support Systems",
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
    icon: "⊕",
    title: "Technology Solutions",
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
    icon: "◎",
    title: "Data & Analytics",
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
    title: "Digital Transformation",
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
  { value: "150+", label: "Projects Delivered" },
  { value: "12+", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5x", label: "Average ROI" }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-obsidian text-cream">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,169,110,0.06)_0%,transparent_70%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Expertise</span>
              <span className="h-px w-12 bg-gold/60" />
            </motion.div>

            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Precision-Built<br />
              <em className="text-gold font-light">Services</em>
            </motion.h1>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-muted-color text-lg max-w-2xl mx-auto leading-relaxed">
              Every service is engineered to compound growth — from acquiring new customers to retaining them with world-class support and cutting-edge technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-obsidian-2 border-y border-gold-subtle">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl text-gold mb-1">{stat.value}</div>
                <div className="text-muted-color text-xs tracking-[0.15em] uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="bg-obsidian-2 border border-gold-subtle p-8 hover:border-gold-glow transition-all group"
              >
                <div className="w-12 h-12 border border-gold-subtle flex items-center justify-center text-gold text-xl mb-6 group-hover:bg-gold group-hover:text-obsidian transition-all">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl text-cream mb-3">{service.title}</h3>
                <p className="text-muted-color text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-color text-sm">
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
      <section className="py-24 bg-obsidian-2">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
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
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="font-display text-5xl text-gold/20 mb-4">{p.step}</div>
                <h3 className="font-display text-xl text-cream mb-2">{p.title}</h3>
                <p className="text-muted-color text-sm">{p.description}</p>
                {i < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-3 text-gold/20" size={20} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-gold/60" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Why OmniQubits</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                A Different<br />
                <em className="text-gold font-light">Approach</em>
              </h2>
              <p className="text-muted-color text-sm leading-relaxed mb-8">
                We don&apos;t believe in cookie-cutter solutions. Every business is unique, and we build tailored strategies that align with your specific goals, market position, and growth trajectory.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "Fast Execution", desc: "Agile delivery cycles" },
                  { icon: Target, title: "Result-Driven", desc: "Focused on ROI" },
                  { icon: Users, title: "Expert Team", desc: "Cross-functional specialists" },
                  { icon: Shield, title: "Reliable", desc: "98% client retention" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-10 h-10 border border-gold-subtle flex items-center justify-center text-gold shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="text-cream text-sm font-medium">{item.title}</div>
                      <div className="text-muted-color text-xs">{item.desc}</div>
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
              <div className="aspect-square border border-gold-subtle bg-obsidian-2 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-6xl text-gold mb-2">∞</div>
                  <div className="text-muted-color text-xs tracking-[0.2em] uppercase">Possibilities</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-obsidian-4 border border-gold-glow p-6">
                <div className="font-display text-3xl text-gold">200+</div>
                <div className="text-muted-color text-xs">Global Clients</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-obsidian-2">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to <em className="text-gold font-light">Transform</em>?
          </h2>
          <p className="text-muted-color text-sm mb-10">
            Let&apos;s discuss how we can help your business grow. Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold-light text-obsidian">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold-subtle text-cream hover:border-gold hover:text-gold">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}