# Nutrition dataset — data quality notes

Structured source for the `docs/health/nutrition/` pages and for
`personal-os`'s `nutrition.py` query adapter (Phase 2, not built yet). This
is not a formal schema yet — that's tracked in
[plan-public-knowledge-integration.md](https://github.com/KelvinYou/personal-os/blob/main/docs/plan-public-knowledge-integration.md)
Phase 1 in the `personal-os` repo.

## Known gaps (carry into Phase 1, don't silently fix here)

- **No per-row source citation.** Every food/price record is marked
  `source: "personal shopping records (Malaysia), unverified"` — the original
  table this came from cited no product label or database. Phase 1 should
  replace this with a real source (label, USDA FDC, etc.) before this data is
  treated as authoritative.
- **No per-row date.** `last_verified: "2026-08-19"` is inherited from the
  source file's last edit date, not an independent per-item check.
- **`kcal` is derived, not sourced.** Computed via Atwater factors
  (P×4 + C×4 + F×9) from protein/carbs/fat, marked `kcal_computed: true`.
  Standard derivation, not an invented value — but Phase 2's adapter should
  own this computation instead of a static number baked into the YAML.
- **Basis is `100g` for every solid food**, `100g_cooked` for items already
  cooked at time of consumption (brown rice, white rice), `100g_raw` for
  everything else including meats (the source table explicitly labelled
  those 生重/raw weight).
- **`pack_price_myr`/`unit_cost_myr` mix string and float** in
  `prices/*.yaml` — an estimated value keeps the `~` prefix as a string
  (`"~15.00"`) so the estimate marker survives; exact values are floats.
  Phase 1's schema should split this into a numeric value + a separate
  `is_estimate` boolean everywhere.
- **`meals/` removed (2026-08-24).** Structured meal-template records (with
  `slot`/ingredient/basis-conversion schema) are gone — replaced by narrative
  technique/pairing notes under `docs/health/nutrition/` (marinades, overnight
  oats combos, etc.), which don't need a structured catalog. The two
  never-resolved gaps this used to carry (`dinner_beef`/`dinner_canned_sardine`
  meal records referencing food ids that didn't exist yet) went away with it.
  `foods/` and `prices/` are unaffected — `nutrition.py food <id>` still works.
- **Food categories**: split into 7 files, not the 4 illustrative ones from
  the personal-os plan — `produce.yaml` and `supplements.yaml` were needed
  because vegetables and creatine/magnesium don't have protein/carb/fat
  macros and don't belong in `snacks.yaml`; `pantry.yaml` (2026-08-24) was
  split out of `snacks.yaml` for condiments/powders/oils (matcha, cocoa
  powder, black sesame powder/oil) that are used to season a meal, not eaten
  as a standalone snack. `frozen_blueberries` moved from `snacks.yaml` to
  `produce.yaml` (it's a fruit, not a nut/snack).
- **`glycemic_index` is a new, sparse field (2026-08-24)**, added only to
  foods where a published GI value exists and carb content is high enough to
  matter (grains, potato, frozen blueberries, dairy). Values are taken from
  public GI reference tables for the generic food (e.g. "boiled potato"),
  not lab-tested on this specific product — see each record's `gi_source`.
  Nuts/seeds/cocoa/dark-chocolate carbs are mostly fibre/fat-bound and don't
  have a conventionally-measured GI, so they're left blank rather than
  guessed — that's a gap, not an oversight.
