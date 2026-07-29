# Phase 1 — Foundation: Validation

## Merge Criteria

Phase 1 is ready to merge when **all** checks below pass.

---

## 1. Build & Type Safety

- [ ] `npm run build` completes with zero TypeScript errors
- [ ] No `any` types introduced without explicit justification in a comment

## 2. Database

- [ ] `npx drizzle-kit push` runs without error on a clean checkout
- [ ] `local.db` is created automatically on first run (not committed to git)
- [ ] Seed script creates exactly one staff user; re-running is idempotent (no duplicates)

## 3. Authentication

- [ ] Visiting any `/dashboard/**` route while unauthenticated redirects to `/login`
- [ ] Logging in with seeded credentials (`test@agentclinic.dev` / seed password) redirects to `/dashboard`
- [ ] Logging in with wrong password shows an error message; does not grant access
- [ ] Sign-out clears the session and redirects to `/login`

## 4. Layout Shell

- [ ] `/dashboard` renders the fixed sidebar and top header with no console errors
- [ ] Sidebar nav links are visible (Agents, Ailments, Therapies, Appointments)
- [ ] Top header shows the logged-in user's email and a working sign-out button
- [ ] Page renders correctly in Chrome, Firefox, and Safari (latest stable)

## 5. Out-of-Scope Check

- [ ] No dark-mode styles or toggle are present
- [ ] No email-sending code or dependencies are introduced
- [ ] No agent, ailment, therapy, or appointment data screens exist

## 6. Developer Experience

- [ ] A new developer can follow README instructions and reach the dashboard in under 5 minutes
- [ ] `npm run dev` starts without manual steps beyond `npm install` and copying `.env.local.example`
