# Food swaps: protein, oily fish, fruit, and starch

The quantities below are comparisons between **foods**, not a personal meal
plan. Meat, fish, fruit and root vegetables use raw edible weight; rice and
lentils use cooked weight. Restaurant sauces, cooking oil, broth and rice are
separate ingredients. See the linked FoodData Central IDs in
`datasets/nutrition/foods/` for source records.

## Protein and oily fish

| Food | Portion | Protein | Fat | Energy | Omega-3 data |
|---|---:|---:|---:|---:|---|
| Dory fillet | 200 g | 30 g | 4 g | 156 kcal | 0.46 g total, catfish proxy |
| Chicken breast | 130 g | 30 g | 4.7 g | 161 kcal | 0.01 g total |
| Peeled shrimp | 150 g | 30 g | 1.5 g | 134 kcal | 0.09 g total |
| Indian mackerel | 150 g | 30 g | 12 g | 228 kcal | 1.56 g total, Spanish mackerel proxy |
| Salmon | 150 g | 30 g | 19.5 g | 296 kcal | 1.91 g total |
| Pork loin | 140 g | 29.8 g | 11.6 g | 232 kcal | 0.05 g ALA reported |
| Lean lamb leg | 140 g | 29.5 g | 6.5 g | 176 kcal | 0.17 g combined ALA/EPA/DPA/DHA |
| Canned sardines, oil-drained, with bones | 120 g drained | 29.5 g | 13.7 g | 250 kcal | 1.18 g EPA+DHA (not total omega-3) |

Chicken is the closest low-fat protein replacement for dory. Pork loin is a
close macro replacement for mackerel at these portions, **but it does not
replace an oily-fish serving**: the long-chain omega-3 fatty acids in salmon
and mackerel are the reason to keep fish in the rotation. Lamb values describe
trimmed leg meat; fatty hotpot slices may differ substantially.

The [American Heart Association recommends two fish servings per
week](https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats/fish-and-omega-3-fatty-acids),
particularly oily fish. If a weekly pattern already has two such servings, a
restaurant salmon dish can replace a fish meal for variety; it is not a
required extra serving. Count the approximate **salmon weight**, not the
number of sushi pieces. Salmon mentai sushi is not entered as one food here
because salmon, rice and mayonnaise-based topping vary by restaurant and
portion. For the same reason, a hotpot bill or plate count cannot be converted
reliably into grams of lean lamb.

