// Auth routes — will be wired up in Phase 3
// Supabase Auth handles login/register natively
export async function GET() {
  return new Response("Auth ready — Phase 3", { status: 200 });
}
