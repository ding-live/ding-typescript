# Ding Typescript/Javascript SDK

The Ding Typescript library provides convenient access to the Ding API from applications written in JS or TS.

<!-- Start SDK Installation [installation] -->
## SDK Installation

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [otp](docs/sdks/otp/README.md)

* [check](docs/sdks/otp/README.md#check) - Check a code
* [createAuthentication](docs/sdks/otp/README.md#createauthentication) - Send a code
* [feedback](docs/sdks/otp/README.md#feedback) - Send feedback
* [retry](docs/sdks/otp/README.md#retry) - Perform a retry

### [lookup](docs/sdks/lookup/README.md)

* [lookup](docs/sdks/lookup/README.md#lookup) - Perform a phone number lookup
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Ding } from "@ding-live/ding";
import { SDKValidationError } from "@ding-live/ding/models/errors";

const ding = new Ding({
    apiKey: "YOUR_API_KEY",
});

async function run() {
    let result;
    try {
        result = await ding.otp.check({
            authenticationUuid: "e0e7b0e9-739d-424b-922f-1c2cb48ab077",
            checkCode: "123456",
            customerUuid: "8f1196d5-806e-4b71-9b24-5f96ec052808",
        });
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.ErrorResponse: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
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

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.ding.live/v1` | None |

```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
    serverIdx: 0,
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


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Ding } from "@ding-live/ding";

const ding = new Ding({
    serverURL: "https://api.ding.live/v1",
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
    const result = await ding.otp.check(
        {
            authenticationUuid: "e0e7b0e9-739d-424b-922f-1c2cb48ab077",
            checkCode: "123456",
            customerUuid: "8f1196d5-806e-4b71-9b24-5f96ec052808",
        },
        {
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
        }
    );

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
        authenticationUuid: "e0e7b0e9-739d-424b-922f-1c2cb48ab077",
        checkCode: "123456",
        customerUuid: "8f1196d5-806e-4b71-9b24-5f96ec052808",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!