Pork and lamb are red meat. The [World Cancer Research Fund's population
guidance](https://www.wcrf.org/research-policy/evidence-for-our-recommendations/limit-red-processed-meat/)
is no more than roughly 350–500 g **cooked** red meat per week and little, if
any, processed meat. An occasional larger restaurant meal is best understood
in the context of the weekly pattern, not compensated for by skipping
vegetables or other food groups.

**Shelf-stable fish option:** bone-in sardines can replace one salmon or
mackerel lunch when convenient. The USDA drained-solids record supplies
382 mg calcium, 24.62 g protein and 0.982 g EPA+DHA per 100 g, alongside
11.45 g fat and 307 mg sodium. Keep it at lunch for the existing reflux
timing rule. Check the can: boneless fish, tomato/chilli sauce, added oil and
the drained weight change the comparison. A [120 g retail can listed at
RM6.89](https://jgcj.jayagrocer.com/products/ayam-brand-sardines-in-extra-virgin-olive-oil-120g-1)
cannot be priced as 120 g of drained edible fish; the label or weighed
drained contents are needed before putting it in the cost ranking.

## Fruit, starch, and vegetable alternatives

| Swap | Why it works | Limit |
|---|---|---|
| Banana, ~120 g edible → papaya, ~230 g edible | Both provide roughly 25–28 g carbohydrate and ~420 mg potassium | 230 g fruit is bulky immediately before exercise; better after |
| Banana before a short workout → 20 g honey in water | Small, quick carbohydrate portion already used as an occasional fallback | Only ~16 g carbohydrate versus ~28 g in the banana; not a routine fruit replacement |
| Potato, 120 g raw → brown rice, ~85 g cooked | Both provide ~20 g carbohydrate and ~93 kcal | Rice supplies much less potassium; occasional use does not imply a deficiency |
| Potato, 120 g raw → sweet potato, 120–150 g raw | Similar starchy-food role; sweet potato adds beta-carotene | The 150 g option adds about 37 kcal and ~10 g carbohydrate |
| Part of rice → cooked lentils | Adds fibre, folate and plant protein | Cooked basis; do not use dry lentil weight or price in the calculation |
| Part of lettuce/broccoli → bok choy | Adds vegetable variety, calcium and folate | Raw and cooked weights differ |
| Part of lettuce → 80–100 g red, yellow or green bell pepper | Adds vegetable variety and vitamin C | Red/yellow/green have separate catalog entries; this is a vegetable swap, not a protein or carbohydrate replacement |
| Some vegetable servings → 80–100 g carrot | Adds beta-carotene and a different texture | Recalculate the whole day's folate, vitamin C and calcium if replacing the fixed broccoli portion |
| Frozen berries at lunch → guava, ~135 g edible flesh | Similar energy (~92 kcal), with more fibre and potassium in the cited samples | The USDA guava sample excludes skin; local seedless guava eaten with skin can differ. Check personal tolerance |

Papaya, sweet potato, cooked lentils, bok choy and lean lamb have USDA
nutrition records in the catalog, but no verified Malaysian retail prices
yet. Keep them out of cost rankings until a dated receipt or retailer listing
establishes comparable per-100 g edible cost.

Bell-pepper colours are separate because their recorded nutrients differ.
The catalog's legacy `bell_pepper` ID refers to **red**; yellow and green
have their own IDs. The red price is an unverified mixed-colour shopping
estimate, while yellow and green have no local price record. USDA SR28
reports no total-sugars value for yellow pepper, so its sugar figure comes
from [AFCD Release 3](https://www.foodstandards.gov.au/science-data/food-nutrient-databases/afcd/data-files)
and should not be read as a measurement from the same sample as the USDA
macros. Raw vitamin C per 100 g in the [USDA SR28 vegetable
tables](https://www.ars.usda.gov/ARSUserFiles/80400535/Data/SR/SR28/reports/sr28fg11.pdf)
is 128 mg for red, 183.5 mg for yellow and 80.4 mg for green; actual produce
and cooking can differ.

Carrot and guava are optional variety, not missing nutrients that require
another daily food. The [USDA SR28 vegetable](https://www.ars.usda.gov/ARSUserFiles/80400535/Data/SR/SR28/reports/sr28fg11.pdf)
and [fruit](https://www.ars.usda.gov/ARSUserFiles/80400535/Data/SR/SR28/reports/sr28fg09.pdf)
tables give 835 µg vitamin A RAE per 100 g carrot and 5.4 g fibre plus
417 mg potassium per 100 g peeled guava. Retail examples make guava worth
checking against frozen berries: [seedless Malaysian guava was listed at
RM8.18/kg](https://jgcj.jayagrocer.com/collections/fruits/products/seedless-guava-mys)
versus the existing berry estimate of ~RM26/kg. These are **purchased-weight**
prices from different sources, not comparable edible-weight costs; a local
receipt and the amount actually eaten decide the real saving.

The catalog's 4,700 mg potassium number is a US Daily Value, not every
adult's requirement. The [NIH adult male Adequate Intake is 3,400
mg/day](https://ods.od.nih.gov/factsheets/Potassium-Consumer/). That is a
reason to check the whole diet before trying to replace every milligram from
one missing potato.

For people with reflux, [NIDDK notes that high-fat foods may trigger
symptoms](https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition)
and that finishing a meal at least three hours before lying down may help.
An oily fish or sauce-heavy restaurant meal can be placed earlier in the day
when timing is flexible.
