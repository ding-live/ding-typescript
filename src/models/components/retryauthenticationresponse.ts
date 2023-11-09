/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The status of the retry. Possible values are:
 *
 * @remarks
 *   * `approved` - The retry was approved and a new code was sent.
 *   * `denied` - The retry was denied.
 *   * `no_attempt` - No attempt was sent yet so we cannot perform a retry.
 *   * `rate_limited` - The authentication was rate limited and cannot be retried.
 *   * `expired_auth` - The authentication has expired and cannot be retried.
 *   * `already_validated` - The authentication has already been validated.
 *
 */
export enum RetryAuthenticationResponseStatus {
    Approved = "approved",
    Denied = "denied",
    NoAttempt = "no_attempt",
    RateLimited = "rate_limited",
    ExpiredAuth = "expired_auth",
    AlreadyValidated = "already_validated",
}

export class RetryAuthenticationResponse extends SpeakeasyBase {
    /**
     * The UUID of the corresponding authentication.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authentication_uuid" })
    authenticationUuid?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * The time at which the next retry will be available.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_retry_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    nextRetryAt?: Date;

    /**
     * The number of retries remaining.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "remaining_retry" })
    remainingRetry?: number;

    /**
     * The status of the retry. Possible values are:
     *
     * @remarks
     *   * `approved` - The retry was approved and a new code was sent.
     *   * `denied` - The retry was denied.
     *   * `no_attempt` - No attempt was sent yet so we cannot perform a retry.
     *   * `rate_limited` - The authentication was rate limited and cannot be retried.
     *   * `expired_auth` - The authentication has expired and cannot be retried.
     *   * `already_validated` - The authentication has already been validated.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: RetryAuthenticationResponseStatus;
}
