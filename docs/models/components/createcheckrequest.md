# CreateCheckRequest

## Example Usage

```typescript
import { CreateCheckRequest } from "@ding-live/ding/models/components";

let value: CreateCheckRequest = {
  authenticationUuid: "8b986a7e-f6c8-49e1-910d-cdfc7c1a2f86",
  checkCode: "123456",
  customerUuid: "c790999f-a56b-40aa-8325-597f132a4732",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `authenticationUuid`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The authentication UUID that was returned when you created the authentication. |                                                                                |
| `checkCode`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | The code that the user entered.                                                | 123456                                                                         |
| `customerUuid`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | Your customer UUID, which can be found in the API settings in the Dashboard.   |                                                                                |