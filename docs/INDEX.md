---
title: Repository Documentation Index
draft: true
---

# Notes Repository Documentation Index

This is a repository maintenance index, excluded from production by `draft: true`. Read the relevant owner before editing; paths below are relative to the repository root. Public topic notes remain in their existing directories.

## Read by task

| Task | Source to read |
|---|---|
| Agent instructions and essential constraints | [AGENTS.md](../AGENTS.md) |
| Setup and command entry points | [README](../README.md), [package.json](../package.json) |
| Note improvement direction and pending work | [PLAN.md](../PLAN.md) |
| Technical notes | `docs/tech-notes/` |
| Thinking and personal perspectives | `docs/thinking/` |
| Health and nutrition notes | `docs/health/` |
| Nutrition records, provenance and missing values | [Dataset notes](../datasets/nutrition/README.md), [schema](../datasets/nutrition/schema.yaml) |
| Nutrition validation | `scripts/validate-nutrition-data.mjs` |
| Generated nutrition catalog | `scripts/generate-nutrition-docs.mjs` |
| Site routes, sidebar groups and theme | `docusaurus.config.js`, `sidebars.js`, `src/` |

## Source-of-truth map

| Information | Owner | Derived view or consumer |
|---|---|---|
| Shared instructions | `AGENTS.md` | `CLAUDE.md` symlink |
| Authored notes | Markdown/MDX under `docs/`, `blog/` | Docusaurus pages |
| Food, price and reference facts | YAML under `datasets/nutrition/` | Generated catalog and external query adapter |
| Nutrition data shape | `datasets/nutrition/schema.yaml` | Validator and generator |
| Nutrition catalog rendering | `scripts/generate-nutrition-docs.mjs` | `docs/health/nutrition/catalog/` |
| Dependencies and commands | `package.json` | Installation and builds |
| Site navigation | `sidebars.js`, `docusaurus.config.js` | Published navigation |
| Enhancement plan | `PLAN.md` | Scoped future edits; not an automatic deletion list |

## Editing nutrition content

Generated catalog pages carry a generated-file header. Edit YAML records for facts, or the generator for presentation, then validate and regenerate. Narrative nutrition notes outside the catalog remain authored content. The dataset README owns provenance caveats; do not copy its time-sensitive findings into this index.

## Maintenance

Keep a single owner per topic. Add links here when durable guidance is introduced; preserve existing note paths and the original language of authored content. New repository maintenance docs under `docs/` should explicitly decide whether they belong in the published site. Keep private records out of both published content and repository guidance.
