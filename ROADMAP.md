# ETTA — Capability roadmap

Product progress is evidence-bound and follows body → home → mind → life until the owner changes direction.

| Phase | Objective | Observable gate | S002 status |
|---|---|---|---|
| P0 Foundation | Static Vite/Three.js and numbered sessions | Hosted checks and real browser smoke | CI_PASS; browser and Vercel unverified |
| **P1 BODY** | **Give Etta a body** | Recognisable 3D Etta, moveable manual transform, collision and camera, actual browser walkthrough | **IMPLEMENTED_PENDING_BROWSER_EVIDENCE** |
| P2 HOME | Give her a home | Navigable dwelling with world-owned rooms, objects and affordances | NOT_STARTED |
| P3 MIND | Put her mind in her body | Server-side cloud model chooses validated legal actions from constrained perception | NOT_STARTED |
| P4 LIFE | Let her decide how she lives | Bounded autonomous loop with explicit consequences, memory and manual override | NOT_STARTED |
| P5 OPEN | Who knows after that | Outcome selected after observing experiment | UNDEFINED |

## What S002 implements

- Procedural recognisable humanoid and simple test arena with one blocking box; no third-party avatar assets.
- Deterministic body state (position, orientation, velocity, physical radius/height, ground contact, action).
- Fixed 60 Hz, camera-relative manual movement with normalised diagonals and walk/run speeds. Collision with obstacle and bounds, no gravity-free fall.
- Orbit/follow camera, wheel zoom with limits, reset, diagnostic HUD, F1 and button toggle.
- Keyboard release, focus/visibility loss and touch pointer up/cancel handling. Mobile directional pad and RUN button have been authored but **not browser-tested**.
- Physics unit-test evidence, not yet genuine WebGL/DOM control acceptance evidence. Etta does not think or decide.

**P1 NOT PASS** until a real-browser walkthrough confirms the 3D scene and controls. S003 is installed to complete this gap.

## P2 HOME gate

One small delightful dwelling before a city; floor/walls, doors, furniture and objects with authoritative state, collision, interactable affordances and reproducible routes. No imaginary model interactions.

## P3 MIND gate

Server-only Google-hosted Gemma integration initially, provider-neutral adapter, strict structured perception/actions and schema validation. API key never browser-visible. Enforce authentication, usage caps, failure/timeout transparency, and provenance distinguishing MODEL_DECISION / RULE_FALLBACK / MANUAL / FAILED. No unlimited-free-inference assumption.

## P4 LIFE gate

Explicit simulated needs/moods, goal selection, consequences and meaningful memory; no consciousness claims. Must have pause/reset, bounded spending, deterministic soak tests and declared storage/worker architecture. A static Vercel site is not an always-on world.

## Open horizon

Voice, friendships, more characters, new worlds and other explorations remain possibilities only.
