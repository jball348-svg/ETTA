# S002 — Plan and acceptance boundary

**Single objective:** make Etta physically distinct and developer-playable in a bounded 3D test arena.

1. Pure deterministic 60 Hz character state and movement, bounds and obstacle collisions.
2. Procedural head, torso, limbs, facing and leg swing; independent arena scene.
3. Keyboard WASD/arrows, Shift run, camera drag and zoom, reset, F1/HUD, touch pad, release/blur safety.
4. Deterministic unit tests and strict no-secret/no-autonomy claims.
5. Hosted build/CI and real browser review if evidence available; preserve NOT_RUN for missing observations.
6. Install complete future S003 prompt and close out via ordinary GitHub PR.

**Evidence gate:** only mark P1 PASS after a real browser confirms rendered character plus controls. Build/test successes alone leave P1 pending.
