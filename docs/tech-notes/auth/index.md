# Authentication

My mental model: **Authentication = who are you. Authorization = what can you do.**

---

## Auth Flow Comparison

### Session-based (cookie + server session)

```mermaid
sequenceDiagram
    Client->>Server: POST /login (username + password)
    Server->>DB: Verify credentials
    DB-->>Server: User record
    Server->>SessionStore: Create session (session_id → user_id)
    Server-->>Client: Set-Cookie: session_id=abc (httpOnly)
    Client->>Server: GET /dashboard (Cookie: session_id=abc)
    Server->>SessionStore: Lookup session_id
    SessionStore-->>Server: user_id = 42
    Server-->>Client: 200 Dashboard
```

### JWT-based (stateless)

```mermaid
sequenceDiagram
    Client->>AuthServer: POST /login
    AuthServer-->>Client: access_token (15min) + refresh_token (7d, httpOnly cookie)
    Client->>API: GET /dashboard\nAuthorization: Bearer <access_token>
    API->>API: Verify JWT signature (no DB call)
    API-->>Client: 200 Dashboard
```

---

## Session vs JWT

| | Session | JWT |
|-|---------|-----|
| State | Stored server-side | Stateless |
| Revocation | Instant (delete session) | Wait for expiry (or maintain revocation list) |
| Scalability | Needs shared session store (Redis) | Easy to scale horizontally |
| Mobile-friendly | Harder (cookie handling) | Better |
| My preference | Monolith + SSR apps | APIs, microservices, mobile |

---

## OAuth2 / OIDC Flow (for social login / SSO)

```mermaid
sequenceDiagram
    participant User
    participant App
    participant AuthServer as Auth Server (Google / GitHub)
    participant API

    User->>App: Click "Login with Google"
    App->>AuthServer: Redirect to /authorize\n?client_id=...&scope=openid+email&redirect_uri=...
    AuthServer->>User: Google login page
    User->>AuthServer: Logs in + consents
    AuthServer->>App: Redirect to callback URL\n?code=AUTH_CODE
    App->>AuthServer: POST /token\n(code + client_secret)
    AuthServer-->>App: access_token + id_token (JWT)
    App->>AuthServer: GET /userinfo (with access_token)
    AuthServer-->>App: { email, name, sub }
    App->>API: Authenticated requests
```

**OIDC** adds the `id_token` (user identity) on top of OAuth2 (API access). Use OIDC when you need to know *who* the user is, not just access their resources.

---

## My Default Stack

| Use case | My choice |
|----------|-----------|
| New Next.js app | NextAuth.js / Auth.js |
| Supabase project | Supabase Auth (built-in) |
| Backend API only | JWT (RS256) with short expiry |
| Enterprise SSO | SAML or OIDC via provider |

---

## Reference

- [OAuth 2.0 RFC 6749](https://www.rfc-editor.org/rfc/rfc6749)
- [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
