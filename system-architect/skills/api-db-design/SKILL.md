---
name: api-db-design
description: >
  This skill should be used when the user asks to "design an API",
  "design a database schema", "plan database tables", "create endpoints",
  "design REST API", "design GraphQL schema", "plan data models",
  "database migration", or needs guidance on API conventions,
  database normalization, indexing, or data architecture.
version: 0.1.0
---

# API & Database Design

Patterns and practices for designing APIs and database schemas.

## API Design

### REST Conventions

**Resource naming**:
- Nouns, not verbs: `/users`, not `/getUsers`
- Plural for collections: `/users`, `/orders`
- Hierarchical for relationships: `/users/{id}/orders`
- Kebab-case for multi-word: `/order-items`

**HTTP Methods**:
| Method | Purpose | Idempotent | Safe |
|--------|---------|------------|------|
| GET | Read | Yes | Yes |
| POST | Create | No | No |
| PUT | Full replace | Yes | No |
| PATCH | Partial update | No | No |
| DELETE | Remove | Yes | No |

**Status codes**:
- 200 OK, 201 Created, 204 No Content
- 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable
- 500 Internal Error, 503 Service Unavailable

**Pagination**: Cursor-based for large datasets, offset-based for simple cases
**Filtering**: Query params (`?status=active&sort=-created_at`)
**Versioning**: URL prefix (`/v1/`) or header-based

### GraphQL Conventions
- Types mirror domain entities
- Queries for reads, Mutations for writes
- Use connections pattern for pagination
- Input types for mutation arguments
- Error handling through union types or error fields

### API Documentation
- OpenAPI/Swagger for REST
- SDL + descriptions for GraphQL
- Include examples for every endpoint
- Document error responses explicitly

## Database Design

### Schema Design Process

1. **Identify entities** — from domain model and user stories
2. **Define attributes** — columns, types, constraints
3. **Map relationships** — one-to-one, one-to-many, many-to-many
4. **Normalize** — eliminate redundancy (usually to 3NF)
5. **Denormalize selectively** — for read performance where justified
6. **Index strategically** — based on query patterns
7. **Plan migrations** — versioned, reversible, zero-downtime

### Normalization Guide
- **1NF**: No repeating groups, atomic values
- **2NF**: No partial dependencies (all non-key columns depend on full primary key)
- **3NF**: No transitive dependencies (non-key columns don't depend on other non-key columns)
- **When to denormalize**: Read-heavy workloads, reporting tables, caching layers

### Indexing Strategy
- **Primary key**: Always indexed automatically
- **Foreign keys**: Index for JOIN performance
- **Query patterns**: Index columns in WHERE, ORDER BY, GROUP BY
- **Composite indexes**: Column order matters — most selective first
- **Partial indexes**: For queries on subsets of data
- **Don't over-index**: Each index slows writes

### Migration Best Practices
- **Always reversible**: Include up and down migrations
- **Zero-downtime**: Add column → backfill → add constraint → remove old
- **Small steps**: One change per migration
- **Test data migration**: On production-like dataset
- **Version control**: Migrations are code — commit them

### Common Patterns
- **Soft deletes**: `deleted_at` timestamp instead of actual deletion
- **Audit trails**: `created_at`, `updated_at`, `created_by`
- **Polymorphic associations**: Type + ID columns for flexible relationships
- **JSON columns**: For semi-structured data (use sparingly)
- **Enums**: Database enums or lookup tables for fixed value sets

## Additional Resources

- **`references/api-examples.md`** — complete API design examples
- **`references/schema-examples.md`** — database schema examples with migration scripts
