/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../internal/utils";
import { classToPlain, Expose } from "class-transformer";

/**
 * A machine-readable code that describes the error. Possible values are:
 *
 * @remarks
 *   * `invalid_phone_number` - This is not a valid E.164 number.
 *   * `internal_server_error` - An internal server error occurred.
 *   * `bad_request` - The request was malformed.
 *   * `account_invalid` - The provided customer UUID is invalid.
 *   * `negative_balance` - You have a negative balance.
 *   * `invalid_line` - Ding does not support this type of phone number.
 *   * `unsupported_region` - Ding does not support this region yet.
 *   * `invalid_auth_uuid` - The provided authentication UUID is invalid.
 *   * `blocked_number` - The phone number is in the blocklist.
 *   * `invalid_app_version` - The provided application version is invalid.
 *   * `invalid_os_version` - The provided OS version is invalid.
 *   * `invalid_device_model` - The provided device model is invalid.
 *   * `invalid_device_id` - The provided device ID is invalid.
 *   * `no_associated_auth_found` - The associated authentication was not found.
 *   * `duplicated_feedback_status` - Duplicated feedback status has found.
 *   * `invalid_feedback_status` - The provided feedback status is invalid.
 *   * `invalid_template_id` - The provided template ID is invalid.
 *
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
}

/**
 * Bad Request
 */
export class ErrorResponse extends Error {
    /**
     * A machine-readable code that describes the error. Possible values are:
     *
     * @remarks
     *   * `invalid_phone_number` - This is not a valid E.164 number.
     *   * `internal_server_error` - An internal server error occurred.
     *   * `bad_request` - The request was malformed.
     *   * `account_invalid` - The provided customer UUID is invalid.
     *   * `negative_balance` - You have a negative balance.
     *   * `invalid_line` - Ding does not support this type of phone number.
     *   * `unsupported_region` - Ding does not support this region yet.
     *   * `invalid_auth_uuid` - The provided authentication UUID is invalid.
     *   * `blocked_number` - The phone number is in the blocklist.
     *   * `invalid_app_version` - The provided application version is invalid.
     *   * `invalid_os_version` - The provided OS version is invalid.
     *   * `invalid_device_model` - The provided device model is invalid.
     *   * `invalid_device_id` - The provided device ID is invalid.
     *   * `no_associated_auth_found` - The associated authentication was not found.
     *   * `duplicated_feedback_status` - Duplicated feedback status has found.
     *   * `invalid_feedback_status` - The provided feedback status is invalid.
     *   * `invalid_template_id` - The provided template ID is invalid.
     *
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
