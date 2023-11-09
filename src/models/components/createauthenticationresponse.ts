/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The status of the authentication.
 */
export enum Status {
    Pending = "pending",
    RateLimited = "rate_limited",
    SpamDetected = "spam_detected",
}

/**
 * A successful response to an authentication creation request.
 */
export class CreateAuthenticationResponse extends SpeakeasyBase {
    /**
     * A unique identifier for the authentication that you can use on the /check and /retry endpoints.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authentication_uuid" })
    authenticationUuid?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * The time at which the authentication expires and can no longer be checked or retried.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expires_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    expiresAt?: Date;

    /**
     * The status of the authentication.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: Status;
}
