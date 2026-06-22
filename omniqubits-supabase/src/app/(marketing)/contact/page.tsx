"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Contact Page - Standalone contact form with API submission
 * Design matches omniqubits.html luxury theme.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setFormStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,140,0,0.06)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(255,140,0,0.04)_0%,transparent_60%),radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(255,140,0,0.04)_0%,transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-orange-500/60" />
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Let&apos;s Begin</span>
              <span className="h-px w-12 bg-orange-500/60" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Start Your<br />
              <em className="text-orange-500 font-light">Transformation</em>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted-oq text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a startup ready to launch or an enterprise looking to evolve —
              we&apos;d love to hear your story. Reach out and let&apos;s craft something exceptional together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-px w-12 bg-orange-500/60" />
                  <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Get in Touch</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl mb-6">
                  We&apos;d Love to<br />
                  <em className="text-orange-500 font-light">Hear From You</em>
                </h2>
                <p className="text-muted-oq text-sm leading-relaxed">
                  Every great partnership begins with a conversation. Tell us about your challenges,
                  your goals, and what success looks like for you. We&apos;ll listen, ask the right questions,
                  and propose a path forward.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-6">
                <div className="flex gap-4 pb-6 border-b border-orange-500/15">
                  <div className="w-9 h-9 border border-orange-500/35 flex items-center justify-center text-orange-500 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-orange-500 text-xs tracking-[0.2em] uppercase mb-1">Email</div>
                    <div className="text-black-2 text-sm">hello@omniqubits.com</div>
                  </div>
                </div>

                <div className="flex gap-4 pb-6 border-b border-orange-500/15">
                  <div className="w-9 h-9 border border-orange-500/35 flex items-center justify-center text-orange-500 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-orange-500 text-xs tracking-[0.2em] uppercase mb-1">Global HQ</div>
                    <div className="text-black-2 text-sm">Serving clients across 12+ countries worldwide</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 border border-orange-500/35 flex items-center justify-center text-orange-500 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-orange-500 text-xs tracking-[0.2em] uppercase mb-1">Response Time</div>
                    <div className="text-black-2 text-sm">Within 24 business hours</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {formStatus === "success" ? (
                <div className="bg-white-2 border border-orange-500/35 p-8 text-center">
                  <div className="w-16 h-16 border border-orange-500 mx-auto mb-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-black mb-3">Message Received!</h3>
                  <p className="text-muted-oq text-sm mb-6">
                    Thank you for reaching out. We&apos;ll be in touch within 24 business hours.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="text-orange-500 text-xs tracking-[0.15em] uppercase border-b border-orange-500/30 pb-1 hover:border-orange-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-muted-oq text-xs tracking-[0.2em] uppercase">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full bg-white border border-orange-500/15 text-black px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-muted-oq/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-muted-oq text-xs tracking-[0.2em] uppercase">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="w-full bg-white border border-orange-500/15 text-black px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-muted-oq/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-muted-oq text-xs tracking-[0.2em] uppercase">Contact Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 555 123 4567"
                      required
                      className="w-full bg-white border border-orange-500/15 text-black px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-muted-oq/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-muted-oq text-xs tracking-[0.2em] uppercase">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="w-full bg-white border border-orange-500/15 text-black px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-muted-oq/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-muted-oq text-xs tracking-[0.2em] uppercase">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, challenges, or goals..."
                      required
                      rows={5}
                      className="w-full bg-white border border-orange-500/15 text-black px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-muted-oq/50 resize-none"
                    />
                  </div>

                  {formStatus === "error" && (
                    <div className="text-red-400 text-sm">{errorMessage}</div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full bg-orange-500 text-obsidian py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-orange-500-light hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map / Additional Info */}
      <section className="py-24 px-4 bg-white-2">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-orange-500/60" />
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase">Why Choose Us</span>
              <span className="h-px w-12 bg-orange-500/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              The OmniQubits<br />
              <em className="text-orange-500 font-light">Difference</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Holistic Approach",
                description: "We don't work in silos. Marketing, technology, and customer experience are unified in our strategy.",
              },
              {
                title: "Proven Results",
                description: "200+ clients served, 98% retention rate, and 5x average ROI. We deliver measurable outcomes.",
              },
              {
                title: "Future-Ready",
                description: "Our quantum-inspired approach means we're always thinking ahead, preparing your business for what's next.",
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-orange-500/15 p-8 hover:border-orange-500/35 transition-all"
              >
                <h3 className="font-display text-lg text-black mb-3">{item.title}</h3>
                <p className="text-muted-oq text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
