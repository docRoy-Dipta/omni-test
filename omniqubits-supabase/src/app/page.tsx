"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Star,
  X,
  MessageCircle
} from "lucide-react";
import Link from "next/link";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// Services data
const services = [
  {
    icon: "✦",
    number: "01",
    title: "Growth Marketing",
    description: "Full-funnel campaigns that convert. SEO, paid media, content, email automation, and performance analytics working in concert to multiply your reach."
  },
  {
    icon: "◈",
    number: "02",
    title: "Brand Strategy",
    description: "Identity systems, positioning frameworks, and messaging architecture that carve out an unassailable place in your market's memory."
  },
  {
    icon: "⬡",
    number: "03",
    title: "Customer Support Systems",
    description: "Omnichannel support infrastructure — live chat, AI triage, CRM integration, and SLA management — that turns support into a loyalty engine."
  },
  {
    icon: "⊕",
    number: "04",
    title: "Technology Solutions",
    description: "Custom software, cloud architecture, API integrations, and AI implementation designed to automate and scale your core operations."
  },
  {
    icon: "◎",
    number: "05",
    title: "Data & Analytics",
    description: "Intelligence dashboards, predictive modelling, and behavioral analytics that surface the insights leaders need to make confident decisions."
  },
  {
    icon: "⟡",
    number: "06",
    title: "Digital Transformation",
    description: "End-to-end business transformation consulting — from process mapping to implementation — that future-proofs your organisation."
  }
];

// Pricing data
const pricing = [
  {
    tier: "Launchpad",
    price: "$1,200",
    period: "per month",
    tagline: "Start with intention.",
    features: [
      "Growth marketing strategy",
      "Brand identity audit",
      "2 channels managed",
      "Monthly analytics report",
      "Email support (48h SLA)"
    ],
    notIncluded: [
      "Customer support systems",
      "Custom tech development",
      "Dedicated account manager"
    ],
    cta: "Get Started",
    featured: false
  },
  {
    tier: "Ascend",
    price: "$3,800",
    period: "per month",
    tagline: "Built for serious growth.",
    features: [
      "Full-funnel marketing campaigns",
      "Brand strategy & positioning",
      "5 channels managed",
      "Customer support infrastructure",
      "Weekly performance reports",
      "CRM integration & setup",
      "Dedicated account manager"
    ],
    notIncluded: ["Custom tech development"],
    cta: "Get Started",
    featured: true
  },
  {
    tier: "Quantum",
    price: "Custom",
    period: "bespoke engagement",
    tagline: "No limits. No ceilings.",
    features: [
      "Everything in Ascend",
      "Custom software development",
      "AI & automation integration",
      "Data analytics & dashboards",
      "Digital transformation roadmap",
      "24/7 priority support",
      "Dedicated team of specialists",
      "Quarterly C-suite reviews"
    ],
    notIncluded: [],
    cta: "Book a Call",
    featured: false
  }
];

// Testimonials data
const testimonials = [
  {
    quote: "OmniQubits didn't just run our campaigns — they rebuilt how we think about growth. Within six months, our CAC dropped by 40% and pipeline tripled.",
    author: "James Mercer",
    role: "CEO, NovaTech Solutions",
    initials: "JM"
  },
  {
    quote: "Their customer support overhaul transformed our CSAT scores from 3.1 to 4.8 in under four months. The systems they built are still running flawlessly today.",
    author: "Soraya Patel",
    role: "COO, Zentra Retail",
    initials: "SP"
  },
  {
    quote: "A rare agency that understands technology as deeply as it understands people. The AI integration they delivered saved us 1,200 hours of manual work per quarter.",
    author: "Ama Koffi",
    role: "CTO, PulseFinance",
    initials: "AK"
  }
];

