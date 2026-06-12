import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, FadeUpGroup, FadeUpItem } from "@/components/shared/FadeUp";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Hear from the leaders and innovators who've partnered with OmniQubits to transform their businesses across 12+ countries.",
};

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:    "OmniQubits didn't just run our campaigns — they rebuilt how we think about growth. Within six months, our CAC dropped by 40% and pipeline tripled.",
    author:   "James Mercer",
    role:     "CEO, NovaTech Solutions",
    country:  "USA",
    initials: "JM",
    industry: "Fintech",
  },
  {
    quote:    "Their customer support overhaul transformed our CSAT scores from 3.1 to 4.8 in under four months. The systems they built are still running flawlessly today.",
    author:   "Soraya Patel",
    role:     "COO, Zentra Retail",
    country:  "UK",
    initials: "SP",
    industry: "E-commerce",
  },
  {
    quote:    "A rare agency that understands technology as deeply as it understands people. The AI integration they delivered saved us 1,200 hours of manual work per quarter.",
    author:   "Ama Koffi",
    role:     "CTO, PulseFinance",
    country:  "Ghana",
    initials: "AK",
    industry: "Financial Services",
  },
  {
    quote:    "The team didn't just deliver a product — they delivered a vision. Our new platform has become the cornerstone of our entire digital strategy.",
    author:   "Marcus Chen",
    role:     "Founder, CloudSync",
    country:  "Singapore",
    initials: "MC",
    industry: "SaaS",
  },
  {
    quote:    "We've worked with dozens of agencies. OmniQubits is the first one that truly understood our vision and translated it into measurable results.",
    author:   "Elena Rodriguez",
    role:     "VP Marketing, HealthBridge",
    country:  "Spain",
    initials: "ER",
    industry: "Healthcare",
  },
  {
    quote:    "Their quantum-inspired approach sounds abstract, but the results are very concrete. We're seeing 3× growth in customer engagement since the overhaul.",
    author:   "David Kim",
    role:     "CEO, Innovate Labs",
    country:  "South Korea",
    initials: "DK",
    industry: "AI / ML",
  },
];

const stats = [
  { value: "200+", label: "Clients Worldwide" },
  { value: "12+",  label: "Countries" },
  { value: "98%",  label: "Client Retention" },
  { value: "5×",   label: "Average ROI" },
];

const industries = [
  "Fintech", "E-commerce", "SaaS", "Healthcare",
  "Financial Services", "Retail", "AI / ML", "Manufacturing",
];

// ─────────────────────────────────────────────────────────────
// Page — Server Component (no "use client" required)
// ─────────────────────────────────────────────────────────────
export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,140,0,0.06)_0%,transparent_70%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-orange-500/60" />
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Client Voices</span>
              <span className="h-px w-12 bg-orange-500/60" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Words from<br />
              <em className="text-orange-500 font-light">Those We Serve</em>
            </h1>
            <p className="text-muted-oq text-lg max-w-2xl mx-auto leading-relaxed">
              Don&apos;t take our word for it. Hear from the leaders and innovators who&apos;ve
              partnered with us to transform their businesses.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="py-12 bg-white-2 border-y border-orange-500/15">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUpGroup className="grid grid-cols-2 md:grid-cols-4 gap-8" stagger={0.08}>
            {stats.map((s) => (
              <FadeUpItem key={s.label}>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl text-orange-500 mb-1">{s.value}</div>
                  <div className="text-muted-oq text-xs tracking-[0.15em] uppercase">{s.label}</div>
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── Testimonials Grid ─────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUpGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.07}>
            {testimonials.map((t) => (
              <FadeUpItem key={t.author}>
                <div className="bg-white-2 border border-orange-500/15 p-8 hover:border-orange-500/35 transition-colors h-full flex flex-col">
                  {/* Opening quote mark */}
                  <div className="font-display text-5xl text-orange-500/15 leading-none mb-4">&quot;</div>

                  {/* Quote */}
                  <p className="font-display text-base italic text-black-2 leading-relaxed flex-1 mb-4">
                    {t.quote}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4 text-orange-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-orange-500/15">
                    <div className="w-10 h-10 rounded-full border border-orange-500/35 bg-white-4 flex items-center justify-center font-display text-orange-500 text-sm shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-black text-sm">{t.author}</div>
                      <div className="text-muted-oq text-xs">{t.role} · {t.country}</div>
                    </div>
                  </div>
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white-2">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-orange-500/60" />
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Industries We Serve</span>
              <span className="h-px w-12 bg-orange-500/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              Diverse <em className="text-orange-500 font-light">Expertise</em>
            </h2>
          </FadeUp>

          <FadeUpGroup className="flex flex-wrap justify-center gap-3" stagger={0.05}>
            {industries.map((ind) => (
              <FadeUpItem key={ind}>
                <span className="border border-orange-500/15 bg-white px-6 py-3 text-muted-oq text-sm tracking-wide hover:border-orange-500/35 hover:text-black transition-all cursor-default block">
                  {ind}
                </span>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <FadeUp className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to Join Our<br />
            <em className="text-orange-500 font-light">Success Stories</em>
          </h2>
          <p className="text-muted-oq text-sm mb-10">
            Let&apos;s discuss how we can help your business achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-500 text-obsidian px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-orange-500-light hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border border-orange-500/35 text-black px-8 py-4 text-sm tracking-[0.15em] uppercase hover:border-orange-500 hover:text-orange-500 hover:-translate-y-0.5 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}
