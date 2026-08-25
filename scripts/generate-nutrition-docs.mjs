#!/usr/bin/env node
// Renders datasets/nutrition/**/*.yaml into read-only MDX catalog pages under
// docs/health/nutrition/catalog/. Mechanical rendering + display-label
// lookups only (category/unit label, id-based joins). No macro or cost
// arithmetic: that's scripts/nutrition.py's job in personal-os (see plan §6 —
// one derivation implementation, not two that can drift apart).
//
// Design goal: a first-time visitor understands the page in one glance —
// plain English, no raw ids/basis codes, no jargon. See personal-os
// docs/plan-public-knowledge-integration.md for the data contract this reads.
//
// Regenerate after editing any datasets/nutrition/**/*.yaml:
//   node scripts/generate-nutrition-docs.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as yaml from "js-yaml";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATASET_DIR = path.join(ROOT, "datasets", "nutrition");
const OUT_DIR = path.join(ROOT, "docs", "health", "nutrition", "catalog");

const CATEGORY_LABEL = {
  proteins: "Protein",
  grains: "Grains",
  dairy: "Dairy",
  snacks: "Snacks & Nuts",
  produce: "Produce",
  supplements: "Supplements",
  pantry: "Pantry & Condiments",
};

function loadYamlDirWithCategory(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"))
    .flatMap((f) => {
      const category = path.basename(f, path.extname(f));
      const doc = yaml.load(fs.readFileSync(path.join(dir, f), "utf8"));
      return Array.isArray(doc) ? doc.map((r) => ({ ...r, _category: category })) : [];
    });
}

const foods = loadYamlDirWithCategory(path.join(DATASET_DIR, "foods"));
const prices = loadYamlDirWithCategory(path.join(DATASET_DIR, "prices"));

const priceByFoodId = new Map(prices.map((p) => [p.food_id, p]));

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Every food name is "<Chinese term> (<English term>)" or already plain
// English with no parens — prefer the bracketed English term, fall back to
// the name as-is. "鸡蛋 (egg)" → "Egg"; "Greek Yogurt" → "Greek Yogurt".
function englishLabel(name) {
  const match = name.match(/\(([^)]+)\)/);
  return capitalize(match ? match[1] : name);
}

// unit_cost_myr is sometimes a string like "~0.99" (estimate marker baked
// into the value itself) — strip it here once, shared by display + sort value.
function priceNumber(price) {
  if (!price) return null;
  const v = parseFloat(String(price.unit_cost_myr).replace(/^~/, ""));
  return Number.isNaN(v) ? null : v;
}

function fmtPrice(price) {
  if (!price) return undefined;
  const est = price.is_estimate ? "~" : "";
  const value = String(price.unit_cost_myr).replace(/^~/, "");
  const unit = price.unit.split(" (")[0].replace(/^per\s+/, "");
  return `${est}RM${value} / ${unit}`;
}

function generatedHeader(sourceCount) {
  return `<!--
GENERATED FILE — do not hand-edit.
Produced by scripts/generate-nutrition-docs.mjs from datasets/nutrition/*.yaml
(${sourceCount} source record(s)). Edit the YAML, then regenerate.
-->
`;
}

function renderFoodsPage() {
  const categories = [...new Set(foods.map((f) => f._category))].sort();
  const rows = foods
    .slice()
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((f) => {
      const price = priceByFoodId.get(f.id);
      return {
        id: f.id,
        name: englishLabel(f.name),
        category: CATEGORY_LABEL[f._category] || f._category,
        protein: f.protein_g,
        carbs: f.carbs_g,
        fat: f.fat_g,
        kcal: f.kcal,
        kcalComputed: !!f.kcal_computed,
        gi: f.glycemic_index,
        price: fmtPrice(price),
        priceValue: priceNumber(price),
      };
    });

  return `---
title: Foods
---

import FoodsExplorer from '@site/src/components/FoodsExplorer';

${generatedHeader(foods.length)}
# Foods

Numbers are per 100g unless the row's price says otherwise (e.g. "per egg").
Calories marked ≈ are computed from protein/carbs/fat, not read off a label.
All of this comes from my own Malaysia grocery shopping, not independently
verified — this is a personal reference, not nutrition advice.

export const foodsData = ${JSON.stringify(rows)};
export const foodCategories = ${JSON.stringify(categories.map((c) => CATEGORY_LABEL[c] || c))};

<FoodsExplorer foods={foodsData} categories={foodCategories} />
`;
}

// Public pages must never carry a personal placeholder token through — those
// belong only in personal-os's private skill references (see plan §9).
function assertNoPlaceholders(content, filename) {
  if (content.includes("{{")) {
    console.error(`✖ ${filename} contains a "{{" placeholder token — public pages must not leak private placeholders.`);
    process.exit(1);
  }
}

const foodsPage = renderFoodsPage();
assertNoPlaceholders(foodsPage, "foods.mdx");

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, "foods.mdx"), foodsPage);
console.log(`Generated ${path.relative(ROOT, OUT_DIR)}/foods.mdx from ${foods.length} foods, ${prices.length} prices.`);
