"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Mail, Phone, Globe, Clock,
  CheckCircle2, ArrowRight, X,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Animation
// ─────────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.09 } },
};

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const contactInfo = [
  { icon: <Mail size={15} />,   label: "Email",         value: "hello@omniqubits.com",              href: "mailto:hello@omniqubits.com" },
  { icon: <Globe size={15} />,  label: "Global HQ",     value: "Serving clients across 12+ countries", href: null },
  { icon: <Clock size={15} />,  label: "Response Time", value: "Within 24 business hours",           href: null },
];

const budgetOptions = [
  "Under $1,000 / month",
  "$1,000 – $3,000 / month",
  "$3,000 – $5,000 / month",
  "$5,000 – $10,000 / month",
  "Over $10,000 / month",
  "Not sure yet — let's discuss",
];

const serviceOptions = [
  "AI & Automation",
  "Growth Marketing",
  "Web & Technology",
  "Customer Experience",
  "Full-Suite Engagement",
  "Not sure — need advice",
];

const whyUs = [
  {
    title: "Holistic Approach",
    desc:  "Marketing, technology, and customer experience unified in one strategy — no silos, no handoff gaps.",
  },
  {
    title: "Proven Track Record",
    desc:  "200+ clients served across 12+ countries with a 98% client retention rate.",
  },
  {
    title: "Fast, Clear Communication",
    desc:  "We respond within 24 hours and speak in plain language — no jargon, no guessing what is happening.",
  },
];

// ─────────────────────────────────────────────────────────────
// Empty form state
// ─────────────────────────────────────────────────────────────
const EMPTY = {
  name:    "",
  email:   "",
  phone:   "",
  company: "",
  service: "",
  budget:  "",
  message: "",
};

// ─────────────────────────────────────────────────────────────
// Reusable field label
// ─────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-ink-muted text-xs tracking-[0.18em] uppercase mb-1.5">
      {children}
    </label>
  );
}

// ─────────────────────────────────────────────────────────────
// Shared input class
// ─────────────────────────────────────────────────────────────
const inputClass =
  "w-full bg-surface border border-surface-4 text-ink px-4 py-3 text-sm " +
  "focus:outline-none focus:border-brand transition-colors " +
  "placeholder:text-ink-muted/50";

