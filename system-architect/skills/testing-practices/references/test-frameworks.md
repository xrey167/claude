# Test Framework Recommendations

## JavaScript / TypeScript
| Type | Framework | Notes |
|------|-----------|-------|
| Unit | Vitest | Fast, ESM-native, Jest-compatible API |
| Unit | Jest | Mature, large ecosystem |
| Integration | Supertest | HTTP assertion library for APIs |
| E2E | Playwright | Cross-browser, auto-wait, reliable |
| E2E | Cypress | Good DX, time-travel debugging |
| Component | Testing Library | Framework-agnostic DOM testing |

## Python
| Type | Framework | Notes |
|------|-----------|-------|
| Unit | pytest | De facto standard, fixtures, parametrize |
| Unit | unittest | Built-in, class-based |
| Integration | httpx / TestClient | Async-capable HTTP testing |
| E2E | Playwright for Python | Same reliability as JS version |
| Mock | unittest.mock / pytest-mock | Built-in mocking |

## Go
| Type | Framework | Notes |
|------|-----------|-------|
| Unit | testing (stdlib) | Built-in, table-driven tests |
| Unit | testify | Assertions, mocks, suites |
| Integration | httptest | Built-in HTTP test server |
| E2E | chromedp | Chrome DevTools Protocol |

## Java / Kotlin
| Type | Framework | Notes |
|------|-----------|-------|
| Unit | JUnit 5 | Standard, parameterized tests |
| Mock | Mockito | De facto mocking framework |
| Integration | Spring Boot Test | Full context testing |
| E2E | Selenium / Playwright | Browser automation |

## Rust
| Type | Framework | Notes |
|------|-----------|-------|
| Unit | built-in #[test] | Integrated into cargo |
| Integration | built-in tests/ dir | Separate integration test directory |
| Property | proptest | Property-based testing |
| Mock | mockall | Trait-based mocking |
