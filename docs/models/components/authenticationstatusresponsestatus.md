# AuthenticationStatusResponseStatus

The status of the delivery. Possible values are:
  * `unknown` - The status of the delivery is unknown.
  * `submitted` - The message has been submitted to the carrier.
  * `in_transit` - The message is in transit to the recipient.
  * `delivered` - The message has been delivered to the recipient.
  * `undeliverable` - The message could not be delivered to the recipient.


## Example Usage

```typescript
import { AuthenticationStatusResponseStatus } from "@ding-live/ding/models/components";

let value: AuthenticationStatusResponseStatus = "undeliverable";
```

## Values

```typescript
"unknown" | "submitted" | "in_transit" | "delivered" | "undeliverable"
```