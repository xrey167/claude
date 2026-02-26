---
description: Run a sprint retrospective and capture action items
allowed-tools: Read, Write, Edit
argument-hint: [sprint-name]
---

Facilitate a sprint retrospective for: $ARGUMENTS

## Process

Guide the user through a structured retrospective:

### 1. Data Gathering
Ask about each category:
- **What went well?** — successes, good practices, wins
- **What didn't go well?** — problems, frustrations, blockers
- **What was surprising?** — unexpected discoveries, learning moments
- **What should we try?** — ideas for improvement

### 2. Sprint Metrics (if available)
- Committed vs delivered (velocity)
- Carry-over items and why
- Bug count and severity
- Cycle time trends

### 3. Action Items
For each improvement identified:
- Define a specific, actionable task
- Assign an owner
- Set a deadline (usually next sprint)
- Categorize: Process | Tools | Communication | Technical

### 4. Follow-Up on Previous Actions
If a previous retro doc exists, review the action items:
- What was completed?
- What's still in progress?
- What was dropped and why?

## Output

Write the retrospective to `retro-[sprint-name].md` containing:

- **Sprint Summary** — goals achieved, metrics
- **What Went Well** — list with details
- **What Didn't Go Well** — list with details
- **Surprises & Learnings** — list
- **Action Items** — table with action, owner, deadline, category
- **Previous Action Item Status** — if applicable

Optionally create action items as issues in ~~project tracker.
