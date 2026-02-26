import { Workflow, WorkflowContext, WorkflowStep } from '../../src/workflows';
import { ExecutionResult } from '../../src/types';

const greetStep: WorkflowStep = {
  name: 'greet',
  async execute(_ctx: WorkflowContext): Promise<ExecutionResult> {
    return { success: true, output: 'Hello from greet step!' };
  },
};

const failStep: WorkflowStep = {
  name: 'fail',
  async execute(_ctx: WorkflowContext): Promise<ExecutionResult> {
    return { success: false, output: 'Something went wrong.' };
  },
};

describe('Workflow', () => {
  it('runs a single step successfully', async () => {
    const wf = new Workflow('test-workflow').addStep(greetStep);
    const result = await wf.run();
    expect(result.success).toBe(true);
    expect(result.output).toContain('test-workflow');
  });

  it('accumulates step output in metadata', async () => {
    const wf = new Workflow('meta-workflow').addStep(greetStep);
    const result = await wf.run();
    expect(result.metadata?.['greet']).toBe('Hello from greet step!');
  });

  it('stops and reports failure when a step fails', async () => {
    const wf = new Workflow('fail-workflow').addStep(failStep).addStep(greetStep);
    const result = await wf.run();
    expect(result.success).toBe(false);
    expect(result.output).toContain('fail');
  });

  it('supports method chaining when adding steps', () => {
    const wf = new Workflow('chain').addStep(greetStep).addStep(greetStep);
    expect(wf).toBeInstanceOf(Workflow);
  });

  it('passes inputs through context', async () => {
    const captureStep: WorkflowStep = {
      name: 'capture',
      async execute(ctx: WorkflowContext): Promise<ExecutionResult> {
        return { success: true, output: String(ctx.inputs['key'] ?? '') };
      },
    };
    const wf = new Workflow('input-workflow').addStep(captureStep);
    const result = await wf.run({ key: 'value' });
    expect(result.metadata?.['capture']).toBe('value');
  });
});
