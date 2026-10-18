# S002 — Engineering review

- **Scope:** P1 BODY only; no home, LLM, long-term memory or autonomy.
- **Authority:** `world/simulation.ts` owns body transform, radius, height, velocity, grounded flag and action. Three.js body mesh only follows state.
- **Controls:** camera-relative manual movement; diagonal vectors normalised; stop on key-up/keyboard focus loss and pointer cancel. R reset and F1 diagnostics independent of any AI.
- **Safety:** WebGL failure visible; no actual key or provider call in client code. Avoid treating a fallback as a successfully rendered body.
- **Collision:** physics-light circle/AABB and 16×16 bounds, axis-by-axis slide. Not a general physics engine.
- **Frame timing:** max elapsed time cap prevents enormous movements after a suspended tab; fixed 60 Hz physics.
- **Tests:** seven physics invariants passed locally, but no real browser observation available yet. No claim that the scripted controls have been hands-on tested.
- **Review verdict:** implementation suitable for hosted CI and browser verification; P1 remains IN_PROGRESS until observed.
