# What Happens When You Type a URL

The full lifecycle — from keypress to painted pixels.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Cache
    participant DNS
    participant TCP as TCP/TLS
    participant Server
    participant Render as Render Engine

    User->>Browser: type https://example.com + Enter
    Browser->>Cache: DNS cache lookup
    alt Cache hit
        Cache-->>Browser: IP address
    else Cache miss
        Browser->>DNS: resolve example.com
        DNS-->>Browser: 93.184.216.34
        Browser->>Cache: store DNS result (TTL)
    end

    Browser->>TCP: TCP 3-way handshake (SYN → SYN-ACK → ACK)
    Browser->>TCP: TLS handshake (cert verify, key exchange)
    Browser->>Server: GET / HTTP/1.1\nHost: example.com
    Server-->>Browser: 200 OK (HTML)

    Browser->>Render: Parse HTML → DOM tree
    Browser->>Server: Fetch linked CSS, JS, images (parallel)
    Render->>Render: Parse CSS → CSSOM
    Render->>Render: DOM + CSSOM → Render Tree
    Render->>Render: Layout (calculate positions)
    Render->>Render: Paint → pixels on screen
```

---

## The Stages That Matter for Performance

| Stage | What it is | How to speed it up |
|-------|------------|-------------------|
| DNS lookup | Translating domain → IP | Use `dns-prefetch` hints, CDN with anycast |
| TCP + TLS | Connection setup | HTTP/2 multiplexing, keep-alive, QUIC/HTTP/3 |
| Server response | Time to first byte (TTFB) | Fast backend, CDN edge caching |
| HTML parse + sub-resources | Critical render path | Defer non-critical JS, inline critical CSS |
| Layout + paint | Render engine work | Avoid layout thrashing, use `will-change` sparingly |

**The metric I watch most:** TTFB (Time To First Byte) tells me if the problem is DNS/network vs server-side.

---

## Reference

- [How Browsers Work — web.dev](https://web.dev/articles/howbrowserswork)
- [Critical Rendering Path — MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)
