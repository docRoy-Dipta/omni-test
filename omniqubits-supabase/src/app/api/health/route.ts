import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  let dbStatus = "disconnected";
  let dbPingMs = 0;

  try {
    const supabase = await createClient();
    const start    = Date.now();
    const { error } = await supabase.from("services").select("id").limit(1);
    dbPingMs = Date.now() - start;
    dbStatus = error ? "error" : "connected";
  } catch {
    dbStatus = "error";
  }

  return NextResponse.json(
    {
      status:      dbStatus === "connected" ? "healthy" : "degraded",
      service:     "OmniQubits API",
      version:     "1.0.0",
      database:    dbStatus,
      provider:    "Supabase",
      dbPingMs,
      environment: process.env.NODE_ENV,
      timestamp:   new Date().toISOString(),
    },
    { status: dbStatus === "connected" ? 200 : 503 }
  );
}
