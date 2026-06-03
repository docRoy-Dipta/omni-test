"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Pricing Page - Enterprise-grade tiered pricing cards
 * Design matches omniqubits.html luxury theme.
 */

const pricing = [
  {
    tier: "Launchpad",
    price: "$1,200",
    period: "per month · billed monthly",
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
    period: "per month · billed monthly",
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
    period: "bespoke engagement · enterprise",
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

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Most clients see initial improvements within 30-60 days. Significant results typically compound over 3-6 months as strategies mature and data accumulates."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade at any time. We'll prorate your existing work and seamlessly transition you to the new tier with no disruption."
  },
  {
    question: "What industries do you work with?",
    answer: "We've served clients across fintech, e-commerce, SaaS, healthcare, retail, and professional services. Our quantum-inspired approach adapts to any sector."
  },
  {
    question: "Do you offer short-term engagements?",
    answer: "Our minimum engagement is 3 months to allow for meaningful strategy development and execution. For enterprise clients, we offer custom long-term partnerships."
  },
  {
    question: "What's included in the onboarding process?",
    answer: "Every new engagement includes a comprehensive discovery phase: business analysis, competitor research, audience profiling, and strategy development — at no extra cost."
  },
  {
    question: "How do you measure success?",
    answer: "We establish KPIs aligned with your business goals from day one. Regular reporting covers all metrics, with transparent ROI tracking on every initiative."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function PricingPage() {
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
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Investment</span>
              <span className="h-px w-12 bg-gold/60" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Transparent<br />
              <em className="text-gold font-light">Pricing</em>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted-oq text-lg max-w-2xl mx-auto leading-relaxed">
              Choose the engagement model that fits your ambitions. Every plan includes dedicated
              account management and monthly performance reviews.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative border ${plan.featured ? "border-gold bg-obsidian-3" : "border-gold/15 bg-obsidian"} p-8 transition-all hover:border-gold/35 ${plan.featured ? "-translate-y-2" : ""}`}
              >
                {plan.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gold text-obsidian text-xs tracking-[0.2em] uppercase px-4 py-1">
                    Most Popular
                  </div>
                )}
                <div className="text-gold text-xs tracking-[0.25em] uppercase mb-2">{plan.tier}</div>
                <div className="font-display text-4xl text-cream mb-1">
                  {plan.price}
                  {plan.price !== "Custom" && <sup className="text-gold text-lg ml-0.5">$</sup>}
                </div>
                <div className="text-muted-oq text-xs tracking-wide mb-6 pb-6 border-b border-gold/15">{plan.period}</div>
                <div className="font-display text-lg italic text-cream-2 mb-6">{plan.tagline}</div>

                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-oq text-sm">
                      <span className="text-gold text-xs mt-1">—</span>
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-oq/35 text-sm line-through">
                      <span className="text-muted-oq/35 text-xs mt-1">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 text-xs tracking-[0.15em] uppercase transition-all ${
                    plan.featured
                      ? "bg-gold text-obsidian hover:bg-gold-light"
                      : "border border-gold/35 text-cream hover:border-gold hover:text-gold"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-4 bg-obsidian-2">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Always Included</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              The OmniQubits<br />
              <em className="text-gold font-light">Guarantee</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Dedicated Team",
                description: "Every client gets a dedicated team with clear points of contact and accountability."
              },
              {
                title: "Transparent Reporting",
                description: "Monthly performance reports with clear metrics, insights, and actionable recommendations."
              },
              {
                title: "Strategic Guidance",
                description: "Ongoing strategic consultation to ensure your initiatives stay aligned with business goals."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 border border-gold/35 mx-auto mb-4 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-cream mb-2">{item.title}</h3>
                <p className="text-muted-oq text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Questions</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              Common <em className="text-gold font-light">Inquiries</em>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-gold/15 bg-obsidian-2 p-6 hover:border-gold/35 transition-all"
              >
                <h3 className="font-display text-lg text-cream mb-2">{faq.question}</h3>
                <p className="text-muted-oq text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-obsidian-2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Not Sure Which<br />
            <em className="text-gold font-light">Plan is Right?</em>
          </h2>
          <p className="text-muted-oq text-sm mb-10">
            Book a free consultation and we'll help you find the perfect fit for your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-obsidian px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all"
            >
              Book a Call
            </Link>
            <Link
              href="/services"
              className="border border-gold/35 text-cream px-8 py-4 text-sm font-normal tracking-[0.15em] uppercase hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}