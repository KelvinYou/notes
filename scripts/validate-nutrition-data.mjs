#!/usr/bin/env node
// Validates datasets/nutrition/**/*.yaml against datasets/nutrition/schema.yaml.
// Checks structure only: required fields, enum membership, id uniqueness,
// ingredient-food_id references, price-food_id references. No macro/cost
// arithmetic here — that's personal-os's scripts/nutrition.py job (see
// personal-os docs/plan-public-knowledge-integration.md §6).
//
// Run: node scripts/validate-nutrition-data.mjs
// Exit code 0 = valid, 1 = at least one error found (all errors printed, not
// just the first).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as yaml from "js-yaml";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATASET_DIR = path.join(ROOT, "datasets", "nutrition");

const schema = yaml.load(fs.readFileSync(path.join(DATASET_DIR, "schema.yaml"), "utf8"));

const errors = [];

function loadYamlDir(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"))
    .flatMap((f) => {
      const doc = yaml.load(fs.readFileSync(path.join(dir, f), "utf8"));
      return Array.isArray(doc) ? doc.map((r) => ({ ...r, _file: f })) : [];
    });
}

function checkRequired(record, required, label) {
  for (const field of required) {
    if (record[field] === undefined || record[field] === null) {
      errors.push(`${label}: missing required field "${field}"`);
    }
  }
}

function checkEnum(value, enumList, label) {
  if (value !== undefined && !enumList.includes(value)) {
    errors.push(`${label}: "${value}" is not one of [${enumList.join(", ")}]`);
  }
}

function checkUniqueIds(records, label) {
  const seen = new Map();
  for (const r of records) {
    if (!r.id) continue;
    if (seen.has(r.id)) {
      errors.push(`${label}: duplicate id "${r.id}" (in ${r._file} and ${seen.get(r.id)})`);
    } else {
      seen.set(r.id, r._file);
    }
  }
}

const foods = loadYamlDir(path.join(DATASET_DIR, "foods"));
const prices = loadYamlDir(path.join(DATASET_DIR, "prices"));

checkUniqueIds(foods, "foods");

const foodIds = new Set(foods.map((f) => f.id));

for (const f of foods) {
  const label = `foods/${f._file}#${f.id ?? "?"}`;
  checkRequired(f, schema.food.required, label);
  checkEnum(f.basis, schema.basis_enum, label);

  const macroExempt = schema.food.macro_required_unless_basis.includes(f.basis);
  if (!macroExempt) {
    checkRequired(f, schema.food.macro_fields, label);
  }
  if (f.basis === "1_serving" && f.serving_g === undefined) {
    errors.push(`${label}: basis "1_serving" requires "serving_g"`);
  }
}

for (const p of prices) {
  const label = `prices/${p._file}#${p.food_id ?? "?"}`;
  checkRequired(p, schema.price.required, label);
  if (p.food_id && !foodIds.has(p.food_id)) {
    errors.push(`${label}: references unknown food_id "${p.food_id}"`);
  }
}

if (errors.length > 0) {
  console.error(`✖ ${errors.length} nutrition dataset error(s):\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`✔ nutrition dataset valid: ${foods.length} foods, ${prices.length} prices.`);
