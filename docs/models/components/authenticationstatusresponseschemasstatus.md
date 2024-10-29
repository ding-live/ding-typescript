# AuthenticationStatusResponseSchemasStatus

The status of the attempt. Possible values are:
  * `pending` - The attempt is pending.
  * `delivered` - The attempt was delivered.
  * `failed` - The attempt failed.
  * `rate_limited` - The authentication was rate limited and cannot be retried.
  * `expired` - The authentication has expired and cannot be retried.


## Example Usage

```typescript
import { AuthenticationStatusResponseSchemasStatus } from "@ding-live/ding/models/components";

let value: AuthenticationStatusResponseSchemasStatus = "delivered";
```

## Values

```typescript
"pending" | "delivered" | "failed" | "rate_limited" | "expired"
```