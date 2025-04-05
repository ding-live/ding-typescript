# RetryAuthenticationRequest

## Example Usage

```typescript
import { RetryAuthenticationRequest } from "@ding-live/ding/models/components";

let value: RetryAuthenticationRequest = {
  authenticationUuid: "c39c1153-c373-4dff-9f1f-06e14522c881",
  customerUuid: "eba7454e-f981-424c-be39-80d9e4512417",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `authenticationUuid`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The authentication UUID that was returned when you created the authentication. |
| `customerUuid`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | Your customer UUID, which can be found in the API settings in the dashboard.   |