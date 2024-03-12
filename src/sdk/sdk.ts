/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as components from "../models/components";
import { Lookup } from "./lookup";
import { Otp } from "./otp";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * The production Ding API server
     */
    "https://api.ding.live/v1",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    apiKey?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: components.Security | (() => Promise<components.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "0.4.4";
    genVersion = "2.280.6";
    userAgent = "speakeasy-sdk/typescript 0.4.4 2.280.6 1.0.0 @ding-live/ding";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Ding: The OTP API allows you to send authentication codes to your users using their phone numbers.
 */
export class Ding {
    /**
     * Send OTP codes to your users using their phone numbers.
     */
    public otp: Otp;
    /**
     * Retrieve up-to-date metadata about a specific phone number
     */
    public lookup: Lookup;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;

        if (!serverURL) {
            const serverIdx = props?.serverIdx ?? 0;
            if (serverIdx < 0 || serverIdx >= ServerList.length) {
                throw new Error(`Invalid server index ${serverIdx}`);
            }
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new components.Security({ apiKey: props?.apiKey }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.otp = new Otp(this.sdkConfiguration);
        this.lookup = new Lookup(this.sdkConfiguration);
    }
}
