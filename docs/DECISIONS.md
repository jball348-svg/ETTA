# Decision log

| ID | Session | Decision | Rationale | Revisit when |
|---|---|---|---|---|
| DEC-0001 | S001 | Start a clean ETTA repo; legacy aStar is reference-only | Avoid importing historic bugs and design debt before we can isolate them | Any proposed legacy source reuse |
| DEC-0002 | S001 | Ship Vite + Three.js static browser scaffold, Vercel target | Small visual foundation with no deployed backend or running costs | P1 rendering acceptance |
| DEC-0003 | S001 | Product phases are BODY → HOME → MIND → LIFE | Owner's explicit creative progression; evidence-gated | Owner changes priorities |
| DEC-0004 | S001 | Google-hosted Gemma is a P3 adapter target, not a P0 dependency | Authenticated test exists, but free-tier quotas and security constrain production | P3 provider bench / provider rules |
| DEC-0005 | S001 | Cloud API keys remain server-side, provider-neutral adapter | Public Vercel deployment must not expose secrets | P3 |
| DEC-0006 | S001 | No 24/7 agent worker in P0 | Vercel frontend alone doesn't confer unattended persistence | P4 |
| DEC-0007 | S001 | Numbered sessions with complete future prompt and honest validation | Adapt research process to software engineering | After P1 |
