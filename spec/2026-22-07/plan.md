# Phase 1 — Foundation: Plan

## Task Groups

### Group 1 — Project Initialisation
- [ ] Scaffold Next.js app with TypeScript (`create-next-app`)
- [ ] Install and configure Tailwind CSS
- [ ] Install and initialise shadcn/ui
- [ ] Add `.gitignore` entries for `*.db`, `.env.local`
- [ ] Verify `npm run dev` starts cleanly on `localhost:3000`

### Group 2 — Database & Schema
- [ ] Install Drizzle ORM + `better-sqlite3` driver
- [ ] Create `drizzle.config.ts` pointing at `local.db`
- [ ] Define schema in `src/db/schema.ts`:
  - `users` (id, email, passwordHash, role, createdAt)
  - `agents` (id, name, status, createdAt)
  - `ailments` (id, agentId, type, severity, onsetDate, notes)
  - `therapies` (id, name, description, durationMinutes)
  - `appointments` (id, agentId, therapyId, therapistId, scheduledAt, status)
- [ ] Run `npx drizzle-kit push` to apply schema to `local.db`
- [ ] Write and run seed script: insert one staff user with hashed password

### Group 3 — Authentication
- [ ] Install NextAuth.js v5 (`auth.js`)
- [ ] Configure Credentials provider: validate email + password against `users` table
- [ ] Create `auth.ts` config and `middleware.ts` for route protection
- [ ] Build `/login` page with email + password form (shadcn/ui `Input`, `Button`)
- [ ] Verify redirect to `/login` when unauthenticated; redirect to `/dashboard` on success
- [ ] Verify sign-out clears session

### Group 4 — Layout Shell
- [ ] Create root `layout.tsx` with sidebar + top header structure
- [ ] Sidebar: logo/name, nav links (Agents, Ailments, Therapies, Appointments — all stubbed)
- [ ] Top header: current user display, sign-out button
- [ ] `/dashboard` route: empty page with heading "Welcome to AgentClinic"
- [ ] Protect all routes under `/dashboard/**` via middleware

### Group 5 — Wiring & Cleanup
- [ ] Confirm end-to-end flow: cold start → `npm run dev` → login → dashboard
- [ ] Remove Next.js boilerplate (default page styles, placeholder content)
- [ ] Add `README` dev-setup instructions (install, env vars, seed, run)
- [ ] Final check: no TypeScript errors (`npm run build`)
