# FeedbackRequest

## Example Usage

```typescript
import { FeedbackRequest } from "@ding-live/ding/models/components";

let value: FeedbackRequest = {
    customerUuid: "c5955907-aff1-4a3a-afa9-467739251aa5",
    phoneNumber: "+1234567890",
    status: "onboarded",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `customerUuid`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | Your customer UUID, which can be found in the API settings in the dashboard.         |                                                                                      |
| `phoneNumber`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | An E.164 formatted phone number.                                                     | +1234567890                                                                          |
| `status`                                                                             | [components.FeedbackRequestStatus](../../models/components/feedbackrequeststatus.md) | :heavy_check_mark:                                                                   | The type of the feedback.                                                            | onboarded                                                                            |