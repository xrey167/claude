---
description: Break a PRD or spec into trackable issues with estimates
allowed-tools: Read, Write, Edit
argument-hint: [document-path]
---

Break down the document at @$1 into implementation issues.

## Process

1. **Read the source document** — understand all requirements and scope
2. **Identify work streams** — group by component, layer, or feature area
3. **Create issues** — for each unit of work:
   - Clear, actionable title
   - Description with context and requirements
   - Acceptance criteria
   - Relative estimate (S/M/L/XL)
   - Dependencies (blocked by / blocks)
   - Priority (P0-P3)
   - Labels/tags
4. **Map dependencies** — create a dependency graph
5. **Suggest sprint allocation** — group into logical sprints

## Issue Format

For each issue:
```markdown
### [ID]: [Title]
**Type**: Feature | Bug | Task | Chore
**Priority**: P0 (Critical) | P1 (High) | P2 (Medium) | P3 (Low)
**Estimate**: S (< 1 day) | M (1-3 days) | L (3-5 days) | XL (> 5 days)
**Labels**: [relevant labels]
**Blocked by**: [issue IDs]
**Blocks**: [issue IDs]

**Description**:
[What needs to be done and why]

**Acceptance Criteria**:
- [ ] [criterion]

**Technical Notes**:
[Implementation hints, relevant files, patterns to follow]
```

## Output

Write the breakdown to `breakdown-[feature-slug].md` containing:

1. **Summary** — total issues, effort distribution, critical path
2. **Dependency Diagram** — Mermaid graph showing issue dependencies
3. **Issues by Work Stream** — grouped logically
4. **Sprint Suggestions** — which issues to tackle first, second, third
5. **Risk Items** — issues with high uncertainty or external dependencies

Suggest using `/issue` to create these in the project tracker, or `/sprint-plan` to plan the sprint.
