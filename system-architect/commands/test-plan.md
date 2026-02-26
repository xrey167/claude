---
description: Create a test strategy and test plan
allowed-tools: Read, Write, Edit
argument-hint: [feature-name or spec-path]
---

Create a test plan for: $ARGUMENTS

If a file path is provided, read the spec to derive test scenarios.

## Discovery

Ask:
1. What testing frameworks are already in use?
2. What's the current test coverage situation?
3. Are there any specific areas of concern (security, performance, edge cases)?
4. What CI/CD pipeline runs tests?
5. Any compliance or regulatory testing requirements?

## Test Plan Process

Reference the testing-practices skill for methodology.

1. **Test Strategy** — decide the testing approach:
   - Testing pyramid distribution (unit / integration / E2E ratio)
   - What to test at each level
   - What NOT to test
   - Mock strategy

2. **Test Scenarios** — for each feature area:
   - Happy path scenarios
   - Error and failure scenarios
   - Edge cases and boundary conditions
   - Security test cases
   - Performance considerations

3. **Test Data** — define:
   - Test fixtures needed
   - Mock data specifications
   - Test environment requirements

4. **Coverage Goals** — set targets:
   - Overall coverage target
   - Critical path coverage (must be 100%)
   - Acceptable gaps (generated code, config, etc.)

## Output

Write the test plan to `test-plan-[feature-slug].md` containing:

- **Strategy Overview** — approach and rationale
- **Test Scenarios** — organized by feature area and test level
- **Test Data Requirements** — fixtures and mocks needed
- **Coverage Goals** — targets by area
- **CI Integration** — how tests fit in the pipeline
- **Timeline** — test implementation schedule

Suggest using `/scaffold` to set up test infrastructure if needed.
