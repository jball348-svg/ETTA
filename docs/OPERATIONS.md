# Operating ETTA — S002

Requires Node 22.12+ and npm.

```sh
npm install
npm run check
npm run dev
```

After a generated lockfile is committed and verified, use `npm ci` for clean reproducible installation. `npm run check` includes TypeScript, Node regression tests and a Vite production build. A clean installer/hosted run must be checked before calling it CI_PASS.

Tap/click the 3D arena to focus. WASD/arrows move Etta relative to the orbit camera; Shift speeds up, wheel zooms, drag orbits, R resets, F1 toggles HUD. Touch-pad buttons on coarse-pointer devices move her without network requests. No model or autonomous decision loop exists.

Vercel target: import GitHub repo as a Vite static site, command `npm run build`, output `dist`. Do not set client-side API keys. No live deployment is verified; an HTTP response alone does not certify WebGL controls. See `sessions/S002/VALIDATION.md`.

For future P3 only: Google-hosted Gemma credentials must be stored as server-only `GEMINI_API_KEY` (never `VITE_*`), with a provider adapter, quotas, authentication, error handling and action validation. Never assume free unlimited usage.
