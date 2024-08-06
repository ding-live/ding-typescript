/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import * as errors from "../../models/errors";
import { AxiosResponse } from "axios";

export class FeedbackResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Bad Request
     */
    @SpeakeasyMetadata()
    errorResponse?: errors.ErrorResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    feedbackResponse?: components.FeedbackResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
