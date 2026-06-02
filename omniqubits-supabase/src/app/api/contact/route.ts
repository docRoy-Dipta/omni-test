import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1).max(50),
  lastName:  z.string().min(1).max(50),
  email:     z.string().email(),
  company:   z.string().max(100).optional(),
  service:   z.string().max(100).optional(),
  message:   z.string().min(1).max(2000),
});

export async function POST(request: NextRequest) {
  try {
    const body      = await request.json();
    const validated = schema.parse(body);
    const supabase  = await createClient();

    const { data, error } = await supabase
      .from("contact_inquiries")
      .insert({
        name:    `${validated.firstName} ${validated.lastName}`,
        email:   validated.email,
        company: validated.company ?? null,
        service: validated.service ?? null,
        message: validated.message,
        status:  "NEW",
      })
      .select("id")
      .single();

    if (error) throw error;
    return NextResponse.json({ success: true, id: data.id }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: "Validation failed", details: error.errors }, { status: 400 });
    }
    console.error("Contact error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
