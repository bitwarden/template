# Template Repository

This repository serves as a template for others and establishes very basic structure and tooling setup for later customization.

## Hooks

Hooks are centrally configured for the repo in the `.gitconfig` file. The `pre-commit` hook
([`.githooks/pre-commit`](.githooks/pre-commit)) runs [Prettier](https://prettier.io) (`--check`) on
staged Markdown, JSON, JSON5, and YAML, and [CSpell](https://cspell.org) against staged Markdown to
catch common typos; the spell-checker's settings live in `.cspell.json`. The same checks run in CI on
every pull request via the [Lint workflow](.github/workflows/lint.yml), and the pinned tool versions —
in both the hook and the workflow — are kept current by Renovate.

Hooks are opt-in per clone. Enable them once, from the repo root:

```bash
git config set --local include.path "../.gitconfig"
```

Running the hook requires [Node.js](https://nodejs.org) (>=18); CSpell itself is fetched on demand
via `npx`.
