import type { Config } from "tailwindcss";

// ─────────────────────────────────────────────────────────────
// OmniQubits Design System — White + Orange Theme
// All tokens match what is used across every page file.
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
        // Compatibility aliases used by existing page classes.
        orange: {
          "500-light": "#FFB347",
          "500-dark": "#CC7000",
          "500-subtle": "rgba(255,140,0,0.12)",
          "500-glow": "rgba(255,140,0,0.35)",
        },
        obsidian: {
          DEFAULT: "#111111",
          2: "#F8F7F5",
          3: "#F0EEE9",
          4: "#E5E2DC",
          5: "#D6D2CA",
        },
        gold: {
          DEFAULT: "#FF8C00",
          light: "#FFB347",
          dark: "#CC7000",
        },

        // ── OmniQubits Brand Colors ──────────────────────
        // Orange accent system (replaces gold from dark theme)
        brand: {
          DEFAULT: "#FF8C00",   // primary orange — used as text-brand, bg-brand
          light:   "#FFB347",   // lighter orange for hover states
          dark:    "#CC7000",   // darker orange for scrollbar, depth
          subtle:  "rgba(255,140,0,0.12)",  // very faint orange for backgrounds
          glow:    "rgba(255,140,0,0.35)",  // orange glow for borders/shadows
        },

        // Off-white surface scale (light → slightly tinted)
        surface: {
          DEFAULT: "#FFFFFF",   // pure white  — bg-surface
          2:       "#F8F7F5",   // warm off-white — bg-surface-2
          3:       "#F0EEE9",   // slightly warm grey — bg-surface-3
          4:       "#E5E2DC",   // medium warm grey — bg-surface-4
          5:       "#D6D2CA",   // darker warm grey — bg-surface-5
        },

        // Text scale
        ink: {
          DEFAULT: "#111111",   // near-black — text-ink
          2:       "#333333",   // dark grey — text-ink-2
          3:       "#555555",   // medium grey — text-ink-3
          muted:   "#6B6B6B",   // muted label text — text-ink-muted
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

      boxShadow: {
        "brand-sm": "0 0 15px rgba(255,140,0,0.15)",
        "brand-md": "0 0 30px rgba(255,140,0,0.2)",
        "brand-lg": "0 0 50px rgba(255,140,0,0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
