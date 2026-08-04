# Repository name

<!--
Template guidance — delete this comment when customizing your new repo.

This README follows the documentation standard; fill the sections below and
delete the ones marked optional that do not apply:
https://contributing.bitwarden.com/contributing/documentation
-->

One or two sentences stating what this repository is and which products or systems it serves.

## Getting started

Build instructions and environment setup live in the
[contributing documentation](https://contributing.bitwarden.com/getting-started/).

<!-- Only repo-specific setup with no home on the site belongs below this line. -->

## Structure

<!-- Monorepos only; delete otherwise. One line per container or top-level component. -->

| Container or component | Purpose |
| ---------------------- | ------- |
|                        |         |

## Related repositories

- [bitwarden/server](https://github.com/bitwarden/server) — replace with the repos this one interacts with

## Git hooks

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

Running the hook requires [Node.js](https://nodejs.org) (>=18); the tools are fetched on demand via
`npx`.

<!--
Customizing the linter — delete this comment when customizing your new repo.

Treat the linter as a starting point. The file extensions are the most likely
thing to change: Prettier checks Markdown, JSON, JSON5, and YAML, and CSpell
checks Markdown. If you change those globs, update both .githooks/pre-commit
and the Lint workflow so local commits and CI stay in sync. Swapping tools or
changing the pinned versions works the same way.
-->
