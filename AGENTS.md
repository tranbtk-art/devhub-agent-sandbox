# Repository conventions (read by DevHub agents)

- Language: TypeScript (strict). Tests: Vitest, files in `test/*.test.ts`.
- Every exported function in `src/` must have at least one unit test.
- Keep changes small and focused; one concern per pull request.
- Never edit `.github/workflows/**`, lockfiles, or `.env*` (protected paths).
- Update `README.md` when adding a new public function.
