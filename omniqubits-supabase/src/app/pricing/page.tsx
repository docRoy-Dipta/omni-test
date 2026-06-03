"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    tier: "Launchpad",
    price: "1,200",
    period: "per month",
    tagline: "Start with intention.",
    description: "Perfect for startups and small businesses looking to establish their foundation.",
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
      "Dedicated account manager",
      "CRM integration",
      "AI implementation"
    ],
    cta: "Get Started",
    featured: false
  },
  {
    tier: "Ascend",
    price: "3,800",
    period: "per month",
    tagline: "Built for serious growth.",
    description: "Ideal for scaling businesses ready to accelerate their growth trajectory.",
    features: [
      "Full-funnel marketing campaigns",
      "Brand strategy & positioning",
      "5 channels managed",
      "Customer support infrastructure",
      "Weekly performance reports",
      "CRM integration & setup",
      "Dedicated account manager",
      "Priority support"
    ],
    notIncluded: [
      "Custom tech development"
    ],
    cta: "Get Started",
    featured: true
  },
  {
    tier: "Quantum",
    price: "Custom",
    period: "bespoke engagement",
    tagline: "No limits. No ceilings.",
    description: "For enterprises requiring comprehensive, customized solutions.",
    features: [
      "Everything in Ascend",
      "Custom software development",
      "AI & automation integration",
      "Data analytics & dashboards",
      "Digital transformation roadmap",
      "24/7 priority support",
      "Dedicated team of specialists",
      "Quarterly C-suite reviews",
      "Custom integrations",
      "SLA guarantees"
    ],
    notIncluded: [],
    cta: "Book a Call",
    featured: false
  }
];

const faqs = [
  {
    question: "How does the onboarding process work?",
    answer: "Once you sign up, we schedule a comprehensive discovery session to understand your business, goals, and challenges. Within the first week, you&apos;ll receive a tailored strategy document and our team will begin implementation. We assign a dedicated account manager who serves as your single point of contact."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes! You can upgrade your plan at any time with prorated pricing. Downgrades are possible at the end of your billing cycle. We want you to have the right level of support for your current needs."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and for annual plans, we can also accommodate invoice-based payments. All plans are billed monthly or annually."
  },
  {
    question: "Is there a free trial?",
    answer: "We offer a free 30-minute consultation to discuss your needs and see if we&apos;re a good fit. For specific services, we can discuss pilot programs tailored to your requirements."
  },
  {
    question: "What happens if I cancel?",
    answer: "You can cancel at any time with 30 days notice. We&apos;ll ensure a smooth transition and provide all your data and assets. Many clients return to us when they&apos;re ready to scale again."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for first-time clients. If you&apos;re not satisfied with our work in the first month, we provide a full refund."
  }
];

const includedFeatures = [
  { icon: "📊", title: "Analytics", description: "Comprehensive reporting and insights" },
  { icon: "🎯", title: "Strategy", description: "Custom growth roadmap" },
  { icon: "👥", title: "Support", description: "Dedicated account management" },
  { icon: "⚡", title: "Speed", description: "Fast turnaround times" },
  { icon: "🔒", title: "Security", description: "Enterprise-grade data protection" },
  { icon: "🌍", title: "Global", description: "Worldwide expertise and reach" }
];

export default function PricingPage() {
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
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Investment</span>
              <span className="h-px w-12 bg-gold/60" />
            </motion.div>

            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Transparent <em className="text-gold font-light">Pricing</em>
            </motion.h1>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-muted-color text-lg max-w-2xl mx-auto leading-relaxed">
              Choose the engagement model that fits your ambitions. Every plan includes dedicated account management and monthly performance reviews.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border ${plan.featured ? "border-gold bg-obsidian-3" : "border-gold-subtle bg-obsidian"} p-8 relative transition-all hover:border-gold-glow ${plan.featured ? "-translate-y-2" : ""}`}
              >
                {plan.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gold text-obsidian text-xs tracking-[0.2em] uppercase px-4 py-1">
                    Most Popular
                  </div>
                )}
                <div className="text-gold text-xs tracking-[0.25em] uppercase mb-2">{plan.tier}</div>
                <div className="font-display text-4xl text-cream mb-1">
                  {plan.price === "Custom" ? plan.price : <>${plan.price}</>}
                </div>
                <div className="text-muted-color text-xs tracking-[0.05em] mb-4">{plan.period}</div>
                <div className="font-display text-lg italic text-cream-2 mb-4">{plan.tagline}</div>
                <p className="text-muted-color text-sm mb-6">{plan.description}</p>

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
                  className={`w-full text-sm tracking-[0.15em] uppercase ${plan.featured ? "bg-gold hover:bg-gold-light text-obsidian" : "border border-gold-glow text-cream hover:border-gold hover:text-gold"}`}
                  variant={plan.featured ? "default" : "outline"}
                  asChild
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-obsidian-2">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Included</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Every Plan <em className="text-gold font-light">Includes</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {includedFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-obsidian border border-gold-subtle p-6 text-center"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-display text-lg text-cream mb-1">{feature.title}</h3>
                <p className="text-muted-color text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">FAQ</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              Common <em className="text-gold font-light">Questions</em>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-obsidian-2 border border-gold-subtle p-6"
              >
                <h3 className="font-display text-lg text-cream mb-2">{faq.question}</h3>
                <p className="text-muted-color text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-obsidian-2">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Still <em className="text-gold font-light">Uncertain</em>?
          </h2>
          <p className="text-muted-color text-sm mb-10">
            Schedule a free consultation and we&apos;ll help you find the right plan for your business.
          </p>
          <Button asChild className="bg-gold hover:bg-gold-light text-obsidian">
            <Link href="/contact">Schedule Free Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}