# CreateCheckResponse

## Example Usage

```typescript
import { CreateCheckResponse } from "@ding-live/ding/models/components";

let value: CreateCheckResponse = {
  status: "valid",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `authenticationUuid`                                             | *string*                                                         | :heavy_minus_sign:                                               | The UUID of the corresponding authentication.                    |                                                                  |
| `status`                                                         | [components.CheckStatus](../../models/components/checkstatus.md) | :heavy_minus_sign:                                               | N/A                                                              | valid                                                            |