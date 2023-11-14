/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

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
 *
 */
export enum CreateCheckResponseStatus {
    Valid = "valid",
    Invalid = "invalid",
    WithoutAttempt = "without_attempt",
    RateLimited = "rate_limited",
    AlreadyValidated = "already_validated",
    ExpiredAuth = "expired_auth",
}

export class CreateCheckResponse extends SpeakeasyBase {
    /**
     * The UUID of the corresponding authentication.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authentication_uuid" })
    authenticationUuid?: string;

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
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: CreateCheckResponseStatus;
}
