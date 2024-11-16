/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CheckStatus,
  CheckStatus$inboundSchema,
  CheckStatus$outboundSchema,
} from "./checkstatus.js";

export type CreateCheckResponse = {
  /**
   * The UUID of the corresponding authentication.
   */
  authenticationUuid?: string | undefined;
  status?: CheckStatus | undefined;
};

/** @internal */
export const CreateCheckResponse$inboundSchema: z.ZodType<
  CreateCheckResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  authentication_uuid: z.string().optional(),
  status: CheckStatus$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "authentication_uuid": "authenticationUuid",
  });
});

/** @internal */
export type CreateCheckResponse$Outbound = {
  authentication_uuid?: string | undefined;
  status?: string | undefined;
};

/** @internal */
export const CreateCheckResponse$outboundSchema: z.ZodType<
  CreateCheckResponse$Outbound,
  z.ZodTypeDef,
  CreateCheckResponse
> = z.object({
  authenticationUuid: z.string().optional(),
  status: CheckStatus$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    authenticationUuid: "authentication_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCheckResponse$ {
  /** @deprecated use `CreateCheckResponse$inboundSchema` instead. */
  export const inboundSchema = CreateCheckResponse$inboundSchema;
  /** @deprecated use `CreateCheckResponse$outboundSchema` instead. */
  export const outboundSchema = CreateCheckResponse$outboundSchema;
  /** @deprecated use `CreateCheckResponse$Outbound` instead. */
  export type Outbound = CreateCheckResponse$Outbound;
}

export function createCheckResponseToJSON(
  createCheckResponse: CreateCheckResponse,
): string {
  return JSON.stringify(
    CreateCheckResponse$outboundSchema.parse(createCheckResponse),
  );
}

export function createCheckResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateCheckResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCheckResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCheckResponse' from JSON`,
  );
}
