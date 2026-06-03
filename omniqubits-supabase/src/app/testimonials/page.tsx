"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote: "OmniQubits didn&apos;t just run our campaigns — they rebuilt how we think about growth. Within six months, our CAC dropped by 40% and pipeline tripled.",
    author: "James Mercer",
    role: "CEO",
    company: "NovaTech Solutions",
    country: "USA",
    initials: "JM",
    rating: 5
  },
  {
    quote: "Their customer support overhaul transformed our CSAT scores from 3.1 to 4.8 in under four months. The systems they built are still running flawlessly today.",
    author: "Soraya Patel",
    role: "COO",
    company: "Zentra Retail",
    country: "UK",
    initials: "SP",
    rating: 5
  },
  {
    quote: "A rare agency that understands technology as deeply as it understands people. The AI integration they delivered saved us 1,200 hours of manual work per quarter.",
    author: "Ama Koffi",
    role: "CTO",
    company: "PulseFinance",
    country: "Ghana",
    initials: "AK",
    rating: 5
  },
  {
    quote: "Working with OmniQubits was like having an in-house team that was actually better than our internal resources. They deliveredResults that exceeded our expectations.",
    author: "Michael Torres",
    role: "VP of Marketing",
    company: "CloudScale Inc",
    country: "Canada",
    initials: "MT",
    rating: 5
  },
  {
    quote: "The branding work transformed our entire market positioning. We went from being just another vendor to the clear category leader in 18 months.",
    author: "Elena Vasquez",
    role: "Founder",
    company: "Artisan Home",
    country: "Spain",
    initials: "EV",
    rating: 5
  },
  {
    quote: "Their data analytics platform gave us visibility into our business we never had before. Every decision is now data-driven and we&apos;re growing 3x faster.",
    author: "David Kim",
    role: "CFO",
    company: "Pacific Trade",
    country: "Singapore",
    initials: "DK",
    rating: 5
  },
  {
    quote: "The team didn&apos;t just execute — they educated us. We now have the internal capabilities to sustain the growth they helped us achieve.",
    author: "Rachel Greene",
    role: "Director of Operations",
    company: "GreenLeaf Foods",
    country: "USA",
    initials: "RG",
    rating: 5
  },
  {
    quote: "From strategy to execution, OmniQubits brings a level of professionalism and expertise that&apos;s unmatched. They&apos;re true partners in our success.",
    author: "Thomas Anderson",
    role: "CEO",
    company: "Nexus Digital",
    country: "Germany",
    initials: "TA",
    rating: 5
  },
  {
    quote: "Our digital transformation project was complex, but they made it seamless. The ROI was evident within the first quarter.",
    author: "Fatima Al-Rashid",
    role: "COO",
    company: "Gulf Logistics",
    country: "UAE",
    initials: "FA",
    rating: 5
  }
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "40%", label: "Avg. CAC Reduction" },
  { value: "3x", label: "Average Growth" },
  { value: "200+", label: "Projects Delivered" }
];

const industries = [
  "Technology", "E-commerce", "Finance", "Healthcare",
  "Real Estate", "Education", "Manufacturing", "Retail"
];

export default function TestimonialsPage() {
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
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Client Voices</span>
              <span className="h-px w-12 bg-gold/60" />
            </motion.div>

            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Words from <em className="text-gold font-light">Those We Serve</em>
            </motion.h1>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-muted-color text-lg max-w-2xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it. Hear from the businesses and leaders who have transformed their growth with OmniQubits.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-obsidian-2 border-y border-gold-subtle">
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

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-obsidian-2 border border-gold-subtle p-6 hover:border-gold-glow transition-all"
              >
                <Quote className="text-gold/20 w-10 h-10 mb-4" />

                <p className="font-display text-base italic text-cream-2 leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex text-gold mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gold-subtle">
                  <div className="w-12 h-12 rounded-full border border-gold-glow bg-obsidian-4 flex items-center justify-center font-display text-gold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-cream font-medium">{testimonial.author}</div>
                    <div className="text-muted-color text-xs">{testimonial.role}, {testimonial.company} · {testimonial.country}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-obsidian-2">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Industries Served</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl mb-10">
            Diverse <em className="text-gold font-light">Expertise</em>
          </h2>

          <p className="text-muted-color text-sm max-w-2xl mx-auto mb-12">
            We&apos;ve helped businesses across industries transform their growth. Our adaptable approach means we can deliver results regardless of your sector.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-obsidian border border-gold-subtle px-6 py-3 text-sm text-cream-2"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-gold/60" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Featured Case Study</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                How NovaTech <em className="text-gold font-light">Tripled</em> Pipeline
              </h2>
              <div className="space-y-4 text-muted-color text-sm leading-relaxed mb-8">
                <p>
                  NovaTech Solutions came to us with a challenge: their outbound sales had stalled and their CAC was climbing. Within 6 months of our engagement, they saw:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">◆</span>
                    <span>40% reduction in customer acquisition cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">◆</span>
                    <span>3x increase in qualified pipeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">◆</span>
                    <span>150% improvement in sales team productivity</span>
                  </li>
                </ul>
              </div>
              <Button asChild className="bg-gold hover:bg-gold-light text-obsidian">
                <Link href="/contact">Get Similar Results</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-obsidian-2 border border-gold-subtle p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "40%", label: "CAC Reduction" },
                  { value: "3x", label: "Pipeline Growth" },
                  { value: "150%", label: "Sales Productivity" },
                  { value: "6", label: "Months to Results" }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4">
                    <div className="font-display text-3xl text-gold mb-1">{stat.value}</div>
                    <div className="text-muted-color text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-obsidian-2">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to Be Our Next <em className="text-gold font-light">Success Story</em>?
          </h2>
          <p className="text-muted-color text-sm mb-10">
            Join the hundreds of businesses that have transformed their growth with OmniQubits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold-light text-obsidian">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold-subtle text-cream hover:border-gold hover:text-gold">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}