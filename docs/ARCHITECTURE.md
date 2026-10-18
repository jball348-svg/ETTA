# ETTA architecture — incrementally verified

## Actual S002 P1 BODY modules

```
index.html → src/main.ts        : boot, lifecycle, fixed-step frame loop, UI and WebGL fallback
                ├─ input/manual.ts      : keyboard, focus/blur/visibility, touch intent
                ├─ world/simulation.ts : deterministic body state, bounds and collision truth
                ├─ scene/etta.ts        : procedural 3D Etta (follows body state)
                ├─ scene/arena.ts       : stage, box, light, grid and arena boundaries
                └─ scene/camera.ts      : separate follow/orbit/zoom camera
```

The simulation owns x/z/yaw, vx/vz, body radius/height, ground contact and action. No scene animation or model output may mutate world truth independently. Physics advances in fixed 60 Hz steps; the render loop follows that state. No home, model, server or long-term agent memory exists in S002.

## Architectural invariants

- MANUAL / DEV default: keyboard and on-screen touch buttons only; not LLM-generated decisions.
- Input maps to body intent relative to camera yaw; moving the orbit camera never falsely moves Etta.
- World-owned circular collision footprint against an axis-aligned obstacle; fixed arena bounds.
- No API keys or `VITE_*` secret variables in client bundle. `.env.example` is P3 configuration only.
- Distinguish unit-test evidence from real browser rendering and hands-on controls.
- No whole-cloth reuse of older `jball348-svg/aStar` main loop.

## Future architecture (not yet implemented)

P2 adds world objects/rooms/affordances. P3 adds a server-only provider facade for Gemma and constrained validated actions, protected budgets/auth/rate limits. P4 designs actual persistence and an always-on worker if appropriate; a Vercel static page or single function cannot provide persistent agent life.
