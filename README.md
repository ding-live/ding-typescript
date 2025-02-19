# Ding Typescript/Javascript SDK

The Ding Typescript library provides convenient access to the Ding API from applications written in JS or TS.

<!-- Start Summary [summary] -->
## Summary

Ding: The OTP API allows you to send authentication codes to your users using their phone numbers.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Ding Typescript/Javascript SDK](#ding-typescriptjavascript-sdk)
  * [SDK Installation](#sdk-installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Server Selection](#server-selection)
  * [Requirements](#requirements)
  * [Retries](#retries)
  * [Debugging](#debugging)
  * [Standalone functions](#standalone-functions)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @ding-live/ding
```

### PNPM

```bash
pnpm add @ding-live/ding
```

### Bun

```bash
bun add @ding-live/ding
```

### Yarn

```bash
yarn add @ding-live/ding zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [lookup](docs/sdks/lookup/README.md)

* [lookup](docs/sdks/lookup/README.md#lookup) - Look up for phone number

### [otp](docs/sdks/otp/README.md)

* [check](docs/sdks/otp/README.md#check) - Check a code
* [createAuthentication](docs/sdks/otp/README.md#createauthentication) - Send a code
* [feedback](docs/sdks/otp/README.md#feedback) - Send feedback
* [getAuthenticationStatus](docs/sdks/otp/README.md#getauthenticationstatus) - Get authentication status
* [retry](docs/sdks/otp/README.md#retry) - Perform a retry

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `check` method may throw the following errors:

| Error Type           | Status Code | Content Type     |
| -------------------- | ----------- | ---------------- |
| errors.ErrorResponse | 400         | application/json |
| errors.SDKError      | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { Ding } from "@ding-live/ding";
import {
  ErrorResponse,
  SDKValidationError,
} from "@ding-live/ding/models/errors";

const ding = new Ding({
  apiKey: "YOUR_API_KEY",
});

async function run() {
  let result;
  try {
    result = await ding.otp.check({
      authenticationUuid: "eebe792b-2fcc-44a0-87f1-650e79259e02",
      checkCode: "123456",
      customerUuid: "64f66a7c-4b2c-4131-a8ff-d5b954cca05f",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorResponse): {
        // Handle err.data$: ErrorResponseData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Ding } from "@ding-live/ding";
import { HTTPClient } from "@ding-live/ding/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Ding({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  |
| -------- | ------ | ------- |
| `apiKey` | apiKey | API key |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
  serverURL: "https://api.ding.live/v1",
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
<!-- End Server Selection [server] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Ding } from "@ding-live/ding";

const sdk = new Ding({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`lookupLookup`](docs/sdks/lookup/README.md#lookup) - Look up for phone number
- [`otpCheck`](docs/sdks/otp/README.md#check) - Check a code
- [`otpCreateAuthentication`](docs/sdks/otp/README.md#createauthentication) - Send a code
- [`otpFeedback`](docs/sdks/otp/README.md#feedback) - Send feedback
- [`otpGetAuthenticationStatus`](docs/sdks/otp/README.md#getauthenticationstatus) - Get authentication status
- [`otpRetry`](docs/sdks/otp/README.md#retry) - Perform a retry

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!
