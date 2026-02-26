import { BaseConfig, ExecutionResult } from '../types';

/** Definition of a single plugin capability. */
export interface PluginDefinition {
  name: string;
  description: string;
  /** JSON-schema describing the plugin's input parameters. */
  inputSchema: Record<string, unknown>;
}

/** A plugin that can be registered and executed. */
export interface Plugin {
  definition: PluginDefinition;
  execute(input: Record<string, unknown>, config?: BaseConfig): Promise<ExecutionResult>;
}

/** Registry that manages available plugins. */
export class PluginRegistry {
  private readonly plugins = new Map<string, Plugin>();

  /** Register a plugin under its definition name. */
  register(plugin: Plugin): void {
    this.plugins.set(plugin.definition.name, plugin);
  }

  /** Retrieve a plugin by name, or undefined if not found. */
  get(name: string): Plugin | undefined {
    return this.plugins.get(name);
  }

  /** Return all registered plugin names. */
  list(): string[] {
    return Array.from(this.plugins.keys());
  }
}
