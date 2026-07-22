# AgentClinic — Roadmap

Phases are ordered MVP-first: each phase produces something working end-to-end before the next begins.

---

## Phase 1 — Foundation
*Goal: repo boots, data models exist, staff can log in.*

- [ ] Initialize Next.js project with TypeScript, Tailwind, shadcn/ui
- [ ] Set up SQLite + Drizzle; define core schema (Agent, Ailment, Therapy, Appointment, User/Staff)
- [ ] Run first migration; seed sample data
- [ ] Implement staff authentication with NextAuth.js
- [ ] Basic layout shell: nav, sidebar, protected routes

**Done when:** a logged-in staff member sees an empty dashboard with no errors.

---

## Phase 2 — Agent & Ailment Management
*Goal: staff can create and view agents and their ailments.*

- [ ] Agent CRUD (create, list, view, edit)
- [ ] Ailment catalogue (predefined types + custom notes)
- [ ] Associate ailments with agents; severity & onset date
- [ ] Agent profile page showing active ailments

**Done when:** staff can register a new agent, add ailments, and pull up the agent's profile.

---

## Phase 3 — Therapy & Treatment Plans
*Goal: staff can define therapies and assign them to agents.*

- [ ] Therapy catalogue (type, description, duration)
- [ ] Treatment plan: link therapies to an agent's ailment
- [ ] Status tracking (scheduled → in-progress → completed)
- [ ] Therapy detail page

**Done when:** staff can prescribe a therapy for an agent's ailment and mark it in progress.

---

## Phase 4 — Appointment Booking
*Goal: agents and staff can book and manage appointments.*

- [ ] Appointment model with date, time, therapist, agent, therapy
- [ ] Booking flow: pick agent → ailment → therapy → slot
- [ ] Calendar / list view of upcoming appointments
- [ ] Cancel and reschedule actions

**Done when:** a full appointment can be booked, viewed, and cancelled through the UI.

---

## Phase 5 — Dashboard & Polish
*Goal: make the site attractive and useful at a glance (marketing + engineering).*

- [ ] Staff dashboard: KPIs — active agents, appointments today, open ailments
- [ ] Agent-facing view: upcoming appointments, treatment status
- [ ] Responsive design pass; light/dark mode
- [ ] Performance audit and accessibility review

**Done when:** the site looks polished in a modern browser and stakeholders sign off on a demo.

---

## Phase 6 — Hardening (post-MVP)
*Nice-to-have after the core is stable.*

- [ ] Email / notification reminders for appointments
- [ ] Role-based access (admin vs. therapist)
- [ ] Audit log for sensitive record changes
- [ ] Deployment pipeline (Vercel + persisted SQLite or upgrade path to Turso)
