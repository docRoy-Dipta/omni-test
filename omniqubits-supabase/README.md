# OmniQubits — Complete Setup Guide
## Read every word. Follow every step in order. Do not skip anything.

---

# ═══════════════════════════════════════
# PART 1 — SUPABASE SETUP (10 minutes)
# Do this FIRST before touching any code
# ═══════════════════════════════════════

## STEP 1 — Create a FREE Supabase account

1. Open your browser
2. Go to:  https://supabase.com
3. Click the big green button "Start your project"
4. Sign up using your GitHub account OR your email
   (GitHub is faster — just click "Continue with GitHub")
5. Once logged in, you will see a dashboard

---

## STEP 2 — Create a new project

1. Click the green button "New project"
2. Fill in the form:
   - Name:       omniqubits
   - Database Password: Make up a strong password, for example:  OmniQ2024!Secure
     ⚠️  WRITE THIS PASSWORD DOWN. You will not need it again but save it anyway.
   - Region: Choose the city closest to you
3. Click "Create new project"
4. Wait about 2 minutes. You will see a loading spinner. That is normal.
5. When it finishes, you will see your project dashboard.

---

## STEP 3 — Create the database tables

1. In the LEFT sidebar, click "SQL Editor"
   (It looks like a little database icon with angle brackets)
2. You will see a big empty text area
3. Open the file called:  supabase-setup.sql  (it came in this ZIP)
4. Copy ALL of its contents (Ctrl+A then Ctrl+C)
5. Paste it into the SQL Editor text area (Ctrl+V)
6. Click the green "Run" button (or press Ctrl+Enter)
7. At the bottom you will see a Results panel showing table names:
   - contact_inquiries
   - pricing_plans
   - services
   - testimonials
   ✅ If you see those 4 tables — SUCCESS. Move to Step 4.
   ❌ If you see a red error — copy the error and tell me exactly what it says.

---

## STEP 4 — Get your API keys

1. In the LEFT sidebar, click "Settings" (gear icon at the bottom)
2. Click "API" in the settings menu
3. You will see two values. Copy them carefully:

   ┌─────────────────────────────────────────────┐
   │  Project URL                                │
   │  looks like:                                │
   │  https://abcdefghij.supabase.co             │
   └─────────────────────────────────────────────┘

   ┌─────────────────────────────────────────────┐
   │  anon public  (under "Project API keys")    │
   │  looks like:                                │
   │  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...   │
   │  (very long string)                         │
   └─────────────────────────────────────────────┘

4. Keep this browser tab open. You will paste these in Step 7 below.

---

# ═══════════════════════════════════════
# PART 2 — PROJECT SETUP
# ═══════════════════════════════════════

## STEP 5 — Extract the project files

1. Find the ZIP file you downloaded (OmniQubits_Supabase_Phase1.zip)
2. Right-click it → "Extract All"
3. Extract to:  C:\Users\YourName\Documents\omniqubits
   (or anywhere you like — just remember the location)
4. Open VS Code
5. Click "File" → "Open Folder"
6. Navigate to and select the  omniqubits-supabase  folder
7. Click "Select Folder"
8. VS Code will open. You will see all the files in the left sidebar.

---

## STEP 6 — Open the Terminal in VS Code

1. In VS Code, click "Terminal" in the top menu
2. Click "New Terminal"
3. A black panel will open at the bottom of VS Code
4. You should see something like:
   PS C:\Users\YourName\Documents\omniqubits\omniqubits-supabase>

   ✅ If the path ends in  omniqubits-supabase  — you are in the right place.
   ❌ If it shows a different folder — type this and press Enter:
      cd "C:\Users\YourName\Documents\omniqubits\omniqubits-supabase"
      (replace YourName with your actual Windows username)

---

## STEP 7 — Create your .env file

In the VS Code terminal, type this EXACTLY and press Enter:
```
copy .env.example .env
```

Now open the .env file:
1. In the VS Code left sidebar, click on  .env
2. You will see the file open with placeholder text
3. Replace the two placeholder values with YOUR real values from Step 4:

