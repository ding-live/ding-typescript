/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetAuthenticationStatusRequest = {
  authUuid: string;
};

/** @internal */
export const GetAuthenticationStatusRequest$inboundSchema: z.ZodType<
  GetAuthenticationStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  auth_uuid: z.string(),
}).transform((v) => {
  return remap$(v, {
    "auth_uuid": "authUuid",
  });
});

/** @internal */
export type GetAuthenticationStatusRequest$Outbound = {
  auth_uuid: string;
};

/** @internal */
export const GetAuthenticationStatusRequest$outboundSchema: z.ZodType<
  GetAuthenticationStatusRequest$Outbound,
  z.ZodTypeDef,
  GetAuthenticationStatusRequest
> = z.object({
  authUuid: z.string(),
}).transform((v) => {
  return remap$(v, {
    authUuid: "auth_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAuthenticationStatusRequest$ {
  /** @deprecated use `GetAuthenticationStatusRequest$inboundSchema` instead. */
  export const inboundSchema = GetAuthenticationStatusRequest$inboundSchema;
  /** @deprecated use `GetAuthenticationStatusRequest$outboundSchema` instead. */
  export const outboundSchema = GetAuthenticationStatusRequest$outboundSchema;
  /** @deprecated use `GetAuthenticationStatusRequest$Outbound` instead. */
  export type Outbound = GetAuthenticationStatusRequest$Outbound;
}
