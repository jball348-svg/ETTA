# S002 — Evidence register

## TESTED_LOCAL — Node 22.16.0

Command: `node --experimental-strip-types --test tests/body.test.mjs`.

**7/7 passed:** grounded spawn and collision-free initial pose; walk and stop after release; camera-frame direction; walk/run and diagonal speed; arena boundaries; obstacle blocking and sliding; deterministic per-tick bounded movement and illegal timestep rejection.

These prove **pure movement mathematics** only, not browser controls, WebGL, mobile or Vercel.

## Prior baseline, not S002 proof

Main prior to S002: `6ca937308116ba1ca065e8ac6f151002ca4671e3`. [Hosted Actions run 39108436202](https://github.com/jball348-svg/ETTA/actions/runs/39108436202) succeeded for that baseline. S002 hosted result must be separately checked on exact PR head SHA.

## NOT_RUN / BLOCKED at authored closeout

- Clean install `npm ci`, full Vite build and S002 GitHub CI verdict (must inspect when run).
- **Real browser**: humanoid visibility, keyboard/blur, mouse orbit/zoom, reset and debug HUD.
- **Mobile browser**: touch directional pad/RUN and camera drag.
- **Live Vercel** preview render and control test.

No P1 PASS is claimed.

## Next browser procedure

Start built preview. Click canvas. Note x/z before and after W, D; orbit and repeat W. Try Shift walk/run, release, blur, R and F1. Approach obstacle and arena edge while watching actual x/z. Drag/zoom independently, test touch if possible, inspect console and WebGL fallback. Record actual browser version, exact commit SHA, screenshot and failures.