// Stats
const stats = [
  { value: "200+", label: "Global Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "12+", label: "Countries Served" },
  { value: "5×", label: "Avg. ROI Growth" }
];

// Marquee items
const marqueeItems = [
  "Marketing Strategy", "Customer Experience", "Brand Identity",
  "Technology Solutions", "Growth Engineering", "Data Analytics",
  "Digital Transformation", "AI Integration"
];

export default function HomePage() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", company: "", service: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ text: string; type: "bot" | "user" }[]>([
    { text: "Hello! Welcome to OmniQubits 👋 I'm your virtual assistant. How can I help you today?", type: "bot" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [quickReplies] = useState(["Services", "Pricing", "Get Started", "Talk to Us"]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const sendChatMessage = (text?: string) => {
    const message = text || chatInput;
    if (!message.trim()) return;

    setChatMessages(prev => [...prev, { text: message, type: "user" }]);
    setChatInput("");

    // Simulate bot response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "services": "We offer six core services: Growth Marketing, Brand Strategy, Customer Support Systems, Technology Solutions, Data & Analytics, and Digital Transformation.",
        "pricing": "We have three plans:\n\n• Launchpad — $1,200/mo\n• Ascend — $3,800/mo (Most Popular)\n• Quantum — Custom pricing for enterprises",
        "get started": "Getting started is simple! Just fill out our contact form or email hello@omniqubits.com. We'll schedule a discovery call within 24 hours.",
        "talk to us": "You can reach us at hello@omniqubits.com or use the contact form below. We respond within 24 business hours."
      };

      const lower = message.toLowerCase();
      let response = "For detailed answers, I'd recommend speaking directly with our team at hello@omniqubits.com";

      if (lower.includes("service")) response = responses["services"];
      else if (lower.includes("price") || lower.includes("cost")) response = responses["pricing"];
      else if (lower.includes("start") || lower.includes("begin")) response = responses["get started"];
      else if (lower.includes("talk") || lower.includes("human") || lower.includes("contact")) response = responses["talk to us"];

      setChatMessages(prev => [...prev, { text: response, type: "bot" }]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-obsidian text-cream">
      {/* ═══════════════════════════════════════════════════ HERO ═══════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,169,110,0.06)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(201,169,110,0.04)_0%,transparent_60%),radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(201,169,110,0.04)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,110,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,110,0.03)_1px,transparent_1px)] bg-[length:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-gold/50" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Global Innovation Agency</span>
              <span className="h-px w-10 bg-gold/50" />
            </motion.div>

            {/* Title */}
            <motion.h1 variants={fadeUp} className="font-display text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6">
              Beyond the<br />
              <em className="text-gold font-light">Horizon of</em><br />
              Innovation
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeUp} className="font-display text-xl md:text-2xl text-cream-2 italic opacity-70 mb-6">
              Marketing · Customer Support · Technology Solutions
            </motion.p>

            {/* Description */}
            <motion.p variants={fadeUp} className="max-w-xl mx-auto text-muted-color text-base leading-relaxed mb-10">
              OmniQubits harnesses a limitless, all-encompassing approach to business transformation — inspired by quantum computing, built for the future-forward enterprise.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="bg-gold hover:bg-gold-light text-obsidian text-sm tracking-[0.15em] uppercase">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 text-cream hover:border-gold hover:text-gold">
                <Link href="#contact">Talk to Us</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 md:gap-16 pt-10 border-t border-gold-subtle">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-3xl md:text-4xl text-gold">{stat.value}</div>
                  <div className="text-muted-color text-xs tracking-[0.2em] uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ MARQUEE ═══════════════════════════════════════════════════ */}
      <div className="bg-obsidian-3 border-y border-gold-subtle py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 text-muted-color text-xs tracking-[0.25em] uppercase">
              {item}
              <span className="text-gold">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════ SERVICES ═══════════════════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 bg-obsidian-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-7 bg-gold/60" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">What We Do</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl">
                Precision-Built<br />
                <em className="text-gold font-light">Services</em>
              </h2>
            </div>
            <p className="text-muted-color text-sm leading-relaxed">
              Every service is engineered to compound growth — from acquiring new customers to retaining them with world-class support and cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-subtle border border-gold-subtle">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="bg-obsidian-2 p-8 hover:bg-obsidian-3 transition-colors group relative overflow-hidden"
              >
                {/* Hover line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-11 h-11 border border-gold-subtle flex items-center justify-center text-gold mb-6">
                  {service.icon}
                </div>
                <div className="font-display text-xs tracking-[0.2em] text-gold/50 mb-2">{service.number}</div>
                <h3 className="font-display text-xl text-cream mb-3">{service.title}</h3>
                <p className="text-muted-color text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  Learn More <ArrowRight size={12} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ ABOUT ═══════════════════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-32 bg-obsidian">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Visual */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative h-80 md:h-96"
            >
              <div className="absolute inset-0 border border-gold-subtle bg-obsidian-3 flex items-center justify-center overflow-hidden">
                {/* Animated Orb */}
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(201,169,110,0.25)_0%,rgba(201,169,110,0.05)_50%,transparent_70%)] border border-gold/20 relative animate-pulse-slow">
                  <div className="absolute inset-4 rounded-full border border-gold/15 animate-spin-slow" />
                </div>
              </div>
              {/* Accent box */}
              <div className="absolute bottom-0 right-0 bg-obsidian-4 border border-gold-glow p-6 flex flex-col items-center justify-center">
                <span className="font-display text-3xl text-gold">∞</span>
                <span className="text-muted-color text-xs tracking-[0.18em] uppercase">Possibilities</span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <span className="h-px w-7 bg-gold/60" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Who We Are</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl mb-6">
                A Global Force for<br />
                <em className="text-gold font-light">Business Evolution</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-color text-sm leading-relaxed mb-8">
                OmniQubits was founded on a simple conviction: that the boundaries between marketing, customer experience, and technology should dissolve — because the businesses that win are those that treat them as one unified discipline.
              </motion.p>
              <motion.ul variants={fadeUp} className="space-y-3">
                {[
                  "We operate across 12+ countries, partnering with startups, scale-ups, and enterprises.",
                  "Our interdisciplinary teams combine creative strategists, engineers, data scientists, and growth operators.",
                  "Every engagement begins with deep diagnostic work — we don't prescribe solutions until we understand the full picture.",
                  "Our approach is inspired by quantum principles: superposition of ideas, entanglement of strategy and execution."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-color text-sm">
                    <span className="text-gold text-xs mt-1">◆</span>
                    {item}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ PRICING ═══════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24 md:py-32 bg-obsidian-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-7 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Investment</span>
              <span className="h-px w-7 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Transparent <em className="text-gold font-light">Pricing</em>
            </h2>
            <p className="text-muted-color text-sm max-w-md mx-auto">
              Choose the engagement model that fits your ambitions. Every plan includes dedicated account management and monthly performance reviews.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`border ${plan.featured ? "border-gold bg-obsidian-3" : "border-gold-subtle bg-obsidian"} p-8 relative transition-colors hover:border-gold-glow ${plan.featured ? "-translate-y-2" : ""}`}
              >
                {plan.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gold text-obsidian text-xs tracking-[0.2em] uppercase px-4 py-1">
                    Most Popular
                  </div>
                )}
                <div className="text-gold text-xs tracking-[0.25em] uppercase mb-2">{plan.tier}</div>
                <div className="font-display text-4xl text-cream mb-1">{plan.price}{plan.price !== "Custom" && <sup className="text-gold text-lg">$</sup>}</div>
                <div className="text-muted-color text-xs tracking-[0.05em] mb-6 pb-6 border-b border-gold-subtle">{plan.period}</div>
                <div className="font-display text-lg italic text-cream-2 mb-6">{plan.tagline}</div>

                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-color text-sm">
                      <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-color/35 text-sm line-through">
                      <span className="text-muted-color/35">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full text-xs tracking-[0.15em] uppercase ${plan.featured ? "bg-gold hover:bg-gold-light text-obsidian" : "border border-gold-glow text-cream hover:border-gold hover:text-gold"}`}
                  variant={plan.featured ? "default" : "outline"}
                  asChild
                >
                  <Link href="#contact">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ TESTIMONIALS ═══════════════════════════════════════════════════ */}
      <section id="testimonials" className="py-24 md:py-32 bg-obsidian overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-7 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Client Voices</span>
              <span className="h-px w-7 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              Words from <em className="text-gold font-light">Those We Serve</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border border-gold-subtle bg-obsidian-2 p-6 hover:border-gold-glow transition-colors"
              >
                <div className="font-display text-5xl text-gold/20 leading-none mb-4">&quot;</div>
                <p className="font-display text-base italic text-cream-2 leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gold-subtle">
                  <div className="w-10 h-10 rounded-full border border-gold-glow bg-obsidian-4 flex items-center justify-center font-display text-gold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-cream text-sm">{testimonial.author}</div>
                    <div className="text-muted-color text-xs">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex text-gold text-xs tracking-[0.2em] mt-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={10} fill="currentColor" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ CONTACT ═══════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32 bg-obsidian-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <span className="h-px w-7 bg-gold/60" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Let&apos;s Begin</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl mb-6">
                Start Your<br />
                <em className="text-gold font-light">Transformation</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-color text-sm leading-relaxed mb-10">
                Whether you&apos;re a startup ready to launch or an enterprise looking to evolve — we&apos;d love to hear your story. Reach out and let&apos;s craft something exceptional together.
              </motion.p>

              <div className="space-y-6">
                <motion.div variants={fadeUp} className="flex gap-4 pb-6 border-b border-gold-subtle">
                  <div className="w-9 h-9 border border-gold-glow flex items-center justify-center text-gold shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Email</div>
                    <div className="text-cream-2 text-sm">hello@omniqubits.com</div>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex gap-4 pb-6 border-b border-gold-subtle">
                  <div className="w-9 h-9 border border-gold-glow flex items-center justify-center text-gold shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Global HQ</div>
                    <div className="text-cream-2 text-sm">Serving clients across 12+ countries worldwide</div>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex gap-4">
                  <div className="w-9 h-9 border border-gold-glow flex items-center justify-center text-gold shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <div className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Response Time</div>
                    <div className="text-cream-2 text-sm">Within 24 business hours</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              onSubmit={handleFormSubmit}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-muted-color text-xs tracking-[0.2em] uppercase">First Name</label>
                  <Input
                    placeholder="Alexandra"
                    className="bg-obsidian border-gold-subtle text-cream placeholder:text-muted-color/50"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Last Name</label>
                  <Input
                    placeholder="Chen"
                    className="bg-obsidian border-gold-subtle text-cream placeholder:text-muted-color/50"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Business Email</label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="bg-obsidian border-gold-subtle text-cream placeholder:text-muted-color/50"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Company</label>
                <Input
                  placeholder="Your Company Name"
                  className="bg-obsidian border-gold-subtle text-cream placeholder:text-muted-color/50"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Service Interest</label>
                <select
                  className="w-full bg-obsidian border border-gold-subtle text-cream px-4 py-2 text-sm focus:outline-none focus:border-gold"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Select a service…</option>
                  <option>Growth Marketing</option>
                  <option>Brand Strategy</option>
                  <option>Customer Support Systems</option>
                  <option>Technology Solutions</option>
                  <option>Data & Analytics</option>
                  <option>Digital Transformation</option>
                  <option>Full-Suite Engagement</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Tell Us About Your Goals</label>
                <Textarea
                  placeholder="Describe your current challenges and what success looks like for you…"
                  className="bg-obsidian border-gold-subtle text-cream placeholder:text-muted-color/50 min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-obsidian text-sm tracking-[0.15em] uppercase"
              >
                {formSubmitted ? "Message Sent!" : "Send Message"}
              </Button>
              {formSubmitted && (
                <p className="text-green-400 text-xs tracking-[0.05em] text-center">✓ Message received. We&apos;ll be in touch within 24 hours.</p>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ FOOTER ═══════════════════════════════════════════════════ */}
      <footer className="bg-obsidian border-t border-gold-subtle py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-gold-subtle">
            <div>
              <div className="font-display text-2xl mb-4">Omni<span className="text-gold">Qubits</span></div>
              <p className="text-muted-color text-sm leading-relaxed">
                A limitless, all-encompassing approach to marketing, customer support, and technology — for the businesses of tomorrow.
              </p>
            </div>
            <div>
              <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-color">
                <li><Link href="#services" className="hover:text-gold transition-colors">Growth Marketing</Link></li>
                <li><Link href="#services" className="hover:text-gold transition-colors">Brand Strategy</Link></li>
                <li><Link href="#services" className="hover:text-gold transition-colors">Customer Support</Link></li>
                <li><Link href="#services" className="hover:text-gold transition-colors">Technology</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-color">
                <li><Link href="#about" className="hover:text-gold transition-colors">About Us</Link></li>
                <li><Link href="#pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
                <li><Link href="#testimonials" className="hover:text-gold transition-colors">Client Stories</Link></li>
                <li><Link href="#contact" className="hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-color">
                <li><a href="#" className="hover:text-gold transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
                <li><a href="mailto:hello@omniqubits.com" className="hover:text-gold transition-colors">hello@omniqubits.com</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-color/50 text-xs tracking-[0.05em]">© 2026 OmniQubits. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-muted-color/50 tracking-[0.05em]">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════════════════ CHATBOT ═══════════════════════════════════════════════════ */}
      <div className="fixed bottom-8 right-8 z-50">
        {/* Chat Window */}
        <div className={`absolute bottom-16 right-0 w-80 bg-obsidian-2 border border-gold-glow rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col ${chatOpen ? "flex" : "hidden"}`}>
          {/* Header */}
          <div className="bg-obsidian-3 border-b border-gold-subtle p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(201,169,110,0.4),rgba(201,169,110,0.1))] border border-gold-glow flex items-center justify-center font-display text-gold text-xs">
              OQ
            </div>
            <div className="flex-1">
              <div className="text-cream text-sm">OmniQubits AI</div>
              <div className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Online · Ready to help
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-muted-color hover:text-cream transition-colors">
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 max-h-72 overflow-y-auto">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`max-w-[85%] p-3 text-sm leading-relaxed rounded-sm ${msg.type === "bot" ? "bg-obsidian-4 border border-gold-subtle text-cream-2 self-start rounded-tl-sm" : "bg-gold-dark text-cream self-end rounded-tr-sm"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {chatMessages.length === 1 && (
            <div className="flex flex-wrap gap-2 px-4 pb-3">
              {quickReplies.map((reply, i) => (
                <button
                  key={i}
                  onClick={() => sendChatMessage(reply)}
                  className="border border-gold-subtle text-gold text-xs px-3 py-1 rounded-full hover:bg-gold-subtle transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex border-t border-gold-subtle">
            <input
              type="text"
              placeholder="Type your message…"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendChatMessage()}
              className="flex-1 bg-obsidian border-none text-cream px-4 py-3 text-sm focus:outline-none placeholder:text-muted-color/50"
            />
            <button onClick={() => sendChatMessage()} className="bg-gold text-obsidian px-4 hover:bg-gold-light transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Chat Toggle */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(201,169,110,0.35)] hover:scale-110 hover:bg-gold-light transition-all"
        >
          {chatOpen ? <X size={20} className="text-obsidian" /> : <MessageCircle size={20} className="text-obsidian" />}
        </button>
      </div>
    </div>
  );
}