/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

/**
 * A machine-readable code that describes the error.
 */
export const Code = {
  InvalidPhoneNumber: "invalid_phone_number",
  InternalServerError: "internal_server_error",
  BadRequest: "bad_request",
  AccountInvalid: "account_invalid",
  NegativeBalance: "negative_balance",
  InvalidLine: "invalid_line",
  UnsupportedRegion: "unsupported_region",
  InvalidAuthUuid: "invalid_auth_uuid",
  InvalidAppRealm: "invalid_app_realm",
  UnsupportedAppRealmDeviceType: "unsupported_app_realm_device_type",
  AppRealmRequireDeviceType: "app_realm_require_device_type",
  BlockedNumber: "blocked_number",
  InvalidAppVersion: "invalid_app_version",
  InvalidOsVersion: "invalid_os_version",
  InvalidDeviceModel: "invalid_device_model",
  InvalidDeviceId: "invalid_device_id",
  NoAssociatedAuthFound: "no_associated_auth_found",
  DuplicatedFeedbackStatus: "duplicated_feedback_status",
  InvalidFeedbackStatus: "invalid_feedback_status",
  InvalidTemplateId: "invalid_template_id",
  SuspendedAccount: "suspended_account",
} as const;
/**
 * A machine-readable code that describes the error.
 */
export type Code = ClosedEnum<typeof Code>;

export type ErrorResponseData = {
  /**
   * A machine-readable code that describes the error.
   */
  code?: Code | undefined;
  /**
   * A link to the documentation that describes the error.
   */
  docUrl?: string | undefined;
  /**
   * A human-readable message that describes the error.
   */
  message?: string | undefined;
};

export class ErrorResponse extends Error {
  /**
   * A machine-readable code that describes the error.
   */
  code?: Code | undefined;
  /**
   * A link to the documentation that describes the error.
   */
  docUrl?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: ErrorResponseData;

  constructor(err: ErrorResponseData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.code != null) this.code = err.code;
    if (err.docUrl != null) this.docUrl = err.docUrl;

    this.name = "ErrorResponse";
  }
}

export type ErrorResponse1Data = {
  /**
   * A machine-readable code that describes the error.
   */
  code?: Code | undefined;
  /**
   * A link to the documentation that describes the error.
   */
  docUrl?: string | undefined;
  /**
   * A human-readable message that describes the error.
   */
  message?: string | undefined;
};

export class ErrorResponse1 extends Error {
  /**
   * A machine-readable code that describes the error.
   */
  code?: Code | undefined;
  /**
   * A link to the documentation that describes the error.
   */
  docUrl?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: ErrorResponse1Data;

  constructor(err: ErrorResponse1Data) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.code != null) this.code = err.code;
    if (err.docUrl != null) this.docUrl = err.docUrl;

    this.name = "ErrorResponse1";
  }
}

/** @internal */
export const Code$inboundSchema: z.ZodNativeEnum<typeof Code> = z.nativeEnum(
  Code,
);

/** @internal */
export const Code$outboundSchema: z.ZodNativeEnum<typeof Code> =
  Code$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Code$ {
  /** @deprecated use `Code$inboundSchema` instead. */
  export const inboundSchema = Code$inboundSchema;
  /** @deprecated use `Code$outboundSchema` instead. */
  export const outboundSchema = Code$outboundSchema;
}

/** @internal */
export const ErrorResponse$inboundSchema: z.ZodType<
  ErrorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: Code$inboundSchema.optional(),
  doc_url: z.string().optional(),
  message: z.string().optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "doc_url": "docUrl",
    });

    return new ErrorResponse(remapped);
  });

/** @internal */
export type ErrorResponse$Outbound = {
  code?: string | undefined;
  doc_url?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export const ErrorResponse$outboundSchema: z.ZodType<
  ErrorResponse$Outbound,
  z.ZodTypeDef,
  ErrorResponse
> = z.instanceof(ErrorResponse)
  .transform(v => v.data$)
  .pipe(
    z.object({
      code: Code$outboundSchema.optional(),
      docUrl: z.string().optional(),
      message: z.string().optional(),
    }).transform((v) => {
      return remap$(v, {
        docUrl: "doc_url",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorResponse$ {
  /** @deprecated use `ErrorResponse$inboundSchema` instead. */
  export const inboundSchema = ErrorResponse$inboundSchema;
  /** @deprecated use `ErrorResponse$outboundSchema` instead. */
  export const outboundSchema = ErrorResponse$outboundSchema;
  /** @deprecated use `ErrorResponse$Outbound` instead. */
  export type Outbound = ErrorResponse$Outbound;
}

/** @internal */
export const ErrorResponse1$inboundSchema: z.ZodType<
  ErrorResponse1,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: Code$inboundSchema.optional(),
  doc_url: z.string().optional(),
  message: z.string().optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "doc_url": "docUrl",
    });

    return new ErrorResponse1(remapped);
  });

/** @internal */
export type ErrorResponse1$Outbound = {
  code?: string | undefined;
  doc_url?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export const ErrorResponse1$outboundSchema: z.ZodType<
  ErrorResponse1$Outbound,
  z.ZodTypeDef,
  ErrorResponse1
> = z.instanceof(ErrorResponse1)
  .transform(v => v.data$)
  .pipe(
    z.object({
      code: Code$outboundSchema.optional(),
      docUrl: z.string().optional(),
      message: z.string().optional(),
    }).transform((v) => {
      return remap$(v, {
        docUrl: "doc_url",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorResponse1$ {
  /** @deprecated use `ErrorResponse1$inboundSchema` instead. */
  export const inboundSchema = ErrorResponse1$inboundSchema;
  /** @deprecated use `ErrorResponse1$outboundSchema` instead. */
  export const outboundSchema = ErrorResponse1$outboundSchema;
  /** @deprecated use `ErrorResponse1$Outbound` instead. */
  export type Outbound = ErrorResponse1$Outbound;
}
