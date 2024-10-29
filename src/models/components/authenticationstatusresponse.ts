/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  CheckStatus,
  CheckStatus$inboundSchema,
  CheckStatus$outboundSchema,
} from "./checkstatus.js";

export const BalanceUpdateType = {
  Unknown: "unknown",
  Authentication: "authentication",
  Attempt: "attempt",
  AttemptPending: "attempt_pending",
  AttemptSuccess: "attempt_success",
  AuthenticationPending: "authentication_pending",
  AuthenticationSuccess: "authentication_success",
} as const;
export type BalanceUpdateType = ClosedEnum<typeof BalanceUpdateType>;

/**
 * The type of the event.
 */
export const AuthenticationStatusResponseSchemasEventsType = {
  Attempt: "attempt",
  Check: "check",
  DeliveryStatus: "delivery_status",
  BalanceUpdate: "balance_update",
} as const;
/**
 * The type of the event.
 */
export type AuthenticationStatusResponseSchemasEventsType = ClosedEnum<
  typeof AuthenticationStatusResponseSchemasEventsType
>;

export type BalanceUpdate = {
  /**
   * The amount of the balance update.
   */
  amount?: number | undefined;
  balanceUpdateType?: BalanceUpdateType | undefined;
  createdAt?: Date | undefined;
  /**
   * The type of the event.
   */
  type?: AuthenticationStatusResponseSchemasEventsType | undefined;
};

/**
 * The status of the delivery. Possible values are:
 *
 * @remarks
 *   * `unknown` - The status of the delivery is unknown.
 *   * `submitted` - The message has been submitted to the carrier.
 *   * `in_transit` - The message is in transit to the recipient.
 *   * `delivered` - The message has been delivered to the recipient.
 *   * `undeliverable` - The message could not be delivered to the recipient.
 */
export const AuthenticationStatusResponseStatus = {
  Unknown: "unknown",
  Submitted: "submitted",
  InTransit: "in_transit",
  Delivered: "delivered",
  Undeliverable: "undeliverable",
} as const;
/**
 * The status of the delivery. Possible values are:
 *
 * @remarks
 *   * `unknown` - The status of the delivery is unknown.
 *   * `submitted` - The message has been submitted to the carrier.
 *   * `in_transit` - The message is in transit to the recipient.
 *   * `delivered` - The message has been delivered to the recipient.
 *   * `undeliverable` - The message could not be delivered to the recipient.
 */
export type AuthenticationStatusResponseStatus = ClosedEnum<
  typeof AuthenticationStatusResponseStatus
>;

/**
 * The type of the event.
 */
export const AuthenticationStatusResponseSchemasType = {
  Attempt: "attempt",
  Check: "check",
  DeliveryStatus: "delivery_status",
  BalanceUpdate: "balance_update",
} as const;
/**
 * The type of the event.
 */
export type AuthenticationStatusResponseSchemasType = ClosedEnum<
  typeof AuthenticationStatusResponseSchemasType
>;

export type DeliveryStatus = {
  /**
   * The ID of the attempt.
   */
  attemptId?: string | undefined;
  /**
   * The attempt number.
   */
  attemptNumber?: number | undefined;
  createdAt?: Date | undefined;
  /**
   * The status of the delivery. Possible values are:
   *
   * @remarks
   *   * `unknown` - The status of the delivery is unknown.
   *   * `submitted` - The message has been submitted to the carrier.
   *   * `in_transit` - The message is in transit to the recipient.
   *   * `delivered` - The message has been delivered to the recipient.
   *   * `undeliverable` - The message could not be delivered to the recipient.
   */
  status?: AuthenticationStatusResponseStatus | undefined;
  /**
   * The type of the event.
   */
  type?: AuthenticationStatusResponseSchemasType | undefined;
};

/**
 * The type of the event.
 */
export const AuthenticationStatusResponseType = {
  Attempt: "attempt",
  Check: "check",
  DeliveryStatus: "delivery_status",
  BalanceUpdate: "balance_update",
} as const;
/**
 * The type of the event.
 */
