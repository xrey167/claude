# Test Patterns & Anti-Patterns

## Good Patterns

### Arrange-Act-Assert (AAA)
```
// Arrange — set up test data and conditions
// Act — execute the code under test
// Assert — verify the expected outcome
```
Every test should have these three clearly separated sections.

### Builder Pattern for Test Data
Create builders for complex test objects to keep tests readable:
```
const user = UserBuilder.create()
  .withName("Alice")
  .withRole("admin")
  .build();
```

### Test Fixtures
Shared setup for related tests. Use setup/teardown hooks:
- `beforeEach` — reset state before each test
- `afterEach` — clean up resources
- `beforeAll` — one-time setup (DB connections)
- `afterAll` — one-time cleanup

### Parameterized Tests
Run the same test with different inputs:
```
test.each([
  [1, 1, 2],
  [2, 3, 5],
  [-1, 1, 0],
])('add(%i, %i) = %i', (a, b, expected) => {
  expect(add(a, b)).toBe(expected);
});
```

### Contract Testing
Verify API contracts between services without running both:
- Producer tests: Verify API matches contract
- Consumer tests: Verify client code works with contract

## Anti-Patterns to Avoid

### Flaky Tests
- Tests that sometimes pass, sometimes fail
- Causes: Timing, shared state, external dependencies, non-deterministic data
- Fix: Isolate tests, mock time, use deterministic data, retry with investigation

### Test Interdependence
- Tests that must run in specific order
- Fix: Each test creates its own state, tears down after

### Testing Implementation Details
- Testing private methods, internal state, mock call counts
- Fix: Test behavior (inputs → outputs), not structure

### Excessive Mocking
- Mocking everything, including the code under test
- Fix: Only mock external boundaries (DB, APIs, file system)

### Assertion-Free Tests
- Tests that run code but never assert anything
- Fix: Every test must have at least one meaningful assertion

### Slow Tests
- Unit tests taking seconds, integration tests taking minutes
- Fix: Mock heavy dependencies, parallelize, use in-memory databases

### Copy-Paste Tests
- Identical test bodies with minor variations
- Fix: Parameterized tests, shared helpers, test utilities
