# CheckStatus

The status of the check. Possible values are:
  * `unknown` - The status is unknown.
  * `valid` - The code is valid.
  * `invalid` - The code is invalid.
  * `without_attempt` - No attempt was sent yet, so a check cannot be completed.
  * `rate_limited` - The authentication was rate limited and cannot be checked.
  * `already_validated` - The authentication has already been validated.
  * `expired_auth` - The authentication has expired and cannot be checked.


## Example Usage

```typescript
import { CheckStatus } from "@ding-live/ding/models/components";

let value: CheckStatus = "valid";
```

## Values

```typescript
"unknown" | "valid" | "invalid" | "without_attempt" | "rate_limited" | "already_validated" | "expired_auth"
```