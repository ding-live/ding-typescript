# CreateCheckRequest

## Example Usage

```typescript
import { CreateCheckRequest } from "@ding-live/ding/models/components";

let value: CreateCheckRequest = {
    authenticationUuid: "cb739205-9293-496f-aa75-96eb10faaa23",
    checkCode: "123456",
    customerUuid: "52c59559-07af-4f1a-ba2f-a9467739251a",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `authenticationUuid`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The authentication UUID that was returned when you created the authentication. |                                                                                |
| `checkCode`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | The code that the user entered.                                                | 123456                                                                         |
| `customerUuid`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | Your customer UUID, which can be found in the API settings in the Dashboard.   |                                                                                |