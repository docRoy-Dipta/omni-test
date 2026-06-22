import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

// ─────────────────────────────────────────────────────────────
// Validation schema
// Fields match the contacts table in Supabase exactly.
// ─────────────────────────────────────────────────────────────
const contactSchema = z.object({
  name:    z.string().min(1, "Name is required").max(100),
  email:   z.string().email("Please enter a valid email address"),
  phone:   z.string().min(1, "Contact number is required").max(40),
  company: z.string().max(100).optional(),
  budget:  z.string().max(80).optional(),
  message: z.string().min(1, "Message is required").max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate incoming data
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error:   "Validation failed",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, phone, company, budget, message } = parsed.data;

    // Load credentials from environment (server-side only — never exposed to browser)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // Demo mode fallback — safe to use during development/testing
    if (!supabaseUrl || !serviceKey) {
      console.log("[contact] Demo mode — form submission received:", {
        name,
        email,
        phone,
        company,
        budget,
        message: message.substring(0, 60) + "...",
      });
      return NextResponse.json(
        {
          success: true,
          id:      "demo-" + Date.now(),
          message: "Message received (demo mode — Supabase not configured)",
        },
        { status: 201 }
      );
    }

    // Create Supabase client using service role key
    // This bypasses RLS so inserts always succeed from the server
    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false },
    });

    // Insert into the contacts table
    const { data, error } = await supabase
      .from("contacts")
      .insert({
        name,
        email,
        phone,
        company: company || null,
        budget:  budget  || null,
        message,
        status:  "NEW",
      })
      .select("id")
      .single();

    if (error) {
      console.error("[contact] Supabase insert error:", error.code, error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id:      data.id,
        message: "Message received. We will be in touch within 24 business hours.",
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[contact] Unexpected error:", message);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
