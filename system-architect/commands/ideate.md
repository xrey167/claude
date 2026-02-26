---
description: Brainstorm and capture an idea through guided discovery
allowed-tools: Read, Write, Edit
argument-hint: [idea-topic]
---

Guide the user through a structured ideation session for: $ARGUMENTS

## Discovery Process

Ask the following questions one at a time, waiting for answers. Adapt follow-ups based on responses:

### Problem Space
1. What problem are you trying to solve?
2. Who experiences this problem? How often? How painful is it?
3. How is this problem currently solved (if at all)?
4. What would success look like?

### Solution Space
5. What's your initial idea for solving this?
6. What are the key features or capabilities needed?
7. What are the constraints (time, budget, technology, team)?
8. What's the simplest version that would be useful?

### Viability
9. What risks or unknowns concern you most?
10. Are there similar solutions to learn from?
11. What dependencies or integrations are needed?
12. What's the timeline expectation?

## Output

After gathering answers, create a structured idea document:

1. Write a file named `idea-[topic-slug].md` containing:
   - **Problem Statement** — synthesized from answers
   - **Proposed Solution** — refined from discussion
   - **Target Users** — who benefits
   - **Key Features** — prioritized list (must-have vs nice-to-have)
   - **Constraints & Limitations** — what we're working within
   - **Open Questions** — unresolved items
   - **Risks** — identified risks with initial mitigation ideas
   - **Next Steps** — recommended actions (PRD, prototype, research)

2. Generate a Mermaid diagram showing the high-level concept if applicable.

3. Summarize the idea in 2-3 sentences and suggest which workflow step to do next (usually `/prd` or `/architect`).
