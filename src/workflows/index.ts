import { ExecutionResult } from '../types';

/** A single step within a workflow. */
export interface WorkflowStep {
  name: string;
  execute(context: WorkflowContext): Promise<ExecutionResult>;
}

/** Shared mutable context passed between workflow steps. */
export interface WorkflowContext {
  inputs: Record<string, unknown>;
  outputs: Record<string, unknown>;
}

/** A workflow composes multiple steps into a sequential pipeline. */
export class Workflow {
  private readonly steps: WorkflowStep[] = [];

  constructor(public readonly name: string) {}

  /** Append a step to the workflow pipeline. */
  addStep(step: WorkflowStep): this {
    this.steps.push(step);
    return this;
  }

  /**
   * Execute all steps in order, accumulating results in context.
   * Stops and returns on the first failure.
   */
  async run(inputs: Record<string, unknown> = {}): Promise<ExecutionResult> {
    const context: WorkflowContext = { inputs, outputs: {} };

    for (const step of this.steps) {
      const result = await step.execute(context);
      context.outputs[step.name] = result.output;

      if (!result.success) {
        return {
          success: false,
          output: `Workflow "${this.name}" failed at step "${step.name}": ${result.output}`,
        };
      }
    }

    return {
      success: true,
      output: `Workflow "${this.name}" completed successfully.`,
      metadata: context.outputs,
    };
  }
}
