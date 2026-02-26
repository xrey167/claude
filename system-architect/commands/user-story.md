---
description: Create well-formed user stories with acceptance criteria
allowed-tools: Read, Write, Edit
argument-hint: [feature-name or prd-path]
---

Create detailed user stories for: $ARGUMENTS

If a file path is provided, read the PRD or spec to extract stories from it.

## Process

1. **Identify personas** — list all user roles affected
2. **Map capabilities** — for each persona, list what they need to do
3. **Write stories** — using the standard format
4. **Add acceptance criteria** — Given/When/Then for each story
5. **Identify edge cases** — boundary conditions, error states
6. **Estimate and prioritize** — relative sizing and MoSCoW priority

## Story Format

For each story, write:

```markdown
### [STORY-ID]: [Short Title]

**As a** [persona],
**I want** [capability],
**So that** [benefit].

**Priority**: Must Have | Should Have | Nice to Have
**Estimate**: S | M | L | XL
**Dependencies**: [list or none]

#### Acceptance Criteria
- **Given** [context], **when** [action], **then** [expected result]
- **Given** [context], **when** [action], **then** [expected result]

#### Edge Cases
- [edge case description and expected behavior]

#### Notes
- [implementation hints, design considerations]
```

## Output

Write all stories to `user-stories-[feature-slug].md` organized by persona, then by priority.

Include a summary table at the top:
| ID | Story | Persona | Priority | Estimate |
|----|-------|---------|----------|----------|

Suggest using `/breakdown` to convert these into trackable issues.
