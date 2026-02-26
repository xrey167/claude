import { Plugin, PluginRegistry } from '../../src/plugins';
import { ExecutionResult } from '../../src/types';

const echoPlugin: Plugin = {
  definition: {
    name: 'echo',
    description: 'Returns the input text unchanged.',
    inputSchema: { type: 'object', properties: { text: { type: 'string' } } },
  },
  async execute(input): Promise<ExecutionResult> {
    return { success: true, output: String(input['text'] ?? '') };
  },
};

describe('PluginRegistry', () => {
  let registry: PluginRegistry;

  beforeEach(() => {
    registry = new PluginRegistry();
  });

  it('registers and retrieves a plugin by name', () => {
    registry.register(echoPlugin);
    expect(registry.get('echo')).toBe(echoPlugin);
  });

  it('returns undefined for an unknown plugin', () => {
    expect(registry.get('nonexistent')).toBeUndefined();
  });

  it('lists all registered plugin names', () => {
    registry.register(echoPlugin);
    expect(registry.list()).toEqual(['echo']);
  });

  it('executes the echo plugin correctly', async () => {
    const result = await echoPlugin.execute({ text: 'hello' });
    expect(result.success).toBe(true);
    expect(result.output).toBe('hello');
  });
});
