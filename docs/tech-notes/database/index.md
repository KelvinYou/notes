# Database

My decision process for picking a database. The default is Postgres unless there's a good reason to deviate.

---

## SQL vs NoSQL Decision

```mermaid
flowchart TD
    Q1{Data is relational\nwith clear schema?} -->|Yes| SQL[SQL\nPostgres / MySQL]
    Q1 -->|No| Q2{Flexible / nested\ndocuments?}
    Q2 -->|Yes| DOC[Document DB\nMongoDB / Firestore]
    Q2 -->|No| Q3{Key-value\nor caching?}
    Q3 -->|Yes| KV[Redis / DynamoDB]
    Q3 -->|No| Q4{Time-series data?\nMetrics / events?}
    Q4 -->|Yes| TS[InfluxDB / TimescaleDB]
    Q4 -->|No| Q5{Graph relationships\ncritical?}
    Q5 -->|Yes| GR[Neo4j / Neptune]
    Q5 -->|No| SQL
```

**Default: Postgres.** It handles relational data, JSONB for flexible fields, full-text search, and time-series (with TimescaleDB extension). Don't switch until Postgres is actually the bottleneck.

---

## When to Shard

```mermaid
flowchart LR
    Q1{Single DB handling\nall writes?} -->|Yes, fine| Single[Keep single instance\n+ read replicas]
    Q1 -->|Writes are the\nbottleneck| Q2{Can you partition\nby a natural key?}
    Q2 -->|Yes| Shard[Horizontal sharding\nby user_id, region, etc.]
    Q2 -->|No| Q3{Write patterns\nare time-based?}
    Q3 -->|Yes| Part[Range partitioning\nby date]
    Q3 -->|No| CQRS[CQRS + event sourcing\nor rethink data model]
```

**My rule:** Add read replicas before sharding. Shard only when write throughput is the bottleneck and you have a clean partition key. Sharding adds enormous operational complexity.

---

## Indexing Rules I Follow

- Index foreign keys and any column used in `WHERE`, `JOIN`, or `ORDER BY`
- Composite indexes: column order matters — put the most selective column first
- Partial indexes for common filtered queries (e.g. `WHERE status = 'pending'`)
- Don't over-index: each index slows writes and uses storage
- Run `EXPLAIN ANALYZE` before assuming an index helps

---

## Transactions and ACID

| Property | Meaning | Why it matters |
|----------|---------|----------------|
| **A**tomicity | All or nothing | No partial writes |
| **C**onsistency | DB stays in valid state | Constraints enforced |
| **I**solation | Concurrent transactions don't interfere | No dirty reads |
| **D**urability | Committed = persisted | Survives crashes |

**Default isolation level:** `READ COMMITTED` (Postgres default). Use `SERIALIZABLE` only for financial transactions where correctness is critical.

---

## Reference

- [Postgres Documentation](https://www.postgresql.org/docs/)
- [Use The Index, Luke — SQL indexing guide](https://use-the-index-luke.com/)
- [Designing Data-Intensive Applications — Kleppmann (2017)](https://dataintensive.net/)
