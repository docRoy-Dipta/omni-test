"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, Target, Heart } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push boundaries and embrace new technologies to stay ahead of the curve."
  },
  {
    icon: Target,
    title: "Results Obsessed",
    description: "Every strategy we create is focused on delivering measurable, tangible outcomes."
  },
  {
    icon: Heart,
    title: "Partnership Mentality",
    description: "We treat your business as if it were our own, investing in your success."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best results come from seamless teamwork — with you and within our team."
  }
];

const timeline = [
  { year: "2019", title: "Founded", description: "OmniQubits was born from a vision to transform how businesses approach marketing and technology." },
  { year: "2020", title: "First Major Client", description: "Partnered with a Fortune 500 company to reimagine their digital customer experience." },
  { year: "2021", title: "Global Expansion", description: "Expanded operations to serve clients across 12+ countries worldwide." },
  { year: "2022", title: "AI Integration", description: "Launched dedicated AI and automation practice to help clients leverage cutting-edge technology." },
  { year: "2023", title: "200+ Clients", description: "Reached milestone of 200 successful client engagements across industries." },
  { year: "2024", title: "Industry Recognition", description: "Named as a leading growth marketing agency by multiple industry publications." }
];

const team = [
  { name: "Alexandra Chen", role: "CEO & Founder", initials: "AC", bio: "Former McKinsey strategist with 15+ years in digital transformation." },
  { name: "Marcus Webb", role: "Chief Technology Officer", initials: "MW", bio: "Ex-Google engineer specializing in AI and scalable architectures." },
  { name: "Sofia Ramirez", role: "Head of Growth", initials: "SR", bio: "Led growth at three unicorn startups, expert in performance marketing." },
  { name: "James Okonkwo", role: "Creative Director", initials: "JO", bio: "Award-winning brand strategist with work featured in AdWeek and Campaign." }
];

export default function AboutPage() {
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
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Who We Are</span>
              <span className="h-px w-12 bg-gold/60" />
            </motion.div>

            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              A Global Force for<br />
              <em className="text-gold font-light">Business Evolution</em>
            </motion.h1>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-muted-color text-lg max-w-2xl mx-auto leading-relaxed">
              OmniQubits was founded on a simple conviction: that the boundaries between marketing, customer experience, and technology should dissolve — because the businesses that win are those that treat them as one unified discipline.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-obsidian-2 border-y border-gold-subtle">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "200+", label: "Global Clients" },
              { value: "98%", label: "Client Retention" },
              { value: "12+", label: "Countries Served" },
              { value: "150+", label: "Projects Delivered" }
            ].map((stat, i) => (
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

      {/* Story */}
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
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Story</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Born from<br />
                <em className="text-gold font-light">Conviction</em>
              </h2>
              <div className="space-y-4 text-muted-color text-sm leading-relaxed">
                <p>
                  In 2019, we observed a fundamental problem in how agencies approached business growth. Marketing teams worked in isolation from technology teams, who worked in isolation from customer experience teams. The result? Fragmented strategies, missed opportunities, and businesses failing to reach their full potential.
                </p>
                <p>
                  We founded OmniQubits with a different vision — one where marketing, technology, and customer experience converge into a single, powerful discipline. Inspired by quantum computing&apos;s promise of processing multiple possibilities simultaneously, we built a team that thinks beyond traditional boundaries.
                </p>
                <p>
                  Today, we&apos;re proud to serve over 200 clients across 12+ countries, helping them transform their businesses through integrated strategies that deliver real, measurable growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <div className="absolute inset-0 border border-gold-subtle bg-obsidian-3 flex items-center justify-center overflow-hidden">
                <div className="w-40 h-40 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(201,169,110,0.25)_0%,rgba(201,169,110,0.05)_50%,transparent_70%)] border border-gold/20 relative animate-pulse-slow">
                  <div className="absolute inset-4 rounded-full border border-gold/15 animate-spin-slow" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-obsidian-4 border border-gold-glow p-6 flex flex-col items-center">
                <span className="font-display text-3xl text-gold">∞</span>
                <span className="text-muted-color text-xs tracking-[0.18em] uppercase">Possibilities</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-obsidian-2">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">What Drives Us</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Our <em className="text-gold font-light">Values</em>
            </h2>
            <p className="text-muted-color text-sm max-w-xl mx-auto">
              These principles guide everything we do — from how we strategize to how we deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-obsidian border border-gold-subtle p-8 hover:border-gold-glow transition-all"
              >
                <div className="w-12 h-12 border border-gold-subtle flex items-center justify-center text-gold mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="font-display text-xl text-cream mb-2">{value.title}</h3>
                <p className="text-muted-color text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Journey</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              Years of <em className="text-gold font-light">Excellence</em>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold-subtle" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 mt-1.5" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="font-display text-gold text-lg mb-1">{item.year}</div>
                    <h3 className="font-display text-xl text-cream mb-2">{item.title}</h3>
                    <p className="text-muted-color text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-obsidian-2">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Leadership</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Meet Our <em className="text-gold font-light">Team</em>
            </h2>
            <p className="text-muted-color text-sm max-w-xl mx-auto">
              A diverse team of strategists, engineers, designers, and growth experts united by a shared vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-obsidian border border-gold-subtle p-6 text-center hover:border-gold-glow transition-all"
              >
                <div className="w-20 h-20 mx-auto rounded-full border border-gold-glow bg-obsidian-4 flex items-center justify-center font-display text-gold text-2xl mb-4">
                  {member.initials}
                </div>
                <h3 className="font-display text-lg text-cream mb-1">{member.name}</h3>
                <div className="text-gold text-xs tracking-[0.15em] uppercase mb-3">{member.role}</div>
                <p className="text-muted-color text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Join Our <em className="text-gold font-light">Journey</em>
          </h2>
          <p className="text-muted-color text-sm mb-10">
            We&apos;re always looking for talented individuals and businesses ready to transform their future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold-light text-obsidian">
              <Link href="/contact">Get in Touch</Link>
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