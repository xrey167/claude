/**
 * Utility helpers shared across the project.
 */

/**
 * Builds a default system prompt string, optionally prepending a custom prefix.
 */
export function buildSystemPrompt(prefix?: string): string {
  const base = 'You are a helpful AI assistant.';
  return prefix ? `${prefix}\n\n${base}` : base;
}

/**
 * Validates that a required environment variable is set and returns its value.
 * Throws if the variable is missing.
 */
export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}
