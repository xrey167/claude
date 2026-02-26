---
description: Plan a sprint with capacity, priorities, and assignments
allowed-tools: Read, Write, Edit
argument-hint: [sprint-name]
---

Plan a sprint: $ARGUMENTS

## Discovery

Ask:
1. What's the sprint duration (1 week, 2 weeks)?
2. How many developers are available? Any planned time off?
3. What's the team's average velocity (story points or issue count)?
4. Are there any fixed deadlines or commitments this sprint?
5. Are there carry-over items from the previous sprint?

## Planning Process

1. **Capacity Calculation**
   - Available developer-days = team size × sprint days - time off
   - Story point budget based on historical velocity

2. **Backlog Review**
   - Pull candidate issues from ~~project tracker
   - Review priority, estimates, and dependencies
   - Identify blockers and risks

3. **Sprint Selection**
   - Select issues fitting within capacity
   - Ensure a mix of feature work, bugs, and tech debt
   - Respect dependency ordering
   - Leave ~20% buffer for unplanned work

4. **Assignments**
   - Suggest assignments based on expertise and load balancing
   - Identify pair programming opportunities for complex work

5. **Sprint Goal**
   - Define 1-2 sentence sprint goal summarizing the deliverable

## Output

Write the sprint plan to `sprint-plan-[sprint-name].md` containing:

- **Sprint Goal** — what we aim to deliver
- **Capacity** — available effort
- **Committed Issues** — table with ID, title, assignee, estimate, priority
- **Dependencies** — critical path items
- **Risks** — what could derail the sprint
- **Carry-Over** — items from last sprint, if any

Update issues in ~~project tracker with sprint assignment if requested.
