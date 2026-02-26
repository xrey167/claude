---
name: testing-practices
description: >
  This skill should be used when the user asks about "test strategy",
  "testing approach", "what tests to write", "test coverage",
  "unit tests vs integration tests", "test plan", "QA workflow",
  or needs guidance on testing methodologies, frameworks, and practices.
version: 0.1.0
---

# Testing Practices

Testing strategies, methodologies, and quality assurance workflows.

## Testing Pyramid

### Unit Tests (base — most tests here)
- **What**: Individual functions, methods, classes in isolation
- **Speed**: Milliseconds
- **Coverage target**: 70-90% of business logic
- **Mock**: External dependencies (DB, APIs, file system)
- **When to write**: During implementation, for every business logic path

### Integration Tests (middle)
- **What**: Component interactions, API endpoints, database queries
- **Speed**: Seconds
- **Coverage target**: All critical paths and API endpoints
- **Mock**: External third-party services only
- **When to write**: For API contracts, data flow, service boundaries

### End-to-End Tests (top — fewest tests)
- **What**: Full user workflows through the actual system
- **Speed**: Minutes
- **Coverage target**: Critical user journeys (5-15 scenarios)
- **Mock**: Nothing — real system
- **When to write**: For high-value user flows (signup, checkout, core workflow)

## Test Strategy Design

For each feature, define:

1. **What to test**
   - Happy path — the expected flow works
   - Error cases — invalid input, failures, timeouts
   - Edge cases — boundary values, empty states, max limits
   - Security — auth, authorization, injection

2. **How to test**
   - Unit: pure logic, transformations, calculations
   - Integration: API contracts, DB operations, service calls
   - E2E: critical user journeys only
   - Manual: exploratory testing for UX, visual regression

3. **What NOT to test**
   - Framework internals
   - Third-party library behavior
   - Simple getters/setters with no logic
   - Implementation details (test behavior, not structure)

## Test Quality Criteria

- **Deterministic** — same input, same result, every time
- **Independent** — no test depends on another test's state
- **Fast** — unit tests < 100ms, integration < 5s
- **Readable** — test name describes the scenario and expected outcome
- **Maintainable** — minimal setup, clear assertions, no magic numbers

## Test Naming Convention

Pattern: `should [expected behavior] when [condition]`

Examples:
- `should return 404 when user does not exist`
- `should calculate total with tax when items have different rates`
- `should reject request when auth token is expired`

## Coverage Strategy

- **Don't chase 100%** — diminishing returns past 80%
- **Focus on**: business logic, error handling, edge cases
- **Ignore in coverage**: generated code, configuration, type definitions
- **Track trends** — coverage should not decrease on new PRs

## Additional Resources

- **`references/test-frameworks.md`** — framework recommendations by language
- **`references/test-patterns.md`** — common test patterns and anti-patterns
