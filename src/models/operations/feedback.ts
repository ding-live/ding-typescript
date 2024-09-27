/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type FeedbackResponse =
  | components.FeedbackResponse
  | components.ErrorResponse;

/** @internal */
export const FeedbackResponse$inboundSchema: z.ZodType<
  FeedbackResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.FeedbackResponse$inboundSchema,
  components.ErrorResponse$inboundSchema,
]);

/** @internal */
export type FeedbackResponse$Outbound =
  | components.FeedbackResponse$Outbound
  | components.ErrorResponse$Outbound;

/** @internal */
export const FeedbackResponse$outboundSchema: z.ZodType<
  FeedbackResponse$Outbound,
  z.ZodTypeDef,
  FeedbackResponse
> = z.union([
  components.FeedbackResponse$outboundSchema,
  components.ErrorResponse$outboundSchema,
]);

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
