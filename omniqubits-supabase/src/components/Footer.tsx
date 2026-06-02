import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-obsidian-2 border-t border-gold-subtle py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl mb-4">Omni<span className="text-gold">Qubits</span></div>
          <p className="text-muted-color text-sm">Beyond the Horizon of Innovation</p>
        </div>

        <div>
          <h4 className="font-medium mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-color">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-color">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Insights</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Contact</h4>
          <p className="text-sm text-muted-color">hello@omniqubits.com</p>
          <p className="text-xs text-muted-color mt-6">© 2026 OmniQubits. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}