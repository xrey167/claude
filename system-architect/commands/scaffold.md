---
description: Generate project or feature code structure from a spec
allowed-tools: Read, Write, Edit, Bash(mkdir:*, touch:*, npm:*, npx:*, yarn:*, pnpm:*)
argument-hint: [spec-path or project-type]
---

Scaffold the project or feature structure for: $ARGUMENTS

If a file path is provided, read the spec to derive the structure.

## Discovery

Ask:
1. What language/framework (TypeScript/Node, Python, Go, Rust, etc.)?
2. What project type (API, web app, CLI, library, monorepo)?
3. What package manager (npm, yarn, pnpm, pip, cargo, go modules)?
4. What testing framework preference?
5. What linting/formatting tools (ESLint, Prettier, Black, etc.)?

## Scaffold Process

1. **Directory Structure** — create the project layout:
   - Source directories organized by concern
   - Test directories mirroring source
   - Config files (tsconfig, eslint, prettier, etc.)
   - CI/CD configuration
   - Documentation directory

2. **Configuration Files** — generate:
   - Package manifest (package.json, Cargo.toml, go.mod, etc.)
   - Build configuration
   - Linting and formatting config
   - Test configuration
   - Git configuration (.gitignore)

3. **Boilerplate Code** — create starter files:
   - Entry point
   - Example module with test
   - Type definitions (if applicable)
   - Environment configuration

4. **Documentation** — create:
   - README.md with setup instructions
   - CONTRIBUTING.md

## Output

Create all files and directories. Provide a summary of:
- Directory tree of what was created
- How to install dependencies
- How to run the project
- How to run tests
- Suggested next steps

Suggest using `/setup-repo` to initialize git and `/setup-project` to create the project board.