export type AuthenticationStatusResponseType = ClosedEnum<
  typeof AuthenticationStatusResponseType
>;

export type Check = {
  /**
   * The code that was checked.
   */
  code?: string | undefined;
  createdAt?: Date | undefined;
  /**
   * The ID of the check.
   */
  id?: string | undefined;
  status?: CheckStatus | undefined;
  /**
   * The type of the event.
   */
  type?: AuthenticationStatusResponseType | undefined;
};

/**
 * The capability of the attempt.
 */
export const Capability = {
  Rcs: "rcs",
  Text: "text",
  Whatsapp: "whatsapp",
  Viber: "viber",
} as const;
/**
 * The capability of the attempt.
 */
export type Capability = ClosedEnum<typeof Capability>;

/**
 * The status of the attempt. Possible values are:
 *
 * @remarks
 *   * `pending` - The attempt is pending.
 *   * `delivered` - The attempt was delivered.
 *   * `failed` - The attempt failed.
 *   * `rate_limited` - The authentication was rate limited and cannot be retried.
 *   * `expired` - The authentication has expired and cannot be retried.
 */
export const AuthenticationStatusResponseSchemasStatus = {
  Pending: "pending",
  Delivered: "delivered",
  Failed: "failed",
  RateLimited: "rate_limited",
  Expired: "expired",
} as const;
/**
 * The status of the attempt. Possible values are:
 *
 * @remarks
 *   * `pending` - The attempt is pending.
 *   * `delivered` - The attempt was delivered.
 *   * `failed` - The attempt failed.
 *   * `rate_limited` - The authentication was rate limited and cannot be retried.
 *   * `expired` - The authentication has expired and cannot be retried.
 */
export type AuthenticationStatusResponseSchemasStatus = ClosedEnum<
  typeof AuthenticationStatusResponseSchemasStatus
>;

/**
 * The type of the event.
 */
export const Type = {
  Attempt: "attempt",
  Check: "check",
  DeliveryStatus: "delivery_status",
  BalanceUpdate: "balance_update",
} as const;
/**
 * The type of the event.
 */
export type Type = ClosedEnum<typeof Type>;

export type Attempt = {
  /**
   * The attempt number.
   */
  attemptNumber?: number | undefined;
  /**
   * The capability of the attempt.
   */
  capability?: Capability | undefined;
  /**
   * The content of the attempt.
   */
  content?: string | undefined;
  createdAt?: Date | undefined;
  /**
   * The ID of the attempt.
   */
  id?: string | undefined;
  /**
   * The sender ID of the attempt.
   */
  senderId?: string | undefined;
  /**
   * The status of the attempt. Possible values are:
   *
   * @remarks
   *   * `pending` - The attempt is pending.
   *   * `delivered` - The attempt was delivered.
   *   * `failed` - The attempt failed.
   *   * `rate_limited` - The authentication was rate limited and cannot be retried.
   *   * `expired` - The authentication has expired and cannot be retried.
   */
  status?: AuthenticationStatusResponseSchemasStatus | undefined;
  /**
   * The type of the event.
   */
  type?: Type | undefined;
};

export type Events = BalanceUpdate | Check | DeliveryStatus | Attempt;

/**
 * The type of device the user is using.
 */
export const AuthenticationStatusResponseDeviceType = {
  Ios: "IOS",
  Android: "ANDROID",
  Web: "WEB",
} as const;
/**
 * The type of device the user is using.
 */
export type AuthenticationStatusResponseDeviceType = ClosedEnum<
  typeof AuthenticationStatusResponseDeviceType
>;

/**
 * [Signals](/guides/prevent-fraud#signals) are data points used to distinguish between fraudulent and legitimate users.
 */
