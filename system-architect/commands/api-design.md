---
description: Design API endpoints with schemas and documentation
allowed-tools: Read, Write, Edit
argument-hint: [api-name or spec-path]
---

Design the API for: $ARGUMENTS

If a file path is provided, read the spec or architecture doc for context.

## Discovery

Ask:
1. What API style (REST, GraphQL, gRPC)?
2. What are the main resources/entities?
3. Who are the API consumers (frontend, mobile, third-party)?
4. What authentication method (JWT, API key, OAuth)?
5. What rate limiting requirements?
6. Is versioning needed?

## Design Process

1. **Resource Mapping** — map domain entities to API resources
2. **Endpoint Design** — for each resource:
   - HTTP methods and paths
   - Request body schemas
   - Response schemas
   - Error responses
   - Query parameters (filtering, sorting, pagination)
3. **Authentication & Authorization** — auth flow, permission model
4. **Pagination Strategy** — cursor-based or offset-based
5. **Error Format** — standardized error response structure

## Output

Write the API design to `api-design-[api-slug].md` containing:

- Endpoint summary table
- Detailed endpoint documentation with examples
- Request/response JSON examples for each endpoint
- Error code catalog
- Authentication flow description
- Rate limiting policy
- Versioning strategy

Reference the api-db-design skill for REST conventions and patterns.
