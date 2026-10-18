# ETTA phase-gate ledger

| Phase | S002 status | Evidence | Outstanding |
|---|---|---|---|
| P0 Foundation | IMPLEMENTED; browser smoke pending | Foundation build, CI and reproducible lockfile | Independent browser/Vercel smoke |
| P1 Body | IMPLEMENTED, NOT GATE-PASSED | Body, camera, keyboard/touch, physics tests and obstacles; hosted CI on S002 PR | Actual browser controls, visual quality, touch acceptance |
| P2 Home | NOT_STARTED | — | Navigable dwelling and world objects |
| P3 Mind | NOT_STARTED | — | Server adapter and model actions |
| P4 Life | NOT_STARTED | — | Safe controlled autonomy and persistence |
| P5 Open | UNDEFINED | — | Owner direction |

Hosted evidence (S002): [initial push run 39108879187](https://github.com/jball348-svg/ETTA/actions/runs/39108879187) **CI_PASS** on `5c3b232d329be70dd7407c76f53c730cd24d4d8d`; [PR run 39108906760](https://github.com/jball348-svg/ETTA/actions/runs/39108906760) **CI_PASS** on `c16c960b09c7d399f4ec37aa6cc7957a0b77cfd4`. These are real source/build/test results, not browser observation. Any later npm-ci commit must have its own verdict before merge.

## History
- **S001 — Foundation:** created empty scene and governance.
- **S002 — Body:** implemented a distinct Etta figure in a bounded manual arena with camera orbit, WASD/arrows, sprint, touch pad and physics regression suite. P1 stays open pending real browser exercise.