export type Signals = {
  /**
   * The Android SMS Retriever API hash code that identifies your app. This allows you to automatically retrieve and fill the OTP code on Android devices.
   */
  appRealm?: string | undefined;
  /**
   * The version of your application.
   */
  appVersion?: string | undefined;
  /**
   * Unique identifier for the user's device. For Android, this corresponds to the `ANDROID_ID` and for iOS, this corresponds to the `identifierForVendor`.
   */
  deviceId?: string | undefined;
  /**
   * The model of the user's device.
   */
  deviceModel?: string | undefined;
  /**
   * The type of device the user is using.
   */
  deviceType?: AuthenticationStatusResponseDeviceType | undefined;
  /**
   * The IP address of the user's device.
   */
  ip?: string | undefined;
  /**
   * This signal should do more than just confirm if a user is returning to your app; it should provide a higher level of trust, indicating that the user is genuine. For more details, refer to [Signals](/guides/prevent-fraud#signals).
   */
  isReturningUser?: boolean | undefined;
  /**
   * The version of the user's device operating system.
   */
  osVersion?: string | undefined;
};

export type AuthenticationStatusResponse = {
  /**
   * A unique, user-defined identifier that will be included in webhook events.
   */
  correlationId?: string | undefined;
  createdAt?: Date | undefined;
  /**
   * Represents a collection of events that occur during the authentication process. Each event captures specific actions and outcomes related to the authentication attempts, checks, delivery statuses, and balance updates. The array can contain different types of events, each with its own structure and properties.
   */
  events?: Array<BalanceUpdate | Check | DeliveryStatus | Attempt> | undefined;
  /**
   * An E.164 formatted phone number.
   */
  phoneNumber?: string | undefined;
  /**
   * [Signals](/guides/prevent-fraud#signals) are data points used to distinguish between fraudulent and legitimate users.
   */
  signals?: Signals | undefined;
  /**
   * The template id associated with the message content variant to be sent.
   */
  templateId?: string | undefined;
  /**
   * The UUID of the corresponding authentication.
   */
  uuid?: string | undefined;
};

/** @internal */
export const BalanceUpdateType$inboundSchema: z.ZodNativeEnum<
  typeof BalanceUpdateType
> = z.nativeEnum(BalanceUpdateType);

/** @internal */
export const BalanceUpdateType$outboundSchema: z.ZodNativeEnum<
  typeof BalanceUpdateType
> = BalanceUpdateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalanceUpdateType$ {
  /** @deprecated use `BalanceUpdateType$inboundSchema` instead. */
  export const inboundSchema = BalanceUpdateType$inboundSchema;
  /** @deprecated use `BalanceUpdateType$outboundSchema` instead. */
  export const outboundSchema = BalanceUpdateType$outboundSchema;
}

/** @internal */
export const AuthenticationStatusResponseSchemasEventsType$inboundSchema:
  z.ZodNativeEnum<typeof AuthenticationStatusResponseSchemasEventsType> = z
    .nativeEnum(AuthenticationStatusResponseSchemasEventsType);

/** @internal */
export const AuthenticationStatusResponseSchemasEventsType$outboundSchema:
  z.ZodNativeEnum<typeof AuthenticationStatusResponseSchemasEventsType> =
    AuthenticationStatusResponseSchemasEventsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticationStatusResponseSchemasEventsType$ {
  /** @deprecated use `AuthenticationStatusResponseSchemasEventsType$inboundSchema` instead. */
  export const inboundSchema =
    AuthenticationStatusResponseSchemasEventsType$inboundSchema;
  /** @deprecated use `AuthenticationStatusResponseSchemasEventsType$outboundSchema` instead. */
  export const outboundSchema =
    AuthenticationStatusResponseSchemasEventsType$outboundSchema;
}

/** @internal */
export const BalanceUpdate$inboundSchema: z.ZodType<
  BalanceUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().optional(),
  balance_update_type: BalanceUpdateType$inboundSchema.optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  type: AuthenticationStatusResponseSchemasEventsType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "balance_update_type": "balanceUpdateType",
    "created_at": "createdAt",
  });
});

