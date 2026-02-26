---
description: Create project board with columns, labels, and milestones
allowed-tools: Read, Write, Edit
argument-hint: [project-name]
---

Set up a project board in ~~project tracker for: $ARGUMENTS

## Discovery

Ask:
1. What methodology (Scrum, Kanban, hybrid)?
2. What columns/statuses do you want?
3. What label categories are needed?
4. What milestones or releases are planned?
5. Are there multiple teams or a single team?

## Setup Process

1. **Create Project**
   - Set project name and description
   - Configure workflow (columns/statuses)

2. **Default Columns** (customize based on methodology):

   **Scrum**:
   - Backlog → Sprint Backlog → In Progress → In Review → Done

   **Kanban**:
   - To Do → In Progress → In Review → Done

3. **Create Labels**

   **Type labels**:
   - `feature` — new functionality
   - `bug` — something broken
   - `chore` — maintenance task
   - `tech-debt` — technical debt
   - `docs` — documentation
   - `spike` — research/investigation

   **Priority labels**:
   - `P0-critical` — drop everything
   - `P1-high` — next up
   - `P2-medium` — plan for soon
   - `P3-low` — nice to have

   **Size labels**:
   - `size/S` — < 1 day
   - `size/M` — 1-3 days
   - `size/L` — 3-5 days
   - `size/XL` — > 5 days

4. **Create Milestones**
   - Based on planned releases or sprints
   - Set target dates

## Output

Report what was created in ~~project tracker. Suggest using `/init-issues` to populate the board with initial issues.
