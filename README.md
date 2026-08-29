# ChemShaa — Tune In Screen (Web)

A web recreation of the ChemShaa mobile app's "Live Now / Tune In" screen, built as part of a job application task.

## Tech stack

- [Vite](https://vitejs.dev/) — build tooling
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) — CSS-first configuration via `@theme` (no `tailwind.config.js`)
- [Framer Motion](https://www.framer.com/motion/) — the "Employ me" peek-in animation

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

## Design decisions

- **Colors** were sampled from the provided screenshots and approximated as design tokens in `index.css` (`--color-brand-yellow`, `--color-beacon-core`, etc.). If pixel-exact matching is needed, re-sample the source screenshots with a color picker.
- **The beacon glow animation** was not visible in the static screenshots provided, so it was interpreted and built from scratch: a pulsing core circle, three staggered expanding rings, and a soft radial gradient halo behind it, meant to read as a "live broadcast" glow. Durations/easing are easy to retune in `index.css` if the real app's timing differs.
- **Component split** keeps `AppHeader` and `PulsingBeacon` isolated and reusable, since both are likely to reappear on other screens (e.g. the live trivia/host view).

## Bonus

Clicking "Tune In" triggers a small animated "Employ me" badge that peeks in from the right edge of the screen and slides back out, built with Framer Motion — included as an optional flourish, not part of the original spec.

## Notes

This is a front-end-only recreation for design/animation review purposes. It does not connect to any backend, live stream, or trivia data.