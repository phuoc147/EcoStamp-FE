# EcoStamp Frontend

EcoStamp frontend built with Next.js App Router, TypeScript, and Tailwind CSS.

This README reflects the current source state as of 2026-04-16.

## 1. Tech Stack

- Next.js 16.2.3 (App Router)
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- ESLint 9

## 2. Requirements

- Node.js 20+ recommended
- npm 10+

## 3. Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 4. Scripts

- `npm run dev`: start development server
- `npm run build`: production build
- `npm run start`: run production build
- `npm run lint`: run ESLint

## 5. Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css

    (auth)/
      login/page.tsx
      signin/consumer/page.tsx
      signin/partner/page.tsx
      signin/employee/page.tsx

    (consumer)/
      layout.tsx
      home/page.tsx
      home/_components/*
      map/page.tsx
      scan/page.tsx
      collection/page.tsx
      profile/page.tsx

    (partner)/
      layout.tsx
      dashboard/page.tsx
      campaign/page.tsx
      verification/page.tsx

  components/
    BottomBars.tsx
    ConsumerHeader.tsx

  features/
    auth/api.ts
    auth/lib.ts
    auth/types.ts
    campaign/types.ts
    user/types.ts
    verification/types.ts

  providers/
    auth-provider.tsx
    index.tsx

  lib/
    auth/   (currently empty)

  types/
    auth.ts
```

## 6. Route Map

- `/` redirects to `/login`
- `/login` login form (role selector + username/password)
- `/signin/consumer`, `/signin/partner`, `/signin/employee` placeholder pages
- Consumer group routes:
  - `/home` implemented UI
  - `/map`, `/scan`, `/collection`, `/profile` placeholders
- Partner group routes:
  - `/dashboard`, `/campaign`, `/verification` placeholders

## 7. Auth Flow (Current)

Client-side auth APIs are defined in `src/features/auth/api.ts`:

- `POST /api/login`
- `POST /api/signin`
- `GET /api/me`
- `POST /api/logout`

Global provider `src/providers/auth-provider.tsx` calls `getSession()` on mount.

Server helper exists in `src/features/auth/lib.ts` via cookie `ecostamp_session`.

Important current state:

- No route handlers exist in `src/app/api/*` yet.
- Therefore `/api/me`, `/api/login`, `/api/signin`, `/api/logout` currently return 404 unless you add those handlers.
- Role guards in `src/app/(consumer)/layout.tsx` and `src/app/(partner)/layout.tsx` are currently commented out.

## 8. Current UI Notes

- Mobile-first centered shell with max width 430px in root layout.
- Consumer has animated bottom navigation (`BottomBars.tsx`) using Framer Motion.
- Consumer header uses Material Symbols via Google Fonts link in root layout.

## 9. Known Issues

### 9.1 Repeating `GET /api/me 404`

Cause: `AuthProvider` calls `GET /api/me` but no App Router API route exists.

### 9.2 Turbopack Panic (`Next.js package not found`)

This is typically a dev-server resolve/cache issue and can be triggered repeatedly when project state is inconsistent.

Try:

```bash
rm -rf .next
npm install
npm run dev -- --webpack
```

On Windows PowerShell:

```powershell
Remove-Item -Recurse -Force .next
npm install
npm run dev -- --webpack
```

If Webpack mode is stable, keep using it for local development until Turbopack issue is resolved.

## 10. Recommended Next Steps

- Add App Router route handlers in `src/app/api/login/route.ts`, `src/app/api/signin/route.ts`, `src/app/api/me/route.ts`, and `src/app/api/logout/route.ts`.
- Re-enable role-based guard checks in consumer/partner layouts after API routes are ready.
- Replace placeholder pages with actual feature screens.
- Normalize import paths (prefer one alias style consistently).