/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The status of the check. Possible values are:
 *
 * @remarks
 *   * `valid` - The code is valid.
 *   * `invalid` - The code is invalid.
 *   * `without_attempt` - No attempt was sent yet, so a check cannot be completed.
 *   * `rate_limited` - The authentication was rate limited and cannot be checked.
 *   * `already_validated` - The authentication has already been validated.
 *   * `expired_auth` - The authentication has expired and cannot be checked.
 */
export const CreateCheckResponseStatus = {
  Valid: "valid",
  Invalid: "invalid",
  WithoutAttempt: "without_attempt",
  RateLimited: "rate_limited",
  AlreadyValidated: "already_validated",
  ExpiredAuth: "expired_auth",
} as const;
/**
 * The status of the check. Possible values are:
 *
 * @remarks
 *   * `valid` - The code is valid.
 *   * `invalid` - The code is invalid.
 *   * `without_attempt` - No attempt was sent yet, so a check cannot be completed.
 *   * `rate_limited` - The authentication was rate limited and cannot be checked.
 *   * `already_validated` - The authentication has already been validated.
 *   * `expired_auth` - The authentication has expired and cannot be checked.
 */
export type CreateCheckResponseStatus = ClosedEnum<
  typeof CreateCheckResponseStatus
>;

export type CreateCheckResponse = {
  /**
   * The UUID of the corresponding authentication.
   */
  authenticationUuid?: string | undefined;
  /**
   * The status of the check. Possible values are:
   *
   * @remarks
   *   * `valid` - The code is valid.
   *   * `invalid` - The code is invalid.
   *   * `without_attempt` - No attempt was sent yet, so a check cannot be completed.
   *   * `rate_limited` - The authentication was rate limited and cannot be checked.
   *   * `already_validated` - The authentication has already been validated.
   *   * `expired_auth` - The authentication has expired and cannot be checked.
   */
  status?: CreateCheckResponseStatus | undefined;
};

/** @internal */
export const CreateCheckResponseStatus$inboundSchema: z.ZodNativeEnum<
  typeof CreateCheckResponseStatus
> = z.nativeEnum(CreateCheckResponseStatus);

/** @internal */
export const CreateCheckResponseStatus$outboundSchema: z.ZodNativeEnum<
  typeof CreateCheckResponseStatus
> = CreateCheckResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCheckResponseStatus$ {
  /** @deprecated use `CreateCheckResponseStatus$inboundSchema` instead. */
  export const inboundSchema = CreateCheckResponseStatus$inboundSchema;
  /** @deprecated use `CreateCheckResponseStatus$outboundSchema` instead. */
  export const outboundSchema = CreateCheckResponseStatus$outboundSchema;
}

/** @internal */
export const CreateCheckResponse$inboundSchema: z.ZodType<
  CreateCheckResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  authentication_uuid: z.string().optional(),
  status: CreateCheckResponseStatus$inboundSchema.optional(),
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
  status: CreateCheckResponseStatus$outboundSchema.optional(),
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
