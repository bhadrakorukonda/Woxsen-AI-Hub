A full-stack platform to manage and explore campus tools/resources.

**Tech Stack**
- Frontend: React 18 + Vite 5, Tailwind, shadcn/ui, Radix UI, React Router, React Query
- Backend: Express + TypeScript (+ Zod validation)
- ORM/DB: Prisma — SQLite (dev), Postgres later (Neon/Supabase)
- Dev UX: Proxy FE→API, scripts to run FE+API together
- CI: GitHub Actions (typecheck, lint, build, tests)

## 🚀 Quick Start (Dev)
```bash
npm install

# Prisma (dev DB)
npm run db:push
npm run db:seed   # optional

# Start FE + API together (or run separately if you prefer)
npm run dev
# FE: http://localhost:5173 (or 8082)
# API: http://localhost:5174