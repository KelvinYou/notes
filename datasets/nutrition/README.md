# Nutrition dataset — data quality notes

Structured source for the `docs/health/nutrition/` pages and for
`personal-os`'s `scripts/nutrition.py` query adapter. The shape is defined
by `schema.yaml` and checked with `npm run validate:nutrition`. The generated
foods page is rebuilt with `npm run generate:nutrition`.

## Known gaps and provenance

- **Older macro and price records remain unverified.** Many retain
  `source: "personal shopping records (Malaysia), unverified"`; their dates
  reflect the old table's edit date, not an independent product-label check.
  Newly added USDA records cite a FoodData Central ID and retrieval date.
- **Missing prices stay missing.** Pork cuts, lamb, papaya, sweet potato,
  cooked lentils, bok choy, colour-specific bell peppers, carrots, guava and
  drained bone-in sardines do not have a comparable Malaysian edible-weight
  purchase price. The Farm Fresh and Quaker exact-product nutrition rows added
  on 2026-09-29 also have no separately verified package price.
  A food without a price can be compared nutritionally but cannot win a
  ringgit-based ranking yet. Never substitute a guessed retail price.
- **Energy provenance varies.** `kcal_computed: true` marks older
  Atwater-derived values; `false` marks energy read from the cited USDA
  record. The two can differ because fibre is handled differently.
- **Basis must be read per row.** Brown/white rice and lentils use cooked
  weight; raw meat and vegetables use raw edible weight. Restaurant dishes
  such as salmon mentai sushi are not single foods with stable macros:
  salmon, rice, mayonnaise/sauce, and portion size vary independently.
- **Micronutrients can use a proxy.** Read `micronutrient_source` and
  `notes` before claiming a nutrient threshold is met. `skim_milk` now uses
  generic unfortified US skim milk (~125 mg calcium/100 ml), after the
  previous calcium-fortified proxy (204 mg/100 ml) was found unsuitable.
  A Malaysian carton can be higher or lower; see the full local-source audit
  in `docs/health/nutrition/local-label-audit-2026-09.md`.
- **Optional replacement foods need label and yield checks.** The canned
  sardine record is *oil-drained solids with edible bones*; tomato-sauce or
  boneless tins have different fat, sodium and calcium. USDA's common-guava
  record excludes the skin; a local seedless fruit eaten with skin can differ.
  Carrot values use trimmed edible weight. Store shelf prices for whole packs
  must not be treated as cost per 100 g edible without measuring the yield.
- **Iodine has not been researched for these foods.** An omitted
  `iodine_ug` is unknown, not zero. The same missing-versus-zero rule applies
  to every micronutrient. The adult reference file holds generic Daily
  Values, not age/sex-specific requirements; its 1.6 g omega-3 entry is an
  ALA reference and must not be used as a percent target for a total that
  mixes ALA with marine EPA/DHA.
- **`pack_price_myr`/`unit_cost_myr` mix string and float** in
  `prices/*.yaml` — an estimated value keeps the `~` prefix as a string
  (`"~15.00"`) so the estimate marker survives; exact values are floats.
  A future schema change could split this into a numeric value and a
  separate `is_estimate` boolean everywhere.
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
