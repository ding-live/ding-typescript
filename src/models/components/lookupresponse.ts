/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of phone line.
 *
 * @remarks
 *   * `CallingCards` - Numbers that are associated with providers of pre-paid domestic and international calling cards.
 *   * `FixedLine` - Landline phone numbers.
 *   * `InternetServiceProvider` - Numbers reserved for ISPs.
 *   * `LocalRate` - Numbers that can be assigned non-geographically.
 *   * `Mobile` - Mobile phone numbers.
 *   * `Other` - Other types of services.
 *   * `Pager` - Number ranges specifically allocated to paging devices.
 *   * `PayPhone` - Allocated numbers for payphone kiosks in some countries.
 *   * `PremiumRate` - Landline numbers where the calling party pays more than standard.
 *   * `Satellite` - Satellite phone numbers.
 *   * `Service` - Automated applications.
 *   * `SharedCost` - Specific landline ranges where the cost of making the call is shared between the calling and called party.
 *   * `ShortCodesCommercial` - Short codes are memorable, easy-to-use numbers, like the UK's NHS 111, often sold to businesses. Not available in all countries.
 *   * `TollFree` - Number where the called party pays for the cost of the call not the calling party.
 *   * `UniversalAccess` - Number ranges reserved for Universal Access initiatives.
 *   * `Unknown` - Unknown phone number type.
 *   * `VPN` - Numbers are used exclusively within a private telecommunications network, connecting the operator's terminals internally and not accessible via the public telephone network.
 *   * `VoiceMail` - A specific category of Interactive Voice Response (IVR) services.
 *   * `Voip` - Specific ranges for providers of VoIP services to allow incoming calls from the regular telephony network.
 */
export const LineType = {
  CallingCards: "CallingCards",
  FixedLine: "FixedLine",
  InternetServiceProvider: "InternetServiceProvider",
  LocalRate: "LocalRate",
  Mobile: "Mobile",
  Other: "Other",
  Pager: "Pager",
  PayPhone: "PayPhone",
  PremiumRate: "PremiumRate",
  Satellite: "Satellite",
  Service: "Service",
  SharedCost: "SharedCost",
  ShortCodesCommercial: "ShortCodesCommercial",
  TollFree: "TollFree",
  UniversalAccess: "UniversalAccess",
  Unknown: "Unknown",
  Vpn: "VPN",
  VoiceMail: "VoiceMail",
  Voip: "Voip",
} as const;
/**
 * The type of phone line.
 *
 * @remarks
 *   * `CallingCards` - Numbers that are associated with providers of pre-paid domestic and international calling cards.
 *   * `FixedLine` - Landline phone numbers.
 *   * `InternetServiceProvider` - Numbers reserved for ISPs.
 *   * `LocalRate` - Numbers that can be assigned non-geographically.
 *   * `Mobile` - Mobile phone numbers.
 *   * `Other` - Other types of services.
 *   * `Pager` - Number ranges specifically allocated to paging devices.
 *   * `PayPhone` - Allocated numbers for payphone kiosks in some countries.
 *   * `PremiumRate` - Landline numbers where the calling party pays more than standard.
 *   * `Satellite` - Satellite phone numbers.
 *   * `Service` - Automated applications.
 *   * `SharedCost` - Specific landline ranges where the cost of making the call is shared between the calling and called party.
 *   * `ShortCodesCommercial` - Short codes are memorable, easy-to-use numbers, like the UK's NHS 111, often sold to businesses. Not available in all countries.
 *   * `TollFree` - Number where the called party pays for the cost of the call not the calling party.
 *   * `UniversalAccess` - Number ranges reserved for Universal Access initiatives.
 *   * `Unknown` - Unknown phone number type.
 *   * `VPN` - Numbers are used exclusively within a private telecommunications network, connecting the operator's terminals internally and not accessible via the public telephone network.
 *   * `VoiceMail` - A specific category of Interactive Voice Response (IVR) services.
 *   * `Voip` - Specific ranges for providers of VoIP services to allow incoming calls from the regular telephony network.
 */
export type LineType = ClosedEnum<typeof LineType>;

