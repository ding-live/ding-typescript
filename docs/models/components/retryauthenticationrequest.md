# RetryAuthenticationRequest

## Example Usage

```typescript
import { RetryAuthenticationRequest } from "@ding-live/ding/models/components";

let value: RetryAuthenticationRequest = {
  authenticationUuid: "4b6201a7-8ef3-4a40-9c56-9dad4c2fa3fb",
  customerUuid: "38036574-9d18-42b6-8922-75fcbe189f43",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `authenticationUuid`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The authentication UUID that was returned when you created the authentication. |
| `customerUuid`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | Your customer UUID, which can be found in the API settings in the dashboard.   |