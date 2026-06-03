"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about" },
  { label: "Pricing",  href: "/pricing" },
  { label: "Clients",  href: "/testimonials" },
  { label: "Contact",  href: "/contact" },
];

export function Navbar() {
  const pathname    = usePathname();
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-gold-subtle shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl tracking-tight shrink-0 hover:opacity-80 transition-opacity"
        >
          Omni<span className="text-gold">Qubits</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-[0.18em] uppercase transition-colors duration-200 ${
                isActive(href)
                  ? "text-gold"
                  : "text-cream/60 hover:text-gold"
              }`}
            >
              {label}
              {isActive(href) && (
                <span className="block h-px bg-gold mt-0.5" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-obsidian text-xs tracking-[0.15em] uppercase font-medium px-5 py-2.5 transition-colors shrink-0"
        >
          Start a Project
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream hover:text-gold transition-colors p-1"
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — smooth slide */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-obsidian-2 border-t border-gold-subtle px-6 py-6 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                isActive(href) ? "text-gold" : "text-cream/70 hover:text-gold"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center justify-center bg-gold hover:bg-gold-light text-obsidian text-xs tracking-[0.15em] uppercase font-medium px-5 py-3 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </nav>
  );
}