import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName:  z.string().min(1, "Last name is required").max(50),
  email:     z.string().email("Please enter a valid email address"),
  phone:     z.string().max(30).optional(),
  company:   z.string().max(100).optional(),
  service:   z.string().max(100).optional(),
  budget:    z.string().max(50).optional(),
  message:   z.string().min(1, "Message is required").max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, company, service, budget, message } = parsed.data;

    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from("contact_inquiries")
      .insert({
        name:    `${firstName} ${lastName}`,
        email,
        phone:   phone   || null,
        company: company || null,
        service: service || null,
        budget:  budget  || null,
        message,
        status: "NEW",
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

    return NextResponse.json({ success: true, id: data.id }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[contact] Unexpected error:", message);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}