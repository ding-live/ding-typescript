# CreateCheckResponseStatus

The status of the check. Possible values are:
  * `valid` - The code is valid.
  * `invalid` - The code is invalid.
  * `without_attempt` - No attempt was sent yet so we cannot perform a check.
  * `rate_limited` - The authentication was rate limited and cannot be checked.
  * `already_validated` - The authentication has already been validated.
  * `expired_auth` - The authentication has expired and cannot be checked.



## Values

| Name               | Value              |
| ------------------ | ------------------ |
| `Valid`            | valid              |
| `Invalid`          | invalid            |
| `WithoutAttempt`   | without_attempt    |
| `RateLimited`      | rate_limited       |
| `AlreadyValidated` | already_validated  |
| `ExpiredAuth`      | expired_auth       |