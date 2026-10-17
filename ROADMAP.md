# ETTA — Capability roadmap

This roadmap expresses **outcomes** rather than a fixed feature backlog. Phases have evidence gates and may span multiple numbered sessions. No phase is marked delivered merely because its code is present.

| Phase | Objective | Observable gate | Initial status |
|---|---|---|---|
| **P0 — Foundation** | Session protocol, build, empty browser scene, deployable structure | Reproducible check + browser smoke + honest hosted check | IN_PROGRESS |
| **P1 — BODY** | **Give Etta a body** | A distinct visible 3D Etta with size, position, orientation, movement, collision and stable camera; manual actions replay correctly | NOT_STARTED |
| **P2 — HOME** | **Give her a home** | Navigable coherent home with bounded rooms, doors, furniture, objects, affordances and stateful interactions; reproducible world snapshots | NOT_STARTED |
| **P3 — MIND** | **Put her mind in her body** | Server-side cloud model reads constrained perception and chooses valid actions; schema validation, timeouts, fallback and quota protections proven | NOT_STARTED |
| **P4 — LIFE** | **Let her decide how she lives** | Sustained autonomous decision loop with drives, simulated moods, memory, routines, social interactions when available, and traceable consequences | NOT_STARTED |
| **P5 — OPEN HORIZON** | **Who knows after that** | Future scope selected by owner after observing the experiment | UNDEFINED |

## Capability gates

### P0 — Foundation
- Build from a fresh checkout.
- Static scene renders or degrades visibly if WebGL is unavailable.
- Session protocol, authoritative state and next prompt are consistent.
- Browser smoke test and Vercel smoke test are **not automatically implied** by CI.
- Secrets never reach browser bundles.

### P1 — Give Etta a body
- Body has explicit transform, size and collision volume; distinguish visual body from physics state.
- Keyboard/manual walk + turn + stop work without network or LLM.
- Camera, ground contact and simple collisions are testable; debug overlay reports real state.
- Character remains consistently recognisable through motion.
- Evidence: automated logic checks and a rendered browser walkthrough.

### P2 — Give her a home
- One small, pleasant and well-defined dwelling before a larger world.
- Traversable surfaces and doors/objects have authoritative state.
- Affordance list derives from geometry and proximity; no imaginary object interactions.
- Evidence: deterministic routes, collision tests, object interaction and reset/replay.

### P3 — Put her mind in her body
- Backend-only model key; provider adapter and environment configuration.
- LLM sees a concise, structured perception packet and legal actions.
- Strictly parse/validate JSON, reject invented action IDs and implement explicit timeouts/retries/backoff.
- Show decision origin and fallback; bound costs, rate limits and calls.
- Test model disconnect, malformed output and blocked/quota responses.

### P4 — Let her decide how she lives
- World persists consistently through choices; needs/drives/moods are simulated data, not claims of feelings.
- Character selects goals and actions autonomously, without repetitive loops or runaway token consumption.
- Save/restore or server persistence is selected explicitly; distinguish browser-only life from a 24/7 world.
- Manual override and safe shutdown always remain possible.
- Evidence: long deterministic soak, real inference trace, regression suite and failure report.

## Later possibilities (not authorised work)

Speech and listening, more characters, friendships, richer worlds, time acceleration, agent-generated projects, distributed observation and persistent server worlds. Do **not** treat possibilities as next-session commitments.

## Sequencing rule

A session may refactor or add supporting infrastructure, but it must say which gate it advances and what remains incomplete. Proceed body → home → mind → autonomy unless owner changes the direction.
