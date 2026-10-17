# ETTA S002 — GIVE ETTA A BODY (FUTURE / NOT EXECUTED)

**This is a complete standalone session prompt.** Run only when separately invoked by owner (including "run next session" when ETTA is clear). S002 is **not executed** by the S001 bootstrap.

## Entry and constraints

Repository: `jball348-svg/ETTA`, default branch `main`. Read live default-branch SHA, `AGENTS.md`, `PROJECT_CHARTER.md`, `ROADMAP.md`, `authoritative/STATE.json`, `docs/PHASE_GATES.md`, `docs/ARCHITECTURE.md`, and `sessions/S001/*`.

- Execute only one numbered session: **S002**.
- Primary phase: **P1 BODY**. Do **not** implement P2 home, P3 LLM, or P4 autonomy in S002.
- Existing `jball348-svg/aStar` is a useful reference; do not copy its 337k-character main loop or unstable inference routes.
- The browser experience must continue to build for Vercel with no API key.

## Mission

**Give Etta a body.** Replace the empty stage marker with a distinct embodied 3D character in a minimal test arena, with verified transform and movement separate from visuals.

## Required engineering work

1. Build a small explicit character-domain state: position, orientation, velocity, collision dimensions, grounded status, and action state. Prefer a physics-light deterministic implementation before any engine dependency explosion.
2. Create an intentionally simple but recognisable Etta humanoid (head, torso, limbs, scale and facing direction). Appearance may be stylised; no new external assets required. Distinguish Etta visually from the origin marker.
3. Provide manual keyboard locomotion and camera follow/orbit behavior; ensure smooth timestep-independent movement, no falling through ground, bounded travel and collisions against at least one simple obstacle.
4. Add an unobtrusive on-screen state/debug readout showing actual coordinates, orientation, movement state and frame performance. Show keyboard instructions and a clear reset.
5. Separate scene, simulation, input and UI modules; avoid an all-in-one file.
6. Generate/commit npm lockfile and switch CI to `npm ci` once verified. Add unit tests for deterministic movement and boundaries, and an automated browser smoke test if executable.
7. Inspect local/hosted build, and if available run a real browser smoke test; explicitly record absent evidence, don't claim a rendering success from `tsc` alone.

## Acceptance tests and gate

- From a clean checkout, install reproducibly, `npm run check` succeeds, and Vite production build completes.
- Etta is visible as a body; movements/turn/stop/reset are responsive in a real browser **if browser testing is available**.
- Character cannot cross a tested obstacle, never teleports between frames, does not depend on model inference, and is not confused with camera motion.
- Clear error message instead of a crash if WebGL isn't available.
- Document what is tested in CI, what is manually observed and what remains unverified.
- Mark P1 PASS **only** if all stated acceptance evidence exists; otherwise leave in progress and write an S003 prompt to close the exact gap.

## Session artifacts and closeout

Create `sessions/S002/{INPUT,PLAN,VALIDATION,REVIEW,CLOSEOUT}.md`; update `authoritative/STATE.json`, roadmap statuses if helpful, and phase/decision ledgers. Install complete `authoritative/NEXT_SESSION_PROMPT.md` for **S003 FUTURE / NOT EXECUTED**, continuing P1 if not passed or preparing the P2 home phase after a genuine P1 pass.

Use one session branch, one authored commit where practical, an ordinary PR, hosted checks where available, and merge if gates genuinely pass. Verify live main after merge. Explain limitations and include the **entire S003 next-session prompt** in the closing owner-facing response.
