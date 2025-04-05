# LookupRequest

## Example Usage

```typescript
import { LookupRequest } from "@ding-live/ding/models/operations";

let value: LookupRequest = {
  customerUuid: "d8173d3e-be8b-4bdd-bb70-5e01f59000b8",
  phoneNumber: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `customerUuid`                                       | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `phoneNumber`                                        | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `type`                                               | [operations.Type](../../models/operations/type.md)[] | :heavy_minus_sign:                                   | N/A                                                  |