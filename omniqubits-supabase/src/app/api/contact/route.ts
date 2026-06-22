import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

/**
 * Contact form submission schema.
 * Fields: name, email, phone, company, message
 */

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Contact number is required").max(40),
  company: z.string().max(100).optional(),
  message: z.string().min(1, "Message is required").max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, company, message } = parsed.data;

    // Get Supabase credentials from environment
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // Demo mode if not configured
    if (!supabaseUrl || !serviceKey) {
      console.log("[contact] Demo mode - Form submission:", {
        name,
        email,
        phone,
        company,
        message: message.substring(0, 50) + "...",
      });
      return NextResponse.json(
        {
          success: true,
          id: "demo-" + Date.now(),
          message: "Message received (demo mode)"
        },
        { status: 201 }
      );
    }

    // Create Supabase client with service role key (server-side only - safe)
    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false }
    });

    // Insert into contacts table
    const { data, error } = await supabase
      .from("contacts")
      .insert({
        name,
        email,
        phone,
        company: company || null,
        message,
      })
      .select("id")
      .single();

    if (error) {
      console.error("[contact] Supabase error:", error.code, error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data.id, message: "Contact form submitted successfully" },
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
