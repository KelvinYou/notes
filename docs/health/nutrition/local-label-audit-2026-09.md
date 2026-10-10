# Malaysia nutrition source audit — 2026-09-29

Scope: all 58 food records present before this audit, plus two local-brand
variants added below (60 records after the audit). This is a source audit,
not a claim that the owner buys any named brand. A generic food remains generic
until an exact product, package size, and nutrition panel are known. All current
price records are outside this nutrition audit and remain unverified unless their
own source says otherwise. Nutrients are per each food row's stated basis.

## Source decisions

- **G — generic food retained:** cultivar, cut, cooking water, and supplier
  vary. A brand search alone cannot improve a raw-food nutrient estimate.
  [MyFCD](https://myfcd.moh.gov.my/) is the preferred Malaysian comparator
  when the same species, cut, preparation and edible portion are listed;
  otherwise the cited USDA FoodData Central record remains an estimate.
- **L — exact label needed:** the recipe, fortification, or processing can
  materially change nutrition. A local product is a candidate, not evidence
  that the owner uses it. Copy only nutrients printed for that exact product;
  leave unlisted micronutrients unknown rather than borrowing a full USDA
  panel without a proxy warning.
- **X — proxy mismatch:** the currently cited food differs materially from
  the row's named food. Quantitative decisions need the exact species/product.
- **S — supplement label needed:** elemental dose and added nutrients are
  product-specific; a compound's weight is not its elemental mineral dose.

The existing `source: personal shopping records (Malaysia), unverified` text
means the earlier macro figure is a shopping estimate. Its `last_verified`
date is an edit date, not a label check. USDA micronutrient IDs are source
provenance for generic reference foods, not Malaysian brand certification.

### New exact-product variants (2/2)

| Food ID | Decision | Review and next action |
|---|---|---|
| `farm_fresh_uht_fresh_milk_1l` | Label-verified candidate | Official Farm Fresh Malaysia panel supplies macros, sugar, calcium and sodium. Other micros remain unknown; only use if this is the actual purchased carton. |
| `quaker_my_rolled_oats` | Label-verified candidate | Official Quaker Malaysia table supplies macros, fibre, sugar, magnesium and sodium. Its iron lines are inconsistent, so iron remains unknown; only use for this exact oats product. |

### Dairy (4/4)

| Food ID | Decision | Review and next action |
|---|---|---|
| `greek_yogurt` | L | Current 11.6g sugar/100g is inconsistent with assuming an unsweetened plain product. Check plain versus flavoured label, protein, sugar, calcium and serving size before using 1.25kg/week in the plan. |
| `whole_milk` | L | Local Farm Fresh UHT Fresh Milk reports 3.4g protein, 4.3g carbohydrate, 3.8g fat and 122mg calcium/100ml; this is a useful candidate, not the owner's confirmed carton. |
| `skim_milk` | L, corrected | Removed the unsuitable US calcium-fortified proxy. The generic row now uses USDA SR28 unfortified skim milk, about 125mg calcium/100ml. It does not represent a verified local carton. Marigold Low Fat is a separate **low-fat** product (1.2g fat, 149mg calcium/100ml), not skim milk. |
| `cheese_slice` | L | Processed cheese calcium, sodium, fat and slice weight depend on the exact packet; current 20g/slice is inferred, not measured. |

### Grains and starches (8/8)

| Food ID | Decision | Review and next action |
|---|---|---|
| `wholemeal_bread` | L | Gardenia Breakthru Whole Wheat and High Fibre & Low Sugar are distinct local products. Match the exact loaf, label and slice weight; the present generic USDA bread micros may differ from fortified Malaysian bread. |
| `brown_rice_cooked` | G | Keep cooked basis; water uptake varies more than rice brand. Weigh the cooked portion. |
| `white_rice_cooked` | G | Keep cooked, unenriched basis unless the actual rice is fortified; water uptake varies. |
| `potato` | G | Keep raw edible basis. Do not compare its raw vitamin C or GI with cooked potato without cooking/yield data. |
| `sweet_potato` | G | Keep raw edible basis; orange/purple varieties differ in vitamin A. Record variety when used regularly. |
| `lentils_cooked` | G | Keep cooked basis; record drained weight, not dry packet weight. |
| `pasta_dry` | L | Existing USDA entry is **enriched** dry pasta; inspect the Malaysian packet for enrichment before crediting its iron or folate. |
| `rolled_oats` | L | Quaker Malaysia Rolled Oats provides a local comparison: 380kcal, 12.2g protein, 58g carbohydrate, 9g fat, 1.4g sugar and 9g fibre/100g. Retain the generic row until its actual packet is known. |

### Produce (15/15)

| Food ID | Decision | Review and next action |
|---|---|---|
| `broccoli` | G | Raw edible basis; cooking losses, especially vitamin C, are not modelled. |
| `lettuce` | G | Current reference is green-leaf lettuce; iceberg/romaine are different. Identify the type when recording a regular purchase. |
| `bok_choy` | G | Raw pak choi reference is a reasonable species match. |
| `carrot_raw` | G | Raw trimmed edible basis; beta-carotene varies by variety. |
| `frozen_blueberries` | L | Current USDA frozen unsweetened reference fits only a no-added-sugar bag; inspect ingredients and sugar panel. |
| `frozen_strawberries` | L | Same no-added-sugar condition; syrup-packed berries need a separate row. |
| `bell_pepper` | G | Red pepper has its own raw reference; keep separate from yellow/green. |
| `yellow_bell_pepper` | G | Yellow pepper has its own raw reference; keep separate. |
| `green_bell_pepper` | G | Green pepper has its own raw reference; keep separate. |
| `banana` | G | Raw edible portion and size/ripeness vary; a brand label is not useful. |
| `papaya` | G | Raw edible portion; local cultivar/ripeness vary. |
| `guava_raw` | G | Check whether peel is eaten before comparing to the reference edible portion. |
| `apple` | G | Raw with skin; variety and edible yield vary. |
| `cherry_tomato` | X | Micronutrients use ordinary tomato as a proxy; obtain a cherry-specific official food record if precise vitamin C matters. |
| `avocado` | G | Raw edible flesh; variety and ripeness affect fat and yield. |

### Proteins (16/16)

| Food ID | Decision | Review and next action |
|---|---|---|
| `egg` | G | Generic raw egg is suitable; weigh the edible portion if egg size changes. |
| `chicken_breast_raw` | G | Match skinless raw cut; cooked weight must be converted separately. |
| `taiwan_sausage` | X | Italian pork sausage is only a rough micronutrient proxy. Exact local packet is required for sugar, fat and sodium. |
| `whey_protein_powder` | L | Fortification and protein per scoop vary. Current USDA proxy has unusually high added vitamins; do not credit them until the tub label is known. |
| `soy_protein_isolate` | L | Check exact powder for protein, sodium, iron and added nutrients; current sodium proxy is suspect. |
| `ikan_kembung` | X | Spanish mackerel is not Indian mackerel. Species and edible portion must match before treating omega-3 and vitamin D as precise. |
| `tempeh` | G | Generic fermented soybean reference is useful; fried or seasoned packs need their own record. |
| `salmon_raw` | G | Farmed Atlantic salmon reference is suitable only if bought fish is farmed Atlantic; wild/other species differ. |
| `canned_sardines_bone_drained` | L | USDA value applies to oil-drained solids **with edible bones**. Check local tin for bone, sauce, drained weight, sodium and calcium. |
| `dory_fillet_raw` | X | “Dory” can mean different fish; current channel-catfish micronutrients are a proxy for pangasius/basa, not a verified match. Confirm species from packet. |
| `shrimp_peeled_raw` | X | Existing micros combine two shrimp entries, one with moisture-retention additives. A local raw, untreated shrimp record would improve this. |
| `tofu` | X | Current 350mg calcium/100g assumes **calcium-sulfate-set regular tofu** while row says firm tofu. Coagulant and firmness must be checked; do not rely on this calcium value without label/producer data. |
| `pork_loin` | G | Raw lean-plus-fat USDA cut; weigh trimmed edible meat, especially after hotpot cooking. |
| `lamb_leg_lean_raw` | G | Lean leg raw reference; restaurant hotpot slices may use a different cut/fat level. |
| `pork_collar` | X | Boston butt is a rough proxy for local collar; fat content depends heavily on trimming. |
| `canned_tuna` | L | Check local brand, fish species, packing liquid, drained weight and sodium; current macro/micro sources already differ in protein. |

### Snacks, pantry and supplements (15/15)

| Food ID | Decision | Review and next action |
|---|---|---|
| `dark_chocolate_999` | X | Benns sells a 99.9% product, but current iron (17.4mg/100g) comes from USDA **unsweetened baking chocolate**, not a Benns assay. Its 20g/day contribution is therefore uncertain. Read the Benns pack; if iron is absent, leave it unknown. |
| `almonds` | G | Generic plain almonds fit; salted/roasted/coated products need packet data. |
| `walnuts` | G | Generic plain nuts fit; ALA is not interchangeable with fish EPA/DHA. |
| `chia_seeds` | G | Plain seeds fit; ALA is not interchangeable with fish EPA/DHA. |
| `pumpkin_seeds` | G | Plain kernels fit; in-shell retail weight needs an edible-yield correction. |
| `matcha_powder` | L | Check whether it is 100% matcha or a sweetened drink powder. |
| `cocoa_powder_100` | L | Check 100% unsweetened cocoa and any alkalisation; drink-mix powders are different. |
| `black_sesame_powder` | L | Ground whole sesame versus dehulled/sweetened powder changes calcium, fat and sugar. |
| `black_sesame_oil` | L | Pure oil has fat/energy but no seed calcium; check blends and serving volume. |
| `black_sesame_paste` | L | Whole/dehulled sesame and added oil/sugar change calcium and energy. |
| `sesame_paste` | L | Current USDA tahini reference may not match Asian sesame paste; check ingredients and hull status. |
| `peanut_butter` | L | Local products can add sugar/oil/salt. Match the jar before using generic USDA sodium/sugar. |
| `aromatics_mixed` | X | Onion-only micronutrients cannot precisely represent onion, garlic and ginger together; measure separate ingredients if their contribution becomes material. |
| `creatine_monohydrate` | S | Confirm pure creatine monohydrate and grams per scoop; no brand-independent vitamin credit. |
| `magnesium_glycinate` | S | Record **elemental magnesium** per serving, not magnesium-glycinate compound mass. |

## Verified Malaysian comparators and limits

| Candidate | Primary source and useful facts | Dataset action |
|---|---|---|
| Marigold Low Fat Milk | [ALS Malaysia certificate hosted by MOH HCL](https://myhcl.moh.gov.my/assets/doc/lab/MARIGOLD_LOW_FAT_MILK_2020_-_MF2019548_1_FP_COA_P.pdf): 2020 sample, per 100ml 50kcal, protein 3.5g, carbohydrate 6.4g, fat 1.2g, calcium 149mg. | Do not write into generic `skim_milk`: it is low fat, not skim, and the certificate is from 2020. |
| Farm Fresh UHT Fresh Milk | [Official Farm Fresh shop](https://shop.farmfresh.com.my/products/farm-fresh-uht-fresh-milk-1l-x-1-pack-farm-fresh-choco-malt-powder-800g-1-pack): per 100ml protein 3.4g, carbohydrate 4.3g, fat 3.8g, calcium 122mg. | Added a separate exact-product row; not proof of the owner's carton. |
| Quaker Malaysia Rolled Oats | [Official Quaker Malaysia product table](https://www.quaker.com.my/products.php): per 100g 380kcal, protein 12.2g, carbohydrate 58g, fat 9g, sugar 1.4g, fibre 9g. | Added a separate exact-product row; generic oats stay generic. |
| Gardenia Breakthru | [Official product range](https://gardenia.com.my/breakthru/): Whole Wheat, High Fibre & Low Sugar, and Bran & WheatGerm are separate loaves. | Do not collapse the range to one nutrition row. Obtain the chosen loaf's panel and actual slice weight. |
| Benns 99.9% | [Official Benns product description](https://www.bennschocolate.com/) confirms a 99.9% product; it does not provide a readable iron assay. | No brand-specific iron value can be entered yet. |

## Plan impact and priority

The private `standard_week.md` uses 2.25L/week skim milk. Changing only
calcium from the former 204 to generic unfortified 125mg/100ml reduces its
calculated weekly-average calcium by about 254mg/day: 1,388 to about
1,134mg/day. The same substitution changes the plan's vitamin A estimate
from 1,230 to about 796µg/day. These are **sensitivity calculations**, not
measurements of the owner's real carton. The plan has been annotated so its
previous “all micronutrients ≥100%” statement is no longer treated as verified.
The plan's 1,300mg calcium comparator is a generic US label Daily Value.
[Malaysia MOH RNI 2017](https://hq.moh.gov.my/nutrition/wp-content/uploads/2023/12/FA-Buku-RNI.pdf)
sets 1,000mg/day for adults aged 19–50 of either sex. A result below the label
DV is therefore not by itself evidence of a calcium shortfall for this age
group. Age and relevant health context must be known before changing the plan
to chase the generic DV.

First labels to obtain: the actual milk carton; Greek yogurt tub; Benns
99.9% chocolate wrapper; whey/soy protein tubs; and iodine/magnesium
supplements. Next: oats, bread, tofu, canned fish, frozen berries, and sesame
products. Exact-product variants can then be added without overwriting
generic reference foods.