BEFORE (what you see):
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.XXXXXXXXXXXX
```

AFTER (replace with your real values):
```
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghij.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your_real_key_here
```

4. Press Ctrl+S to save the file.

---

## STEP 8 — Install all packages

In the VS Code terminal, type this and press Enter:
```
npm install
```

You will see a LOT of text scrolling. That is normal.
Wait until it stops and you see the  >  prompt again.
This takes about 1-3 minutes depending on your internet speed.

---

## STEP 9 — Install ShadCN UI components

In the terminal, type this and press Enter:
```
npx shadcn@latest add button input textarea label card dialog dropdown-menu toast separator badge form sheet
```

When it asks "Ok to proceed?" — type  y  and press Enter.

Wait for it to finish. You will see lots of green checkmarks.

---

## STEP 10 — Add dotenv package (needed for seed script)

```
npm install dotenv
```

---

## STEP 11 — Seed your database

This step sends all your services, testimonials, and pricing data to Supabase.

In the terminal, type this and press Enter:
```
npm run seed
```

✅ SUCCESS looks like this:
```
🌱 Seeding OmniQubits data into Supabase...

  ✓ 6 services seeded
  ✓ 3 testimonials seeded
  ✓ 3 pricing plans seeded

✅ All data seeded!
```

❌ If you see an error like "relation does not exist":
   → You skipped Step 3. Go back and run the SQL.

❌ If you see "Missing environment variables":
   → Your .env file is wrong. Go back to Step 7.

---

## STEP 12 — Start the website

In the terminal, type this and press Enter:
```
npm run dev
```

Wait about 5-10 seconds. You will see:
```
  ▲ Next.js 15.x.x
  - Local:        http://localhost:3000
  ✓ Ready in Xs
```

---

## STEP 13 — Verify everything works

Open your browser and visit each of these addresses one by one:

┌──────────────────────────────────────────────────────┐
│  ADDRESS                        │  WHAT YOU SHOULD SEE
├──────────────────────────────────────────────────────┤
│  http://localhost:3000          │  Gold OmniQubits page with ✓ checkmarks
│  http://localhost:3000/api/health       │  {"status":"healthy","database":"connected"...}
│  http://localhost:3000/api/services     │  {"success":true,"data":[...6 services...]}
│  http://localhost:3000/api/testimonials │  {"success":true,"data":[...3 testimonials...]}
│  http://localhost:3000/api/pricing      │  {"success":true,"data":[...3 plans...]}
└──────────────────────────────────────────────────────┘

ALL 5 must work. If they do — Phase 1 is COMPLETE. 🎉

---

# ═══════════════════════════════════════
# TROUBLESHOOTING
# ═══════════════════════════════════════

## Problem: "npm: command not found"
→ Node.js is not installed properly.
→ Download from: https://nodejs.org — get the "LTS" version
→ Install it, then close and reopen VS Code

## Problem: "'copy' is not recognized"
→ Type this instead:  cp .env.example .env

## Problem: "relation does not exist" when seeding
→ You did not run the SQL. Go back to Step 3.

## Problem: "Invalid API key" or "Invalid URL"
→ Your .env values are wrong. Check them carefully.
→ Make sure there are NO spaces around the = sign
→ Make sure there are NO quote marks around the values

## Problem: Port 3000 already in use
→ Type this in terminal:  npx kill-port 3000
→ Then run:  npm run dev  again

## Problem: ShadCN install fails
→ Delete the node_modules folder and try again:
   rmdir /s /q node_modules
   npm install
   npx shadcn@latest add button input textarea label card dialog dropdown-menu toast separator badge form sheet

---

# ═══════════════════════════════════════
# HOW TO STOP AND START THE SERVER
# ═══════════════════════════════════════

To STOP the server:   Press  Ctrl+C  in the terminal
To START it again:    Type   npm run dev   and press Enter

---

# ═══════════════════════════════════════
# WHAT YOU BUILT — SUMMARY
# ═══════════════════════════════════════

Your Stack:
  Frontend:  Next.js 15 + TypeScript + Tailwind CSS + ShadCN UI
  Database:  Supabase (free, cloud, no setup needed ever again)
  Styling:   Your exact gold/obsidian design system preserved

Your Database Tables on Supabase:
  services           → Your 6 service offerings
  testimonials       → Your 3 client testimonials
  pricing_plans      → Your 3 pricing tiers (Launchpad, Ascend, Quantum)
  contact_inquiries  → Where contact form submissions go

Your API Endpoints:
  GET  /api/health           → Check if database is connected
  GET  /api/services         → Fetch all services
  GET  /api/testimonials     → Fetch all testimonials
  GET  /api/pricing          → Fetch all pricing plans
  POST /api/contact          → Submit a contact form

---

When everything works, tell me "Phase 1 complete" and we will build Phase 2:
the full homepage with all your sections — Hero, Services, Pricing,
Testimonials, and Contact form.
