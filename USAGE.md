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

### Send feedback

Send feedback about the authentication process.


```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
  apiKey: "YOUR_API_KEY",
});

async function run() {
  const result = await ding.otp.feedback({
    customerUuid: "c0c405fa-6bcb-4094-9430-7d6e2428ff23",
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
    "6e93aa15-9177-4d09-8395-b69ce50db1c8",
    "<value>",
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->