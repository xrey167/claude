---
description: Guide through git branching, commits, and merge strategy
allowed-tools: Read, Write, Edit, Bash(git:*)
argument-hint: [action: branch|commit|rebase|merge|release]
---

Guide the git workflow for: $ARGUMENTS

Reference the git-practices skill for conventions.

## Available Actions

### Branch
Create a new branch following naming conventions:
- Ask what type of work (feature, fix, chore, docs)
- Ask for a short description
- Create branch: `git checkout -b [type]/[description]`

### Commit
Help craft a proper commit:
- Show staged changes
- Suggest conventional commit message
- Verify it follows conventions

### Rebase
Guide through rebasing:
- Fetch latest main
- Interactive rebase to clean up history
- Resolve conflicts step by step

### Merge
Prepare for merge:
- Verify branch is up to date
- Check all CI passes
- Suggest merge strategy (squash, merge commit, rebase)

### Release
Guide through a release:
- Determine version bump (major, minor, patch)
- Create release branch or tag
- Generate changelog from conventional commits
- Prepare release notes

## Output

Execute the requested git operations step by step, explaining each action. Reference the git-practices skill for conventions and best practices.
