---
description: Define and scaffold project directory layout and configuration
allowed-tools: Read, Write, Edit, Bash(mkdir:*, touch:*, npm:*, npx:*, yarn:*, pnpm:*, pip:*, cargo:*, go:*)
argument-hint: [project-type or spec-path]
---

Define and create the project structure for: $ARGUMENTS

If a file path is provided, read the spec or architecture doc for context.

## Discovery

Ask:
1. What's the project type (API, web app, CLI, library, microservice, monorepo)?
2. What language and framework?
3. What's the team's preferred project structure pattern?
4. What services or components need their own directories?
5. What shared code or libraries are expected?

## Structure Patterns

### API / Backend Service
```
src/
├── config/           # Configuration and environment
├── modules/          # Feature modules
│   └── [module]/
│       ├── controller/
│       ├── service/
│       ├── repository/
│       ├── dto/
│       └── tests/
├── shared/           # Shared utilities and middleware
│   ├── middleware/
│   ├── guards/
│   ├── filters/
│   └── utils/
├── database/
│   ├── migrations/
│   └── seeds/
└── main.ts
```

### Web Application
```
src/
├── components/       # Reusable UI components
├── pages/           # Page/route components
├── hooks/           # Custom hooks
├── services/        # API clients and business logic
├── store/           # State management
├── types/           # TypeScript types
├── utils/           # Utility functions
└── styles/          # Global styles and themes
```

### Monorepo
```
packages/
├── shared/          # Shared types, utils, config
├── api/             # Backend service
├── web/             # Frontend application
├── mobile/          # Mobile application
└── docs/            # Documentation site
```

## Process

1. Create the directory structure
2. Add placeholder README.md in each major directory explaining its purpose
3. Generate configuration files (tsconfig, eslint, docker, etc.)
4. Set up testing directories mirroring source structure
5. Create environment template (.env.example)

## Output

Display the created directory tree and explain the rationale for each major directory. Suggest next steps: `/setup-repo` for git initialization, `/scaffold` for boilerplate code.
