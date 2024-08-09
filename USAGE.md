<!-- Start SDK Example Usage [usage] -->
### Send a code

Send an OTP code to a user's phone number.


```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
    apiKey: "YOUR_API_KEY",
});

async function run() {
    const result = await ding.otp.createAuthentication({
        customerUuid: "c9f826e0-deca-41ec-871f-ecd6e8efeb46",
        phoneNumber: "+1234567890",
    });

    // Handle the result
    console.log(result);
}

run();

```

### Check a code

Check that a code entered by a user is valid.


```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
    apiKey: "YOUR_API_KEY",
});

async function run() {
    const result = await ding.otp.check({
        authenticationUuid: "e0e7b0e9-739d-424b-922f-1c2cb48ab077",
        checkCode: "123456",
        customerUuid: "8f1196d5-806e-4b71-9b24-5f96ec052808",
    });

    // Handle the result
    console.log(result);
}

run();

```

### Perform a retry

Perform a retry if a user has not received the code.


```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
    apiKey: "YOUR_API_KEY",
});

async function run() {
    const result = await ding.otp.retry();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->