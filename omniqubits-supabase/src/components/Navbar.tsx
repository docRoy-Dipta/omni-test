"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/95 backdrop-blur-md border-b border-gold-subtle">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-tight">
          Omni<span className="text-gold">Qubits</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
          <Link href="/about" className="hover:text-gold transition-colors">About</Link>
          <Link href="/pricing" className="hover:text-gold transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
        </div>

        <Button asChild className="hidden md:block bg-gold hover:bg-gold-light text-obsidian">
          <Link href="/contact">Start a Project</Link>
        </Button>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-obsidian-2 border-t border-gold-subtle py-8 px-6">
          <div className="flex flex-col gap-6 text-lg">
            <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Button asChild className="bg-gold text-obsidian">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}