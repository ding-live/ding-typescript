/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The type of phone line.
 */
export enum LineType {
    FixedLine = "FixedLine",
    Mobile = "Mobile",
    TollFree = "TollFree",
    PremiumRate = "PremiumRate",
    SharedCost = "SharedCost",
    Voip = "Voip",
    Pager = "Pager",
    VoiceMail = "VoiceMail",
    UniversalAccess = "UniversalAccess",
    Service = "Service",
    Unknown = "Unknown",
}

export class LookupResponse extends SpeakeasyBase {
    /**
     * The carrier of the phone number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "carrier" })
    carrier?: string;

    /**
     * The ISO 3166-1 alpha-2 country code of the phone number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "country_code" })
    countryCode?: string;

    /**
     * The type of phone line.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "line_type" })
    lineType?: LineType;

    /**
     * The mobile country code of the phone number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mcc" })
    mcc?: string;

    /**
     * The mobile network code of the phone number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mnc" })
    mnc?: string;

    /**
     * Whether the phone number has been ported.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "number_ported" })
    numberPorted?: boolean;

    /**
     * An E.164 formatted phone number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber?: string;
}
