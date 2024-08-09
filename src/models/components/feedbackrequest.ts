/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The type of the feedback.
 */
export const FeedbackRequestStatus = {
    Onboarded: "onboarded",
    NotOnboarded: "not_onboarded",
} as const;
/**
 * The type of the feedback.
 */
export type FeedbackRequestStatus = ClosedEnum<typeof FeedbackRequestStatus>;

export type FeedbackRequest = {
    /**
     * Your customer UUID, which can be found in the API settings in the dashboard.
     */
    customerUuid: string;
    /**
     * An E.164 formatted phone number.
     */
    phoneNumber: string;
    /**
     * The type of the feedback.
     */
    status: FeedbackRequestStatus;
};

/** @internal */
export const FeedbackRequestStatus$inboundSchema: z.ZodNativeEnum<typeof FeedbackRequestStatus> =
    z.nativeEnum(FeedbackRequestStatus);

/** @internal */
export const FeedbackRequestStatus$outboundSchema: z.ZodNativeEnum<typeof FeedbackRequestStatus> =
    FeedbackRequestStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeedbackRequestStatus$ {
    /** @deprecated use `FeedbackRequestStatus$inboundSchema` instead. */
    export const inboundSchema = FeedbackRequestStatus$inboundSchema;
    /** @deprecated use `FeedbackRequestStatus$outboundSchema` instead. */
    export const outboundSchema = FeedbackRequestStatus$outboundSchema;
}

/** @internal */
export const FeedbackRequest$inboundSchema: z.ZodType<FeedbackRequest, z.ZodTypeDef, unknown> = z
    .object({
        customer_uuid: z.string(),
        phone_number: z.string(),
        status: FeedbackRequestStatus$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            customer_uuid: "customerUuid",
            phone_number: "phoneNumber",
        });
    });

/** @internal */
export type FeedbackRequest$Outbound = {
    customer_uuid: string;
    phone_number: string;
    status: string;
};

/** @internal */
export const FeedbackRequest$outboundSchema: z.ZodType<
    FeedbackRequest$Outbound,
    z.ZodTypeDef,
    FeedbackRequest
> = z
    .object({
        customerUuid: z.string(),
        phoneNumber: z.string(),
        status: FeedbackRequestStatus$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            customerUuid: "customer_uuid",
            phoneNumber: "phone_number",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeedbackRequest$ {
    /** @deprecated use `FeedbackRequest$inboundSchema` instead. */
    export const inboundSchema = FeedbackRequest$inboundSchema;
    /** @deprecated use `FeedbackRequest$outboundSchema` instead. */
    export const outboundSchema = FeedbackRequest$outboundSchema;
    /** @deprecated use `FeedbackRequest$Outbound` instead. */
    export type Outbound = FeedbackRequest$Outbound;
}
