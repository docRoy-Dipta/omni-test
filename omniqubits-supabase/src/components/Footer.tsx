import Link from "next/link";

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
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
  { label: "Client Stories", href: "/clients" },
  { label: "Contact",        href: "/contact" },
];

const connect = [
  { label: "LinkedIn",    href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Instagram",   href: "#" },
];

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-orange-subtle">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* ── Top grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 pb-14 border-b border-orange-subtle">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block font-display text-2xl mb-4 hover:opacity-80 transition-opacity"
            >
              Omni<span className="text-orange-500">Qubits</span>
            </Link>
            <p className="text-black/70 text-sm leading-relaxed mb-6">
              A limitless, all-encompassing approach to marketing, customer
              support, and technology — for the businesses of tomorrow.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-500 text-xs tracking-[0.2em] uppercase">
                Accepting New Clients
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-orange-500 text-xs tracking-[0.25em] uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-black/70 hover:text-orange-500 transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-orange-500 text-xs tracking-[0.25em] uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-black/70 hover:text-orange-500 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-orange-500 text-xs tracking-[0.25em] uppercase mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {connect.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-black/70 hover:text-orange-500 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@omniqubits.com"
                  className="text-sm text-black/70 hover:text-orange-500 transition-colors duration-200 break-all"
                >
                  hello@omniqubits.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-black/40 text-xs tracking-[0.05em]">
            © {year} OmniQubits. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs text-black/40 hover:text-orange-500 transition-colors"
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
