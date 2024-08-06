/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The type of the feedback.
 */
export enum FeedbackRequestStatus {
    Onboarded = "onboarded",
    NotOnboarded = "not_onboarded",
}

export class FeedbackRequest extends SpeakeasyBase {
    /**
     * Your customer UUID, which can be found in the API settings in the dashboard.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_uuid" })
    customerUuid: string;

    /**
     * An E.164 formatted phone number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber: string;

    /**
     * The type of the feedback.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: FeedbackRequestStatus;
}
