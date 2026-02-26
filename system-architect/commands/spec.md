---
description: Generate a technical specification document
allowed-tools: Read, Write, Edit
argument-hint: [feature-name or prd-path]
---

Create a technical specification for: $ARGUMENTS

If a file path is provided, read it first (PRD, architecture doc) for context.

## Guided Process

Ask these questions:

### Design
1. What's the high-level approach?
2. What components or services are involved?
3. How does data flow through the system?

### API
4. What endpoints or interfaces are needed?
5. What are the request/response schemas?
6. What authentication/authorization model?

### Data
7. What entities and relationships exist?
8. What storage technology?
9. Any migration from existing data?

### Quality
10. What are the key error scenarios and how should they be handled?
11. What security considerations apply?
12. What's the testing strategy?

### Rollout
13. How will this be deployed (all at once, phased, feature-flagged)?
14. What's the rollback plan if something goes wrong?
15. Any open questions that need answers before starting?

## Output

Write a complete technical spec to `spec-[feature-slug].md` using the technical specification template from the documentation-standards skill.

Include:
- Architecture diagram (Mermaid)
- API design with request/response examples
- Data model with entity relationship diagram
- Error handling matrix
- Testing strategy by level (unit, integration, E2E)
- Migration and rollback plans

Suggest next steps: `/db-design` for detailed schema, `/api-design` for API details, `/breakdown` for implementation tasks.
