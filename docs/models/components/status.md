# Status

The status of the authentication. Possible values are:
  * `pending` - The OTP code is being sent.
  * `rate_limited` - This user is rate-limited and cannot receive another code.
  * `spam_detected` - This attempt is flagged as spam. Go to the dashboard for more details.


## Example Usage

```typescript
import { Status } from "@ding-live/ding/models/components";

let value: Status = "rate_limited";
```

## Values

```typescript
"pending" | "rate_limited" | "spam_detected"
```