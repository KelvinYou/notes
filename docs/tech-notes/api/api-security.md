# API Security: What I Actually Check

A working checklist — not theoretical. Things I verify when building or reviewing APIs.

---

## Must-haves (non-negotiable)

- **HTTPS everywhere** — no exceptions, not even internal APIs
- **Input validation** — never trust client data; validate type, length, format at the boundary
- **Authentication** — JWT with short expiry + refresh tokens, or OAuth2 for third-party
- **Authorization** — check *every* endpoint: "is this user allowed to do this specific action?"
- **Rate limiting** — protect against brute force and scraping; per-user and per-IP
- **Error handling** — never expose stack traces or internal details to clients

## Things I commonly see skipped

- **API versioning** — `/v1/`, `/v2/` from day one. Changing APIs without versioning breaks clients.
- **Leveled API keys** — read-only vs read-write keys. Don't give every integration full access.
- **OWASP API Top 10** — worth a read. The broken object-level authorization one bites people constantly. ([OWASP API Security Top 10](https://owasp.org/API-Security/editions/2023/en/0x00-header/))

## Infrastructure layer

- **API Gateway** — centralize auth, rate limiting, logging instead of doing it in every service
- **Whitelisting** — IP allowlists for admin or internal endpoints
- **WebAuthn / passkeys** — for user-facing auth where you want to avoid passwords

---

## My quick review checklist

When reviewing a new API endpoint:
- [ ] Auth: is authentication required?
- [ ] Authz: can this user access *this specific resource* (not just any resource of this type)?
- [ ] Input: is every input validated before it touches the database?
- [ ] Output: does the response leak any sensitive fields?
- [ ] Rate: is this endpoint rate limited?
- [ ] Versioned: is this in a versioned path?
