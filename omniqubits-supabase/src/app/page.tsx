"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import type { Service, Testimonial, PricingPlan } from "@/types";

export default function OmniQubitsHomepage() {
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [pricing, setPricing] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    const fetchData = async () => {
      const [svcRes, tstRes, priceRes] = await Promise.all([
        supabase.from("services").select("*").eq("is_active", true).order("display_order"),
        supabase.from("testimonials").select("*").eq("is_active", true).order("display_order"),
        supabase.from("pricing_plans").select("*").eq("is_active", true).order("display_order"),
      ]);

      setServices(svcRes.data || []);
      setTestimonials(tstRes.data || []);
      setPricing(priceRes.data || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-obsidian text-cream overflow-x-hidden font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/95 backdrop-blur-md border-b border-gold-subtle">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="font-display text-2xl tracking-tight">
            Omni<span className="text-gold">Qubits</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
            {["Services", "Pricing", "Clients", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-gold transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollTo("contact")}
            className="hidden md:block bg-gold hover:bg-gold-light text-obsidian font-medium"
          >
            Start Project
          </Button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cream"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-obsidian-2 border-t border-gold-subtle"
            >
              <div className="flex flex-col px-6 py-8 space-y-6 text-lg">
                {["Services", "Pricing", "Clients", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-left hover:text-gold transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <Button onClick={() => scrollTo("contact")} className="w-full bg-gold text-obsidian">
                  Start Project
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen pt-20 flex items-center relative">
        <div className="hero-bg absolute inset-0" />
        <div className="hero-grid absolute inset-0" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Badge variant="outline" className="mb-6 border-gold text-gold">AI Marketing Agency</Badge>

            <h1 className="font-display text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.05] tracking-tighter mb-8">
              Beyond the Horizon<br />of <span className="gold-text-gradient">Innovation</span>
            </h1>

            <p className="text-xl text-cream-2 max-w-2xl mx-auto mb-12">
              We fuse strategic marketing, AI automation, and cutting-edge technology to build scalable growth systems for ambitious brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollTo("contact")} className="text-lg px-10 py-7">
                Begin Your Transformation
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("services")}>
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-obsidian-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[4px] text-sm mb-4">EXPERTISE</p>
            <h2 className="font-display text-5xl md:text-6xl">Services Built for Scale</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="service-card bg-obsidian-3 border border-gold-subtle p-10 group hover:border-gold transition-all duration-300"
              >
                <div className="text-5xl mb-8">{service.icon}</div>
                <h3 className="font-display text-2xl mb-4">{service.title}</h3>
                <p className="text-muted-color leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[4px] text-sm mb-4">INVESTMENT</p>
            <h2 className="font-display text-5xl md:text-6xl">Choose Your Growth Path</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <Card key={plan.id} className={`p-8 relative transition-all ${plan.is_featured ? 'border-gold scale-[1.02]' : ''}`}>
                {plan.is_featured && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-obsidian">Most Popular</Badge>}
                
                <h3 className="font-display text-3xl mb-1">{plan.name}</h3>
                <div className="text-5xl font-light mb-6">
                  ${plan.price}
                </div>
                <p className="text-sm text-muted-color mb-8">{plan.period}</p>

                <p className="italic text-cream-2 mb-8">{plan.tagline}</p>

                <ul className="space-y-4 mb-10 text-sm">
                  {plan.features?.map((f, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-gold">—</span> {f.text}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={plan.is_featured ? "default" : "outline"}
                  onClick={() => scrollTo("contact")}
                >
                  {plan.cta_text}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-obsidian-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[4px] text-sm mb-4">CLIENT VOICES</p>
            <h2 className="font-display text-5xl md:text-6xl">Real Results</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-8">
                <p className="italic text-lg leading-relaxed mb-8">“{t.content}”</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center font-display text-xl text-gold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-muted-color">{t.role} @ {t.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section id="contact" className="py-24 bg-obsidian border-t border-gold-subtle">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl mb-6">Let's Build Something Extraordinary</h2>
          <p className="text-lg text-muted-color mb-10">Whether you're ready for full transformation or just exploring possibilities — we're here.</p>
          <Button size="lg" onClick={() => alert("Full contact form coming next!")}>
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  );
}