---
description: Design database schema with tables, relationships, and migrations
allowed-tools: Read, Write, Edit
argument-hint: [system-name or spec-path]
---

Design the database schema for: $ARGUMENTS

If a file path is provided, read the spec or architecture doc for context.

## Discovery

Ask:
1. What are the core entities?
2. What relationships exist between them?
3. What queries will be most frequent?
4. What's the expected data volume and growth rate?
5. What database technology is being used (PostgreSQL, MySQL, MongoDB, etc.)?
6. Any multi-tenancy requirements?
7. Any soft-delete or audit trail requirements?

## Design Process

1. **Entity-Relationship Diagram** — generate a Mermaid ER diagram
2. **Schema Definition** — SQL CREATE TABLE statements with:
   - Primary keys (prefer UUID or ULID)
   - Foreign keys with ON DELETE behavior
   - Constraints (NOT NULL, CHECK, UNIQUE)
   - Default values
   - Timestamps (created_at, updated_at)
3. **Indexing Strategy** — based on query patterns
4. **Migration Plan** — ordered migration scripts

## Output

Write the database design to `db-design-[system-slug].md` containing:

- ER diagram (Mermaid)
- Full schema DDL
- Index rationale
- Migration scripts (up and down)
- Seed data examples
- Notes on normalization decisions

Reference the api-db-design skill for conventions and patterns.
