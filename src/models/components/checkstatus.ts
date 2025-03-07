/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The status of the check. Possible values are:
 *
 * @remarks
 *   * `unknown` - The status is unknown.
 *   * `valid` - The code is valid.
 *   * `invalid` - The code is invalid.
 *   * `without_attempt` - No attempt was sent yet, so a check cannot be completed.
 *   * `rate_limited` - The authentication was rate limited and cannot be checked.
 *   * `already_validated` - The authentication has already been validated.
 *   * `expired_auth` - The authentication has expired and cannot be checked.
 */
export const CheckStatus = {
  Unknown: "unknown",
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
 *   * `unknown` - The status is unknown.
 *   * `valid` - The code is valid.
 *   * `invalid` - The code is invalid.
 *   * `without_attempt` - No attempt was sent yet, so a check cannot be completed.
 *   * `rate_limited` - The authentication was rate limited and cannot be checked.
 *   * `already_validated` - The authentication has already been validated.
 *   * `expired_auth` - The authentication has expired and cannot be checked.
 */
export type CheckStatus = ClosedEnum<typeof CheckStatus>;

/** @internal */
export const CheckStatus$inboundSchema: z.ZodNativeEnum<typeof CheckStatus> = z
  .nativeEnum(CheckStatus);

/** @internal */
export const CheckStatus$outboundSchema: z.ZodNativeEnum<typeof CheckStatus> =
  CheckStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckStatus$ {
  /** @deprecated use `CheckStatus$inboundSchema` instead. */
  export const inboundSchema = CheckStatus$inboundSchema;
  /** @deprecated use `CheckStatus$outboundSchema` instead. */
  export const outboundSchema = CheckStatus$outboundSchema;
}
