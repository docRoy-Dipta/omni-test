"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
type Msg = { text: string; type: "bot" | "user" };

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────
const INITIAL_MESSAGES: Msg[] = [
  {
    text: "Hello! Welcome to OmniQubits 👋 How can I help you today?",
    type: "bot",
  },
];

const QUICK_REPLIES = ["Services", "Pricing", "Get Started", "Contact Us"];

// ─────────────────────────────────────────────────────────────
// Bot reply logic
// ─────────────────────────────────────────────────────────────
function getBotReply(msg: string): string {
  const l = msg.toLowerCase();

  if (l.includes("service"))
    return "We offer Growth Marketing, Brand Strategy, Customer Support Systems, Technology Solutions, Data & Analytics, and Digital Transformation. Visit our Services page for full details.";

  if (l.includes("price") || l.includes("cost") || l.includes("plan") || l.includes("pricing"))
    return "Our plans start from $1,200/mo (Launchpad), $3,800/mo (Ascend), and Custom pricing for enterprise (Quantum). Visit our Pricing page for full details.";

  if (l.includes("start") || l.includes("begin") || l.includes("get started"))
    return "Getting started is simple — visit our Contact page or email hello@omniqubits.com. We'll schedule a discovery call within 24 hours.";

  if (l.includes("contact") || l.includes("talk") || l.includes("human") || l.includes("team"))
    return "You can reach us at hello@omniqubits.com or fill out our Contact form. We respond within 24 business hours.";

  if (l.includes("about") || l.includes("who"))
    return "OmniQubits is a global innovation agency operating across 12+ countries. We unify marketing, customer support, and technology into one coherent strategy for forward-thinking enterprises.";

  return "For detailed answers, reach out to hello@omniqubits.com — our team responds within 24 business hours.";
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
export function ChatWidget() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState<Msg[]>(INITIAL_MESSAGES);
  const [input, setInput]       = useState("");
  const endRef                  = useRef<HTMLDivElement>(null);

  const send = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;

    setMessages((prev) => [...prev, { text: msg, type: "user" }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: getBotReply(msg), type: "bot" },
      ]);
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 650);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Chat window ─────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{   opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-80 bg-obsidian-2 border border-gold-glow shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden"
            style={{ maxHeight: "min(480px, 80vh)" }}
          >
            {/* Header */}
            <div className="bg-obsidian-3 border-b border-gold-subtle px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(201,169,110,0.5),rgba(201,169,110,0.1))] border border-gold-glow flex items-center justify-center font-display text-gold text-xs shrink-0">
                OQ
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-cream text-sm leading-none">OmniQubits AI</p>
                <p className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  <span className="text-green-400 text-xs">Online</span>
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-color hover:text-cream transition-colors p-1 shrink-0"
                aria-label="Close chat"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-3 py-2.5 text-sm leading-relaxed ${
                    m.type === "bot"
                      ? "bg-obsidian-4 border border-gold-subtle text-cream-2 mr-auto"
                      : "bg-gold-dark/80 text-cream ml-auto"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Quick replies — only shown on first message */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 px-4 pb-3 shrink-0">
                {QUICK_REPLIES.map((r) => (
                  <button
                    key={r}
                    onClick={() => send(r)}
                    className="border border-gold/30 hover:border-gold text-gold text-xs px-3 py-1 rounded-full transition-colors"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex border-t border-gold-subtle shrink-0">
              <input
                type="text"
                placeholder="Type your message…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                className="flex-1 bg-obsidian text-cream text-sm px-4 py-3 outline-none placeholder:text-muted-color/40"
                aria-label="Chat message input"
              />
              <button
                onClick={() => send()}
                className="bg-gold hover:bg-gold-light text-obsidian px-4 transition-colors"
                aria-label="Send message"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle button ────────────────────────────────── */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-gold hover:bg-gold-light text-obsidian rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(201,169,110,0.4)] hover:scale-105 transition-all"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{   rotate:  90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate:  90, opacity: 0 }}
              animate={{ rotate:   0, opacity: 1 }}
              exit={{   rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
