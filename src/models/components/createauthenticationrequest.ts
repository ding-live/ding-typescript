/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The type of device the user is using.
 */
export enum DeviceType {
    Ios = "IOS",
    Android = "ANDROID",
    Web = "WEB",
}

export class CreateAuthenticationRequest extends SpeakeasyBase {
    /**
     * The Android SMS Retriever API hash code that identifies your app. This allows you to automatically retrieve and fill the OTP code on Android devices.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "app_realm" })
    appRealm?: string;

    /**
     * The version of your application.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "app_version" })
    appVersion?: string;

    /**
     * A webhook URL to which delivery statuses will be sent.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "callback_url" })
    callbackUrl?: string;

    /**
     * A unique, user-defined identifier that will be included in webhook events
     */
    @SpeakeasyMetadata()
    @Expose({ name: "correlation_id" })
    correlationId?: string;

    /**
     * Your customer UUID, which can be found in the API settings in the dashboard.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_uuid" })
    customerUuid: string;

    /**
     * Unique identifier for the user's device. For Android, this corresponds to the `ANDROID_ID` and for iOS, this corresponds to the `identifierForVendor`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "device_id" })
    deviceId?: string;

    /**
     * The model of the user's device.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "device_model" })
    deviceModel?: string;

    /**
     * The type of device the user is using.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "device_type" })
    deviceType?: DeviceType;

    /**
     * The IP address of the user's device.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ip" })
    ip?: string;

    /**
     * Whether the user is a returning user on your app.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_returning_user" })
    isReturningUser?: boolean;

    /**
     * The version of the user's device operating system.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "os_version" })
    osVersion?: string;

    /**
     * An E.164 formatted phone number to send the OTP to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber: string;

    /**
     * The template id associated with the message content variant to be sent.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "template_id" })
    templateId?: string;
}
