---
description: Manage incident response with runbook and status updates
allowed-tools: Read, Write, Edit
argument-hint: [incident-description]
---

Manage incident response for: $ARGUMENTS

## Incident Process

### 1. Triage
Ask:
- What's happening? What symptoms are users seeing?
- When did it start?
- What's the impact (users affected, revenue impact)?
- What severity level (SEV1-SEV4)?
  - SEV1: Complete outage, all users affected
  - SEV2: Major feature broken, many users affected
  - SEV3: Minor feature degraded, some users affected
  - SEV4: Cosmetic issue, minimal impact

### 2. Communication
Generate status update templates:
- Internal update for the team
- External status page update (if applicable)
- Stakeholder notification

### 3. Investigation
Help structure the investigation:
- What changed recently? (deployments, config changes, traffic spikes)
- What does monitoring show? (error rates, latency, resource usage)
- What's the blast radius?
- What are the potential root causes?

### 4. Mitigation
Discuss options:
- Can we rollback?
- Can we apply a hotfix?
- Can we mitigate without code changes (config, feature flags, scaling)?
- What's the fastest path to user recovery?

### 5. Resolution
Document:
- What was the root cause?
- What was the fix applied?
- When was service restored?
- What follow-up work is needed?

## Output

Write the incident report to `incident-[date]-[slug].md` containing:

- **Timeline** — chronological events
- **Impact** — users affected, duration, severity
- **Root Cause** — what caused the incident
- **Resolution** — what was done to fix it
- **Action Items** — preventive measures
- **Lessons Learned** — what to do differently

Suggest scheduling a `/retro` or postmortem follow-up and creating `/tech-debt` items for preventive work.
