"use client";

import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser-safe Supabase client using the ANON key.
 * This client is safe to use in client components and browser code.
 * Uses cookies for session management.
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables."
    );
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}