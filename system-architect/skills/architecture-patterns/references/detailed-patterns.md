# Detailed Architecture Patterns

## Microservices — Deep Dive

### Service Decomposition Strategies
- **By business capability**: Each service owns a business function (payments, notifications, inventory)
- **By subdomain (DDD)**: Bounded contexts become service boundaries
- **By data ownership**: Each service owns its data store
- **Strangler fig**: Gradually replace monolith pieces

### Inter-Service Communication
- **Synchronous**: REST, gRPC (prefer gRPC for internal, REST for external)
- **Asynchronous**: Message queues (RabbitMQ, SQS), event streams (Kafka, EventBridge)
- **Service mesh**: Istio, Linkerd for cross-cutting concerns (mTLS, retries, observability)

### Data Management
- **Database per service**: Each service has its own database
- **Saga pattern**: Distributed transactions via compensating actions
- **CQRS**: Separate read and write models for different scaling needs
- **Event sourcing**: Store events instead of state, derive current state

### Operational Requirements
- Service discovery (Consul, DNS-based)
- Centralized logging (ELK, Datadog)
- Distributed tracing (Jaeger, OpenTelemetry)
- Health checks and circuit breakers
- API gateway for external access

## Event-Driven Architecture — Deep Dive

### Event Types
- **Domain events**: Business-meaningful occurrences (OrderPlaced, PaymentReceived)
- **Integration events**: Cross-service notifications
- **Command events**: Requests for action (SendEmail, ProcessPayment)

### Patterns
- **Event sourcing**: Append-only event log, rebuild state by replaying events
- **CQRS**: Command Query Responsibility Segregation — write model optimized for commands, read model optimized for queries
- **Saga**: Orchestrated or choreographed sequence of local transactions
- **Event-carried state transfer**: Events carry enough data for consumers to avoid callbacks

### Message Broker Selection
| Broker | Best for |
|--------|----------|
| Kafka | High throughput, event streaming, replay |
| RabbitMQ | Task queues, routing, lower throughput |
| SQS/SNS | AWS-native, simple pub/sub |
| NATS | Low latency, cloud-native |

## Serverless — Deep Dive

### Function Design
- Single responsibility per function
- Stateless execution
- Idempotent operations
- Cold start mitigation: provisioned concurrency, keep-warm, smaller packages

### Common Architectures
- **API + Lambda + DynamoDB**: REST API with serverless compute and NoSQL
- **Event processing**: S3 → Lambda → transformation → destination
- **Step Functions**: Orchestrate complex workflows with state machines
- **WebSocket API**: Real-time communication via API Gateway WebSocket

### Limitations to Consider
- Execution time limits (15 min for Lambda)
- Package size limits
- Cold start latency (100ms-10s depending on runtime)
- No persistent connections (use connection pooling like RDS Proxy)
- Vendor lock-in for proprietary services

## Modular Monolith — Deep Dive

### Module Structure
```
src/
├── modules/
│   ├── users/
│   │   ├── api/          # Public module interface
│   │   ├── domain/       # Business logic
│   │   ├── infra/        # DB, external services
│   │   └── module.ts     # Module registration
│   ├── orders/
│   └── payments/
├── shared/               # Shared kernel
└── main.ts
```

### Module Communication Rules
- Modules communicate ONLY through public APIs (interfaces)
- No direct database access across modules
- Shared kernel for truly shared types (Money, Email, UserId)
- Event bus for async cross-module communication
- Each module can be extracted to a microservice later

### Migration Path to Microservices
1. Start with modular monolith
2. Monitor which modules have different scaling/deployment needs
3. Extract high-priority modules to services
4. Replace in-process calls with API calls or events
5. Move module database to separate instance
