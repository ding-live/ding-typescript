# CreateCheckRequest

## Example Usage

```typescript
import { CreateCheckRequest } from "@ding-live/ding/models/components";

let value: CreateCheckRequest = {
  authenticationUuid: "310cf078-b4d5-4882-b3bc-a5e991ddb80f",
  checkCode: "123456",
  customerUuid: "f2415726-1082-4c8d-9490-640f6139d8c0",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `authenticationUuid`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The authentication UUID that was returned when you created the authentication. |                                                                                |
| `checkCode`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | The code that the user entered.                                                | 123456                                                                         |
| `customerUuid`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | Your customer UUID, which can be found in the API settings in the Dashboard.   |                                                                                |