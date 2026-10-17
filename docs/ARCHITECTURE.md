# Architecture — incremental boundaries

## S001 actual architecture

```
index.html
  └─ src/main.ts -> Three.js static stage (client only)
       └─ src/style.css
```

This is a browser-rendering smoke scaffold, **not** an autonomous world. There is no avatar, action model, server, persistence or inference in S001.

## Target architecture (phased, not implemented)

```
Browser / Vercel static site
  ├─ World engine: transforms, geometry, collisions, object truth
  ├─ Body: physics state and visible avatar (P1)
  ├─ Home: rooms, interactions, affordances (P2)
  ├─ Perception: filtered world observations, legal action IDs (P3)
  └─ Inspector: provenance, fallback, active goals (P3/P4)
          |
          v
Vercel Functions / API facade (P3; future)
  ├─ authentication + per-user quota
  ├─ schema validation, timeouts and abuse protection
  ├─ provider adapter: Google-hosted Gemma 4 first candidate
  └─ server-side secret from GEMINI_API_KEY
          |
          v
Cloud model provider (P3; future)

Optional durable database + always-on world worker (P4+; architecture decision pending)
```

## Critical invariants

- No model keys, privileged API URLs or user secrets in a Vite `VITE_*` variable or browser bundle.
- Engine-owned observations and actions: a model emits an *intent*; validation authorises it; engine reports actual consequences.
- Separate simulated body state, drive/mood state, relationship/memory and LLM prompt histories.
- Independent input/output contracts enable deterministic testing with no provider dependency.
- Distinguish `MODEL_DECISION`, `RULE_FALLBACK`, `MANUAL`, `FAILED`; log actual attempt and latency.
- Never place 24/7 persistent agent lifetime inside Vercel request functions. Choose a dedicated worker or on-demand world resumption after a later owner decision.
- Only preserve real persistence with an explicit storage scheme. Session memory in a browser tab is not enduring life.

## Legacy context

The old `jball348-svg/aStar` included Etta + Miles, a Three.js town, local Ollama, weather/radio, moods and autonomous action choices. It also coupled API routes to Vite development middleware and concentrated extensive logic in a very large `src/main.ts`. Treat as learning material, not production-ready code.

## Recommended project shape after S002

```
src/
  app/          bootstrap and presentation
  scene/        Three.js scene/camera/render-only
  world/        physical state and colliders
  character/    Etta body appearance and control
  input/        keyboard/manual actions
  ai/           future client-side decision contract only
api/            future server-only inference endpoints
tests/          deterministic unit and smoke
```

Create directories when capabilities need them; no empty ornamental modules.
