# ETTA — A Body, Not Yet a Mind

**An embodied character experiment.** Give Etta a body → a home → a mind → freedom to decide how she lives. Then explore.

S002 implements a procedural humanoid and third-person **manual developer-controlled** test arena on the S001 Vite/Three.js foundation. She does **not** think, remember or act autonomously yet, and actual browser/Vercel visual acceptance is still pending S003.

## Run locally

Node 22.12+ and npm required.

```bash
npm ci
npm run check
npm run dev
```

Click the stage first. **WASD / arrows** walk camera-relatively, **Shift** runs, drag to orbit, mouse wheel zooms, **R** resets, **F1** or Diagnostics toggles the HUD. On touch layouts use the on-screen pad and RUN, dragging the scene to orbit; mobile browser operation is not yet independently verified.

The 60 Hz deterministic engine in `src/world/simulation.ts` owns position, velocity, orientation, grounded status and collisions. `src/scene/etta.ts` only renders the visual body. The HUD shows actual world state and explicitly declares MANUAL / no inference.

## Progress

- S001: repo foundation and prior hosted CI, but no browser evidence.
- S002: body source, movement controls and physics logic tests.
- [S003](authoritative/NEXT_SESSION_PROMPT.md): **future/not executed**, actual WebGL browser acceptance.
- P2 HOME, P3 Gemma MIND and P4 autonomous LIFE: not started.

See [project charter](PROJECT_CHARTER.md), [roadmap](ROADMAP.md), [governance](AGENTS.md), [state](authoritative/STATE.json), [phase gates](docs/PHASE_GATES.md), [operations](docs/OPERATIONS.md) and [S002 records](sessions/S002).

No code was merged wholesale from the prior aStar prototype. The frontend neither requires a provider key nor provides a persistent always-on process.
