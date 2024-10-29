# ErrorResponse

## Example Usage

```typescript
import { ErrorResponse } from "@ding-live/ding/models/components";

let value: ErrorResponse = {
  code: "invalid_phone_number",
  docUrl: "https://docs.prelude.so/api-reference/errors#invalid_phone_number",
  message: "+0 is not a valid phone number",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `code`                                                            | [components.Code](../../models/components/code.md)                | :heavy_minus_sign:                                                | A machine-readable code that describes the error.                 | invalid_phone_number                                              |
| `docUrl`                                                          | *string*                                                          | :heavy_minus_sign:                                                | A link to the documentation that describes the error.             | https://docs.prelude.so/api-reference/errors#invalid_phone_number |
| `message`                                                         | *string*                                                          | :heavy_minus_sign:                                                | A human-readable message that describes the error.                | +0 is not a valid phone number                                    |