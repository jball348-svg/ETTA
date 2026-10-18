# ETTA

**An embodied-agent experiment.** Give her a body. Give her a home. Put her mind in her body. Let her decide how she lives.

## Current stage — S002 body implementation

Etta now has an authored 3D humanoid model in a bounded test arena, a physics-light deterministic body state, keyboard and touch **MANUAL / DEV** controls, an orbit/follow camera, obstacle collisions and a live state HUD. **This is not an autonomous agent.**

**Important:** Passing hosted code checks does not prove a live browser experience. P1 remains pending actual browser interaction evidence; see `sessions/S002/VALIDATION.md` and `docs/PHASE_GATES.md`. S003 is installed, future and unexecuted.

### Try it

Node.js 22.12+ and npm:

```bash
npm ci
npm run check
npm run dev
```

Click the stage to focus. Use **WASD / arrow keys** to walk, **Shift** to run, **mouse drag** to orbit and **wheel** to zoom. **R** resets the body and camera; **F1** or the on-screen button toggles telemetry. On touch devices, use the directional pad and drag the scene to orbit. Keyboard input clears on blur/focus loss; all movement remains manual.

No API key is needed; there is no runtime provider connection. The target is a static Vercel/Vite deployment; no Vercel URL is certified live until actually observed.

## Protocol and roadmap

- [Binding protocol](AGENTS.md)
- [Project charter](PROJECT_CHARTER.md)
- [Roadmap](ROADMAP.md)
- [Authoritative state](authoritative/STATE.json)
- [S003 next prompt — future](authoritative/NEXT_SESSION_PROMPT.md)
- [S002 evidence](sessions/S002/VALIDATION.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Quality gates](docs/PHASE_GATES.md)

The world owns transforms, geometry and valid action consequences. Model decisions, simulated emotion and persistent life remain future experiments, not current capabilities.
