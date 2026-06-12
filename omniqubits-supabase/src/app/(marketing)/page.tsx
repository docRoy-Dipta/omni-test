"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/shared/FadeUp";

// ─────────────────────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─────────────────────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────────────────────
const services = [
  { icon: "✦", number: "01", title: "Growth Marketing",         description: "Full-funnel campaigns that convert. SEO, paid media, content, email automation, and performance analytics working in concert to multiply your reach." },
  { icon: "◈", number: "02", title: "Brand Strategy",           description: "Identity systems, positioning frameworks, and messaging architecture that carve out an unassailable place in your market's memory." },
  { icon: "⬡", number: "03", title: "Customer Support Systems", description: "Omnichannel support infrastructure — live chat, AI triage, CRM integration, and SLA management — that turns support into a loyalty engine." },
  { icon: "⊕", number: "04", title: "Technology Solutions",     description: "Custom software, cloud architecture, API integrations, and AI implementation designed to automate and scale your core operations." },
  { icon: "◎", number: "05", title: "Data & Analytics",         description: "Intelligence dashboards, predictive modelling, and behavioral analytics that surface the insights leaders need to make confident decisions." },
  { icon: "⟡", number: "06", title: "Digital Transformation",   description: "End-to-end business transformation consulting — from process mapping to implementation — that future-proofs your organisation." },
];

const pricing = [
  {
    tier: "Launchpad", price: "$1,200", period: "per month", tagline: "Start with intention.",
    featured: false, cta: "Get Started",
    features:    ["Growth marketing strategy", "Brand identity audit", "2 channels managed", "Monthly analytics report", "Email support (48h SLA)"],
    notIncluded: ["Customer support systems", "Custom tech development", "Dedicated account manager"],
  },
  {
    tier: "Ascend", price: "$3,800", period: "per month", tagline: "Built for serious growth.",
    featured: true, cta: "Get Started",
    features:    ["Full-funnel marketing campaigns", "Brand strategy & positioning", "5 channels managed", "Customer support infrastructure", "Weekly performance reports", "CRM integration & setup", "Dedicated account manager"],
    notIncluded: ["Custom tech development"],
  },
  {
    tier: "Quantum", price: "Custom", period: "bespoke engagement", tagline: "No limits. No ceilings.",
    featured: false, cta: "Book a Call",
    features:    ["Everything in Ascend", "Custom software development", "AI & automation integration", "Data analytics & dashboards", "Digital transformation roadmap", "24/7 priority support", "Dedicated team of specialists", "Quarterly C-suite reviews"],
    notIncluded: [],
  },
];

const testimonials = [
  { quote: "OmniQubits didn't just run our campaigns — they rebuilt how we think about growth. Within six months, our CAC dropped by 40% and pipeline tripled.",                               author: "James Mercer", role: "CEO, NovaTech Solutions", initials: "JM" },
  { quote: "Their customer support overhaul transformed our CSAT scores from 3.1 to 4.8 in under four months. The systems they built are still running flawlessly today.",                    author: "Soraya Patel", role: "COO, Zentra Retail",      initials: "SP" },
  { quote: "A rare agency that understands technology as deeply as it understands people. The AI integration they delivered saved us 1,200 hours of manual work per quarter.",                 author: "Ama Koffi",    role: "CTO, PulseFinance",       initials: "AK" },
];

