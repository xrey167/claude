---
name: documentation-standards
description: >
  This skill should be used when the user asks to "write a PRD",
  "create an ADR", "write a technical spec", "document this decision",
  "create a design doc", "write user stories", or needs guidance on
  engineering documentation formats, templates, and quality standards.
version: 0.1.0
---

# Documentation Standards

Templates, conventions, and quality criteria for engineering documents.

## Document Types

### Product Requirements Document (PRD)

Structure:
1. **Problem Statement** — what problem are we solving and for whom
2. **Goals & Success Metrics** — measurable outcomes
3. **User Stories** — as a [role], I want [capability], so that [benefit]
4. **Functional Requirements** — what the system must do
5. **Non-Functional Requirements** — performance, security, accessibility
6. **Scope & Constraints** — what's in, what's out, known limitations
7. **Dependencies** — external systems, teams, timelines
8. **Risks & Mitigations** — what could go wrong, contingency plans
9. **Timeline & Milestones** — phased delivery plan

Quality criteria:
- Every requirement is testable
- Success metrics are specific and measurable
- Scope boundaries are explicit
- User stories follow INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable)

### Architecture Decision Record (ADR)

Structure:
1. **Title** — short descriptive name (ADR-NNN: Verb Noun)
2. **Status** — Proposed | Accepted | Deprecated | Superseded
3. **Date** — when the decision was made
4. **Context** — what forces are at play, why this decision is needed
5. **Decision** — what was decided, clearly and specifically
6. **Options Considered** — each option with pros/cons analysis
7. **Consequences** — positive, negative, and neutral outcomes
8. **References** — related ADRs, docs, discussions

Quality criteria:
- Context explains WHY, not just WHAT
- At least 2 alternatives are genuinely considered
- Consequences are honest about downsides
- Status is kept current

### Technical Specification

Structure:
1. **Overview** — what this spec covers, goals
2. **Background** — context, related systems, prior art
3. **Detailed Design** — the core technical approach
4. **API Design** — endpoints, request/response schemas, auth
5. **Data Model** — entities, relationships, storage
6. **Error Handling** — failure modes, recovery strategies
7. **Security Considerations** — auth, data protection, attack vectors
8. **Testing Strategy** — what to test, how, coverage targets
9. **Migration Plan** — how to get from current to target state
10. **Rollback Plan** — how to undo if things go wrong
11. **Open Questions** — unresolved items needing input

### User Story

Format: As a [persona], I want [action], so that [outcome].

Include:
- **Acceptance criteria** — given/when/then format
- **Edge cases** — boundary conditions, error states
- **Dependencies** — blocked by / blocks
- **Estimate** — relative sizing (S/M/L/XL)
- **Priority** — must have / should have / nice to have

## Writing Principles

1. **Audience-aware** — write for the reader, not the author
2. **Specific over vague** — "handles 10K requests/sec" not "handles high traffic"
3. **Decision-focused** — documents should drive decisions, not just describe
4. **Living documents** — keep them updated or mark them stale
5. **Diagrams over text** — visual where possible, text for precision

## Additional Resources

- **`references/templates.md`** — copy-paste templates for each document type
- **`references/review-checklists.md`** — checklists for reviewing each document type
