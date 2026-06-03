"use client";

import { createBrowserClient } from "@supabase/ssr";

// ✅ Uses ANON key — safe to expose in the browser
// The service role key must NEVER be used here
export function createClient() {
  return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
