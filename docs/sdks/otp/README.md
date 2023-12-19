# Otp
(*otp*)

## Overview

Send OTP codes to your users using their phone numbers.

### Available Operations

* [check](#check) - Check a code
* [createAutentication](#createautentication) - Send a code
* [retry](#retry) - Perform a retry

## check

Check a code

### Example Usage

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

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [components.CreateCheckRequest](../../models/components/createcheckrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CheckResponse](../../models/operations/checkresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## createAutentication

Send a code

### Example Usage

```typescript
import { Ding } from "@ding-live/ding";
import { DeviceType } from "@ding-live/ding/dist/models/components";

async function run() {
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
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [components.CreateAuthenticationRequest](../../models/components/createauthenticationrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateAutenticationResponse](../../models/operations/createautenticationresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## retry

Perform a retry

### Example Usage

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

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [components.RetryAuthenticationRequest](../../models/components/retryauthenticationrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.RetryResponse](../../models/operations/retryresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
