# ETTA

**An embodied-agent experiment.** Give Etta a body → a home → a mind → the ability to decide how she lives.

## Current stage — Body verified, home is next

Etta now has a 3D humanoid, world-owned deterministic body state, a test arena with obstacle collision, a follow/orbit camera, developer WASD/arrows/Shift controls, reset and telemetry, plus touch D-pad support. **All movement is MANUAL / DEV, not autonomous.**

**S003 Chromium acceptance has passed:** [hosted browser run 39110275970](https://github.com/jball348-svg/ETTA/actions/runs/39110275970) ran 15 real-browser checks (desktop and emulated touch), passed 15/15, and archived screenshots and evidence JSON. No physical phone or live Vercel site was verified. S004 HOME is [installed for the next separate invocation](authoritative/NEXT_SESSION_PROMPT.md); it has not been executed.

### Try Etta locally

Node 22.12+ and npm:

```bash
npm ci
npm run check
npm run dev
```

Click the stage: **WASD/arrows** walk; hold **Shift** to run; **drag** orbits, **wheel** zooms, **R** resets, **F1** or HUD button toggles telemetry. On mobile scroll down to the arena and use its touch direction pad.

No API key is needed. There is no home, inference adapter, autonomous mind, long-term memory or continuous worker yet.

## Project authority

See [charter](PROJECT_CHARTER.md), [roadmap](ROADMAP.md), [governance](AGENTS.md), [state](authoritative/STATE.json), [phase gates](docs/PHASE_GATES.md), [browser acceptance evidence](sessions/S003/VALIDATION.md) and [S004 next prompt](authoritative/NEXT_SESSION_PROMPT.md). Static Vercel deployment remains a target, not a certified live instance.
