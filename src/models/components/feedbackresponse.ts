/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type FeedbackResponse = {
  /**
   * The UUID of the feedback.
   */
  uuid?: string | undefined;
};

/** @internal */
export const FeedbackResponse$inboundSchema: z.ZodType<
  FeedbackResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
});

/** @internal */
export type FeedbackResponse$Outbound = {
  uuid?: string | undefined;
};

/** @internal */
export const FeedbackResponse$outboundSchema: z.ZodType<
  FeedbackResponse$Outbound,
  z.ZodTypeDef,
  FeedbackResponse
> = z.object({
  uuid: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeedbackResponse$ {
  /** @deprecated use `FeedbackResponse$inboundSchema` instead. */
  export const inboundSchema = FeedbackResponse$inboundSchema;
  /** @deprecated use `FeedbackResponse$outboundSchema` instead. */
  export const outboundSchema = FeedbackResponse$outboundSchema;
  /** @deprecated use `FeedbackResponse$Outbound` instead. */
  export type Outbound = FeedbackResponse$Outbound;
}
