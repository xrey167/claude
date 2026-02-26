---
description: Create, update, or manage issues in the project tracker
allowed-tools: Read, Write, Edit
argument-hint: [create|update|list] [details]
---

Manage issues in ~~project tracker based on: $ARGUMENTS

## Actions

### Create Issue
If creating a new issue or issues:
1. Ask for title, description, and acceptance criteria (or read from a breakdown doc if referenced)
2. Assign appropriate labels, priority, and estimate
3. Create the issue in ~~project tracker
4. Link to parent epic or related issues if applicable
5. Report the created issue ID and URL

### Create Issues from Breakdown
If a breakdown document is referenced:
1. Read the breakdown document
2. For each issue in the document, create it in ~~project tracker
3. Set up dependency relationships (blocked by / blocks)
4. Assign to appropriate milestone or sprint
5. Report all created issue IDs

### Update Issue
If updating an existing issue:
1. Find the issue by ID or title in ~~project tracker
2. Apply the requested changes (status, assignee, labels, description)
3. Confirm the update

### List Issues
If listing issues:
1. Query ~~project tracker with any filters specified (status, assignee, label, sprint)
2. Present results in a table format
3. Include issue ID, title, status, assignee, and priority

## Output

After any action, provide a summary of what was done with links to the issues in ~~project tracker.
