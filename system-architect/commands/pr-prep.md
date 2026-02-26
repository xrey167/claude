---
description: Prepare a PR description, checklist, and review notes
allowed-tools: Read, Write, Edit, Bash(git:*)
argument-hint: [branch-name or description]
---

Prepare a pull request for: $ARGUMENTS

## Process

1. **Gather Context**
   - Get the current branch and diff: `git diff main...HEAD --stat`
   - Get commit history: `git log main..HEAD --oneline`
   - Read changed files to understand the changes

2. **Generate PR Description**

   Structure:
   ```markdown
   ## Summary
   [2-3 sentence overview of what changed and why]

   ## Changes
   - [Bulleted list of key changes]

   ## Related Issues
   - Closes #[issue-number]
   - Related to #[issue-number]

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update
   - [ ] Refactoring
   - [ ] Performance improvement

   ## Testing
   - [ ] Unit tests added/updated
   - [ ] Integration tests added/updated
   - [ ] Manual testing performed
   - [Describe what was tested and how]

   ## Screenshots
   [If UI changes, note that screenshots should be added]

   ## Deployment Notes
   - [Any migration, config changes, or deployment considerations]

   ## Review Focus Areas
   - [Specific areas reviewers should pay attention to]
   ```

3. **Pre-Submit Checklist**
   - Are all tests passing?
   - Is the branch up to date with main?
   - Are there any TODO comments that should be resolved?
   - Is the commit history clean (squash if needed)?
   - Are there any sensitive files accidentally included?

## Output

Write the PR description to `pr-[branch-name].md` and display it.

Provide recommendations:
- Files that need extra review attention
- Suggested reviewers based on file ownership
- Any follow-up work needed after merge
