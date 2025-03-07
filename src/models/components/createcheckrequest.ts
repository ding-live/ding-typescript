/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateCheckRequest = {
  /**
   * The authentication UUID that was returned when you created the authentication.
   */
  authenticationUuid: string;
  /**
   * The code that the user entered.
   */
  checkCode: string;
  /**
   * Your customer UUID, which can be found in the API settings in the Dashboard.
   */
  customerUuid: string;
};

/** @internal */
export const CreateCheckRequest$inboundSchema: z.ZodType<
  CreateCheckRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  authentication_uuid: z.string(),
  check_code: z.string(),
  customer_uuid: z.string(),
}).transform((v) => {
  return remap$(v, {
    "authentication_uuid": "authenticationUuid",
    "check_code": "checkCode",
    "customer_uuid": "customerUuid",
  });
});

/** @internal */
export type CreateCheckRequest$Outbound = {
  authentication_uuid: string;
  check_code: string;
  customer_uuid: string;
};

/** @internal */
export const CreateCheckRequest$outboundSchema: z.ZodType<
  CreateCheckRequest$Outbound,
  z.ZodTypeDef,
  CreateCheckRequest
> = z.object({
  authenticationUuid: z.string(),
  checkCode: z.string(),
  customerUuid: z.string(),
}).transform((v) => {
  return remap$(v, {
    authenticationUuid: "authentication_uuid",
    checkCode: "check_code",
    customerUuid: "customer_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCheckRequest$ {
  /** @deprecated use `CreateCheckRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCheckRequest$inboundSchema;
  /** @deprecated use `CreateCheckRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCheckRequest$outboundSchema;
  /** @deprecated use `CreateCheckRequest$Outbound` instead. */
  export type Outbound = CreateCheckRequest$Outbound;
}

export function createCheckRequestToJSON(
  createCheckRequest: CreateCheckRequest,
): string {
  return JSON.stringify(
    CreateCheckRequest$outboundSchema.parse(createCheckRequest),
  );
}

export function createCheckRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateCheckRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCheckRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCheckRequest' from JSON`,
  );
}
