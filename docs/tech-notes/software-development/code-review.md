# How I Do Code Reviews

Code review is communication, not correction. The goal is better code and a better codebase — not proving someone wrong.

---

## Priority at a glance

| Priority | Check | What can go wrong |
|----------|-------|-------------------|
| 1 | **Correctness** | Logic doesn't match requirement, edge cases missed |
| 2 | **Breakage** | Side effects, race conditions, missing error handling |
| 3 | **Maintainability** | Hard to read in 6 months, bad naming, over-abstracted |
| 4 | **Security** | Unvalidated input, secrets in code, missing authz |
| 5 | **Performance** | N+1 queries, unnecessary re-renders *(only if it matters)* |

---

## What I look for (in priority order)

### 1. Does it do what it's supposed to?
Read the PR description first. Understand the intent before reading the code.
- Does the logic match the requirement?
- Are there obvious edge cases not handled?

### 2. Will it break things?
- Side effects on shared state
- Race conditions in async code
- Missing error handling at boundaries (API calls, DB queries, user input)

### 3. Is it maintainable?
- Can someone unfamiliar understand this in 6 months?
- Is the naming clear?
- Is it appropriately modular — not too abstracted, not too duplicated?
- Is it testable?

### 4. Security concerns
- User input goes through validation before hitting logic or DB
- No secrets in code
- Authorization checked at the endpoint level (not just authentication)

### 5. Performance (only if it matters)
- N+1 queries
- Unnecessary re-renders (frontend)
- Large payloads

---

## How I give feedback

**Be specific.** "This is wrong" is useless. "This will throw when `user` is null on line 34" is useful.

**Distinguish blocking from non-blocking.**

| Label | Meaning | Example |
|-------|---------|---------|
| 🔴 Blocking | Must fix before merge | "This will throw when `user` is null" |
| 🟡 Suggestion | Take it or leave it | "You could simplify this with X" |
| 🔵 Question | I might be missing context | "Why X over Y here?" |

**Praise good work.** If someone did something clever or clean, say so. It reinforces the behavior.

---

## What I avoid

- Nitpicking style in PRs — that's what linters are for
- Rewriting someone's code entirely in a comment — suggest the approach, not the full implementation
- Reviewing the same thing twice — if there's a standard, document it so it doesn't need to be re-explained

---

## Tools

- GitHub/GitLab PR comments for async review
- VSCode + Git Graph for local diff inspection
- Linters and formatters automated in CI — so reviewers focus on logic, not formatting
