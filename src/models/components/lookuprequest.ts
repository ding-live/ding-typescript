/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class LookupRequest extends SpeakeasyBase {
    /**
     * An E.164 formatted phone number to lookup.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber?: string;
}
