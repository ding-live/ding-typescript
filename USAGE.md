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
    customerUuid: "cf2edc1c-7fc6-48fb-86da-b7508c6b7b71",
    locale: "fr-FR",
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
    authenticationUuid: "eebe792b-2fcc-44a0-87f1-650e79259e02",
    checkCode: "123456",
    customerUuid: "64f66a7c-4b2c-4131-a8ff-d5b954cca05f",
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

### Send feedback

Send feedback about the authentication process.


```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
  apiKey: "YOUR_API_KEY",
});

async function run() {
  const result = await ding.otp.feedback({
    customerUuid: "cc0f6c04-40de-448f-8301-3cb0e6565dff",
    phoneNumber: "+1234567890",
    status: "onboarded",
  });

  // Handle the result
  console.log(result);
}

run();

```

### Get authentication status

Get the status of an authentication.

```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
  apiKey: "YOUR_API_KEY",
});

async function run() {
  const result = await ding.otp.getAuthenticationStatus(
    "d8446450-f2fa-4dd9-806b-df5b8c661f23",
  );

  // Handle the result
  console.log(result);
}

run();

```

### Look up for phone number

Perform a phone number lookup.

```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
  apiKey: "YOUR_API_KEY",
});

async function run() {
  const result = await ding.lookup.lookup(
    "69a197d9-356c-45d1-a807-41874e16b555",
    "<value>",
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->