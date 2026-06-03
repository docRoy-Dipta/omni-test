# OmniQubits — AI Agency Marketing Platform

A luxury Next.js 14+ (App Router) website for OmniQubits, an AI Agency specializing in marketing, customer support, and technology solutions.

---

## 🏗️ Architecture Overview

```
src/
├── app/
│   ├── (marketing)/           # Marketing pages (route group)
│   │   ├── page.tsx           # Homepage
│   │   ├── services/          # Services page (10 services)
│   │   ├── about/             # About page
│   │   ├── pricing/           # Pricing page
│   │   ├── clients/           # Testimonials/Clients page
│   │   ├── contact/           # Contact form page
│   │   └── layout.tsx         # Shared layout (Navbar/Footer)
│   ├── api/
│   │   └── contact/           # Contact form API endpoint
│   └── layout.tsx             # Root layout
├── lib/
│   ├── supabase/
│   │   ├── client.ts          # Browser-safe Supabase client
│   │   └── server.ts          # Server-safe Supabase client
│   └── utils.ts               # Utility functions
├── components/
│   ├── ui/                    # ShadCN UI components
│   ├── Navbar.tsx             # Navigation bar
│   └── Footer.tsx             # Footer
└── hooks/                     # Custom React hooks
```

---

## 🎨 Design System

### Color Palette (Extracted from omniqubits.html)

| Token | Hex Code | Usage |
|-------|----------|-------|
| `--gold` | #C9A96E | Primary accent, buttons, highlights |
| `--gold-light` | #E8D5A8 | Hover states, gradients |
| `--gold-dark` | #8B6B3D | Secondary accent, borders |
| `--obsidian` | #080A0E | Primary background |
| `--obsidian-2` | #0E1118 | Card backgrounds |
| `--obsidian-3` | #141820 | Section backgrounds |
| `--obsidian-4` | #1C2230 | Elevated surfaces |
| `--cream` | #F5F0E8 | Primary text |
| `--cream-2` | #E8E0D0 | Secondary text |
| `--muted` | #8A8A8A | Muted/placeholder text |

### Typography

| Element | Font | Weight |
|---------|------|--------|
| Display (headings) | Cormorant Garamond | 300, 400, 600 |
| Body text | Jost | 200, 300, 400, 500 |

### Effects

- **Gold grid overlay** with 60px grid pattern
- **Radial gradients** for depth (gold accents at 4-6% opacity)
- **Noise texture** overlay at 3.5% opacity
- **Gold glow borders** on hover (35% opacity)
- **Smooth animations** with fade-up, pulse, and spin effects

---

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, services preview, testimonials, CTA |
| `/services` | Services | 10-point AI & Tech service matrix |
| `/about` | About | Brand story, mission, values, timeline |
| `/pricing` | Pricing | 3-tier pricing (Launchpad, Ascend, Quantum) |
| `/clients` | Clients | Testimonials, case studies, industries |
| `/contact` | Contact | Contact form → `/api/contact` |

---

## 🗄️ Database Setup

### SQL — Run in Supabase SQL Editor

```sql
-- ============================================
-- CONTACTS TABLE (for contact form submissions)
-- ============================================

CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous INSERT (for contact form)
CREATE POLICY "Allow public insert" ON contacts
  FOR INSERT
  WITH CHECK (true);

-- Grant permission to anon role
GRANT INSERT ON contacts TO anon;
```

### Alternative: Using Service Role Key (Recommended)

For the API route to work reliably, use the service role key:

```sql
-- Already covered above - the API uses service role key internally
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:

```env
# Required for Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Required for API contact form (service role bypasses RLS)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Where to Find Keys

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project → Settings → API
3. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** → `SUPABASE_SERVICE_ROLE_KEY` (under "Project API keys")

---

## 🚀 Running the Project

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |

### POST `/api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "Acme Inc",
  "message": "I'd like to discuss a project"
}
```

**Response (Success):**
```json
{
  "success": true,
  "id": "uuid-here",
  "message": "Contact form submitted successfully"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Error message here"
}
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | ShadCN UI |
| Database | Supabase |
| Authentication | NextAuth.js (ready) |
| Fonts | Google Fonts (Cormorant Garamond, Jost) |

---

## 📦 Package.json Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

---

## 🎯 Features Implemented

- [x] Luxury gold/obsidian design system
- [x] Responsive navigation with mobile hamburger
- [x] 6 marketing pages (Home, Services, About, Pricing, Clients, Contact)
- [x] 10-point service matrix
- [x] Contact form with Supabase integration
- [x] Testimonials/Clients page
- [x] Pricing page with 3 tiers
- [x] Animated sections with Framer Motion
- [x] Noise texture overlay
- [x] Gold grid background effects

---

## 🔨 Troubleshooting

### "Invalid API key" or "Invalid URL"
→ Check your `.env.local` file has correct values with NO spaces around `=`

### "new row violates row-level security policy"
→ The API is using anon key. Add `SUPABASE_SERVICE_ROLE_KEY` to `.env.local`

### Port 3000 already in use
```bash
npx kill-port 3000
npm run dev
```

### Database table doesn't exist
→ Run the SQL from Database Setup section in Supabase SQL Editor

---

## 📄 License

Copyright © 2025 OmniQubits. All rights reserved.

---

## 🙏 Credits

- Design inspired by [omniqubits.html](./omniqubits.html)
- Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [Supabase](https://supabase.com)