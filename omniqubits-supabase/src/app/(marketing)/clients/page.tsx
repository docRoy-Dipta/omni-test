"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Clients Page - Testimonials and client stories
 * Design matches omniqubits.html luxury theme.
 */

const testimonials = [
  {
    quote: "OmniQubits didn't just run our campaigns — they rebuilt how we think about growth. Within six months, our CAC dropped by 40% and pipeline tripled.",
    author: "James Mercer",
    role: "CEO, NovaTech Solutions",
    country: "USA",
    initials: "JM",
    industry: "Fintech"
  },
  {
    quote: "Their customer support overhaul transformed our CSAT scores from 3.1 to 4.8 in under four months. The systems they built are still running flawlessly today.",
    author: "Soraya Patel",
    role: "COO, Zentra Retail",
    country: "UK",
    initials: "SP",
    industry: "E-commerce"
  },
  {
    quote: "A rare agency that understands technology as deeply as it understands people. The AI integration they delivered saved us 1,200 hours of manual work per quarter.",
    author: "Ama Koffi",
    role: "CTO, PulseFinance",
    country: "Ghana",
    initials: "AK",
    industry: "Financial Services"
  },
  {
    quote: "The team didn't just deliver a product — they delivered a vision. Our new platform has become the cornerstone of our entire digital strategy.",
    author: "Marcus Chen",
    role: "Founder, CloudSync",
    country: "Singapore",
    initials: "MC",
    industry: "SaaS"
  },
  {
    quote: "We've worked with dozens of agencies. OmniQubits is the first one that truly understood our vision and translated it into measurable results.",
    author: "Elena Rodriguez",
    role: "VP Marketing, HealthBridge",
    country: "Spain",
    initials: "ER",
    industry: "Healthcare"
  },
  {
    quote: "Their quantum-inspired approach sounds abstract, but the results are very concrete. We're seeing 3x growth in customer engagement since the overhaul.",
    author: "David Kim",
    role: "CEO, Innovate Labs",
    country: "South Korea",
    initials: "DK",
    industry: "AI/ML"
  }
];

const stats = [
  { value: "200+", label: "Clients Worldwide" },
  { value: "12+", label: "Countries" },
  { value: "98%", label: "Client Retention" },
  { value: "5×", label: "Average ROI" }
];

const industries = [
  "Fintech", "E-commerce", "SaaS", "Healthcare",
  "Financial Services", "Retail", "AI/ML", "Manufacturing"
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ClientsPage() {
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
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Client Voices</span>
              <span className="h-px w-12 bg-gold/60" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Words from<br />
              <em className="text-gold font-light">Those We Serve</em>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted-oq text-lg max-w-2xl mx-auto leading-relaxed">
              Don't take our word for it. Hear from the leaders and innovators who've
              partnered with us to transform their businesses.
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

      {/* Testimonials Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-obsidian-2 border border-gold/15 p-8 hover:border-gold/35 transition-all"
              >
                <div className="font-display text-5xl text-gold/20 leading-none mb-4 font-light">"</div>
                <p className="font-display text-base italic text-cream-2 leading-relaxed mb-6 font-light">
                  {testimonial.quote}
                </p>
                <div className="flex text-gold text-xs tracking-[0.2em] mb-4">★ ★ ★ ★ ★</div>
                <div className="flex items-center gap-3 pt-4 border-t border-gold/15">
                  <div className="w-10 h-10 rounded-full border border-gold/35 bg-obsidian-4 flex items-center justify-center font-display text-gold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-cream text-sm">{testimonial.author}</div>
                    <div className="text-muted-oq text-xs">{testimonial.role} · {testimonial.country}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-4 bg-obsidian-2">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Industries We Serve</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-12">
            Diverse <em className="text-gold font-light">Expertise</em>
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-gold/15 bg-obsidian px-6 py-3 text-muted-oq text-sm tracking-wide hover:border-gold/35 hover:text-cream transition-all cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to Join Our<br />
            <em className="text-gold font-light">Success Stories</em>
          </h2>
          <p className="text-muted-oq text-sm mb-10">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-obsidian px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all"
            >
              Get Started
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