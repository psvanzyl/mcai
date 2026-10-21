# McAi — project state

## What this is
A faithful front-end clone of mckinsey.com repositioned as **McAi**, a global AI-consulting
brand ("fake it till you make it" mock, stock imagery). Next.js 16 (App Router) + React 19 +
Tailwind 4, dark-first theme, deployed via Coolify.

## Live
- URL: https://mcflimsey.wegoai.duckdns.org (HTTP 200, Let's Encrypt cert, valid to 2027-01-18)
- DNS: DuckDNS wildcard `*.wegoai.duckdns.org` -> 83.85.185.61
- Coolify app uuid: `rwuixjdw41j1zgiwkngkkig3` (project `McAi` h9grge7o7j123xsdp4tsv5qs,
  destination rmtbopdo7cnqg5pwnbgrpji9 on server `localhost` hff16ilrvechplni0w97qy2t)
- Build pack: dockerfile (`/Dockerfile`, multi-stage node:22-alpine, standalone server.js),
  ports_exposes 3000, base_directory /.
- Repo: https://github.com/psvanzyl/mcai (public, branch main).

## Deploy procedure (IMPORTANT)
- A push to `main` does **not** trigger a Coolify deploy in practice: the API reports
  `is_auto_deploy_enabled = null`, no GitHub webhook fires, and the live assets stay stale
  (verified: 4+ min of polling with no change after the push).
- Always trigger the deploy explicitly:
  `POST http://192.168.178.132:8000/api/v1/deploy {"uuid": "rwuixjdw41j1zgiwkngkkig3"}`
  (token: /root/.hermes/credentials/.coolify_api_token), then poll
  `GET /api/v1/deployments/{deployment_uuid}` until `status=finished` (~80–150 s) and verify by
  hashing a live asset against the local file.
- `GET /api/v1/deployments` (list) returns an empty array on this instance — poll the
  deployment uuid from the trigger response instead.

## Dev / build host
- CT141 `root@192.168.178.20:/root/projects/mcai` (source of truth). Build: `npm run build`.
- Local preview: `PORT=3100 npm run start` (log /tmp/mcai.log); restart it after every build.
- Static export: 43 pages; fonts vendored in public/fonts (8 woff2), images in public/img
  (56 jpg, mirrored from Pexels by scripts/fetch-images.mjs; `images.json` = key -> Pexels id).

## Theme (dark default)
- Dark-first role tokens in src/app/globals.css (graphite canvas #0b0e14, panel #151a24,
  accent amber-gold #f5b544, mint #4ade9e); `html.light` overrides for the light variant.
- `--color-muted` #9aa5b8 dark (was #8b96a8; contrast 6.46 -> 7.77 on canvas) / #6b7280 light.
- `--color-line-strong` #404a59 dark / #c6c0b4 light added for grid separators that must read as
  structure rather than decoration.
- src/lib/theme.ts holds THEME_KEY/THEME_INIT; ThemeToggle.tsx in Header; boot script in
  layout.tsx defaults to dark; suppressHydrationWarning on <html>.
- Deliberately NOT McKinsey navy/electric blue.

## QA harness
- `qa.py` (scratch + CT141): CDP driven, `--base`, `--only <name>`, `--theme {dark|light|both}`,
  `--out <dir>`; audits h1/heading fonts, broken imgs, horizontal overflow, bad words, dead links,
  plus WCAG contrast probe and resolved theme class. Screenshots: `{route}-{vp}-{theme}.png`.
- Needs a Chromium with CDP on 127.0.0.1:9222:
  `/usr/bin/chromium --headless=new --remote-debugging-port=9222 --remote-allow-origins=* \
   --user-data-dir=/root/.cache/chromium-headless --no-sandbox --disable-dev-shm-usage`
  (it is not persistent — relaunch after a host restart; verify with `curl :9222/json/version`).
- Batches: qa/ qa2/ qa3/ qa4/ (full local) qa5/ qa6/ (post-portrait-fix) qa7/ (live) qa8/ (local
  final) qa9/ qa11/ (live final). Note: each run overwrites `results.json` in its `--out` dir —
  use a separate `--out` per route when you need to keep both result sets.

## Portrait re-key (p-2, p-4, p-5…p-9)
- `scripts/rekey_rembg.py` on CT141 (venv /root/venvs/rembg, rembg 2.0.60 + onnxruntime):
  u2net matte -> tighten alpha -> decontaminate fringe -> composite on a dark studio gradient
  (raised #1d2431 -> field #0e121a + glow). Originals preserved in `/root/projects/.img-orig/`
  (note: at the projects root, not inside mcai/).
- p-5…p-9 (2026-10-21): bright>140 pixels 19.7/45.6/20.8/27.5/60.6% -> 4.4/1.3/2.2/3.9/5.5%;
  top-band 9.9/47.9/31.8/24.5/79.1% -> 0/0/0/1.4/1.8%; border mean 75/80/96/110/128 -> 26/29/29/28/29.
- Vision pass on the re-keyed files: dark gradient background, no halos, no clipped hair/limbs.
- Verify deployed assets by hash: `curl live/img/p-N.jpg | sha256sum` vs local file.

## Verified live (2026-10-21, commits ab063c3 + 454914e)
- / and /our-people: 4 renders each (desktop+mobile x dark+light), 0 broken images, 0 overflow,
  0 bad words, 0 dead links; dark body contrast 17.98, light 17.5; muted 7.77 dark / 4.63 light.
- All five re-keyed portraits hash-match the local files on the live host.
- Served CSS carries `--color-muted:#9aa5b8`, `--color-line-strong:#404a59` (dark) and
  `#6b7280`/`#c6c0b4` (light).
- Rendered separator luminance on the live dark home page (same pixel rows in qa9 vs qa11 live
  screenshots): 44.50 -> 72.73 on a 15.0 canvas, and every other row of the crop is byte-identical
  between the two, i.e. the separators are the only thing the second commit changed and they are
  now visible (1.36:1 -> 2.11:1 non-text contrast).
- Vision pass on the live people page: all nine portraits on consistent dark backgrounds, no
  halos, layout intact; the Sectors grid reads legible (text and arrows bright, structure clear).

## Open items
- Nothing blocking. Optional: swap the re-keyed portraits for genuine dark-backdrop photos if a
  Pexels key ever becomes available (no search egress/keys in this environment).

## Environment gotchas
- The Hermes host has NO direct internet egress (curl 000) and no gh access: do GitHub/Coolify
  work from CT141 (gh authed as psvanzyl) or via the Coolify API on 192.168.178.132:8000.
- Local DNS for the live host is mapped in /etc/hosts -> 192.168.178.132 for QA through Traefik.
- The vision model (vision_analyze) is rate-limited per session: one 429 quotes a `retry_after`
  of 150–1300 s. Space out image checks and keep the numeric (pixel) probes as the primary
  evidence.
