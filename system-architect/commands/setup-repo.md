---
description: Initialize git repo with remote, branching rules, and initial files
allowed-tools: Read, Write, Edit, Bash(git:*, gh:*)
argument-hint: [repo-name]
---

Set up a new git repository: $ARGUMENTS

## Discovery

Ask:
1. Is this a new repo or adding git to an existing project?
2. What hosting platform (GitHub, GitLab, Bitbucket)?
3. Should the repo be public or private?
4. What's the default branch name (main)?
5. What branching strategy (trunk-based, GitHub flow, GitFlow)?
6. What language/framework (for .gitignore template)?

## Setup Process

1. **Initialize Repository**
   - `git init` (if new)
   - Set default branch name

2. **Create Essential Files**
   - `.gitignore` — language/framework appropriate
   - `README.md` — project name, description, setup instructions
   - `CONTRIBUTING.md` — contribution guidelines
   - `LICENSE` — appropriate license file

3. **Create Remote** (if GitHub)
   - Create repo via `gh repo create`
   - Set up remote origin
   - Push initial commit

4. **Configure Branch Protection** (recommend settings)
   - Require PR reviews
   - Require CI checks to pass
   - Require linear history

5. **Set Up Templates**
   - `.github/pull_request_template.md` — PR template
   - `.github/ISSUE_TEMPLATE/` — bug report and feature request templates

6. **Initial Commit**
   - Stage all files
   - Create initial commit with conventional message

## Output

Report what was created and configured. Provide:
- Repository URL
- Branch protection recommendations
- Suggested next steps: `/scaffold` for code structure, `/setup-project` for project board