export type LookupResponse = {
  /**
   * The CNAM (Caller ID Name) associated with the phone number. Contact us if you need to use this functionality. Once enabled, put `cnam` option to `type` query parameter.
   */
  callerName?: string | undefined;
  /**
   * The carrier of the phone number.
   */
  carrier?: string | undefined;
  /**
   * The ISO 3166-1 alpha-2 country code of the phone number.
   */
  countryCode?: string | undefined;
  /**
   * The type of phone line.
   *
   * @remarks
   *   * `CallingCards` - Numbers that are associated with providers of pre-paid domestic and international calling cards.
   *   * `FixedLine` - Landline phone numbers.
   *   * `InternetServiceProvider` - Numbers reserved for ISPs.
   *   * `LocalRate` - Numbers that can be assigned non-geographically.
   *   * `Mobile` - Mobile phone numbers.
   *   * `Other` - Other types of services.
   *   * `Pager` - Number ranges specifically allocated to paging devices.
   *   * `PayPhone` - Allocated numbers for payphone kiosks in some countries.
   *   * `PremiumRate` - Landline numbers where the calling party pays more than standard.
   *   * `Satellite` - Satellite phone numbers.
   *   * `Service` - Automated applications.
   *   * `SharedCost` - Specific landline ranges where the cost of making the call is shared between the calling and called party.
   *   * `ShortCodesCommercial` - Short codes are memorable, easy-to-use numbers, like the UK's NHS 111, often sold to businesses. Not available in all countries.
   *   * `TollFree` - Number where the called party pays for the cost of the call not the calling party.
   *   * `UniversalAccess` - Number ranges reserved for Universal Access initiatives.
   *   * `Unknown` - Unknown phone number type.
   *   * `VPN` - Numbers are used exclusively within a private telecommunications network, connecting the operator's terminals internally and not accessible via the public telephone network.
   *   * `VoiceMail` - A specific category of Interactive Voice Response (IVR) services.
   *   * `Voip` - Specific ranges for providers of VoIP services to allow incoming calls from the regular telephony network.
   */
  lineType?: LineType | undefined;
  /**
   * The mobile country code of the phone number.
   */
  mcc?: string | undefined;
  /**
   * The mobile network code of the phone number.
   */
  mnc?: string | undefined;
  /**
   * Whether the phone number has been ported.
   */
  numberPorted?: boolean | undefined;
  /**
   * An E.164 formatted phone number.
   */
  phoneNumber?: string | undefined;
  /**
   * Whether the phone number is in our database of disposable, temporary phone numbers
   */
  temporaryPhoneNumber?: boolean | undefined;
};

/** @internal */
export const LineType$inboundSchema: z.ZodNativeEnum<typeof LineType> = z
  .nativeEnum(LineType);

/** @internal */
export const LineType$outboundSchema: z.ZodNativeEnum<typeof LineType> =
  LineType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LineType$ {
  /** @deprecated use `LineType$inboundSchema` instead. */
  export const inboundSchema = LineType$inboundSchema;
  /** @deprecated use `LineType$outboundSchema` instead. */
  export const outboundSchema = LineType$outboundSchema;
}

/** @internal */
export const LookupResponse$inboundSchema: z.ZodType<
  LookupResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  caller_name: z.string().optional(),
  carrier: z.string().optional(),
  country_code: z.string().optional(),
  line_type: LineType$inboundSchema.optional(),
  mcc: z.string().optional(),
  mnc: z.string().optional(),
  number_ported: z.boolean().optional(),
  phone_number: z.string().optional(),
  temporary_phone_number: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "caller_name": "callerName",
    "country_code": "countryCode",
    "line_type": "lineType",
    "number_ported": "numberPorted",
    "phone_number": "phoneNumber",
    "temporary_phone_number": "temporaryPhoneNumber",
  });
});

/** @internal */
export type LookupResponse$Outbound = {
  caller_name?: string | undefined;
  carrier?: string | undefined;
  country_code?: string | undefined;
  line_type?: string | undefined;
  mcc?: string | undefined;
  mnc?: string | undefined;
  number_ported?: boolean | undefined;
  phone_number?: string | undefined;
  temporary_phone_number?: boolean | undefined;
};

/** @internal */
export const LookupResponse$outboundSchema: z.ZodType<
  LookupResponse$Outbound,
  z.ZodTypeDef,
  LookupResponse
> = z.object({
  callerName: z.string().optional(),
  carrier: z.string().optional(),
  countryCode: z.string().optional(),
  lineType: LineType$outboundSchema.optional(),
  mcc: z.string().optional(),
  mnc: z.string().optional(),
  numberPorted: z.boolean().optional(),
  phoneNumber: z.string().optional(),
  temporaryPhoneNumber: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    callerName: "caller_name",
    countryCode: "country_code",
    lineType: "line_type",
    numberPorted: "number_ported",
    phoneNumber: "phone_number",
    temporaryPhoneNumber: "temporary_phone_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LookupResponse$ {
  /** @deprecated use `LookupResponse$inboundSchema` instead. */
  export const inboundSchema = LookupResponse$inboundSchema;
  /** @deprecated use `LookupResponse$outboundSchema` instead. */
  export const outboundSchema = LookupResponse$outboundSchema;
  /** @deprecated use `LookupResponse$Outbound` instead. */
  export type Outbound = LookupResponse$Outbound;
}

export function lookupResponseToJSON(lookupResponse: LookupResponse): string {
  return JSON.stringify(LookupResponse$outboundSchema.parse(lookupResponse));
}

export function lookupResponseFromJSON(
  jsonString: string,
): SafeParseResult<LookupResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LookupResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LookupResponse' from JSON`,
  );
}
