# S002 validation — evidence boundary

## Authored static checks
- `src/simulation.ts`: explicit radius/grounding, camera-relative desired velocity, bounded delta, axis-separated obstacle collision and reset.
- `src/input.ts`: keyup, blur, visibilitychange, focusout, pointercancel and lostpointercapture clears. Direction pad supports simultaneous run holding.
- `src/camera.ts`: orbit and bounded zoom independent of simulation state.
- `src/scene.ts`: recognisable humanoid model, shared obstacle geometry and WebGL renderer error path.
- `tests/simulation.test.mjs`: authored simulation cases for camera-relative direction, running, stopping, obstacle collision, bounds, reset, timestep.
- GitHub commit/PR/workflow results are reported in the owner-facing closeout when actually observed; this file does not invent or predeclare any result.

## Execution evidence
- `npm run check`: **NOT_RUN LOCALLY** — network-disabled execution environment has no cached npm packages. Do not infer a pass.
- Local Chromium rendered walkthrough: **NOT_RUN** — the Vite build/dependencies are not available in the local runtime; mere presence of Chromium is not a completed browser smoke.
- Vercel deployment and remote phone walkthrough: **NOT_VERIFIED**.
- Hosted CI: outcome must be read from exact GitHub Actions run after branch/PR creation; do not preclaim it here.
- Lockfile: requested generated-on-branch by CI; only count as committed after GitHub actually confirms the file.

## Manual browser reproduction to complete in S003
Run app, focus the canvas, drive W/A/S/D and arrows, sprint with Shift, orbit while stationary, zoom limits, collide with the left obstacle and arena wall, release controls, blur browser, R reset, F1 HUD, touch buttons and rotate on touch. Compare visible coordinates and HUD.

**P1 remains IMPLEMENTED_PENDING_BROWSER_EVIDENCE, not PASS.**
