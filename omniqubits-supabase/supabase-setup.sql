-- ═══════════════════════════════════════════════════════════
-- OmniQubits — Supabase Database Setup
-- PASTE THIS ENTIRE FILE into Supabase → SQL Editor → Run
-- ═══════════════════════════════════════════════════════════

-- ── Services Table ────────────────────────────────────────
create table if not exists services (
  id            uuid primary key default gen_random_uuid(),
  title         text not null unique,
  description   text not null,
  icon          text default '✦',
  display_order integer default 0,
  is_active     boolean default true,
  created_at    timestamptz default now()
);

-- ── Testimonials Table ────────────────────────────────────
create table if not exists testimonials (
  id            uuid primary key default gen_random_uuid(),
  name          text not null unique,
  role          text not null,
  company       text not null,
  content       text not null,
  rating        integer default 5 check (rating >= 1 and rating <= 5),
  initials      text default '',
  avatar_url    text,
  is_active     boolean default true,
  is_featured   boolean default false,
  display_order integer default 0,
  created_at    timestamptz default now()
);

-- ── Pricing Plans Table ───────────────────────────────────
create table if not exists pricing_plans (
  id            uuid primary key default gen_random_uuid(),
  name          text not null unique,
  price         text not null,
  period        text not null,
  tagline       text not null,
  features      jsonb default '[]',
  is_featured   boolean default false,
  cta_text      text default 'Get Started',
  cta_link      text default '#contact',
  display_order integer default 0,
  is_active     boolean default true,
  created_at    timestamptz default now()
);

-- ── Contact Inquiries Table ───────────────────────────────
create table if not exists contact_inquiries (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  company    text,
  service    text,
  message    text not null,
  status     text default 'NEW' check (status in ('NEW','REVIEWED','REPLIED','CLOSED')),
  created_at timestamptz default now()
);

-- ── Row Level Security (RLS) ──────────────────────────────
-- Allow anyone to READ services, testimonials, pricing (public data)
alter table services          enable row level security;
alter table testimonials       enable row level security;
alter table pricing_plans      enable row level security;
alter table contact_inquiries  enable row level security;

create policy "Public can read services"
  on services for select using (true);

create policy "Public can read testimonials"
  on testimonials for select using (true);

create policy "Public can read pricing_plans"
  on pricing_plans for select using (true);

-- Allow anyone to INSERT contact form submissions
create policy "Anyone can submit contact form"
  on contact_inquiries for insert with check (true);

-- Confirm everything was created
select table_name from information_schema.tables
where table_schema = 'public'
order by table_name;
