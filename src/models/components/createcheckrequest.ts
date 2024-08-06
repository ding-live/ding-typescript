/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class CreateCheckRequest extends SpeakeasyBase {
    /**
     * The authentication UUID that was returned when you created the authentication.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authentication_uuid" })
    authenticationUuid: string;

    /**
     * The code that the user entered.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "check_code" })
    checkCode: string;

    /**
     * Your customer UUID, which can be found in the API settings in the Dashboard.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_uuid" })
    customerUuid: string;
}
