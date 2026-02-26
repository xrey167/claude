# claude

Plugins, Agents, Skills, and Workflows for the Claude AI API.

## Overview

This project provides a structured TypeScript framework for building Claude-powered integrations:

| Module | Description |
|---|---|
| **Plugins** | Discrete capabilities (tools) that Claude can invoke |
| **Agents** | Conversational components that maintain context across turns |
| **Skills** | Single-purpose, reusable units of intelligence |
| **Workflows** | Sequential pipelines that compose multiple steps |

## Requirements

- Node.js ≥ 18
- An [Anthropic API key](https://console.anthropic.com/)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# Edit .env and set ANTHROPIC_API_KEY

# 3. Build
npm run build
```

## Project Structure

```
claude/
├── src/
│   ├── agents/        # Agent base class and types
│   ├── plugins/       # Plugin interface and registry
│   ├── skills/        # Skill interface and types
│   ├── workflows/     # Workflow engine
│   ├── types/         # Shared TypeScript types
│   ├── utils/         # Shared utility helpers
│   └── index.ts       # Public re-exports
├── tests/             # Jest unit tests (mirrors src/)
├── .env.example       # Environment variable template
├── eslint.config.js   # ESLint (flat config)
├── jest.config.js     # Jest configuration
├── tsconfig.json      # TypeScript (build)
└── tsconfig.eslint.json  # TypeScript (lint, includes tests)
```

## Scripts

| Command | Description |
|---|---|
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run dev` | Compile in watch mode |
| `npm test` | Run all Jest tests |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Lint with ESLint |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting without writing |

## License

MIT
