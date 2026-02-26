# Architecture Anti-Patterns

## Distributed Monolith
**Symptom**: Microservices that must be deployed together
**Cause**: Tight coupling between services, shared databases
**Fix**: Define clear service boundaries, own your data, use async communication

## Big Ball of Mud
**Symptom**: No discernible architecture, everything depends on everything
**Cause**: Lack of boundaries, expediency over design
**Fix**: Identify bounded contexts, draw module boundaries, enforce with linting

## Golden Hammer
**Symptom**: Using one technology/pattern for everything
**Cause**: Familiarity bias, resistance to learning new tools
**Fix**: Evaluate each problem independently, right tool for the right job

## Premature Microservices
**Symptom**: 3-person team managing 20 services
**Cause**: Following trends without evaluating fit
**Fix**: Start monolith, extract when you have clear reasons and operational maturity

## Shared Database
**Symptom**: Multiple services reading/writing the same tables
**Cause**: "Easy" data sharing, migration laziness
**Fix**: Each service owns its data, expose through APIs, use events for sync

## Chatty Services
**Symptom**: Request requires 10+ inter-service calls
**Cause**: Over-decomposed services, wrong service boundaries
**Fix**: Merge related services, use aggregation layer, batch API calls

## Resume-Driven Development
**Symptom**: Unnecessary complexity using latest tech trends
**Cause**: Developer interest over business needs
**Fix**: Boring technology by default, new tech only with clear justification

## Lack of Observability
**Symptom**: "It works on my machine" and "we don't know what happened"
**Cause**: Logging, metrics, and tracing are afterthoughts
**Fix**: Observability is a first-class concern — build it in from day one
