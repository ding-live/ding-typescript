# CreateCheckRequest

## Example Usage

```typescript
import { CreateCheckRequest } from "@ding-live/ding/models/components";

let value: CreateCheckRequest = {
  authenticationUuid: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
  checkCode: "123456",
  customerUuid: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `authenticationUuid`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The authentication UUID that was returned when you created the authentication. |                                                                                |
| `checkCode`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | The code that the user entered.                                                | 123456                                                                         |
| `customerUuid`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | Your customer UUID, which can be found in the API settings in the Dashboard.   |                                                                                |