/** @internal */
export type BalanceUpdate$Outbound = {
  amount?: number | undefined;
  balance_update_type?: string | undefined;
  created_at?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const BalanceUpdate$outboundSchema: z.ZodType<
  BalanceUpdate$Outbound,
  z.ZodTypeDef,
  BalanceUpdate
> = z.object({
  amount: z.number().optional(),
  balanceUpdateType: BalanceUpdateType$outboundSchema.optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  type: AuthenticationStatusResponseSchemasEventsType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    balanceUpdateType: "balance_update_type",
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalanceUpdate$ {
  /** @deprecated use `BalanceUpdate$inboundSchema` instead. */
  export const inboundSchema = BalanceUpdate$inboundSchema;
  /** @deprecated use `BalanceUpdate$outboundSchema` instead. */
  export const outboundSchema = BalanceUpdate$outboundSchema;
  /** @deprecated use `BalanceUpdate$Outbound` instead. */
  export type Outbound = BalanceUpdate$Outbound;
}

/** @internal */
export const AuthenticationStatusResponseStatus$inboundSchema: z.ZodNativeEnum<
  typeof AuthenticationStatusResponseStatus
> = z.nativeEnum(AuthenticationStatusResponseStatus);

/** @internal */
export const AuthenticationStatusResponseStatus$outboundSchema: z.ZodNativeEnum<
  typeof AuthenticationStatusResponseStatus
> = AuthenticationStatusResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticationStatusResponseStatus$ {
  /** @deprecated use `AuthenticationStatusResponseStatus$inboundSchema` instead. */
  export const inboundSchema = AuthenticationStatusResponseStatus$inboundSchema;
  /** @deprecated use `AuthenticationStatusResponseStatus$outboundSchema` instead. */
  export const outboundSchema =
    AuthenticationStatusResponseStatus$outboundSchema;
}

/** @internal */
export const AuthenticationStatusResponseSchemasType$inboundSchema:
  z.ZodNativeEnum<typeof AuthenticationStatusResponseSchemasType> = z
    .nativeEnum(AuthenticationStatusResponseSchemasType);

/** @internal */
export const AuthenticationStatusResponseSchemasType$outboundSchema:
  z.ZodNativeEnum<typeof AuthenticationStatusResponseSchemasType> =
    AuthenticationStatusResponseSchemasType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticationStatusResponseSchemasType$ {
  /** @deprecated use `AuthenticationStatusResponseSchemasType$inboundSchema` instead. */
  export const inboundSchema =
    AuthenticationStatusResponseSchemasType$inboundSchema;
  /** @deprecated use `AuthenticationStatusResponseSchemasType$outboundSchema` instead. */
  export const outboundSchema =
    AuthenticationStatusResponseSchemasType$outboundSchema;
}

/** @internal */
export const DeliveryStatus$inboundSchema: z.ZodType<
  DeliveryStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  attempt_id: z.string().optional(),
  attempt_number: z.number().int().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  status: AuthenticationStatusResponseStatus$inboundSchema.optional(),
  type: AuthenticationStatusResponseSchemasType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "attempt_id": "attemptId",
    "attempt_number": "attemptNumber",
    "created_at": "createdAt",
  });
});

