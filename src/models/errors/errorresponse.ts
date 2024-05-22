/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../internal/utils";
import { classToPlain, Expose } from "class-transformer";

/**
 * A machine-readable code that describes the error.
 */
export enum Code {
    InvalidPhoneNumber = "invalid_phone_number",
    InternalServerError = "internal_server_error",
    BadRequest = "bad_request",
    AccountInvalid = "account_invalid",
    NegativeBalance = "negative_balance",
    InvalidLine = "invalid_line",
    UnsupportedRegion = "unsupported_region",
    InvalidAuthUuid = "invalid_auth_uuid",
    InvalidAppRealm = "invalid_app_realm",
    UnsupportedAppRealmDeviceType = "unsupported_app_realm_device_type",
    AppRealmRequireDeviceType = "app_realm_require_device_type",
    BlockedNumber = "blocked_number",
    InvalidAppVersion = "invalid_app_version",
    InvalidOsVersion = "invalid_os_version",
    InvalidDeviceModel = "invalid_device_model",
    InvalidDeviceId = "invalid_device_id",
    NoAssociatedAuthFound = "no_associated_auth_found",
    DuplicatedFeedbackStatus = "duplicated_feedback_status",
    InvalidFeedbackStatus = "invalid_feedback_status",
    InvalidTemplateId = "invalid_template_id",
    SuspendedAccount = "suspended_account",
}

/**
 * Bad Request
 */
export class ErrorResponse extends Error {
    /**
     * A machine-readable code that describes the error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: Code;

    /**
     * A link to the documentation that describes the error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "doc_url" })
    docUrl?: string;

    /**
     * A human-readable message that describes the error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    constructor(err?: ErrorResponse) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "ErrorResponse";
        Object.setPrototypeOf(this, ErrorResponse.prototype);
    }
}
