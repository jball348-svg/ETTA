# ETTA — Capability roadmap

Progression: **Give her a body → Give her a home → Put her mind in her body → Let her decide how she lives.** No phase passes without observational evidence.

| Phase | Objective | Acceptance gate | S002 status |
|---|---|---|---|
| P0 — Foundation | Clean browser scaffold, build and protocol | Lockfile, hosted build, browser smoke and Vercel smoke separately reported | IMPLEMENTED; BROWSER/DEPLOY PENDING |
| P1 — BODY | Distinct 3D Etta under manual control | Visible body, testable transform/velocity/collision, WASD/arrows, sprint, orbit, reset and HUD; browser walkthrough | IMPLEMENTED; BROWSER PROOF PENDING |
| P2 — HOME | Navigable coherent dwelling | Traversable rooms, objects, interaction state and reproducible snapshots | NOT_STARTED |
| P3 — MIND | Model selects legal actions through secure backend | Structured perception, validated actions, timeouts, quotas and genuine decision traces | NOT_STARTED |
| P4 — LIFE | Sustained simulated autonomy | Reproducible bounded decision loop, persistence plan, manual overrides and soak evidence | NOT_STARTED |
| P5 — OPEN HORIZON | Future directions selected by owner | Owner-defined | UNDEFINED |

## P1 BODY status

S002 provides world-owned body state, collision bounds, two static obstacles, visible Three.js humanoid, manual keyboard/touch input, orbit/follow camera, bounded zoom, reset, HUD and source-level deterministic regression tests. It is **not** a verified interactive browser gate: green CI builds prove source checks, not visual movement in WebGL. S003 is dedicated to running and fixing the observed walkthrough.

## Subsequent gates

### P2 HOME
One small dwelling before expanding; geometry owns traversable surfaces, doors and object affordances. Deterministic routes, collisions, interactions and reset/replay.

### P3 MIND
Backend-only API credentials, initially evaluate Google-hosted Gemma; authenticated quota-bound adapter, strict JSON validation, legal action IDs, retries/timeouts/backoff and provenance of model/rules/manual. No provider secrets in frontend.

### P4 LIFE
Character simulated drives and moods, memory, choices, routines and consequence tracking without claiming consciousness. Bounded tokens and time, pause and shutdown. A static Vercel site is not automatically a 24/7 agent worker.

## Later possibilities (not authorised work)
Voice, richer characters, relationships, a larger world and persistent independent runtime. None are delivered or promised.

## Session rule
One numbered session at a time, archive real evidence, keep exact source of truth and install a complete next prompt marked FUTURE / NOT EXECUTED.
