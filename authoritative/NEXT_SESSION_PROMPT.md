# ETTA S003 — VERIFY ETTA'S BODY IN A REAL BROWSER (FUTURE / NOT EXECUTED)

**COMPLETE STANDALONE SESSION PROMPT.** S003 is installed by S002 and is FUTURE / NOT EXECUTED. The owner's next separate "run next session" invocation authorises execution of S003 **alone**. Do not execute S004 on the same invocation.

## Preflight and boundaries

Repository: `jball348-svg/ETTA`; branch `main`. Reread current main SHA, `AGENTS.md`, `PROJECT_CHARTER.md`, `ROADMAP.md`, `authoritative/STATE.json`, `docs/QUALITY_STANDARD.md`, `docs/PHASE_GATES.md`, `docs/ARCHITECTURE.md`, and every artifact in `sessions/S002`.

Remain in P1 BODY until real accepted evidence justifies transition. **Do not implement P2 HOME, P3 inference or P4 autonomy** while P1 browser acceptance is outstanding. Keep source secrets out of Vite, keep MANUAL / DEV explicit and preserve world-owned collision.

## Mission

**Validate Etta's body and all developer movement controls in a real browser, fix any observed issues, and accept or honestly defer the P1 gate.** A passing build alone does not prove the rendered 3D character is visible or playable.

## Priority steps

1. From clean checkout and committed npm lockfile run `npm ci`, `npm run check`, `npm run build` and preview site. Record exact Node version and command outputs.
2. Open real Chromium (or another modern WebGL-capable browser), observe visible humanoid Etta, arena, box, follow camera and HUD. Capture screenshot or reproducible direct observation. Check console.
3. Exercise W/A/S/D and arrows after clicking scene, Shift run, diagonal normalisation, key-up stopping, stage blur/window blur/visibility release. Confirm camera-relative walking after dragging to orbit; test bounded wheel zoom and distinct camera-versus-body movement.
4. Exercise R reset (body, orientation, velocity, camera) and F1/on-screen diagnostics toggle; test exact body x/z changes while camera orbits. Verify box and arena walls cannot be crossed.
5. If possible test touch D-pad, held RUN simultaneous with direction and one-finger orbit on a real device or browser emulation. If unavailable label NOT_RUN; do not silently claim mobile pass.
6. Test visible WebGL failure fallback, absence of browser-exposed API keys, no provider calls or decisions, and no unexpected network dependencies.
7. If a verifiable Vercel preview URL exists, visit and test it independently; do not infer deployment from repository config or CI.
8. Add executable browser regression smoke tests (e.g. Playwright/Chromium) if feasible. Prefer recorded observations and bounded robust tests to mock demonstrations.
9. Record hosted Actions verdict for exact branch/head SHA and review any bug fixes. P1 is PASS only if all mandatory real-browser acceptance evidence exists. Otherwise keep P1 in progress and plan S004 to close the exact remaining gap.

## Closeout

Commit complete `sessions/S003/{INPUT,PLAN,VALIDATION,REVIEW,CLOSEOUT}.md`, update `authoritative/STATE.json`, `docs/PHASE_GATES.md`, `docs/DECISIONS.md` and roadmap as needed. Install entire, standalone `authoritative/NEXT_SESSION_PROMPT.md` for **S004 FUTURE / NOT EXECUTED**: if P1 passes, first small P2 HOME slice; if not, remaining P1 verification. Follow single session branch → PR → hosted checks → merge → independent live-main reread. In owner-facing closeout distinguish verification from assumptions and include the complete S004 prompt. Do not execute S004.
