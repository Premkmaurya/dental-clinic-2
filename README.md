# Dental Clinic (React + TypeScript + Vite)

A small marketing and booking frontend for a dental clinic built with React, TypeScript, Vite and Tailwind CSS.

## Features

- Responsive marketing pages (Home, Services, About, Contact)
- Booking form + booking flow and success page
- Doctors listing and profile pages
- Image gallery and testimonials carousel
- SEO helpers and shared components

## Local development

Prerequisites: Node.js (18+ recommended) and npm or yarn.

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linters:

```bash
npm run lint
```

## Project structure (important files)

- `src/main.tsx` — App bootstrap
- `src/App.tsx` — Root app component
- `src/layouts/MainLayout.tsx` — Primary layout and navigation
- `src/pages/` — Route pages (Home, Services, Booking, etc.)
- `src/components/` — Reusable UI components
- `src/context/` — React contexts (booking, theme)
- `src/data/` — Static content and fixture data

## Scripts

- `dev` — start Vite dev server with HMR
- `build` — Type-check and build production assets
- `preview` — preview production build
- `lint` — run ESLint across the project

## Notes & next steps

- The app uses Tailwind CSS for styling; see `tailwind.config.js` for theme tokens.
- If you add type-aware ESLint rules, update `tsconfig.app.json` paths referenced by the linter.

If you'd like, I can:

- add a short usage section for contributors
- include environment variable examples
- generate a minimal deployment guide

---
Updated to match this repository's structure and scripts.