/** @internal */
export type DeliveryStatus$Outbound = {
  attempt_id?: string | undefined;
  attempt_number?: number | undefined;
  created_at?: string | undefined;
  status?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const DeliveryStatus$outboundSchema: z.ZodType<
  DeliveryStatus$Outbound,
  z.ZodTypeDef,
  DeliveryStatus
> = z.object({
  attemptId: z.string().optional(),
  attemptNumber: z.number().int().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  status: AuthenticationStatusResponseStatus$outboundSchema.optional(),
  type: AuthenticationStatusResponseSchemasType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    attemptId: "attempt_id",
    attemptNumber: "attempt_number",
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeliveryStatus$ {
  /** @deprecated use `DeliveryStatus$inboundSchema` instead. */
  export const inboundSchema = DeliveryStatus$inboundSchema;
  /** @deprecated use `DeliveryStatus$outboundSchema` instead. */
  export const outboundSchema = DeliveryStatus$outboundSchema;
  /** @deprecated use `DeliveryStatus$Outbound` instead. */
  export type Outbound = DeliveryStatus$Outbound;
}

/** @internal */
export const AuthenticationStatusResponseType$inboundSchema: z.ZodNativeEnum<
  typeof AuthenticationStatusResponseType
> = z.nativeEnum(AuthenticationStatusResponseType);

/** @internal */
export const AuthenticationStatusResponseType$outboundSchema: z.ZodNativeEnum<
  typeof AuthenticationStatusResponseType
> = AuthenticationStatusResponseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticationStatusResponseType$ {
  /** @deprecated use `AuthenticationStatusResponseType$inboundSchema` instead. */
  export const inboundSchema = AuthenticationStatusResponseType$inboundSchema;
  /** @deprecated use `AuthenticationStatusResponseType$outboundSchema` instead. */
  export const outboundSchema = AuthenticationStatusResponseType$outboundSchema;
}

/** @internal */
export const Check$inboundSchema: z.ZodType<Check, z.ZodTypeDef, unknown> = z
  .object({
    code: z.string().optional(),
    created_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    id: z.string().optional(),
    status: CheckStatus$inboundSchema.optional(),
    type: AuthenticationStatusResponseType$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "created_at": "createdAt",
    });
  });

/** @internal */
export type Check$Outbound = {
  code?: string | undefined;
  created_at?: string | undefined;
  id?: string | undefined;
  status?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const Check$outboundSchema: z.ZodType<
  Check$Outbound,
  z.ZodTypeDef,
  Check
> = z.object({
  code: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  id: z.string().optional(),
  status: CheckStatus$outboundSchema.optional(),
  type: AuthenticationStatusResponseType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Check$ {
  /** @deprecated use `Check$inboundSchema` instead. */
  export const inboundSchema = Check$inboundSchema;
  /** @deprecated use `Check$outboundSchema` instead. */
  export const outboundSchema = Check$outboundSchema;
  /** @deprecated use `Check$Outbound` instead. */
  export type Outbound = Check$Outbound;
}

/** @internal */
export const Capability$inboundSchema: z.ZodNativeEnum<typeof Capability> = z
  .nativeEnum(Capability);

/** @internal */
export const Capability$outboundSchema: z.ZodNativeEnum<typeof Capability> =
  Capability$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Capability$ {
  /** @deprecated use `Capability$inboundSchema` instead. */
  export const inboundSchema = Capability$inboundSchema;
  /** @deprecated use `Capability$outboundSchema` instead. */
  export const outboundSchema = Capability$outboundSchema;
}

/** @internal */
export const AuthenticationStatusResponseSchemasStatus$inboundSchema:
  z.ZodNativeEnum<typeof AuthenticationStatusResponseSchemasStatus> = z
    .nativeEnum(AuthenticationStatusResponseSchemasStatus);

/** @internal */
export const AuthenticationStatusResponseSchemasStatus$outboundSchema:
  z.ZodNativeEnum<typeof AuthenticationStatusResponseSchemasStatus> =
    AuthenticationStatusResponseSchemasStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticationStatusResponseSchemasStatus$ {
  /** @deprecated use `AuthenticationStatusResponseSchemasStatus$inboundSchema` instead. */
  export const inboundSchema =
    AuthenticationStatusResponseSchemasStatus$inboundSchema;
  /** @deprecated use `AuthenticationStatusResponseSchemasStatus$outboundSchema` instead. */
  export const outboundSchema =
    AuthenticationStatusResponseSchemasStatus$outboundSchema;
}

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const Attempt$inboundSchema: z.ZodType<Attempt, z.ZodTypeDef, unknown> =
  z.object({
    attempt_number: z.number().int().optional(),
    capability: Capability$inboundSchema.optional(),
    content: z.string().optional(),
    created_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    id: z.string().optional(),
    sender_id: z.string().optional(),
    status: AuthenticationStatusResponseSchemasStatus$inboundSchema.optional(),
    type: Type$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "attempt_number": "attemptNumber",
      "created_at": "createdAt",
      "sender_id": "senderId",
    });
  });

/** @internal */
export type Attempt$Outbound = {
  attempt_number?: number | undefined;
  capability?: string | undefined;
  content?: string | undefined;
  created_at?: string | undefined;
  id?: string | undefined;
  sender_id?: string | undefined;
  status?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const Attempt$outboundSchema: z.ZodType<
  Attempt$Outbound,
  z.ZodTypeDef,
  Attempt
> = z.object({
  attemptNumber: z.number().int().optional(),
  capability: Capability$outboundSchema.optional(),
  content: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  id: z.string().optional(),
  senderId: z.string().optional(),
  status: AuthenticationStatusResponseSchemasStatus$outboundSchema.optional(),
  type: Type$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    attemptNumber: "attempt_number",
    createdAt: "created_at",
    senderId: "sender_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Attempt$ {
  /** @deprecated use `Attempt$inboundSchema` instead. */
  export const inboundSchema = Attempt$inboundSchema;
  /** @deprecated use `Attempt$outboundSchema` instead. */
  export const outboundSchema = Attempt$outboundSchema;
  /** @deprecated use `Attempt$Outbound` instead. */
  export type Outbound = Attempt$Outbound;
}

/** @internal */
export const Events$inboundSchema: z.ZodType<Events, z.ZodTypeDef, unknown> = z
  .union([
    z.lazy(() => BalanceUpdate$inboundSchema),
    z.lazy(() => Check$inboundSchema),
    z.lazy(() => DeliveryStatus$inboundSchema),
    z.lazy(() => Attempt$inboundSchema),
  ]);

/** @internal */
export type Events$Outbound =
  | BalanceUpdate$Outbound
  | Check$Outbound
  | DeliveryStatus$Outbound
  | Attempt$Outbound;

/** @internal */
export const Events$outboundSchema: z.ZodType<
  Events$Outbound,
  z.ZodTypeDef,
  Events
> = z.union([
  z.lazy(() => BalanceUpdate$outboundSchema),
  z.lazy(() => Check$outboundSchema),
  z.lazy(() => DeliveryStatus$outboundSchema),
  z.lazy(() => Attempt$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Events$ {
  /** @deprecated use `Events$inboundSchema` instead. */
  export const inboundSchema = Events$inboundSchema;
  /** @deprecated use `Events$outboundSchema` instead. */
  export const outboundSchema = Events$outboundSchema;
  /** @deprecated use `Events$Outbound` instead. */
  export type Outbound = Events$Outbound;
}

/** @internal */
export const AuthenticationStatusResponseDeviceType$inboundSchema:
  z.ZodNativeEnum<typeof AuthenticationStatusResponseDeviceType> = z.nativeEnum(
    AuthenticationStatusResponseDeviceType,
  );

/** @internal */
export const AuthenticationStatusResponseDeviceType$outboundSchema:
  z.ZodNativeEnum<typeof AuthenticationStatusResponseDeviceType> =
    AuthenticationStatusResponseDeviceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticationStatusResponseDeviceType$ {
  /** @deprecated use `AuthenticationStatusResponseDeviceType$inboundSchema` instead. */
  export const inboundSchema =
    AuthenticationStatusResponseDeviceType$inboundSchema;
  /** @deprecated use `AuthenticationStatusResponseDeviceType$outboundSchema` instead. */
  export const outboundSchema =
    AuthenticationStatusResponseDeviceType$outboundSchema;
}

/** @internal */
export const Signals$inboundSchema: z.ZodType<Signals, z.ZodTypeDef, unknown> =
  z.object({
    app_realm: z.string().optional(),
    app_version: z.string().optional(),
    device_id: z.string().optional(),
    device_model: z.string().optional(),
    device_type: AuthenticationStatusResponseDeviceType$inboundSchema
      .optional(),
    ip: z.string().optional(),
    is_returning_user: z.boolean().optional(),
    os_version: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "app_realm": "appRealm",
      "app_version": "appVersion",
      "device_id": "deviceId",
      "device_model": "deviceModel",
      "device_type": "deviceType",
      "is_returning_user": "isReturningUser",
      "os_version": "osVersion",
    });
  });

/** @internal */
export type Signals$Outbound = {
  app_realm?: string | undefined;
  app_version?: string | undefined;
  device_id?: string | undefined;
  device_model?: string | undefined;
  device_type?: string | undefined;
  ip?: string | undefined;
  is_returning_user?: boolean | undefined;
  os_version?: string | undefined;
};

/** @internal */
export const Signals$outboundSchema: z.ZodType<
  Signals$Outbound,
  z.ZodTypeDef,
  Signals
> = z.object({
  appRealm: z.string().optional(),
  appVersion: z.string().optional(),
  deviceId: z.string().optional(),
  deviceModel: z.string().optional(),
  deviceType: AuthenticationStatusResponseDeviceType$outboundSchema.optional(),
  ip: z.string().optional(),
  isReturningUser: z.boolean().optional(),
  osVersion: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    appRealm: "app_realm",
    appVersion: "app_version",
    deviceId: "device_id",
    deviceModel: "device_model",
    deviceType: "device_type",
    isReturningUser: "is_returning_user",
    osVersion: "os_version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Signals$ {
  /** @deprecated use `Signals$inboundSchema` instead. */
  export const inboundSchema = Signals$inboundSchema;
  /** @deprecated use `Signals$outboundSchema` instead. */
  export const outboundSchema = Signals$outboundSchema;
  /** @deprecated use `Signals$Outbound` instead. */
  export type Outbound = Signals$Outbound;
}

/** @internal */
export const AuthenticationStatusResponse$inboundSchema: z.ZodType<
  AuthenticationStatusResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  correlation_id: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  events: z.array(
    z.union([
      z.lazy(() => BalanceUpdate$inboundSchema),
      z.lazy(() => Check$inboundSchema),
      z.lazy(() => DeliveryStatus$inboundSchema),
      z.lazy(() => Attempt$inboundSchema),
    ]),
  ).optional(),
  phone_number: z.string().optional(),
  signals: z.lazy(() => Signals$inboundSchema).optional(),
  template_id: z.string().optional(),
  uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "correlation_id": "correlationId",
    "created_at": "createdAt",
    "phone_number": "phoneNumber",
    "template_id": "templateId",
  });
});

/** @internal */
export type AuthenticationStatusResponse$Outbound = {
  correlation_id?: string | undefined;
  created_at?: string | undefined;
  events?:
    | Array<
      | BalanceUpdate$Outbound
      | Check$Outbound
      | DeliveryStatus$Outbound
      | Attempt$Outbound
    >
    | undefined;
  phone_number?: string | undefined;
  signals?: Signals$Outbound | undefined;
  template_id?: string | undefined;
  uuid?: string | undefined;
};

/** @internal */
export const AuthenticationStatusResponse$outboundSchema: z.ZodType<
  AuthenticationStatusResponse$Outbound,
  z.ZodTypeDef,
  AuthenticationStatusResponse
> = z.object({
  correlationId: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  events: z.array(
    z.union([
      z.lazy(() => BalanceUpdate$outboundSchema),
      z.lazy(() => Check$outboundSchema),
      z.lazy(() => DeliveryStatus$outboundSchema),
      z.lazy(() => Attempt$outboundSchema),
    ]),
  ).optional(),
  phoneNumber: z.string().optional(),
  signals: z.lazy(() => Signals$outboundSchema).optional(),
  templateId: z.string().optional(),
  uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    correlationId: "correlation_id",
    createdAt: "created_at",
    phoneNumber: "phone_number",
    templateId: "template_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticationStatusResponse$ {
  /** @deprecated use `AuthenticationStatusResponse$inboundSchema` instead. */
  export const inboundSchema = AuthenticationStatusResponse$inboundSchema;
  /** @deprecated use `AuthenticationStatusResponse$outboundSchema` instead. */
  export const outboundSchema = AuthenticationStatusResponse$outboundSchema;
  /** @deprecated use `AuthenticationStatusResponse$Outbound` instead. */
  export type Outbound = AuthenticationStatusResponse$Outbound;
}
