import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "60 s"),
});

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  if (body.website) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }


  const ip = req.headers.get("x-forwarded-for") || "anonymous";

  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  const data = parsed.data;

    // ✅ SIMPLE CLIENT (NO SSR, NO COOKIES)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY! 
    );

    const { data: result, error } = await supabase
      .from("contact_inquiries")
      .insert({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone ?? null,
          company: data.company ?? null,
          service: data.service ?? null,
          budget: data.budget ?? null,
          message: data.message,
          status: "NEW",
      })
      .select("id")
      .single();
      if (error) {
        console.log("SUPABASE FULL ERROR:", JSON.stringify(error, null, 2));
        console.log("ERROR CODE:", error.code);
        console.log("ERROR MESSAGE:", error.message);
      }

    if (error) {
      console.error("SUPABASE ERROR:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: result.id });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}