import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#080A0E", fontFamily: "'Jost', sans-serif", textAlign: "center", padding: "2rem" }}>
      <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "9rem", fontWeight: 300, color: "#C9A96E", lineHeight: 1, opacity: 0.2 }}>404</div>
      <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 300, color: "#F5F0E8", margin: "1rem 0" }}>Page Not Found</h1>
      <p style={{ color: "#8A8A8A", fontSize: "0.83rem", marginBottom: "2rem" }}>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" style={{ border: "1px solid rgba(201,169,110,0.4)", color: "#C9A96E", padding: "0.75rem 2.5rem", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Return Home</Link>
    </main>
  );
}
