export default function HomePage() {
  const checks = [
    "Next.js 15 App Router",
    "TypeScript",
    "Tailwind CSS + OmniQubits Design Tokens",
    "ShadCN UI Components",
    "Supabase Client (Browser + Server)",
    "All API Routes",
    "Seed Data in Supabase",
  ];

  return (
    <main style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "#080A0E", fontFamily: "'Jost', sans-serif", padding: "2rem",
    }}>
      <div style={{ textAlign: "center", maxWidth: "560px", width: "100%" }}>

        {/* Logo */}
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.8rem", fontWeight: 600, color: "#F5F0E8", letterSpacing: "0.04em", marginBottom: "0.25rem" }}>
          Omni<span style={{ color: "#C9A96E" }}>Qubits</span>
        </div>
        <div style={{ fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#8A8A8A", marginBottom: "2.5rem" }}>
          Beyond the Horizon of Innovation
        </div>

        {/* Status badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.25)", borderRadius: "2px", padding: "0.4rem 1.2rem", marginBottom: "2.5rem" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 6px #4ade80" }} />
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E" }}>
            Phase 1 — Infrastructure Online
          </span>
        </div>

        {/* Checklist */}
        <div style={{ background: "#0E1118", border: "1px solid rgba(201,169,110,0.12)", padding: "1.75rem 2rem", borderRadius: "2px", textAlign: "left", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>
            System Status
          </p>
          {checks.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.85rem", padding: "0.45rem 0", borderBottom: "1px solid rgba(201,169,110,0.06)", fontSize: "0.8rem", color: "#E8E0D0" }}>
              <span style={{ color: "#4ade80", fontSize: "0.75rem" }}>✓</span>
              {item}
            </div>
          ))}
        </div>

        {/* API Links */}
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            ["/api/health",       "Health"],
            ["/api/services",     "Services"],
            ["/api/testimonials", "Testimonials"],
            ["/api/pricing",      "Pricing"],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ border: "1px solid rgba(201,169,110,0.35)", color: "#C9A96E", padding: "0.55rem 1.2rem", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
              {label} API
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}
