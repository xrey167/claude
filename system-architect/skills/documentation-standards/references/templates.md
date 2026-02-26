# Document Templates

## PRD Template

```markdown
# [Feature Name] — Product Requirements Document

**Author**: [name]
**Date**: [date]
**Status**: Draft | In Review | Approved
**Stakeholders**: [list]

## Problem Statement
[What problem are we solving? For whom? Why now?]

## Goals & Success Metrics
| Goal | Metric | Target |
|------|--------|--------|
| [goal] | [how to measure] | [target value] |

## User Stories
### [Persona 1]
- As a [role], I want [capability], so that [benefit]
  - **Acceptance criteria**:
    - Given [context], when [action], then [result]

## Functional Requirements
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-01 | [requirement] | Must Have |

## Non-Functional Requirements
- **Performance**: [targets]
- **Security**: [requirements]
- **Accessibility**: [standards]
- **Scalability**: [expectations]

## Scope
### In Scope
- [item]

### Out of Scope
- [item]

## Dependencies
| Dependency | Owner | Status | Risk |
|-----------|-------|--------|------|
| [dep] | [team] | [status] | [risk level] |

## Risks & Mitigations
| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| [risk] | High/Med/Low | High/Med/Low | [plan] |

## Timeline
| Milestone | Target Date | Description |
|-----------|-------------|-------------|
| [milestone] | [date] | [what's delivered] |
```

## ADR Template

```markdown
# ADR-NNN: [Decision Title]

**Status**: Proposed | Accepted | Deprecated | Superseded by ADR-XXX
**Date**: [YYYY-MM-DD]
**Decision Makers**: [names]

## Context
[What forces are at play? What problem needs solving? What constraints exist?]

## Decision
[What was decided? Be specific and unambiguous.]

## Options Considered

### Option 1: [Name]
- **Pros**: [advantages]
- **Cons**: [disadvantages]
- **Effort**: [estimate]

### Option 2: [Name]
- **Pros**: [advantages]
- **Cons**: [disadvantages]
- **Effort**: [estimate]

### Option 3: [Name]
- **Pros**: [advantages]
- **Cons**: [disadvantages]
- **Effort**: [estimate]

## Consequences

### Positive
- [outcome]

### Negative
- [outcome]

### Neutral
- [outcome]

## References
- [links to related docs, discussions, ADRs]
```

## Technical Spec Template

```markdown
# [Feature/System Name] — Technical Specification

**Author**: [name]
**Date**: [date]
**Status**: Draft | In Review | Approved
**PRD**: [link]

## Overview
[1-2 paragraph summary of what this spec covers and why]

## Background
[Context, related systems, prior art, why this approach]

## Detailed Design

### Architecture
[High-level architecture with diagram]

### Components
[Describe each component, its responsibility, and interfaces]

### Data Flow
[How data moves through the system]

## API Design
### [Endpoint Group]
| Method | Path | Description |
|--------|------|-------------|
| POST | /api/v1/resource | Create a resource |

#### Request/Response Examples
[Include request body, response body, error responses]

## Data Model
### [Entity Name]
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Primary identifier |

### Relationships
[Entity relationship diagram]

## Error Handling
| Error | Code | Recovery |
|-------|------|----------|
| [error] | [code] | [what happens] |

## Security Considerations
- [authentication approach]
- [authorization model]
- [data protection measures]

## Testing Strategy
- **Unit**: [what to unit test]
- **Integration**: [what to integration test]
- **E2E**: [critical paths to test end-to-end]

## Migration Plan
[Steps to migrate from current state to target state]

## Rollback Plan
[How to undo this change if needed]

## Open Questions
- [ ] [unresolved item]
```
