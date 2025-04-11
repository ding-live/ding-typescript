# Otp
(*otp*)

## Overview

Send OTP codes to your users using their phone numbers.

### Available Operations

* [check](#check) - Check a code
* [createAuthentication](#createauthentication) - Send a code
* [feedback](#feedback) - Send feedback
* [getAuthenticationStatus](#getauthenticationstatus) - Get authentication status
* [retry](#retry) - Perform a retry

## check

Check that a code entered by a user is valid.

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { DingCore } from "@ding-live/ding/core.js";
import { otpCheck } from "@ding-live/ding/funcs/otpCheck.js";

// Use `DingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ding = new DingCore({
  apiKey: "YOUR_API_KEY",
});

async function run() {
  const res = await otpCheck(ding, {
    authenticationUuid: "eebe792b-2fcc-44a0-87f1-650e79259e02",
    checkCode: "123456",
    customerUuid: "64f66a7c-4b2c-4131-a8ff-d5b954cca05f",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateCheckRequest](../../models/components/createcheckrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateCheckResponse](../../models/components/createcheckresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4XX, 5XX             | \*/\*                |

## createAuthentication

Send an OTP code to a user's phone number.

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { DingCore } from "@ding-live/ding/core.js";
import { otpCreateAuthentication } from "@ding-live/ding/funcs/otpCreateAuthentication.js";

// Use `DingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ding = new DingCore({
  apiKey: "YOUR_API_KEY",
});

async function run() {
  const res = await otpCreateAuthentication(ding, {
    customerUuid: "cf2edc1c-7fc6-48fb-86da-b7508c6b7b71",
    locale: "fr-FR",
    phoneNumber: "+1234567890",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateAuthenticationRequest](../../models/components/createauthenticationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateAuthenticationResponse](../../models/components/createauthenticationresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4XX, 5XX             | \*/\*                |

## feedback

Send feedback about the authentication process.

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { DingCore } from "@ding-live/ding/core.js";
import { otpFeedback } from "@ding-live/ding/funcs/otpFeedback.js";

// Use `DingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ding = new DingCore({
  apiKey: "YOUR_API_KEY",
});

async function run() {
  const res = await otpFeedback(ding, {
    customerUuid: "cc0f6c04-40de-448f-8301-3cb0e6565dff",
    phoneNumber: "+1234567890",
    status: "onboarded",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.FeedbackRequest](../../models/components/feedbackrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FeedbackResponse](../../models/components/feedbackresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4XX, 5XX             | \*/\*                |

## getAuthenticationStatus

Get the status of an authentication.

### Example Usage

```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
  apiKey: "YOUR_API_KEY",
});

async function run() {
  const result = await ding.otp.getAuthenticationStatus("d8446450-f2fa-4dd9-806b-df5b8c661f23");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DingCore } from "@ding-live/ding/core.js";
import { otpGetAuthenticationStatus } from "@ding-live/ding/funcs/otpGetAuthenticationStatus.js";

// Use `DingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ding = new DingCore({
  apiKey: "YOUR_API_KEY",
});

async function run() {
  const res = await otpGetAuthenticationStatus(ding, "d8446450-f2fa-4dd9-806b-df5b8c661f23");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `authUuid`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AuthenticationStatusResponse](../../models/components/authenticationstatusresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4XX, 5XX             | \*/\*                |

## retry

Perform a retry if a user has not received the code.

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { DingCore } from "@ding-live/ding/core.js";
import { otpRetry } from "@ding-live/ding/funcs/otpRetry.js";

// Use `DingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ding = new DingCore({
  apiKey: "YOUR_API_KEY",
});

async function run() {
  const res = await otpRetry(ding);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.RetryAuthenticationRequest](../../models/components/retryauthenticationrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.RetryAuthenticationResponse](../../models/components/retryauthenticationresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4XX, 5XX             | \*/\*                |