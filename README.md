# Template Repository

This repository serves as a template for others and establishes very basic structure and tooling setup for later customization.

## Claude Code Configuration

TODO: see https://bitwarden.atlassian.net/wiki/x/LgDMaQ for configuration tips to complete the `.claude/CLAUDE.md` file

### Directory Structure

```
.claude/
├── CLAUDE.md             # General project context and guidelines
├── commands/             # Custom slash commands
└── prompts/              # Workflow-specific prompts
    └── review-code.md    # Used by _review-code.yml reusable workflow
```

### Automated Workflow Reviews

The `review-code.yml` workflow calls a reusable workflow in the `gh-actions` repo that in-turn uses the `.claude/prompts/review-code.md` to automatically review PRs. The `review-code.md` is used as a gate to execute the `review-code.yml` workflow. Repos without this file will not see Claude code reviews performed on each pull request.

**How it works:**

1. Workflow triggers on non-draft PRs
2. Reads `.claude/prompts/review-code.md` from the PR's branch
3. Posts review as a sticky comment
4. Updates comment on new commits

### Best Practices

- **Commands** (`.claude/commands/`): For interactive Claude Code sessions
- **Prompts** (`.claude/prompts/`): For automated GitHub Actions workflows
- **CLAUDE.md**: General project context available in all Claude interactions
