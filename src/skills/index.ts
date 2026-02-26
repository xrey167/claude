import { BaseConfig, ExecutionResult } from '../types';

/** Definition of a reusable skill. */
export interface SkillDefinition {
  name: string;
  description: string;
  /** Example inputs to illustrate how the skill is used. */
  examples?: string[];
}

/** A skill encapsulates a single, focused capability. */
export interface Skill {
  definition: SkillDefinition;
  invoke(input: string, config?: BaseConfig): Promise<ExecutionResult>;
}
