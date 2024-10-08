/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type LookupRequest = {
  customerUuid: string;
  phoneNumber: string;
};

/** @internal */
export const LookupRequest$inboundSchema: z.ZodType<
  LookupRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "customer-uuid": z.string(),
  phone_number: z.string(),
}).transform((v) => {
  return remap$(v, {
    "customer-uuid": "customerUuid",
    "phone_number": "phoneNumber",
  });
});

/** @internal */
export type LookupRequest$Outbound = {
  "customer-uuid": string;
  phone_number: string;
};

/** @internal */
export const LookupRequest$outboundSchema: z.ZodType<
  LookupRequest$Outbound,
  z.ZodTypeDef,
  LookupRequest
> = z.object({
  customerUuid: z.string(),
  phoneNumber: z.string(),
}).transform((v) => {
  return remap$(v, {
    customerUuid: "customer-uuid",
    phoneNumber: "phone_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LookupRequest$ {
  /** @deprecated use `LookupRequest$inboundSchema` instead. */
  export const inboundSchema = LookupRequest$inboundSchema;
  /** @deprecated use `LookupRequest$outboundSchema` instead. */
  export const outboundSchema = LookupRequest$outboundSchema;
  /** @deprecated use `LookupRequest$Outbound` instead. */
  export type Outbound = LookupRequest$Outbound;
}
