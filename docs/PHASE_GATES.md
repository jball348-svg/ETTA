# ETTA phase-gate ledger

| Phase | S002 status | Evidence | Outstanding |
|---|---|---|---|
| P0 Foundation | IMPLEMENTED; browser smoke pending | Bootstrap source + authored CI and build commands | Independent browser/Vercel smoke |
| P1 Body | IMPLEMENTED, NOT GATE-PASSED | Body, keyboard/touch, camera, obstacles and deterministic tests committed in S002 | Actual browser controls, visual/a11y, hosted verdict, reliable install |
| P2 Home | NOT_STARTED | — | Navigable dwelling and world objects |
| P3 Mind | NOT_STARTED | — | Server adapter and valid model actions |
| P4 Life | NOT_STARTED | — | Safe controlled autonomy, persistence |
| P5 Open | UNDEFINED | — | Owner direction |

Never upgrade phase evidence from code review or `tsc` alone. Hosted CI result requires real run URL / SHA; a local Chromium walkthrough requires observed results.

## History
- **S001 — Foundation:** created empty scene and governance.
- **S002 — Body:** implemented a distinctive Etta figure in a collision-bounded manual test arena; added camera orbit, WASD/arrows, sprint, touch pad and deterministic regression suite. Browser acceptance still outstanding, so P1 stays open.
