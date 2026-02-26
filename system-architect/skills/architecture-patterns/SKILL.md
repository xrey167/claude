---
name: architecture-patterns
description: >
  This skill should be used when the user asks to "design a system",
  "choose an architecture", "compare architectural patterns", "evaluate
  trade-offs between monolith and microservices", "design for scale",
  or needs guidance on system design, distributed systems, or
  architectural decision-making.
version: 0.1.0
---

# Architecture Patterns

Reference knowledge for system architecture design decisions.

## Pattern Selection Framework

When choosing an architecture, evaluate against these dimensions:

1. **Scale requirements** — expected load, data volume, growth trajectory
2. **Team structure** — size, distribution, expertise, autonomy needs
3. **Deployment cadence** — how often different parts need to ship
4. **Consistency requirements** — strong vs eventual, transactional boundaries
5. **Latency budget** — synchronous vs asynchronous tolerance
6. **Operational maturity** — monitoring, debugging, incident response capability

## Core Patterns

### Monolith
- **When**: Small team (<10), early stage, domain not well understood
- **Strengths**: Simple deployment, easy debugging, shared data access, low latency
- **Weaknesses**: Scaling bottlenecks, deployment coupling, technology lock-in
- **Evolution path**: Modular monolith → strangler fig → selective extraction

### Microservices
- **When**: Large org, well-understood domain boundaries, independent scaling needs
- **Strengths**: Independent deployment, technology flexibility, team autonomy, isolated scaling
- **Weaknesses**: Network complexity, distributed transactions, operational overhead, debugging difficulty
- **Prerequisites**: CI/CD maturity, observability infrastructure, team discipline

### Event-Driven / Message-Based
- **When**: Asynchronous workflows, decoupled producers/consumers, audit trail needs
- **Strengths**: Loose coupling, natural audit log, temporal decoupling, replay capability
- **Weaknesses**: Eventual consistency, debugging complexity, message ordering challenges
- **Variants**: Event sourcing, CQRS, saga pattern, choreography vs orchestration

### Serverless / FaaS
- **When**: Bursty workloads, cost-sensitive, simple request/response, rapid prototyping
- **Strengths**: Zero ops, pay-per-use, auto-scaling, fast deployment
- **Weaknesses**: Cold starts, vendor lock-in, execution limits, stateless constraints
- **Best for**: APIs, webhooks, scheduled jobs, event processing

### Modular Monolith
- **When**: Want monolith simplicity with future extraction options
- **Strengths**: Clear boundaries, shared infrastructure, easier refactoring path
- **Key rule**: Modules communicate through defined interfaces, never direct DB access

## Cross-Cutting Concerns

### Data Strategy
- Where does data live? Who owns it?
- Replication strategy: sync vs async, leader vs multi-leader
- Caching layers: application, distributed, CDN
- Backup and disaster recovery plan

### Communication Patterns
- Synchronous: REST, gRPC, GraphQL
- Asynchronous: message queues, event streams, webhooks
- Service mesh considerations for inter-service communication

### Resilience
- Circuit breakers, bulkheads, retries with backoff
- Graceful degradation strategies
- Health checks and readiness probes
- Chaos engineering approach

## Diagramming

When designing architecture, generate visual diagrams using Mermaid:
- **C4 model**: Context → Container → Component → Code
- **Sequence diagrams**: For complex interaction flows
- **Flowcharts**: For decision logic and data flows

## Additional Resources

- **`references/detailed-patterns.md`** — in-depth pattern descriptions with real-world examples
- **`references/anti-patterns.md`** — common architectural mistakes and how to avoid them
