# System Architect

A comprehensive engineering workflow plugin covering the entire software development lifecycle — from ideation to production delivery.

## What It Does

System Architect provides guided workflows for every phase of building software:

- **Think through ideas** with structured brainstorming and stakeholder analysis
- **Write formal documents** like PRDs, ADRs, technical specs, and user stories
- **Design systems** with architecture patterns, database schemas, and API contracts
- **Break work down** into trackable issues with estimates, dependencies, and sprint plans
- **Set up projects** with git repos, project boards, and initial issue backlog
- **Ship code** with scaffolding, git workflows, PR prep, and test plans
- **Run operations** with deploy checklists, incident response, and tech debt management

## Commands (24)

### Project Setup
| Command | Description |
|---------|-------------|
| `/setup-repo` | Initialize git repo with remote, branching rules, and templates |
| `/setup-project` | Create project board with columns, labels, and milestones |
| `/project-structure` | Define and scaffold project directory layout |
| `/init-issues` | Generate initial issues from a document and push to tracker |

### Ideation & Planning
| Command | Description |
|---------|-------------|
| `/ideate` | Guided brainstorming and idea exploration |
| `/prd` | Create a Product Requirements Document |
| `/user-story` | Write user stories with acceptance criteria |
| `/breakdown` | Decompose a document into implementable issues |

### Architecture & Design
| Command | Description |
|---------|-------------|
| `/architect` | Design system architecture with C4 diagrams |
| `/adr` | Create an Architecture Decision Record |
| `/spec` | Write a technical specification |
| `/db-design` | Design database schema with ER diagrams |
| `/api-design` | Design API endpoints and contracts |
| `/review-design` | Review a design document across 6 dimensions |

### Implementation & Git
| Command | Description |
|---------|-------------|
| `/scaffold` | Generate project or feature boilerplate code |
| `/git-flow` | Git workflow guidance (branch, commit, merge, release) |
| `/pr-prep` | Generate PR description from current changes |
| `/test-plan` | Create a test strategy and test plan |

### Project Management
| Command | Description |
|---------|-------------|
| `/issue` | Create, update, or manage issues in tracker |
| `/sprint-plan` | Plan a sprint with capacity and priority analysis |
| `/retro` | Run a structured sprint retrospective |
| `/tech-debt` | Catalog, prioritize, and plan tech debt reduction |

### Operations
| Command | Description |
|---------|-------------|
| `/deploy-checklist` | Pre/during/post deployment checklist with rollback plan |
| `/incident` | Incident response: triage, communicate, investigate, resolve |

## Skills (5)

| Skill | Loaded When |
|-------|-------------|
| Architecture Patterns | Discussing system architecture, design patterns, or making architecture decisions |
| Documentation Standards | Writing or reviewing PRDs, ADRs, specs, or user stories |
| Git Practices | Setting up repos, branching strategies, CI/CD, or PR workflows |
| Testing Practices | Planning test strategies, choosing frameworks, or writing test plans |
| API & Database Design | Designing REST/GraphQL APIs, database schemas, or data models |

## Agents (4)

| Agent | Triggered By |
|-------|-------------|
| Architecture Reviewer | "Review this architecture", "Does this design look right?" |
| Issue Breakdown | "Break this into tickets", "What are the implementation tasks?" |
| Document Generator | "Write this up as a PRD", "Turn these notes into a spec" |
| Sprint Planner | "Help me plan the sprint", "What should we prioritize?" |

## Typical Workflows

### New Project (Idea → Tracked Issues)
```
/ideate → /prd → /architect → /adr → /spec → /breakdown → /setup-repo → /setup-project → /init-issues
```

### Sprint Cycle
```
/sprint-plan → [work] → /pr-prep → [review] → /deploy-checklist → /retro
```

### Feature Development
```
/user-story → /spec → /db-design → /api-design → /scaffold → /test-plan → /pr-prep
```

### Incident Response
```
/incident → [resolve] → /adr (document decisions) → /tech-debt (track follow-ups)
```

## Connectors

This plugin uses tool-agnostic placeholders so it works with any project tracker or chat tool:

| Category | Placeholder | Examples |
|----------|-------------|----------|
| Project tracker | `~~project tracker` | Linear, Jira, Asana, GitHub Issues |
| Chat | `~~chat` | Slack, Microsoft Teams, Discord |
