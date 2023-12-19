# Lookup
(*lookup*)

## Overview

Retrieve up-to-date metadata about a specific phone number

### Available Operations

* [lookup](#lookup) - Perform a phone number lookup

## lookup

Perform a phone number lookup

### Example Usage

```typescript
import { Ding } from "@ding-live/ding";
import { LookupRequest } from "@ding-live/ding/dist/models/operations";

async function run() {
  const sdk = new Ding({
    apiKey: "YOUR_API_KEY",
  });
const customerUuid: string = "6e93aa15-9177-4d09-8395-b69ce50db1c8";
const phoneNumber: string = "string";

  const res = await sdk.lookup.lookup(customerUuid, phoneNumber);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `customerUuid`                                               | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `phoneNumber`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.LookupResponse](../../models/operations/lookupresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
