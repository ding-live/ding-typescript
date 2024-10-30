/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type CreateAuthenticationResponse =
  | components.ErrorResponse
  | components.CreateAuthenticationResponse;

/** @internal */
export const CreateAuthenticationResponse$inboundSchema: z.ZodType<
  CreateAuthenticationResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ErrorResponse$inboundSchema,
  components.CreateAuthenticationResponse$inboundSchema,
]);

/** @internal */
export type CreateAuthenticationResponse$Outbound =
  | components.ErrorResponse$Outbound
  | components.CreateAuthenticationResponse$Outbound;

/** @internal */
export const CreateAuthenticationResponse$outboundSchema: z.ZodType<
  CreateAuthenticationResponse$Outbound,
  z.ZodTypeDef,
  CreateAuthenticationResponse
> = z.union([
  components.ErrorResponse$outboundSchema,
  components.CreateAuthenticationResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAuthenticationResponse$ {
  /** @deprecated use `CreateAuthenticationResponse$inboundSchema` instead. */
  export const inboundSchema = CreateAuthenticationResponse$inboundSchema;
  /** @deprecated use `CreateAuthenticationResponse$outboundSchema` instead. */
  export const outboundSchema = CreateAuthenticationResponse$outboundSchema;
  /** @deprecated use `CreateAuthenticationResponse$Outbound` instead. */
  export type Outbound = CreateAuthenticationResponse$Outbound;
}