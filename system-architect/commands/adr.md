---
description: Create an Architecture Decision Record
allowed-tools: Read, Write, Edit
argument-hint: [decision-title]
---

Create an Architecture Decision Record for: $ARGUMENTS

## Guided Process

Ask these questions to capture the decision:

1. **Context**: What's the situation? What problem or opportunity led to this decision?
2. **Constraints**: What technical, business, or organizational constraints apply?
3. **Options**: What alternatives did you consider? (Need at least 2)
4. For each option:
   - What are the pros?
   - What are the cons?
   - What's the estimated effort?
5. **Decision**: Which option was chosen and why?
6. **Consequences**: What are the positive, negative, and neutral outcomes?

## Output

Determine the next ADR number by checking for existing ADR files in the current directory.

Write the ADR to `adr-NNN-[decision-slug].md` using the ADR template from the documentation-standards skill.

Include:
- Clear, specific title starting with a verb (e.g., "Use PostgreSQL for primary data store")
- Status: Proposed (user can update later)
- Honest pros/cons for each option — no stacking the deck
- Consequences that acknowledge downsides

After writing, reference any related ADRs if they exist.
