import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, FadeUpGroup, FadeUpItem } from "@/components/shared/FadeUp";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for OmniQubits services. Choose from Launchpad, Ascend, or Quantum — plans built for startups, scale-ups, and enterprise organisations.",
};

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const pricing = [
  {
    tier: "Launchpad",
    price: "1,200",
    period: "per month · billed monthly",
    tagline: "Start with intention.",
    featured: false,
    cta: "Get Started",
    features: [
      "Growth marketing strategy",
      "Brand identity audit",
      "2 channels managed",
      "Monthly analytics report",
      "Email support (48h SLA)",
    ],
    notIncluded: [
      "Customer support systems",
      "Custom tech development",
      "Dedicated account manager",
    ],
  },
  {
    tier: "Ascend",
    price: "3,800",
    period: "per month · billed monthly",
    tagline: "Built for serious growth.",
    featured: true,
    cta: "Get Started",
    features: [
      "Full-funnel marketing campaigns",
      "Brand strategy & positioning",
      "5 channels managed",
      "Customer support infrastructure",
      "Weekly performance reports",
      "CRM integration & setup",
      "Dedicated account manager",
    ],
    notIncluded: ["Custom tech development"],
  },
  {
    tier: "Quantum",
    price: "Custom",
    period: "bespoke engagement · enterprise",
    tagline: "No limits. No ceilings.",
    featured: false,
    cta: "Book a Call",
    features: [
      "Everything in Ascend",
      "Custom software development",
      "AI & automation integration",
      "Data analytics & dashboards",
      "Digital transformation roadmap",
      "24/7 priority support",
      "Dedicated team of specialists",
      "Quarterly C-suite reviews",
    ],
    notIncluded: [],
  },
];

const included = [
  {
    title: "Dedicated Team",
    description: "Every client gets a dedicated team with clear points of contact and accountability.",
  },
  {
    title: "Transparent Reporting",
    description: "Monthly performance reports with clear metrics, insights, and actionable recommendations.",
  },
  {
    title: "Strategic Guidance",
    description: "Ongoing strategic consultation to ensure your initiatives stay aligned with business goals.",
  },
];

const faqs = [
  { question: "How long does it take to see results?",    answer: "Most clients see initial improvements within 30–60 days. Significant results typically compound over 3–6 months as strategies mature and data accumulates." },
  { question: "Can I upgrade my plan later?",             answer: "Absolutely. You can upgrade at any time. We'll prorate your existing work and seamlessly transition you to the new tier with no disruption." },
  { question: "What industries do you work with?",        answer: "We've served clients across fintech, e-commerce, SaaS, healthcare, retail, and professional services. Our quantum-inspired approach adapts to any sector." },
  { question: "Do you offer short-term engagements?",     answer: "Our minimum engagement is 3 months to allow for meaningful strategy development and execution. For enterprise clients, we offer custom long-term partnerships." },
  { question: "What's included in the onboarding?",       answer: "Every engagement includes a comprehensive discovery phase: business analysis, competitor research, audience profiling, and strategy development — at no extra cost." },
  { question: "How do you measure success?",              answer: "We establish KPIs aligned with your business goals from day one. Regular reporting covers all metrics, with transparent ROI tracking on every initiative." },
];

// ─────────────────────────────────────────────────────────────
// Page — Server Component (no "use client" required)
// ─────────────────────────────────────────────────────────────
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-obsidian text-cream">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,169,110,0.06)_0%,transparent_70%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Investment</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Transparent<br />
              <em className="text-gold font-light">Pricing</em>
            </h1>
            <p className="text-muted-oq text-lg max-w-2xl mx-auto leading-relaxed">
              Choose the engagement model that fits your ambitions. Every plan includes dedicated
              account management and monthly performance reviews.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Pricing Cards ─────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUpGroup className="grid md:grid-cols-3 gap-6 items-start" stagger={0.1}>
            {pricing.map((plan) => (
              <FadeUpItem key={plan.tier}>
                <div
                  className={`relative border flex flex-col transition-colors ${
                    plan.featured
                      ? "border-gold bg-obsidian-3 shadow-[0_0_40px_rgba(201,169,110,0.1)] md:-translate-y-2"
                      : "border-gold/15 bg-obsidian hover:border-gold/35"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gold text-obsidian text-xs tracking-[0.2em] uppercase px-4 py-1 whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8">
                    <div className="text-gold text-xs tracking-[0.25em] uppercase mb-2">{plan.tier}</div>

                    {/* Price — $ prefix only for numeric prices */}
                    <div className="flex items-start gap-0.5 mb-1">
                      {plan.price !== "Custom" && (
                        <span className="font-display text-gold text-xl mt-2">$</span>
                      )}
                      <span className="font-display text-4xl text-cream leading-none">
                        {plan.price}
                      </span>
                    </div>

                    <div className="text-muted-oq text-xs tracking-wide mb-6 pb-6 border-b border-gold/15">
                      {plan.period}
                    </div>
                    <div className="font-display text-lg italic text-cream-2 mb-6">{plan.tagline}</div>

                    <ul className="space-y-2.5 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-muted-oq text-sm">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold shrink-0 mt-0.5">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                      {plan.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-muted-oq/30 text-sm line-through decoration-muted-oq/20">
                          <span className="shrink-0 mt-0.5 w-3.5 text-center text-xs">—</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-8 pb-8 mt-auto">
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
                  </div>
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── Always Included ───────────────────────────────── */}
      <section className="py-24 px-6 bg-obsidian-2">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Always Included</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              The OmniQubits<br />
              <em className="text-gold font-light">Guarantee</em>
            </h2>
          </FadeUp>

          <FadeUpGroup className="grid md:grid-cols-3 gap-6" stagger={0.1}>
            {included.map((item) => (
              <FadeUpItem key={item.title}>
                <div className="text-center p-6">
                  <div className="w-12 h-12 border border-gold/35 mx-auto mb-4 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg text-cream mb-2">{item.title}</h3>
                  <p className="text-muted-oq text-sm">{item.description}</p>
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Questions</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              Common <em className="text-gold font-light">Inquiries</em>
            </h2>
          </FadeUp>

          <FadeUpGroup className="space-y-4" stagger={0.06}>
            {faqs.map((faq) => (
              <FadeUpItem key={faq.question}>
                <div className="border border-gold/15 bg-obsidian-2 p-6 hover:border-gold/35 transition-colors">
                  <h3 className="font-display text-lg text-cream mb-2">{faq.question}</h3>
                  <p className="text-muted-oq text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-obsidian-2">
        <FadeUp className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Not Sure Which<br />
            <em className="text-gold font-light">Plan is Right?</em>
          </h2>
          <p className="text-muted-oq text-sm mb-10">
            Book a free consultation and we&apos;ll help you find the perfect fit for your business goals.
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
              className="border border-gold/35 text-cream px-8 py-4 text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}
