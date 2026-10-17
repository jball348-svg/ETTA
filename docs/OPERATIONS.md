# Local operation and Vercel deployment

## Local (S001)

Node 22.12+.

```bash
npm install
npm run check
npm run dev
```

The browser should show a dark 3D orientation grid and roadmap labels. No Etta body or model call should appear yet. If WebGL is blocked the UI must explain that rendering failed.

## Vercel (not yet deployed)

1. Import `jball348-svg/ETTA` on Vercel using the **Vite** framework.
2. Production build: `npm run build`. Output: `dist`.
3. In S001 there are **no required environment variables**.
4. Deploy, then actually open the resulting URL in a browser and inspect developer console/3D rendering. Record this as separate `DEPLOYED_VERIFIED` evidence, not as CI pass.

## Future Gemma integration (P3 only)

`.env.example` is a **future configuration contract**, not active code. Use `GEMINI_API_KEY` and `GEMMA_MODEL` solely from server-side functions and Vercel environment settings; do not prefix secrets with `VITE_`, embed keys in the browser or check in real values. Add provider-call budgets, throttling, authentication, strict JSON, failure logging, and fallback origin before public use.

## Costs and uptime

A static site on Vercel doesn't run the virtual world when no browser is open. Persistent world time and memory require another architecture and explicit provisioning decision. Hosted Gemma access is subject to provider limits; never assume free unlimited usage.

## Security

`.env`, `.env.local`, `.env.*.local`, `dist`, `node_modules` are gitignored. Never paste API keys into commits, issues, screenshots or test fixtures.
