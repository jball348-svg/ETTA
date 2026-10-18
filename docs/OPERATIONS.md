# Operating ETTA — S002

Requires Node 22.12+ and npm.

```sh
npm ci
npm run check
npm run dev
```

`package-lock.json` was generated in GitHub Actions from the S002 session branch (bot commit `c16c960b09c7d399f4ec37aa6cc7957a0b77cfd4`). CI is configured for reproducible `npm ci` installation. `npm run check` executes TypeScript checking, Node physics regression tests and Vite production build.

Click the 3D arena to focus. WASD/arrows move Etta relative to the orbit camera; Shift speeds up, wheel zooms, drag orbits, R resets, F1 toggles HUD. Touch-pad buttons on coarse-pointer devices move her without network requests. No model or autonomous decision loop exists.

Vercel target: import GitHub repo as a Vite static site, command `npm run build`, output `dist`. Do not set client-side API keys. No live deployment is verified; an HTTP response alone does not certify WebGL controls. See `sessions/S002/VALIDATION.md`.

For future P3 only: Google-hosted Gemma credentials must be stored as server-only `GEMINI_API_KEY` (never `VITE_*`), with a provider adapter, quotas, authentication, error handling and action validation. Never assume free unlimited usage.