const stats        = [{ value: "200+", label: "Global Clients" }, { value: "98%", label: "Client Retention" }, { value: "12+", label: "Countries Served" }, { value: "5×", label: "Avg. ROI Growth" }];
const marqueeItems = ["Marketing Strategy", "Customer Experience", "Brand Identity", "Technology Solutions", "Growth Engineering", "Data Analytics", "Digital Transformation", "AI Integration"];

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,140,0,0.06)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(255,140,0,0.04)_0%,transparent_60%),radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(255,140,0,0.04)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.03)_1px,transparent_1px)] bg-[length:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-orange-500/50" />
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Global Innovation Agency</span>
              <span className="h-px w-10 bg-orange-500/50" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6">
              Beyond the<br />
              <em className="text-orange-500 font-light">Horizon of</em><br />
              Innovation
            </motion.h1>

            <motion.p variants={fadeUp} className="font-display text-xl md:text-2xl text-black/80 italic opacity-70 mb-6">
              Marketing · Customer Support · Technology Solutions
            </motion.p>

            <motion.p variants={fadeUp} className="max-w-xl mx-auto text-black/60 text-base leading-relaxed mb-10">
              OmniQubits harnesses a limitless, all-encompassing approach to business transformation — inspired by quantum computing, built for the future-forward enterprise.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-500-light text-white text-sm tracking-[0.15em] uppercase">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-orange-500/50 text-black hover:border-orange-500 hover:text-orange-600">
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 md:gap-16 pt-10 border-t border-orange-500-subtle">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl md:text-4xl text-orange-500">{stat.value}</div>
                  <div className="text-muted-color text-xs tracking-[0.2em] uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────── */}
      <div className="bg-white-3 border-y border-orange-500-subtle py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4 text-muted-color text-xs tracking-[0.25em] uppercase">
              {item}
              <span className="text-orange-500 text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Services ──────────────────────────────────────── */}
      <section id="services" className="py-24 md:py-32 bg-white-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-7 bg-orange-500/60" />
                <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">What We Do</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl">
                Precision-Built<br />
                <em className="text-orange-500 font-light">Services</em>
              </h2>
            </div>
            <p className="text-muted-color text-sm leading-relaxed">
              Every service is engineered to compound growth — from acquiring new customers to retaining them with world-class support and cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-orange-500-subtle border border-orange-500-subtle">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="bg-white-2 p-8 hover:bg-white-3 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-11 h-11 border border-orange-500-subtle flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-obsidian transition-colors">
                  {svc.icon}
                </div>
                <div className="font-display text-xs tracking-[0.2em] text-orange-500/50 mb-2">{svc.number}</div>
                <h3 className="font-display text-xl text-black mb-3">{svc.title}</h3>
                <p className="text-muted-color text-sm leading-relaxed mb-4">{svc.description}</p>
                <span className="inline-flex items-center gap-2 text-orange-500 text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  Learn More <ArrowRight size={12} />
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 border border-orange-500/35 text-black hover:border-orange-500 hover:text-orange-500 px-7 py-3 text-xs tracking-[0.15em] uppercase transition-colors">
              View All Services <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={fadeUp}
              className="relative h-80 md:h-96"
            >
              <div className="absolute inset-0 border border-orange-500-subtle bg-white-3 flex items-center justify-center overflow-hidden">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,140,0,0.25)_0%,rgba(255,140,0,0.05)_50%,transparent_70%)] border border-orange-500/20 relative">
                  <div className="absolute inset-4 rounded-full border border-orange-500/15" />
                  <div className="absolute inset-0 flex items-center justify-center font-display text-orange-500/20 text-5xl">∞</div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-white-4 border border-orange-500-glow p-6 flex flex-col items-center justify-center">
                <span className="font-display text-3xl text-orange-500">∞</span>
                <span className="text-muted-color text-xs tracking-[0.18em] uppercase">Possibilities</span>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <span className="h-px w-7 bg-orange-500/60" />
                <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Who We Are</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl mb-6">
                A Global Force for<br />
                <em className="text-orange-500 font-light">Business Evolution</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-color text-sm leading-relaxed mb-8">
                OmniQubits was founded on a simple conviction: that the boundaries between marketing, customer experience, and technology should dissolve — because the businesses that win treat them as one unified discipline.
              </motion.p>
              <motion.ul variants={fadeUp} className="space-y-3">
                {[
                  "Operating across 12+ countries with startups, scale-ups, and enterprises.",
                  "Interdisciplinary teams of strategists, engineers, data scientists, and growth operators.",
                  "Every engagement starts with deep diagnostic work before we prescribe any solution.",
                  "Inspired by quantum principles: superposition of ideas, entanglement of strategy and execution.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-color text-sm">
                    <span className="text-orange-500 text-xs mt-1 shrink-0">◆</span>
                    {item}
                  </li>
                ))}
              </motion.ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────── */}
      <section id="pricing" className="py-24 md:py-32 bg-white-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-7 bg-orange-500/60" />
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Investment</span>
              <span className="h-px w-7 bg-orange-500/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Transparent <em className="text-orange-500 font-light">Pricing</em>
            </h2>
            <p className="text-muted-color text-sm max-w-md mx-auto">
              Choose the engagement model that fits your ambitions. Every plan includes dedicated account management and monthly performance reviews.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp}
                className={`border relative flex flex-col transition-colors ${
                  plan.featured
                    ? "border-orange-500 bg-white-3 shadow-[0_0_40px_rgba(255,140,0,0.1)] md:-translate-y-2"
                    : "border-orange-500-subtle bg-white hover:border-orange-500/40"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-orange-500 text-obsidian text-xs tracking-[0.2em] uppercase px-4 py-1 whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="text-orange-500 text-xs tracking-[0.25em] uppercase mb-2">{plan.tier}</div>
                  <div className="flex items-start gap-0.5 mb-1">
                    {plan.price !== "Custom" && <span className="font-display text-orange-500 text-xl mt-1.5">$</span>}
                    <span className="font-display text-4xl text-black leading-none">
                      {plan.price.replace("$", "")}
                    </span>
                  </div>
                  <div className="text-muted-color text-xs mb-6 pb-6 border-b border-orange-500-subtle">{plan.period}</div>
                  <div className="font-display text-lg italic text-black-2 mb-6">{plan.tagline}</div>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-muted-color text-sm">
                        <CheckCircle2 size={14} className="text-orange-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-muted-color/30 text-sm line-through decoration-muted-color/20">
                        <span className="shrink-0 mt-0.5 w-3.5 text-center text-xs">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8 mt-auto">
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 text-xs tracking-[0.15em] uppercase transition-colors ${
                      plan.featured
                        ? "bg-orange-500 hover:bg-orange-500-light text-obsidian"
                        : "border border-orange-500/35 text-black hover:border-orange-500 hover:text-orange-500"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section id="testimonials" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-7 bg-orange-500/60" />
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Client Voices</span>
              <span className="h-px w-7 bg-orange-500/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              Words from <em className="text-orange-500 font-light">Those We Serve</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp}
                className="border border-orange-500-subtle bg-white-2 p-6 hover:border-orange-500-glow transition-colors flex flex-col"
              >
                <div className="font-display text-5xl text-orange-500/20 leading-none mb-4">&quot;</div>
                <p className="font-display text-base italic text-black-2 leading-relaxed flex-1 mb-6">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-orange-500-subtle">
                  <div className="w-10 h-10 rounded-full border border-orange-500-glow bg-white-4 flex items-center justify-center font-display text-orange-500 text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-black text-sm">{t.author}</div>
                    <div className="text-muted-color text-xs">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mt-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={10} className="text-orange-500 fill-orange-500" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/clients" className="inline-flex items-center gap-2 border border-orange-500/35 text-black hover:border-orange-500 hover:text-orange-500 px-7 py-3 text-xs tracking-[0.15em] uppercase transition-colors">
              Read All Stories <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 bg-white-2">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-orange-500/60" />
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Let&apos;s Begin</span>
              <span className="h-px w-12 bg-orange-500/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Start Your<br />
              <em className="text-orange-500 font-light">Transformation</em>
            </h2>
            <p className="text-muted-oq text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you&apos;re a startup ready to launch or an enterprise looking to evolve — we&apos;d love to hear your story. Reach out and let&apos;s craft something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-orange-500 text-obsidian px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-orange-500-light hover:-translate-y-0.5 transition-all">
                Get in Touch
              </Link>
              <Link href="/services" className="border border-orange-500/35 text-black px-8 py-4 text-sm tracking-[0.15em] uppercase hover:border-orange-500 hover:text-orange-500 hover:-translate-y-0.5 transition-all">
                Explore Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
