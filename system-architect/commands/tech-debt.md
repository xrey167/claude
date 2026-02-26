---
description: Track, prioritize, and plan tech debt reduction
allowed-tools: Read, Write, Edit
argument-hint: [action: catalog|prioritize|plan]
---

Manage tech debt: $ARGUMENTS

## Actions

### Catalog
Help identify and document tech debt:

Ask about each category:
- **Code quality** — duplicated code, complex functions, poor naming, missing tests
- **Architecture** — tightly coupled components, outdated patterns, scaling limitations
- **Dependencies** — outdated libraries, security vulnerabilities, deprecated APIs
- **Infrastructure** — manual processes, missing automation, monitoring gaps
- **Documentation** — missing docs, outdated docs, tribal knowledge

For each item, capture:
- Description of the debt
- Impact (what problems it causes)
- Risk (what could go wrong if ignored)
- Estimated effort to fix
- Category and area

### Prioritize
Score each debt item on:
- **Impact**: How much does this hurt productivity/reliability? (1-5)
- **Risk**: What's the probability of it causing a problem? (1-5)
- **Effort**: How much work to fix? (1-5, inverted — easy fixes score higher)
- **Priority Score** = Impact × Risk × Effort

Sort by priority score, recommend top items.

### Plan
Create a tech debt reduction plan:
- Allocate % of sprint capacity (typically 10-20%)
- Select highest-priority items fitting the budget
- Create issues in ~~project tracker
- Set milestones for debt reduction goals

## Output

Write the tech debt document to `tech-debt-[date].md` containing:

- **Catalog** — all identified debt items
- **Priority Matrix** — scored and ranked
- **Reduction Plan** — phased approach with timeline
- **Metrics** — how to track debt reduction progress
