# RetryAuthenticationRequest

## Example Usage

```typescript
import { RetryAuthenticationRequest } from "@ding-live/ding/models/components";

let value: RetryAuthenticationRequest = {
  authenticationUuid: "aa6e56ec-b1eb-4f2d-9291-dc961b7bdfd0",
  customerUuid: "b28030c3-5eb0-4299-83e9-89b4632fb734",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `authenticationUuid`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The authentication UUID that was returned when you created the authentication. |
| `customerUuid`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | Your customer UUID, which can be found in the API settings in the dashboard.   |