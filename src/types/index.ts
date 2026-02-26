/**
 * Shared types used across the claude project.
 */

/** Supported Claude model identifiers. */
export type ClaudeModel =
  | 'claude-opus-4-5'
  | 'claude-sonnet-4-5'
  | 'claude-3-7-sonnet-20250219'
  | 'claude-3-5-sonnet-20241022'
  | 'claude-3-5-haiku-20241022'
  | 'claude-3-opus-20240229';

/** A single message in a conversation. */
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

/** Common configuration shared by all runnable components. */
export interface BaseConfig {
  model?: ClaudeModel;
  maxTokens?: number;
  systemPrompt?: string;
}

/** Result returned after executing any component. */
export interface ExecutionResult {
  success: boolean;
  output: string;
  metadata?: Record<string, unknown>;
}
