import { BaseAgent, AgentConfig } from '../../src/agents';
import { ExecutionResult, Message } from '../../src/types';

class EchoAgent extends BaseAgent {
  async run(messages: Message[]): Promise<ExecutionResult> {
    const last = messages[messages.length - 1];
    return { success: true, output: last?.content ?? '' };
  }
}

describe('BaseAgent', () => {
  const config: AgentConfig = { name: 'echo-agent', description: 'Echoes the last message.' };
  let agent: EchoAgent;

  beforeEach(() => {
    agent = new EchoAgent(config);
  });

  it('exposes its configuration', () => {
    expect(agent.config.name).toBe('echo-agent');
  });

  it('returns the last user message as output', async () => {
    const messages: Message[] = [{ role: 'user', content: 'Hello!' }];
    const result = await agent.run(messages);
    expect(result.success).toBe(true);
    expect(result.output).toBe('Hello!');
  });

  it('returns empty string when no messages are provided', async () => {
    const result = await agent.run([]);
    expect(result.success).toBe(true);
    expect(result.output).toBe('');
  });
});
