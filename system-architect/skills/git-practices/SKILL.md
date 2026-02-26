---
name: git-practices
description: >
  This skill should be used when the user asks about "git workflow",
  "branching strategy", "commit conventions", "PR best practices",
  "git flow", "trunk-based development", "release management",
  or needs guidance on version control workflows and collaboration patterns.
version: 0.1.0
---

# Git Practices

Branching strategies, commit conventions, and collaboration workflows.

## Branching Strategies

### Trunk-Based Development
- **When**: Small team, strong CI/CD, feature flags available
- **Flow**: Short-lived feature branches (< 1 day) → main
- **Key**: Feature flags decouple deployment from release
- **CI requirement**: All commits to main must pass full test suite

### GitHub Flow
- **When**: Continuous deployment, web applications
- **Flow**: feature branch → PR → review → merge to main → deploy
- **Branch naming**: `type/description` (e.g., `feat/user-auth`, `fix/login-bug`)
- **Rule**: Main is always deployable

### GitFlow
- **When**: Scheduled releases, multiple versions in production
- **Branches**: main, develop, feature/*, release/*, hotfix/*
- **When NOT to use**: If deploying continuously — too much overhead

### Release Branches
- **When**: Need to support multiple versions simultaneously
- **Flow**: main → release/v1.x, release/v2.x with cherry-picks
- **Key**: Hotfixes go to main first, then cherry-pick to release branches

## Commit Conventions

### Conventional Commits
Format: `type(scope): description`

Types:
- `feat` — new feature
- `fix` — bug fix
- `docs` — documentation only
- `style` — formatting, no code change
- `refactor` — code change that neither fixes a bug nor adds a feature
- `perf` — performance improvement
- `test` — adding or correcting tests
- `chore` — maintenance tasks
- `ci` — CI/CD changes
- `build` — build system changes

Rules:
- Subject line: imperative mood, lowercase, no period, max 72 chars
- Body: wrap at 72 chars, explain what and why (not how)
- Footer: reference issues (`Closes #123`, `Fixes #456`)
- Breaking changes: `feat!:` or `BREAKING CHANGE:` in footer

## Pull Request Best Practices

### PR Size
- Aim for < 400 lines of diff
- Break large changes into stacked PRs
- One concern per PR

### PR Description
- Link to issue/ticket
- Describe what changed and why
- Include screenshots for UI changes
- List testing done
- Note any deployment considerations
- Checklist for reviewer focus areas

### Review Etiquette
- Review within 24 hours
- Distinguish blocking vs non-blocking comments
- Approve with minor comments rather than requesting changes for nitpicks
- Use conventional comments: `nit:`, `question:`, `suggestion:`, `issue:`

## Repository Setup

### Essential Files
- `.gitignore` — language/framework specific
- `README.md` — project overview, setup, usage
- `CONTRIBUTING.md` — how to contribute
- `LICENSE` — license terms
- `.github/` — PR templates, issue templates, CI workflows

### Branch Protection
- Require PR reviews before merge
- Require status checks to pass
- Require linear history (no merge commits) or require merge commits
- Protect main/release branches from force push

## Additional Resources

- **`references/git-commands.md`** — common git operations and recipes
- **`references/ci-templates.md`** — CI/CD configuration templates
