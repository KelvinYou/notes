# Notes — Agent Instructions

This file owns shared agent instructions. `CLAUDE.md` links here; maintain one copy.

## Project and reading

Public Docusaurus notes and a structured nutrition dataset. Use [docs/INDEX.md](docs/INDEX.md) to find the relevant owner before editing. Existing notes may use their original language; preserve it unless the requested edit includes translation.

## Important boundaries

- `docs/` contains publishable website content as well as the repository index. The index is marked `draft: true` so it stays out of production builds. Keep private personal records outside this public repository.
- `datasets/nutrition/` owns structured food, price and reference records. Read [its data quality notes](datasets/nutrition/README.md) and `schema.yaml` before editing records.
- `docs/health/nutrition/catalog/` is generated. Edit source YAML, then run `npm run validate:nutrition` and `npm run generate:nutrition`; do not hand-edit generated MDX.
- The nutrition generator owns display rendering and joins. Nutrition basis conversions, macro and cost derivations belong to the consuming Personal-OS adapter; do not duplicate them here.
- Missing values remain unknown, estimates keep their markers, and source/basis information travels with records.
- `PLAN.md` records the note enhancement plan. It is not blanket authorization to delete or rewrite notes outside the current request.

## Commands

Run from the repository root; `package.json` owns these definitions.

- `npm ci` — install locked dependencies.
- `npm run start` — local Docusaurus preview.
- `npm run validate:nutrition` — validate dataset records.
- `npm run generate:nutrition` — regenerate nutrition catalog pages (writes files).
- `npm run build` — validate data, regenerate the catalog and build the site.

Check content links and the relevant docs build when changing published Markdown or MDX. Keep detailed guidance in its indexed owner rather than extending this entry point.
