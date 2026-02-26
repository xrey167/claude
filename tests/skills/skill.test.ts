import { Skill, SkillDefinition } from '../../src/skills';
import { ExecutionResult } from '../../src/types';

const uppercaseSkill: Skill = {
  definition: {
    name: 'uppercase',
    description: 'Converts input text to uppercase.',
    examples: ['hello → HELLO'],
  } satisfies SkillDefinition,
  async invoke(input: string): Promise<ExecutionResult> {
    return { success: true, output: input.toUpperCase() };
  },
};

describe('Skill', () => {
  it('has a valid definition', () => {
    expect(uppercaseSkill.definition.name).toBe('uppercase');
    expect(uppercaseSkill.definition.examples).toHaveLength(1);
  });

  it('converts text to uppercase', async () => {
    const result = await uppercaseSkill.invoke('hello world');
    expect(result.success).toBe(true);
    expect(result.output).toBe('HELLO WORLD');
  });
});
