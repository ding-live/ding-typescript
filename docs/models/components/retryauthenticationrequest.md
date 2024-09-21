# RetryAuthenticationRequest

## Example Usage

```typescript
import { RetryAuthenticationRequest } from "@ding-live/ding/models/components";

let value: RetryAuthenticationRequest = {
  authenticationUuid: "04a49624-999a-4a6e-b56e-cb1ebf2d291d",
  customerUuid: "961b7bdf-d05b-4280-a30c-35eb02993e98",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `authenticationUuid`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The authentication UUID that was returned when you created the authentication. |
| `customerUuid`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | Your customer UUID, which can be found in the API settings in the dashboard.   |