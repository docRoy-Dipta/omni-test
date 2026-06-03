"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

type Msg = { text: string; type: "bot" | "user" };

const INITIAL: Msg[] = [
  { text: "Hello! Welcome to OmniQubits \u{1F44B} How can I help you today?", type: "bot" },
];

const QUICK = ["Services", "Pricing", "Get Started", "Contact Us"];

function getBotReply(msg: string): string {
  const l = msg.toLowerCase();
  if (l.includes("service"))
    return "We offer Growth Marketing, Brand Strategy, Customer Support Systems, Technology Solutions, Data & Analytics, and Digital Transformation.";
  if (l.includes("price") || l.includes("cost") || l.includes("plan") || l.includes("pricing"))
    return "Our plans start from $1,200/mo (Launchpad), $3,800/mo (Ascend), and Custom (Quantum). Visit our Pricing page for full details.";
  if (l.includes("start") || l.includes("begin") || l.includes("get started"))
    return "Getting started is simple \u2014 visit our Contact page or email hello@omniqubits.com. We'll be in touch within 24 hours.";
  if (l.includes("contact") || l.includes("talk") || l.includes("human") || l.includes("team"))
    return "You can reach us at hello@omniqubits.com or fill out the Contact form. We respond within 24 business hours.";
  return "For detailed answers, reach out to hello@omniqubits.com \u2014 our team responds within 24 hours.";
}

export function ChatWidget() {
  const [open,     setOpen]     = useState(false);
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [input,    setInput]    = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  const send = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setMessages((p) => [...p, { text: msg, type: "user" }]);
    setInput("");
    setTimeout(() => {
      setMessages((p) => [...p, { text: getBotReply(msg), type: "bot" }]);
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 650);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{   opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-80 bg-obsidian-2 border border-gold-glow shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden"
            style={{ maxHeight: "min(480px,80vh)" }}
          >
            <div className="bg-obsidian-3 border-b border-gold-subtle px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(201,169,110,0.5),rgba(201,169,110,0.1))] border border-gold-glow flex items-center justify-center font-display text-gold text-xs shrink-0">OQ</div>
              <div className="flex-1 min-w-0">
                <p className="text-cream text-sm leading-none">OmniQubits AI</p>
                <p className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  <span className="text-green-400 text-xs">Online</span>
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-color hover:text-cream transition-colors p-1 shrink-0"><X size={15} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`max-w-[85%] px-3 py-2.5 text-sm leading-relaxed ${ m.type === "bot" ? "bg-obsidian-4 border border-gold-subtle text-cream-2 mr-auto" : "bg-gold-dark/80 text-cream ml-auto" }`}>{m.text}</div>
              ))}
              <div ref={endRef} />
            </div>
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 px-4 pb-3 shrink-0">
                {QUICK.map((r) => (
                  <button key={r} onClick={() => send(r)} className="border border-gold/30 hover:border-gold text-gold text-xs px-3 py-1 rounded-full transition-colors">{r}</button>
                ))}
              </div>
            )}
            <div className="flex border-t border-gold-subtle shrink-0">
              <input type="text" placeholder="Type your message\u2026" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} className="flex-1 bg-obsidian text-cream text-sm px-4 py-3 outline-none placeholder:text-muted-color/40" />
              <button onClick={() => send()} className="bg-gold hover:bg-gold-light text-obsidian px-4 transition-colors"><ArrowRight size={15} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(!open)} className="w-14 h-14 bg-gold hover:bg-gold-light text-obsidian rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(201,169,110,0.4)] hover:scale-105 transition-all" aria-label="Open chat">
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={20} /></motion.span>
            : <motion.span key="chat" initial={{ rotate: 90,  opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><MessageCircle size={20} /></motion.span>
          }
        </AnimatePresence>
      </button>
    </div>
  );
}


const services = [
  "Growth Marketing",
  "Brand Strategy",
  "Customer Support Systems",
  "Technology Solutions",
  "Data & Analytics",
  "Digital Transformation",
];

const company = [
  { label: "About Us",       href: "/about" },
  { label: "Services",       href: "/services" },
  { label: "Pricing",        href: "/pricing" },
  { label: "Client Stories", href: "/testimonials" },
  { label: "Contact",        href: "/contact" },
];

const connect = [
  { label: "LinkedIn",  href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-obsidian border-t border-gold-subtle">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 pb-14 border-b border-gold-subtle">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block font-display text-2xl mb-4 hover:opacity-80 transition-opacity">
              Omni<span className="text-gold">Qubits</span>
            </Link>
            <p className="text-muted-color text-sm leading-relaxed mb-6">
              A limitless, all-encompassing approach to marketing, customer
              support, and technology — for the businesses of tomorrow.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs tracking-[0.2em] uppercase">Accepting New Clients</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-color hover:text-gold transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted-color hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-5">Connect</h4>
            <ul className="space-y-3">
              {connect.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-color hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@omniqubits.com"
                  className="text-sm text-muted-color hover:text-gold transition-colors duration-200 break-all"
                >
                  hello@omniqubits.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-color/40 text-xs tracking-[0.05em]">
            © {year} OmniQubits. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs text-muted-color/40 hover:text-gold transition-colors"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}