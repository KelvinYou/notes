# REST API — My Opinions

Not "what is REST" — that's what docs are for. These are the decisions I've formed from building and maintaining APIs.

---

## REST vs GraphQL

| | REST | GraphQL |
|-|------|---------|
| When I use it | Standard CRUD, public APIs, microservices | Complex frontends, multi-client (web + mobile), heavily nested data |
| Over/under-fetching | Common problem | Client requests exactly what it needs |
| Caching | HTTP caching works out of the box | Harder — all requests are POST to `/graphql` |
| Tooling | Universal | Requires GraphQL-specific tooling |
| Learning curve | Low | Higher |

**My default:** REST. GraphQL only when frontend teams are consistently frustrated by over/under-fetching or when one backend serves many different clients with very different data needs.

---

## Versioning Strategy I Use

**URL versioning:** `/v1/users`, `/v2/users`

```
GET /v1/users/42    → old shape
GET /v2/users/42    → new shape (breaking change)
```

Why I prefer URL versioning over header versioning:
- Visible in logs, browser history, API explorers
- Easy to test — just change the URL
- Clients know exactly what they're calling

**When I add a new version:** only on breaking changes. Non-breaking additions (new optional fields) go in the existing version.

---

## Naming Conventions I Follow

```
# Resources = nouns, plural
GET    /users          → list
GET    /users/42       → single
POST   /users          → create
PUT    /users/42       → replace
PATCH  /users/42       → partial update
DELETE /users/42       → delete

# Nested resources
GET    /users/42/posts → user's posts

# Actions (when nouns don't fit)
POST   /users/42/activate     → not a CRUD operation
POST   /payments/42/refund
```

---

## Response Shape I Use

```json
// Success (single)
{ "data": { "id": 42, "name": "Kelvin" } }

// Success (list)
{
  "data": [{ "id": 1 }, { "id": 2 }],
  "meta": { "total": 100, "page": 2, "limit": 20 }
}

// Error
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "field": "email"
  }
}
```

Consistent envelope means clients don't have to guess where the data is.

---

## Reference

- [Stack Overflow Blog — Best Practices for REST API Design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
- [RFC 9110 — HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110)
- [JSON:API Specification](https://jsonapi.org/) — opinionated response format, worth knowing