const selectClass =
  "w-full bg-surface border border-surface-4 text-ink px-4 py-3 text-sm " +
  "focus:outline-none focus:border-brand transition-colors appearance-none cursor-pointer";

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form,   setForm]   = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const set = (field: keyof typeof EMPTY) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        setForm(EMPTY);   // clear all fields
      } else {
        setErrMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-surface text-ink">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,140,0,0.06)_0%,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-brand/50" />
              <span className="text-brand text-xs tracking-[0.3em] uppercase">Let&apos;s Begin</span>
              <span className="h-px w-10 bg-brand/50" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl mb-5">
              Start Your<br />
              <em className="text-brand font-light">Transformation</em>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-ink-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us about your business, challenges, and goals. We&apos;ll listen, ask the
              right questions, and propose a practical path forward — no jargon, no pressure.
            </motion.p>

          </motion.div>
        </div>
      </section>

      {/* ── Main grid ─────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">

            {/* ── Left column — info ── */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={stagger}
              className="md:col-span-2"
            >
              <motion.div variants={fadeUp} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-7 bg-brand/50" />
                  <span className="text-brand text-xs tracking-[0.3em] uppercase">Contact Us</span>
                </div>
                <h2 className="font-display text-3xl mb-4">
                  We&apos;d Love to<br />
                  <em className="text-brand font-light">Hear From You</em>
                </h2>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Every great partnership starts with a conversation. Use the form to tell us about your
                  project and we will get back to you within one business day.
                </p>
              </motion.div>

              {/* Contact info items */}
              <motion.div variants={fadeUp} className="space-y-5 mb-8">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 pb-5 border-b border-surface-4 last:border-0">
                    <div className="w-9 h-9 border border-brand/25 flex items-center justify-center text-brand shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="text-brand text-xs tracking-[0.2em] uppercase mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-ink-2 text-sm hover:text-brand transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-ink-2 text-sm">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Why us */}
              <motion.div variants={fadeUp} className="space-y-4">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                    <div>
                      <div className="text-ink text-sm font-medium">{item.title}</div>
                      <div className="text-ink-muted text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right column — form ── */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-3"
            >
              <AnimatePresence mode="wait">

                {/* ── Success state ── */}
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{   opacity: 0 }}
                    className="bg-surface-2 border border-brand/25 p-10 text-center flex flex-col items-center gap-6 min-h-[400px] justify-center"
                  >
                    <div className="w-16 h-16 rounded-full border border-brand flex items-center justify-center">
                      <CheckCircle2 size={28} className="text-brand" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-ink mb-2">Message Received</h3>
                      <p className="text-ink-muted text-sm leading-relaxed max-w-xs mx-auto">
                        Thank you for reaching out. A member of our team will be in touch
                        within 24 business hours.
                      </p>
                    </div>
                    <button
                      onClick={() => { setStatus("idle"); setErrMsg(""); }}
                      className="inline-flex items-center gap-2 border border-brand/30 hover:border-brand text-ink hover:text-brand px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>

                ) : (

                  /* ── Form ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                  >
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label>Full Name <span className="text-brand">*</span></Label>
                        <input
                          type="text"
                          placeholder="Alex Johnson"
                          required
                          value={form.name}
                          onChange={set("name")}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <Label>Email Address <span className="text-brand">*</span></Label>
                        <input
                          type="email"
                          placeholder="you@company.com"
                          required
                          value={form.email}
                          onChange={set("email")}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label>Contact Number <span className="text-brand">*</span></Label>
                        <input
                          type="tel"
                          placeholder="+1 555 123 4567"
                          required
                          value={form.phone}
                          onChange={set("phone")}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <Label>Company Name</Label>
                        <input
                          type="text"
                          placeholder="Your Company Ltd."
                          value={form.company}
                          onChange={set("company")}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Service + Budget */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <Label>Service Interest</Label>
                        <select
                          value={form.service}
                          onChange={set("service")}
                          className={selectClass}
                        >
                          <option value="">Select a service…</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <ArrowRight size={12} className="absolute right-3 top-[38px] text-ink-muted rotate-90 pointer-events-none" />
                      </div>
                      <div className="relative">
                        <Label>Monthly Budget <span className="text-brand">*</span></Label>
                        <select
                          value={form.budget}
                          onChange={set("budget")}
                          required
                          className={selectClass}
                        >
                          <option value="">Select a range…</option>
                          {budgetOptions.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                        <ArrowRight size={12} className="absolute right-3 top-[38px] text-ink-muted rotate-90 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label>Tell Us About Your Goals <span className="text-brand">*</span></Label>
                      <textarea
                        rows={5}
                        placeholder="Describe your current challenges, what you need help with, and what success looks like for your business…"
                        required
                        value={form.message}
                        onChange={set("message")}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-200 px-4 py-3">
                        <X size={14} className="shrink-0" />
                        {errMsg}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-brand hover:bg-brand-light disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 text-sm font-medium tracking-[0.15em] uppercase transition-colors"
                    >
                      {status === "loading" ? "Sending…" : "Send Message"}
                    </button>

                    <p className="text-ink-muted/60 text-xs text-center">
                      We respond within 24 business hours. Your information is kept private.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-surface-2">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-10 bg-brand/50" />
              <span className="text-brand text-xs tracking-[0.3em] uppercase">Why Choose Us</span>
              <span className="h-px w-10 bg-brand/50" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              The OmniQubits<br />
              <em className="text-brand font-light">Difference</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "One Connected System",    desc: "Strategy, marketing, technology, and support connected — not siloed. Your growth engine works as one." },
              { title: "Measured Outcomes",        desc: "We define KPIs before we start and report on them clearly. No vanity metrics — only what moves your business forward." },
              { title: "Built for the Long Run",   desc: "We build systems that scale with your business. Every solution is designed for sustainability, not a quick fix." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-surface border border-surface-4 hover:border-brand/30 p-8 transition-colors shadow-card hover:shadow-card-hover"
              >
                <h3 className="font-display text-xl text-ink mb-3">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA strip ───────────────────────────────── */}
      <section className="py-16 px-6 bg-brand">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-white mb-1">Not ready to fill the form yet?</p>
            <p className="text-white/70 text-sm">Explore our work and see if we are the right fit first.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/clients"
              className="bg-white text-brand px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-surface-2 transition-colors"
            >
              View Clients
            </Link>
            <Link
              href="/services"
              className="border border-white/40 text-white px-6 py-3 text-xs tracking-[0.15em] uppercase hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
