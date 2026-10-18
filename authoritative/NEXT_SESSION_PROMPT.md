# ETTA S003 — PROVE THE BODY IN A REAL BROWSER (FUTURE / NOT EXECUTED)

**Complete, standalone next-session prompt. S003 is installed but NOT EXECUTED.**
Repository: `jball348-svg/ETTA`, authoritative branch `main`. Invoking "run next session" with ETTA context authorises this single session.

## Entry
1. Read live default-branch SHA, `AGENTS.md`, `PROJECT_CHARTER.md`, `ROADMAP.md`, `authoritative/STATE.json`, this full prompt, `docs/PHASE_GATES.md`, `docs/DECISIONS.md` and complete `sessions/S002` closeout/validation.
2. Check current GitHub PR and CI status. Do not claim S002 verified without inspecting exact run, head SHA and browser evidence.
3. Execute **S003 only**; no P2 construction, P3 inference or P4 autonomous loop unless owner explicitly changes direction.

## Primary objective — close the P1 BODY evidence gate
Make Etta's first avatar genuinely playable and reliable in a browser, not merely plausible from TypeScript.

### Required work
- Run reproducible `npm ci` and `npm run check` on a clean checkout; ensure `package-lock.json` is tracked and CI uses `npm ci`. If S002's bot lockfile commit did not complete, repair via a safely auditable PR.
- Start Vite or serve the production `dist` locally, and perform a **real browser walkthrough** using Playwright/Chromium or a similarly documented browser: show visible humanoid; W/A/S/D and arrows camera-relative movement; Shift sprint/release; mouse orbit separate from character; wheel zoom limits; R reset; F1/HUD; blur, keyup, focus, visibility, resize, and fallback. Record screenshots/video when practical.
- Validate collision boundaries and at least one obstacle interactively; compare observed world coordinates against HUD and static colliders. Confirm no stuck input on mode switch, blur or lost pointer.
- Test the smartphone touch pad and camera dragging, ideally via responsive device emulation plus a physical phone. Address UI overflow, accessibility, DPR and performance issues.
- Improve regression tests where browser observation uncovers defects. Do not manufacture success or silently conceal frame rendering exceptions.
- If deploy credentials are already available, smoke-test the real Vercel preview and URL. Do not create paid services or presume Vercel access.
- Inspect changed files for client-bundled keys, unexpected network requests and unsafe dependencies.

### Evidence gate
P1 may be marked `PASS` only after source tests/build AND observed browser movement, collision, reset, camera behaviour and input release are documented with exact reproducible steps and links/screenshots. If Vercel remains untested, leave deployment verification explicitly outstanding even if P1 local gate passes. Otherwise keep P1 IN_PROGRESS and pass the exact blockers to S004.

### Artifacts and git
Create `sessions/S003/{INPUT,PLAN,VALIDATION,REVIEW,CLOSEOUT}.md`; update `STATE.json`, roadmap/gate and decision ledgers. Install a **complete standalone S004 prompt marked FUTURE / NOT EXECUTED**, continuing P1 if needed or moving to P2 HOME only if P1 genuinely passed. Use one named branch, PR, inspect checks, merge if qualified, and independently reread main afterward. Close with explicit evidence classes, limitations and the **entire next-session prompt** for the owner.
