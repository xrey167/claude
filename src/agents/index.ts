import { BaseConfig, ExecutionResult, Message } from '../types';

/** Configuration specific to an agent. */
export interface AgentConfig extends BaseConfig {
  name: string;
  description?: string;
}

/** An agent that maintains conversational context and produces responses. */
export interface Agent {
  config: AgentConfig;
  run(messages: Message[], config?: Partial<AgentConfig>): Promise<ExecutionResult>;
}

/** Simple base class providing shared agent behavior. */
export abstract class BaseAgent implements Agent {
  constructor(public readonly config: AgentConfig) {}

  abstract run(messages: Message[], config?: Partial<AgentConfig>): Promise<ExecutionResult>;
}
