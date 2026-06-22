import type { Config } from "tailwindcss";

// ─────────────────────────────────────────────────────────────
// OmniQubits Design System — White + Orange Theme
// Priority: Clean, readable, honest token names.
// Every class used in every page file is defined here.
// ─────────────────────────────────────────────────────────────

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // ── Orange Brand Accent ───────────────────────────
        // Used as: text-brand, bg-brand, border-brand
        brand: {
          DEFAULT: "#FF8C00",            // primary orange
          light:   "#FFB347",            // hover / lighter shade
          dark:    "#CC7000",            // depth / scrollbar thumb
          subtle:  "rgba(255,140,0,0.12)",  // faint bg tint
          glow:    "rgba(255,140,0,0.35)",  // glow borders / shadows
        },

        // ── Surface Scale (white → warm grey) ────────────
        // Used as: bg-surface, bg-surface-2, bg-surface-3 etc.
        surface: {
          DEFAULT: "#FFFFFF",   // pure white
          2:       "#F8F7F5",   // warm off-white
          3:       "#F0EEE9",   // light warm grey
          4:       "#E5E2DC",   // medium warm grey
          5:       "#D6D2CA",   // deeper warm grey
        },

        // ── Ink Scale (text) ──────────────────────────────
        // Used as: text-ink, text-ink-2, text-ink-muted
        ink: {
          DEFAULT: "#111111",  // near-black body text
          2:       "#333333",  // slightly lighter body
          3:       "#555555",  // secondary text
          muted:   "#6B7280",  // labels, captions, placeholder
        },

        // ── ShadCN Required Semantic Tokens ──────────────
        border:     "hsl(var(--border))",
        input:      "hsl(var(--input))",
        ring:       "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
        sans:    ["var(--font-body)", "sans-serif"],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      boxShadow: {
        "brand-sm": "0 0 15px rgba(255,140,0,0.15)",
        "brand-md": "0 0 30px rgba(255,140,0,0.20)",
        "brand-lg": "0 0 50px rgba(255,140,0,0.25)",
        "card":     "0 2px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 32px rgba(0,0,0,0.10)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "brand-pulse": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,140,0,0)" },
          "50%":     { boxShadow: "0 0 20px 4px rgba(255,140,0,0.25)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%,100%": { transform: "scale(1)",    opacity: "1" },
          "50%":     { transform: "scale(1.05)", opacity: "0.8" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-up":        "fade-up 0.7s ease-out forwards",
        "fade-in":        "fade-in 0.5s ease-out forwards",
        "brand-pulse":    "brand-pulse 2.5s ease-in-out infinite",
        marquee:          "marquee 22s linear infinite",
        "pulse-slow":     "pulse-slow 4s ease-in-out infinite",
        "spin-slow":      "spin-slow 12s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
