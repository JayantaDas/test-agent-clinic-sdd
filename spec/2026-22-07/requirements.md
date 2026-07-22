# Phase 1 — Foundation: Requirements

## Scope

Stand up the full project skeleton so all future phases have a working base to build on.
A logged-in staff member should be able to reach an empty dashboard with no errors.

## In Scope

- Next.js 14+ (App Router) project initialised with TypeScript, Tailwind CSS, and shadcn/ui
- SQLite database file + Drizzle ORM configured
- Core Drizzle schema defined: `Agent`, `Ailment`, `Therapy`, `Appointment`, `User` (staff)
- First migration applied; database file created on `npm run dev`
- Seed script: one test staff user (email + hashed password) only — no domain data
- Staff authentication via NextAuth.js v5 using the Credentials provider (email + password)
- Protected routes: unauthenticated requests redirect to `/login`
- Layout shell: fixed sidebar (primary nav links) + top header (user identity / sign-out)
- Nav links stubbed for future phases (Agents, Ailments, Therapies, Appointments)

## Out of Scope

- Dark mode (deferred to Phase 5)
- Email / notifications of any kind
- Any agent, ailment, therapy, or appointment CRUD screens
- Responsive / mobile layout optimisation
- Role-based access control

## Key Decisions

| Decision | Choice | Reason |
|---|---|---|
| Auth provider | Credentials (email + password) | No external OAuth dependency; staff accounts managed internally |
| Database | SQLite + Drizzle | Zero infrastructure; file created on first run; see `tech-stack.md` |
| Component library | shadcn/ui + Tailwind | Accessible, composable, TypeScript-native; aligns with marketing's polish requirement |
| Layout | Fixed sidebar + top header | Standard admin shell; maps well to future nav items from Susan's feature list |

## Context

See `spec/mission.md` for who this serves and `spec/tech-stack.md` for the full stack rationale.
Phase 1 is a prerequisite for all subsequent phases — no domain features are built here.
