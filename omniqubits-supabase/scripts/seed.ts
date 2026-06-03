// scripts/seed.ts
// Fills your Supabase database with all OmniQubits content
// Run with: npm run seed

import { createClient } from "@supabase/supabase-js";
import { siteConfig } from "../src/config/site";
import * as dotenv from "dotenv";
import * as path from "path";

// Load .env file
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("\n❌ Missing environment variables!");
  console.error("   Make sure your .env file has:");
  console.error("   NEXT_PUBLIC_SUPABASE_URL=...");
  console.error("   SUPABASE_SERVICE_ROLE_KEY=...\n");
  process.exit(1);
}

const supabase = createClient(url, key);

async function seed() {
  console.log("\n🌱 Seeding OmniQubits data into Supabase...\n");

  // ── Services ──────────────────────────────────────────
  const { error: svcErr } = await supabase
    .from("services")
    .upsert(
      siteConfig.services.map((s) => ({
        title: s.title, description: s.description,
        icon: s.icon, display_order: s.display_order, is_active: true,
      })),
      { onConflict: "title" }
    );
  if (svcErr) { console.error("❌ Services error:", svcErr.message); process.exit(1); }
  console.log(`  ✓ ${siteConfig.services.length} services seeded`);

  // ── Testimonials ──────────────────────────────────────
  const { error: tstErr } = await supabase
    .from("testimonials")
    .upsert(
      siteConfig.testimonials.map((t) => ({
        name: t.name, role: t.role, company: t.company,
        content: t.content, rating: t.rating, initials: t.initials,
        display_order: t.display_order, is_active: true, is_featured: false,
      })),
      { onConflict: "name" }
    );
  if (tstErr) { console.error("❌ Testimonials error:", tstErr.message); process.exit(1); }
  console.log(`  ✓ ${siteConfig.testimonials.length} testimonials seeded`);

  // ── Pricing Plans ─────────────────────────────────────
  const { error: priceErr } = await supabase
    .from("pricing_plans")
    .upsert(
      siteConfig.pricing.map((p) => ({
        name: p.name, price: p.price, period: p.period,
        tagline: p.tagline, features: p.features,
        is_featured: p.is_featured, cta_text: p.cta_text,
        cta_link: "#contact", display_order: p.display_order, is_active: true,
      })),
      { onConflict: "name" }
    );
  if (priceErr) { console.error("❌ Pricing error:", priceErr.message); process.exit(1); }
  console.log(`  ✓ ${siteConfig.pricing.length} pricing plans seeded`);

  console.log("\n✅ All data seeded!\n");
  console.log("Verify at:");
  console.log("  http://localhost:3000/api/services");
  console.log("  http://localhost:3000/api/testimonials");
  console.log("  http://localhost:3000/api/pricing\n");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
