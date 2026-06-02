"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-obsidian text-cream">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="hero-bg absolute inset-0" />
        <div className="hero-grid absolute inset-0" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-block mb-6 px-6 py-2 border border-gold-subtle rounded-full text-gold text-sm tracking-widest">
              AI-POWERED GROWTH PARTNER
            </div>

            <h1 className="font-display text-7xl md:text-8xl leading-none tracking-tighter mb-8">
              Beyond the Horizon<br />
              of <span className="gold-text-gradient">Innovation</span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl text-cream-2 mb-12">
              We combine deep marketing expertise with AI, automation, and technology to build scalable, future-proof business systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-gold-light text-obsidian text-lg px-10">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}