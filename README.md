# ChemShaa — Tune In Screen (Web)

A web recreation of the ChemShaa mobile app's "Live Now / Tune In" screen, built as part of a job application task.

## Tech stack

- [Vite](https://vitejs.dev/) — build tooling
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) — CSS-first configuration via `@theme` (no `tailwind.config.js`)
- [Framer Motion](https://www.framer.com/motion/)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal.

## Project structure

```
src/
  components/
    AppHeader.tsx       # Yellow top bar with the ChemShaa wordmark
    PulsingBeacon.tsx    # The glowing red "live" indicator
  screens/
    TuneInScreen.tsx     # Composes the full screen: header, beacon, copy, CTA
  index.css              # Tailwind v4 theme tokens (colors, custom animation keyframes)
  App.tsx
```



## Bonus

Clicking "Tune In" triggers a small animated badge that peeks in from the right edge of the screen and slides back out, built with Framer Motion — included as an optional flourish, not part of the original spec.

## Notes

This is a front-end-only recreation for design/animation review purposes. It does not connect to any backend, live stream, or trivia data.
