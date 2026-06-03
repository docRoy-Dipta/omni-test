"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * About Page - Brand story, engineering standards, mission framework
 * Design matches omniqubits.html luxury theme.
 */

const values = [
  {
    title: "Innovation Without Limits",
    description: "We challenge conventional thinking, embracing quantum principles to explore infinite possibilities in every solution we deliver."
  },
  {
    title: "Precision Engineering",
    description: "Every strategy, line of code, and campaign is crafted with meticulous attention to detail and measurable outcomes."
  },
  {
    title: "Partnership First",
    description: "We don't just deliver projects — we become an extension of your team, invested in your long-term success."
  },
  {
    title: "Continuous Evolution",
    description: "The digital landscape never stops changing. Neither do we. We continuously adapt and evolve our approaches."
  }
];

const timeline = [
  { year: "2018", title: "Foundation", description: "OmniQubits was founded with a vision to dissolve boundaries between marketing, technology, and customer experience." },
  { year: "2019", title: "Global Expansion", description: "Expanded operations to serve clients across 5 countries, establishing our international presence." },
  { year: "2020", title: "Technology Division", description: "Launched our dedicated technology solutions team, bringing custom software and AI capabilities in-house." },
  { year: "2021", title: "AI Innovation", description: "Introduced advanced ML and automation services, helping clients achieve 5x average ROI." },
  { year: "2022", title: "Enterprise Focus", description: "Established our Quantum tier for enterprise clients, delivering bespoke digital transformation at scale." },
  { year: "2023", title: "200+ Clients", description: "Reached milestone of 200 global clients served across 12+ countries." },
  { year: "2024", title: "Industry Recognition", description: "Named among top AI and digital transformation agencies by multiple industry publications." },
  { year: "2025", title: "Future Forward", description: "Continuing to push boundaries with next-generation AI solutions and quantum-inspired strategies." }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
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
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Who We Are</span>
              <span className="h-px w-12 bg-gold/60" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              A Global Force for<br />
              <em className="text-gold font-light">Business Evolution</em>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted-oq text-lg max-w-2xl mx-auto leading-relaxed">
              OmniQubits was founded on a simple conviction: that the boundaries between marketing,
              customer experience, and technology should dissolve — because the businesses that win
              are those that treat them as one unified discipline.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-obsidian-2">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-12 bg-gold/60" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Mission</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Empowering Businesses<br />
                <em className="text-gold font-light">Beyond Limits</em>
              </h2>
              <p className="text-muted-oq text-sm leading-relaxed">
                We exist to help forward-thinking enterprises unlock their full potential by unifying
                marketing, technology, and customer experience into a single, coherent strategy.
                Our quantum-inspired approach means we see possibilities where others see limits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-12 bg-gold/60" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Vision</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                The Future of<br />
                <em className="text-gold font-light">Business Transformation</em>
              </h2>
              <p className="text-muted-oq text-sm leading-relaxed">
                We envision a world where businesses operate without the artificial boundaries
                between departments. Where marketing, technology, and support work in perfect
                harmony — driven by data, powered by AI, and focused on delivering exceptional
                experiences at every touchpoint.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">What We Believe</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              Our <em className="text-gold font-light">Core Values</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-obsidian-2 border border-gold/15 p-8 hover:border-gold/35 transition-all"
              >
                <h3 className="font-display text-xl text-cream mb-3">{value.title}</h3>
                <p className="text-muted-oq text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 bg-obsidian-2">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Journey</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              The <em className="text-gold font-light">Evolution</em>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/15" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold -translate-x-1/2 rounded-full" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="font-display text-xs tracking-[0.2em] text-gold mb-1">{item.year}</div>
                    <h3 className="font-display text-lg text-cream mb-2">{item.title}</h3>
                    <p className="text-muted-oq text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square border border-gold/15 bg-obsidian-2 flex items-center justify-center overflow-hidden">
                <div className="w-40 h-40 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(201,169,110,0.25)_0%,rgba(201,169,110,0.05)_50%,transparent_70%)] border border-gold/20 relative animate-pulse-slow">
                  <div className="absolute inset-8 rounded-full border border-gold/15 animate-spin-slow" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-12 bg-gold/60" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Engineering Standards</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Built for<br />
                <em className="text-gold font-light">Excellence</em>
              </h2>
              <p className="text-muted-oq text-sm leading-relaxed mb-8">
                We hold ourselves to the highest engineering standards. Every line of code,
                every campaign, and every strategy undergoes rigorous testing and review.
                We don't just meet expectations — we set new benchmarks.
              </p>
              <ul className="space-y-3">
                {[
                  "Enterprise-grade security and compliance",
                  "Scalable architecture designed for growth",
                  "Performance optimization as a core principle",
                  "Comprehensive testing and quality assurance",
                  "Continuous monitoring and improvement",
                  "Clear documentation and handovers"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-oq text-sm">
                    <span className="text-gold text-xs mt-1">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-obsidian-2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Join the <em className="text-gold font-light">Future</em>
          </h2>
          <p className="text-muted-oq text-sm mb-10">
            Ready to transform your business with a partner who thinks beyond the ordinary?
            Let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-obsidian px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all"
            >
              Get in Touch
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