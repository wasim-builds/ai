import { AISDKError } from '@ai-sdk/provider';
import type { GenerateImageCall } from '../generate-image/generate-image-result';
import type { ImageModelResponseMetadata } from '../types/image-model-response-metadata';
import type { GenerateImageCall } from '../generate-image/generate-image-result';

const name = 'AI_NoImageGeneratedError';
const marker = `vercel.ai.error.${name}`;
const symbol = Symbol.for(marker);

/**
 * Thrown when no image could be generated. This can have multiple causes:
 *
 * - The model failed to generate a response.
 * - The model generated a response that could not be parsed.
 */
export class NoImageGeneratedError extends AISDKError {
  private readonly [symbol] = true; // used in isInstance

  /**
   * The results of the underlying image model calls.
   */
  readonly calls: Array<GenerateImageCall> | undefined;

  /**
   * The response metadata for each call.
   */
  readonly responses: Array<ImageModelResponseMetadata> | undefined;

  /**
   * The complete per-call diagnostics for each call.
   */
  readonly calls: Array<GenerateImageCall> | undefined;

  constructor({
    message = 'No image generated.',
    cause,
    calls,
    responses,
    calls,
  }: {
    message?: string;
    cause?: Error;
    calls?: Array<GenerateImageCall>;
    responses?: Array<ImageModelResponseMetadata>;
    calls?: Array<GenerateImageCall>;
  }) {
    super({ name, message, cause });

    this.calls = calls;
    this.responses = responses;
    this.calls = calls;
  }

  static isInstance(error: unknown): error is NoImageGeneratedError {
    return AISDKError.hasMarker(error, marker);
  }
}
