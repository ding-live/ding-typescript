# @ding-live/ding

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/ding-live/ding-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/ding-live/ding-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README
<!-- Start SDK Installation -->
# SDK Installation

## NPM

```bash
npm add https://github.com/ding-live/ding-typescript
```

## Yarn

```bash
yarn add https://github.com/ding-live/ding-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

# Send a code
Send an OTP code to a user's phone number.

```typescript
import { Ding } from "@ding-live/ding";
import { DeviceType } from "@ding-live/ding/dist/models/components";

(async () => {
    const sdk = new Ding({
        apiKey: "YOUR_API_KEY",
    });

    const res = await sdk.otp.createAutentication({
        customerUuid: "eae192ab-9e1e-4b21-b5b1-bfcb79a32fcc",
        phoneNumber: "+1234567890",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


# Check a code
Check that a code entered by a user is valid.

```typescript
import { Ding } from "@ding-live/ding";

(async () => {
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
})();

```


# Retry an authentication
Retry an authentication if a user has not received the code.

```typescript
import { Ding } from "@ding-live/ding";

(async () => {
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
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
# Available Resources and Operations


## [otp](docs/sdks/otp/README.md)

* [check](docs/sdks/otp/README.md#check) - Check an authentication code
* [createAutentication](docs/sdks/otp/README.md#createautentication) - Create an authentication
* [retry](docs/sdks/otp/README.md#retry) - Retry an authentication

## [lookup](docs/sdks/lookup/README.md)

* [lookup](docs/sdks/lookup/README.md#lookup) - Lookup a phone number
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->



<!-- End Dev Containers -->

<!-- Start Error Handling -->
# Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 400-600              | */*                  |


## Check a code
Check that a code entered by a user is valid.

```typescript
import { Ding } from "@ding-live/ding";

(async() => {
  const sdk = new Ding({
    apiKey: "YOUR_API_KEY",
  });

  
  let res;
  try {
    res = await sdk.otp.check({
    authenticationUuid: "e0e7b0e9-739d-424b-922f-1c2cb48ab077",
    checkCode: "123456",
    customerUuid: "8f1196d5-806e-4b71-9b24-5f96ec052808",
  });
  } catch (e) { 
    if (e instanceof errors.ErrorResponse) {
      console.error(e) // handle exception 
    
  }

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End Error Handling -->

<!-- Start Server Selection -->
# Server Selection

## Select Server by Name

You can override the default server globally by passing a server name to the `server: string` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `production` | `https://api.ding.live/v1` | None |

For example:
## Check a code
Check that a code entered by a user is valid.

```typescript
import { Ding } from "@ding-live/ding";

(async () => {
    const sdk = new Ding({
        server: "production",
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
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
## Check a code
Check that a code entered by a user is valid.

```typescript
import { Ding } from "@ding-live/ding";

(async () => {
    const sdk = new Ding({
        serverURL: "https://api.ding.live/v1",
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
})();

```
<!-- End Server Selection -->

<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @ding-live/ding import Ding;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new Ding({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->

<!-- Start Authentication -->

# Authentication

## Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
## Check a code
Check that a code entered by a user is valid.

```typescript
import { Ding } from "@ding-live/ding";

(async () => {
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
})();

```
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
