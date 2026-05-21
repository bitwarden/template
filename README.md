# Template Repository

This repository serves as a template for others and establishes very basic structure and tooling setup for later customization.

## Hooks

Hooks are centrally configured for the repo in the `.gitconfig` file.

If you configure a linter you will want to include docs to have contributors run the following
command:

```bash
git config set --local include.path "../.gitconfig"
```
