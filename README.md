# EcoStamp Frontend

Frontend application for **EcoStamp**, built with **Next.js App Router + TypeScript**, using a feature-based architecture to separate domains such as authentication, campaigns, verification, and user management.

---

## 📌 Table of Contents

- Tech Stack
- Project Architecture
- Folder Structure
- Core Concepts
  - Routing Strategy
  - Authentication Flow
  - State Management
  - Role-Based Access
- API Layer
- UI Components
- Development Setup
- Available Scripts
- Current Status
- Known Gaps
- Roadmap

---

## 🧱 Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- ESLint 9

---

## 🏗 Project Architecture

The project follows a **feature-based modular architecture** combined with **Next.js route groups**:

- `app/` → routing layer (Next.js App Router)
- `features/` → domain logic (types + future services)
- `lib/` → infrastructure (API clients, session handling)
- `providers/` → global state management
- `components/` → shared UI components

Separation of concerns:
- Routing logic is isolated in `app/`
- Business/domain logic is in `features/`
- Infrastructure (API/session) is in `lib/`

---

## 📁 Folder Structure

```text
src/
  app/
    (auth)/
      login/
        page.tsx
      signin/
        consumer/page.tsx
        partner/page.tsx
        employee/page.tsx

    (consumer)/
      layout.tsx
      home/page.tsx
      profile/page.tsx

    (partner)/
      layout.tsx
      dashboard/page.tsx
      campaign/page.tsx
      verification/page.tsx

    globals.css
    layout.tsx
    page.tsx

  components/
    BottomBars.tsx

  features/
    auth/types.ts
    campaign/types.ts
    verification/types.ts
    user/types.ts

  lib/
    auth/
      auth-client.ts
      session-server.ts

  providers/
    auth-provider.tsx
    index.tsx

  types/
    auth.ts