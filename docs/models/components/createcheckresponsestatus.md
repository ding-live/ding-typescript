# CreateCheckResponseStatus

The status of the check. Possible values are:
  * `valid` - The code is valid.
  * `invalid` - The code is invalid.
  * `without_attempt` - No attempt was sent yet, so a check cannot be completed.
  * `rate_limited` - The authentication was rate limited and cannot be checked.
  * `already_validated` - The authentication has already been validated.
  * `expired_auth` - The authentication has expired and cannot be checked.


## Example Usage

```typescript
import { CreateCheckResponseStatus } from "@ding-live/ding/models/components";

let value: CreateCheckResponseStatus = "valid";
```

## Values

```typescript
"valid" | "invalid" | "without_attempt" | "rate_limited" | "already_validated" | "expired_auth"
```