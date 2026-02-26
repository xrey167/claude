# Git Commands Reference

## Daily Workflow
```bash
# Start new feature
git checkout main && git pull
git checkout -b feat/feature-name

# Stage and commit
git add -p                          # Interactive staging
git commit -m "feat(scope): description"

# Push and create PR
git push -u origin feat/feature-name

# Keep branch up to date
git fetch origin
git rebase origin/main

# Resolve conflicts during rebase
# Edit conflicted files, then:
git add <resolved-files>
git rebase --continue
```

## Useful Operations
```bash
# Interactive rebase to clean up commits
git rebase -i HEAD~3

# Amend last commit (before push)
git commit --amend

# Stash changes
git stash push -m "description"
git stash pop

# Cherry-pick a commit
git cherry-pick <commit-hash>

# Find which commit introduced a bug
git bisect start
git bisect bad HEAD
git bisect good v1.0.0
# Test each suggested commit, mark good/bad

# View file at specific commit
git show <commit>:<file-path>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# View branch history graphically
git log --oneline --graph --all
```

## Branch Management
```bash
# List branches with last commit
git branch -v

# Delete merged branches
git branch --merged main | grep -v main | xargs git branch -d

# Rename a branch
git branch -m old-name new-name

# Track remote branch
git checkout --track origin/branch-name
```

## Conflict Resolution
```bash
# See conflicted files
git diff --name-only --diff-filter=U

# Accept ours/theirs for specific file
git checkout --ours <file>
git checkout --theirs <file>

# Abort merge/rebase
git merge --abort
git rebase --abort
```
