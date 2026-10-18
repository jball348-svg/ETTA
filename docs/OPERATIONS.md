# Run and deploy ETTA (after S002)

Requires Node.js 22.12+ and npm:

```bash
npm ci
npm run check
npm run dev
```

Click the stage to focus; **W/A/S/D** or arrows walk, **Shift** runs, pointer drag orbits, mouse wheel zooms, **R** resets, **F1** toggles developer HUD. A visible reset and diagnostics button are also provided. On touch-screen layouts use the direction pad and RUN, with scene dragging for camera. HUD reports actual coordinates, heading, movement state, velocity, grounded flag and approximate FPS. Releasing keys or losing keyboard focus stops movement.

**Acceptance warning:** S002 unit tests are not a real browser test. S003 must inspect rendering, controls and touch to upgrade P1 gate; Vercel has not been independently checked.

## Vercel static deployment

Import `jball348-svg/ETTA` as Vite; build `npm run build`, output `dist`. There is no S002 backend and **no API key needed**. Only claim deployment verification after actually opening the deployed URL in a browser and testing the stage.

## P3 Gemma (not yet implemented)

Only future server functions may read `GEMINI_API_KEY` and `GEMMA_MODEL`; do not commit them, prefix them `VITE_` or include in client code. Add authentication, rate limits, quotas, timeouts, strict legal actions and decision provenance before exposing inference.

No home, cloud model, autonomous worker or persistent memory exists yet.
