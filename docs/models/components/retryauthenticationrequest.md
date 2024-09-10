# RetryAuthenticationRequest

## Example Usage

```typescript
import { RetryAuthenticationRequest } from "@ding-live/ding/models/components";

let value: RetryAuthenticationRequest = {
  authenticationUuid: "2c3f5ad0-19da-41ff-a78f-097b0074f154",
  customerUuid: "71b5e6e1-3b99-4d48-8e1e-91e450ad2abd",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `authenticationUuid`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The authentication UUID that was returned when you created the authentication. |
| `customerUuid`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | Your customer UUID, which can be found in the API settings in the dashboard.   |