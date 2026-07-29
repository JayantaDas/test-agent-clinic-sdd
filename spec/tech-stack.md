# AgentClinic — Tech Stack

## Guiding Principles

- TypeScript end-to-end (engineering requirement)
- Modern, browser-first UI (marketing requirement)
- Single repository, minimal operational overhead

## Stack

### Frontend & Backend
| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js (App Router)** | Full-stack TypeScript in one repo; excellent dashboard support via React Server Components; strong ecosystem |
| Styling | **Tailwind CSS** | Utility-first, fast to build attractive UIs that meet marketing's bar |
| Component library | **shadcn/ui** | Accessible, unstyled-by-default components built on Radix UI; integrates seamlessly with Tailwind |
| API | **Next.js Route Handlers** | Co-located with the app; no separate server to operate |

### Data
| Layer | Choice | Rationale |
|---|---|---|
| Database | **SQLite** | Zero-infrastructure; single file on disk; ideal for local dev and small-scale deploys |
| ORM | **Drizzle** | Lightweight TypeScript ORM with first-class SQLite support; type-safe queries; no separate migration server needed |
| Auth | **NextAuth.js (Auth.js v5)** | Handles staff login with minimal setup; integrates with Next.js natively |

### Tooling
| Tool | Choice |
|---|---|
| Language | TypeScript 5+ |
| Runtime | Node.js 20 LTS |
| Package manager | npm |
| Linting | ESLint + Prettier |
| Testing | Vitest + React Testing Library |

## Local Development

- SQLite database file created automatically on first run — no Docker required
- `npm run dev` starts the Next.js dev server on `localhost:3000`
- Drizzle migrations run with `npx drizzle-kit push`
- `npm test` runs the Vitest suite, used to validate features against spec
