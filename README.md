# devhub-agent-sandbox

Throwaway repository used to integration-test **DevHub Agent Tasks (Phase F1)**.
Nothing here is production code. Agents open draft PRs on `devhub/agent/*` branches;
humans review and merge (or close) them.

## What is in here

- `src/` – a tiny TypeScript utility library (`slugify`, `parseDuration`, `formatDuration`, `pluralize`, `clip`).
- `test/` – Vitest unit tests (one function is intentionally left untested).
- `docs/` – a small docs folder agents may extend.
- `.github/workflows/ci.yml` – runs `npm test` on every push and pull request.
- `AGENTS.md` – repository conventions the agent must follow.

## Scripts

```bash
npm install
npm test
npm run typecheck
```
