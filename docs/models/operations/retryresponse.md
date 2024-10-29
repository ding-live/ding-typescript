# RetryResponse


## Supported Types

### `components.ErrorResponse`

```typescript
const value: components.ErrorResponse = {
  code: "invalid_phone_number",
  docUrl: "https://docs.prelude.so/api-reference/errors#invalid_phone_number",
  message: "+0 is not a valid phone number",
};
```

### `components.RetryAuthenticationResponse`

```typescript
const value: components.RetryAuthenticationResponse = {
  remainingRetry: 3,
  status: "approved",
};
```

