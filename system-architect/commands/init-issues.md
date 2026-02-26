---
description: Generate initial issues from a PRD or spec and push to tracker
allowed-tools: Read, Write, Edit
argument-hint: [document-path]
---

Create initial issues from: @$1

## Process

1. **Read Source Document** — PRD, spec, breakdown doc, or architecture doc
2. **Extract Work Items** — identify all implementation tasks
3. **Structure Issues** — for each work item:
   - Title following convention: `[Type] Short description`
   - Description with context, requirements, and acceptance criteria
   - Labels (type, priority, size)
   - Dependencies
   - Milestone assignment

4. **Create Epic/Parent Issues** — group related issues under epics:
   - One epic per major feature or component
   - Link child issues to their epic

5. **Set Up Dependencies** — mark blocking relationships:
   - Infrastructure before features
   - Data model before API
   - API before frontend

6. **Push to Tracker** — create all issues in ~~project tracker:
   - Create epics first
   - Create issues and link to epics
   - Set up dependency relationships
   - Assign to milestone

## Output

Provide a summary:
- Total issues created (by type and priority)
- Epic structure
- Dependency graph (Mermaid diagram)
- Suggested sprint allocation
- Any items that need further breakdown

Suggest using `/sprint-plan` to plan the first sprint.
