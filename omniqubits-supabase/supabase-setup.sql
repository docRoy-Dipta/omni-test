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

-- ── Contacts Table ────────────────────────────────────────
create table if not exists contacts (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name       text not null,
  email      text not null,
  phone      text not null,
  company    text,
  message    text not null
);

-- If the contacts table already existed before phone was added, keep it in sync.
alter table contacts add column if not exists phone text;

-- Contact forms should allow returning prospects to submit again.
alter table contacts drop constraint if exists email;
alter table contacts drop constraint if exists phone;

create index if not exists contacts_created_at_idx on contacts (created_at desc);
create index if not exists contacts_email_idx on contacts (email);
create index if not exists contacts_phone_idx on contacts (phone);

-- ── Row Level Security (RLS) ──────────────────────────────
alter table services          enable row level security;
alter table testimonials       enable row level security;
alter table pricing_plans      enable row level security;
alter table contacts           enable row level security;

-- Drop existing policies first (safe to re-run)
drop policy if exists "Public can read services"       on services;
drop policy if exists "Public can read testimonials"   on testimonials;
drop policy if exists "Public can read pricing_plans"  on pricing_plans;
drop policy if exists "Anyone can submit contact form" on contacts;

create policy "Public can read services"
  on services for select using (true);

create policy "Public can read testimonials"
  on testimonials for select using (true);

create policy "Public can read pricing_plans"
  on pricing_plans for select using (true);

create policy "Anyone can submit contact form"
  on contacts for insert with check (true);

-- Least-privilege grants for public website access.
grant select on services, testimonials, pricing_plans to anon;
grant insert on contacts to anon;

-- Confirm tables
select table_name from information_schema.tables
where table_schema = 'public'
order by table_name;
