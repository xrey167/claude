---
description: Generate a Product Requirements Document through guided questioning
allowed-tools: Read, Write, Edit
argument-hint: [feature-name or idea-doc-path]
---

Create a comprehensive Product Requirements Document for: $ARGUMENTS

If a file path is provided, read it first to use as context (idea doc, notes, etc.).

## Guided Questioning

Ask the following questions systematically. Group related questions, wait for answers before proceeding:

### Problem & Context
1. What problem does this solve? Who has this problem?
2. What's the current experience without this feature?
3. Why is now the right time to build this?
4. What data or feedback supports the need?

### Goals & Metrics
5. What are the primary goals (max 3)?
6. How will you measure success? What specific metrics?
7. What's the target for each metric?

### Users & Stories
8. Who are the primary personas/user types?
9. For each persona, what are the key user stories?
10. What are the acceptance criteria for each story?

### Requirements
11. What must the system do (functional requirements)?
12. What are the performance/scale requirements?
13. What security or compliance requirements exist?
14. What accessibility standards must be met?

### Scope
15. What's explicitly IN scope for v1?
16. What's explicitly OUT of scope?
17. What's deferred to future versions?

### Dependencies & Risks
18. What teams, services, or systems does this depend on?
19. What are the biggest risks? How would you mitigate each?
20. What's the desired timeline?

## Output

Write a complete PRD document to `prd-[feature-slug].md` using the documentation-standards skill template. Include:

- All sections from the PRD template
- User stories with acceptance criteria in Given/When/Then format
- A prioritized requirements table (Must Have / Should Have / Nice to Have)
- A risk matrix with probability and impact ratings
- A phased timeline with milestones

After writing, suggest next steps: `/architect` for system design, `/user-story` for detailed stories, or `/breakdown` for issue creation.
