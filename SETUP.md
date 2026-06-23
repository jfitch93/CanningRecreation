# Canning Recreation — Setup Guide

## Prerequisites
- Node.js 18+ (install via https://nodejs.org or `nvm install --lts`)
- A Sanity account (free at https://sanity.io)
- A Vercel account (free at https://vercel.com)

---

## 1. Create a Sanity project

```bash
# From the project root:
npx sanity@latest init --env
```
Choose:
- "Create new project"
- Dataset name: `production`
- This will create a `sanity.io/manage` project and write your projectId to `.env.local`

**Or** create manually at https://sanity.io/manage and note your Project ID.

---

## 2. Set up environment variables

Copy the example file:
```bash
cp .env.local.example .env.local
```

Fill in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz   # from sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_REVALIDATION_SECRET=<run: openssl rand -hex 32>
```

---

## 3. Install dependencies and run

```bash
npm install
npm run dev
```

- Website: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

---

## 4. Deploy to Vercel

```bash
npx vercel
```

Add all `.env.local` variables in the Vercel dashboard under Project → Settings → Environment Variables.

---

## 5. Wire up the revalidation webhook

In Sanity (https://sanity.io/manage → Project → API → Webhooks):

1. **Name:** Vercel Revalidation  
2. **URL:** `https://your-site.vercel.app/api/revalidate`  
3. **Trigger on:** Create, Update, Delete  
4. **HTTP Header:** `Authorization: Bearer <your SANITY_REVALIDATION_SECRET>`

After this, every Publish in the Studio instantly updates the live site.

---

## Content structure

| Section in Studio | What it controls |
|---|---|
| 📣 Announcements | Top banner on every page |
| 📅 Events | Events page + homepage strip |
| 🏃 Programs | Programs page |
| 🏒 Facilities | Facilities page + homepage spotlight |
| 👥 Commission Members | About page team grid |
| ⚙️ Site Settings | Footer info, tagline, founding year |
