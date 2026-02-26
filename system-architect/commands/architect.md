---
description: Design system architecture with patterns, diagrams, and trade-offs
allowed-tools: Read, Write, Edit
argument-hint: [system-name or prd-path]
---

Design the system architecture for: $ARGUMENTS

If a file path is provided, read it first (PRD, spec, idea doc) for requirements context.

## Discovery

Ask these questions to understand requirements:

### Functional
1. What are the core capabilities this system needs?
2. What are the main user-facing workflows?
3. What external systems does it integrate with?

### Non-Functional
4. What's the expected scale (users, requests/sec, data volume)?
5. What's the latency budget for key operations?
6. What availability target (99.9%, 99.99%)?
7. What consistency model (strong, eventual)?

### Constraints
8. What technology constraints exist (language, cloud, existing infra)?
9. What's the team size and expertise?
10. What's the deployment model (cloud, on-prem, hybrid)?

## Architecture Design

Based on answers, produce:

1. **Pattern Selection** — choose architecture pattern(s) with justification. Reference the architecture-patterns skill for trade-off analysis.

2. **C4 Diagrams** — generate Mermaid diagrams:
   - **Context diagram** — system and its external actors
   - **Container diagram** — major containers (apps, databases, queues)
   - **Component diagram** — for the most complex container

3. **Component Design** — for each major component:
   - Responsibility and boundaries
   - API it exposes
   - Data it owns
   - Dependencies

4. **Data Architecture** — where data lives, how it flows, consistency model

5. **Communication Design** — sync vs async, protocols, message formats

6. **Resilience Strategy** — failure modes, recovery, degradation plan

7. **Security Architecture** — auth, authorization, data protection, network security

8. **Deployment Architecture** — environments, CI/CD, infrastructure as code

## Output

Write the full architecture document to `architecture-[system-slug].md`.

Recommend creating ADRs (`/adr`) for key decisions and a technical spec (`/spec`) for implementation details.
