# Claude Code Configuration

This directory contains Claude Code configuration files.

## Directory Structure

```
.claude/
├── CLAUDE.md             # General project context and guidelines
├── commands/             # Custom slash commands
└── prompts/              # Workflow-specific prompts
    └── review-code.md    # Used by _review-code.yml reusable workflow
```
## Automated Workflow Reviews

The `review-code.yml` workflow calls a reusable workflow in the `gh-actions` repo that in-turn uses the `.claude/prompts/review-code.md` to automatically review PRs. The `review-code.md` is used as a gate to execute the `review-code.yml` workflow. Repos without this file will not see Claude code reviews performed on each pull request.

**How it works:**

1. Workflow triggers on non-draft PRs
2. Reads `.claude/prompts/review-code.md` from the PR's branch
3. Posts review as a sticky comment
4. Updates comment on new commits

## Best Practices

- **Commands** (`.claude/commands/`): For interactive Claude Code sessions
- **Prompts** (`.claude/prompts/`): For automated GitHub Actions workflows
- **CLAUDE.md**: General project context available in all Claude interactions

## Claude Configuration Checklist

The following is a generic list of items to do following repo creation to ensure Claude is properly prompted to assist our engineering work. Following completion of the checklist, this entire section should be removed.

### CLAUDE.md File

- [ ] Add project-specific context and overview
- [ ] Document the technology stack (languages, frameworks, tools)
- [ ] List key architectural patterns and design principles; consider referencing specific Bitwarden ADRs
- [ ] List common commands and scripts
- [ ] Define testing requirements and standards
- [ ] Add links to relevant documentation (API docs, wikis, etc.)
- [ ] Define security and compliance requirements
- [ ] Consider common pitfalls or gotchas for Claude to avoid (if applicable)
- [ ] Consider performance considerations and benchmarks (if applicable)
- [ ] Consider troubleshooting guide for common issues (if applicable)

### review-code.md Prompt

- [ ] Customize quality checks for project-specific requirements
- [ ] Add language-specific best practices to check for
- [ ] Define project-specific security considerations
- [ ] Include framework-specific patterns to validate
- [ ] List required test coverage expectations
- [ ] Define documentation requirements (JSDoc, comments, etc.)
- [ ] Add dependency management guidelines
- [ ] Specify error handling patterns to enforce
- [ ] Define logging and monitoring standards
- [ ] Include API design principles (if applicable)
- [ ] Consider language translation requirements (if applicable)
- [ ] Consider accessibility requirements (if applicable)

