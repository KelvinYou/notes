# HTTP Status Codes I Actually Confuse

Not a complete list — [MDN has that](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). These are the ones I keep second-guessing.

---

## The Ones I Mix Up

### 200 vs 201 vs 204

| Code | Meaning | When I use it |
|------|---------|---------------|
| `200 OK` | Request succeeded, body contains result | GET, successful PUT/PATCH |
| `201 Created` | Resource was created, `Location` header points to new resource | POST that creates a record |
| `204 No Content` | Success, no body | DELETE, or PUT where response body isn't needed |

**Mistake I used to make:** Returning `200` for a DELETE. Should be `204` — there's nothing to return.

---

### 400 vs 401 vs 403

| Code | Meaning | When I use it |
|------|---------|---------------|
| `400 Bad Request` | Client sent invalid input | Missing required field, bad JSON, failed validation |
| `401 Unauthorized` | Not authenticated | No token, expired token, invalid token |
| `403 Forbidden` | Authenticated but not authorized | Token is valid but user lacks permission |

**Naming gotcha:** `401 Unauthorized` is actually about *authentication*, not authorization. `403 Forbidden` is authorization. The names are backwards from the concepts.

---

### 404 vs 410

| Code | Meaning |
|------|---------|
| `404 Not Found` | Resource doesn't exist (or you're hiding that it does) |
| `410 Gone` | Resource existed but was permanently deleted |

I use `410` when a user deletes their account — soft redirect to a "this account was removed" page. Otherwise `404`.

---

### 422 vs 400

| Code | Meaning |
|------|---------|
| `400 Bad Request` | Request is malformed (can't parse it) |
| `422 Unprocessable Entity` | Request is valid syntax but fails business logic validation |

Example: `400` → invalid JSON body. `422` → JSON is fine, but `email` field is not a valid email format.

---

### 429 — Rate Limited

`429 Too Many Requests` — always include `Retry-After` header so clients know when to retry.

---

### 500 vs 502 vs 503 vs 504

| Code | Meaning | Typical cause |
|------|---------|---------------|
| `500 Internal Server Error` | Unhandled exception in your code | Bug, uncaught throw |
| `502 Bad Gateway` | Upstream server returned invalid response | Downstream service crashed |
| `503 Service Unavailable` | Server is intentionally unavailable | Maintenance, overload |
| `504 Gateway Timeout` | Upstream server didn't respond in time | Downstream service too slow |

**Rule:** If the error is in *my service*, it's `500`. If it's a *dependency* that failed, it's `502` or `504`.
