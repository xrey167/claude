---
description: Review an architecture or design document for risks and improvements
allowed-tools: Read, Write, Edit
argument-hint: [document-path]
---

Review the architecture or design document at: @$1

## Review Dimensions

Evaluate the document across these dimensions, scoring each 1-5:

### 1. Completeness
- Are all necessary sections present?
- Are there gaps in the design?
- Are edge cases addressed?
- Are error scenarios covered?

### 2. Scalability
- Will this handle 10x current load?
- Where are the bottlenecks?
- What's the horizontal scaling story?
- Is caching strategy appropriate?

### 3. Reliability
- What are the single points of failure?
- What happens when dependencies are down?
- Is the recovery strategy documented?
- Are circuit breakers and fallbacks planned?

### 4. Security
- Is authentication and authorization solid?
- Are there data protection gaps?
- Input validation coverage?
- OWASP top 10 considerations?

### 5. Maintainability
- Is the design simple enough for the team?
- Are boundaries and responsibilities clear?
- Is monitoring and observability planned?
- Will new team members understand this?

### 6. Feasibility
- Can the team build this in the stated timeline?
- Are technology choices appropriate for team expertise?
- Are dependencies available and reliable?

## Output

Write the review to `review-[doc-name].md` containing:

- **Score Card** — table with dimension scores
- **Strengths** — what's done well
- **Risks** — identified risks ranked by severity
- **Recommendations** — specific improvements, prioritized
- **Questions** — things that need clarification
- **Verdict** — overall assessment and recommended next steps

If critical issues are found, suggest creating ADRs (`/adr`) for key decisions that need revisiting.
