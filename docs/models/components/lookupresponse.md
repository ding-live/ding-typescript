# LookupResponse

## Example Usage

```typescript
import { LookupResponse } from "@ding-live/ding/models/components";

let value: LookupResponse = {
  carrier: "AT&T",
  countryCode: "US",
  lineType: "Mobile",
  mcc: "310",
  mnc: "410",
  phoneNumber: "+1234567890",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `carrier`                                                  | *string*                                                   | :heavy_minus_sign:                                         | The carrier of the phone number.                           | AT&T                                                       |
| `countryCode`                                              | *string*                                                   | :heavy_minus_sign:                                         | The ISO 3166-1 alpha-2 country code of the phone number.   | US                                                         |
| `lineType`                                                 | [components.LineType](../../models/components/linetype.md) | :heavy_minus_sign:                                         | The type of phone line.                                    | Mobile                                                     |
| `mcc`                                                      | *string*                                                   | :heavy_minus_sign:                                         | The mobile country code of the phone number.               | 310                                                        |
| `mnc`                                                      | *string*                                                   | :heavy_minus_sign:                                         | The mobile network code of the phone number.               | 410                                                        |
| `numberPorted`                                             | *boolean*                                                  | :heavy_minus_sign:                                         | Whether the phone number has been ported.                  |                                                            |
| `phoneNumber`                                              | *string*                                                   | :heavy_minus_sign:                                         | An E.164 formatted phone number.                           | +1234567890                                                |