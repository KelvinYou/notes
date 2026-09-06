// Shared micronutrient metadata for both the "By food" table (grouped column
// dropdown) and the "Nutrient Lookup" tab (nutrient picker + ranked list).
// Keys match the camelCase fields emitted by scripts/generate-nutrition-docs.mjs
// (snake_case in the YAML source, see repos/notes datasets/nutrition/schema.yaml).

export type NutrientKey =
  | "ironMg"
  | "calciumMg"
  | "magnesiumMg"
  | "zincMg"
  | "potassiumMg"
  | "sodiumMg"
  | "iodineUg"
  | "vitaminAUg"
  | "vitaminDUg"
  | "vitaminEMg"
  | "vitaminKUg"
  | "vitaminB1Mg"
  | "vitaminB2Mg"
  | "vitaminB6Mg"
  | "vitaminB12Ug"
  | "folateUg"
  | "vitaminCMg"
  | "omega3G";

export interface NutrientMeta {
  key: NutrientKey;
  label: string;
  unit: string;
  group: "minerals" | "vitamins";
}

export const NUTRIENTS: NutrientMeta[] = [
  { key: "ironMg", label: "Iron", unit: "mg", group: "minerals" },
  { key: "calciumMg", label: "Calcium", unit: "mg", group: "minerals" },
  { key: "magnesiumMg", label: "Magnesium", unit: "mg", group: "minerals" },
  { key: "zincMg", label: "Zinc", unit: "mg", group: "minerals" },
  { key: "potassiumMg", label: "Potassium", unit: "mg", group: "minerals" },
  { key: "sodiumMg", label: "Sodium", unit: "mg", group: "minerals" },
  { key: "iodineUg", label: "Iodine", unit: "µg", group: "minerals" },
  { key: "vitaminAUg", label: "Vitamin A", unit: "µg RAE", group: "vitamins" },
  { key: "vitaminDUg", label: "Vitamin D", unit: "µg", group: "vitamins" },
  { key: "vitaminEMg", label: "Vitamin E", unit: "mg", group: "vitamins" },
  { key: "vitaminKUg", label: "Vitamin K", unit: "µg", group: "vitamins" },
  { key: "vitaminB1Mg", label: "Vitamin B1 (Thiamin)", unit: "mg", group: "vitamins" },
  { key: "vitaminB2Mg", label: "Vitamin B2 (Riboflavin)", unit: "mg", group: "vitamins" },
  { key: "vitaminB6Mg", label: "Vitamin B6", unit: "mg", group: "vitamins" },
  { key: "vitaminB12Ug", label: "Vitamin B12", unit: "µg", group: "vitamins" },
  { key: "folateUg", label: "Folate", unit: "µg", group: "vitamins" },
  { key: "vitaminCMg", label: "Vitamin C", unit: "mg", group: "vitamins" },
  { key: "omega3G", label: "Omega-3", unit: "g", group: "vitamins" },
];

export const GROUP_LABELS: Record<NutrientMeta["group"], string> = {
  minerals: "Minerals",
  vitamins: "Vitamins",
};

export type RdaReference = Partial<Record<NutrientKey, number>>;
