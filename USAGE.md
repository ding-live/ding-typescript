<!-- Start SDK Example Usage [usage] -->
### Send a code

Send an OTP code to a user's phone number.


```typescript
import { Ding } from "@ding-live/ding";
import { DeviceType } from "@ding-live/ding/dist/models/components";

async function run() {
    const sdk = new Ding({
        apiKey: "YOUR_API_KEY",
    });

    const res = await sdk.otp.createAuthentication({
        customerUuid: "c9f826e0-deca-41ec-871f-ecd6e8efeb46",
        phoneNumber: "+1234567890",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```

### Check a code

Check that a code entered by a user is valid.


```typescript
import { Ding } from "@ding-live/ding";

async function run() {
    const sdk = new Ding({
        apiKey: "YOUR_API_KEY",
    });

    const res = await sdk.otp.check({
        authenticationUuid: "e0e7b0e9-739d-424b-922f-1c2cb48ab077",
        checkCode: "123456",
        customerUuid: "8f1196d5-806e-4b71-9b24-5f96ec052808",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```

### Perform a retry

Perform a retry if a user has not received the code.


```typescript
import { Ding } from "@ding-live/ding";

async function run() {
    const sdk = new Ding({
        apiKey: "YOUR_API_KEY",
    });

    const res = await sdk.otp.retry({
        authenticationUuid: "a74ee547-564d-487a-91df-37fb25413a91",
        customerUuid: "3c8b3a46-881e-4cdd-93a6-f7f238bf020a",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->