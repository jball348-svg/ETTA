# ETTA

**An embodied-agent experiment.** Build a body. Give her a home. Put a mind in her body. Let her decide how she lives. Then see what emerges.

ETTA is a new project, inspired by the owner's earlier [aStar / Etta prototype](https://github.com/jball348-svg/aStar), but it is not an unreviewed copy of that prototype. This repository starts with a tested build surface, an explicit software-research protocol, and an intentionally empty 3D stage.

## Current status

- **S001:** governance + executable browser scaffold (authored; hosted verification must be checked separately).
- **Next:** [S002 — Give Etta a body](authoritative/NEXT_SESSION_PROMPT.md), **future / not executed**.
- **Current visible experience:** an empty Three.js scene with a roadmap overlay. **No agent, mind, home or persistent simulation exists yet.**
- **Deployment target:** Vercel, static Vite frontend. A production inference endpoint is a later milestone.

## Quick start

Requires Node.js 22.12+ and npm.

```bash
npm install
npm run dev
```

Then open the URL printed by Vite. Quality gate:

```bash
npm run check
```

`npm run check` performs TypeScript checking, repository-contract tests, and a production build. CI runs the same commands. Deployment uses the Vite preset on Vercel with output directory `dist`; no API or secret is required for this scaffold.

## Where to start

- [Project charter](PROJECT_CHARTER.md) — the experiment, its limits, and priorities.
- [Roadmap](ROADMAP.md) — body → home → mind → autonomy; what success means at each gate.
- [AGENTS.md](AGENTS.md) — binding instructions for any future ChatGPT/coding-agent session.
- [authoritative/STATE.json](authoritative/STATE.json) — machine-readable current state.
- [authoritative/NEXT_SESSION_PROMPT.md](authoritative/NEXT_SESSION_PROMPT.md) — the **complete next-session instruction**.
- [sessions/S001](sessions/S001) — bootstrap evidence, decisions and closeout.
- [Architecture](docs/ARCHITECTURE.md) · [Quality gates](docs/QUALITY_STANDARD.md) · [Deployment](docs/OPERATIONS.md).

## Philosophy

The game engine owns physical truth; a model may select from affordances and propose speech but does not invent successful actions. Simulated internal variables are a design technique, not evidence that software feels anything. Failure, fallback, simulated behavior and genuine model decisions must be distinguishable in logs.

This project is exploratory. Later worlds, characters and experiments are possibilities, **not promises or automatically installed scope**.
