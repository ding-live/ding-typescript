# Check

## Example Usage

```typescript
import { Check } from "@ding-live/ding/models/components";

let value: Check = {
  code: "123456",
  status: "valid",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The code that was checked.                                                                                 | 123456                                                                                                     |
| `createdAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The ID of the check.                                                                                       |                                                                                                            |
| `status`                                                                                                   | [components.CheckStatus](../../models/components/checkstatus.md)                                           | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | valid                                                                                                      |
| `type`                                                                                                     | [components.AuthenticationStatusResponseType](../../models/components/authenticationstatusresponsetype.md) | :heavy_minus_sign:                                                                                         | The type of the event.                                                                                     |                                                                                                            |