# CreateCheckRequest

## Example Usage

```typescript
import { CreateCheckRequest } from "@ding-live/ding/models/components";

let value: CreateCheckRequest = {
  authenticationUuid: "235d1d1f-7f9b-4041-a415-61b94819e5a2",
  checkCode: "123456",
  customerUuid: "4290d0a4-bf39-4993-9f7d-b4d6e9ebb8fa",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `authenticationUuid`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The authentication UUID that was returned when you created the authentication. |                                                                                |
| `checkCode`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | The code that the user entered.                                                | 123456                                                                         |
| `customerUuid`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | Your customer UUID, which can be found in the API settings in the Dashboard.   |                                                                                |